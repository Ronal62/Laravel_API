export default function Home() {
    return (
        <>
            <header>
                <nav>
                    <div className="flex justify-start md:justify-between mx-36 mt-9 ">
                        <img src="/assets/img/1.png" alt="image" />
                        <div className="flex gap-x-4">
                            <div className="flex">Home</div>
                            <div className="flex">Find a doctor</div>
                            <div className="flex">Apps</div>
                            <div className="flex">Testimonials</div>
                            <div className="flex">About Us</div>
                        </div>
                    </div>

                </nav>
            </header>
            <main>
                <div className="flex justify-beetwen">
                    <h1 className="flex mt-36 ml-32 font-bold text-3xl before:content-['Virtual_Healthacare_Saviour_for_you']"></h1>
                    <img className="flex mt-24" src="/assets/img/2.png" alt="image" />
                </div>
                <div className="flex justify-beetwen">
                    <h5 className="flex -mt-96 mx-32 font-bold text-lg before:content-['Lorem_ipsum_dolor_sit_amet,_consectetur_adipisicing']"></h5>
                </div>
                <div className="flex justify-between -mt-80 mx-32">
                    <button className="border-8 shadow-lg rounded-full border-sky-500/100 bg-sky-500/100 text-white text-sm" >Consult Today</button>
                </div>
                <div className="flex">
                    <h1 className="flex-initial mt-80 mx-auto font-bold text-3xl  before:content-['Service_We_Offer']"></h1>
                </div>
                <div className="flex gap">
                    <h1 className="flex-initial my-16 mx-auto font-bold text-xl opacity-25  before:content-['Lorem_ipsum_dolor_sit_amet,_consectetur_adipisicing_elit,_sed_do_eiusmod_tempor_incididunt_ut_labore_et_dolore_magna_aliqua.']"></h1>
                </div>

            </main>
            <footer>

            </footer>
        </>
    )
}
