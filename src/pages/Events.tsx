import { useState, useMemo } from 'react';
import {
  CalendarDaysIcon,     // Event calendar icon
  MapPinIcon,           // Location pin icon
  ClockIcon,             // Time/clock icon
  UserGroupIcon,         // Attendees icon
  ArrowRightIcon,         // Navigation arrow
  MagnifyingGlassIcon,    // Search icon
  FunnelIcon             // Filter icon
} from '@heroicons/react/24/outline';
import { getFilteredEvents, formatDate } from '../data/eventsData';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = useMemo(() => getFilteredEvents(), []);

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section with title and description */}
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

      {/* Search and Filter section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search input field */}
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
            
            {/* Category filter dropdown */}
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
          </div>
        </div>
      </div>

      {/* Events Grid - displays filtered events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map(event => (
            // Individual event card
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Event image with category badge */}
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {/* Category badge in top-right corner */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
                {/* Virtual event badge (if applicable) */}
                {event.isVirtual && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                      Virtual Event
                    </span>
                  </div>
                )}
              </div>
              
              {/* Event details section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                
                {/* Event metadata */}
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

                {/* Event organizer and registration */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Organized by {event.organizer}
                  </span>
                </div>

                {/* Registration button */}
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Register Now
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}

          {/* Empty state when no events match filters */}
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
    </div>
  );
};

export default Events;
