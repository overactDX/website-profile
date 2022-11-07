//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  // companies icons
  import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
  import UpworkBrandIcon from './assets/img/brands/upwork.png';
  import FiverBrandIcon from './assets/img/brands/fiverr.png';
  import BehanceBrandIcon from './assets/img/brands/behance.png';
  import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
  
  // projects images
  import Project1 from './assets/img/projects/cheevamitr.jpg';
  import Project2 from './assets/img/projects/lffintecth.png';
  import Project3 from './assets/img/projects/pimporn.png';
  import Project4 from './assets/img/projects/madooban.png';
  import Project5 from './assets/img/projects/LandingOnedee.png';
  import Project6 from './assets/img/projects/madooban.png';
  
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
    // {
    //   name: 'portfolio',
    //   href: 'portfolio',
    // },
    // {
    //   name: 'services',
    //   href: 'services',
    // },
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
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
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

    // projectsDetails
    export const projectsDetails = [
      {
        description: ''
      },
      {
        description: ''
      },
      {
        description: ''
      },
      {
        description: ''
      },
      {
        description: ''
      },
      {
        description: ''
      },
    ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
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
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'SEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'University of Phayao',
      authorName: 'All Project / Finish studying Project',
      authorPosition: 'vuejs',
      img1:Project2,
      img2:Project1,
    },
    {
      authorImg: TestiImage2,
      authorText:
        'OneDee Solution Co., Ltd.',
      authorName: 'All Project / Front-end Developer (Internship)',
      authorPosition: 'reactjs',  
      nx:'Nuxt JS / Tailwind CSS',
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
      fv:'Vue JS / Tailwind CSS',
      fp:'Vue JS / SCSS',
      rc:'Nuxt JS / Tailwind CSS '
    },
  ];
  //skills
  // export const testimonials = {
  //   vue: 'Vue JS / Tailwind CSS',
  //   react: 'React JS'
  // }

  // //training
  // export const training = [
  //   UP = {
  //     authorImg: TestiImage1,
  //     name: 'University of Phayao',
  //     authorName: 'All Project',
  //     authorPosition: skills.vue,
  //     img: {
  //       1: Project2,
  //       2: Project1
  //     }
  //   },

  //   OD = {
  //     authorImg: TestiImage2,
  //     name: 'OneDee Solution Co., Ltd.',
  //     authorName: 'All Project',
  //     authorPosition: skills.react,
  //     img: {
  //       1:Project4,
  //       2:Project5,
  //     }
  //   },

  //   LF = {
  //     authorImg: TestiImage3,
  //     name: 'LFFFINTECT',
  //     authorName: 'All Project',
  //     authorPosition: skills.react,
  //     img: {
  //       1:Project1,
  //       2:Project2,
  //       3:Project3,
  //     }
  //   }
  // ]
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      // subtitle: 'I am here to help you.',
      description: 'overact150@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      // subtitle: '--',
      description: 'Chiang mai, Thailand',
    },
  ];
