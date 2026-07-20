import Link from 'next/link';

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

            <Link 
                href="/"
                className="
                    text-xl
                    font-bold
                    navButton
                "
            >
                Haotian
            </Link>


            <div className="flex gap-6">

                <Link 
                    href="/Awards"
                    className="navButton"
                >
                    Awards
                </Link>

                <Link 
                    href="/Experience"
                    className="navButton"
                >
                    Experience
                </Link>

                <Link 
                    href="/Changelog"
                    className="navButton"
                >
                    Changelog
                </Link>

                <Link 
                    href="/Playground"
                    className="navButton"
                >
                    Playground
                </Link>

                <Link 
                    href="/Link"
                    className="navButton"
                >
                    Link
                </Link>

            </div>

        </nav>
    );
}