"use client";

import React, { useState, useEffect } from 'react';
import styles from './writing-animation.module.css';
import { cn } from '@/lib/utils';

const QuillIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.quill}
    >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
        <path d="M16 8 2 22"></path>
        <path d="m17.5 15 3-3"></path>
    </svg>
);

export const WritingAnimation = ({ text, speed = 50, startDelay = 0 }: { text: string, speed?: number, startDelay?: number }) => {
    const chars = React.useMemo(() => text.split(''), [text]);
    const [visibleCharsCount, setVisibleCharsCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (startDelay > 0) {
            const startTimer = setTimeout(() => {
                setIsStarted(true);
            }, startDelay);
            return () => clearTimeout(startTimer);
        } else {
            setIsStarted(true);
        }
    }, [startDelay]);

    useEffect(() => {
        if (isStarted && visibleCharsCount < chars.length) {
            const charTimer = setTimeout(() => {
                setVisibleCharsCount(prevCount => prevCount + 1);
            }, speed);
            return () => clearTimeout(charTimer);
        }
    }, [isStarted, visibleCharsCount, chars.length, speed]);

    if (!isStarted && startDelay > 0) {
        return null;
    }

    const visibleText = chars.slice(0, visibleCharsCount).map((char, index) => (
        <span key={index} className={styles.char}>{char}</span>
    ));

    return (
        <span>
            {visibleText}
            {visibleCharsCount < chars.length && <QuillIcon />}
        </span>
    );
};
