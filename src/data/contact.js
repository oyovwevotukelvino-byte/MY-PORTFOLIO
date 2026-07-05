// ============================================================
// CONTACT DATA — src/data/contact.js
// Icons are imported directly here and passed as components.
// This avoids any icon name mismatch in Contact.jsx.
// ============================================================

import {
  Mail,
  MessageCircle,
  Link,
  X
} from "lucide-react";

export const contactConfig = {
  contacts: [
    {
      id: 1,
      title: 'WhatsApp',
      desc: '+234 706 214 0486',
      icon: MessageCircle,
      link: 'https://wa.me/2347062140486',
      primary: true,
    },
    {
      id: 2,
      title: 'Email',
      desc: 'oyovwevotukelvino@gmail.com',
      icon: Mail,
      link: 'mailto:oyovwevotukelvino@gmail.com',
      primary: false,
    },
 {
  id: 3,
  title: 'GitHub',
  desc: 'github.com/oyovwevotukelvino-byte',
  icon: Link,
  link: 'https://github.com/oyovwevotukelvino-byte',
  primary: false,
},
{
  id: 4,
  title: 'LinkedIn',
  desc: 'linkedin.com/in/oyovwevotukelvin',
  icon: Link,
  link: 'https://www.linkedin.com/in/oyovwevotukelvin/',
  primary: false,
},
{
  id: 5,
  title: "X (Twitter)",
  desc: "twitter.com/oyovwevotukelvin",
  icon: X,
  link: "https://twitter.com/0yovwevotu",
  primary: false,
},
  ],

  location: 'Abuja, Nigeria • Open to Remote / Global',
  copyright: '© 2025 Oyovwevotu Kelvin. Built in silence.',
};