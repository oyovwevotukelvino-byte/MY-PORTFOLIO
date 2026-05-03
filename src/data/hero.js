/**
 * Hero Configuration
 * All Hero section content in one place - making it easy to update without touching UI code
 */

export const homeHero = {
  // Location badge
  location: {
    text: 'Abuja, Nigeria',
    showDot: true,
  },
  
  // Main headline
  title: {
    prefix: 'SOFTWARE',      // First line
    middle: 'DEVELOPER',    // Second line  
    highlight: '& ENTREPRENEUR', // Gradient highlighted
  },
  
  // Subtitle/tagline
  tagline: 'Building Real-World Digital Products',
  
  // Description
  description: 'I design, build, and scale applications that solve real business problems.',
  
  // CTA Buttons
  buttons: {
    primary: {
      text: 'View My Work',
      action: 'projects', // section ID to scroll to
      icon: 'arrow',      // ArrowRight
    },
    secondary: {
      text: "Let's Work",
      action: 'contact',
      icon: 'arrow',
    },
  },
  
  // Stats to display
  stats: [
    { num: '12+', label: 'Projects' },
    { num: '3+', label: 'Years Exp.' },
    { num: '5', label: 'Tech Stacks' },
  ],
  
  // Tech stack marquee
  tech: [
    'React', 'Node.js', 'Next.js', 'Tailwind', 'MongoDB',
    'Express', 'Paystack', 'Firebase', 'Figma', 'Git',
    'APIs', 'Full-Stack'
  ],
  
  // Animation settings
  animations: {
    hero: { y: 30, delay: 0 },
    title: { y: 30, delay: 0.1 },
    description: { y: 16, delay: 0.2 },
    buttons: { y: 16, delay: 0.3 },
    stats: { stagger: 0.1 },
    marquee: { duration: 30 },
  },
};

export default homeHero;
