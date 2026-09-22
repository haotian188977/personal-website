import Link from 'next/link';
import TransitionLink from "@/components/Transit/Link";

export default function Header() {
    return (
        <nav
            className="
                flex
                justify-between
                items-center
                px-8
                py-3
                bg-blue-700
                text-white
                border-b
                border-blue-400
            "
        >
	  <section className="flex items-center gap-4">
            <TransitionLink 
                href="/"
                className="
                    text-xl
                    font-bold
                    navButton
                "
            >
                Haotian
            </TransitionLink>

	    <TransitionLink 
                href="https://github.com/haotian188977/personal-website"
                className="
                    text-xl
                    font-bold
                    navButton
                "
            >
                <img
                        src="/images/githubico.png"
                        className="w-[40px] h-auto object-cover"
                />
            </TransitionLink>

	    <TransitionLink 
                href="https://sites.google.com/tcdsb.ca/haotian-portfolio/"
                className="
                    text-xl
                    font-bold
                    navButton
                "
            >
                <img
                        src="/images/site.png"
                        className="w-[40px] h-auto object-cover"
                />
            </TransitionLink>

	    <TransitionLink 
                href="https://sites.google.com/tcdsb.ca/haotian-gan/"
                className="
                    text-xl
                    font-bold
                    navButton
                "
            >
                <img
                        src="/images/site.png"
                        className="w-[40px] h-auto object-cover"
                />
            </TransitionLink>

	  </section>

            <div className="flex gap-6">

                <TransitionLink 
                    href="/Education"
                    className="navButton"
                >
                    Education
                </TransitionLink>

                <TransitionLink 
                    href="/Experience"
                    className="navButton"
                >
                    Experience
                </TransitionLink>

                <TransitionLink 
                    href="/Activity"
                    className="navButton"
                >
                    Activity
                </TransitionLink>

                <TransitionLink 
                    href="/Playground"
                    className="navButton"
                >
                    Playground
                </TransitionLink>

                <TransitionLink 
                    href="/Link"
                    className="navButton"
                >
                    Link
                </TransitionLink>

            </div>

        </nav>
    );
}