"use client";

import {
  createContext,
  useContext,
  useState,
  useRef
} from "react";

import { useRouter } from "next/navigation";


const TransitionContext =
createContext<any>(null);



export function TransitionProvider({
children
}:{
children:React.ReactNode
}){


const router = useRouter();

const videoRef = useRef<HTMLVideoElement>(null);


const [active,setActive]
=
useState(false);



function navigate(href:string){


if(active)return;


setActive(true);



setTimeout(()=>{

videoRef.current?.play();

},50);



setTimeout(()=>{

router.push(href);


},700);



setTimeout(()=>{

setActive(false);


},1400);



}



return (

<TransitionContext.Provider
value={{navigate}}
>


{children}



<div
className={`
fixed
inset-0
z-[999]

pointer-events-none

transition-opacity
duration-500

${active
?
"opacity-100"
:
"opacity-0"
}

`}
>


<video

ref={videoRef}

src="/videos/transition.mp4"

className="
w-full
h-full
object-cover
"

muted

playsInline

/>

</div>


</TransitionContext.Provider>

)

}



export function useTransition(){

return useContext(TransitionContext);

}