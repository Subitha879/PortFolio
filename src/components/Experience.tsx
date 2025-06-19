// import React from 'react';
// import { Calendar, MapPin, Briefcase } from 'lucide-react';

// const Experience: React.FC = () => {
//   const responsibilities = [
//     "Over 1 year of hands-on experience in coding, implementation, and maintenance support",
//     "Html, CSS, Bootstrap, Tailwind CSS, React JS, Node JS, MongoDB, MySQL, REST API, Express JS",
//     "Strong in understanding and integrating third-party web services",
//     "A skilled communicator with excellent interpersonal and analytical skills",
//     "Experienced in API integration & API creation",
//     "Hands on experience in development using MERN stack technologies",
//     "Hands on experience in project management using Github",
//     "Developing and maintaining the functionality of website UI Designing for web",
//     "Ability to Learn and adapt New Technologies in a short time",
//     "Excellent Team Player possessing Good Communication and Interpersonal Skills"
//   ];

//   const roles = [
//     "Requirements gathering from client",
//     "Front end development with UI Creation",
//     "Created the design document for the migration for client reference",
//     "API Creation and API Integration"
//   ];

//   const experiences = [
//     {
//       title: "Full Stack Developer",
//       company: "Miguel Sevener Innovation Private Limited",
//       location: "Bengaluru",
//       period: "MAR 2025 - Present",
//       current: true
//     },
//     {
//       title: "Full Stack Developer",
//       company: "Aroganam Tech",
//       location: "Bengaluru",
//       period: "OCT 2024 - MAR 2025",
//       current: false
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           {/* Experience Timeline */}
//           <div className="space-y-8 mb-12">
//             {experiences.map((exp, index) => (
//               <div key={index} className={`${exp.current ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100' : 'bg-gray-50 border-gray-100'} rounded-2xl p-8 border`}>
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
//                       <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
//                       {exp.title}
//                       {exp.current && <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Current</span>}
//                     </h3>
//                     <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
//                   </div>
//                   <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
//                     <div className="flex items-center text-gray-600 mb-2">
//                       <Calendar className="w-4 h-4 mr-2" />
//                       <span>{exp.period}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <MapPin className="w-4 h-4 mr-2" />
//                       <span>{exp.location}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Key Responsibilities */}
//           <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-100">
//             <div className="mb-8">
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements & Responsibilities</h4>
//               <div className="grid gap-3">
//                 {responsibilities.map((item, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                     <p className="text-gray-700">{item}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Roles & Responsibilities */}
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">Roles & Responsibilities</h4>
//               <div className="grid gap-3">
//                 {roles.map((role, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                     <p className="text-gray-700">{role}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Experience Summary */}
//           <div className="text-center bg-gray-50 rounded-xl p-8">
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience Summary</h3>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Passionate about creating customized solutions, I bring 1+ year of dedicated experience 
//               in full-stack development, specializing in the MERN stack. My focus is on delivering 
//               quality applications while continuously learning and adapting to new technologies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const responsibilities = [
    "Over 1 year of hands-on experience in coding, implementation, and maintenance support",
    "Html, CSS, Bootstrap, Tailwind CSS, React JS, Node JS, MongoDB, MySQL, REST API, Express JS",
    "Strong in understanding and integrating third-party web services",
    "A skilled communicator with excellent interpersonal and analytical skills",
    "Experienced in API integration & API creation",
    "Hands on experience in development using MERN stack technologies",
    "Hands on experience in project management using Github",
    "Developing and maintaining the functionality of website UI Designing for web",
    "Ability to Learn and adapt New Technologies in a short time",
    "Excellent Team Player possessing Good Communication and Interpersonal Skills"
  ];

  const roles = [
    "Requirements gathering from client",
    "Front end development with UI Creation",
    "Created the design document for the migration for client reference",
    "API Creation and API Integration"
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Miguel Sevener Innovation Private Limited",
      location: "Bengaluru",
      period: "MAR 2025 - Present",
      current: true
    },
    {
      title: "Full Stack Developer",
      company: "Aroganam Tech",
      location: "Bengaluru",
      period: "OCT 2024 - MAR 2025",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${exp.current ? 'border-cyan-400/50' : 'border-gray-700/50'} hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                      <Briefcase className="w-6 h-6 mr-2 text-cyan-400" />
                      {exp.title}
                      {exp.current && (
                        <span className="ml-3 px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Key Achievements & Responsibilities</h4>
              <div className="grid gap-3">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Roles & Responsibilities</h4>
              <div className="grid gap-3">
                {roles.map((role, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Experience Summary</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about creating customized solutions, I bring 1+ year of dedicated experience 
              in full-stack development, specializing in the MERN stack. My focus is on delivering 
              quality applications while continuously learning and adapting to new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;