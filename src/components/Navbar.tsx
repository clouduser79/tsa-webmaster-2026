import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  InformationCircleIcon, 
  PlusCircleIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold">Community Resource Hub</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link to="/resources" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                <MagnifyingGlassIcon className="h-5 w-5 mr-1" />
                Resources
              </Link>
              <Link to="/add-resource" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                <PlusCircleIcon className="h-5 w-5 mr-1" />
                Add Resource
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                <InformationCircleIcon className="h-5 w-5 mr-1" />
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}   