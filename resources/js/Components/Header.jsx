export default function Header() {
    return (
        <header>
            <nav className="">
                    <div
                        className="flex container justify-between mt-9"
                        style={{ alignItems: "center" }}
                    >
                        <img
                            src="/assets/img/1.png"
                            alt="image"
                            style={{ flexShrink: 0 }}
                        />
                        <div
                            className="flex gap-x-4"
                            style={{ flexWrap: "nowrap" }}
                        >
                            <div className="">Home</div>
                            <div className="">Find a doctor</div>
                            <div className="">Apps</div>
                            <div className="">Testimonials</div>
                            <div className="">About Us</div>
                        </div>
                    </div>
                </nav>
        </header>
    );
    }
