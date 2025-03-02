
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
    id: "amazon-alexa-sde-ii-alexa+",
    period: "May 2024 - Present",
    title: "Software Development Engineer - SDE II",
    company: "Amazon - Alexa",
    logo: "/images/logos/amazon-alexa.svg",
    description: "With the earthquake that are Large Language Models in the tech world, Alexa has been re-engineered from the ground up into a truly remarkable personal assistant. Partnering with teams across the company, I am working to transition customers from Alexa to the newly revealed Alexa+.",
    technologies: ["LLM-based Agentic Workflows", "ECS/EC2", "DynamoDB", "Java", "AWS CDK - Typescript"],
    highlights: [],
    links: [
      {
        text: "Alexa+",
        url: "https://www.amazon.com/dp/B0DCCNHWV5",
        isExternal: true
      }
    ]
  },
  {
    id: "amazon-alexa-sde-ii-ccc",
    period: "Jul 2022 - May 2024",
    title: "Software Development Engineer - SDE II",
    company: "Amazon - Alexa",
    logo: "/images/logos/amazon-alexa.svg",
    description: "Led the launch of a new consent collection program for radio partners who want to implement interest-based advertismenet in their Alexa integrations whilst maintaining the high Alexa Privacy bar, TCFv2 frameworks and GDPR regulations. If you listen to onboarded radio partners on Alexa, check it out here!",
    technologies: ["AWS Lambda", "SQS", "DynamoDB", "CloudWatch", "Java", "Kotlin", "AWS CDK - Typescript", "TCFv2 Framework"],
    highlights: [
      "Customers receive relevant ads instead of generic ones and radio partners have more financial incentives to provide their radio streams for free on Alexa",
      "Implemented a customer-first solution, prioritizing customer experience while also maintaining a low barrier to entry for new radio partners who want to opt-into the solution",
      "Tech lead for the E2E designed, implemented and launch of the cookie consent collection framework",
      "Managing the delivery of the program on an ambitious deadline, working with a team of 7 engineers across the Seattle, London and Bangalore",
      "Supporting 98% of radio-listening hours in the United Kingdom and YY% in Germany",
      "Optimizing for both average and spike QPS/TPS based on customer behavior (including wake-up routines with 10-15x traffic spikes)"
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
      "Supported product scaling to 100k+ MAUs post-launch",
      "Implement and maintained integrations with regional external partners",
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
