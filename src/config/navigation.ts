import { Home, Code, Briefcase, Award, Mail } from "lucide-react"

export const navigationConfig = [
  {
    langKey: "overview",
    href: "/",
    icon: Home,
  },
  {
    langKey: "skills",
    href: "/skills",
    icon: Code,
  },
  {
    langKey: "projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    langKey: "certifications",
    href: "/certifications",
    icon: Award,
  },
  {
    langKey: "contact",
    href: "/contact",
    icon: Mail,
  },
];