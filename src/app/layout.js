import {  Geist_Mono, Montserrat, Quicksand } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vee's Portfolio",
  keywords: ["Portfolio", "Vee", "Web Developer", "Next.js", "React"],
  description: "Welcome to Vee's Portfolio - showcasing my work as a web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased text-white bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
