import WaveBackground from "@/components/WaveBackground";
import Snake from "@/components/Game1/Snake";
import DinoGame from "@/components/Game2/DinoGame";
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
	    <h1 className="text-center text-blue-800 text-3xl font-bold font-mono leading-none" >a classical Snake game, use wasd to control the snake, press q to quit the game</h1>
            <h1 className="text-center text-blue-800 text-3xl font-light font-mono leading-none" >the snake can pass through the border, but it will die when it bites its tail </h1>
	    <section className="h-[10vh]" />
            <section className="pb-24 flex justify-center">
		<Snake />
	    </section>
	    <section className="h-[10vh]" />
	    <h1 className="text-center text-blue-800 text-3xl font-bold font-mono leading-none" >a Jamp game, use w to control the square</h1>
	    <h1 className="text-center text-blue-800 text-3xl font-light font-mono leading-none" >try to make the square pass all barriers</h1>
            <section className="h-[10vh]" />
	    <section className="pb-24 flex justify-center">
	    	<DinoGame />
	    </section>
        </main>
    );
}