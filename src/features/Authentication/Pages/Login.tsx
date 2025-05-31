import React from 'react';
import { Lock, Mail, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { workLogo } from '../../../assets/images';
import { useLogin } from '../hooks/useAuth';
import { useUser } from '../../../hooks/useUser'; 

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { mutate, isPending, error } = useLogin();
  const { storeUser } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { email: email, password };
    console.log('Login data:', data);

    mutate(data, {
      onSuccess: (response) => {

        storeUser(response);
        navigate('/');
      },
      onError: (err) => {
        console.error('Login error:', err);
 
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img className="h-16 w-auto" src={workLogo} alt="WorkConnect Logo" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome back to WorkConnect
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Connect with your professional community
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="text-red-600 text-sm mb-4">
              {error.message || 'Login failed. Please check your credentials.'}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-[#2563EB] focus:border-[#2563EB] outline-0 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:ring-[#2563EB] outline-0 focus:border-[#2563EB] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isPending}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] transition-colors duration-200 disabled:bg-gray-400"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LogIn className="h-5 w-5 text-white group-hover:text-blue-200 transition-colors duration-200" />
                </span>
                {isPending ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  New to WorkConnect?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/auth/signup"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
              >
                Create your professional account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;