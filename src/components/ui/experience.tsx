"use client";

import { SECTIONS } from "@/constants/strings";
import { getAllWorkExperiences } from "@/data/experiences";
import { getAllEducation } from "@/data/education";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

export default function Experience(): React.ReactElement {
  const workExperiences = getAllWorkExperiences();
  const educationExperiences = getAllEducation();

  return (
    <section className="py-20 md:py-32">
      {/* Work Experience Section */}
      <div id="experience" className="container mx-auto px-4">
        <Timeline title={SECTIONS.experience}>
          {workExperiences.map((exp) => (
            <TimelineItem
              key={exp.id}
              date={exp.period}
              title={exp.title}
              company={exp.company}
              logo={exp.logo}
              description={exp.description}
              technologies={exp.technologies}
              highlights={exp.highlights}
              links={exp.links}
            />
          ))}
        </Timeline>
      </div>

      {/* Simple spacer between sections */}
      <div className="h-8"/>

      {/* Education Section */}
      <div id="education" className="container mx-auto px-4">
        <Timeline title={SECTIONS.education}>
          {educationExperiences.map((edu) => (
            <TimelineItem
              key={edu.id}
              date={edu.period}
              title={edu.title}
              company={edu.company}
              logo={edu.logo}
              description={edu.description}
              technologies={edu.technologies}
              highlights={edu.highlights}
              links={edu.links}
            />
          ))}
        </Timeline>
      </div>
    </section>
  );
}
