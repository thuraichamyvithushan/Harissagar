// Sources: user brief and verified profile captures in tmp/pdf-reader/.
export const profile = {
  name: 'Haris Sagar', initials: 'HS', role: 'Sales & Marketing Specialist',
  // Original portrait supplied by the user; shared across desktop and mobile.
  photo: 'hero-haris.jpg',
  photoMobile: '',
  photoAlt: 'Haris Sagar seated in a black shirt with his hand resting on his chin',
  heroStatement: 'I connect commercial strategy with strong relationships to create meaningful growth.',
  quote: 'I believe strong business is built where strategy, communication and trust meet.',
  focus: 'Growth through relationships',
  edition: '2026',
  location: 'Newcastle, NSW, Australia', linkedin: 'https://au.linkedin.com/in/haris-sagar-a760a5312',
  address: { addressLocality: 'Newcastle', addressRegion: 'NSW', addressCountry: 'AU' },
  seoDescription: 'I’m Haris Sagar, a Sales & Marketing professional based in Newcastle, Australia. I combine commercial strategy, communication and relationship building.',
  bio: 'I combine commercial strategy, communication and relationship building to turn opportunities into lasting business growth.',
  about: [
    'I’m Haris, a sales and marketing professional with over five years of experience. I bring commercial thinking and a people-first perspective to business development, client relationships and strategic marketing.',
    'My work with Huntsman Optics Australia & New Zealand and Coast Outdoors New Zealand spans two markets. Communication and connection are at the heart of what I do.',
    'Alongside my commercial work, I’m studying law at the University of Newcastle. My studies shape how I approach business, with curiosity, context and a commitment to continuous learning.',
  ],
  experience: [
    { company: 'Huntsman Optics Australia & New Zealand', role: 'Sales & Marketing Specialist', period: 'Apr 2024 — Present', location: 'Newcastle, Australia', arrangement: 'On-site · Full-time', description: 'I work in sales and marketing in the optics sector, focusing on marketing strategy and marketing operations.', tags: ['Marketing strategy', 'Marketing operations'] },
    { company: 'Coast Outdoors New Zealand', role: 'Sales & Marketing Consultant', period: 'Apr 2024 — Present', location: 'Westport, New Zealand', arrangement: 'Remote · Full-time', description: 'I work across marketing strategy and marketing operations in New Zealand’s outdoor sector, bringing a commercial perspective to the market.', tags: ['Sales & marketing', 'Outdoor sector'] },
    { company: 'University of Newcastle', role: 'Clinical Legal Placement Student', period: 'Jan 2025 — Sep 2026', location: 'Newcastle, Australia', arrangement: 'On-site · Internship', description: 'Through the Law in Practice Program within my Juris Doctor / Graduate Diploma of Legal Practice, I developed my legal practice skills and professional and ethical competence.', tags: ['Legal practice', 'Professional ethics'] },
  ],
  expertise: [
    { title: 'Sales Strategy', description: 'I connect commercial priorities with a clear understanding of the customer.' },
    { title: 'Business Development', description: 'I recognise opportunities and build relationships with long-term potential.' },
    { title: 'Marketing Strategy', description: 'I bring market context, positioning and purposeful communication together.' },
    { title: 'Relationship Management', description: 'I build trust through consistency, understanding and thoughtful follow-through.' },
    { title: 'Brand & Market Communication', description: 'I make complex ideas clear, relevant and meaningful to the right audience.' },
    { title: 'Commercial Negotiation', description: 'I approach conversations with preparation, perspective and shared value in mind.' },
    { title: 'Client Engagement', description: 'I listen closely to understand needs and create productive conversations.' },
    { title: 'Cross-Market Communication', description: 'I adapt my communication to different people, markets and business contexts.' },
  ],
  education: { institution: 'University of Newcastle', qualification: 'Juris Doctor / Graduate Diploma in Legal Practice', period: 'Jan 2024 — Dec 2026', status: 'In progress', subjects: ['Energy and Mining Law', 'Tax Law'] },
  volunteering: { organization: 'Lions Clubs International', chapter: 'Lions Club of Jesmond', role: 'Member', period: 'Feb 2024 — Present' },
  languages: [{ name: 'English', proficiency: 'Full professional proficiency' }, { name: 'Tamil' }, { name: 'Sinhala', proficiency: 'Full professional proficiency' }, { name: 'Telugu' }],
  snapshot: [{ value: '5+', label: 'Years in sales & marketing' }, { value: '4', label: 'Languages. More perspectives.' }],
}
export const navigation = ['About', 'Expertise', 'Experience', 'Education', 'Contact'].map(label => ({ label, id: label.toLowerCase() }))
export const industries = ['Optics', 'Outdoor', 'Sales', 'Marketing', 'Commercial', 'Legal studies']
// Generated editorial scenes and matching mobile crops live in src/assets/cinematic.
// These are illustrative environments, not photographs of specific workplaces.
// Missing files still use atmospheric CSS scenes without broken image requests.
export const scenes = {
  hero: { file: 'hero-environment.webp', mobile: 'hero-environment-mobile.webp', kind: 'city', position: '65% center' },
  about: { file: 'about-landscape.webp', mobile: 'about-landscape-mobile.webp', kind: 'city', position: 'center' },
  experience: { file: 'experience-optics.webp', mobile: 'experience-optics-mobile.webp', kind: 'optics', position: '65% center' },
  strategy: { file: 'strategy-city.webp', mobile: 'strategy-city-mobile.webp', kind: 'city', position: 'center' },
  education: { file: 'education-library.webp', mobile: 'education-library-mobile.webp', kind: 'library', position: 'center' },
  cta: { file: 'cta-mountain.webp', mobile: 'cta-mountain-mobile.webp', kind: 'mountain', position: 'center' },
}
export const philosophy = [
  {
    title: 'Understand',
    text: 'I start with the market, the customer and the real business challenge.',
    principle: 'Clarity before action.',
    detail: 'I ask questions and look beyond the immediate request to understand what matters, where the friction sits and what a useful next step could be.',
    practices: ['Listen closely', 'Question assumptions', 'Find the real need'],
    outcome: 'A clearer starting point',
  },
  {
    title: 'Connect',
    text: 'I communicate clearly and build relationships around shared value.',
    principle: 'Trust before transactions.',
    detail: 'I bring the right perspectives into the conversation. I make ideas easy to understand, align expectations and create space for a relationship to develop.',
    practices: ['Communicate clearly', 'Align expectations', 'Build shared value'],
    outcome: 'A stronger connection',
  },
  {
    title: 'Grow',
    text: 'I turn strategy into commercially meaningful actions and long-term opportunities.',
    principle: 'Progress with purpose.',
    detail: 'I choose practical next steps and keep the conversation moving. I stay curious, learn from feedback and look for opportunities that make sense over the long term.',
    practices: ['Act thoughtfully', 'Learn continuously', 'Think long term'],
    outcome: 'A considered way forward',
  },
]
