import React from "react";
import PageShell from "@/components/PageShell";
import GallerySection from "@/components/GallerySection";

export default function GaleriaPage() {
  return (
    <PageShell>
      <div className="pt-16">
        <GallerySection
          title="Galeria"
          subtitle="Coleção completa de trabalhos e detalhes. Estética escura, alto contraste e acabamento fino."
        />
      </div>
    </PageShell>
  );
}

