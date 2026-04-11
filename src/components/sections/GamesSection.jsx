import React from 'react';
import { motion } from 'framer-motion';
import './GamesSection.css';

const GamesSection = ({ sectionData }) => {
  const games = [
    {
      id: 1,
      title: "YOUR NAME IN BINARY",
      description: "Every letter you type is secretly a number inside a computer. Computers speak in binary, a language made of just 0s and 1s. Each letter of the alphabet is assigned a number (called its ASCII value), and that number is written in binary. We'll explain how this conversion works, convert your name into binary on the spot and print it as a sticker for you to take home!"
    },
    {
      id: 2,
      title: "INSIDE A LAPTOP",
      description: "Ever wondered what's actually inside your computer? We're cracking one open live! We'll walk you through the CPU (the brain), RAM (short-term memory), the motherboard, storage drives, cooling fans, and more - showing you what each part does and how they all work together to make your computer run."
    },
    {
      id: 3,
      title: "THE MIND READING CARD TRICK",
      description: "This looks like magic, but it's pure binary math. We'll show you a series of cards, each containing a set of numbers, and ask you to tell us only which cards your secret number appears on. In just a few seconds, we can tell you exactly what number you picked. The secret? Your number can be converted to a 5 digit binary number. Each card represents a binary place value - and your answers tell us which bits are 1s and which are 0s.",
      downloadUrl: "/mind reading cards.pdf"
    },
    {
      id: 4,
      title: "FAST VS. SLOW SORTING",
      description: "If you had a hundred flashcards to sort, how would you do it? Some methods take forever, others are blazing fast. We'll demonstrate sorting algorithms like Bubble Sort and Selection Sort (slow) versus Merge Sort and Quick Sort (fast) using physical flashcards and a live digital visualiser. You'll see in real time why the choice of algorithm is one of the most important decisions a programmer makes, and how they compare with each other."
    },
    {
      id: 5,
      title: "THE IOT REACTION TIME GAME",
      description: "Built on an Arduino, this IoT based game tests how fast your brain and fingers really are. A set of LEDs will light up one at a time, press the matching button as quickly as you can! Your reaction time gets measured and displayed. It's a fun peek into the world of IoT (Internet of Things), where physical hardware and code talk to each other in real time."
    }
  ];

  return (
    <div id={`section-${sectionData.id}`} className="section-capsule games-section-container">
      <div className="section-motion-wrapper">
        <header className="games-header">
          <div className="header-text">
            <h1 className="games-main-title">ED-TECH GAMES BY</h1>
          </div>
          <div className="debuggers-logo">
             <div className="logo-icon">
                <span className="bug">{"< />"}</span>
             </div>
             <div className="logo-text">
                <span className="club-name">THE DEBUGGERS CODING CLUB</span>
                <span className="dept-name">Department of Comp.Sc. ISC, BHU</span>
             </div>
          </div>
        </header>

        <div className="games-grid">
          {games.map((game, index) => (
            <motion.div 
              key={game.id}
              className={`game-card game-${game.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="game-card-header">
                <span className="game-number">GAME {game.id}</span>
                <h3 className="game-title">{game.title}</h3>
              </div>
              <div className="game-card-body">
                <h4 className="how-to-play">How to play?</h4>
                <p className="game-description">{game.description}</p>
                {game.downloadUrl && (
                  <a 
                    href={game.downloadUrl} 
                    download 
                    className="game-download-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>DOWNLOAD CARDS</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15L12 3M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L2 18C2 19.6569 3.34315 21 5 21L19 21C20.6569 21 22 19.6569 22 18L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          
          <div className="resource-card">
             <h3>COLLECT YOUR "MORE RESOURCES" CARD FOR FREE!</h3>
             <p>Before you leave, grab one of our resource cards. It has beginner-friendly links and explanations covering everything you saw today — ASCII and binary, computer hardware, binary card tricks, sorting algorithms, and getting started with Arduino and IoT.</p>
          </div>
        </div>

        <footer className="partners-bar">
           <div className="partner-item">MIS MAKE INDIA SCIENTIFIC</div>
           <div className="partner-item">IIT BHU</div>
           <div className="partner-item">INSTITUTE OF SCIENCE, BHU</div>
           <div className="partner-item">BANARAS HINDU UNIVERSITY</div>
           <div className="partner-item">CATJEE</div>
        </footer>
      </div>
    </div>
  );
};

export default GamesSection;
