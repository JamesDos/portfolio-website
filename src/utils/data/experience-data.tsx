export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    location: "Seattle, WA",
    startDate: "Sept. 2025",
    endDate: "Dec. 2025",
    responsibilities: [
      "Architected observability portal to track variation family lifecycles, reducing data gathering time per family from 30+ minutes to seconds, saving 25+ hours a week.",
      "Engineered an offline batch processing pipeline using AWS EventBridge and Step Functions to automate daily EMR jobs to process and provide insights for 30+ million trace IDs.",
      "Wrote EMR Spark jobs in Scala to aggregate family data across Glue Catalog tables, writing processed data as JSON files and partitioning to S3 storage.",
      "Leveraged AWS Lambda and API Gateway (Java) deployed through CI/CD pipelines to serve on-demand variation family visualizations to React frontend via RESTful endpoints.",
    ],
  },
  {
    company: "Big Red Hacks",
    role: "Software Developer",
    location: "Ithaca, NY",
    startDate: "Nov. 2024",
    endDate: "Present",
    responsibilities: [
      "Architected registration system for yearly hackathon using Express and MongoDB, managing 500+ participants.",
      "Designed event schema to persist hackathon data, supporting multi-year analytics and participant tracking.",
      "Wrote RESTful endpoints for participant tracking and capacity management, integrating Zod schema validation middleware for type-safe request handling.",
      "Developed internal admin tooling, leveraging MongoDB aggregation pipelines for filtering and subsequent CSV generation.",
    ],
  },
  {
    company: "Cornell University",
    role: "Teaching Assistant",
    location: "Ithaca, NY",
    startDate: "Jan. 2025",
    endDate: "May 2025",
    responsibilities: [
      "Facilitated learning of discrete math concepts such as logic and graph theory for 300+ undergraduate students.",
      "Led weekly discussion sections and office hours of 30+ students, reinforcing problem solving and reasoning skills.",
      "Collaborated with professors and TAs in designing course curriculum and grading weekly assignments.",
    ],
  },
  {
    company: "Cornell University",
    role: "Bachelor of Arts - Computer Science",
    location: "Ithaca, NY",
    startDate: "Aug. 2022",
    endDate: "May 2026",
    responsibilities: [
      "Relevant Coursework: Object-Oriented Programming and Data Structures, Analysis of Algorithms, Embedded \
      Systems, Machine Learning, Database Systems, Robotics, Business Intelligence Systems, iOS & Backend Development",
      "Deans list: Spring 2022 - Spring 2025",
    ],
  },
];
