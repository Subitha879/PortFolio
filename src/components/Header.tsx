// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// interface HeaderProps {
//   activeSection: string;
// }

// const Header: React.FC<HeaderProps> = ({ activeSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'education', label: 'Education' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="font-bold text-xl text-gray-900">
//             Subitha.T
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`text-sm font-medium transition-colors hover:text-blue-600 ${
//                   activeSection === item.id
//                     ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
//                     : 'text-gray-700'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 hover:bg-gray-50 ${
//                     activeSection === item.id
//                       ? 'text-blue-600 bg-blue-50'
//                       : 'text-gray-700'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// interface HeaderProps {
//   activeSection: string;
// }

// const Header: React.FC<HeaderProps> = ({ activeSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'education', label: 'Education' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="font-bold text-xl text-pink-400">
//             Subitha.T
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`text-sm font-medium transition-colors hover:text-pink-400 ${
//                   activeSection === item.id
//                     ? 'text-pink-400 border-b-2 border-pink-400 pb-1'
//                     : 'text-gray-300'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-md text-gray-300 hover:text-pink-400 hover:bg-gray-800"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-pink-400 hover:bg-gray-800 ${
//                     activeSection === item.id
//                       ? 'text-pink-400 bg-gray-800'
//                       : 'text-gray-300'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-cyan-400 tracking-tight hover:scale-105 transition-transform duration-300">
            Subitha.T
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium relative group transition-all duration-300 ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                {item.label}
                <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 border-t border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 hover:text-cyan-400 hover:bg-gray-800/50 ${
                    activeSection === item.id ? 'text-cyan-400 bg-gray-800/50' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;