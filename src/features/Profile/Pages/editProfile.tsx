import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
   Briefcase, CheckCircle, 
  Award,  Edit, X, Plus, Trash2 
} from 'lucide-react';
import { person1, person2 } from '../../../assets/images';
import { useGetProfileByName, useUpdateProfile } from '../hooks/useProfilehook';
import { useUser } from '../../../hooks/useUser';


const EditProfile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const { data: professional, isLoading } = useGetProfileByName(name || '');
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
  const { token, storeUser } = useUser();
  
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email:'',
    occupation: '',
    location: '',
    yearsExperience: 0,
    about: '',
    services: [] as string[],
    certifications: [] as string[],
    otherServices: [] as string[],
    contact: {
      phone: '',

    },
    image: '',
    coverImage: '',
    gallery: [] as string[],
  });
  
  const [newService, setNewService] = useState('');
  const [newCertification, setNewCertification] = useState('');
  const [newGalleryImage, setNewGalleryImage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (professional) {
      setFormData({
        name: professional.name || '',
        title: professional.title || '',
        email: professional.contact?.email || '',
        occupation: professional.occupation || '',
        location: professional.location || '',
        yearsExperience: professional.yearsExperience || 0,
        about: professional.about || '',
        services: professional.services || [],
        certifications: professional.certifications || [],
        otherServices: professional.otherServices || [],
        contact: {
          phone: professional.contact?.phone || '',
        },
        image: professional.image || '',
        coverImage: professional.coverImage || '',
        gallery: professional.gallery || [],
      });
    }
  }, [professional]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      contact: { ...prev.contact, [name]: value }
    }));
  };

  const handleAddService = () => {
    if (newService.trim() && !formData.otherServices.includes(newService.trim())) {
      setFormData(prev => ({
        ...prev,
        otherServices: [...prev.otherServices, newService.trim()]
      }));
      setNewService('');
    }
  };

  const handleRemoveService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      otherServices: prev.otherServices.filter(s => s !== service)
    }));
  };

  const handleAddCertification = () => {
    if (newCertification.trim() && !formData.certifications.includes(newCertification.trim())) {
      setFormData(prev => ({
        ...prev,
        certifications: [...prev.certifications, newCertification.trim()]
      }));
      setNewCertification('');
    }
  };

  const handleRemoveCertification = (cert: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c !== cert)
    }));
  };

  const handleAddGalleryImage = () => {
    if (newGalleryImage.trim() && !formData.gallery.includes(newGalleryImage.trim())) {
      setFormData(prev => ({
        ...prev,
        gallery: [...prev.gallery, newGalleryImage.trim()]
      }));
      setNewGalleryImage('');
    }
  };

  const handleRemoveGalleryImage = (image: string) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter(img => img !== image)
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'cover' | 'gallery') => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const result = reader.result as string;
        if (type === 'profile') {
          setFormData(prev => ({ ...prev, image: result }));
        } else if (type === 'cover') {
          setFormData(prev => ({ ...prev, coverImage: result }));
        } else {
          setNewGalleryImage(result);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData, {
      onSuccess: (updatedUser) => {
        console.log('updated user',updatedUser)
        storeUser({ token: token!, user: updatedUser.user });
        navigate(`/profile/${updatedUser.user.name}`);
      },
      onError: (error) => {
   
        console.error(error);
      }
    });
  };

  if (isLoading) return <div className="flex justify-center py-12">Loading profile...</div>;
  if (!professional) return <div className="flex justify-center py-12">Profile not found</div>;

  return (
    <div className="bg-[#F9FAFB] min-h-screen pb-12">
      {/* Hidden file inputs */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={(e) => handleImageUpload(e, 'profile')}
        accept="image/*"
        className="hidden"
      />
      <input 
        type="file" 
        ref={coverInputRef}
        onChange={(e) => handleImageUpload(e, 'cover')}
        accept="image/*"
        className="hidden"
      />
      <input 
        type="file" 
        ref={galleryInputRef}
        onChange={(e) => handleImageUpload(e, 'gallery')}
        accept="image/*"
        className="hidden"
      />

      {/* Cover Photo */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl h-48 md:h-64 bg-gray-300 relative group">
          <img 
            src={formData.coverImage || person2} 
            className="w-full h-full object-cover"
            alt="Cover"
          />
          <button 
            onClick={() => coverInputRef.current?.click()}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-6xl">
          <div className="relative -mt-16 ml-4 md:ml-12 w-32 h-32 group">
            <img 
              src={formData.image || person1} 
              className="w-full h-full rounded-full border-4 border-white bg-white object-cover shadow-lg"
              alt="Profile"
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-2 right-2 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Edit className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="flex justify-center px-4 sm:px-6 mt-6">
        <form onSubmit={handleSubmit} className="w-full max-w-6xl space-y-6">
          {/* Basic Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <input
                  type="number"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.contact.phone}
                  onChange={handleContactChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows={5}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Tell clients about yourself, your experience, and your approach..."
            />
          </div>

          {/* Services Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Briefcase className="h-6 w-6 text-[#2563EB] mr-2" />
              Services Offered
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.otherServices.map(service => (
                <span 
                  key={service} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#F9FAFB] text-gray-800 border border-gray-200"
                >
                  {service}
                  <button 
                    type="button"
                    onClick={() => handleRemoveService(service)}
                    className="ml-1 text-gray-500 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md"
                placeholder="Add a new service"
              />
              <button
                type="button"
                onClick={handleAddService}
                className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Award className="h-6 w-6 text-[#2563EB] mr-2" />
              Certifications
            </h2>
            <ul className="space-y-3 mb-4">
              {formData.certifications.map(cert => (
                <li key={cert} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{cert}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => handleRemoveCertification(cert)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <input
                type="text"
                value={newCertification}
                onChange={(e) => setNewCertification(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md"
                placeholder="Add a new certification"
              />
              <button
                type="button"
                onClick={handleAddCertification}
                className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              {formData.gallery.map((image, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
                  <img 
                    src={image} 
                    className="w-full h-full object-cover"
                    alt={`Project ${index + 1}`}
                  />
                  <button 
                    type="button"
                    onClick={() => handleRemoveGalleryImage(image)}
                    className="absolute top-2 right-2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => galleryInputRef.current?.click()}
                className="px-4 py-2 bg-[#2563EB] text-white rounded-md hover:bg-blue-700"
              >
                Upload New Image
              </button>
              {newGalleryImage && (
                <button
                  type="button"
                  onClick={handleAddGalleryImage}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Add to Gallery
                </button>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUpdating}
              className="px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isUpdating ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;