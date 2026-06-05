// ============================================================
// HERO DATA — src/data/hero.js
// Edit this file to update all hero content from one place.
// ============================================================

export const heroData = {
  name: {
    first: 'Oyovwevotu',
    last:  'Kelvin',
    short: 'Kelvin',
    initials: 'OK',
  },

  role: 'Full-Stack Developer, Entrepreneur & Creative Builder',

  tagline:
    'I build scalable web applications, digital products, and startup ideas that combine technology, business, creativity, and innovation.',

  availableForWork: true,   // toggles the badge
  availabilityLabel: 'Available for new opportunities',

  location: 'Abuja, Nigeria',

  stats: [
    { value: '3+',         label: 'Years building'      },
    { value: '10+',        label: 'Projects shipped'     },
    { value: 'Full-Stack', label: 'React · Node · DBs'  },
  ],

  ctas: {
    primary:   { label: 'View Projects',     href: '/projects'              },
    secondary: { label: 'Download Resume',   href: '/resume.pdf', external: true },
    tertiary:  { label: 'Contact Me',        href: '/contact'               },
  },

  socials: [
    { platform: 'GitHub',   icon: 'brand-github',   href: 'https://github.com/'            },
    { platform: 'LinkedIn', icon: 'brand-linkedin',  href: 'https://linkedin.com/in/'       },
    { platform: 'Email',    icon: 'mail',            href: 'mailto:hello@example.com'       },
    { platform: 'Twitter',  icon: 'brand-x',         href: 'https://x.com/'                },
  ],

  // Optional: path to your actual photo.
  // Set to null to use the initials avatar fallback.
  profileImage: null, // e.g. '/images/kelvin.jpg'
};
