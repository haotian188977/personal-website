export default function Home() {
    return (
        <main className="p-8 bg-blue-50">
	    <h1 className="text-left text-blue-900 text-6xl font-bold font-mono leading-loose ml-10" >Hobby: Passion and Perseverance</h1>
            <div
                className="
                    flex
                    justify-center
                    gap-4
                    mt-4
                "
            >
		<div>
                    <video src="/videos/case1.mp4" controls className="w-[400] rounded-xl border border-black ml-20"/>
		     <h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none mr-20" >A piggy bank simulated robot made by myself when I was 7.</h1>
		</div>
		<div>
                     <video src="/videos/guitar1.mp4" controls className="w-[400] rounded-xl border border-black"/>
		    <h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none mr-20" >A electrical guitar made by myself when I was 7.</h1>
		</div>
		<div>
                    <video src="/videos/snake1.mp4" controls className="w-[400] rounded-xl border border-black"/>
		    <h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none mr-20" >A snake simulated robot made by myself when I was 8.</h1>
		</div>
            </div>
	    <section className="h-[10vh]" />

            <div
                className="
                    flex
                    justify-center
                    gap-4
                    mt-4
                "
            >
	      <div>
                <video
                    src="/videos/battle1.mp4"
                    controls
                    className="
                        w-[400]
                        rounded-xl
                        border
                        border-black
                    "
                />
		<h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none mr-20" >A snake Sumo robot made by myself when I was 8.</h1>

	      </div>
	      <div>
                <video
                    src="/videos/music1.mp4"
                    controls
                    className="
                        w-[400]
                        rounded-xl
                        border
                        border-black
                    "
                />
		<h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none mr-20" >A music player made using adurino by me in the electic club.</h1>

	      </div>
            </div>

        </main>
    );
}