import React, { useState } from 'react';
import { User, Mail, Lock, MapPin, Briefcase, Phone} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


import { workLogo } from '../../../assets/images';
import InputField from '../Components/InputField';
import { occupations } from '../../../constants';
import { useRegister } from '../hooks/useAuth';
import { useUser } from '../../../hooks/useUser';
import { useCreateCategory } from '../../ManageCategories/hooks/useCategory';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isProfessional: false,
    title: '',
    occupation: '',
    customOccupation: '',
    location: '',
    contact: { phone: '' },
  });
  const [showOccupationDropdown, setShowOccupationDropdown] = useState(false);
const {mutate,isPending,error} = useRegister();
const {mutate:createCategory} = useCreateCategory();

const {storeUser} = useUser()



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData((prev) => ({
        ...prev,
        contact: { ...prev.contact, phone: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleOccupationSelect = (occupation: string) => {
    setFormData((prev) => ({
      ...prev,
      occupation,
      customOccupation: occupation === 'Other' ? prev.customOccupation : '',
      title: occupation === 'Other' ? prev.customOccupation : occupation,
    }));
    setShowOccupationDropdown(false);
  };

  const handleProfessionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isProfessional = e.target.value === 'professional';
    setFormData((prev) => ({
      ...prev,
      isProfessional,
      title: isProfessional ? prev.title : '',
      occupation: isProfessional ? prev.occupation : '',
      customOccupation: isProfessional ? prev.customOccupation : '',
      location: isProfessional ? prev.location : '',
      contact: isProfessional ? prev.contact : { phone: '' },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      isProfessional: formData.isProfessional,
      ...(formData.isProfessional && {
        title: formData.occupation || formData.customOccupation,
        occupation: formData.occupation === 'Other' ? formData.customOccupation : formData.occupation,
        location: formData.location,
        contact: { phone: formData.contact.phone },
  
      })
    };

    console.log('data',data)
  
    mutate(data, {
      onSuccess: (data) => {
        createCategory({name:data.user.occupation},{
          onSuccess:()=>{
            storeUser(data);

            navigate('/');
          },
        
        })
        
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img className="h-16 w-auto" src={workLogo} alt="WorkConnect Logo" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Join WorkConnect
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create an account to connect with clients or find professionals
        </p>
      </div>

      <div className="mt-8 sm:mx-auto max-w-[94%] w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-xl sm:rounded-lg sm:px-10">
          {error && <div className="text-red-600 text-sm mb-4">{error.message}</div>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sign up as
              </label>
              <div className="mt-2 flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="client"
                    checked={!formData.isProfessional}
                    onChange={handleProfessionalChange}
                    className="focus:ring-[#2563EB] h-4 w-4 text-[#2563EB] border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-600">Client</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="professional"
                    checked={formData.isProfessional}
                    onChange={handleProfessionalChange}
                    className="focus:ring-[#2563EB] h-4 w-4 text-[#2563EB] border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-600">Professional</span>
                </label>
              </div>
            </div>

            {/* Name */}
            <InputField
              label="Full Name"
              name="name"
              type="text"
              icon={User}
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <InputField
              label="Email address"
              name="email"
              type="email"
              icon={Mail}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />

            {/* Password */}
            <InputField
              label="Password"
              name="password"
              type="password"
              icon={Lock}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />

            {formData.isProfessional && (
              <>
                {/* Occupation */}
                <InputField
                  label="Occupation"
                  name="occupation"
                  type="text"
                  icon={Briefcase}
                  placeholder="Select or type your profession"
                  value={formData.occupation}
                  onChange={handleChange}
                  onClick={() => setShowOccupationDropdown(true)}
                  required
                  dropdownOptions={occupations}
                  showDropdown={showOccupationDropdown}
                  onSelect={handleOccupationSelect}
                />

                {/* Custom Occupation */}
                {formData.occupation === 'Other' && (
                  <InputField
                    label="Specify Your Profession"
                    name="customOccupation"
                    type="text"
                    icon={Briefcase}
                    placeholder="Enter your profession"
                    value={formData.customOccupation}
                    onChange={handleChange}
                    required
                  />
                )}

                {/* Location */}
                <InputField
                  label="Location"
                  name="location"
                  type="text"
                  icon={MapPin}
                  placeholder="City, State"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

                {/* Contact Phone */}
                <InputField
                  label="Contact Number"
                  name="phone"
                  type="tel"
                  icon={Phone}
                  placeholder="+1 (555) 123-4567"
                  value={formData.contact.phone}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors duration-200 disabled:bg-gray-400"
              >
                {isPending ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/auth/login"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
              >
                Sign in to your account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;