import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { SettingsProvider } from "@/providers/settings-provider";
import { MotionReducer } from "@/components/layout/motion-reducer";
import { MotionConfig } from "framer-motion"

export const metadata: Metadata = {
  title: "Privanza's Portfolio RESYNCED",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange>
          <SettingsProvider>
            <MotionReducer/>
            <MotionConfig reducedMotion="user"> 
              {children}
            </MotionConfig>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}