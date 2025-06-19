// import React from 'react';
// import { GraduationCap, Calendar, Award } from 'lucide-react';

// const Education: React.FC = () => {
//   return (
//     <section id="education" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//               <div className="flex-1">
//                 <div className="flex items-center mb-4">
//                   <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
//                   <h3 className="text-2xl font-bold text-gray-900">B.E Civil Engineering</h3>
//                 </div>
                
//                 <h4 className="text-lg text-gray-700 font-semibold mb-4">
//                   Arunachala College of Engineering for Women
//                 </h4>
                
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
//                   <div className="flex items-center text-gray-600">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     <span>2016 - 2020</span>
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <Award className="w-4 h-4 mr-2" />
//                     <span className="font-semibold">8.5 CGPA</span>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 leading-relaxed">
//                   Graduated with a strong academic record in Civil Engineering, which provided me with 
//                   a solid foundation in problem-solving, analytical thinking, and project management. 
//                   This background has been invaluable in my transition to software development, 
//                   where I apply the same methodical approach to building robust applications.
//                 </p>
//               </div>

//               <div className="lg:ml-8 mt-6 lg:mt-0">
//                 <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-blue-600 mb-2">8.5</div>
//                     <div className="text-sm text-gray-600 font-medium">CGPA</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 bg-gray-50 rounded-xl p-6">
//             <h4 className="text-lg font-semibold text-gray-900 mb-4">Career Transition</h4>
//             <p className="text-gray-600 leading-relaxed">
//               While my academic background is in Civil Engineering, my passion for technology and 
//               problem-solving led me to pursue a career in software development. I've successfully 
//               transitioned into full-stack development, combining my engineering mindset with modern 
//               web technologies to create innovative solutions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">B.E Civil Engineering</h3>
                </div>
                
                <h4 className="text-lg text-gray-300 font-semibold mb-4">
                  Arunachala College of Engineering for Women
                </h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2016 - 2020</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="font-semibold">8.5 CGPA</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Graduated with a strong academic record in Civil Engineering, which provided me with 
                  a solid foundation in problem-solving, analytical thinking, and project management. 
                  This background has been invaluable in my transition to software development, 
                  where I apply the same methodical approach to building robust applications.
                </p>
              </div>

              <div className="lg:ml-8 mt-6 lg:mt-0">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">8.5</div>
                    <div className="text-sm text-gray-400 font-medium">CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Career Transition</h4>
            <p className="text-gray-400 leading-relaxed">
              While my academic background is in Civil Engineering, my passion for technology and 
              problem-solving led me to pursue a career in software development. I've successfully 
              transitioned into full-stack development, combining my engineering mindset with modern 
              web technologies to create innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;