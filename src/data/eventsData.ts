export interface Event {
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
  registrationLink: string;
}

// Generate random image URL
export const getRandomImage = (seed: number) => {
  return `https://picsum.photos/seed/${seed}/400/300`;
};

export const initialEvents: Event[] = [
  {
    id: 1,
    title: 'NC State Career Expo 2026',
    description: 'Connect with North Carolina state agencies and universities. Explore career opportunities in state government, entry-level positions, and internships.',
    date: '2026-02-15',
    time: '10:00 AM - 3:00 PM',
    location: 'Sheraton Imperial Hotel, Durham, NC',
    category: 'Job Fair',
    organizer: 'NC Office of Human Resources',
    attendees: 150,
    maxAttendees: 500,
    image: getRandomImage(1),
    isVirtual: false,
    registrationLink: 'https://oshr.nc.gov/careerexpo25'
  },
  {
    id: 2,
    title: 'Food Bank Mobile Distribution',
    description: 'Monthly mobile food distribution for families in need. Fresh produce, canned goods, and essential items available for central and eastern NC residents.',
    date: '2026-03-10',
    time: '9:00 AM - 12:00 PM',
    location: 'Various locations across NC',
    category: 'Food Distribution',
    organizer: 'Food Bank of Central & Eastern NC',
    attendees: 200,
    maxAttendees: 500,
    image: getRandomImage(2),
    isVirtual: false,
    registrationLink: 'https://foodbankcenc.org/events'
  },
  {
    id: 3,
    title: 'NAMI Family Support Group',
    description: 'Free mental health support group for families and caregivers of individuals with mental illness. Share experiences and find community resources.',
    date: '2026-02-28',
    time: '6:00 PM - 7:30 PM',
    location: 'NAMI Johnston County, Smithfield, NC',
    category: 'Health',
    organizer: 'NAMI North Carolina',
    attendees: 15,
    maxAttendees: 30,
    image: getRandomImage(3),
    isVirtual: false,
    registrationLink: 'https://nami-wake.org/support-and-education/support-groups'
  },
  {
    id: 4,
    title: 'Connection Recovery Support Group',
    description: 'Peer-led support group for adults living with mental illness. Safe space to share experiences and recovery strategies.',
    date: '2026-03-05',
    time: '5:30 PM - 7:00 PM',
    location: 'NAMI High Country, Boone, NC',
    category: 'Health',
    organizer: 'NAMI North Carolina',
    attendees: 12,
    maxAttendees: 25,
    image: getRandomImage(4),
    isVirtual: false,
    registrationLink: 'https://namicharlotte.org/support-and-education/support-groups'
  },
  {
    id: 5,
    title: 'Community Resource Workshop',
    description: 'Learn about SNAP benefits, housing assistance, healthcare resources, and other support programs available to North Carolina residents.',
    date: '2026-03-15',
    time: '10:00 AM - 12:00 PM',
    location: 'Raleigh Community Center, Raleigh, NC',
    category: 'Resource Fair',
    organizer: 'Community Resource Hub',
    attendees: 45,
    maxAttendees: 100,
    image: getRandomImage(5),
    isVirtual: false,
    registrationLink: 'https://www.ncdhhs.gov/events'
  },
  {
    id: 6,
    title: 'Psychiatric Advanced Directive Training',
    description: 'Free training on creating psychiatric advanced directives. Learn how to plan ahead for mental health treatment preferences.',
    date: '2026-03-20',
    time: '2:00 PM - 4:00 PM',
    location: 'Online - Zoom',
    category: 'Workshop',
    organizer: 'NAMI North Carolina',
    attendees: 25,
    maxAttendees: 50,
    image: getRandomImage(6),
    isVirtual: true,
    registrationLink: 'https://ncmhfa.unc.edu/calendar'
  }
];

// Backup events for replacement
export const backupEvents: Event[] = [
  {
    id: 7,
    title: 'Spring Job Fair 2026',
    description: 'Meet with local employers and explore job opportunities across various industries. Bring your resume and dress professionally.',
    date: '2026-04-05',
    time: '11:00 AM - 4:00 PM',
    location: 'Charlotte Convention Center, Charlotte, NC',
    category: 'Job Fair',
    organizer: 'Charlotte Chamber of Commerce',
    attendees: 0,
    maxAttendees: 300,
    image: getRandomImage(7),
    isVirtual: false,
    registrationLink: 'https://www.eventbrite.com/e/charlotte-job-fair-tickets-783506187097'
  },
  {
    id: 8,
    title: 'Mental Health First Aid Training',
    description: 'Learn how to identify, understand, and respond to signs of mental health and substance use challenges in your community.',
    date: '2026-04-12',
    time: '9:00 AM - 5:00 PM',
    location: 'Greensboro Community Center, Greensboro, NC',
    category: 'Workshop',
    organizer: 'Mental Health America of NC',
    attendees: 0,
    maxAttendees: 40,
    image: getRandomImage(8),
    isVirtual: false,
    registrationLink: 'https://ncmhfa.unc.edu/calendar'
  },
  {
    id: 9,
    title: 'Community Health Fair',
    description: 'Free health screenings, vaccinations, and wellness resources. Learn about preventive care and healthy living.',
    date: '2026-04-18',
    time: '10:00 AM - 2:00 PM',
    location: 'Asheville Recreation Center, Asheville, NC',
    category: 'Health',
    organizer: 'Mountain Area Health Education Center',
    attendees: 0,
    maxAttendees: 200,
    image: getRandomImage(9),
    isVirtual: false,
    registrationLink: 'https://mahec.net/home/locations'
  },
  {
    id: 10,
    title: 'Housing Assistance Workshop',
    description: 'Get help with housing applications, rental assistance programs, and learn about affordable housing options in your area.',
    date: '2026-04-25',
    time: '1:00 PM - 3:00 PM',
    location: 'Winston-Salem Housing Authority, Winston-Salem, NC',
    category: 'Resource Fair',
    organizer: 'Winston-Salem Housing Authority',
    attendees: 0,
    maxAttendees: 75,
    image: getRandomImage(10),
    isVirtual: false,
    registrationLink: 'https://haws.org/m/create-account'
  },
  {
    id: 11,
    title: 'Virtual Career Development Series',
    description: 'Online workshops covering resume writing, interview skills, networking strategies, and career advancement tips.',
    date: '2026-05-02',
    time: '6:00 PM - 7:30 PM',
    location: 'Online - Microsoft Teams',
    category: 'Workshop',
    organizer: 'NC Works Career Center',
    attendees: 0,
    maxAttendees: 100,
    image: getRandomImage(11),
    isVirtual: true,
    registrationLink: 'https://www.ncworks.gov'
  },
  {
    id: 12,
    title: 'Senior Resource Expo',
    description: 'Resources and services for seniors including healthcare, transportation, meal programs, and social activities.',
    date: '2026-05-10',
    time: '9:00 AM - 1:00 PM',
    location: 'Fayetteville Senior Center, Fayetteville, NC',
    category: 'Resource Fair',
    organizer: 'Cumberland County Aging Services',
    attendees: 0,
    maxAttendees: 150,
    image: getRandomImage(12),
    isVirtual: false,
    registrationLink: 'https://www.ncdhhs.gov/events'
  },
  {
    id: 13,
    title: 'Farmers Market Opening Day',
    description: 'Celebrate the opening of the spring farmers market with fresh produce, local vendors, and community activities.',
    date: '2026-05-15',
    time: '8:00 AM - 12:00 PM',
    location: 'Downtown Farmers Market, Durham, NC',
    category: 'Food Distribution',
    organizer: 'Durham Farmers Market',
    attendees: 0,
    maxAttendees: 500,
    image: getRandomImage(13),
    isVirtual: false,
    registrationLink: 'https://www.durhamfarmersmarket.com'
  },
  {
    id: 14,
    title: 'Youth Mental Health Summit',
    description: 'A day-long event focused on youth mental health awareness, resources, and support for teens and young adults.',
    date: '2026-05-20',
    time: '10:00 AM - 4:00 PM',
    location: 'Raleigh Convention Center, Raleigh, NC',
    category: 'Health',
    organizer: 'NC Department of Health and Human Services',
    attendees: 0,
    maxAttendees: 400,
    image: getRandomImage(14),
    isVirtual: false,
    registrationLink: 'https://resilientnorthcarolina.org/event/youth-of-nc-youth-resilience-summit'
  },
  {
    id: 15,
    title: 'Small Business Resource Fair',
    description: 'Connect with resources for starting or growing your business including loans, grants, mentorship, and networking opportunities.',
    date: '2026-05-28',
    time: '2:00 PM - 6:00 PM',
    location: 'Research Triangle Park, Durham, NC',
    category: 'Resource Fair',
    organizer: 'NC Small Business Center Network',
    attendees: 0,
    maxAttendees: 200,
    image: getRandomImage(15),
    isVirtual: false,
    registrationLink: 'https://www.ncdhhs.gov/events'
  }
];

// Utility function to get filtered events (future events with backup replacement)
export const getFilteredEvents = (): Event[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const validEvents: Event[] = [];
  const usedBackupIndices = new Set<number>();

  // Process initial events
  for (const event of initialEvents) {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    
    if (eventDate >= today) {
      // Event is still in the future, keep it
      validEvents.push(event);
    } else {
      // Event is outdated, find a replacement from backup events
      for (let i = 0; i < backupEvents.length; i++) {
        if (!usedBackupIndices.has(i)) {
          const backupEvent = backupEvents[i];
          const backupDate = new Date(backupEvent.date);
          backupDate.setHours(0, 0, 0, 0);
          
          // Only use backup if it's in the future
          if (backupDate >= today) {
            validEvents.push(backupEvent);
            usedBackupIndices.add(i);
            break;
          }
        }
      }
      // If no valid backup found, skip this event (don't show outdated events)
    }
  }

  // Add any remaining unused backup events that are in the future
  for (let i = 0; i < backupEvents.length; i++) {
    if (!usedBackupIndices.has(i)) {
      const backupEvent = backupEvents[i];
      const backupDate = new Date(backupEvent.date);
      backupDate.setHours(0, 0, 0, 0);
      
      if (backupDate >= today) {
        validEvents.push(backupEvent);
        usedBackupIndices.add(i);
      }
    }
  }

  // Sort events by date (earliest first)
  return validEvents.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });
};

// Format date helper
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Format date short helper (for Home page)
export const formatDateShort = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'
  });
};
