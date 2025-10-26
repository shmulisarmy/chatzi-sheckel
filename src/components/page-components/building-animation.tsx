"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import styles from './building-animation.module.css';

const Brick = ({ className }: { className?: string }) => (
  <div className={cn(styles.brick, className)} />
);

const FallingBrick = ({ id }: { id: string }) => (
  <Brick className={cn(styles.fallingBrick, styles[id])} />
);

const BaseStructure = () => (
  <div className={styles.baseStructure}>
    <Brick className={styles.base1} />
    <Brick className={styles.base2} />
    <Brick className={styles.base3} />
    <Brick className={styles.base4} />
    <Brick className={styles.base5} />
    <Brick className={styles.base6} />
    <Brick className={styles.base7} />
  </div>
);

export const BuildingAnimation = () => {
  return (
    <div className={styles.animationContainer}>
      <BaseStructure />
      <FallingBrick id="falling1" />
      <FallingBrick id="falling2" />
      <FallingBrick id="falling3" />
      <FallingBrick id="falling4" />
      <FallingBrick id="falling5" />
    </div>
  );
};
