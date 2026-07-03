import { ABOUT } from "@/data/about"

export const en = {
  sidebar: {
    title: "PRIVANZA'S PORTFOLIO",
  },
  hero: {
    greeting: "Hi, I'm " + ABOUT.name,
    about: `Hi! I’m a Computer Science student at BINUS University (graduating in 2027), deeply passionate about modern web development. While I hold a solid foundation in full-stack practices and Data Analytics, my main focus lies in crafting highly interactive, adaptive, and performance-driven frontends using Next.js, React, and Tailwind CSS. 
    I thrive on turning creative ideas into functional projects, always striving to bridge the gap between clean backend logic and seamless frontend experiences.`,
    viewMyWork: "View My Work",
    viewResume: "View CV",
    contactMe: "Contact Me",
    hl1: {
      title: "App Development",
      desc: "Focusing on end-to-end application development, seamlessly blending robust functionality with optimal performance.",
    },
    hl2: {
      title: "Frontend Development",
      desc: "Transforming creative ideas into adaptive, smooth interfaces across all devices.",
    },
    hl3: {
      title: "Data Analytics",
      desc: "Processing complex datasets to extract meaningful insights and create impactful data visualizations.",
    },
  },
  skills: {
    progLang: "Programming Languages",
    frLib: "Frameworks & Libraries",
    tlSft: "Tools & Software",
    lang: "Languages",
    levels: {
      beginner: "Beginner",
      basic: "Basic",
      intermediate: "Intermediate",
      advanced: "Advanced",
      expert: "Expert"
    }
  },
  projects: {
    description: "Here's my latest projects that I've worked on",
    searchPlaceholder: "Search projects or tags...",
    showing: "Showing",
    projectsFor: "project(s) for",
    noPrjF: "No projects found",
    tryClear: "Try adjusting your keywords or clear the search filter.",
    clearSearch: "Clear Search",
    projectStatus: {
      completed: "Completed",
      inProgress: "In Progress",
    }
  },
  certifications: {
    credView: "Credential View",
    description: "Here's my latest certifications that I've earned",
    download: "Download",
    view: "View",
  },
  contact: {
    title: "Get In Touch",
    description: "Have a project in mind or an exciting job opportunity? Drop me a message!",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Message",
    messagePlaceholder: "Type your message here...",
    sendButton: "Send Message",
    sending: "Sending...",
    successMessage: "Message sent successfully! Thank you for reaching out.",
  },
  beyond: {
    title: "Beyond the Codes",
    desc: "A glimpse into my creative universe, hobbies, and logical passions outside of programming.",
    connectChannels: "Connect via My Content Channels",
    nowEnergizing: "Now Energizing",
    trackName: "Pre-Chorus Guitar Riffs",
    creator: {
      title: "Aspiring Content Creator",
      desc: "Exploring the world of content creation. Sharing my journey, gaming experiences, and creative processes through short-form and engaging videos."
    },
    craft: {
      title: "Cosplay Crafting & Hobbies",
      desc: "An outlet for my hands-on creativity. I love experimenting with materials like EVA foam, texturing techniques, and details to bring personal gaming projects to life.",
      currentProject: "Personal Project: Currently experimenting with red gauntlets/arm guards for an upcoming event.",
      statsTime: "Time Spent: ~40 Hours of Crafting",
      statsScale: "Focus: Precision & Scaling Details"
    },
  },
  header: {
    settingsLabel: "Settings",
    openSettings: "Open Settings",
    language: "🇬🇧 EN",
    languageSwitchTitle: "Switch to Indonesian",
  },
  menu: {
    overview: "Overview",
    skills: "Tech Stack & Skills",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact Me",
    beyondTheCodes: `"Beyond The Codes"`,
  },
  settings: {
    preferences: "Preferences",
    appearance: "Appearance",
    light: "Light",
    dark: "Dark",
    system: "System",
    fontFamily: "Font Family",
    fontSize: "Font Size",
    sizes: {
      small: "Small",
      default: "Default",
      large: "Large",
      "extra-large": "Extra Large",
    },
    themeColor: "Theme Color",
    pickThemeColor: "Pick your theme color",
    reduceMotion: "Reduce Motion",
    reduceMotionDesc: "Disable animations for performance",
    resetDefault: "Reset Default",
    cancel: "Cancel",
    saveChanges: "Save Changes",
  },
  resume:{
    description: "View directly or download the copy.",
    download: "Download CV"
  }
} as const;

export type TranslationType = typeof en;