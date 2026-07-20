export default function Home() {
    return (
	<main className="relative min-h-screen bg-blue-500 overflow-hidden">
	    <div className="
    		flex
    		items-center
    		gap-10
		mt-20
	    ">
		<img
        	    src="/picture/test.jpg"
       		    className="
			ml-20
            		w-96
            		h-130
           		rounded-full
            		object-cover
        	    "
    		/>

		<div>
	    	    <h1 className="ml-20 mr-20 leading-loose text-front text-white text-7xl font-black font-mono leading-loose" > Hi, my name is Haotian </h1>
	    	    <h1 className="ml-20 mr-50 leading-normal text-front text-white text-5xl font-semibold font-mono leading-none" > a student studied in China and Canada with multi-culture environments, interested in computer science, programming, and technology, currently woring toward the goal of becoming a computer engineer </h1>
		</div>
	    </div>
        </main>
    );
}