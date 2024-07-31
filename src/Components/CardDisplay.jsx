import React, { useRef, useState } from 'react';
import ProjectContainer from './ProjectContainer';
import './CardDisplay.css'

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Online Care Plan',
    description:
      'An online management platform made to simplify logistics for elderly Home Care services.',
    stack: ['JavaScript','React','Mongoose','Jest.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Hackitects',
    description:
      'Humanitarian solution for CISSA codebrew 2024. A smart meal planner that aims to reduce food wastage.',
    stack: ['JavaScript','React','Mongoose',],
    sourceCode: 'https://github.com/KahMeng2/hackitects',
    livePreview: 'https://github.com/KahMeng2/hackitects',
  },
  {
    name: 'AI Pacman CTF',
    description:
      'An AI agent built using Monte Carlo Tree Search and Q-Learning for a capture the flag Pacman game.',
    stack: ['Python'],
    sourceCode: 'https://github.com/COMP90054-2023s2/a3-team_sheeesshhh/wiki',
    livePreview: 'https://github.com/COMP90054-2023s2/a3-team_sheeesshhh/wiki',
  },
  {
    name: 'Portfolio',
    description:
      'The website you are currently viewing. It is designed and developed from scratch using React and Tailwind CSS',
    stack: ['JavaScript', 'React','TailwindCSS'],
    sourceCode: 'https://github.com/KahMeng2/Portfolio',
    livePreview: 'https://kahmeng-portfolio.netlify.app/',
  },
  {
    name: 'Budget Tracker',
    description:
      'A budget tracking application that tracks monthly transactions and highlighting dominant transaction types',
    stack: ['JavaScript', 'React','Mongoose'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
  

  
]

const CardDisplay = () => {
  
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX)*1.4 ; // Multiply by 2 for faster scroll
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollContainerRef}
      className="drop-shadow-xl max-w-[1300px] flex mt-10 border-2  rounded-3xl mx-auto overflow-x-scroll pt-5 cursor-grab select-none no-scrollbar  items-center"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDragging ? 'grabbing' : 'grab', background:"#FDF9F6" }}
    >
        {projects.map((project) => (
          <ProjectContainer key={project.name} project={project} />
        ))}

    </div>
  );
};
export default CardDisplay;