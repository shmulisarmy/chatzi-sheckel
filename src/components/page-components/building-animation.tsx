"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './building-animation.module.css';

const Brick = ({ id, animate }: { id: string; animate: boolean }) => (
  <div className={cn(styles.brick, styles[id], animate && styles.animate)} />
);

const BaseStructure = () => (
  <div className={styles.baseStructure}>
    {/* Create the base structure with individual divs */}
    <div className={cn(styles.brick, styles.base1)} />
    <div className={cn(styles.brick, styles.base2)} />
    <div className={cn(styles.brick, styles.base3)} />
    <div className={cn(styles.brick, styles.base4)} />
    <div className={cn(styles.brick, styles.base5)} />
    <div className={cn(styles.brick, styles.base6)} />
    <div className={cn(styles.brick, styles.base7)} />
    <div className={cn(styles.brick, styles.base8)} />
  </div>
);


export const BuildingAnimation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after component mounts
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.animationContainer}>
      <BaseStructure />
      <Brick id="brick1" animate={animate} />
      <Brick id="brick2" animate={animate} />
      <Brick id="brick3" animate={animate} />
    </div>
  );
};