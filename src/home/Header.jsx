import { useState } from "react";

function Header() {

    let [buttonDisplay, setButtonDisplay] = useState("block");
    let [mobileNavPosition, setMobileNavPosition] = useState("-top-96")

    return (
        <header className="font-thin w-screen p-6 h-20 flex flex-col bg-teal-700 text-white sticky top-0 z-10">
            <section className="flex justify-between w-full items-center">
                <h1 className="sm:text-3xl text-2xl font-thin"><a href="#introduction">🚀 Acme Rockets</a></h1>
                <div>
                    <button className={`text-3xl md:hidden font-thin cursor-pointer`} onClick={ () => {
                        if (buttonDisplay === "block") {
                            setButtonDisplay("none");
                            setMobileNavPosition("top-16");
                        } else {
                            setButtonDisplay("block");
                            setMobileNavPosition("-top-96");
                        }
                    } }>
                        { buttonDisplay === "block" ? (<>&#9776;</>) : "X" }
                        
                    </button>

                    <nav className="hidden md:flex" aria-label="main-nav">
                        <a href="#rockets" className="text-lg px-2 py-1 hover:bg-black hover:text-teal-500 hover:rounded-lg hover:opacity-90 transition-all">
                            Our Rockets
                        </a>
                        <a href="#testimonials" className="text-lg px-2 py-1 hover:bg-black hover:text-teal-500 hover:rounded-lg hover:opacity-90 transition-all">
                            Testimonials
                        </a>
                        <a href="#contact" className="text-lg px-2 py-1 hover:bg-black hover:text-teal-500 hover:rounded-lg hover:opacity-90 transition-all">
                            Contact Us
                        </a>
                    </nav>
                </div>
            </section>

            <section className={`flex -z-50 items-start absolute p-8 w-screen bg-teal-700 ${mobileNavPosition} left-0 transition-all`}>
                <nav className="w-screen">
                    <ul className="text-xl flex flex-col justify-center items-center gap-4">
                        <li onClick={ () => {
                            setButtonDisplay("block");
                            setMobileNavPosition("-top-96");
                        } }>
                            <a href="#introduction">Home</a>
                        </li>

                        <li onClick={ () => {
                            setButtonDisplay("block");
                            setMobileNavPosition("-top-96");
                        } }>
                            <a href="#rockets">Our Rockets</a>
                        </li>

                        <li onClick={ () => {
                            setButtonDisplay("block");
                            setMobileNavPosition("-top-96");
                        } }>
                            <a href="#testimonials">Testimonials</a>
                        </li>

                        <li onClick={ () => {
                            setButtonDisplay("block");
                            setMobileNavPosition("-top-96");
                        } }>
                            <a href="#contact">Contact</a>
                        </li>

                        <li onClick={ () => {
                            setButtonDisplay("block");
                            setMobileNavPosition("-top-96");
                        } }>
                            <a href="#address">Legal</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )

}

export default Header;