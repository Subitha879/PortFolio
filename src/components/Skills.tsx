// import React from 'react';

// const Skills: React.FC = () => {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       skills: [
//         { name: "HTML", level: 90 },
//         { name: "CSS", level: 85 },
//         { name: "JavaScript", level: 80 },
//         { name: "React JS", level: 85 },
//         { name: "Bootstrap", level: 80 },
//         { name: "Tailwind CSS", level: 75 }
//       ]
//     },
//     {
//       title: "Backend",
//       skills: [
//         { name: "Node JS", level: 80 },
//         { name: "Express JS", level: 85 },
//         { name: "REST API", level: 85 },
//         { name: "MongoDB", level: 75 },
//       ]
//     },
//     {
//       title: "Tools & Others",
//       skills: [
//         { name: "GitHub", level: 85 },
//         { name: "GitLab", level: 80 },
//         { name: "Postman", level: 85 },
//         { name: "API Integration", level: 80 },
//         { name: "VS Code", level: 90 }
//       ]
//     }
//   ];

//   const technologies = [
//     "HTML", "CSS", "JavaScript", "React JS", "Node JS", 
//     "Express JS", "MongoDB", "MySQL", "Bootstrap", "Tailwind CSS",
//     "REST API", "GitHub", "GitLab", "Postman", "VS Code"
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
//         </div>

//         {/* Technology Badges */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technologies I Work With</h3>
//           <div className="flex flex-wrap justify-center gap-3">
//             {technologies.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-blue-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Skill Bars */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <div
//               key={categoryIndex}
//               className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
//                 {category.title}
//               </h3>
//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-700 font-medium">{skill.name}</span>
//                       <span className="text-gray-500 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React JS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Tailwind CSS", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node JS", level: 80 },
        { name: "Express JS", level: 85 },
        { name: "REST API", level: 85 },
        { name: "MongoDB", level: 75 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "GitHub", level: 85 },
        { name: "GitLab", level: 80 },
        { name: "Postman", level: 85 },
        { name: "API Integration", level: 80 },
        { name: "VS Code", level: 90 }
      ]
    }
  ];

  const technologies = [
    "HTML", "CSS", "JavaScript", "React JS", "Node JS", 
    "Express JS", "MongoDB", "MySQL", "Bootstrap", "Tailwind CSS",
    "REST API", "GitHub", "GitLab", "Postman", "VS Code"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 font-medium rounded-full border border-gray-700 hover:bg-gradient-to-r hover:from-cyan-400/20 hover:to-pink-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;