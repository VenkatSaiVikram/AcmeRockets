
function Contact() {

    return (
        
        <article id="contact" className="scroll-mt-40 flex flex-col px-4 py-8 gap-4 justify-center items-center">
            <h2 className="text-3xl font-thin text-indigo-500 p-4">
                Contact Us
            </h2>

            <form  className="flex flex-col p-4 gap-4 text-black justify-center items-center">
                <input type="text" placeholder="Subject" className="border border-teal-500 w-72 py-2 px-4 rounded-xl text-xl font-thin outline-none sm:w-96" />
                <textarea name="message" placeholder="Message" id="message" cols="36" rows="10" className="border border-teal-500 rounded-2xl text-black p-4 font-thin text-xl outline-none sm:w-96 w-72"></textarea>
                <button type="button" className="font-thin bg-teal-500 text-black py-2 px-8 rounded-xl cursor-pointer border border-teal-500 hover:bg-black hover:text-teal-500">Submit</button>
            </form>
        </article>

    )

}

export default Contact;