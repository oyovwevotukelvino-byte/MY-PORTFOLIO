/**
 * Contact Configuration
 * All Contact section content - making it reusable and data-driven
 */

export const contactConfig = {
  // Heading and description
  heading: "Let's Build Something",
  description: "Have an idea or opportunity? Let's build it. I'm available for partnerships, projects, or turning your business concept into reality.",
  note: "Primary: WhatsApp (fastest in Nigeria)",
  
  // Contact methods
  contacts: [
    {
      id: 1,
      title: 'WhatsApp',
      desc: 'Fastest way to connect',
      link: 'https://wa.me/2347062140486',
      primary: true,
    },
    {
      id: 2,
      title: 'Email',
      desc: 'oyovwevotukelvino@gmail.com',
      link: 'mailto:oyovwevotukelvino@gmail.com',
      primary: false,
    },
    {
      id: 3,
      title: 'GitHub',
      desc: '@oyovwevotukelvino-byte',
      link: 'https://github.com/oyovwevotukelvino-byte',
      primary: false,
    },
    {
      id: 4,
      title: 'LinkedIn',
      desc: 'Oyovwevotu Kelvin',
      link: 'https://www.linkedin.com/in/oyovwevotukelvin/',
      primary: false,
    },
  ],
  
  // Location info
  location: 'Abuja, Nigeria • Open to Remote/Global',
  
  // Copyright
  copyright: '© 2025 Oyovwevotu Kelvin. Built in silence.',
};

export default contactConfig;
