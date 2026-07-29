"use client";


import {
useTransition
}
from "./Transit";

export default function TransitionLink({

href,
children,
className

}:{
href:string;
children:React.ReactNode;
className?:string;

}){


const {
navigate
}=useTransition();



return (

<button

className={className}

onClick={()=>
navigate(href)
}

>

{children}

</button>

)

}