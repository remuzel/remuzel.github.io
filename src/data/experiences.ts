
// Base interface for common properties
export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  logo: string; // Path to company logo
  technologies?: string[];
  highlights?: string[];
  links?: Array<{
    text: string;
    url: string;
    isExternal?: boolean;
  }>;
}

// Work-specific interface
export type WorkExperience = TimelineItem;

export const workExperiences: WorkExperience[] = [
  {
    id: "amazon-alexa-sde-iii",
    period: "Jul 2025 - Present",
    title: "Senior Software Engineer - SDE III",
    company: "Amazon - Alexa",
    logo: "/images/logos/amazon-alexa.svg",
    description: "With LLMs upheaving the tech industry, Alexa has been re-engineered from the ground up into a truly remarkable personal assistant. Partnering with teams across the company, I am working to transition customers from Alexa to Alexa+.",
    technologies: ["LLM-based Agentic Workflows", "ECS/EC2", "DynamoDB", "Java", "AWS CDK - Typescript"],
    highlights: [
      "Rolling out Alexa+ across worldwide markets via multiple Beta/Release programs",
      "Led a refactoring of 10+ services that reduced scaling effort for international reqs from 360 to 58 SDE weeks (83% reduction)",
      "Implemented LLM-based Agentic workflows for Alexa+ transition programs"
    ],
    links: [
      {
        text: "Alexa+",
        url: "https://www.amazon.com/newAlexa",
        isExternal: true
      }
    ]
  },
  {
    id: "amazon-alexa-sde-ii",
    period: "Jul 2022 - Jul 2025",
    title: "Software Development Engineer - SDE II",
    company: "Amazon - Alexa",
    logo: "/images/logos/amazon-alexa.svg",
    description: "Led the launch of a new consent collection program for radio partners who want to implement interest-based advertismenet in their Alexa integrations whilst maintaining the high Alexa Privacy bar, TCFv2 frameworks and GDPR regulations. If you listen to onboarded radio partners on Alexa, check it out here!",
    technologies: ["AWS Lambda", "SQS", "DynamoDB", "CloudWatch", "Java", "Kotlin", "AWS CDK - Typescript", "TCFv2 Framework"],
    highlights: [
      "Tech lead for a new consent collection program for Alexa EU radio partners unlocking interest-based advertising",
      "Led a team of 7-10 SDEs across London, Seattle and Bangalore",
      "Led the implementation of two AWS-based services which handle ~30M weekly radio requests across UK and DE",
      "Optimised the AWS infra to handle 10-15x QPS spikes based on customer traffic patterns to maintain P99 latency targets",
      "Designed around the high Alexa Privacy bar, TCFv2 frameworks and GDPR regulations",
      "Unlocked $XXMM advertisement revenue across EU5"
    ],
    links: [
      {
        text: "Alexa Privacy bar",
        url: "https://www.amazon.co.uk/Alexa-Privacy-Hub/b?node=17084411031",
        isExternal: true
      },
      {
        text: "TCFv2",
        url: "https://iabeurope.eu/transparency-consent-framework/",
        isExternal: true
      },
      {
        text: "check it out here!",
        url: "https://www.amazon.co.uk/alexa-privacy/apd/msp",
        isExternal: true
      }
    ]
  },
  {
    id: "amazon-alexa-sde-i",
    period: "Oct 2020 - Jul 2022",
    title: "Junior Software Development Engineer - SDE I",
    company: "Amazon - Alexa",
    logo: "/images/logos/amazon-alexa.svg",
    description: "In the Alexa International team, we champion features that delight customers outside of the US. My first major contribution was the development, launch and maintenance of a new \"Karaoke on Alexa\" feature for customers in Japan, Spain, Mexico and the UK in partnership with Yokee and JOYSOUND.",
    technologies: ["ECS/Fargate", "DynamoDB", "CloudWatch", "Java", "Kotlin", "AWS CDK - Typescript", "Alexa Skills"],
    highlights: [
      "Designed, developed and launched key features such as favourites and playback history",
      "Managed DevOps responsibilities across AWS regions (us-east-1, us-west-2 and eu-west-1)",
      "Scaled product and service infrastructure to handle 100k+ MAUs",
      "Designed and maintained integrations with regional external partners (Yokee & JOYSOUND)",
    ],
    links: [
      {
        text: "\"Karaoke on Alexa\" feature",
        url: "https://www.stingray.com/news-and-articles/news/sing-karaoke-on-alexa-echo-show-and-fire-tv-devices/",
        isExternal: true
      },
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
    description: "Working in the Video Quality Analysis team, we're responsible for automating QA defect detection in Prime Video's catalog. My project involved engineering a real-time video analysis system that identified perceptible mismatches between subtitles and spoken dialogue.",
    technologies: ["AWS Lambda", "KVS", "S3", "Python", "OpenCV", "WebRTC VAD"],
    highlights: [
      "Built real-time video analysis system to detect subtitle-speech mismatches at human perception levels",
      "Integrated OpenCV SSIM and OCR for subtitle detection, WebRTC VAD for speech recognition",
      "Implemented serverless architecture using KVS and AWS Lambda for scalable processing",
      "Optimized performance with selective frame processing based on scene/subtitle changes",
      "Leveraged statistical VAD model for improved async audio processing accuracy"
    ],
    links: [
      {
        text: "Video Quality Analysis team",
        url: "https://www.amazon.science/blog/how-prime-video-uses-machine-learning-to-ensure-video-quality",
        isExternal: true
      }
    ]
  },
  {
    id: "icl-urop",
    period: "Jul 2018 - Aug 2018",
    title: "Undergraduate Research Fellow",
    company: "Imperial College London",
    logo: "/images/logos/imperial-college-london.svg",
    description: "Research project in Threat Modelling across human, physical & cyber vulnerabilities with Prof. Emil Lupu.",
    technologies: ["Python", "Threat Modelling", "Wireshark", "Burp Suite"],
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

// Helper function to get all work experiences in reverse chronological order
export function getAllWorkExperiences(): WorkExperience[] {
  return [...workExperiences];
}

// Helper function to get a work experience by ID
export function getWorkExperienceById(id: string): WorkExperience | undefined {
  return workExperiences.find(exp => exp.id === id);
}
