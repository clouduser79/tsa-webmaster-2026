import { Link } from 'react-router-dom';
import { 
  LightBulbIcon,      
  HeartIcon,            
  ArrowRightIcon        
} from '@heroicons/react/24/outline';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section with large title and image */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          {/* Background gradient for visual depth */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-700" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          {/* Left side: Title and description */}
          <div className="bg-blue-600 py-8 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-12 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                About Our Community Resource Hub
              </h2>
              <p className="mt-6 text-xl leading-8 text-blue-100">
                Connecting our community with the resources and support they need to thrive and succeed.
              </p>
              <p className="mt-4 text-lg text-blue-200 leading-relaxed">
                Our mission is to make it easier for individuals and families to find the help they need, when they need it the most.
              </p>
            </div>
          </div>
          {/* Right side: Hero image */}
          <div className="bg-white py-20 px-4 sm:px-6 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="relative">
                {/* Background gradient for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"></div>
                <img
                  className="relative object-cover rounded-xl shadow-2xl w-full h-80 lg:h-96"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  alt="Community members working together"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section with description and action buttons */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            {/* Left side: Mission statement and CTA buttons */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We believe that everyone deserves access to the resources they need to thrive. Our platform connects community members with local organizations, services, and support systems that can help them overcome challenges and achieve their goals.
              </p>
              {/* Action buttons */}
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
            
            {/* Right side: Vision, Values, and Goals */}
            <div className="mt-16 lg:mt-0 lg:ml-8">
              <div className="space-y-4">
                {/* Vision item */}
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

                {/* Values item */}
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

                {/* Goals item */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      {/* Checkmark icon for goals */}
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Our Goals</h3>
                    <p className="mt-2 text-base text-gray-500">
                      To create an intuitive platform that bridges the gap between community members and essential resources, fostering connections and empowering individuals to access the support they need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call-to-Action Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-18 px-4 sm:py-12 sm:px-6 lg:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get involved?</span>
            <span className="block">Join us in strengthening our community.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Whether you're looking for help or want to contribute, we'd love to connect with you.
          </p>
          {/* Final CTA button */}
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