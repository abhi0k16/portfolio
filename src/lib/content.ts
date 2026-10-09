const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const profile = {
  name: "Abhinav Kumar",
  roleLabel: "Software Engineer",
  title: "Specialist",
  company: "PwC",
  email: "kumar.abhinav9163@gmail.com",
  github: "https://github.com/abhi0k16",
  linkedin: "https://www.linkedin.com/in/abhi160k",
  leetcode: "https://leetcode.com/u/user0136O/",
  gfg: "https://www.geeksforgeeks.org/profile/kumarabhinav9163?tab=activity",
  photo: `${base}/abhinav.jpg`,
  resume: `${base}/resume.pdf`,
  headline: "GenAI pipelines, backend services, and cloud infrastructure.",
  summary:
    "Specialist at PwC, building retrieval-augmented generation pipelines, the backend services around them, and the React, Angular, and TypeScript interfaces in front. Environments go out through Kubernetes and Terraform. Before PwC, I interned at IBM Phemesoft on a large AWS data pipeline.",
};

export const about = {
  paragraphs: [
    "Most of my work is GenAI that has to stay useful on a specific domain, plus the services underneath it. I spend time on retrieval, prompt design, API cost, and the path from a model call to a real workflow.",
    "Alongside that I build the interfaces those workflows need, and I keep the infrastructure repeatable. I also practice data structures and algorithms steadily: 600+ problems on LeetCode and GeeksforGeeks, and a Codeforces finish of 67th out of 13,000+.",
  ],
  education: {
    school: "University of Petroleum & Energy Studies",
    degree: "B.Tech in Computer Science & Engineering",
    dates: "June 2021 — June 2025",
    detail: "CGPA 7.6/10",
  },
  facts: [
    { label: "PwC", value: "Since July 2025" },
    { label: "AWS", value: "Developer – Associate" },
    { label: "DSA", value: "600+ problems" },
  ],
};

export const experience = [
  {
    company: "PwC",
    role: "Specialist",
    dates: "July 2025 — Present",
    location: "On-site",
    points: [
      "Built and tuned RAG pipelines and OpenAI fine-tuning on custom datasets, cutting API cost by 30% and improving domain answers through prompt engineering.",
      "Built backend services and low-latency decision engines, tightening database access, service logic, APIs, and downstream integrations.",
      "Shipped reusable React.js, Angular.js, and TypeScript SSR components for policy search and submission.",
      "Ran Kubernetes with horizontal and vertical scaling, and used Terraform so environments come up the same way each time.",
      "Automated repetitive work with LangChain, CrewAI, and FastAPI.",
    ],
  },
  {
    company: "IBM Phemesoft",
    role: "Software Engineer Intern",
    dates: "June 2024 — July 2024",
    location: "Remote",
    points: [
      "Architected a serverless data pipeline with AWS S3, Glue, and ETL jobs for 500+ GB of processing.",
      "Queried 100+ GB in Athena and automated 12+ daily workflows with Lambda.",
      "Built 5 QuickSight dashboards used by 20+ stakeholders.",
    ],
  },
];

export const skillGroups = [
  {
    name: "Languages",
    items: ["Python", "Java", "C++", "SQL", "TypeScript", "JavaScript"],
  },
  {
    name: "Backend",
    items: ["REST APIs", "Microservices", "Spring Boot", "Hibernate", "Maven", "JDBC", "FastAPI", "JUnit", "jQuery"],
  },
  {
    name: "Frontend",
    items: ["React.js", "Angular.js", "TypeScript", "SSR"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS Lambda", "EC2", "S3", "IAM", "Glue", "Athena", "QuickSight", "Docker", "Kubernetes", "Terraform", "Azure", "CI/CD"],
  },
  {
    name: "Data & AI",
    items: ["MySQL", "LangChain", "OpenAI API", "Hugging Face", "RAG", "CrewAI", "FAISS", "Ollama", "NLP"],
  },
  {
    name: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"],
  },
];

export const projects = [
  {
    name: "StreamForge",
    description: "A Kafka-compatible message broker in modern C++.",
    problem: "Concurrent clients need a broker that keeps partitioned logs and answers Kafka-style requests without mixing networking, parsing, and storage.",
    features: [
      "Persistent partitioned logs and consumer message fetch",
      "Kafka protocol request and response handling",
      "Thread-pool request layer for concurrent clients",
      "Networking, protocol parsing, and storage kept separate",
      "CMake-based unit tests around the broker",
    ],
    tech: ["C++", "CMake", "TCP/IP", "Multithreading"],
    github: "https://github.com/abhi0k16/streamforge",
    mark: "SF",
  },
  {
    name: "Cloud File Vault",
    description: "Secure cloud file storage with metadata persistence and OTP sign-in.",
    problem: "People need a reliable place to store files, with access control that is stronger than a password alone.",
    features: [
      "File management with metadata stored alongside the objects",
      "OTP authentication through the JavaMail API",
      "AWS S3 and Amazon RDS for storage and retrieval",
      "EC2 and Lambda in the cloud path around the service",
    ],
    tech: ["Java", "React", "MySQL", "AWS S3", "RDS", "EC2", "Lambda", "JDBC"],
    github: "https://github.com/abhi0k16/Cloud-FileVault-In-Java",
    mark: "CV",
  },
  {
    name: "Film Seeker",
    description: "Movie recommendations using KNN similarity and NLP.",
    problem: "A catalog is only useful if someone can get a suggestion that actually matches the films they already like.",
    features: [
      "KNN-based similarity for personalized suggestions",
      "NLP over movie data to shape those suggestions",
      "REST APIs that fetch and serve movie data to the client",
    ],
    tech: ["Python", "KNN", "REST API", "NLP"],
    github: "https://github.com/abhi0k16/Film-Seeker",
    mark: "FS",
  },
];

export const engineering = [
  {
    name: "GenAI systems",
    text: "Retrieval-augmented generation, OpenAI fine-tuning on custom datasets, and prompt engineering for domain answers. Agent workflows run through LangChain, CrewAI, and FastAPI. One pipeline cut API cost by 30%.",
  },
  {
    name: "Backend services",
    text: "Low-latency decision engines, tighter database access, and APIs that feed downstream systems. The toolkit behind that work includes REST, microservices, Spring Boot, Hibernate, Maven, and JUnit.",
  },
  {
    name: "Cloud & infrastructure",
    text: "Kubernetes with horizontal and vertical scaling, Terraform for repeatable environments, and an earlier AWS pipeline: S3, Glue, Athena, Lambda, and QuickSight. Docker and Azure are part of the same toolkit.",
  },
  {
    name: "Interfaces",
    text: "Reusable React.js, Angular.js, and TypeScript server-rendered components for policy search and submission, built so the same workflow does not get rewritten for every screen.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    detail: "Issued 9 August 2024 · Valid through 9 August 2027",
    code: "f79604fc261445218fee95e6caa38fec",
    href: "https://aws.amazon.com/verification",
    cta: "Verify credential",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    detail: "Coursework listed on the resume, with the public profile linked here.",
    href: "https://www.geeksforgeeks.org/profile/kumarabhinav9163?tab=activity",
    cta: "View profile",
  },
];

export const achievements = [
  {
    text: "Ranked 67th among 13,000+ participants (Top 0.6%) in a Codeforces contest.",
  },
  {
    text: "Solved 600+ DSA problems across LeetCode and GeeksforGeeks.",
    links: [
      { label: "LeetCode", href: "https://leetcode.com/u/user0136O/" },
      { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/kumarabhinav9163?tab=activity" },
    ],
  },
];

export const repositories = [
  {
    name: "streamforge",
    description: "High-performance distributed message broker implemented in modern C++.",
    language: "C++",
    href: "https://github.com/abhi0k16/streamforge",
  },
  {
    name: "Cloud-FileVault-In-Java",
    description: "Secure cloud file storage with OTP access, MySQL metadata, and AWS storage.",
    language: "Java",
    href: "https://github.com/abhi0k16/Cloud-FileVault-In-Java",
  },
  {
    name: "Film-Seeker",
    description: "Movie recommendations with KNN similarity, NLP, and REST APIs.",
    language: "Python",
    href: "https://github.com/abhi0k16/Film-Seeker",
  },
  {
    name: "Campus-Navigation",
    description: "Campus shortest paths in C using the Floyd-Warshall algorithm.",
    language: "C",
    href: "https://github.com/abhi0k16/Campus-Navigation",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
