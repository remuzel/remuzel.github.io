"use client";

interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text, className = "" }: TagProps): React.ReactElement {
  return (
    <span className={`text-xs px-2 py-1 rounded-full bg-brand-primary/10 text-brand-primary ${className}`}>
      {text}
    </span>
  );
}
