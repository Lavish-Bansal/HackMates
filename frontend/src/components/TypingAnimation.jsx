// // TypingAnimation.js
// import React, { useEffect, useRef } from 'react';
// import Typed from 'typed.js';

// const TypingAnimation = () => {
//   const typedElementRef = useRef(null);

//   useEffect(() => {
//     const strings = [
//       "Connect with like-minded individuals",
//        "Filter hackathons by college or city", 
//        "Join teams and collaborate"
//     ];

//     const options = {
//       strings: strings,
//       loop: true,
//       typeSpeed: 50,
//       backSpeed: 10,
//       backDelay: 1000
//     };

//     const typed = new Typed(typedElementRef.current, options);

//     return () => {
//       typed.destroy(); // Cleanup on unmount
//     };
//   }, []); // Run effect only once on component mount

//   return (
//     <div>
//       <h1 className='text-blue-800 text-[35px] font-bold'> <span ref={typedElementRef}></span></h1>
//     </div>
//   );
// };

// export default TypingAnimation;

import React from 'react'

const TypingAnimation = () => {
  return (
    <div>
      <h1>Animation</h1>
    </div>
  )
}

export default TypingAnimation
