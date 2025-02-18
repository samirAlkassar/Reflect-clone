export const SkyStars = ({ className }: { className?: string }) => {
    // Pre-calculate star positions for consistency
    const centerStars = [...Array(100)].map((_, i) => ({
        cx: 200 + Math.cos(i * 3.6) * (Math.random() * 80),
        cy: 200 + Math.sin(i * 3.6) * (Math.random() * 80),
        r: Math.random() * 0.8,
        opacity: 0.8 + Math.random() * 0.2
    }));

    const midStars = [...Array(150)].map((_, i) => ({
        cx: 200 + Math.cos(i * 2.4) * (80 + Math.random() * 80),
        cy: 200 + Math.sin(i * 2.4) * (80 + Math.random() * 80),
        r: Math.random() * 0.6,
        opacity: 0.5 + Math.random() * 0.3
    }));

    const outerStars = [...Array(100)].map((_, i) => ({
        cx: 200 + Math.cos(i * 3.6) * (160 + Math.random() * 40),
        cy: 200 + Math.sin(i * 3.6) * (160 + Math.random() * 40),
        r: Math.random() * 0.4,
        opacity: 0.1 + Math.random() * 0.3
    }));

    const largeStars = [...Array(15)].map((_, i) => ({
        cx: 200 + Math.cos(i * 24) * (Math.random() * 180),
        cy: 200 + Math.sin(i * 24) * (Math.random() * 180),
        r: 0.8 + Math.random() * 1,
        opacity: 0.4 + Math.random() * 0.3
    }));

    return (
        <svg
            className={className}
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient id="star-fade" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                </radialGradient>
            </defs>
            <g>
                {/* Dense center stars */}
                {centerStars.map((star, i) => (
                    <circle
                        key={`dense-${i}`}
                        {...star}
                        fill="white"
                    />
                ))}

                {/* Mid-range stars */}
                {midStars.map((star, i) => (
                    <circle
                        key={`mid-${i}`}
                        {...star}
                        fill="white"
                    />
                ))}

                {/* Outer sparse stars */}
                {outerStars.map((star, i) => (
                    <circle
                        key={`outer-${i}`}
                        {...star}
                        fill="white"
                    />
                ))}

                {/* Few larger distant stars */}
                {largeStars.map((star, i) => (
                    <circle
                        key={`large-${i}`}
                        {...star}
                        fill="white"
                    />
                ))}
            </g>
        </svg>
    );
};

export default SkyStars;
