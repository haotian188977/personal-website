"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

type Point = {
    x: number;
    y: number;
};

export default function WaveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!; //not null
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const noise2D = createNoise2D();

        let animationId = 0;
        let time = 0;

        // mouse position with movement
        const mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

        // mouse real position
        const targetMouse = {
            x: mouse.x,
            y: mouse.y,
        };

        function resize() {
            const dpr = window.devicePixelRatio || 1;

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        }

        resize();

        window.addEventListener("resize", resize);

        function handleMouseMove(e: MouseEvent) {
            targetMouse.x = e.clientX;
            targetMouse.y = e.clientY;
        }

        function handleMouseLeave() {
            targetMouse.x = window.innerWidth / 2;
            targetMouse.y = window.innerHeight / 2;
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        function draw() {

            time += 0.0025;

            // mouse movement
            mouse.x += (targetMouse.x - mouse.x) * 0.08;
            mouse.y += (targetMouse.y - mouse.y) * 0.08;

            ctx.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            );

            const lineCount = 44; //number of lines
            const sampleCount = 60;

            const bandHeight = window.innerHeight * 0.32;//heighest wave

            const startY =
                (window.innerHeight - bandHeight) / 2;//this do NOT effect the height of the waves, find centerY below to change the height

            const spacing =
                bandHeight / (lineCount - 1);

            const margin =
                window.innerWidth * 0; //able to change margin in here (margin removed by set to 0)
            for (let row = 0; row < lineCount; row++) {

                const rowCenter = (lineCount - 1) / 2;

                const rowFactor =
                    1 -
                    Math.abs(row - rowCenter) / rowCenter;
		//base amplitude, change the first number only
                const baseAmplitude =
                    75 + rowFactor * 35;

                const points: Point[] = [];

                for (let i = 0; i < sampleCount; i++) {

                    const t =
                        i / (sampleCount - 1);

                    const x =
                        margin +
                        t * (window.innerWidth - margin * 2);

                    // end point amplitude control
                    const envelope = Math.sin(Math.PI * t);
                    // may use: Math.sin(Math.PI * t) to remove amplitude, use 1 to remove the control;
		    // end point between line distance control
		    const edge = Math.abs(t - 0.5) * 2;
		    const spread = 1;// may use: - Math.pow(edge, 3) + lowestDistance to make the line closer to each other at the END (caution: Using this may result in distance increase more than parallel at the middle of the line area), use 1 to remove the control
		    
		    const centerY = 450;//control the height of the wave (do not change in baseY) may use: canvas.height / 2 to set the wave constantly in the middle of the screen

		    const baseY =
   			centerY +
    			(row - (lineCount - 1) / 2)
    			* spacing
    			* spread;

                    // Noise, the number after the variable t control the wave number in vertical, larger number will cause more wave to occur
                    const wave =
                        noise2D(
                            t * 2.3,
                            time + row * 0.02
                        );

                    //mouse interact

                    const dx = x - mouse.x;
                    const dy = baseY - mouse.y;

                    const distance =
                        Math.hypot(dx, dy);

                    const radius = 200; //how many px will the mouse effecting

                    const influence =
                        Math.max(
                            0,
                            1 - distance / radius
                        );

                    // smooth decrease
                    const strength =
                        influence * influence;

                    // the amplitude effect by the mouse
                    const amplitude =
                        baseAmplitude
                        + strength * 50;

                    // the effect of mouse to the surrounding area (only change the number, not the variable)
                    const y =
                        baseY
                        + wave
                        * amplitude
                        * envelope
                        - strength * 50;

                    points.push({
                        x,
                        y
                    });

                }

                // drawing

                ctx.beginPath();

                ctx.moveTo(
                    points[0].x,
                    points[0].y
                );

                for (
                    let i = 1;
                    i < points.length;
                    i++
                ) {

                    const prev =
                        points[i - 1];

                    const current =
                        points[i];

                    const midX =
                        (prev.x + current.x) / 2;

                    const midY =
                        (prev.y + current.y) / 2;

                    ctx.quadraticCurveTo(
                        prev.x,
                        prev.y,
                        midX,
                        midY
                    );

                }
                // final curve
                const last = points[points.length - 1];
                ctx.lineTo(last.x, last.y);

                // color change (light at end)
                const alpha =
                    0.5 + rowFactor * 0.22; //black color as base color, able to change the darkness here

                ctx.strokeStyle = 
                    `rgba(0,0,0,${alpha})`;

                ctx.lineWidth =
                    0.8 + rowFactor * 0.5;

                ctx.stroke();
            }

            animationId = requestAnimationFrame(draw);
        }

        draw();

        return () => {

            cancelAnimationFrame(animationId);

            window.removeEventListener(
                "resize",
                resize
            );

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );

        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}