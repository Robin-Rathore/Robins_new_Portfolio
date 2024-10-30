export const bio = [
  "Hello! I'm Robin Rathore, an experienced Frontend Software Engineer with a proven ability to upgrade applications, optimize performance, and deliver innovative solutions.",
  "I am passionate about using my technical skills to drive impactful contributions in challenging projects.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "C, C++, Java, JavaScript, SQL",
    color: "1",
    percentage: "90",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "React, Express, Node",
    color: "6",
    percentage: "80",
  },
  {
    title: "Design",
    skillName: "HTML5, Bootstrap, Tailwind",
    color: "4",
    percentage: "90",
  },
  {
    title: "Version Control",
    skillName: "GitHub, Docker, Git",
    color: "7",
    percentage: "90",
  },
  {
    title: "Tools",
    skillName: "Debugging, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
  {
    title: "Databases",
    skillName: "Firebase, MongoDB, MySql",
    color: "5",
    percentage: "70",
  },
  {
    title: "Cloud",
    skillName: "AWS, Render, Hoistinger",
    color: "9",
    percentage: "80",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "Your Library",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack online Library application for readers where they can share their books with other and request other for books.",
      preview: "https://yourlibrary0.netlify.app/",
      techStack: ["Node", "React", "Express", "Tailwind", "MySql", "SQL", "Railway"],
    },
    {
      projectName: "Pragati AI",
      image: "images/findyourbank.png",
      summary:
        "Developed a React and ChatGPT API based web application where you can communicate with ChatGPT with voice and text",
      preview: "https://github.com/Robin-Rathore",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Social Media App",
      image: "images/portfolio.png",
      summary:
        "Social Media web app having function to post, like, comment and follow others, users can also update their location, work status and prodile pic.",
      preview: "https://github.com/Robin-Rathore",
      techStack: ["React", "Node", "Express", "MongoDB"],
    },
    {
      projectName: "Chat Application",
      image: "images/resume-builder.png",
      summary:
        "Chat application build using Google Firebase, Users can share image and emojis, have secure login/signup and searching functionality.",
      preview: "https://github.com/Robin-Rathore",
      techStack: ["React", "SCSS", "Firebase"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Anonymious Client to Client communication over server",
      image: "images/pizzaorderchatbot.png",
      summary:
        "client-to-client communication application built using C++ and socket programming. It allows users to connect and chat anonymously with strangers.",
      preview: "https://github.com/Robin-Rathore",
      techStack: ["C++", "Socket Programming", "Synchronisation", "Data Structures"],
    },
    {
      projectName: "Big Integer",
      image: "images/whatsappbot.jpg",
      summary:
        "Application that can computer large integers and can ADD, SUBTRACT, MULTIPLY and DIVIDE integers",
      preview: "https://github.com/Robin-Rathore",
      techStack: ["C", "Linked List", "DSA"],
    },
    {
      projectName: "Shortest Path finder",
      image: "images/billgenerator.png",
      summary:
        "Shortest path finder software for delivery purpose using GRAPH algorithm Dijkstra's.",
      preview: "https://github.com/Robin-Rathore",
      techStack: ["C++", "DSA", "Dijkstra's"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "Creedhomewares.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to scale their B2B business of water bottles",
      preview: "https://www.creedhomewares.in/",
      techStack: ["React", "Tailwind", "Express", "MongoDB", "Cloudinary", "SCSS", "Framer Motion", "EmailJS", "AWS", "hoistinger"],
    },
    {
      projectName: "Electronic Junction",
      image: "images/AM-Logo-.png",
      summary: "An Ecommerce web app for a company selling Electronic Gadegets such as smart watches, earbuds etc",
      preview:
        "https://electronicjunction.netlify.app/",
      techStack: ["React", "Express", "MongoDB", "Tailwind", "Stripe", "Render"],
    },
  ],
};

export const experience = [
  {
    title: "Upwork",
    duration: "May 2022 - July 2024",
    subtitle: "Freelancer",
    details: [
      `Developed and deployed a fully scalable Full Stack Ecommerce platform featuring a role-based login system, a secure payment gateway, and a high-performance UI. Successfully processed 1000+ transactions, delivering seamless user experience and robust security. Integrated advanced features such as real-time inventory management and updates.`,
      `Engineered a self-driving car system using Machine Learning algorithms and Computer Vision libraries. Integrated IoT technology with Raspberry Pi 3, ultrasonic, and infrared sensors for precise object detection and shortest path navigation.`,
    ],
    tags: [
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "Machine Learning",
      "IoT",
    ],
    icon: "shopping-cart",
  },
  {
    title: "Programming Instructor (Level 4)",
    duration: "February 2023 - July 2023",
    subtitle: "Remote",
    details: [
      `Conducted virtual sessions, educating over 1000 students on a wide range of DSA and competitive programming topics.`,
      `Delivered comprehensive support by promptly resolving 300+ queries from 500+ students through text and virtual meetings.`,
    ],
    tags: ["Teaching", "Data Structures", "Algorithms"],
    icon: "chalkboard-teacher",
  },
];

export const education = [
  {
    title: "B.Tech. in Computer Science and Engineering",
    duration: "2022 - 2026",
    subtitle: "Graphic Era Hill University, Dehradun",
    details: ["SGPA : 8.20"],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 12th in Science and Mathematics",
    duration: "",
    subtitle: "The Indian Public SR SEC School, Vikasnagar",
    details: ["Grade : A+ "],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/robin-rathore-833863238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bv1qu%2BOwtQTK%2BwhLhtYyRmg%3D%3D",
      },
      {
        text: "Github",
        link: "https://github.com/Robin-Rathore",
      },
      {
        text: "X",
        link: "https://x.com/RobinRathore007?t=dpFo9K94CJGtm3Tb7gVK0Q&s=09",
      },
      {
        text: "E-Mail",
        link: "mailto:robinsingh248142@gmail.com", // Update with your actual website
      },
    ],
  },
  {
    label: "Coding Profies",
    data: [
      {
      text: "Leetcode",
      link: "https://leetcode.com/Robin_Rathore",
      },
      {
      text: "Codeforces",
      link: "https://codeforces.com/profile/Robin001",
      },
      {
      text: "Geek For Geeks",
      link: "https://www.geeksforgeeks.org/user/robinsing9pze",
      },
    ],
  },
];


// export const experience = [
//   {
//     title: "Shiprocket (Bigfoot Solution Private Limited)",
//     duration: "September 2022 - Present",
//     subtitle: "Software Engineer",
//     details: ["Working in support and escalation team."],
//     tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
//     icon: "truck ",
//   },
//   {
//     title: "Biofourmis India Private Limited",
//     duration: "April 2022 - Jul 2023",
//     subtitle: "Software Engineer",
//     details: [
//       `Implemented microfrontends using the Module Federation Plugin in Angular.
//             Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
//       `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
//             recognition with the Biofourmis Bravo award in Q1, 2023.`,
//       `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
//       `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
//       `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
//       `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
//             management, and enhanced application performance.`,
//       `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
//       `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
//             resulting in reduced audio issues and increased user satisfaction.`,
//       `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
//             and enhancing features.`,
//     ],
//     tags: [
//       "JavaScript",
//       "Angular",
//       "RxJS",
//       "NGXS",
//       "TypeScript",
//       "RxState",
//       "Webpack",
//       "Optimization",
//     ],
//     icon: "heartbeat",
//   },
//   {
//     title: "Novopay Solutions Private Limited",
//     duration: "June 2020 - April 2022",
//     subtitle: "Software Engineer",
//     details: [
//       `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
//             and Money transfer.`,
//       `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
//             Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
//       `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
//       `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
//     ],
//     tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
//     icon: "qrcode",
//   },
//   {
//     title: "ThinkPedia LLP",
//     duration: "May 2019 - June 2019",
//     subtitle: "SDE Intern",
//     details: [
//       `Developed a customer web application for social media management, supporting the advertisement domain.`,
//     ],
//     tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
//     icon: "group",
//   },
// ];

// export const education = [
//   {
//     title: "B.Tech. in Computer Science and Engineering",
//     duration: "2016 - 2020",
//     subtitle: "National Institute of Technology, Warangal",
//     details: [],
//     tags: [
//       "Data Structures & Algorithms",
//       "Operating Systems",
//       "Database Management System",
//       "Computer Networks",
//       "Compiler Designing",
//       "Cloud Computing",
//     ],
//     icon: "graduation-cap",
//   },
//   {
//     title: "Class 12th in Science and Mathematics",
//     duration: "",
//     subtitle: "Board of Secondary Education, Rajasthan",
//     details: [],
//     tags: ["Physics", "Chemistry", "Mathematics"],
//     icon: "book",
//   },
// ];

// export const footer = [
// //   {
// //     label: "Dev Profiles",
// //     data: [
// //       {
// //         text: "Stackoverflow",
// //         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
// //       },
// //       {
// //         text: "GitHub",
// //         link: "https://github.com/vinaysomawat",
// //       },
// //       {
// //         text: "LeetCode",
// //         link: "https://leetcode.com/somawatvinay/",
// //       },
// //     ],
// //   },
// //   {
// //     label: "Resources",
// //     data: [
// //       {
// //         text: "Enable Dark/Light Mode",
// //         func: "enableDarkMode()",
// //       },
// //       {
// //         text: "Print this page",
// //         func: "window.print()",
// //       },
// //       {
// //         text: "Clone this page",
// //         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
// //       },
// //     ],
// //   },
//   {
//     label: "Links",
//     data: [
//     //   {
//     //     text: "Linkedin",
//     //     link: "https://www.linkedin.com/in/vinaysomawat/",
//     //   },
//     //   {
//     //     text: "Twitter",
//     //     link: "https://twitter.com/thesigmakid",
//     //   },
//       {
//         text: "Buy me a coffee",
//         link: "https://www.buymeacoffee.com/r194dME8y",
//       },
//       {
//         text: "Github/vinaysomawat.github.io",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
//   {
//     label: "copyright-text",
//     data: [
//       "Made with &hearts; by Vinay Somawat.",
//       "&copy; No Copyrights. Feel free to use this template.",
//     ],
//   },
// ];
