export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  logo?: string; // Path to company logo
  technologies?: string[];
  highlights?: string[];
  links?: Array<{
    text: string;
    url: string;
    isExternal?: boolean;
  }>;
}

export const experiences: Experience[] = [
  {
    id: "amazon-alexa-sde-ii",
    period: "Jul 2022 - Present",
    title: "Software Development Engineer - SDE II",
    company: "Amazon - Alexa",
    logo: "/images/logos/amazon-alexa.svg",
    description: "",
    technologies: ["AWS Lambda", "DynamoDB", "SQS", "CloudWatch", "Java", "Kotlin", "AWS CDK - Typescript", "TCFv2 Framework"],
    highlights: [
    ]
  },
  {
    id: "amazon-alexa-sde-i",
    period: "Oct 2020 - Jul 2022",
    title: "Junior Software Development Engineer - SDE I",
    company: "Amazon - Alexa",
    logo: "/images/logos/amazon-alexa.svg",
    description: "In the Alexa International team, we're responsible for championing features that delight customers outside of the US. My first major contribution was the development, launch and maintenance of a new \"Karaoke on Alexa\" feature for customers in Japan, Spain, Mexico and the UK in partnership with Yokee and JOYSOUND.",
    technologies: ["ECS/Fargate", "DynamoDB", "CloudWatch", "Java", "Kotlin", "AWS CDK - Typescript", "Alexa Skills"],
    highlights: [
      "Developed a highly available ECS/Fargate service across three major AWS region (us-east-1, us-west-2 and eu-west-1)",
      "Implement and maintained integrations with external partners Yokee and JOYSOUND",
    ],
    links: [
      {
        text: "Yokee",
        url: "https://yokeemusic.com/",
        isExternal: true
      },
      {
        text: "JOYSOUND",
        url: "https://gl.joysound.com/en/",
        isExternal: true
      }
    ]
  },
  {
    id: "amazon-prime-video",
    period: "Jun 2019 - Sep 2019",
    title: "Software Development Engineer - Intern",
    company: "Amazon - Prime Video",
    logo: "/images/logos/amazon-prime-video.svg",
    description: "Working in the Video Quality Analysis team, we're responsible for automating QA defect detection in Prime Video's catalog. My project involved engineering a real-time video analysis system that identified perceptible mismatches between subtitles and spoken dialogue using computer vision and voice activity detection.",
    technologies: ["AWS Lambda", "KVS", "S3", "Python", "OpenCV", "WebRTC VAD"],
    highlights: [
      "Built real-time video analysis system to detect subtitle-speech mismatches at human perception levels",
      "Integrated OpenCV SSIM and OCR for subtitle detection, WebRTC VAD for speech recognition",
      "Implemented serverless architecture using AWS Lambda, KVS, and S3 for scalable processing",
      "Optimized performance with selective frame processing based on scene/subtitle changes",
      "Leveraged statistical VAD model for improved async audio processing accuracy"
    ]
  },
  {
    id: "icl-urop",
    period: "Jul 2018 - Aug 2018",
    title: "Undergraduate Research Fellow",
    company: "Imperial College London",
    logo: "/images/logos/imperial-college-london.svg",
    description: "Research project in Threat Modelling across human, physical & cyber vulnerabilities with Prof. Emil Lupu.",
    technologies: ["Python", "Threat Modelling", "Wireshark", "Burl Suite"],
    highlights: [],
    links: [
      {
        text: "Prof. Emil Lupu",
        url: "https://profiles.imperial.ac.uk/e.c.lupu/about",
        isExternal: true
      }
    ]
  }
];

// Helper function to get all experiences in reverse chronological order
export function getAllExperiences(): Experience[] {
  return [...experiences];
}

// Helper function to get an experience by ID
export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id);
}
