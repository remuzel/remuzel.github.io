"use client";

import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "card";
}

export default function Section({
  id,
  children,
  className = "",
  background = "default"
}: SectionProps): React.ReactElement {
  const bgClass = background === "card" ? "bg-card-bg" : "";

  return (
    <section id={id} className={`py-20 md:py-32 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
