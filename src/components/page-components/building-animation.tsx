"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import styles from './building-animation.module.css';

const AnimatedBrick = ({ id }: { id: string }) => (
  <div className={cn(styles.brick, styles[id])} />
);

export const BuildingAnimation = () => {
  return (
    <div className={styles.animationContainer}>
      {/* This renders 13 bricks and assigns them each a unique animation from the CSS module */}
      {Array.from({ length: 13 }).map((_, i) => (
        <AnimatedBrick key={i} id={`arch${i + 1}`} />
      ))}
    </div>
  );
};
