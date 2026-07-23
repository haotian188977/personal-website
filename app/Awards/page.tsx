export default function Home() {
    return( 
        <main>

            <h1
                className="
                    text-4xl
                    font-semibold
                    font-mono
                    text-blue-900
                    mt-10
                    ml-5
                "
            >
                Self-Introduction: Growing Through Transitions, Defined by Passion and Perseverance
            </h1>


            <section className="h-[4vh]" />


            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    gap-10
                    px-5
                "
            >
                <p
                    className="
                        flex-1
                        text-xl
                        font-mono
                        text-blue-800
                        leading-relaxed
                        text-justify
			mr-50
                    "
                >
                    I was born in 2009 in Guilin, Guangxi, China. My early childhood was spent in this city, famed for its picturesque landscapes—a tranquil time that sowed the seeds of curiosity and gentleness in my character. In 2012, following my parents’ job relocation, I moved with my family to Beijing, the capital, where we lived until 2014, giving me a first taste of the rhythm of a northern metropolis. In 2015, we relocated again to Wuhan, Hubei Province, where I completed my elementary school and part of my middle school education—I attended Grade 7 at No. 2 Middle School of Shuiguohu, Wuchang District, Wuhan. The solid foundation in sciences and the collective life there taught me discipline and cooperation. In October 2022, I began my overseas studies, first attending Marie-Laurier Academy (Grade 8) and then Royal Vale High School (Grade 9) in Quebec, Canada, experiencing English education within a French-speaking environment. Since September 2024, I have been studying at Bishop Allen Academy in Ontario, where I am currently in Grade 12. These frequent moves have taught me from a young age to adapt quickly to new environments and to become a self-directed learner. 
                </p>
                <div
                    className="
                        grid
                        grid-cols-3
                        gap-3
                        w-[660px]
                    "
                >

                    <img
                        src="/images/1.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/2.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/3.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/4.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/5.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/6.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/7.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/10.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                    <img
                        src="/images/9.jpg"
                        className="w-100 h-50 object-cover rounded-lg border"
                    />

                </div>

            </div>

        </main>
    );
}