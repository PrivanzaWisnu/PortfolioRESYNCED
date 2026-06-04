export const en = {
  sidebar: {
    title: "PRIVANZA'S PORTFOLIO",
  },
  hero: {
    greeting: "Hi, I'm Privanza Wisnu Aqilanndra",
    description: "This is my main portfolio page, ready to be customized.",
    viewMyWork: "View My Work",
    viewResume: "View CV",
    contactMe: "Contact Me",
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