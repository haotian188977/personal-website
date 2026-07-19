"use client";

import { useEffect, useRef, useState } from "react";

type GameState = "idle" | "playing" | "gameover" | "quited";//start,play,gameover,and quit phase of the game (4 phase)

type Direction = "up" | "down" | "left" | "right";

interface Point {
    x: number;
    y: number;
}

const GRID_SIZE = 24; //GS*CS=Canva size (change this value together with the window size)
const CELL_SIZE = 25;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;

export default function SnakeGame() {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [gameState, setGameState] =
        useState<GameState>("idle");

    const [snake, setSnake] =
        useState<Point[]>([]);

    const [food, setFood] =
        useState<Point>({ x: 0, y: 0 });

    const [speed, setSpeed] = useState(200); //starting speed, HIGHER number cause LOWER speed

    const [direction, setDirection] =
        useState<Direction>("right");

    const directionRef =
        useRef<Direction>("right");

    const [score, setScore] =
        useState(0);
    
    function changeDirection(
        newDirection: Direction
    ) {

        const current =
            directionRef.current;


        if(
            newDirection === "up" &&
            current !== "down"
        ){

            directionRef.current = "up";

            setDirection("up");

        }


        if(
            newDirection === "down" &&
            current !== "up"
        ){

            directionRef.current = "down";

            setDirection("down");

        }


        if(
            newDirection === "left" &&
            current !== "right"
        ){

            directionRef.current = "left";

            setDirection("left");

        }


        if(
            newDirection === "right" &&
            current !== "left"
        ){

            directionRef.current = "right";

            setDirection("right");

        }

    }

    function randomFood(
        snakeBody: Point[]
    ): Point {

        while (true) {

            const point = {

                x: Math.floor(
                    Math.random() * GRID_SIZE
                ),

                y: Math.floor(
                    Math.random() * GRID_SIZE
                )

            };

            const collide =
                snakeBody.some(
                    s =>
                        s.x === point.x &&
                        s.y === point.y
                );

            if (!collide)
                return point;

        }

    }

    function startGame() {

        const initSnake = [

            { x: 8, y: 12 },

            { x: 7, y: 12 },

            { x: 6, y: 12 }

        ];

        setSnake(initSnake);

        setFood(
            randomFood(initSnake)
        );

        setDirection("right");

        directionRef.current = "right";

        setScore(0);

        setGameState("playing");

    }
    useEffect(() => {

        function handleKeyDown(
            e: KeyboardEvent
        ) {
            const current =
                directionRef.current;

            switch (e.key) { 

                case "w": //up control
                case "W": 

                    changeDirection("up");

                    break;

                case "s": //down control
                case "S":

                    changeDirection("down");

                    break;

                case "a": //left control
                case "A":

                    changeDirection("left");

                    break;

                case "d": //right control
                case "D":

                    changeDirection("right");

                    break;

		case "q": //quit control
		case "Q":
		    setGameState("quited");
		    break;
            }

        }

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, []);

    useEffect(() => {

        const canvas =
            canvasRef.current;

        if (!canvas)
            return;

        const ctx =
            canvas.getContext("2d");

        if (!ctx)
            return;

        ctx.clearRect(
            0,
            0,
            CANVAS_SIZE,
            CANVAS_SIZE
        );

        ctx.fillStyle = "#ffffff";

        ctx.fillRect(
            0,
            0,
            CANVAS_SIZE,
            CANVAS_SIZE
        );

        ctx.fillStyle = "#000000";

        snake.forEach((part, index) => {

            const x =
                part.x * CELL_SIZE;

            const y =
                part.y * CELL_SIZE;

            ctx.beginPath();

            ctx.roundRect(
                x + 2,
                y + 2,
                CELL_SIZE - 4,
                CELL_SIZE - 4,
                index === 0 ? 7 : 5
            );

            ctx.fill();

        });

        ctx.beginPath();

        ctx.arc(
            food.x * CELL_SIZE + CELL_SIZE / 2,
            food.y * CELL_SIZE + CELL_SIZE / 2,
            CELL_SIZE * 0.22,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }, [snake, food]);
    useEffect(() => {

        if (gameState !== "playing" && gameState !== "quited")
            return;
        const timer = setInterval(() => {

            setSnake(oldSnake => {

                const head = { ...oldSnake[0] };
	        if (gameState == "quited")
	             return oldSnake;
                switch (directionRef.current) {

                    case "up":
                        head.y--;
                        break;

                    case "down":
                        head.y++;
                        break;

                    case "left":
                        head.x--;
                        break;

                    case "right":
                        head.x++;
                        break;

                }

                // pass through border, the snake will apear on the other side

                if (
                    head.x < 0
                ){ 
		    head.x = GRID_SIZE;
		}
		else if(
                    head.x >= GRID_SIZE
		){
		    head.x = 0;
		}
		else if(
                    head.y < 0 
		){
		    head.y = GRID_SIZE;
		}
		else if(
                    head.y >= GRID_SIZE
                ){

                    head.y = 0;
                }

                // 撞自己

                if (
                    oldSnake.some(
                        s =>
                            s.x === head.x &&
                            s.y === head.y
                    )
                ) {

                    setGameState("gameover");
		    setSpeed(200);
                    return oldSnake;

                }

                const newSnake = [
                    head,
                    ...oldSnake
                ];

                // food eaten

                if (
                    head.x === food.x &&
                    head.y === food.y
                ) {

                    setScore(s => s + 1);

                    setFood(
                        randomFood(newSnake)
                    );
                    setSpeed (s=>Math.max(50,s-2));

                }
                else {

                    newSnake.pop();

                }

                return newSnake;

            });

        }, speed);

        return () => clearInterval(timer);

    }, [food, gameState, speed]);

    return (

        <div //window size(w = canva + 20, h = canva + 70)
            className="
                relative
                w-[620px] 
                h-[670px]
                border
                border-black
                rounded-xl
                //overflow-hidden
                bg-white
            "
        >

            {/*top*/}

            <div
                className="
                    h-16
                    border-b
                    border-black
                    flex
                    items-center
                    justify-between
                    px-6
                    select-none
		    text-black
                "
            >

                <span className="font-semibold">

                    Snake

                </span>

                <span className="font-mono">

                    {score}

                </span>

            </div>

            {/*Canvas*/}

            <canvas //canva
                ref={canvasRef}
                width={CANVAS_SIZE}
		height={CANVAS_SIZE}
		className=" //fix the size of the canvas (because the calculation caused error when display canva)
        	    block
        	    w-[600px] //canva size
        	    h-[600px]
                "
            />
		
	    {/*button for phone*/}

	    {
	        gameState === "playing" && (

	            <div

	                className="
	                    h-50
	                    flex
	                    items-center
	                    justify-center
	                    select-none
	                "

	            >

	                <div

	                    className="
	                        grid
	                        grid-cols-3
	                        gap-1
	                    "

	                >

	                    <div></div>


	                    <button

	                        onClick={() =>
	                            changeDirection("up")
	                        }

	                        className="
	                            w-12
	                            h-12
	                            border
	                            border-black
	                            rounded-md
	                            text-xl
	                            active:scale-90
	                            transition
	                            touch-none
				    text-black
	                        "

	                    >
	                        w

	                    </button>


	                    <div></div>



	                    <button

	                        onClick={() =>
	                            changeDirection("left")
	                        }

	                        className="
	                            w-12
	                            h-12
	                            border
	                            border-black
	                            rounded-md
	                            text-xl
	                            active:scale-90
	                            transition
	                            touch-none
				    text-black
	                        "

	                    >

	                        a

	                    </button>



	                    <button

	                        onClick={() =>
	                            changeDirection("down")
	                        }

	                        className="
	                            w-12
	                            h-12
	                            border
	                            border-black
	                            rounded-md
 	                            text-xl
 	                            active:scale-90
 	                            transition
	                            touch-none
				    text-black
	                        "

	                    >

	                        s

	                    </button>



	                    <button

	                        onClick={() =>
	                            changeDirection("right")
	                        }

	                        className="
	                            w-12
	                            h-12
	                            border
	                            border-black
	                            rounded-md
	                            text-xl
 	                            active:scale-90
	                            transition
	                            touch-none
				    text-black
	                        "

	                    >

	                        d

	                    </button>


	                </div>

	            </div>

	        )
	    }

            {/*overlay*/}

            {
                gameState !== "playing" && (

                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-white/90
                        "
                    >

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                gap-6
                            "
                        >

                            <button

                                onClick={startGame}

                                className=" //game start
                                    w-24
                                    h-24
                                    rounded-full
                                    border
                                    border-black
				    text-black
                                    text-3xl

                                    transition

                                    hover:bg-gray-100

                                    active:scale-95
                                "

                            >

                                ▶

                            </button>

                            <div
                                className=" //game over
                                    text-5xl
                                    font-medium
                                    text-gray-700
                                "
                            >

                                {

                                    gameState === "idle" || gameState === "quited" //in quit or start game phase

                                        ? "Play Snake"

                                        : "Game Over !"

                                }

                            </div>

                            {

                                gameState === "gameover" &&

                                <div
                                    className=" //score showed in the end of the game
                                        text-gray-500
                                        text-sm
                                    "
                                >

                                    Final Score : {score}

                                </div>

                            }

                        </div>

                    </div>

                )
            }

        </div>

    );

}