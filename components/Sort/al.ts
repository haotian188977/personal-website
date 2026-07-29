export type Step = [
    number,
    number
];



/*
    Bubble Sort
    O(n²)
*/

export function bubbleSort(
    arr:number[]
):Step[]{


    const steps:Step[]=[];


    for(
        let i=0;
        i<arr.length;
        i++
    ){


        for(
            let j=0;
            j<arr.length-i-1;
            j++
        ){


            if(
                arr[j]>arr[j+1]
            ){


                steps.push([
                    j,
                    j+1
                ]);



                [
                    arr[j],
                    arr[j+1]

                ]=[

                    arr[j+1],
                    arr[j]

                ];

            }

        }

    }


    return steps;

}







/*
    Selection Sort

    O(n²)
*/

export function selectionSort(
    arr:number[]
):Step[]{


    const steps:Step[]=[];



    for(
        let i=0;
        i<arr.length;
        i++
    ){


        let min=i;



        for(
            let j=i+1;
            j<arr.length;
            j++
        ){


            if(
                arr[j]<arr[min]
            ){

                min=j;

            }

        }




        if(
            min!==i
        ){


            steps.push([
                i,
                min
            ]);



            [
                arr[i],
                arr[min]

            ]=[

                arr[min],
                arr[i]

            ];

        }

    }



    return steps;

}









/*
    Insertion Sort

    O(n²)
*/

export function insertionSort(
    arr:number[]
):Step[]{


    const steps:Step[]=[];



    for(
        let i=1;
        i<arr.length;
        i++
    ){


        let j=i;



        while(
            j>0 &&
            arr[j]<arr[j-1]
        ){



            steps.push([
                j,
                j-1
            ]);



            [
                arr[j],
                arr[j-1]

            ]=[

                arr[j-1],
                arr[j]

            ];



            j--;

        }

    }



    return steps;

}









/*
    Quick Sort

    Average O(n log n)

*/

export function quickSort(
    arr:number[],
    start=0,
    end=arr.length-1,
    steps:Step[]=[]
):Step[]{



    if(
        start>=end
    )
        return steps;




    const pivot =
        arr[end];



    let index=start;



    for(
        let i=start;
        i<end;
        i++
    ){



        if(
            arr[i]<pivot
        ){



            if(
                index!==i
            ){



                steps.push([
                    index,
                    i
                ]);



                [
                    arr[index],
                    arr[i]

                ]=[

                    arr[i],
                    arr[index]

                ];

            }


            index++;

        }

    }





    if(
        index!==end
    ){



        steps.push([
            index,
            end
        ]);



        [
            arr[index],
            arr[end]

        ]=[

            arr[end],
            arr[index]

        ];

    }





    quickSort(
        arr,
        start,
        index-1,
        steps
    );



    quickSort(
        arr,
        index+1,
        end,
        steps
    );



    return steps;

}









/*
    Merge Sort

    O(n log n)

*/


export function mergeSort(
    arr:number[],
    left=0,
    right=arr.length-1,
    steps:Step[]=[]
):Step[]{



    if(
        left>=right
    )
        return steps;




    const mid =
        Math.floor(
            (left+right)/2
        );



    mergeSort(
        arr,
        left,
        mid,
        steps
    );


    mergeSort(
        arr,
        mid+1,
        right,
        steps
    );




    let temp:number[]=[];


    let i=left;

    let j=mid+1;



    while(
        i<=mid &&
        j<=right
    ){



        if(
            arr[i]<=arr[j]
        ){

            temp.push(
                arr[i++]
            );

        }
        else{

            temp.push(
                arr[j++]
            );

        }


    }





    while(
        i<=mid
    ){

        temp.push(
            arr[i++]
        );

    }



    while(
        j<=right
    ){

        temp.push(
            arr[j++]
        );

    }





    for(
        let k=0;
        k<temp.length;
        k++
    ){



        const index =
            left+k;



        if(
            arr[index]!==temp[k]
        ){



            const target =
                arr.indexOf(
                    temp[k]
                );



            steps.push([
                index,
                target
            ]);



            [
                arr[index],
                arr[target]

            ]=[

                arr[target],
                arr[index]

            ];


        }


    }




    return steps;

}
/*
    Heap Sort

    O(n log n)

*/


export function heapSort(
    arr:number[]
):Step[]{


    const steps:Step[]=[];



    function heapify(
        n:number,
        i:number
    ){


        let largest=i;


        const left =
            i*2+1;


        const right =
            i*2+2;



        if(
            left<n &&
            arr[left]>arr[largest]
        ){

            largest=left;

        }



        if(
            right<n &&
            arr[right]>arr[largest]
        ){

            largest=right;

        }



        if(
            largest!==i
        ){



            steps.push([
                i,
                largest
            ]);



            [
                arr[i],
                arr[largest]

            ]=[

                arr[largest],
                arr[i]

            ];



            heapify(
                n,
                largest
            );

        }

    }





    // build heap

    for(
        let i=Math.floor(arr.length/2)-1;
        i>=0;
        i--
    ){

        heapify(
            arr.length,
            i
        );

    }





    // extract

    for(
        let i=arr.length-1;
        i>0;
        i--
    ){


        steps.push([
            0,
            i
        ]);



        [
            arr[0],
            arr[i]

        ]=[

            arr[i],
            arr[0]

        ];



        heapify(
            i,
            0
        );

    }



    return steps;

}









/*
    Shell Sort

    Improved insertion sort

*/

export function shellSort(
    arr:number[]
):Step[]{


    const steps:Step[]=[];



    for(
        let gap=Math.floor(arr.length/2);
        gap>0;
        gap=Math.floor(gap/2)
    ){



        for(
            let i=gap;
            i<arr.length;
            i++
        ){



            let j=i;



            while(
                j>=gap &&
                arr[j]<arr[j-gap]
            ){



                steps.push([
                    j,
                    j-gap
                ]);



                [
                    arr[j],
                    arr[j-gap]

                ]=[

                    arr[j-gap],
                    arr[j]

                ];



                j-=gap;


            }


        }


    }



    return steps;

}









/*
    Counting Sort

    O(n+k)

*/


export function countingSort(
    arr:number[]
):Step[]{


    const steps:Step[]=[];


    const count:number[]=[];



    const max =
        Math.max(...arr);



    for(
        let i=0;
        i<=max;
        i++
    ){

        count[i]=0;

    }



    arr.forEach(
        n=>{
            count[n]++;
        }
    );



    let index=0;



    for(
        let i=0;
        i<count.length;
        i++
    ){



        while(
            count[i]>0
        ){


            if(
                arr[index]!==i
            ){


                const target =
                    arr.indexOf(
                        i,
                        index
                    );



                if(target!==-1){


                    steps.push([
                        index,
                        target
                    ]);



                    [
                        arr[index],
                        arr[target]

                    ]=[

                        arr[target],
                        arr[index]

                    ];

                }


            }


            index++;

            count[i]--;


        }


    }



    return steps;

}









/*
    Radix Sort

    Non comparison sort

*/


export function radixSort(
    arr:number[]
):Step[]{


    const steps:Step[]=[];


    const max =
        Math.max(...arr);



    let exp=1;



    while(
        Math.floor(max/exp)>0
    ){



        const output:number[]=
            new Array(
                arr.length
            );



        const count:number[]=
            new Array(10)
            .fill(0);





        for(
            let i=0;
            i<arr.length;
            i++
        ){


            const digit =
                Math.floor(
                    arr[i]/exp
                )%10;


            count[digit]++;


        }





        for(
            let i=1;
            i<10;
            i++
        ){

            count[i]+=count[i-1];

        }





        for(
            let i=arr.length-1;
            i>=0;
            i--
        ){


            const digit =
                Math.floor(
                    arr[i]/exp
                )%10;



            output[
                --count[digit]
            ]=arr[i];


        }





        for(
            let i=0;
            i<arr.length;
            i++
        ){


            if(
                arr[i]!==output[i]
            ){



                const target =
                    arr.indexOf(
                        output[i],
                        i
                    );



                steps.push([
                    i,
                    target
                ]);



                [
                    arr[i],
                    arr[target]

                ]=[

                    arr[target],
                    arr[i]

                ];


            }

        }



        exp*=10;


    }



    return steps;

}









/*
    Tim Sort

    Python / Java use similar idea

    Here:
    insertion sort for visualization

*/


export function timSort(
    arr:number[]
):Step[]{


    return insertionSort(
        arr
    );

}









/*
    Unified selector

*/


export function getSteps(
    algorithm:string,
    arr:number[]
):Step[]{



    switch(
        algorithm
    ){


        case "bubble":

            return bubbleSort(arr);



        case "selection":

            return selectionSort(arr);



        case "insertion":

            return insertionSort(arr);



        case "quick":

            return quickSort(arr);



        case "merge":

            return mergeSort(arr);



        case "heap":

            return heapSort(arr);



        case "shell":

            return shellSort(arr);



        case "counting":

            return countingSort(arr);



        case "radix":

            return radixSort(arr);



        case "tim":

            return timSort(arr);



        default:

            return [];

    }

}