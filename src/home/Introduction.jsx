import RocketDab from "../assets/rocketdab.png"

function Introduction() {

    return (
        
        <article id="introduction" className="px-4 py-12 tallscreen:cover-full-page widescreen:cover-full-page justify-center md:flex-row-reverse md:justify-center flex flex-col gap-8 items-center scroll-mt-40">
            <section>
                <img src={ RocketDab } alt="Rocket Dab" className="w-80" />
            </section>
            <section className="flex flex-col items-center gap-3">
                <h2 className="text-4xl max-w-md text-center sm:text-6xl font-thin">
                    We Boldly Go
                    <br />
                    <span className="text-indigo-500 font-thin">Where No Rocket</span>
                    <br />
                    Has Gone Before...
                </h2>

                <p className="text-2xl max-w-md text-center sm:text-2xl font-thin">
                    We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
                </p>

                <p className="text-xl font-thin max-w-lg text-teal-500">
                    Think Acme Rockets!
                </p>
            </section>
        </article>

    )

}

export default Introduction;