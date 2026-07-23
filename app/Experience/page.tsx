export default function Home() {
    return (
        <main className="p-8">
            <div
                className="
                    flex
                    justify-center
                    gap-4
                    mt-4
                "
            >
                <video src="/videos/battle1.mp4" controls className="w-[400] rounded-xl border border-black"/>
                <video src="/videos/case1.mp4" controls className="w-[400] rounded-xl border border-black"/>
                <video src="/videos/guitar1.mp4" controls className="w-[400] rounded-xl border border-black"/>
            </div>


            <div
                className="
                    flex
                    justify-center
                    gap-4
                    mt-4
                "
            >
                <video
                    src="/videos/snake1.mp4"
                    controls
                    className="
                        w-[400]
                        rounded-xl
                        border
                        border-black
                    "
                />

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

            </div>

        </main>
    );
}