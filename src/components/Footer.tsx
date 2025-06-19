// import React from 'react';
// import { Heart } from 'lucide-react';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-gray-400 mb-2">
//             © {currentYear} Subitha.T. All rights reserved.
//           </p>
//           <p className="text-gray-400 flex items-center justify-center">
//             Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> and React
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {currentYear} Subitha.T. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-pink-500" fill="currentColor" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;