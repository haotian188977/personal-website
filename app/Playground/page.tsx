import WaveBackground from "@/components/WaveBackground";
import Snake from "@/components/Game1/Snake";
import DinoGame from "@/components/Game2/DinoGame";
import SortingVisualizer from "@/components/Sort/sortV";
export default function Experiments() {
    return (
        <main className="relative min-h-screen bg-blue-50 overflow-hidden">
	    <h1 className="text-center text-blue-900 text-8xl font-normal font-mono leading-loose" >Playground</h1>
	    <h1 className="text-center text-blue-800 text-6xl font-light font-mono leading-none" >Try to drag your mouse through the lines!</h1>
            <WaveBackground />
	    <section className="h-[45vh]" />
	    <hr className="border-t border-blue-900 my-10" />
	    <section className="h-[5vh]" />
	    <h1 className="text-center text-blue-800 text-8xl font-normal font-mono leading-loose" >Game</h1>
	    <h1 className="text-center text-blue-800 text-5xl font-light font-mono leading-none" >These are some games programmed by me, using TypeScript(JavaScript), HTML Canvas, and CSS.</h1>
	    <section className="h-[10vh]" />
            <section className="pb-24 flex justify-center ml-100">
		<Snake />
		<h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none ml-20 mr-100 mt-65" >a classical Snake game, use wasd to control the snake, press q to quit the game （the snake can pass through the border, but it will die when it bites its tail）</h1>
	    </section>
	    <section className="h-[20vh]" />
	    <section className="pb-24 flex justify-center mr-10">
		<h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none ml-100 mt-40" >a Jamp game, use w to control the square（try to make the square pass all barriers）</h1>
		<section className="ml-20 mr-50">
		    <DinoGame />
		</section>
	    </section>
	    <h1 className="text-center text-blue-800 text-3xl font-normal font-mono leading-none ml-100 mt-40 mr-60" >a sort algorithm visualizer, the time for different algorithm required to sort a picture can be compared at here</h1>
	    <section className="h-[5vh]" />
	    <section className="pb-24 flex justify-center">
    		<SortingVisualizer />
	    </section>
        </main>
    );
}