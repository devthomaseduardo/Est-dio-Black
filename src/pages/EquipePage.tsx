import React from "react";
import PageShell from "@/components/PageShell";
import ArtistsSection from "@/components/ArtistsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentSection from "@/components/AppointmentSection";

export default function EquipePage() {
  const scrollToAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageShell onAppointmentClick={scrollToAppointment}>
      <div className="pt-16">
        <ArtistsSection />
        <TestimonialsSection />
        <div id="appointment">
          <AppointmentSection />
        </div>
      </div>
    </PageShell>
  );
}

