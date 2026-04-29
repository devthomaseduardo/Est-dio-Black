import React from "react";
import PageShell from "@/components/PageShell";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import AppointmentSection from "@/components/AppointmentSection";

export default function ContatoPage() {
  const scrollToAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageShell onAppointmentClick={scrollToAppointment}>
      <div className="pt-16">
        <LocationSection />
        <FAQSection />
        <div id="appointment">
          <AppointmentSection />
        </div>
      </div>
    </PageShell>
  );
}

