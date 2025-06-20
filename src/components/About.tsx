// import React from 'react';
// import { Code, Coffee, Globe, Heart } from 'lucide-react';

// const About: React.FC = () => {
//   const highlights = [
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: "Clean Code",
//       description: "Writing maintainable and scalable code"
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Full Stack",
//       description: "End-to-end web application development"
//     },
//     {
//       icon: <Coffee className="w-6 h-6" />,
//       title: "Always Learning",
//       description: "Constantly updating skills with new technologies"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: "Passionate",
//       description: "Love creating solutions that make a difference"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//               Building Digital Solutions with Passion
//             </h3>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               I'm a passionate Full Stack Developer with 1+ year of hands-on experience 
//               in the MERN stack. My journey started with a background in Civil Engineering, 
//               but my love for technology led me to pursue web development.
//             </p>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               I specialize in creating customized solutions that solve real-world problems. 
//               From requirements gathering to deployment, I enjoy every aspect of the 
//               development process and take pride in delivering quality applications.
//             </p>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               Currently working at Miguel Sevener Innovation Private Limited in Nagercoil, 
//               where I contribute to innovative projects and continue to grow my expertise 
//               in modern web technologies.
//             </p>

//             {/* Languages */}
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages</h4>
//               <div className="flex space-x-4">
//                 <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">English</span>
//                 <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tamil</span>
//                 <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Malayalam</span>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {highlights.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
//               >
//                 <div className="text-blue-600 mb-3">
//                   {item.icon}
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { Code, Coffee, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full Stack",
      description: "End-to-end web application development"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Always Learning",
      description: "Constantly updating skills with new technologies"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate",
      description: "Love creating solutions that make a difference"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Building Digital Solutions with Passion
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with 1+ year of hands-on experience 
              in the MERN stack. My journey started with a background in Civil Engineering, 
              but my love for technology led me to pursue web development.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I specialize in creating customized solutions that solve real-world problems. 
              From requirements gathering to deployment, I enjoy every aspect of the 
              development process and take pride in delivering quality applications.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Currently working at Miguel Sevener Innovation Private Limited in Nagercoil, 
              where I contribute to innovative projects and continue to grow my expertise 
              in modern web technologies.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
              <div className="flex space-x-4">
                {['English', 'Tamil'].map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm hover:bg-cyan-400/20 transition-colors duration-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;