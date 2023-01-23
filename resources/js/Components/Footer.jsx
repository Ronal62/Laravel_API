export default function Footer() {
    return (
        <footer className="w-100 h-[316px] px-10 py-3 shadow-lg rounded-lg border-2 border-figma bg-gradient-to-tr from-cyan-500 to-blue-500 text-figma text-sm">
            <div className="flex mx-auto container md:mx-auto justify-between ">
                <div className="flex flex-col mt-14 ml-16 ">
                    <div>
                        <img
                            src="/assets/img/1.png"
                            alt="image"
                            style={{ flexShrink: 0 }}
                        />

                        <p className=" mt-6 w-72 font-boldtext-lg text-white ">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa.
                        </p>
                    </div>
                </div>
                <div className="flex  ">
                    <div className="w-36">
                        <p className=" mt-16 font-boldtext-lg text-white ">
                            Company
                        </p>
                        <p className=" mt-9  font-boldtext-lg text-white ">
                            About
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Testimonials
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Find a Doctor
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Apps
                        </p>
                    </div>
                    <div className="w-36">
                        <p className=" mt-16  font-boldtext-lg text-white ">
                            Region
                        </p>
                        <p className=" mt-9  font-boldtext-lg text-white ">
                            Link
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Link
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Link
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Link
                        </p>
                    </div>
                    <div className="w-36">
                        <p className=" mt-16  font-boldtext-lg text-white ">
                            Helps
                        </p>
                        <p className=" mt-9  font-boldtext-lg text-white ">
                            Help Center
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Contact Support
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            Instructions
                        </p>
                        <p className=" mt-3  font-boldtext-lg text-white ">
                            How It Works
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
