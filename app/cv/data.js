const profile = {
  name: "Dat Mai Van",
  title: "Frontend Engineer / Web3 Enthusiast",
  location: "Ho Chi Minh City, Vietnam",
  email: "datmv01@gmail.com",
  phone: "+84 818 012 377",
  website: "https://datmv.vercel.app",
  summary:
    "Frontend engineer with 4+ years of experience building high-performance interfaces using React and Next.js. Passionate about performance, accessibility, and Web3 integration.",
};

const sections = {
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "ACME Tech",
      date: "2022 — Present",
      bullets: [
        "Designed and developed a **B2B analytics dashboard** using **Next.js** and **TailwindCSS**, reducing page load time by **40%**.",
        "Integrated **GraphQL APIs** with React Query to optimize data fetching, reducing request count by **25%**.",
        "Implemented **CI/CD pipelines** with GitHub Actions and Vercel for faster releases.",
        "Contributed to the **internal design system** and improved UI/UX consistency.",
        "Mentored junior developers, improving overall code quality.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Startup XYZ",
      date: "2019 — 2022",
      bullets: [
        "Built **SPA** with React and Redux Toolkit, optimizing performance for **mobile users**.",
        "Implemented **automated landing pages** for marketing, increasing leads by **30%**.",
        "Conducted **A/B tests** and behavior analysis using Google Analytics.",
        "Designed a **shared UI component library** ensuring consistent branding.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's in Software Engineer",
      school: "FPT University",
      date: "2021 — 2025",
    },
  ],
  skills: [
    {
      category: "Frontend Development",
      items: [
        "**HTML5**, **CSS3 (Flexbox, Grid)**",
        "**JavaScript (ES6+)**",
        "**React**, **Next.js**",
        "**Tailwind CSS**, Styled Components",
        "Responsive Design, **Accessibility (WCAG)**",
        "Performance Optimization & Lazy Loading",
      ],
    },
    {
      category: "Backend / DevOps",
      items: [
        "**Node.js**, Express.js",
        "**MongoDB**, PostgreSQL",
        "RESTful API, **GraphQL**",
        "Vercel, Netlify, **Docker (basic)**",
      ],
    },
    {
      category: "Certificates",
      items: [
        "TOEIC: 700",
        "AWS Certified Developer - Associate",
        "AWS Cloud Practitioner",
        "AWS Certified Solutions Architect - Associate",
      ],
    },
    {
      category: "Tools & Other",
      items: [
        "**Git / GitHub / GitLab CI**",
        "Figma, Adobe XD",
        "Agile / Scrum workflow",
        "Unit Testing (**Jest**, **React Testing Library**)",
        "Basic Blockchain (**Ethers.js**, MetaMask integration)",
      ],
    },
  ],
  projects: [
    {
      name: "Portfolio & Blog",
      desc: "Personal portfolio built with **Next.js + MDX**, with **SEO** and **RSS** support.",
      link: "https://your-site.dev",
    },
    {
      name: "Onchain Explorer (PoC)",
      desc: "A **lightweight blockchain explorer** using **Ethers.js** and **Alchemy API**.",
    },
  ],
};

export { profile, sections };
