import rescueChow from "../public/images/Rescue-Chow-Logo-white-outline.gif";
import dog from "../public/images/Cartoon-Dog.gif";
import beefHome from "../public/images/Beef-Bites-For-Home-Page.gif";
import dogFood from "../public/images/Dog-Food-Bowl.gif";
import heartPaw from "../public/images/Heart-with-Paw-in-middle.gif";
import petsAbout from "../public/images/pets-about-free-img.png";
import chooseRescueImg from "../public/images/pet-with-girl-free-img.png";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Home = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-fixed ">
            <header className="bg-header-pattern bg-center pb-20 md:pb-64 contrast-75 ">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                    <Image
                        className="object-fill h-1/4 w-3/4"
                        src={rescueChow}
                        alt="rescue chow logo"
                        width={""}
                        height={""}
                    />
                </div>
                <div className=" flex flex-row items-center justify-center space-x-4">
                    <Link
                        href="/OrderNow"
                        className="inline-flex items-center justify-center rounded-full border border-transparent outline-2 outline-red-400 outline bg-white px-5 py-3 text-base font-medium text-red-400 hover:bg-black"
                    >
                        Shop Now
                    </Link>
                    <Link
                        href="/WhoWeAre"
                        className="inline-flex items-center justify-center rounded-full border border-transparent outline-2 outline-gray-50 outline bg-red-400 px-5 py-3 text-base font-medium text-white hover:bg-black"
                    >
                        Learn more
                    </Link>
                </div>
            </header>
            <main>
                <div className="mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <div className="relative content-center overflow-hidden bg-red-400 bg-opacity-80 w-4/5  shadow-inner">
                            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-20 lg:pb-28">
                                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                                    <h1 className="text-6xl font-mediuim font-love text-white text-center border-y-4 border-white bg-gray-400">
                                        How It Works
                                    </h1>

                                    <div className="container mx-auto py-6 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            <div className="object-fill mx-auto py-6 sm:px-6 lg:px-8">
                                                <div className="inline-flex rounded-full border border-transparent outline-2 outline-red-400 outline bg-white px-5 py-3 text-base font-medium text-red-400 hover:bg-black">
                                                    Find Your Rescue
                                                </div>
                                                <Image
                                                    className="object-fill mx-auto mt-6 py-6 sm:px-6 lg:px-8"
                                                    src={dog}
                                                    alt="cartoon dog"
                                                    width={""}
                                                    height={""}
                                                />
                                            </div>

                                            <div className="object-fill mx-auto py-6 sm:px-6 lg:px-8">
                                                <div className="inline-flex items-center justify-center rounded-full border border-transparent outline-2 outline-red-400 outline bg-white px-5 py-3 text-base font-medium text-red-400 hover:bg-black">
                                                    Choose Treats
                                                </div>
                                                <Image
                                                    className="object-fill mx-auto mt-6 py-6 sm:px-6 lg:px-8"
                                                    src={dogFood}
                                                    alt="dog food bag"
                                                    width={""}
                                                    height={""}
                                                />
                                            </div>

                                            <div className="object-fill mx-auto py-6 sm:px-6 lg:px-8">
                                                <div className="inline-flex items-center justify-center rounded-full border border-transparent outline-2 outline-red-400 outline bg-white px-5 py-3 text-base font-medium text-red-400 hover:bg-black">
                                                    Proceeds Sent
                                                </div>
                                                <Image
                                                    className="object-fill mx-auto py-6 sm:px-6 lg:px-8"
                                                    src={heartPaw}
                                                    alt="heart with a paw in the center"
                                                    width={""}
                                                    height={""}
                                                />
                                            </div>

                                            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">
                                                <Image
                                                    className=""
                                                    src={beefHome}
                                                    alt="Beef Bites Product"
                                                    width={""}
                                                    height={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
