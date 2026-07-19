import WaveBackground from "@/components/WaveBackground";
import Snake from "@/components/Game1/Snake";
import DinoGame from "@/components/Game2/DinoGame";
export default function Experiments() {
    return (
        <main className="relative min-h-screen bg-white overflow-hidden">
	    <h1 className="text-center text-gray-700 text-8xl font-light font-mono leading-loose" >Playground</h1>
	    <h1 className="text-center text-gray-500 text-6xl font-thin font-mono leading-none" >Try to drag your mouse through the lines!</h1>
            <WaveBackground />
	    <section className="h-[60vh]" />
	    <h1 className="text-center text-gray-500 text-3xl font-bold font-mono leading-none" >a classical Snake game, use wasd to control the snake, press q to quit the game</h1>
            <h1 className="text-center text-gray-500 text-3xl font-light font-mono leading-none" >the snake can pass through the border, but it will die when it bites its tail </h1>
	    <section className="h-[10vh]" />
            <section className="pb-24 flex justify-center">
		<Snake />
	    </section>
	    <section className="h-[10vh]" />
	    <h1 className="text-center text-gray-500 text-3xl font-bold font-mono leading-none" >a Jamp game, use w to control the square</h1>
	    <h1 className="text-center text-gray-500 text-3xl font-light font-mono leading-none" >try to make the square pass all barriers</h1>
            <section className="h-[10vh]" />
	    <section className="pb-24 flex justify-center">
	    	<DinoGame />
	    </section>
        </main>
    );
}