
function Footer() {
    
    return (
        
        <footer id="address" className="w-screen flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center p-4 sm:gap-12 bg-teal-700 font-thin">
            <section>
                <address>
                    <h2>Acme Rocket - Powered Products, Inc.</h2>
                    555 Astro Way
                    <br />
                    Fairfield, New Jersey 12345-55555
                    <br />
                    Email: <a href="mailto:venkatsaivikram@gmail.com">venkatsaivikram@gmail.com</a>
                    <br />
                    Phone: <a href="tel:9597088744">+91 9597088744</a>
                </address>
            </section>

            <section>
                <nav>
                    <ul className="flex sm:flex-col sm:gap-0 flex-row gap-4">
                        <li className="hover:bg-black py-1 px-4 hover:text-teal-500 rounded-xl">
                            <a href="#rockets">Our Rockets</a>
                        </li>
                        <li className="hover:bg-black py-1 px-4 hover:text-teal-500 rounded-xl">
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li className="hover:bg-black py-1 px-4 hover:text-teal-500 rounded-xl">
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </section>

            <section className="flex flex-col justify-center items-center text-xs">
                <p>
                    Copyright &copy;
                    <span>{ new Date().getFullYear() }</span>
                </p>
                <p>
                    All Rights Reserved
                </p>
            </section>
        </footer>

    )

}

export default Footer;