"use client";

import { SECTIONS } from "@/constants/strings";
import { getAllExperiences } from "@/data/experiences";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function Experience() {
  const experiences = getAllExperiences();

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <Timeline title={SECTIONS.experience}>
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.id}
              date={exp.period}
              title={exp.title}
              company={exp.company}
              logo={exp.logo}
              description={exp.description}
              technologies={exp.technologies}
              highlights={exp.highlights}
            />
          ))}
        </Timeline>
      </div>
    </section>
  );
}