import { Link } from 'react-router-dom';
import { 
  LightBulbIcon,
  ChartBarIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Project Lead',
    bio: 'Passionate about connecting communities with the resources they need to thrive.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Jamie Smith',
    role: 'UX Designer',
    bio: 'Focused on creating intuitive and accessible experiences for all users.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Taylor Wilson',
    role: 'Developer',
    bio: 'Building the technical foundation to make community resources easily discoverable.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const stats = [
  { id: 1, name: 'Resources Listed', value: '250+' },
  { id: 2, name: 'Community Partners', value: '45+' },
  { id: 3, name: 'Active Users', value: '5,000+' },
  { id: 4, name: 'Areas Served', value: '12' }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-700" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                About Our Community Resource Hub
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-100">
                Connecting our community with the resources and support they need to thrive.
              </p>
              <p className="mt-4 text-base text-blue-200">
                Our mission is to make it easier for individuals and families to find the help they need, when they need it most.
              </p>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="relative aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="object-cover rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  alt="Community members working together"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <ChartBarIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{stat.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-3xl font-extrabold text-blue-600">{stat.value}</dd>
                </div>
              ))}
            </dl>
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
            <div className="mt-12 lg:mt-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
              <p className="text-xl text-gray-500">
                Meet the dedicated individuals working to connect our community with vital resources.
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              {teamMembers.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg mx-auto h-48 w-48"
                        src={person.image}
                        alt={person.name}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-blue-600">{person.role}</p>
                      </div>
                      <div className="text-base text-gray-500">
                        <p>{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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