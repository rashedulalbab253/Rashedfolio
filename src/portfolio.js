/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rashedul Albab",
  title: "Hi all, I'm Rashed",
  subTitle: emoji(
    "I’m a Machine Learning researcher and engineer with an EEE background, working across computer vision, NLP,AI-Driven Electromagnetic System  and healthcare AI to bridge rigorous research and real-world systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rashedulalbab253",
  linkedin: "https://www.linkedin.com/in/rashedul-albab/",
  gmail: "albabahmed74@@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/rashedul.albab",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A passionate researcher and developer focused on building intelligent systems and human-centered AI solutions.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sylhet Engineering College(affiliated with Shahjalal University of Science & Technology)",
      logo: "/works/SEC Logo.png",
      subHeader: "Bachelor of Science in Electrical and Electronic Engineering",
      duration: "January 2020 - July 2025",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    //{
    //schoolName: "Stanford University",
    //logo: require("./assets/images/stanfordLogo.png"),
    //subHeader: "Bachelor of Science in Computer Science",
    //duration: "September 2013 - April 2017",
    //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  sections: [
    {
      title: "Research Experience",
      experiences: [
        {
          title: "Research Trainee",
          company: "Mahdy Research Academy",
          companylogo: "/works/mahdy.png",
          date: "Jan 2024 – Dec 2024",
          desc: "Conducting research in NLP,Human Centered AI and Healthcare AI applications.",
          descBullets: [
            "Mastered topics from statistical modeling to advanced architectures (Transformers, XAI) with hands-on implementation in Python, TensorFlow,PyTorch and scikit-learn.",
            "Developed a novel AI research project, leading to a journal-ready manuscript and a professional technical poster through iterative methodology refinement."
          ],
          url: "https://www.facebook.com/groups/315264107544221" // Replace with official URL if different
        }
      ]
    },
    {
      title: "Professional Experience",
      experiences: [
        {
          title: "Machine Learning Engineer Intern",
          company: "eleVVo",
          companylogo: "/works/Elevo.png",
          date: "Aug 2025 – Sep 2025",
          desc: "Developed and deployed ML & DL  models on real-world data using Python, scikit-learn,Tensorflow,pytorch,Streamlit,Fastapi,AWS.",
          //descBullets: [
          //"Developed and deployed ML & DL  models on real-world data using Python, scikit-learn,Tensorflow,pytorch,Streamlit,Fastapi,AWS.",

          //],
          url: "https://elevvo.tech/home"
        }
      ]
    },
    {
      title: "Industrial  Experience",
      experiences: [
        {
          title: "Industrial Trainee",
          company: "Training Institue for Chemical Industries(TICI)",
          companylogo: "/works/tici.png",
          date: "January 2024",
          desc: "3 week intensive industrial technology course at TICI, covering advanced Electrical Engineering & Instrumentation ,including motor control, substation distribution, DCS and PLC/SCADA systems",
          //descBullets: [
          //"Implemented data preprocessing scripts.",
          // "Integrated AI models into existing web dashboards."
          //],
          url: "https://tici.gov.bd/"
        }
      ]
    },
    {
      title: "Teaching Experience",
      experiences: [
        {
          title: "Physics Instructor",
          company: "Bright Teaching Home",
          companylogo: "/works/bright.png",
          date: "Jan 2019 – present",
          desc: "Teaching Physics at the HSC level for 5 years.",
          descBullets: [
            "Designed exam questions to develop problem solving skills and prepare students for competitive exams",

          ]
        },
        {
          title: "ICT  Instructor",
          company: "Odommo Academy",
          companylogo: "/works/odommo.jpeg",
          date: "Nov 2025 – Present",
          desc: "Assisted in teaching C programming,HTML and Database Management System.",
          descBullets: [
            "created exam questions aimed at enhancing problem-solving skills and preparing students for competitive exams.",

          ]
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A showcase of my work spanning AI/ML systems, Computer Vision, Multimodal AI, IoT systems, and Renewable Energy solution",
  projects: [
    {
      projectName: "IoT Based Environmental Data logger(ESP32)",
      projectDesc: "Designed and implemented a realtime environmental monitoring system using ESP32 and multiple sensors, enabling cloud based data logging and remote access through Google Sheets.",
      footerLink: [
        {
          name: "View PDF",
          url: "/projects/IOT_bASED_DATA_LOGGER.pdf"
        }
      ]
    },
    {
      projectName: "Feasibility Study for a small-scale PV project in North Baghbari,Sylhet",
      projectDesc: "Performed a techno economic feasibility analysis of solar PV and wind energy systems using NREL s System Advisor Model(SAM), integrating weather, location, and energy yield data to evaluate system performance and local renewable energy viability..",
      footerLink: [
        {
          name: "View PDF",
          url: "/projects/Renewable_Energy_System_Project.pdf"
        }
      ]
    },
    {
      projectName: "Medibot AI: Retrieval-Grounded Clinical Assistant",
      projectDesc: "Developed a RAG-powered clinical chatbot on AWS with Docker, orchestrating LLMs and vector retrieval for reliable, domain-grounded medical answers.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/Medibot_with-LLMs-LangChain-Pinecone-Flask-AWS"
        }
      ]
    },
    {
      projectName: "MathRAG AI – Reliable Multimodal Math Problem Solver",
      projectDesc: " Built a end-to-end AI Math Mentor that can solve  math problems using multimodal inputs (image, audio, text), explain solutions step-by-step, and improve over time using memory and human feedback.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/AI_math_solver_system_"
        }
      ]
    },
    {
      projectName: "CourtVision:AI Powered Tennis Match Analysis System",
      projectDesc: " Engineered a real-time AI system for tennis analytics, performing player detection, ball tracking, and court keypoint estimation using YOLO and ResNet models",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/Tennis_analysis_system_using_YoloV12"
        }
      ]
    },
    {
      projectName: "Multi Agent Research Assistant(CrewAi )",
      projectDesc: " Created a modular multi-agent research assistant using CrewAI to automate research, analysis, and report generation, producing structured, high-quality outputs efficiently",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/rashedulalbab253/Ai_Research_Assitant"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Highlighting my key accomplishments, international certifications, and honors in the field of technology and research.",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Research Section

const researchSection = {
  title: "Research",
  subtitle: "Research interests",
  interests: [
    "Computer Vision",
    "Clinical and Psychological Human Behavior Analysis",
    "Human-Centered AI",
    "Natural Language Processing (NLP)",
    "AI-Driven Electromagnetic System"
  ],
  projects: [
    {
      projectName: "LesionNet: A Custom CNN Model for Accurate Multiclass Classification of Dermoscopic Skin Lesions",
      projectDesc: "LesionNet: A Custom CNN Model for Accurate Multiclass Classification of Dermoscopic Skin Lesions",
      isThesis: true,
      footerLink: [
        {
          name: "View Paper",
          url: "https://drive.google.com/drive/folders/1vsGJnoCkaxgcdXrnR9A-D1DA3e-MrpWr"
        }
      ]
    },
    {
      projectName: "Enhancing Wind Farm Operational Efficiency Through Power Output Classification Using MLP and Ensemble Models",
      projectDesc: "Abstract:",
      publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
      footerLink: [
        {
          name: "View Paper",
          url: "https://iccit.org.bd/2025/"
        }
      ]
    },
    {
      projectName: "Explainable Machine Learning for Multi-Class Power Quality Disturbance Classification Using SHAP and Feature Importance Analysis",
      projectDesc: `Accurately forecasting wind turbine power output is challenging due to the complex and non-linear patterns present in wind farm operational data. Conventional approaches largely adopt regression-based forecasting, which, while effective in predicting continuous values, often lacks the interpretability required for direct operational decision-making. In this work, we reframe the problem as a multi-class classification task, categorizing power output into discrete levels, low, medium, and high, to provide actionable insights for identifying underperforming turbines and optimizing maintenance schedules. A curated Supervisory Control and Data Acquisition (SCADA) dataset was processed through a rigorous pipeline, including the handling of physically impossible negative power values, outlier capping, feature normalization, and label encoding. Five Machine Learning (ML) models, including Logistic Regression (LR), Random Forest (RF), Gradient Boosting (GB), XGBoost, and a Multilayer Perceptron (MLP), were trained and optimized using Grid Search hyperparameter tuning. The MLP model obtained the highest classification accuracy of 93.51%, marginally outperforming the top-performing ensemble models. Feature importance analysis revealed that while tree-based models relied heavily on a limited set of features, the MLP distributed its attention more evenly across all inputs. The proposed classification-based framework offers a robust and interpretable alternative to regression-based approaches, providing direct operational benefits for the renewable energy sector.

`,
      publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
      footerLink: [
        {
          name: "View Paper",
          url: "https://iccit.org.bd/2025/"
        }
      ]
    },
    {
      projectName: "Quantifying the relationship between Socioeconomic Status and Parent-Child Attachment on Adolescents through Machine Learning",
      projectDesc: "Abstract:",
      publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
      footerLink: [
        {
          name: "View Paper",
          url: "https://iccit.org.bd/2025/"
        }
      ]
    },
    {
      projectName: "Time-Dependent Control of Voltage and Current via a Tunable Metasurface",
      projectDesc: "Abstract:",
      publishedAt: "Accepted at: 28th ICCIT 2025(IEEE)",
      footerLink: [
        {
          name: "View Paper",
          url: "https://iccit.org.bd/2025/"
        }
      ]
    },
    {
      projectName: " A Vision Transformer-Based Pipeline for the Automated Classification of Monkeypox and Other Vesicular Skin Lesions: A Computationally-Efficient Approach for Global Health",
      projectDesc: "Abstract:",
      publishedAt: "Ongoing",
      //footerLink: [
      //{
      // name: "View Paper",
      //url: "https://iccit.org.bd/2025/"
      //}
      // ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing insights and tutorials on emerging technologies, AI research, and software development.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Passionate about sharing knowledge and engaging with the tech community through research talks and workshops! 🎤"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussing the intersection of technology, research, and personal growth in various tech platforms.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a question or want to collaborate on a research or project? Feel free to reach out!",
  number: "+8801834616407",
  email_address: "albabahmed74@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  researchSection
};
