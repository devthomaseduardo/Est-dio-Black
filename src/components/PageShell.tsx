import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ParallaxBackdrop from "./ParallaxBackdrop";

interface PageShellProps {
  children: React.ReactNode;
  onAppointmentClick?: () => void;
}

export default function PageShell({ children, onAppointmentClick }: PageShellProps) {
  return (
    <div className="relative w-full min-h-screen text-white studio-black-bg">
      <ParallaxBackdrop imageSrc="/editorial/artist-work-1.png" />

      <Header onAppointmentClick={onAppointmentClick} />
      <main className="pt-8">{children}</main>
      <Footer />
    </div>
  );
}

