import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Resource = {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  tags: string[];
};

const categories = [
  'All Categories',
  'Basic Needs',
  'Healthcare',
  'Housing',
  'Employment',
  'Education',
  'Legal',
  'Family & Children',
  'Seniors',
  'Veterans',
  'Immigrants & Refugees'
];

const mockResources: Resource[] = [
  {
    id: 1,
    name: 'Food Bank of Central & Eastern North Carolina',
    category: 'Basic Needs',
    description: 'Provides emergency food assistance to individuals and families in need across central and eastern NC. Multiple distribution locations throughout the region.',
    location: '1924 Capital Blvd, Raleigh, NC 27604',
    phone: '(919) 875-0707',
    email: 'info@foodbankcenc.org',
    website: 'www.foodbankcenc.org',
    tags: ['food', 'emergency', 'groceries']
  },
  {
    id: 2,
    name: 'NC Community Health Centers Association',
    category: 'Healthcare',
    description: 'Low-cost medical, dental, and mental health services for uninsured and underinsured individuals. Multiple locations across North Carolina.',
    location: 'Multiple locations statewide, NC',
    phone: '(919) 855-4800',
    email: 'info@ncchca.org',
    website: 'www.ncchca.org',
    tags: ['medical', 'dental', 'mental health', 'sliding scale']
  },
  {
    id: 3,
    name: 'NC Works Career Center',
    category: 'Employment',
    description: 'Free job training programs, career counseling, and employment services. Multiple locations throughout North Carolina.',
    location: 'Multiple locations statewide, NC',
    phone: '(888) 722-1544',
    email: 'info@ncworks.gov',
    website: 'www.ncworks.gov',
    tags: ['job training', 'career development', 'certification']
  },
  {
    id: 4,
    name: 'NC Housing Finance Agency',
    category: 'Housing',
    description: 'Emergency shelter resources, rental assistance programs, and housing counseling services for North Carolina residents.',
    location: '3508 Bush St, Raleigh, NC 27609',
    phone: '(919) 877-5700',
    email: 'info@nchfa.com',
    website: 'www.nchfa.com',
    tags: ['emergency shelter', 'rental assistance', 'housing counseling']
  },
  {
    id: 5,
    name: 'Legal Aid of North Carolina',
    category: 'Legal',
    description: 'Free legal assistance for low-income individuals in civil matters including housing, family law, public benefits, and consumer issues.',
    location: '224 S Dawson St, Raleigh, NC 27601',
    phone: '(866) 219-5262',
    email: 'help@legalaidnc.org',
    website: 'www.legalaidnc.org',
    tags: ['legal assistance', 'free', 'civil matters']
  },
  {
    id: 6,
    name: 'Boys & Girls Clubs of North Carolina',
    category: 'Family & Children',
    description: 'After-school programs, tutoring, and recreational activities for children and teens. Multiple locations across North Carolina.',
    location: 'Multiple locations statewide, NC',
    phone: '(704) 377-1100',
    email: 'info@bgcnc.org',
    website: 'www.bgcnc.org',
    tags: ['after-school', 'tutoring', 'recreation', 'youth']
  },
  {
    id: 7,
    name: 'NC Department of Health and Human Services',
    category: 'Healthcare',
    description: 'State health services including Medicaid enrollment, SNAP benefits, and public health programs for North Carolina residents.',
    location: '2001 Mail Service Center, Raleigh, NC 27699',
    phone: '(919) 855-4800',
    email: 'dhhs.info@dhhs.nc.gov',
    website: 'www.ncdhhs.gov',
    tags: ['medicaid', 'snap', 'public benefits', 'health services']
  },
  {
    id: 8,
    name: 'NC Department of Public Instruction',
    category: 'Education',
    description: 'Educational resources, adult education programs, and GED preparation services available throughout North Carolina.',
    location: '301 N Wilmington St, Raleigh, NC 27601',
    phone: '(984) 236-2100',
    email: 'public.instruction@dpi.nc.gov',
    website: 'www.dpi.nc.gov',
    tags: ['education', 'adult education', 'GED', 'learning']
  },
  {
    id: 9,
    name: 'Meals on Wheels North Carolina',
    category: 'Seniors',
    description: 'Home-delivered meals and nutrition services for seniors and homebound individuals across North Carolina.',
    location: 'Multiple locations statewide, NC',
    phone: '(919) 833-1749',
    email: 'info@mownc.org',
    website: 'www.mownc.org',
    tags: ['seniors', 'meals', 'nutrition', 'home delivery']
  },
  {
    id: 10,
    name: 'NC Division of Veterans Affairs',
    category: 'Veterans',
    description: 'Services and benefits for veterans including healthcare, employment assistance, and housing support throughout North Carolina.',
    location: '325 N Salisbury St, Raleigh, NC 27603',
    phone: '(919) 733-3851',
    email: 'ncveterans@nc.gov',
    website: 'www.milvets.nc.gov',
    tags: ['veterans', 'benefits', 'healthcare', 'employment']
  },
  {
    id: 11,
    name: 'NC Immigrant Rights Project',
    category: 'Immigrants & Refugees',
    description: 'Legal assistance, resources, and support services for immigrants and refugees in North Carolina.',
    location: '201 W Main St, Durham, NC 27701',
    phone: '(919) 688-5596',
    email: 'info@ncimmigrantrights.org',
    website: 'www.ncimmigrantrights.org',
    tags: ['immigrants', 'refugees', 'legal assistance', 'support']
  },
  {
    id: 12,
    name: 'Crisis Assistance Ministry',
    category: 'Basic Needs',
    description: 'Emergency financial assistance, utility bill help, and basic needs support for families in crisis across North Carolina.',
    location: '500-A Spratt St, Charlotte, NC 28206',
    phone: '(704) 371-3001',
    email: 'info@crisisassistance.org',
    website: 'www.crisisassistance.org',
    tags: ['emergency assistance', 'utilities', 'financial help', 'crisis']
  }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filters, setFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const allTags = Array.from(new Set(mockResources.flatMap(resource => resource.tags)));

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || resource.category === selectedCategory;
    
    const matchesFilters = filters.length === 0 || 
      filters.every(filter => resource.tags.includes(filter));
    
    return matchesSearch && matchesCategory && matchesFilters;
  });

  const toggleFilter = (tag: string) => {
    setFilters(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setFilters([]);
    setSelectedCategory('All Categories');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filter Bar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <h1 className="text-2xl font-bold text-gray-900">Community Resources</h1>
            
            <div className="relative flex-1 max-w-2xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FunnelIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" />
              Filters
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Filter Resources</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear all filters
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleFilter(tag)}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        filters.includes(tag)
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                      {filters.includes(tag) && (
                        <XMarkIcon className="ml-1.5 h-3.5 w-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Active Filters */}
      {(filters.length > 0 || selectedCategory !== 'All Categories') && (
        <div className="bg-blue-50">
          <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Filters:</span>
              
              {selectedCategory !== 'All Categories' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('All Categories')}
                    className="ml-1.5 inline-flex items-center justify-center flex-shrink-0 h-4 w-4 text-blue-800 hover:bg-blue-200 rounded-full focus:outline-none"
                  >
                    <span className="sr-only">Remove filter</span>
                    <XMarkIcon className="h-2.5 w-2.5" />
                  </button>
                </span>
              )}
              
              {filters.map((filter) => (
                <span key={filter} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {filter}
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="ml-1.5 inline-flex items-center justify-center flex-shrink-0 h-4 w-4 text-blue-800 hover:bg-blue-200 rounded-full focus:outline-none"
                  >
                    <span className="sr-only">Remove filter</span>
                    <XMarkIcon className="h-2.5 w-2.5" />
                  </button>
                </span>
              ))}
              
              <button
                onClick={clearFilters}
                className="ml-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{filteredResources.length}</span> resources
          </p>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option>Most Relevant</option>
              <option>Name (A-Z)</option>
              <option>Category</option>
            </select>
          </div>
        </div>

        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No resources found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <XMarkIcon className="-ml-1 mr-2 h-5 w-5" />
                Clear all filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {resource.category}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{resource.name}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{resource.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            filters.includes(tag) 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <div className="flex items-center text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {resource.location}
                    </div>
                    <div className="mt-2 flex justify-between">
                      <a
                        href={`tel:${resource.phone}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        {resource.phone}
                      </a>
                      <a
                        href={`mailto:${resource.email}`}
                        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Email
                      </a>
                      <a
                        href={`https://${resource.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
