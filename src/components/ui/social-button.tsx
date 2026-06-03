// File: src/components/ui/social-button.tsx

import Link from "next/link"

interface SocialButtonProps {
  href: string;
  hoverColorClass?: string;
  children: React.ReactNode;
}

export function SocialButton({ href, hoverColorClass = "hover:text-primary", children }: SocialButtonProps) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className={`p-3 border border-border rounded-xl hover:bg-accent transition-colors ${hoverColorClass}`}
    >
      {children}
    </Link>
  )
}