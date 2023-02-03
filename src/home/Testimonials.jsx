
function Testimonials() {

    return (
        <article id="testimonials" className="scroll-mt-40 flex flex-col justify-center items-center px-4 py-8 gap-4">
            <h2 className="px-4 py-4 flex justify-center items-center text-3xl font-thin text-indigo-500">
                Testimonials
            </h2>

            <section className="flex flex-col items-center p-8 gap-4 bg-teal-500 md:w-3/4 rounded-3xl">
                <p className="text-xl text-black font-normal">
                    Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-Long customer! A++ shopping experience.
                </p>
                <h3 className="self-end text-xl text-black font-normal">
                    -- Wile E. Coyote, Genius
                </h3>
            </section>

            <section className="flex flex-col items-center p-8 gap-4 bg-teal-500 md:w-3/4 rounded-3xl">
                <p className="text-xl text-black font-normal">
                    The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occassions. This makes me very, very angry! Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and study designs.
                </p>
                <h3 className="self-end text-xl text-black font-normal">
                    -- Marvin The Martian & K-9
                </h3>
            </section>

            <section className="flex flex-col items-center p-8 gap-4 bg-teal-500 md:w-3/4 rounded-3xl">
                <p className="text-xl text-black font-normal">
                    I knew I not only wanted -- I need -- Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says "Take me to your leader" like Acme's Infinity Rocket!
                </p>
                <h3 className="self-end text-xl text-black font-normal">
                    -- Buzz Lightyear
                </h3>
            </section>
        </article>
    )

}

export default Testimonials