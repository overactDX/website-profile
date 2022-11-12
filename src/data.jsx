//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  
  // projects images
  import Project1 from './assets/img/projects/cheevamitr.jpg';
  import Project2 from './assets/img/projects/lffintecth.png';
  import Project3 from './assets/img/projects/pimporn.png';
  import Project4 from './assets/img/projects/madooban.png';
  import Project5 from './assets/img/projects/LandingOnedee.png';
  import Project6 from './assets/img/projects/madooban.png';
  import Project8 from './assets/img/projects/Libary-web-app.jpg';
  import Project7 from './assets/img/projects/movie-app.png';
  
  // skills images
  import SkillImg1 from './assets/img/skills/html5.png';
  import SkillImg2 from './assets/img/skills/css3.png';
  import SkillImg3 from './assets/img/skills/js.png';
  import SkillImg4 from './assets/img/skills/reactjs.png';
  import SkillImg5 from './assets/img/skills/nextjs.png';
  import SkillImg6 from './assets/img/skills/vuejs.svg';
  import SkillImg7 from './assets/img/skills/nuxtjs.svg';
  import SkillImg8 from './assets/img/skills/figma.png';

  
  // testimonial images
  import TestiImage1 from './assets/img/testimonials/UPict.png';
  import TestiImage3 from './assets/img/testimonials/lffintecth.jpg';
  import TestiImage2 from './assets/img/testimonials/ONEDEE.png';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'Project',
      href: 'testimonials',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiYoutube />,
      href: '',
    },
    {
      icon: <FiInstagram />,
      href: '',
    },
    {
      icon: <FiGithub />,
      href: '',
    },
    {
      icon: <FiDribbble />,
      href: '',
    },
  ];
  
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'project name 1',
      category: 'UI/UX design',
    },
    {
      id: '2',
      image: Project2,
      name: 'LFFINTECTH Landing Page',
      category: 'web development',
    },
    {
      id: '3',
      image: Project3,
      name: 'project name 3',
      category: 'UI/UX design',
    },
    {
      id: '4',
      image: Project4,
      name: 'project name 4',
      category: 'branding',
    },
    {
      id: '5',
      image: Project5,
      name: 'Pimporn Banana',
      category: 'web development',
    },
    {
      id: '6',
      image: Project6,
      name: 'Cheevamitr',
      category: 'web development',
    },
  ];
  
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },

  ];

  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'University of Phayao',
      authorName: 'All Project / Finish studying Project',
      ap: 'Flutter application',
      as: 'Library Management ',
      img1:Project7,
      img2:Project8,
    },
    {
      authorImg: TestiImage2,
      authorText:
        'OneDee Solution Co., Ltd.',
      authorName: 'All Project / Front-end Developer (Internship)',
      authorPosition: 'reactjs',  
      nx:'Madooban / Nuxt js',
      ns:'Landing page / Nuxt js',
      img1:Project4,
      img2:Project5,
    },
    {
      authorImg: TestiImage3,
      authorText:
        'LFFFINTECT',
      authorName: 'All Project / Front-end Developer (Internship)',
      authorPosition: 'reactjs',
      img1:Project1,
      img2:Project2,
      img3:Project3,
      fv:'Cheevamitr / VueJS',
      fp:'Pimporn Banana / Vue JS ',
      rc:'LFFINTECTH / Nuxt JS'
    },
  ];

  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      description: 'overact150@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      description: 'Chiang mai, Thailand',
    },
  ];
