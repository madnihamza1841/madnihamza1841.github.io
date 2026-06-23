export const profile = {
  name: 'Hamza Madni',
  title: 'Software Engineer · Data Scientist',
  location: 'Nürnberg, Germany',
  email: 'madni.hamza1997@gmail.com',
  phone: '+49 176 27803115',
  github: 'https://github.com/madnihamza1841',
  githubUser: 'madnihamza1841',
  linkedin: 'https://www.linkedin.com/in/muhammad-hamza-madni/',
  cv: `${import.meta.env.BASE_URL}Hamza_Madni_CV.pdf`,
  photo: `${import.meta.env.BASE_URL}profile.png`,
  tagline: "I architect enterprise data systems that accelerate analytics and automate mission-critical operations.",
  summary:
    "Senior Software Engineer with 5+ years designing and deploying production data systems. Specialized in full-stack data architecture—from backend engineering and resilient ETL pipelines to advanced analytics and business intelligence. Track record of building solutions that reduce operational costs by millions, accelerate time-to-insight, and transform data into competitive advantage.",
};

export interface SubRole {
  name: string;
  role?: string;
  link?: string;
  points: string[];
}

// Phrases inside experience bullet text that should render as links.
export const inlineLinks: Record<string, string> = {
  OpenEdX: 'https://github.com/edly-io/edx-platform',
};

export interface Job {
  role: string;
  company: string;
  type?: string;
  location: string;
  period: string;
  points: string[];
  link?: string;
  subs?: SubRole[];
}

export const experience: Job[] = [
  {
    role: 'Software Engineer',
    company: 'Arbisoft Ltd.',
    location: 'Remote, USA',
    period: 'Jun 2021 – Mar 2026',
    points: [
      'Led a team of 30 to build a custom CRM and customer portal for a Houston-based event-management unicorn — streamlining operations and saving the client $400,000 annually by cutting SaaS reliance.',
      'Created an AI-driven meeting-scheduling service integrated with Supercal.com algorithms to enhance email-based meeting management.',
      'Built an automation-testing pipeline for Edly.io (OpenEdX): Django unit tests, Selenium frontend automation, JMeter/Locust stress testing, and GitHub Actions running tests per release.',
      'Built and maintained internal tooling, GUI components and dashboards to support team workflows.',
    ],
    subs: [
      {
        name: 'Supercal.com',
        role: 'Senior Software Engineer',
        link: 'https://supercal.com',
        points: [
          "Created an AI-powered meeting-scheduling service that plugs into Supercal.com's algorithm to provide a conversational layer inside your email threads — scheduling and managing meetings automatically.",
        ],
      },
      {
        name: "Walter's Wedding Estates",
        role: 'Lead Software Engineer',
        points: [
          'Led the team of 30 that developed a customised CRM and customer portal for a unicorn in the event-management business in Texas/Houston, managing the entire company and its subsidiaries.',
          'The platform saved the client $400,000 yearly on SaaS tools and digitised many of their existing flows.',
        ],
      },
      {
        name: 'Waltly.net',
        role: 'Lead Software Engineer',
        points: [
          'Developed the backend for a 2D and 3D event-diagramming tool for a unicorn client to replace their existing tool, Waltly.net.',
          'The platform saved the client an annual subscription cost of $72,000.',
        ],
      },
      {
        name: 'Edly.io',
        role: 'Full Stack Engineer',
        link: 'https://edly.io',
        points: [
          'Edly is an OpenEdX-based learning-management platform offering a full package of services to educational and training institutes.',
          'Worked as a full-stack developer specialising in Django, DRF and React.',
        ],
      },
    ],
  },
  {
    role: 'Senior Product Executive',
    company: 'PakWheels.com',
    type: 'Full-time',
    location: 'Lahore, Pakistan',
    period: 'Jun 2020 – Jun 2021',
    points: [
      'Increased daily listings by 600% and revenue by 250% in one year.',
      'Built Power BI dashboards tracking daily key metrics and digitised event-based tracking in Google Analytics and Hotjar.',
      'Ran data reporting, ad-hoc analysis and stakeholder analytics; owned recurring reporting and KPI definitions for cross-functional teams.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Oddy Labs',
    type: 'Part-time',
    location: 'India · Remote',
    period: 'May 2018 – Jun 2019',
    link: 'https://www.oddylabs.com/',
    points: [
      'Delivered data-processing, data-science and deep-learning projects remotely:',
      'Statistical machine-learning projects on the MNIST and CIFAR-100 datasets.',
      'Trained convolutional neural networks using TensorFlow and Scikit-learn.',
      'Built a cross-view image-retrieval system using satellite and street-view image classification.',
      'Data visualisation with Tableau, Power BI, RStudio, Matplotlib and ggplot.',
    ],
  },
];

export interface Cert {
  name: string;
  issuer: string;
  preview: string;
  file: string;
}

// Certificates — preview images render from public/certifications/.
export const certifications: Cert[] = [
  {
    name: 'Deep Learning for Industry',
    issuer: 'Educative',
    preview: 'certifications/deep-learning.png',
    file: 'certifications/deep-learning.pdf',
  },
  {
    name: 'Google Analytics for Beginners',
    issuer: 'Google Analytics Academy',
    preview: 'certifications/google-analytics.png',
    file: 'certifications/google-analytics.pdf',
  },
  {
    name: 'Introduction to Data Studio',
    issuer: 'Google Analytics Academy',
    preview: 'certifications/data-studio.png',
    file: 'certifications/data-studio.pdf',
  },
  {
    name: 'Business Ethics: Compliance & Confidentiality',
    issuer: 'ilmX',
    preview: 'certifications/business-ethics.png',
    file: 'certifications/business-ethics.pdf',
  },
  {
    name: 'Information Security Essentials',
    issuer: 'ilmX',
    preview: 'certifications/info-security.png',
    file: 'certifications/info-security.pdf',
  },
  {
    name: 'Mental Wellbeing for Everyone',
    issuer: 'ilmX',
    preview: 'certifications/mental-wellbeing.png',
    file: 'certifications/mental-wellbeing.pdf',
  },
  {
    name: 'Preventing Workplace Harassment',
    issuer: 'ilmX',
    preview: 'certifications/harassment.png',
    file: 'certifications/harassment.pdf',
  },
  {
    name: 'Reducing Your Environmental Footprint',
    issuer: 'ilmX',
    preview: 'certifications/environmental-footprint.png',
    file: 'certifications/environmental-footprint.pdf',
  },
  {
    name: 'Workplace Safety and Hygiene',
    issuer: 'ilmX',
    preview: 'certifications/workplace-safety.png',
    file: 'certifications/workplace-safety.pdf',
  },
];

export interface Letter {
  org: string;
  role: string;
  preview: string;
  file: string;
}

// Experience letters — preview images render from public/experience-letters/.
export const letters: Letter[] = [
  {
    org: 'Arbisoft LLC',
    role: 'Experience certificate',
    preview: 'experience-letters/arbisoft-llc.png',
    file: 'experience-letters/arbisoft-llc.pdf',
  },
  {
    org: 'Arbisoft Ltd.',
    role: 'Full-time permanent employee',
    preview: 'experience-letters/arbisoft-ltd.png',
    file: 'experience-letters/arbisoft-ltd.pdf',
  },
  {
    org: 'PakWheels.com',
    role: 'Work experience certificate',
    preview: 'experience-letters/pakwheels.png',
    file: 'experience-letters/pakwheels.jpg',
  },
];

export interface Project {
  name: string;
  icon: string;
  accent: string;
  blurb: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: 'Supercal',
    icon: 'calendar-event',
    accent: '#818cf8',
    blurb:
      'AI-powered meeting-scheduling platform that finds the optimum time for every attendee based on their preferences. Deployed and managed through GitHub Actions.',
    tags: ['LangChain', 'LangGraph', 'Python', 'AWS'],
    link: '',
  },
  {
    name: 'Waltly',
    icon: 'cube-3d-sphere',
    accent: '#5dcaa5',
    blurb:
      '2D and 3D event-diagramming tool built for a US event-management unicorn. Django backend with a React, HTML Canvas and Three.js frontend.',
    tags: ['Three.js', 'React', 'Django', 'Canvas'],
    link: '',
  },
  {
    name: 'Edly',
    icon: 'school',
    accent: '#f0997b',
    blurb:
      'OpenEdX-based LMS and studio creator delivering learning management, content authoring and e-commerce to universities and businesses worldwide.',
    tags: ['OpenEdX', 'Selenium', 'CI/CD', 'Python'],
    link: '',
  },
  {
    name: 'Scholar Analytics',
    icon: 'chart-dots',
    accent: '#ef9f27',
    blurb:
      'MATLAB pipeline scraping and validating thousands of Google Scholar profiles, correcting inconsistencies across half the dataset and visualising trends for faster decisions.',
    tags: ['MATLAB', 'Data validation', 'Visualisation'],
    link: 'https://github.com/madnihamza1841/lums-sproj-google-scholar-analytics-project',
  },
];

export const studies: Record<
  string,
  { role: string; context: string; did: string[]; impact: string }
> = {
  Supercal: {
    role: 'Engineer — AI & backend',
    context:
      'Scheduling a meeting across busy calendars is a constraint-satisfaction problem dressed up as an email thread. Supercal solves it conversationally.',
    did: [
      "Built a conversational agent (LangChain + LangGraph) that reads an email thread and negotiates times on the user's behalf.",
      'Designed an SQS/S3-driven pipeline so scheduling runs asynchronously and scales with inbound volume.',
      'Shipped continuously through GitHub Actions with automated checks on every release.',
    ],
    impact:
      'Turned multi-email back-and-forth into a single hand-off to an agent that lands on the optimal slot for every attendee.',
  },
  Waltly: {
    role: 'Full-stack engineer',
    context:
      'Event planners need to lay out floors, seating and 3D scenes visually. Waltly is a browser-based 2D/3D diagramming canvas for a US event-management unicorn.',
    did: [
      'Built interactive 2D editing on HTML Canvas and 3D scenes with Three.js.',
      'Backed the editor with a Python/Django API for persistence and collaboration.',
      'Tuned rendering so large floor plans stay smooth in the browser.',
    ],
    impact: 'Gave non-technical planners a single tool to design events in 2D and walk them in 3D.',
  },
  Edly: {
    role: 'Engineer — platform & QA automation',
    context:
      'Edly delivers OpenEdX-based learning platforms to universities and businesses — which means shipping reliably on top of a large, complex codebase.',
    did: [
      'Built an automation-testing pipeline: Django unit tests, Selenium frontend automation, and JMeter/Locust stress testing.',
      'Wired it all into GitHub Actions to run on every release.',
      'Maintained LMS, authoring studio and e-commerce features for global clients.',
    ],
    impact:
      'Caught regressions before release and gave the team confidence to ship a sprawling platform frequently.',
  },
  'Scholar Analytics': {
    role: 'Researcher / data engineer — LUMS senior project',
    context:
      'Academic-ranking data is messy and inconsistent at scale. This project audited Google Scholar profiles to surface and fix errors.',
    did: [
      'Built MATLAB pipelines to scrape and validate thousands of profiles.',
      'Detected and corrected inconsistencies across more than half the dataset.',
      'Visualised trends to support faster, evidence-based decisions.',
    ],
    impact: 'Produced a cleaned, trustworthy dataset and clear visual trends from previously unreliable data.',
  },
};

export interface MoreProject {
  name: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
}

// University & personal projects — shown on the /work page under "More projects".
export const moreProjects: MoreProject[] = [
  {
    name: 'HR Data Analytics',
    period: 'Mar 2020 – May 2020',
    summary: 'Predicting employee-retention risk from HR records and Big Five personality results.',
    points: [
      'Analysed company HR records alongside Big Five test results to surface the drivers of weak employee retention.',
      'Used statistical analysis and clustering algorithms to segment employees and recommend targeted retention measures.',
    ],
    tags: ['Clustering', 'Statistical analysis'],
  },
  {
    name: 'How Well Am I Driving',
    period: 'Mar 2019 – May 2020',
    summary: 'A driving-quality rating system for the transport industry using camera feeds and car-sensor data.',
    points: [
      'Built the data-collection pipeline: captured timestamped car-sensor readings via a Comma AI Panda device and decoded them with a Python script.',
      'Plotted and analysed the decoded sensor readings in MATLAB to feed the deep-learning rating models.',
    ],
    tags: ['Python', 'MATLAB', 'Sensor data'],
  },
  {
    name: 'PRECON Short-Term Load Forecasting',
    period: 'Feb 2020 – May 2020',
    summary: 'Forecasting household electricity load from one-second smart-meter data.',
    points: [
      'Trained models to predict future hourly load for houses from one-second-granularity smart-meter consumption data.',
      'Built an additional model to estimate the number of occupants in a house from its power-consumption patterns.',
    ],
    tags: ['Time-series forecasting', 'Machine learning'],
  },
  {
    name: "Sarcasm Detection using Google's Word2Vec",
    period: 'Apr 2020',
    summary: "Detecting sarcasm in news headlines using Google's Word2Vec embeddings.",
    points: [
      "Transformed news headlines into vectors using Google's 300-dimensional Word2Vec representation.",
      'Trained and compared logistic regression, K-nearest neighbours and perceptron models — multinomial logistic regression performed best.',
    ],
    tags: ['Word2Vec', 'NLP', 'Classification'],
  },
  {
    name: 'Sentiment Classification',
    period: 'Apr 2020',
    summary: 'Sentiment classification on the Twitter US Airline dataset.',
    points: [
      'Implemented multinomial logistic regression from scratch (softmax, cross-entropy loss, mini-batch gradient descent).',
      'Compared the results against a Naive Bayes classifier on labelled tweets.',
    ],
    tags: ['NLP', 'Logistic regression', 'Naive Bayes'],
  },
  {
    name: 'HumNava',
    period: 'Aug 2019 – Jan 2020',
    summary: 'An accessibility app for hearing-impaired students at Hamza Foundation School.',
    points: [
      'Designed an application that translates Pakistan Sign Language to English and back using direct mapping.',
      'Added a texting feature so students could communicate within the app.',
    ],
    tags: ['Accessibility', 'Mobile app'],
  },
  {
    name: 'SAMSUNG vs HAIER Retail Analytics',
    period: 'Sep 2019 – Dec 2019',
    summary: 'Comparative retail analysis of SAMSUNG and HAIER outlets.',
    points: [
      'Compared the two brands across brand positioning, online-marketing campaigns and retail mixes.',
      'Produced business-analytics insights to inform retail strategy.',
    ],
    tags: ['Business analytics', 'Market research'],
  },
  {
    name: 'Airline Database Management System',
    period: 'Oct 2019 – Nov 2019',
    summary: 'A relational database for airline operations.',
    points: [
      'Designed an SQL schema with multiple entities and relationships.',
      'Implemented it in MySQL and populated it with data for user testing.',
    ],
    tags: ['MySQL', 'Database design'],
  },
  {
    name: 'Data Analytics on Fish Orders Dataset',
    period: 'Aug 2019 – Sep 2019',
    summary: 'Order and user-behaviour analysis for fish vendors in Pakistan.',
    points: [
      'Analysed online order placements and user behaviour for fish vendors across Pakistan.',
      'Proposed targeted marketing strategies for Android vs iPhone users by geographic location.',
    ],
    tags: ['Data analysis', 'Marketing analytics'],
  },
  {
    name: 'EDU-GATE',
    period: 'Dec 2018 – May 2019',
    summary: 'An Android marketplace connecting students with home tutors.',
    points: [
      'Built an Android app linking students and home tutors.',
      'Gave a central administrator control over all student–tutor interactions and profiles.',
    ],
    tags: ['Android', 'Mobile app'],
  },
];

// Headline competency areas shown as a widget above the detailed skill groups.
export const coreSkills = [
  { label: 'Software Engineering', icon: 'code' },
  { label: 'Product Management', icon: 'layout-grid' },
  { label: 'Data Analytics', icon: 'chart-histogram' },
  { label: 'Business Intelligence', icon: 'chart-bar' },
  { label: 'Machine Learning', icon: 'brain' },
  { label: 'Data Engineering', icon: 'database' },
  { label: 'AI & LLM Applications', icon: 'robot' },
  { label: 'Full-Stack Development', icon: 'stack-2' },
  { label: 'CI/CD & DevOps', icon: 'git-merge' },
  { label: 'Data Visualization', icon: 'chart-dots-3' },
];

export const skills = [
  {
    group: 'Programming',
    items: ['Python', 'MATLAB', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Django', 'C / C++', 'C# / .NET', 'Go', 'R'],
  },
  {
    group: 'Analytics & Reporting',
    items: ['SQL', 'Power BI', 'Tableau', 'Google Data Studio', 'Google Analytics', 'Excel Power Query', 'ETL', 'KPI reporting', 'Automated pipelines'],
  },
  {
    group: 'AI & Low-Code',
    items: ['LangChain', 'LlamaIndex', 'Claude Code', 'Cursor', 'Power Apps', 'Mendix', 'Figma'],
  },
  {
    group: 'DevOps & Tooling',
    items: ['Git', 'GitLab', 'GitHub Actions', 'CI/CD pipelines', 'Release deployment', 'JIRA', 'Salesforce'],
  },
];

export const education = [
  {
    school: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
    degree: 'M.Sc. Data Science',
    period: '10/2023 – 10/2027',
    location: 'Erlangen-Nürnberg, Germany',
    detail: 'Pattern Recognition, Deep Learning, Computer Vision, Mathematics of Learning, NLP.',
  },
  {
    school: 'Lahore University of Management Sciences (LUMS)',
    degree: 'B.Sc. (Hons.) Computer Science',
    period: '09/2016 – 05/2020',
    location: 'Lahore, Pakistan',
    detail: 'Machine Learning, Data Mining, Computer Vision, Algorithms, Business Intelligence.',
  },
];

export const excludeRepos = new Set<string>([
  'Supercal-Conversational',
  'lums-sproj-google-scholar-analytics-project',
]);
