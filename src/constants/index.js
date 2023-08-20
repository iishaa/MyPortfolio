import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    hibernate,
    html,
    css,
    reactjs,
    bootstrap,
    tailwind,
    python,
    mysql,
    git,
    android,
    springboot,
    java,
    meta,
    starbucks,
    tesla,
    shopify,
    courses,
    icare,
    speechtext,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "java",
      icon: java,
    },
    {
      name: "spring-Boot",
      icon: springboot,
    },
    {
      name: "hibernate",
      icon: hibernate,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "android",
      icon: android,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Online Courses",
      description:
        "A responsive website that allows users to add numbers of courses, check the list of courses and also remove they can remove that course which they don’t want.",
      tags: [
        {
          name: "java",
          color: "orange-text-gradient",
        },
        {
          name: "spring-boot",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: courses,
      source_code_link: "https://github.com/iishaa/Online_Courses",
    },
    {
      name: "iCare Healthcare App",
      description:
        "Android App that enables users to create their profile, booked appointment to specialized doctors and medicine, and also for lab-test, and can check health articles .",
      tags: [
        {
          name: "java",
          color: "orange-text-gradient",
        },
        {
          name: "android studio",
          color: "blue-text-gradient",
        },
        {
          name: "tiramisu",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: icare,
      source_code_link: "https://github.com/iishaa/iCare-HealthCare-Android-App",
    },
    {
      name: "Speech-Text Converter",
      description:
        "Text and speech in any language can be convert into Speech and text in any language using Python and libraries like speech recognition, os, google trans, gtts, etc.",
      tags: [
        {
          name: "python-GUI library",
          color: "blue-text-gradient",
        },
        {
          name: "tkinter",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: speechtext,
      source_code_link: "https://github.com/iishaa/Speech-to-Text-and-Text-to-Speech-in-Any-Language",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };