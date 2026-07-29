"use client";

import {
    useEffect,
    useRef,
    useState
} from "react";


import {
    getSteps,
    type Step
} from "./al";



const BAR_COUNT = 20;

const CANVAS_WIDTH = 800;

const CANVAS_HEIGHT = 400;



type Algorithm =
    | "bubble"
    | "selection"
    | "insertion"
    | "quick"
    | "merge"
    | "heap"
    | "shell"
    | "counting"
    | "radix"
    | "tim";



interface Bar{

    id:number;

}





export default function SortingVisualizer(){



    const canvasRef =
        useRef<HTMLCanvasElement>(null);



    const imageRef =
        useRef<HTMLImageElement|null>(null);



    const timerRef =
        useRef<NodeJS.Timeout|null>(null);




    const [bars,setBars] =
        useState<Bar[]>([]);



    const [algorithm,setAlgorithm]
        =
        useState<Algorithm>(
            "bubble"
        );



    const [running,setRunning]
        =
        useState(false);




    const [active,setActive]
        =
        useState<number[]>([]);




    const [speed,setSpeed]
        =
        useState(300);




    const [compare,setCompare]
        =
        useState(0);



    const [swap,setSwap]
        =
        useState(0);



    const [time,setTime]
        =
        useState(0);







    /*
        Load image
    */


    useEffect(()=>{


        const img =
            new Image();



        img.src =
            "/images/test1.png";



        img.onload=()=>{


            imageRef.current =
                img;



            createBars();


        };


    },[]);









    /*
        Create shuffled slices
    */


    function createBars(){



        const temp:Bar[]=[];



        for(
            let i=0;
            i<BAR_COUNT;
            i++
        ){


            temp.push({

                id:i

            });


        }





        shuffle(temp);



        setBars(temp);



        setActive([]);



        setCompare(0);

        setSwap(0);

        setTime(0);



    }








    function shuffle(
        arr:Bar[]
    ){


        for(
            let i=arr.length-1;
            i>0;
            i--
        ){



            const j =
                Math.floor(
                    Math.random()*(i+1)
                );



            [
                arr[i],
                arr[j]

            ]=[

                arr[j],
                arr[i]

            ];

        }


    }









    /*
        Draw Canvas
    */


    useEffect(()=>{


        const canvas =
            canvasRef.current;



        const ctx =
            canvas?.getContext(
                "2d"
            );



        const img =
            imageRef.current;




        if(
            !canvas ||
            !ctx ||
            !img
        )
            return;





        ctx.clearRect(
            0,
            0,
            CANVAS_WIDTH,
            CANVAS_HEIGHT
        );

	ctx.fillStyle = "red";
	ctx.fillRect(
    	    0,
    	    0,
    	    CANVAS_WIDTH,
    	    CANVAS_HEIGHT
	);


        const width =
            CANVAS_WIDTH /
            BAR_COUNT;





        bars.forEach(
            (bar,index)=>{


                ctx.globalAlpha =
                    active.includes(index)
                    ?
                    0.5
                    :
                    1;




                ctx.drawImage(

                    img,

                    bar.id * width,
                    0,
                    width,
                    CANVAS_HEIGHT,


                    index * width,
                    0,
                    width,
                    CANVAS_HEIGHT

                );


            }
        );




        ctx.globalAlpha=1;



    },[
        bars,
        active
    ]);









    function sleep(
        ms:number
    ){

        return new Promise(
            r=>setTimeout(
                r,
                ms
            )
        );

    }









    async function start(){



        if(running)
            return;




        setRunning(true);



        setCompare(0);

        setSwap(0);

        setTime(0);





        timerRef.current =
            setInterval(()=>{


                setTime(
                    t=>t+10
                );


            },10);






        const ids =
            bars.map(
                b=>b.id
            );




        const steps:Step[] =
            getSteps(
                algorithm,
                ids
            );






        for(
            const [
                a,
                b
            ]
            of steps
        ){



            setActive([
                a,
                b
            ]);



            setCompare(
                x=>x+1
            );




            await sleep(
                speed
            );





            setBars(
                old=>{


                    const copy =
                        [...old];



                    [
                        copy[a],
                        copy[b]

                    ]=[

                        copy[b],
                        copy[a]

                    ];



                    return copy;


                }
            );





            setSwap(
                x=>x+1
            );





            await sleep(
                speed
            );

        }






        setActive([]);



        setRunning(false);




        if(timerRef.current){


            clearInterval(
                timerRef.current
            );


            timerRef.current=null;


        }


    }
    return (

        <div
            className="
                w-[850px]
                border
                border-black
                rounded-xl
                p-6
                bg-white
            "
        >


            <canvas

                ref={canvasRef}

                width={CANVAS_WIDTH}

                height={CANVAS_HEIGHT}

                className="
                    rounded-lg
                "

            />



            <div
                className="
                    flex
                    justify-center
                    gap-4
                    mt-6
                    flex-wrap
                "
            >


                <select

                    value={algorithm}

                    onChange={
                        e=>
                        setAlgorithm(
                            e.target.value as Algorithm
                        )
                    }


                    className="
                        border
                        border-black
                        rounded
                        px-3
                        py-2
                        font-mono
                    "

                >

                    <option value="bubble">
                        Bubble Sort
                    </option>


                    <option value="selection">
                        Selection Sort
                    </option>


                    <option value="insertion">
                        Insertion Sort
                    </option>


                    <option value="quick">
                        Quick Sort
                    </option>


                    <option value="merge">
                        Merge Sort
                    </option>


                    <option value="heap">
                        Heap Sort
                    </option>


                    <option value="shell">
                        Shell Sort
                    </option>


                    <option value="counting">
                        Counting Sort
                    </option>


                    <option value="radix">
                        Radix Sort
                    </option>


                    <option value="tim">
                        Tim Sort
                    </option>


                </select>







                <button

                    onClick={createBars}

                    disabled={running}

                    className="
                        border
                        border-black
                        rounded
                        px-5
                        py-2
                        hover:bg-black
                        hover:text-white
                        transition
                    "

                >

                    Shuffle

                </button>






                <button

                    onClick={start}

                    disabled={running}

                    className="
                        border
                        border-black
                        rounded
                        px-5
                        py-2
                        hover:bg-black
                        hover:text-white
                        transition
                    "

                >

                    {
                        running
                        ?
                        "Running..."
                        :
                        "Start"
                    }


                </button>


            </div>









            <div

                className="
                    text-center
                    mt-6
                    font-mono
                "

            >


                <p>

                    Speed:
                    {" "}
                    {speed}ms

                </p>




                <input

                    type="range"

                    min="50"

                    max="1000"

                    value={speed}

                    onChange={
                        e=>
                        setSpeed(
                            Number(
                                e.target.value
                            )
                        )
                    }

                    className="
                        w-64
                    "

                />




                <p className="bg-blue-600 text-white">

                    Time:
                    {" "}
                    {(time/1000).toFixed(2)}
                    s

                </p>



                <p>

                    Comparisons:
                    {" "}
                    {compare}

                </p>




                <p>

                    Swaps:
                    {" "}
                    {swap}

                </p>


            </div>










            <div

                className="
                    text-center
                    mt-8
                    font-mono
                "

            >


            {
                algorithm==="bubble" &&
                <>
                    <p>
                        Bubble Sort
                    </p>

                    <p>
                        Average:
                        O(n²)
                    </p>

                    <p>
                        Space:
                        O(1)
                    </p>
                </>
            }






            {
                algorithm==="selection" &&
                <>
                    <p>
                        Selection Sort
                    </p>

                    <p>
                        Average:
                        O(n²)
                    </p>

                    <p>
                        Space:
                        O(1)
                    </p>
                </>
            }







            {
                algorithm==="insertion" &&
                <>
                    <p>
                        Insertion Sort
                    </p>

                    <p>
                        Average:
                        O(n²)
                    </p>

                    <p>
                        Space:
                        O(1)
                    </p>
                </>
            }







            {
                algorithm==="quick" &&
                <>
                    <p>
                        Quick Sort
                    </p>

                    <p>
                        Average:
                        O(n log n)
                    </p>

                    <p>
                        Worst:
                        O(n²)
                    </p>
                </>
            }







            {
                algorithm==="merge" &&
                <>
                    <p>
                        Merge Sort
                    </p>

                    <p>
                        Average:
                        O(n log n)
                    </p>

                    <p>
                        Space:
                        O(n)
                    </p>
                </>
            }








            {
                algorithm==="heap" &&
                <>
                    <p>
                        Heap Sort
                    </p>

                    <p>
                        Average:
                        O(n log n)
                    </p>

                    <p>
                        Space:
                        O(1)
                    </p>
                </>
            }







            {
                algorithm==="shell" &&
                <>
                    <p>
                        Shell Sort
                    </p>

                    <p>
                        Average:
                        depends on gap
                    </p>

                    <p>
                        Space:
                        O(1)
                    </p>
                </>
            }







            {
                algorithm==="counting" &&
                <>
                    <p>
                        Counting Sort
                    </p>

                    <p>
                        Complexity:
                        O(n+k)
                    </p>

                    <p>
                        Non-comparison sort
                    </p>
                </>
            }







            {
                algorithm==="radix" &&
                <>
                    <p>
                        Radix Sort
                    </p>

                    <p>
                        Complexity:
                        O(nk)
                    </p>

                    <p>
                        Non-comparison sort
                    </p>
                </>
            }







            {
                algorithm==="tim" &&
                <>
                    <p>
                        Tim Sort
                    </p>

                    <p>
                        Complexity:
                        O(n log n)
                    </p>

                    <p>
                        Hybrid algorithm
                    </p>
                </>
            }



            </div>



        </div>

    );


}