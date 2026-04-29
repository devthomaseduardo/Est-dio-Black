import React from "react";
import PageShell from "@/components/PageShell";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import AppointmentSection from "@/components/AppointmentSection";

export default function ServicosPage() {
  const scrollToAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageShell onAppointmentClick={scrollToAppointment}>
      <div className="pt-12">
        <PricingSection />
        <ProcessSection />
        <div id="appointment">
          <AppointmentSection />
        </div>
      </div>
    </PageShell>
  );
}

