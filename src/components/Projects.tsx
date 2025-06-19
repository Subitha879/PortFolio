// import React from 'react';
// import { ExternalLink, Github, Code } from 'lucide-react';

// const Projects: React.FC = () => {
//   const projects = [
//     {
//       title: "Restopedic",
//       description: "The Restopedic Furniture Project is focused on creating a seamless and efficient platform for managing and showcasing high-quality furniture products, specifically designed for comfort and durability. The project includes a Product Dashboard where administrators can manage product details such as title, category, price, description, stock quantity & specifications.",
//       technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
//       category: "E-commerce Platform"
//     },
//     {
//       title: "Carrier Blitz",
//       description: "It's a Job Portal to integrate with students, employees, employers and institutions. Students will learn the latest technologies. Employees will search for jobs. Employer will do the job post and get the best resources. And institute will apply campus interview, seminars etc.",
//       technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
//       category: "Job Portal"
//     },
//     {
//       title: "Villu Genius",
//       description: "The Villu Genius Loan App Project is a user-friendly and efficient digital platform designed to simplify the loan application and management process. Built with modern web technologies, the app offers a seamless experience for users seeking personal business, or other types of loans. It includes key features such as instant loan eligibility checks, document uploads, real-time loan tracking, automated EMI calculations, and secure payment integrations.",
//       technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
//       category: "Fintech Application"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Here are some of the projects I've worked on, showcasing my expertise in full-stack development
//           </p>
//         </div>

//         <div className="grid gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
//             >
//               <div className="p-8">
//                 <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
//                   <div className="flex-1">
//                     <div className="flex items-center mb-3">
//                       <Code className="w-6 h-6 text-blue-600 mr-2" />
//                       <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
//                         {project.category}
//                       </span>
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
//                     <p className="text-gray-600 leading-relaxed mb-6">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                   <div className="mb-4 lg:mb-0">
//                     <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex space-x-3">
//                     <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
//                       <Github className="w-4 h-4 mr-2" />
//                       Code
//                     </button>
//                     <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <p className="text-gray-600 mb-4">Want to see more of my work?</p>
//           <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
//             View All Projects
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Restopedic",
      description: "The Restopedic Furniture Project is focused on creating a seamless and efficient platform for managing and showcasing high-quality furniture products, specifically designed for comfort and durability. The project includes a Product Dashboard where administrators can manage product details such as title, category, price, description, stock quantity & specifications.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
      category: "E-commerce Platform"
    },
    {
      title: "Carrier Blitz",
      description: "It's a Job Portal to integrate with students, employees, employers and institutions. Students will learn the latest technologies. Employees will search for jobs. Employer will do the job post and get the best resources. And institute will apply campus interview, seminars etc.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
      category: "Job Portal"
    },
    {
      title: "Villu Genius",
      description: "The Villu Genius Loan App Project is a user-friendly and efficient digital platform designed to simplify the loan application and management process. Built with modern web technologies, the app offers a seamless experience for users seeking personal business, or other types of loans. It includes key features such as instant loan eligibility checks, document uploads, real-time loan tracking, automated EMI calculations, and secure payment integrations.",
      technologies: ["ReactJS", "NodeJS", "MongoDB", "REST API", "Express JS"],
      category: "Fintech Application"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <Code className="w-6 h-6 text-cyan-400 mr-2" />
                      <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-cyan-400/20 hover:text-cyan-300 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-cyan-400 hover:text-white transition-all duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </button>
                    <button className="flex items-center px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;