// src/data/projects.ts

export interface ProjectItem {
  id: number;
  title: string;
  desc: string;
  link: string;
  demoLink?: string;
  tags: string[];
  status?: "completed" | "in-progress";
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Privanza Wisnu's Portfolio",
    desc: "Portfolio Web using Laravel and Bootstrap",
    link: "https://github.com/PrivanzaWisnu/myPortfolio",
    demoLink: "https://privanzaportfolio.vercel.app/home",
    tags: ["Laravel", "PHP", "Bootstrap"],
    status: "completed"
  },
  {
    id: 2,
    title: "Privanza's Portfolio RESYNCED",
    desc: "Latest Portfolio Web Application",
    link: "https://github.com/PrivanzaWisnu/PortfolioRESYNCED",
    tags: ["Next.js", "Typescript", "Tailwind CSS"],
    status: "in-progress"
  },
  {
    id: 3,
    title: "Youtube Realtime Analytics",
    desc: "Real-time YouTube analytics dashboard monitoring statistics and performance metrics.",
    link: "https://github.com/PrivanzaWisnu/yt-realtime-analytics",
    tags: ["Python"],
    status: "in-progress"
  },
  {
    id: 4,
    title: "Willify",
    desc: "Simple Web for Songs Built with HTML, CSS, and JavaScript",
    link: "https://github.com/PrivanzaWisnu/Willify",
    tags: ["HTML5", "CSS3", "JavaScript"],
    status: "completed"
  },
  {
    id: 5,
    title: "Heart Disease Analytics",
    desc: "Classification on Heart Disease Dataset using Python with Three Algorithms: Logistic Regression, Decision Tree, and Random Forest",
    link: "https://github.com/PrivanzaWisnu/Heart-Disease-Analytics",
    tags: ["Python", "Scikit-Learn", "Jupyter"],
    status: "completed"
  },
  {
    id: 6,
    title: "StockFlow",
    desc: "Smart Inventory Management System using PHP (Laravel), Bootstrap, and MySQL",
    link: "https://github.com/PrivanzaWisnu/Smart-Inventory-Management-System",
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    status: "completed"
  }
];