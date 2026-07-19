"use client";

import {
    useEffect,
    useRef,
    useState
} from "react";


type GameState =
    | "idle"
    | "playing"
    | "gameover";


interface Player {

    x:number;

    y:number;

    width:number;

    height:number;

}

interface Obstacle {

    x:number;

    y:number;

    width:number;

    height:number;

}

const CANVAS_WIDTH = 700;

const CANVAS_HEIGHT = 300;



export default function DinoGame(){


    const canvasRef =
        useRef<HTMLCanvasElement>(null);



    const [gameState,setGameState]
        = useState<GameState>("idle");



    const playerRef =
        useRef<Player>({

            x:80,

            y:220,

            width:40,

            height:40

        });

    const obstaclesRef =
    	useRef<Obstacle[]>([]);

    const obstacleTimer =
        useRef(0);

    const nextObstacleTime = useRef(100);

    const GAME_SPEED = 6;

    const velocityY =
        useRef(0);

    const isJumping =
        useRef(false);

    const GRAVITY = 0.8;
    
    const JUMP_FORCE = -14;

    const GROUND_Y = 220;
    
    function checkCollision(
        a:Player,
        b:Obstacle
    ){
	return (

            a.x < b.x + b.width &&

            a.x + a.width > b.x &&

            a.y < b.y + b.height &&

            a.y + a.height > b.y

    	);

    }

    function startGame(){


        playerRef.current = {

            x:80,

            y:220,

            width:40,

            height:40

        };

	obstaclesRef.current = [];

	velocityY.current=0;
	
	isJumping.current=false;
	
        setGameState("playing");


    }
    
    function jump(){

	if(
                    gameState === "playing" &&
                    !isJumping.current
                ){


                    velocityY.current =
                        JUMP_FORCE;


                    isJumping.current =
                        true;


                }

    }

    useEffect(()=>{


        function handleKeyDown(
             e:KeyboardEvent
        ){


            if( //jump control
                e.key === "w" ||
                e.key === "W"
            ){


                jump();


            }


        }



        window.addEventListener(
            "keydown",
            handleKeyDown
        );



        return ()=>{


            window.removeEventListener(
                "keydown",
                handleKeyDown
            );


        };


    },[gameState]);

    useEffect(()=>{


        const canvas =
            canvasRef.current;


        if(!canvas)
            return;


        const ctx =
            canvas.getContext("2d")!;


        if(!ctx)
            return;



        let animationId:number;

        function draw(){

            if(gameState !== "playing"){
        	return;
   	     }


            ctx.clearRect(
                0,
                0,
                CANVAS_WIDTH,
                CANVAS_HEIGHT
            );



            /*
                背景
            */


            ctx.fillStyle =
                "#ffffff";


            ctx.fillRect(
                0,
                0,
                CANVAS_WIDTH,
                CANVAS_HEIGHT
            );



            /*
                地面
            */


            ctx.strokeStyle =
                "#000000";


            ctx.lineWidth =
                2;


            ctx.beginPath();


            ctx.moveTo(
                0,
                260
            );


            ctx.lineTo(
                CANVAS_WIDTH,
                260
            );


            ctx.stroke();

            obstacleTimer.current++;

	    if(
    	    	obstacleTimer.current > nextObstacleTime.current
            ){ //random object occur time
 
	    	obstaclesRef.current.push({

			x:CANVAS_WIDTH,

        		y:220,

        		width:25,

        		height:40

	    	});

	        obstacleTimer.current=0;

		nextObstacleTime.current =
                    Math.floor(
            		Math.random() * 200
        	    ) + 60;
    	    }
	    
	    obstaclesRef.current.forEach(
    		obstacle=>{


       		    obstacle.x -= GAME_SPEED;


    		}
	    );

	    obstaclesRef.current =
    		obstaclesRef.current.filter(
        	    obstacle =>
            		obstacle.x > -50
                );

            const player =
                playerRef.current;
	    velocityY.current += GRAVITY;
	    player.y += velocityY.current;
	    if(
    		player.y >= GROUND_Y
	    ){
		player.y =
        	GROUND_Y;


    		velocityY.current =
        	    0;


    		isJumping.current =
        	    false;


	    }


            ctx.fillStyle =
                "#000000";
		
	    obstaclesRef.current.forEach(
    		obstacle=>{


        	    ctx.fillRect(

            		obstacle.x,

           		obstacle.y,

            		obstacle.width,

            		obstacle.height

        	    );


   		 }
	    );

	    obstaclesRef.current.forEach(
    		obstacle=>{


        	    if(
            		checkCollision(
                	    player,
                 	    obstacle
            		)
             	    ){

            		setGameState(
                	"gameover"
            		);


                    }


                 }
             );

            ctx.fillRect(

                player.x,

                player.y,

                player.width,

                player.height

            );



            animationId =
                requestAnimationFrame(draw);


        }



        draw();



        return ()=>{

            cancelAnimationFrame(
                animationId
            );

        };


    },[gameState]);





    return (

         <div

            className="
                relative
                w-[720px]
                h-[360px]
                border
                border-black
                rounded-xl
                overflow-hidden
               bg-white
           "

         >


            <canvas

                ref={canvasRef}

                width={CANVAS_WIDTH}

                height={CANVAS_HEIGHT}

            />


            {
                gameState !== "playing"
                &&

                <div

                    className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-5
                        bg-white/90
                    "

                >


                    <button

                        onClick={startGame}

                        className=" //button start
                            w-24
                            h-24
                            rounded-full
                            border
                            border-black
                            text-3xl
                            hover:bg-gray-100
                            active:scale-95
                            transition
                            text-black
                        "

                    >

                        ▶

                    </button>



                    <div //words

                        className="
                            text-5xl
                            font-normal
                            text-gray-700
                        "

                    >

                        {
                            gameState === "idle"
                            ?
                            "Play Jump"
                            :
                            "Game Over"
                        }


                    </div>


                </div>

            }



            {
                gameState === "playing"

                &&

                <button

                    onClick={jump}

                    onTouchStart={(e)=>{

                        e.preventDefault();

                        jump();

                    }}

                    className=" //jump button
                        absolute
                        right-6
                        bottom-6
                        w-16
                        h-16
                        rounded-full
                        border
                        border-black
                        bg-white
                        text-2xl
                        text-black
                        hover:bg-gray-100
                        active:scale-90
                        transition
                    "

                >

                    ▲

                </button>

            }


        </div>

    );

}