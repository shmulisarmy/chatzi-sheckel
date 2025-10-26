"use client";
import React, { useEffect, useState } from 'react';

const colors = ["#8E44AD", "#3498DB", "#1ABC9C", "#F1C40F", "#E74C3C"];

const ConfettiPiece = ({ style }: { style: React.CSSProperties }) => (
  <div className="confetti" style={style}></div>
);

export const Confetti = () => {
  const [pieces, setPieces] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 150 }).map((_, index) => {
      const style: React.CSSProperties = {
        left: `${Math.random() * 100}%`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDelay: `${Math.random() * 4}s`,
        transform: `rotate(${Math.random() * 360}deg)`
      };
      return <ConfettiPiece key={index} style={style} />;
    });
    setPieces(newPieces);
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">{pieces}</div>;
};
