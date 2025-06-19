// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const height = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Header activeSection={activeSection} />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Education />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;