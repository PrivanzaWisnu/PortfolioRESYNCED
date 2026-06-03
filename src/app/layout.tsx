import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { SettingsProvider } from "@/providers/settings-provider";

export const metadata: Metadata = {
  title: "My Portfolio", // Nanti bisa diganti nama kamu
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning wajib ada supaya next-themes gak error pas ngecek dark/light mode
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange>
          <SettingsProvider>
            {/* children di sini nanti akan diisi oleh layout yang ke-2 */}
            {children}
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}