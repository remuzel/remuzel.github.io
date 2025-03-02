"use client";

import Image from "next/image";
import { SECTIONS, ALT, ABOUT } from "@/constants/strings";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import Card from "@/components/common/Card";
import { FADE_IN_LEFT, FADE_IN_RIGHT } from "@/constants/animations";

export default function About(): React.ReactElement {
  return (
    <Section id="about" background="card">
      <SectionHeader title={SECTIONS.aboutMe}/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Card
          {...FADE_IN_LEFT}
          whileInView={FADE_IN_LEFT.animate}
          className="flex justify-center"
          enableDefaultStyles={false}
        >
          <div className="relative w-[280px] aspect-[4/5]">
            <div className="absolute inset-0 border-2 border-alexa-blue rounded-lg -translate-x-4 -translate-y-4 z-0"/>
            <div className="relative h-full w-full rounded-lg overflow-hidden z-10 shadow-md">
              <Image
                src="/images/photo.jpg"
                alt={ALT.portrait}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Card>

        <Card
          {...FADE_IN_RIGHT}
          whileInView={FADE_IN_RIGHT.animate}
          enableDefaultStyles={false}
        >
          {ABOUT.bio.map((paragraph, index) => (
            <p key={index} className={`text-lg ${index < ABOUT.bio.length - 1 ? 'mb-6' : ''}`}>
              {paragraph}
            </p>
          ))}
        </Card>
      </div>
    </Section>
  );
}
