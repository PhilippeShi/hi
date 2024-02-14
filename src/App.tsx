// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1>Hi Elly</h1>
//         <img src={'e0.JPEG'} className="App-logo e1" alt="logo"  
//         // style={{width: '100px', height: '100px'}}
//         />
//         <img src={'e1.JPEG'} className="App-logo e2" alt="logo"
//         // style={{width: '100px', height: '100px'}}
//         />
//         <img src={'e2.JPEG'} className="App-logo e3" alt="logo"
//         // style={{width: '100px', height: '100px'}}
//         />
//         <img src={'e3.JPEG'} className="App-logo e4" alt="logo"
//         // style={{width: '100px', height: '100px'}}
//         />
//         <img src={'e4.JPEG'} className="App-logo e5" alt="logo"
//         // style={{width: '100px', height: '100px'}}
//         />
//         <img src={'e5.JPEG'} className="App-logo e6" alt="logo"
//         // style={{width: '100px', height: '100px'}}
//         />
//         <img src={'e6.JPEG'} className="App-logo e7" alt="logo"
//         // style={{width: '100px', height: '100px'}}
//         />

//         {/* <a
//           className="App-link"
//           href="https://www.instagram.com/philippe.shi"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Instagram
//         </a>
//         <a
//           className="App-link"
//           href="https://www.linkedin.com/in/philippeshi/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           LinkedIn
//         </a>
//         <a
//           className="App-link"
//           href="https://www.github.com/philippeshi"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           GitHub

//         </a>
//         <a
//           className="App-link"
//           href="https://www.facebook.com/philippe.shi.52"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Facebook
//         </a> */}

      
//       </header>
    
//     </div>
//   );
// }

// export default App;


"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4">Hi Ellyyyyyy! Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}