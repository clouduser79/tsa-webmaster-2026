import { Link } from 'react-router-dom';
import { 
  LightBulbIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-700" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-blue-600 pt-8 pb-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:pt-8 lg:pb-8 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                About Our Community Resource Hub
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-100">
                Connecting our community with the resources and support they need to thrive.
              </p>
              <div className="mt-8 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl p-8 border-2 border-blue-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <h3 className="text-xl text-gray-800 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Development Team
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 font-medium mb-4">
                    Proudly created and developed by:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white bg-opacity-70 rounded-lg p-3 hover:bg-opacity-100 transition-all duration-200 hover:shadow-md">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-base text-gray-800 font-semibold">Shawn Mankotia</span>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-70 rounded-lg p-3 hover:bg-opacity-100 transition-all duration-200 hover:shadow-md">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-base text-gray-800 font-semibold">Andrew Chait</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-20 px-4 sm:px-6 lg:col-span-3 lg:py-8 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div>
                <img
                  className="rounded-lg shadow-lg w-full"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  alt="Community members working together"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We believe that everyone deserves access to the resources they need to thrive. Our platform connects community members with local organizations, services, and support systems that can help them overcome challenges and achieve their goals.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <Link
                    to="/resources"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Resources
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/add-resource"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Add a Resource
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-8">
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <LightBulbIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h3>
                    <p className="mt-2 text-base text-gray-500">
                      A community where everyone has equal access to the resources and support they need to lead healthy, fulfilling lives.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <HeartIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Our Values</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We are committed to accessibility, inclusivity, and community empowerment in everything we do.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <span className="text-lg font-bold">PHS</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Providence High School</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Shawn Mankotia '28 • Andrew Chait '29
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get involved?</span>
            <span className="block">Join us in strengthening our community.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Whether you're looking for help or want to contribute, we'd love to connect with you.
          </p>
          <Link
            to="/resources"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Get Started
            <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}