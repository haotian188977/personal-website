"use client";

import { useEffect, useRef } from "react";

interface Point {
    x: number;
    y: number;
}

interface Props {
    snake: Point[];
    food: Point;
}

export default function GameCanvas({
    snake,
    food,
}: Props) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const cellSize = 25;

        //--------------------------------

        ctx.clearRect(0, 0, 600, 600);

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 600, 600);

        //--------------------------------
        // 食物

        ctx.fillStyle = "#000";

        ctx.beginPath();

        ctx.arc(
            food.x * cellSize + cellSize / 2,
            food.y * cellSize + cellSize / 2,
            cellSize * 0.25,
            0,
            Math.PI * 2
        );

        ctx.fill();

        //--------------------------------
        // 蛇

        snake.forEach((segment, index) => {

            ctx.fillStyle =
                index === 0
                    ? "#111"
                    : "#000";

            ctx.fillRect(
                segment.x * cellSize,
                segment.y * cellSize,
                cellSize,
                cellSize
            );

        });

    }, [snake, food]);

    return (

        <canvas
            ref={canvasRef}
            width={600}
            height={600}
        />

    );

}