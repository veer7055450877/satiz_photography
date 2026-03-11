import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorType, cursorText } = useCursor();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference" as const,
    },
    view: {
      height: 80,
      width: 80,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "normal" as const,
    },
    drag: {
      height: 50,
      width: 50,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      mixBlendMode: "difference" as const,
    },
    explore: {
      height: 60,
      width: 60,
      backgroundColor: "transparent",
      border: "2px solid white",
      mixBlendMode: "difference" as const,
    },
    text: {
      height: 100,
      width: 100,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center backdrop-blur-[1px]"
      animate={{
        x: mousePosition.x - (variants[cursorType].width as number) / 2,
        y: mousePosition.y - (variants[cursorType].height as number) / 2,
        ...variants[cursorType]
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.5
      }}
    >
      {cursorText && (
        <span className="text-black text-[10px] uppercase font-bold tracking-widest">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};
