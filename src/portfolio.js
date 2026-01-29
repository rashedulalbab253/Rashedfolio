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
    "I’m a Prospective Machine Learning Engineer and PhD candidate with an EEE background, working across Computer Vision, NLP, AI-driven Electromagnetic Systems, and Healthcare AI to transform research innovations into scalable, real-world solutions."
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
  researchgate: "https://www.researchgate.net/profile/Rashedul-Albab?ev=hdr_xprf",
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
      schoolName: "Shahjalal University of Science & Technology",
      logo: "/works/sust_logo.png",
      schoolUrl: "https://sec.ac.bd/",
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
          title: "Research Assistant",
          company: "Department of EEE, Sylhet Engineering College",
          //companylogo: "/works/logo.png",
          date: "Dec 2024 – Jul 2025",
          desc: "Assisted in research projects focused on Machine Learning, Computer Vision, and AI applications.",
          descBullets: [
            "Conducted  research on explainable machine learning for multi-class power quality disturbance classification, implementing preprocessing pipelines, classical ML models (LR, SVM, RF, XGBoost), and a 1D-CNN architecture.",
            "Performed model interpretability analysis using SHAP and feature importance methods."

          ],
          url: "https://sec.ac.bd/"
        },
        {
          title: "Research Trainee",
          company: "Mahdy Research Academy",
          // companylogo: "/works/mahdy.png",
          date: "Jan 2024 – Dec 2024",
          desc: "Conducted research in ML, NLP,Human Centered AI and Healthcare AI applications.",
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
          date: "Jan 2020 – present",
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
    "AI in Healthcare",
    "Computer Vision",
    "Behavioral AI",
    "Natural Language Processing (NLP)",
    "AI-Driven Electromagnetic System",
    "AI in Renewable Energy"
  ],
  sections: [
    {
      title: "Thesis",
      projects: [
        {
          projectName: "LesionNet: A Custom CNN Model for Accurate Multiclass Classification of Dermoscopic Skin Lesions",
          projectDesc: `Skin cancer is one of the most prevalent and potentially fatal forms of cancer worldwide. The ability to accurately classify different types of skin lesions at an early stage is critical for ensuring timely treatment and improving patient outcomes. This study proposes a deep learning-based approach to automate the classification of dermoscopic images into seven categories of skin lesions, using a custom-designed Convolutional Neural Network (CNN) architecture named LesionNet. The model was trained and evaluated on the HAM10000 dataset, which includes over 10,015 RGB dermoscopic images representing a variety of dermatological conditions. To address the dataset’s inherent class imbalance, Random Oversampling was applied only to the training data to avoid biasing the test set. Comprehensive image preprocessing, including resizing, normalization, and augmentation (such as rotation, flipping, and zoom), was performed to improve the model’s generalizability. In addition, Exploratory Data Analysis (EDA) was conducted on associated metadata to observe trends in class distribution, patient age, gender, and lesion location. The LesionNet model was trained using categorical cross-entropy loss and optimized with the Adam optimizer. Evaluation was carried out using standard multiclass performance metrics, including accuracy, precision, recall, and F1-score. The proposed model, LesionNet, achieved a test accuracy of 97.12%, showing robust classification performance across all seven lesion types. These results demonstrate that with careful preprocessing and targeted model design, a lightweight customized CNN like LesionNet can serve as an effective tool for automated skin lesion classification, aiding in the development of reliable diagnostic support systems.

Keywords: Skin Lesions, Multiclass Classification, LesionNet, Convolutional Neural Network (CNN), Deep learning, Medical Image Analysis, Dermoscopy, Image Augmentation.
`,
          isThesis: true,
          footerLink: [
            {
              name: "View Book",
              url: "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-sec/2024/12/bd3cc794feca4a2bb611ce35e798f511.pdf"
            }
          ]
        }
      ]
    },
    {
      title: "Publications",
      projects: [
        {
          projectName: "Explainable Machine Learning for Multi-Class Power Quality Disturbance Classification Using SHAP and Feature Importance Analysis",
          projectDesc: `The reliability and efficiency of modern power systems are negatively impacted by power quality disturbances (PQDs), such as voltage sags, swells, harmonics, and transients. Hence, rapid and accurate classification of PQDs is essential to prevent equipment failures and to ensure stable grid operation. This paper proposes an explainable machine learning (ML) framework for multi-class PQD classification. The framework combines traditional algorithms, Logistic Regression (LR), Decision Tree (DT), Random Forest (RF), Support Vector Machine (SVM), and XGBoost, with a one-dimensional Convolutional Neural Network (1D-CNN). The dataset was preprocessed by handling negative THD values, capping outliers, performing feature selection, encoding categorical variables, and normalizing numerical features. Model interpretability was ensured using feature importance analysis and SHAP values. The experimental findings indicate that LR achieved the maximum accuracy of 99.79% across the five disturbance categories. Beyond predictive performance, the framework enhances transparency by identifying the most influential features including Total Harmonic Distortion (THD), RMS Voltage, and Peak Voltage. The findings demonstrate that integrating robust preprocessing, highperforming models, and explainability methods offers a reliable and interpretable solution for detecting power disturbances in advanced grid networks and present-day energy infrastructures. 

Keywords—Power quality disturbances, Power quality monitoring, Machine learning, Explainable AI (XAI), SHAP, 1D-CNN, Smart grids

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
          projectName: "Quantifying the Relationship between Socioeconomic Status and Parent-Child Attachment on Adolescents Through Machine Learning",
          projectDesc: `Parent-child relationships have a significant impact on adolescent development, influencing social cohesion, intellectual growth, and emotional well-being. Adolescence entails rapid biological, cognitive, and neurodevelopmental changes that profoundly impact psychosocial functioning and interpersonal dynamics. Socioeconomic status (SES) is a crucial factor influencing parent-child relationships, although quantifying how parentchild attachment influences SES remains challenging. To bridge this gap, we propose a Machine Learning (ML) framework to classify SES based on parent-child attachment factors, by using the publicly available dataset ”The effect of parent-child attachment on adolescents’ belief in a just world”, which consists of survey data from 239 families (478 samples). Following rigorous preprocessing—including Principal Component Analysis (PCA) for feature selection, z-score normalization, outlier rejection, and missing value imputation—seven classifiers (Decision Tree, Random Forest, k-Nearest Neighbors, Support Vector Machine, AdaBoost, XGBoost, and Logistic Regression) were trained and evaluated using k-fold cross-validation. Upsampling techniques were used to reduce class imbalance, which significantly enhanced model performance. XGBoost demonstrated the efficiency of ensemble approaches in SES classification by achieving the highest accuracy of 89.00% and AUC-ROC (98.44%), followed by Random Forest (88.40%) and Decision Tree (87.33%). Our findings indicate that attachment dimensions—particularly trust, communication, and alienation in both maternal and paternal relationships—are closely associated with SES categories. These findings provide a data-driven approach for creating focused interventions to improve the well-being of adolescents and reduce socioeconomic inequities. 

Index Terms—Socioeconomic Status (SES), Parent-Child Relationships, Machine Learning, Principal Component Analysis (PCA), XGBoost, Adolescent development.

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
          projectName: "Enhancing Wind Farm Operational Efficiency Through Power Output Classification Using MLP and Ensemble Models",
          projectDesc: `Accurately forecasting wind turbine power output is challenging due to the complex and non-linear patterns present in wind farm operational data. Conventional approaches largely adopt regression-based forecasting, which, while effective in predicting continuous values, often lacks the interpretability required for direct operational decision-making. In this work, we reframe the problem as a multi-class classification task, categorizing power output into discrete levels, low, medium, and high, to provide actionable insights for identifying underperforming turbines and optimizing maintenance schedules. A curated Supervisory Control and Data Acquisition (SCADA) dataset was processed through a rigorous pipeline, including the handling of physically impossible negative power values, outlier capping, feature normalization, and label encoding. Five Machine Learning (ML) models, including Logistic Regression (LR), Random Forest (RF), Gradient Boosting (GB), XGBoost, and a Multilayer Perceptron (MLP), were trained and optimized using Grid Search hyperparameter tuning. The MLP model obtained the highest classification accuracy of 93.51%, marginally outperforming the top-performing ensemble models. Feature importance analysis revealed that while tree-based models relied heavily on a limited set of features, the MLP distributed its attention more evenly across all inputs. The proposed classification-based framework offers a robust and interpretable alternative to regression-based approaches, providing direct operational benefits for the renewable energy sector. 

Keywords—Wind Turbine, Wind Energy, Machine Learning (ML), Power Output Classification, SCADA Data, Predictive Maintenance, Renewable Energy



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
          projectName: "Time-Dependent Control of Voltage and Current via a Tunable Metasurface",
          projectDesc: `Metasurfaces have recently attracted significant attention due to their potential use in optics and meta-devices as compact platforms for precise manipulation of electromagnetic waves. In this work, we present a tunable metasurface geometry based on a triple concentric ring configuration that offers superior surface-wave confinement and enhanced reactive control compared with conventional single-ring or patch structures. Based on our designs, the proposed structure achieves controllable voltage and current responses through strong field confinement and rapid impedance modulation along its surface. Although implementation on a cost-effective FR-4 substrate exhibits moderate dielectric loss at high frequencies, the metasurface maintains efficient performance and supports surfacewave transmission at 30 GHz. Under sinusoidal excitation with an input amplitude of 1V at 30 GHz, the device outperforms a copper reference plate, providing approximately 40V of voltage and about 0.8A of current at the microscale across a resistive load. Temporal reconfiguration is enabled by an exponential voltage signal applied to the voltage-controlled switches (VCS), which alternates the surface reactance between capacitive and inductive states within a 20 ns window. The electromagnetic field amplitudes remain stable across the metasurface, and the switching process produces controlled suppression and restoration of power flow. Overall, the metasurface demonstrates tunable, time-dependent electrical control and holds promise for nextgeneration reconfigurable communication, sensing, and energymodulation platforms. 

Index Terms—Metasurface, Voltage Controlled Switch, Temporal modulation, Surface reactance, Temporal boundaries, FR-4 substrate.

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
          projectName: " A Vision Transformer-Based Pipeline for the Automated Classification of Monkeypox and Other Vesicular Skin Lesions: A Computationally-Efficient Approach for Global Health",
          projectDesc: `Infectious diseases with dermatological manifestations, such as monkeypox, pose significant di-agnostic challenges, particularly in resource-limited settings. The visual similarity of monkeypox lesions to those of chickenpox, cowpox, hand-foot-and-mouth disease (HFMD), and measles com-plicates clinical assessment, often leading to misdiagnosis and delayed containment efforts. This thesis addresses the urgent need for an accurate, accessible, and automated diagnostic tool by pro-posing a novel pipeline based on a Vision Transformer (ViT). The proposed framework leverages pre-trained, frozen ViT-B/16 embeddings (specifically 'vit_base_patch16_224.orig_in21k' from the timm library) to perform six-class classification on the Mpox Skin Lesion Dataset Version 2.0 (MSLD v2.0), comprising 37,044 images. Evaluated using a rigorous five-fold cross-validation protocol, the primary model (ViT + SMOTE + SVM) achieves a mean macro-F1 score of 0.9895 ± 0.0018 and an accuracy of 98.95% ± 0.29%. By extracting robust, high-level features from im-ages, the pipeline avoids the computational expense of fine-tuning deep neural networks. To ad-dress the inherent class imbalance in medical datasets, the Synthetic Minority Oversampling Tech-nique (SMOTE) is integrated with a Support Vector Machine (SVM) classifier. Evaluated using a rigorous five-fold cross-validation protocol, the pipeline demonstrates exceptional performance. The primary model (ViT + SMOTE + SVM) achieves a mean macro-F1 score of 0.9895 ± 0.0018 and an accuracy of 98.95% ± 0.29%. Critically for public health applications and indicating a high sensitivity for detecting the target disease. This performance significantly surpasses a k-Nearest Neighbors (k-NN) baseline, validating the effectiveness of the SMOTE-based balancing strat-egy.This work makes several contributions: it demonstrates the power of frozen ViT embeddings for complex medical classification tasks, presents a lightweight and scalable pipeline suitable for deployment on edge devices, and provides a robust framework for handling class imbalance. By incorporating discussions on feature space visualization, ethical considerations, and practical de-ployment case studies, this thesis lays the groundwork for a clinically relevant tool that can en-hance global health preparedness and support dermatological diagnostics in diverse environments. 

Keywords: Monkeypox, Skin Lesion Classification, Vision Transformer (ViT), Mpox Skin Le-sion Dataset (MSLD v2.0), Support Vector Machine (SVM), Synthetic Minority Oversampling Technique (SMOTE).

`,
          publishedAt: "Ongoing",
          //footerLink: [
          //{
          // name: "View Paper",
          //url: "https://iccit.org.bd/2025/"
          //}
          // ]
        }
      ]
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
