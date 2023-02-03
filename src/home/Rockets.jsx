import RocketMan from "../assets/rocketman.png";
import RocketRide from "../assets/rocketride.png";
import RocketLaunch from "../assets/rocketlaunch.png";

function Rockets() {

    return (

        <article id="rockets" className="p-8 scroll-mt-40 py-12">
            <h2 className="px-4 py-8 flex justify-center items-center text-3xl font-thin text-indigo-500">
                Our Rockets
            </h2>

            <ul className="flex px-4 flex-col gap-8 md:flex-row md:gap-4 md:justify-center md:items-center items-center">
                <li className="dark:bg-black py-6 px-8 rounded-3xl flex flex-col justify-center w-80 items-center border-teal-500 border-2 gap-2">
                    <img src={ RocketMan } alt="Rocket Dab" />
                    <h3 className="flex justify-center items-center text-2xl font-thin text-indigo-300">
                        Explorer
                    </h3>
                    <h4 className="flex justify-center items-center text-3xl font-thin text-indigo-300">
                        $
                    </h4>
                </li>

                <li className="dark:bg-black py-6 px-8 rounded-3xl flex flex-col justify-center w-80 items-center border-teal-500 border-2 gap-2">
                    <img src={ RocketRide } alt="Rocket Ride" />
                    <h3 className="flex justify-center items-center text-2xl font-thin text-indigo-300">
                        Adventurer
                    </h3>
                    <h4 className="flex justify-center items-center text-3xl font-thin text-indigo-300">
                        $$
                    </h4>
                </li>

                <li className="dark:bg-black py-6 px-8 rounded-3xl flex flex-col justify-center w-80 items-center border-teal-500 border-2 gap-2">
                    <img src={ RocketLaunch } alt="Rocket Launch" />
                    <h3 className="flex justify-center items-center text-2xl font-thin text-indigo-300">
                        Infinity
                    </h3>
                    <h4 className="flex justify-center items-center text-3xl font-thin text-indigo-300">
                        $$$
                    </h4>
                </li>
            </ul>
        </article>

    )

}

export default Rockets