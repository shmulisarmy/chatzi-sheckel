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
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3 16.828V21h4.172l14.002-14.002z"></path>
        <path d="m15 5-3 3"></path>
    </svg>
);

export const WritingAnimation = ({ text, speed = 150 }: { text: string, speed?: number }) => {
    const words = React.useMemo(() => text.split(' '), [text]);
    const [visibleWordsCount, setVisibleWordsCount] = useState(0);

    useEffect(() => {
        if (visibleWordsCount < words.length) {
            const timer = setTimeout(() => {
                setVisibleWordsCount(prevCount => prevCount + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [visibleWordsCount, words.length, speed]);

    const visibleWords = words.slice(0, visibleWordsCount);

    return (
        <p>
            {visibleWords.map((word, index) => (
                <React.Fragment key={index}>
                    {index === visibleWords.length - 1 && index < words.length -1 && <QuillIcon />}
                    <span className={cn(styles.word, 'animate-in fade-in')}>
                        {word}
                    </span>{' '}
                </React.Fragment>
            ))}
        </p>
    );
};
