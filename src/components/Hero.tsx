// import React from 'react';
// import { ArrowDown, Download, Mail, Phone, MapPin } from 'lucide-react';

// const Hero: React.FC = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Profile Image Placeholder */}
//         {/* <div className="mb-8">
//           <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
//             <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
//               <span className="text-3xl font-bold text-white">ST</span>
//             </div>
//           </div>
//         </div> */}

//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
//           SUBITHA.T
//         </h1>
        
//         <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in delay-200">
//           Full Stack Developer (MERN)
//         </p>

//         <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
//           Passionate about creating customized solutions with 1+ year of experience 
//           providing quality support to companies using modern web technologies.
//         </p>

//         {/* Contact Info */}
//         <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in delay-400">
//           <div className="flex items-center space-x-2 text-white/80">
//             <Phone size={18} />
//             <span>9345543139</span>
//           </div>
//           <div className="flex items-center space-x-2 text-white/80">
//             <Mail size={18} />
//             <span>subithasubi489@gmail.com</span>
//           </div>
//           <div className="flex items-center space-x-2 text-white/80">
//             <MapPin size={18} />
//             <span>Nagercoil</span>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
//           <button
//             onClick={() => scrollToSection('contact')}
//             className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Get In Touch
//           </button>
//           <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//             <Download size={18} />
//             <span>Download Resume</span>
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <button
//           onClick={() => scrollToSection('about')}
//           className="animate-bounce text-white/60 hover:text-white transition-colors"
//         >
//           <ArrowDown size={32} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// import React from 'react';
// import { ArrowDown, Download, Mail, Phone, MapPin } from 'lucide-react';

// const Hero: React.FC = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-pink-900">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-5xl md:text-7xl font-bold text-pink-400 mb-4 animate-fade-in">
//           SUBITHA.T
//         </h1>
        
//         <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
//           Full Stack Developer (MERN)
//         </p>

//         <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
//           Passionate about creating customized solutions with 1+ year of experience 
//           providing quality support to companies using modern web technologies.
//         </p>

//         <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in delay-400">
//           <div className="flex items-center space-x-2 text-gray-400">
//             <Phone size={18} />
//             <span>9345543139</span>
//           </div>
//           <div className="flex items-center space-x-2 text-gray-400">
//             <Mail size={18} />
//             <span>subithasubi489@gmail.com</span>
//           </div>
//           <div className="flex items-center space-x-2 text-gray-400">
//             <MapPin size={18} />
//             <span>Nagercoil</span>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
//           <button
//             onClick={() => scrollToSection('contact')}
//             className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Get In Touch
//           </button>
//           <button className="px-8 py-3 border-2 border-pink-400 text-pink-400 font-semibold rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
//             <Download size={18} />
//             <span>Download Resume</span>
//           </button>
//         </div>

//         <button
//           onClick={() => scrollToSection('about')}
//           className="animate-bounce text-gray-400 hover:text-pink-400 transition-colors"
//         >
//           <ArrowDown size={32} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { ArrowDown, Download, Mail, Phone, MapPin } from 'lucide-react';

// const Hero: React.FC = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
//         <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-4 tracking-tight">
//           SUBITHA.T
//         </h1>
        
//         <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
//           Full Stack Developer (MERN)
//         </p>

//         <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
//           Passionate about crafting innovative solutions with over a year of experience 
//           delivering high-quality web applications using modern technologies.
//         </p>

//         <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in delay-400">
//           {[
//             { icon: <Phone size={18} />, text: '9345543139' },
//             { icon: <Mail size={18} />, text: 'subithasubi489@gmail.com' },
//             { icon: <MapPin size={18} />, text: 'Nagercoil' },
//           ].map((item, index) => (
//             <div key={index} className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
//               {item.icon}
//               <span>{item.text}</span>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
//           <button
//             onClick={() => scrollToSection('contact')}
//             className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Get In Touch
//           </button>
//           <a
//   href="/resume.pdf"
//   download
//   className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
// >
//   <Download size={18} />
//   <span>Download Resume</span>
// </a>

//         </div>

//         <button
//           onClick={() => scrollToSection('about')}
//           className="animate-bounce text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//         >
//           <ArrowDown size={32} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { ArrowDown, Download, Mail, Phone, MapPin } from 'lucide-react';
import resumePDF from "../../dist/assets/CV.pdf";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-4 tracking-tight">
          SUBITHA.T
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-200">
          Full Stack Developer (MERN)
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
          Passionate about crafting innovative solutions with over a year of experience
          delivering high-quality web applications using modern technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in delay-400">
          {[
            { icon: <Phone size={18} />, text: '9345543139' },
            { icon: <Mail size={18} />, text: 'subithasubi489@gmail.com' },
            { icon: <MapPin size={18} />, text: 'Nagercoil' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </button>

          <a
           href={resumePDF} 
            download
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
