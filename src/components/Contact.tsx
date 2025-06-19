// import React from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

// const Contact: React.FC = () => {
//   const contactInfo = [
//     {
//       icon: <Phone className="w-6 h-6" />,
//       label: "Phone",
//       value: "9345543139",
//       href: "tel:9345543139"
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       label: "Email",
//       value: "subithasubi489@gmail.com",
//       href: "mailto:subithasubi489@gmail.com"
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       label: "Location",
//       value: "Nagercoil",
//       href: "#"
//     }
//   ];

//   const socialLinks = [
//     {
//       name: "GitHub",
//       icon: <Github className="w-5 h-5" />,
//       href: "https://github.com/Subitha879",
//       color: "hover:text-gray-900"
//     },
//     {
//       name: "LinkedIn",
//       icon: <Linkedin className="w-5 h-5" />,
//       href: "https://www.linkedin.com/in/subitha-t-7a3850253/",
//       color: "hover:text-blue-600"
//     },
//     {
//       name: "Portfolio",
//       icon: <ExternalLink className="w-5 h-5" />,
//       href: "#",
//       color: "hover:text-purple-600"
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             I'm always open to discussing new opportunities and interesting projects. 
//             Let's connect and see how we can work together!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-900 mb-8">Let's Connect</h3>
            
//             <div className="space-y-6 mb-8">
//               {contactInfo.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
//                 >
//                   <div className="text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-medium">{item.label}</p>
//                     <p className="text-gray-900 font-semibold">{item.value}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 ${social.color} border border-gray-100 hover:border-blue-200`}
//                     title={social.name}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div>
//             <form className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Project Discussion"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Tell me about your project..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//               >
//                 <Send className="w-5 h-5" />
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "9345543139",
      href: "tel:9345543139"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "subithasubi489@gmail.com",
      href: "mailto:subithasubi489@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Nagercoil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Subitha879",
      color: "hover:text-cyan-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/subitha-t-7a3850253/",
      color: "hover:text-cyan-400"
    },
    {
      name: "Portfolio",
      icon: <ExternalLink className="w-5 h-5" />,
      href: "#",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and see how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                    <p className="text-gray-300 font-semibold group-hover:text-cyan-400 transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-cyan-400/20 ${social.color} hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700/50 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700/50 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700/50 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;