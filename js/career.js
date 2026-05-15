const timelineData = [
  {
    role: "Software Developer 2",
    company: "General Motors",
    dates: "January 2026 - May 2026",
    description: ["After being promoted to Software Developer 2 at GM, I worked to take on more initiatives and partner with stakeholders to improve the quality of product being created. The web application project I was working on at the time, Test Lifecycle Management (TLM), was migrated to Azure, and I worked to split the API into multiple microservices. The goal of the microservice refactor was to improve our deployment efficiency by allowing us to build and deploy only the microservices that had changed. The refactor also enabled greater customization for scaling the application, allowing us to minimize the usage of various services to keep cloud hosting costs down.",
      "I worked to create a standalone application using .NET to interface with TLM to assist labs with onboarding. Many labs had complex templates designed in Excel sheets. The tool allowed the Excel sheets to be quickly converted to the equivalent TLM data models and imported using external API endpoints. This cut the manual labor time to make and import extensive changes to templates from hours to minutes. For this application, I collaborated closely with our business partners to implement additional validation, add support for features that were under simultaneous development in TLM, and provide immediate support as problems were identified.",
      "Additionally, I was granted ownership of CICVAD, a web application used as a management system for external suppliers to submit designs and proposals for components. CICVAD's tech stack consisted of a Java back end with Spring Boot and Maven, Angular front end, and a MS SQL database. A GM employee would then review the submitted component and request changes or approve it. As the designated owner for CICVAD, I was responsible for rotating software keys, fixing bugs, and upgrading dependencies to match with GM's technical standards. The largest upgrade performed was the removal of exorbitant renewal fees by migrating the application from being hosted on a deprecated external platform to an in-house platform."],
    image: "images/career/gm-logo.webp"
  },
  {
    role: "Software Developer 1",
    company: "General Motors",
    dates: "January 2023 - January 2026",
    description: ["When I first started at General Motors, I worked on the Janus project. The tech stack involved a Java back end with Spring Boot and Maven, Angular front end with Material css, and a PostgreSQL database. It enabled creating a plan to manage a project from start to finish and track all tasks needed for completion. I improved many different facets of Janus including increasing Test Automation, expanding the in-application reporting feature, and enabling users from outside the company to visit Janus.",
      "A second web application project I developed for was Test Lifecycle Management (TLM). The tech stack was comprised of a Java back end with Quarkus and Maven, Angular front end with Material css, and a PostgreSQL database. TLM was similar to Janus, however it focused primarily on creating customized requests to be sent to labs and tracking the state of the request as the lab preformed the specified test. While working on TLM, I focused primarily on the feature for 'attribute groups', which allowed users to create predefined groups of fields to be added to requests that could be shared across labs. For example, an attribute group could be used to represent a selectable test dummy and configure a variety of its details. Attribute groups were a cornerstone of the application as they were widely adopted to represent a variety of different components and data configurations."],
    image: "images/career/gm-logo.webp"
  },
  {
    role: "Computer Science Grader",
    company: "Pennsylvania State University",
    dates: "January 2022 - May 2022",
    description: ["I worked as a grader for Penn State's Computer Science 102 class. In this class, students were taught about functions, parameters, recursion, arrays, and debugging with Python. I was initially assigned 50 students to grade for assignments and labs. Later, the positive feedback I received from the professor and students earned me a doubled share of 100 students for each lab and assignment."],
    image: "images/career/psu-logo.png"
  },
  {
    role: "Student Researcher",
    company: "Rocks Ethics Institute",
    dates: "September 2018 - April 2019",
    description: ["I was a student researcher in an investigation of security vulnerabilities in shipping ports caused by automation errors. We identified key areas where automation was present and assessed potential risks. We additionally used Python and Jupyter to map out the different ports, which goods those ports regularly received and where goods traveled to after passing through the port of entry. With this information, we were able to simulate the impacts of automation failures by showing which areas of the country and which goods would be impacted if port automation failures occured."],
    image: "images/career/psu-logo.png"
  },
  {
    role: "Software Development Intern",
    company: "Pforzheim University",
    dates: "July 2018 - August 2018",
    description: ["At Pforzheim University, I worked primarily on a project to implement a system for students and faculty to reset their passwords. Previously, you would need to come to the IT desk employees in person to reset passwords manually. To remedy this, I implemented a standard security question password retrieval setup that allowed a remote solution to this issue, and freed up time for the IT desk to assist in issues that were more urgent and complex."],
    image: "images/career/hs-pforzheim-logo.png"
  },
  {
    role: "Information Technology Intern",
    company: "Pforzheim District Bureau",
    dates: "June 2018 - July 2019",
    description: ["While living in Pforzheim for a summer, I worked at the District Bureau as an intern. My responsibilities involved maintenance of the city administration's servers. This included migrating the city's payroll servers to Windows 10. Additionally, I traveled to various areas around the city when servers encountered issues to assist in fixes."],
    image: "images/career/pforzheim-coa.jpg"
  },
  {
    role: "Software Engineering Intern",
    company: "Charité University Medical School and Hospital",
    dates: "April 2017 - July 2017",
    description: ["At Charité, I worked on a project to help automate the creation of doctor-patient letters. This was developed as a C# plugin for Microsoft Word that would automatically fetch relevant patient data and format the data into standardized tables and readily understandable. The goal was to standardize letters across medical divisions and doctors as well as to expedite the formulaic portions so doctors could prioritize the patient-specific messages. This saved an average of 1-2 hours in time per letter for doctors.",
      "An additional project I worked on was a specialized filter for incoming patient data. The data was being transferred via Mirth software and I created a filter to convert the data directly into a format compatible with the patient database. This allowed for patient data to be quickly sent across multiple facilities and stored in an appropriate format."],
    image: "images/career/Charite-logo.jpg"
  },
];

document.addEventListener("DOMContentLoaded", async () => {

  const container = document.querySelector(".timeline-items");

  // 1. Render timeline items FIRST
  for (const item of timelineData) {
    await loadTimelineItem(item);
  }

  // 2. NOW query DOM (important)
  const buttons = document.querySelectorAll(".timeline-date");
  const contents = document.querySelectorAll(".timeline-content");
  const items = document.querySelectorAll(".timeline-item");

  // 3. Set default active state
  if (contents.length > 0) {
    contents[0].classList.add("active");
    items[0].classList.add("active");
  }

  // 4. Attach event listeners AFTER render
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".timeline-item");
      const content = item.querySelector(".timeline-content");

      content.classList.toggle("active");
      item.classList.toggle("active");
    });
  });

});