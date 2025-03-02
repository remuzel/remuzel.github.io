"use client";

interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text, className = "" }: TagProps): React.ReactElement {
  return (
    <span className={`text-xs px-2 py-1 rounded-full bg-alexa-blue/10 text-alexa-blue ${className}`}>
      {text}
    </span>
  );
}
