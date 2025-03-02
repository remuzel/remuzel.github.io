import type { TimelineItem } from "./experiences";

// Education-specific interface
export type Education = TimelineItem;

export const educationItems: Education[] = [
  {
    id: "imperial-college-meng",
    period: "Oct 2016 - Jun 2020",
    title: "MEng of Mathematics & Computer Science",
    company: "Imperial College London",
    logo: "/images/logos/imperial-college-london.svg",
    description: "Four-year integrated dual-Master's degree in Mathematics and Computer Science. Master's thesis: \"Waiting Time Network Effects\" supervised by Dr. Ali Farzanehfar and Prof. Yves-Alexandre de Montjoye in the Computational Privacy Group",
    technologies: ["Software Design Engineering", "Java/C++/Haskell", "Network and Web Security", "Machine Learning (CV, RL, CNNs, DNNs)", "Data Science", "Applied Probability (CTMCs)", "Statistics & Probabilites", "Real, Complex and Numerical Analysis"],
    highlights: [
      "Master's thesis on the limits of network effects by modeling competition in Uber-like platforms",
      "Implementation of a blockchain-based loyalty framework for customers of the Nightset App (Solidity/JavaScript)",
      "Built a P2P fee-less currency exchange mobile app for young travellers (Java/MongoDB)"
    ],
    links: [
      {
        text: "Waiting Time Network Effects",
        url: "https://github.com/remuzel/Waiting-Time-Network-Effects",
        isExternal: true
      },
      {
        text: "Dr. Ali Farzanehfar",
        url: "https://cpg.doc.ic.ac.uk/team/ali/",
        isExternal: true
      },
      {
        text: "Prof. Yves-Alexandre de Montjoye",
        url: "https://cpg.doc.ic.ac.uk/team/yva/",
        isExternal: true
      }
    ]
  }
];

// Helper function to get all education items in reverse chronological order
export function getAllEducation(): Education[] {
  return [...educationItems];
}

// Helper function to get an education item by ID
export function getEducationById(id: string): Education | undefined {
  return educationItems.find(edu => edu.id === id);
}
