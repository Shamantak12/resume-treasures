
import { useEffect, useState, useRef } from 'react';

const BubbleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; size: number; opacity: number; color: string }[]>([]);
  const counterRef = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Animation frame reference for smooth cursor movement
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  // Define an array of colors for the bubbles
  const bubbleColors = ['#9b87f5', '#8B5CF6', '#A78BFA', '#C4B5FD', '#7C3AED'];

  // Animate cursor position smoothly
  const animateCursor = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // The cursor element
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${position.x}px`;
        cursor.style.top = `${position.y}px`;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    // Start the animation
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create a new bubble occasionally
      counterRef.current += 1;
      
      if (counterRef.current % 3 === 0) {
        // Pick a random color from the bubbleColors array
        const randomColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        
        const newBubble = {
          id: Date.now(),
          x: e.clientX + (Math.random() * 20 - 10), // Add slight random offset
          y: e.clientY + (Math.random() * 20 - 10), // Add slight random offset
          size: Math.random() * 30 + 10,
          opacity: 0.7,
          color: randomColor
        };
        
        setBubbles(prev => [...prev, newBubble]);
        
        // Remove bubbles after they fade out to prevent memory leaks
        setTimeout(() => {
          setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
        }, 2000);
      }
    };

    // Handle clicks - create a burst of bubbles
    const handleClick = (e: MouseEvent) => {
      const burstCount = 8;
      const newBubbles = [];
      
      for (let i = 0; i < burstCount; i++) {
        const randomColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        newBubbles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 30 + 15,
          opacity: 0.8,
          color: randomColor
        });
      }
      
      setBubbles(prev => [...prev, ...newBubbles]);
      
      // Remove bubbles after animation
      setTimeout(() => {
        newBubbles.forEach(bubble => {
          setBubbles(prev => prev.filter(b => b.id !== bubble.id));
        });
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Make the cursor react to hover on links and buttons
  useEffect(() => {
    const handleMouseOver = () => {
      // Find cursor element
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.classList.add('cursor-expanded');
      }
    };

    const handleMouseOut = () => {
      // Find cursor element
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.classList.remove('cursor-expanded');
      }
    };

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <div className="bubble-cursor-container fixed inset-0 pointer-events-none z-50">
      {/* Main cursor bubble */}
      <div 
        ref={cursorRef}
        className="bubble absolute w-8 h-8 rounded-full bg-purple-500/30 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out border border-purple-400/50"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
        }}
      />
      
      {/* Trailing bubbles */}
      {bubbles.map(bubble => (
        <div 
          key={bubble.id} 
          className="bubble absolute rounded-full backdrop-blur-sm animate-bubble-float"
          style={{ 
            left: `${bubble.x}px`, 
            top: `${bubble.y}px`, 
            width: `${bubble.size}px`, 
            height: `${bubble.size}px`, 
            opacity: bubble.opacity,
            backgroundColor: `${bubble.color}30`, // Add transparency
            transform: 'translate(-50%, -50%)',
            border: `1px solid ${bubble.color}80`,
            boxShadow: `0 0 8px ${bubble.color}50`
          }}
        />
      ))}
    </div>
  );
};

export default BubbleCursor;
