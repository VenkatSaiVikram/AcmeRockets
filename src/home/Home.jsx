import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import Rockets from "./Rockets";
import Testimonials from "./Testimonials";

function Home() {

    return (
        <div className="home">
            <Header />

            <main>
                <Introduction />
                <hr className="w-3/4 mx-auto" />
                <Rockets />
                <hr className="w-3/4 mx-auto" />
                <Testimonials />
                <hr className="w-3/4 mx-auto" />
                <Contact />
                <Footer />
            </main>
        </div>
    )

}

export default Home;