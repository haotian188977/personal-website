export default function Home() {
    return (
    	<main className="relative min-h-screen bg-blue-50 overflow-hidden">
	    <h1 className="text-center text-blue-900 text-8xl font-normal font-mono leading-loose" >Links</h1>
	    <hr className="border-t border-blue-900 my-10" />
            <div className="text-center">
	        <a 
		    href = "https://github.com/haotian188977/personal-website"
		    target="_blank"
		    className="
		    	text-center
		    	text-3xl
		    	font-mono
        	    	text-blue-600
        	    	underline
    		    "
	    	>
			The GitHub page of my website, the source codes and build history are included there
	    	</a>
	    </div>
	    <div  className="flex justify-center mt-15">
		<img
                    src="/images/github.png"
                    className="w-400 h-150 object-cover rounded-lg border"
                />
	    </div>
	    <hr className="border-t border-blue-900 my-10" />
	    <div className="text-center">
	        <a 
		    href = "https://sites.google.com/tcdsb.ca/haotian-portfolio/"
		    target="_blank"
		    className="
		    	text-center
		    	text-3xl
		    	font-mono
        	    	text-blue-600
        	    	underline
    		    "
	    	>
			A communication technology course website created by me, includes some of my coursework
	    	</a>
	    </div>
	    <div  className="flex justify-center mt-15">
		<img
                    src="/images/com.png"
                    className="w-400 h-150 object-cover rounded-lg border"
                />
	    </div>
	    <div  className="flex justify-center">
		<img
                    src="/images/c.png"
                    className="w-400 h-150 object-cover rounded-lg border"
                />
	    </div>
	    <div  className="flex justify-center">
		<img
                    src="/images/c1.png"
                    className="w-400 h-650 object-cover rounded-lg border"
                />
	    </div>
	    <hr className="border-t border-blue-900 my-10" />
            <div className="text-center">
	        <a 
		    href = "https://sites.google.com/tcdsb.ca/haotian-gan/"
		    target="_blank"
		    className="
		    	text-center
		    	text-3xl
		    	font-mono
        	    	text-blue-600
        	    	underline
    		    "
	    	>
			A digital art course website created by me, includes some of my coursework
	    	</a>
	    <div  className="flex justify-center mt-15">
		<img
                    src="/images/art.png"
                    className="w-400 h-200 object-cover rounded-lg border"
                />
	    </div>
	    </div>
    	</main>
    );
}