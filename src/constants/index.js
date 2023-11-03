import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    android,
    flask,
    flutter,
    python,
    tf,
    java,
    oit,
    amazon,
    enparadigm,
    issc,
    sumz,
    dalle
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML/AI Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Android",
      icon: android,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Tensorflow",
      icon: tf,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#232F3E",
      date: "May 2023 - Aug 2023",
      points: [
        "Worked as Frontend engineer in the Shopping Foundations Team.",
        "Implemented developer and debugging tools for Amazon's internal web framework, improving team’s velocity by 25%.",
        "Communicated complex ideas and strategies to internal teams, ensuring clear understanding.",
        "Gained proficiency in TypeScript, React, Vite, Vitest, and browser extension development."

      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "Enparadigm",
      icon: enparadigm,
      iconBg: "#E6DEDD",
      date: "Apr 2021 - Jan 2022",
      points: [
        "Worked as a cross-platform mobile app developer.",
        "Developed cross-platform mobile apps with end-to-end ownership.",
        "Proactively Identified and resolved bottlenecks and bugs for optimal app performance.",
        "Maintained organized, documented code for seamless updates and maintenance."

      ],
    },
    {
      title: "Software Developer",
      company_name: "ISSC",
      icon: issc,
      iconBg: "#243546",
      date: "Jul 2020 - Dec 2020",
      points: [
        "Led diverse IT infrastructure projects, provided timely cross-functional support, managed projects independently with high quality, and demonstrated flexible project management."
      ],
    },
    {
      title: "Jr. Software Developer",
      company_name: "Optimize IT Systems",
      icon: oit,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Jan 2020",
      points: [
        "Enhanced Android applications with collaborative feature development, and contributed to cutting-edge research and development projects integrating AI, Computer Vision, and Deep Learning."
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
      name: "DALL-E 2.0",
      description:
        "A MERN app that leverages OpenAI's DALL-E API to generate and share images, fostering a creative and collaborative space.",
      tags: [
        {
          name: "mern-stack",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "openAI",
          color: "green-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/leoAshu/dalle_clone",
      demo_link: "https://dalle-clone-khaki.vercel.app/"
    },
    {
      name: "Sumz",
      description:
        "Web-based platform that transforms lengthy articles into concise summaries using OpenAI GPT-4.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "rapidAPI",
          color: "green-text-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/leoAshu/ai-summarizer",
      demo_link: "https://leoashu.github.io/ai-summarizer/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };