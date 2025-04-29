import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RevokeConsentButton } from "@/components/revoke-consent";
import { TaskInstructionButton } from "@/components/task-instruction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mHealth Chatbot",
  description: "CSE3000 Research Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <nav className="sticky w-full h-16 flex items-center justify-between px-4">
          <TaskInstructionButton />
          <RevokeConsentButton />
        </nav>
        <main className="flex-1 flex">{children}</main>
      </body>
    </html>
  );
}
