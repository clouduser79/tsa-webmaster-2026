import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CalendarDaysIcon, 
  UsersIcon, 
  MapPinIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';

type ResourceCardProps = {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
};

const ResourceCard = ({ title, description, category, icon }: ResourceCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
          {icon}
        </div>
        <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">{category}</span>
        <Link to="/resources" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
          View <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
);

const Home = () => {
  const featuredResources = [
    {
      title: 'Food Bank Network',
      description: 'Access to free groceries and meals for families in need across our community.',
      category: 'Basic Needs',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
    },
    {
      title: 'Job Training Center',
      description: 'Free job training programs and career development resources for unemployed individuals.',
      category: 'Employment',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
    },
    {
      title: 'Health Clinic',
      description: 'Affordable healthcare services including check-ups, immunizations, and basic medical care.',
      category: 'Healthcare',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Connecting Our Community
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                Find local resources, support services, and community programs all in one place.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/resources"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                >
                  Explore Resources
                </Link>
                <Link
                  to="/add-resource"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                >
                  Add a Resource
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Community Events</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'NC State Career Expo 2024', date: 'Sep 9, 2024', location: 'Durham, NC' },
                      { title: 'Food Bank Mobile Distribution', date: 'Feb 15, 2024', location: 'Across NC' },
                      { title: 'NAMI Family Support Group', date: 'Feb 20, 2024', location: 'Smithfield, NC' },
                    ].map((event, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-md p-2">
                          <CalendarDaysIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">{event.title}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarDaysIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {event.date}
                            <MapPinIcon className="ml-3 flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link to="/events" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      View all events <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Community Resources
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Discover essential services and support available in our community
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredResources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                description={resource.description}
                category={resource.category}
                icon={resource.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Events */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join community workshops, support groups, and resource fairs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'NC State Career Expo 2024',
                date: 'Sep 9, 2024',
                time: '10:00 AM - 3:00 PM',
                location: 'Sheraton Imperial Hotel, Durham, NC',
                category: 'Job Fair',
                image: '/events/job-fair.png'
              },
              {
                title: 'Food Bank Mobile Distribution',
                date: 'Feb 15, 2024',
                time: '9:00 AM - 12:00 PM',
                location: 'Various locations across NC',
                category: 'Food Distribution',
                image: '/events/food-distribution.png'
              },
              {
                title: 'NAMI Family Support Group',
                date: 'Feb 20, 2024',
                time: '6:00 PM - 7:30 PM',
                location: 'NAMI Johnston County, Smithfield, NC',
                category: 'Health',
                image: '/events/health-wellness.png'
              }
            ].map((event) => (
              <div key={event.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {event.category}
                    </span>
                    <span className="text-xs text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.time}</p>
                  <p className="text-sm text-gray-500 mb-3">{event.location}</p>
                  <Link
                    to="/events"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    View all events <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View All Events
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Getting help or contributing to our community has never been easier
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Find Resources',
                  description: 'Search our comprehensive directory of community resources and services.',
                  icon: MagnifyingGlassIcon,
                },
                {
                  name: 'Get Connected',
                  description: 'Reach out to service providers and organizations that can help.',
                  icon: UsersIcon,
                },
                {
                  name: 'Contribute',
                  description: 'Know a resource we should add? Submit it to help others in the community.',
                  icon: PlusCircleIcon,
                },
              ].map((step) => (
                <div key={step.name} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;