"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const StarsAnimation = () => {

    const [stars, setStars] = useState<Star[]>([]);
    const removeStar = (id: number) => {
        setStars((prev) => prev.filter((star) => star.id != id))
    }
    type Star = {
        id: number;
        x: number;
        y: number;
        size: number;
        opacity: number;
        speed: number;  
    }
    // Function to generate a random star
    const generateStars = (count: number) => {
        return Array.from({ length: count }, () => ({
            id: Math.random(),
            x: Math.random() * 100, // Random X position (percentage)
            y: Math.random() * 40, // Restrict to top 40% of the screen
            size: Math.random() * 4 + 1, // Random size (2px - 7px)
            opacity: Math.random() * 0.7 + 0.3, // Random opacity (0.3 - 1)
            speed: Math.random() * 10 + 3, // Random speed (2s - 5s)
        }));
    };

    // Generate new stars every 500ms
    useEffect(() => {
        const interval = setInterval(() => {
            setStars((prev) => {
                const newStars = generateStars(50);
                return [...prev, ...newStars].slice(-300); // Keep only last 100 stars
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {stars.map((star) => (
                <motion.div
                    onAnimationEnd={() => removeStar(star.id)}
                    key={star.id}
                    initial={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: 0.2,
                        scale: star.size / 6, // Adjust size scaling
                    }}
                    animate={{
                        top: "50%", // Move to the center
                        left: "50%", // Center horizontally
                        opacity: 1, // Fade out
                        scale: 0.1, // Shrink to disappear
                    }}
                    transition={{
                        duration: star.speed,
                        ease: "easeOut",
                    }}
                    className="absolute bg-white rounded-full"
                    style={{ width: `${star.size}px`, height: `${star.size}px` }}
                />
            ))}
        </>
    );


}
