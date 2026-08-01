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
                py-5
                bg-blue-700
                text-white
                border-b
                border-blue-400
            "
        >

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