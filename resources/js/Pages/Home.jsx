import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
export default function Home() {
    return (
        <>
           <Header/>
            <main>
                <section className="flex justify-between md:container md:mx-auto my-16 flex-col md:flex-row">
                    <div className="flex flex-col gap-12 mt-8">
                        <h1 className="mx-28  font-bold text-3xl">
                            Virtual Healthacare Saviour for you
                        </h1>
                        <h5 className="mx-28 font-boldtext-lg text-[#93C1F9] ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </h5>
                        <button className=" mx-40 w-36 px-5 py-3 shadow-lg rounded-full  bg-figma text-white text-sm">
                            Consult Today
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img
                            className="w-100"
                            src="/assets/img/2.png"
                            alt="image"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:container md:mx-auto items-center mt-12 gap-6">
                    <h1 className=" font-bold text-3xl">Service We Offer</h1>
                    <hr className="border-2 border-[#000000] bg-black w-12 rounded" />
                    <h1 className=" font-bold text-xl text-[#CCD2E9]   ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                    </h1>
                </section>
                <section className="md:container md:mx-auto ">
                    <div className="grid grid-cols-3 gap-6 justify-items-center my-auto ">
                        <div className="flex flex-col border-2 bg-white border-figma   w-[350px] aspect-square p-11 gap-10 rounded-lg">
                            <img
                                className="w-20 mx-auto"
                                src="/assets/img/Frame.png"
                                alt="image"
                            />
                            <div className="">
                                <h1 className="font-bold text-center text-3xl mb-3 ">
                                    Search doctor
                                </h1>
                                <p className="text-md">
                                    Choose your doctor from thousands of
                                    specialist, general, and trusted hospitals
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col border-2 bg-white border-figma   w-[350px] aspect-square p-11 gap-10 rounded-lg">
                            <img
                                className="w-20 mx-auto"
                                src="/assets/img/Frame.png"
                                alt="image"
                            />
                            <div className="">
                                <h1 className="font-bold text-center text-3xl mb-3 ">
                                    Search doctor
                                </h1>
                                <p className="text-md">
                                    Choose your doctor from thousands of
                                    specialist, general, and trusted hospitals
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col border-2 bg-white border-figma   w-[350px] aspect-square p-11 gap-10 rounded-lg">
                            <img
                                className="w-20 mx-auto"
                                src="/assets/img/Frame.png"
                                alt="image"
                            />
                            <div className="">
                                <h1 className="font-bold text-center text-3xl mb-3 ">
                                    Search doctor
                                </h1>
                                <p className="text-md">
                                    Choose your doctor from thousands of
                                    specialist, general, and trusted hospitals
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col border-2 bg-white border-figma   w-[350px] aspect-square p-11 gap-10 rounded-lg">
                            <img
                                className="w-20 mx-auto"
                                src="/assets/img/Frame.png"
                                alt="image"
                            />
                            <div className="">
                                <h1 className="font-bold text-center text-3xl mb-3 ">
                                    Search doctor
                                </h1>
                                <p className="text-md">
                                    Choose your doctor from thousands of
                                    specialist, general, and trusted hospitals
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col border-2 bg-white border-figma   w-[350px] aspect-square p-11 gap-10 rounded-lg">
                            <img
                                className="w-20 mx-auto"
                                src="/assets/img/Frame.png"
                                alt="image"
                            />
                            <div className="">
                                <h1 className="font-bold text-center text-3xl mb-3 ">
                                    Search doctor
                                </h1>
                                <p className="text-md">
                                    Choose your doctor from thousands of
                                    specialist, general, and trusted hospitals
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col border-2 bg-white border-figma   w-[350px] aspect-square p-11 gap-10 rounded-lg">
                            <img
                                className="w-20 mx-auto"
                                src="/assets/img/Frame.png"
                                alt="image"
                            />
                            <div className="">
                                <h1 className="font-bold text-center text-3xl mb-3 ">
                                    Search doctor
                                </h1>
                                <p className="text-md">
                                    Choose your doctor from thousands of
                                    specialist, general, and trusted hospitals
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mx-96">
                        <button className=" mx-40 w-36 px-5 py-3 shadow-lg rounded-full border-2 border-figma bg-white text-figma text-sm">
                            Learn More
                        </button>
                    </div>
                </section>
                <section className="flex justify-between md:container md:mx-auto my-16 flex-col md:flex-row">
                    <div className="w-1/2 " style={{ flexShrink: 0 }}>
                        <img
                            className="w-100"
                            src="/assets/img/5.png"
                            alt="image"
                            style={{ flexShrink: 0 }}
                        />
                        <div
                            className="flex gap-x-4"
                            style={{ flexWrap: "nowrap" }}
                        >
                        </div>
                    </div>
                    <div>
                    <div className="flex flex-col gap-5 mt-8 px-auto">
                                <h1 className="mx-28  font-bold text-3xl">
                                    Leading Healthcare Providers
                                </h1>
                                <hr className="mx-28 border border-[#000000] bg-black w-12 rounded" />
                                <h5 className="mx-28 font-boldtext-lg text-[#7D7987] ">
                                    Trafalgar provides progressive, and
                                    affordable healthcare, accessible on mobile
                                    and online for everyone. To us, it’s not
                                    just work. We take pride in the solutions we
                                    deliver
                                </h5>
                                <button className=" mx-28 w-44 px-5 py-3 shadow-lg rounded-full border-2 border-figma bg-white text-figma text-sm">
                                    Learn More
                                </button>
                            </div>
                            </div>

                </section>
            </main>
            <Footer/>
        </>
    );
}
