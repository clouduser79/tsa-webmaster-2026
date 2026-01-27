import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  organizer: string;
  attendees: number;
  maxAttendees: number;
  image: string;
  isVirtual: boolean;
  registrationRequired: boolean;
}

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events: Event[] = [
    {
      id: 1,
      title: 'NC State Career Expo 2024',
      description: 'Connect with North Carolina state agencies and universities. Explore career opportunities in state government, entry-level positions, and internships.',
      date: '2024-09-09',
      time: '10:00 AM - 3:00 PM',
      location: 'Sheraton Imperial Hotel, Durham, NC',
      category: 'Job Fair',
      organizer: 'NC Office of Human Resources',
      attendees: 150,
      maxAttendees: 500,
      image: '/tsa-webmaster-2026/events/job-fair.svg',
      isVirtual: false,
      registrationRequired: false
    },
    {
      id: 2,
      title: 'Food Bank Mobile Distribution',
      description: 'Monthly mobile food distribution for families in need. Fresh produce, canned goods, and essential items available for central and eastern NC residents.',
      date: '2024-02-15',
      time: '9:00 AM - 12:00 PM',
      location: 'Various locations across NC',
      category: 'Food Distribution',
      organizer: 'Food Bank of Central & Eastern NC',
      attendees: 200,
      maxAttendees: 500,
      image: '/tsa-webmaster-2026/events/food-distribution.svg',
      isVirtual: false,
      registrationRequired: false
    },
    {
      id: 3,
      title: 'NAMI Family Support Group',
      description: 'Free mental health support group for families and caregivers of individuals with mental illness. Share experiences and find community resources.',
      date: '2024-02-20',
      time: '6:00 PM - 7:30 PM',
      location: 'NAMI Johnston County, Smithfield, NC',
      category: 'Health',
      organizer: 'NAMI North Carolina',
      attendees: 15,
      maxAttendees: 30,
      image: '/tsa-webmaster-2026/events/health-wellness.svg',
      isVirtual: false,
      registrationRequired: false
    },
    {
      id: 4,
      title: 'Connection Recovery Support Group',
      description: 'Peer-led support group for adults living with mental illness. Safe space to share experiences and recovery strategies.',
      date: '2024-02-22',
      time: '5:30 PM - 7:00 PM',
      location: 'NAMI High Country, Boone, NC',
      category: 'Health',
      organizer: 'NAMI North Carolina',
      attendees: 12,
      maxAttendees: 25,
      image: '/tsa-webmaster-2026/events/health-wellness.svg',
      isVirtual: false,
      registrationRequired: false
    },
    {
      id: 5,
      title: 'Community Resource Workshop',
      description: 'Learn about SNAP benefits, housing assistance, healthcare resources, and other support programs available to North Carolina residents.',
      date: '2024-03-01',
      time: '10:00 AM - 12:00 PM',
      location: 'Raleigh Community Center, Raleigh, NC',
      category: 'Resource Fair',
      organizer: 'Community Resource Hub',
      attendees: 45,
      maxAttendees: 100,
      image: '/tsa-webmaster-2026/events/resource-fair.svg',
      isVirtual: false,
      registrationRequired: true
    },
    {
      id: 6,
      title: 'Psychiatric Advanced Directive Training',
      description: 'Free training on creating psychiatric advanced directives. Learn how to plan ahead for mental health treatment preferences.',
      date: '2024-03-10',
      time: '2:00 PM - 4:00 PM',
      location: 'Online - Zoom',
      category: 'Workshop',
      organizer: 'NAMI North Carolina',
      attendees: 25,
      maxAttendees: 50,
      image: '/tsa-webmaster-2026/events/workshop.svg',
      isVirtual: true,
      registrationRequired: true
    }
  ];

  const categories = ['all', 'Resource Fair', 'Workshop', 'Food Distribution', 'Job Fair', 'Health']; 

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Resource Fair': 'bg-blue-100 text-blue-800',
      'Workshop': 'bg-green-100 text-green-800',
      'Food Distribution': 'bg-orange-100 text-orange-800',
      'Job Fair': 'bg-purple-100 text-purple-800',
      'Health': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Community Events
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Discover workshops, support groups, and resource fairs happening in your community
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <Link
              to="/add-event"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PlusCircleIcon className="h-5 w-5 mr-2" />
              Add Event
            </Link>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                {event.isVirtual && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                      Virtual Event
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDaysIcon className="h-4 w-4 mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <UserGroupIcon className="h-4 w-4 mr-2" />
                    {event.attendees}/{event.maxAttendees} attending
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Organized by {event.organizer}
                  </span>
                  {event.registrationRequired && (
                    <span className="text-xs text-blue-600 font-medium">
                      Registration Required
                    </span>
                  )}
                </div>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Register Now
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <CalendarDaysIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No events found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
