import noraImg from '../assets/nora.png';
import weatherImg from '../assets/weather.png';
import ecommerceImg from '../assets/ecommerce.png';
import ticImg from '../assets/tictactoe.png';
export const projects = [
  {
    id: 1,
    title: 'Nora Clouds',
    desc: 'A full-stack cloud platform built for real-world business use cases.',
    tech: ['React', 'Node.js', 'Tailwind', 'Firebase'],
     image: noraImg, // or use a screenshot
    live: 'https://noraclouds.vercel.app/',
    github: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Weather App',
    desc: 'Real-time weather app with live forecasts and location detection.',
    tech: ['React', 'Weather API', 'Tailwind'],
    image: weatherImg,
    live: 'https://weather-app-network.vercel.app/',
    github: '',
    featured: false,
  },
  {
    id: 3,
    title: 'E-Commerce Store',
    desc: 'Full-featured online store with cart, checkout and product listings.',
    tech: ['React', 'Netlify', 'Tailwind'],
    image: ecommerceImg,
    live: 'https://ecommercebuynow.netlify.app/',
    github: '',
    featured: false,
  },
  {
    id: 4,
    title: 'Tic Tac Toe',
    desc: 'Interactive two-player Tic Tac Toe game with clean UI.',
    tech: ['React', 'Vercel'],
    image: ticImg,
    live: 'https://tic-tac-toe-game-app-one.vercel.app/',
    github: '',
    featured: false,
  },
];