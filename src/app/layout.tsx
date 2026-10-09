import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Abhinav Kumar — Software Engineer";
const description =
  "Specialist at PwC. GenAI pipelines, backend services, and cloud infrastructure. AWS Certified Developer – Associate.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Abhinav Kumar" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhinav Kumar",
  jobTitle: "Specialist",
  worksFor: { "@type": "Organization", name: "PwC" },
  email: "kumar.abhinav9163@gmail.com",
  sameAs: [
    "https://github.com/abhi0k16",
    "https://www.linkedin.com/in/abhi160k",
    "https://leetcode.com/u/user0136O/",
    "https://www.geeksforgeeks.org/profile/kumarabhinav9163?tab=activity",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  );
}
