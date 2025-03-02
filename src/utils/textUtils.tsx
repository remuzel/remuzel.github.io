import Link from "next/link";
import React from "react";

interface TextLink {
  text: string;
  url: string;
  isExternal?: boolean;
}

/**
 * Renders text with embedded links
 * Finds all link texts in the description and replaces them with linked versions
 */
export function renderTextWithLinks(text: string, links: TextLink[]): React.ReactNode {
  // If no links, just return the text
  if (!links || links.length === 0) return text;

  const parts: React.ReactNode[] = [];
  let remainingText = text;

  // Sort links by their position in the text (if present)
  const sortedLinks = [...links].sort((a, b) => {
    const posA = text.indexOf(a.text);
    const posB = text.indexOf(b.text);

    if (posA === -1) return 1;
    if (posB === -1) return -1;
    return posA - posB;
  });

  sortedLinks.forEach((link, index) => {
    const linkTextPos = remainingText.indexOf(link.text);

    if (linkTextPos !== -1) {
      // Add text before the link
      if (linkTextPos > 0) {
        parts.push(remainingText.substring(0, linkTextPos));
      }

      // Add the linked text
      parts.push(
        <Link
          key={index}
          href={link.url}
          target={link.isExternal ? "_blank" : undefined}
          rel={link.isExternal ? "noopener noreferrer" : undefined}
          className="text-alexa-blue underline"
          onClick={(e) => e.stopPropagation()}  // Prevent collapse when clicking link
        >
          {link.text}
        </Link>
      );

      // Update remaining text
      remainingText = remainingText.substring(linkTextPos + link.text.length);
    } else {
      // If link text not in description, append after description
      if (index === 0 && parts.length === 0 && remainingText.length > 0) {
        parts.push(remainingText);
        parts.push(" ");
      }

      parts.push(
        <Link
          key={`append-${index}`}
          href={link.url}
          target={link.isExternal ? "_blank" : undefined}
          rel={link.isExternal ? "noopener noreferrer" : undefined}
          className="text-alexa-blue underline"
          onClick={(e) => e.stopPropagation()}  // Prevent collapse when clicking link
        >
          {link.text}
        </Link>
      );

      remainingText = "";
    }
  });

  // Add any remaining text
  if (remainingText) {
    parts.push(remainingText);
  }

  return <>{parts}</>;
}
