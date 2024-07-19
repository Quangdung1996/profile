import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Dung Bui",
  initials: "DV",
  url: "https://github.com/Quangdung1996",
  location: "Ho Chi Minh, Viet Nam",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer.I'm a web developer with 5+ years of experience in C#.NET technologies. I am currently working remotely for DWS.Cloud. I love this company; it's wonderful to have such friendly and highly skilled colleagues.",
  summary:
    "I have extensive experience in developing and deploying applications on Azure Cloud, leveraging its various services to build scalable and resilient solutions. My expertise includes designing and implementing microservices architectures, ensuring that each service is modular, maintainable, and independently deployable. I am proficient in using Docker for containerization, which streamlines the development, testing, and deployment processes by providing consistent environments across different stages of the software lifecycle. My skill set allows me to deliver robust and efficient web applications that meet modern development standards.",
  avatarUrl: "/me.png",
  skills: [
    "Angular",
    "Next.js",
    "Typescript",
    "C#",
    "Dotnet",
    "SQL",
    "Docker",
    "Microservice",
    "Azure Cloud"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "quangdung1996.97@gmail.com",
    tel: "+84",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Quangdung1996",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/d%C5%A9ng-b%C3%B9i-3331b4194/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:quangdung1996.97@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Dws",
      href: "https://www.dws.cloud",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/dws.png",
      start: "Sep 2021",
      end: "Now",
      description:
        " <h4>1. Project: Driver and Loader Management System</h4>\
    <p>Developed an application to manage drivers and loaders, ensuring the safe delivery of services. The application handled tasks such as packing and preparing goods for transport, loading and unloading vehicles, managing and recording work time, and facilitating effective communication with customers and management.</p>\
    <p>The system was developed using .NET Core 6 with the ABP framework.</p>\
    <p><strong>Technologies used:</strong> .NET 6, Angular 12, Azure Cloud.</p>\
    <h4>2. Project: Bungy</h4>\
    <p>Developed Web APIs for a web application, contributing to the backend development and integration of various services.</p>\
    <p>The system was developed using .NET Core 6 with the ABP framework.</p>\
    <p><strong>Technologies used:</strong> .NET 6, Angular 12, Azure Cloud, RabbitMQ, Microservices architecture.</p>"
    },
    {
      company: "Silicon Stack Pty Ltd",
      badges: [],
      href: "https://siliconstack.com.au",
      location: "Full-time",
      title: "Software Engineer",
      logoUrl: "/silicon.jpg",
      start: "Feb 2021",
      end: "Sep 2021",
      description:
        " <h1>Developed Product for Food Technology</h1>\
    <h2>1. Overview</h2>\
    <p>Spearheaded the development of a cutting-edge product tailored for the food technology industry. The project involved comprehensive application development, focusing on the efficient handling and processing of large datasets.</p>\
    <h2>2. Data Management</h2>\
    <p>Engineered the application to manage and analyze vast amounts of data, ensuring high performance and reliability. This included implementing robust data storage solutions and optimizing data retrieval processes.</p>\
    <h2>3. Cloud Integration</h2>\
    <p>Leveraged Microsoft Azure cloud services to enhance the system\'s scalability, security, and performance. Utilized various Azure services such as Azure SQL Database, Azure Blob Storage, and Azure Functions to build a resilient and scalable architecture.</p>\
    <h2>4. Optimization</h2>\
    <p>Focused on optimizing the application\'s performance through cloud-based solutions, enabling seamless data processing and analytics. Implemented best practices for cloud resource management to maintain cost-effectiveness and efficiency.</p>\
    <h2>5. Technology Stack</h2>\
    <p>Employed a modern technology stack, including C#, .NET, Azure DevOps for continuous integration and deployment (CI/CD), and other relevant tools to ensure a robust and maintainable codebase.</p>\
    <h2>6. Outcomes</h2>\
    <p>Delivered a state-of-the-art application that significantly improved the efficiency and accuracy of food technology processes, providing valuable insights through advanced data analytics and reporting capabilities.</p>"
    },
    {
      company: "Gannha",
      href: "https://www.gannha.com/",
      badges: [],
      location: "Full-time",
      title: "Software Engineer",
      logoUrl: "/gannha.jpg",
      start: "Sep 2020",
      end: "Mar 2020",
      description:
        "<p> Develop a comprehensive system to search for the nearest addresses of various establishments such as coffee shops, bars, restaurants, etc.</p>\
    <h2>Key Responsibilities</h2>\
    <h3>1. Requirement Analysis:</h3>\
    <ul>\
      <li>Collaborate with stakeholders to gather and understand requirements.</li>\
      <li>Define the scope and objectives of the system.</li>\
    </ul>\
    <h3>2. System Design:</h3>\
    <ul>\
      <li>Design the architecture of the system ensuring scalability and performance.</li>\
      <li>Use design patterns and best practices to ensure robust and maintainable code.</li>\
    </ul>\
    <h3>3. Database Design:</h3>\
    <ul>\
      <li>Design and implement the database schema to store information about establishments.</li>\
      <li>Optimize database queries for fast retrieval of search results.</li>\
    </ul>\
    <h3>4. Development:</h3>\
    <ul>\
      <li>Implement the backend logic using C# and ASP.NET Core.</li>\
      <li>Develop RESTful APIs to handle search requests and return results.</li>\
      <li>Integrate with mapping and geolocation services to find the nearest addresses.</li>\
    </ul>\
    <h3>5. Frontend Integration:</h3>\
    <ul>\
      <li>Work with frontend developers to integrate the search functionality into the user interface.</li>\
      <li>Ensure seamless user experience with responsive and intuitive UI components.</li>\
    </ul>\
    <h3>6. Testing:</h3>\
    <ul>\
      <li>Write unit tests and integration tests to ensure code quality and reliability.</li>\
      <li>Perform thorough testing to identify and fix bugs or issues.</li>\
    </ul>",
    },
    {
      company: "Logix Technology",
      href: "https://www.logixtek.com/",
      badges: [],
      location: "Full-time",
      title: "Software Engineer",
      logoUrl: "/logixtechnology_logo.jpg",
      start: "Jul 2019",
      end: "Jul 2020",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    }
  ],
  education: [
    {
      school: "VNUHCM - University of Science",
      href: "https://en.hcmus.edu.vn/",
      degree: "Computer Science",
      logoUrl: "/1631355050079.jpg",
      start: "2015",
      end: "2020",
    },
  ],
  projects: [
  ],
  hackathons: [

  ],
} as const;
