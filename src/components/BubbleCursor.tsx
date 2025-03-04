
import { useEffect, useState } from 'react';

const BubbleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; size: number; opacity: number }[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create a new bubble occasionally
      if (counter % 5 === 0) {
        const newBubble = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 30 + 10,
          opacity: 0.7
        };
        
        setBubbles(prev => [...prev, newBubble]);
        
        // Remove bubbles after they fade out to prevent memory leaks
        setTimeout(() => {
          setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
        }, 2000);
      }
      
      setCounter(prev => prev + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [counter]);

  return (
    <div className="bubble-cursor-container fixed inset-0 pointer-events-none z-10">
      {/* Main cursor bubble */}
      <div 
        className="bubble absolute w-8 h-8 rounded-full bg-purple-500/30 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
      
      {/* Trailing bubbles */}
      {bubbles.map(bubble => (
        <div 
          key={bubble.id} 
          className="bubble absolute rounded-full bg-purple-500/20 backdrop-blur-sm animate-bubble-fade"
          style={{ 
            left: `${bubble.x}px`, 
            top: `${bubble.y}px`, 
            width: `${bubble.size}px`, 
            height: `${bubble.size}px`, 
            opacity: bubble.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
};

export default BubbleCursor;
