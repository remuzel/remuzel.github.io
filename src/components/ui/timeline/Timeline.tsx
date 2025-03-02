"use client";

import React, { type ReactNode } from "react";
import SectionHeader from "@/components/common/SectionHeader";

interface TimelineProps {
  children: ReactNode;
  title?: string;
}

export default function Timeline({ children, title }: TimelineProps): React.ReactElement {
  return (
    <div className="relative">
      {title && <SectionHeader title={title}/>}

      <div className="space-y-16 relative overflow-visible">
        {/* Main timeline container */}
        {children}
      </div>
    </div>
  );
}
