import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

type FormData = {
  organizationName: string;    // Name of the organization or service
  category: string;            // Resource category (Healthcare, Housing, etc.)
  description: string;         // Detailed description of services
  contactName: string;         // Name of contact person (optional)
  email: string;              // Contact email address
  phone: string;              // Contact phone number
  website: string;            // Organization website
  address: string;            // Street address
  city: string;               // City
  state: string;              // State abbreviation
  zipCode: string;            // ZIP code
  eligibilityRequirements: string; // Who can access this service
  hoursOfOperation: string;   // When the service is available
  languagesSpoken: string[];  // Languages spoken by staff
  tags: string;               // Comma-separated tags for search
  additionalInfo: string;     // Any extra helpful information
  isVerified: boolean;        // User verification of accuracy
};

const categories = [
  'Basic Needs',           // Food, shelter, clothing
  'Healthcare',            // Medical, dental, mental health
  'Housing',               // Emergency shelter, rental assistance
  'Employment',            // Job training, career services
  'Education',             // Tutoring, GED, adult education
  'Legal',                 // Legal aid, court assistance
  'Family & Children',     // Childcare, family services
  'Seniors',               // Services for elderly
  'Veterans',              // Veteran-specific services
  'Immigrants & Refugees', // Immigration assistance
  'Other'                  // Catch-all for other categories
];

const languages = [
  'English',    
  'Spanish',    
  'Mandarin',   
  'Vietnamese', 
  'Arabic',     
  'French',     
  'Tagalog',    
  'Korean',     
  'Russian',    
  'Other'       
];

export default function AddResource() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const {
    register,           // Register form inputs
    handleSubmit,        // Handle form submission
    formState: { errors } // Form validation errors
  } = useForm<FormData>();

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      // Show loading state
      setIsSubmitting(true);
      // Clear any previous errors
      setIsError(false);
      
      // Simulate API call delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create new resource object with form data
      const newResource = {
        ...data,
        languagesSpoken: selectedLanguages,
        id: Date.now(), // Use timestamp as temporary unique ID
        // Combine address fields into single location string
        location: `${data.address}, ${data.city}, ${data.state} ${data.zipCode}`.replace(/, , /g, ', ').replace(/, $/, '')
      };
      
      console.log('Created new resource with ID:', newResource.id);
      console.log('Resource data:', JSON.stringify(newResource, null, 2));
      
      // Redirect to Resources page with the new resource in navigation state
      navigate('/resources', { state: { newResource } });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
    } finally {
      // Always hide loading state
      setIsSubmitting(false);
    }
  };

  // Toggle language selection for multi-select functionality
  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(lang => lang !== language) // Remove if already selected
        : [...prev, language] // Add if not selected
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-900">Add a New Community Resource</h2>
            <p className="mt-1 text-sm text-gray-500">
              Help us expand our community resource directory by submitting information about an organization or service.
            </p>
          </div>

          {isError && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 m-4 rounded">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    There was an error submitting your resource. Please try again later.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              {/* Organization Information */}
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Organization Information</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Basic information about the organization or service.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                    Organization/Service Name *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="organizationName"
                      {...register('organizationName', { required: 'Organization name is required' })}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        errors.organizationName
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.organizationName && (
                      <p className="mt-1 text-sm text-red-600">{errors.organizationName.message}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category *
                  </label>
                  <div className="mt-1">
                    <select
                      id="category"
                      {...register('category', { required: 'Please select a category' })}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description *
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      rows={3}
                      {...register('description', {
                        required: 'Please provide a description',
                        minLength: {
                          value: 30,
                          message: 'Description should be at least 30 characters long'
                        }
                      })}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        errors.description
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="Provide a brief description of the services offered, who they serve, and any other relevant details."
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700">Languages Spoken</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {languages.map(language => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => toggleLanguage(language)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          selectedLanguages.includes(language)
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    {...register('languagesSpoken')}
                    value={selectedLanguages.join(', ')}
                    className="hidden"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-10">
              <div className="mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Information</h3>
                <p className="mt-1 text-sm text-gray-500">
                  How can people get in touch with this organization?
                </p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                    Contact Person
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="contactName"
                      {...register('contactName')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="contact@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        pattern: {
                          value: /^[0-9\-\+\(\)\s]+$/,
                          message: 'Please enter a valid phone number'
                        }
                      })}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        errors.phone
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <div className="mt-1">
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        https://
                      </span>
                      <input
                        type="text"
                        id="website"
                        {...register('website')}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="mt-10">
              <div className="mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Location Information</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Where is this resource located? (If applicable)
                </p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      {...register('address')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="123 Main St"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      {...register('city')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <div className="mt-1">
                    <select
                      id="state"
                      {...register('state')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option value="">Select</option>
                      {['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map(state => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="zipCode"
                      {...register('zipCode', {
                        pattern: {
                          value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                          message: 'Please enter a valid ZIP code'
                        }
                      })}
                      className={`block w-full rounded-md shadow-sm sm:text-sm ${
                        errors.zipCode
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-10">
              <div className="mb-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Additional Information</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Any other details that would be helpful for users to know.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="eligibilityRequirements" className="block text-sm font-medium text-gray-700">
                    Eligibility Requirements
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="eligibilityRequirements"
                      rows={2}
                      {...register('eligibilityRequirements')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Are there any eligibility requirements? (e.g., income limits, residency requirements, etc.)"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="hoursOfOperation" className="block text-sm font-medium text-gray-700">
                    Hours of Operation
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="hoursOfOperation"
                      {...register('hoursOfOperation')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="e.g., Monday-Friday 9am-5pm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                    Tags
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="tags"
                      {...register('tags')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="e.g., food, shelter, legal aid, counseling (separate with commas)"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="additionalInfo"
                      rows={3}
                      {...register('additionalInfo')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Any other information that would be helpful for users to know about this resource."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  id="isVerified"
                  type="checkbox"
                  {...register('isVerified')}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="isVerified" className="ml-2 block text-sm text-gray-700">
                  I verify that the information provided is accurate to the best of my knowledge.
                </label>
              </div>

              <div className="mt-6">
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree that the information provided will be reviewed and may be added to
                  our public directory. We reserve the right to edit or reject submissions that do not meet our
                  guidelines.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Resource'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}