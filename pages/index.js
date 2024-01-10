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
import React, { useState } from "react";
import { captializeFirstChar, validateEmail } from "../utils/helpers";


const Home = () => {

  const [emailObj, setEmailObj] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const getEmailState = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMsg("Your email is invalid");
      } else {
        setErrorMsg("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMsg(`${e.target.name} is required.`);
      } else {
        setErrorMsg("");
      }
    }
    if (!errorMsg) {
      return setEmailObj({ ...emailObj, [e.target.name]: e.target.value });
    }
  };
  const logEmail = (e) => {
    e.preventDefault();
  };

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

<div className="flex justify-center">
<div className="relative overflow-hidden bg-white bg-opacity-80 w-4/5  shadow-inner">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-20 lg:pb-28">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="font text-4xl py-4 font-bold tracking-tight text-gray-900 sm:text-6xl">
          Who We Are
        </h1>
        <h3 className="text-5xl font-mediuim font-love text-red-400">
          Homeless Animals Are In Need
        </h3>
        <p className="mt-4 text-base text-gray-500">
          Our founder and team at Rescue Chow, have been long-time
          supporters of animal rescues, fostering programs, transport,
          and pet food banks. We have created a meaningful way to help
          with raising funds, to ensure the good work continues across
          Canada.
        </p>
        <p className="mt-4 text-base text-gray-500">
          Saving animals, ensuring they have food, vet care,
          transportation, finding loving homes, or being the voice for
          the voiceless… there is no better work. We are here to help!
        </p>
        <p className="text-lg mt-4 text-gray-500 font-semibold">
          Together we can make a difference.
        </p>
      </div>
      <div>
        <div className="mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
          >
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <Image
                  className="h-full w-full object-cover object-center"
                  src={petsAbout}
                  alt=""
                  width={""}
                  height={""}
                />
              </div>
            </div>
          </div>

          <Link
            href="/WhoWeAre"
            className="inline-block rounded-md border border-transparent bg-red-400 py-3 px-8 text-center font-medium text-white hover:bg-black"
          >
            Learn More!
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className="flex flex-row items-center justify-center space-x-2 py-28">
        <h2 className="font-love text-white text-7xl font-medium w-1/2 drop-shadow-[0_0_2px_rgba(0,0,0,1)] ">
          What is our affiliate program?
        </h2>
        <p className=" max-w-2xl text-xl text-red-300 drop-shadow-[0_0_2px_rgba(0,0,0,1)] font-serif lg:mx-auto">
          Each Registered Rescue is given a unique link to ensure that
          supporter's purchases are given to the correct charity or rescue.
          Rescue Admins have access to the back end of our platform to track
          and see how successful their campaign is going, and how many funds
          have been raised. Full transparency is part of our integral
          approach and mandate.
        </p>
      </div>

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



<div className="bg-white  pb-16 pt-12  ">
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h2 className="text-8xl font-medium font-love text-red-400   ">
            Order Today!
          </h2>
        </div>
        <div className=" flex flex-row items-center justify-center space-x-4">
          <p className="mt-4 max-w-2xl text-center font-medium text-xl text-gray-500  lg:mx-auto  ">
            20% of your purchase goes towards helping animals in need within your
            community.
          </p>
        </div>
        <div className=" flex flex-row items-center justify-center pt-10 space-x-4">
          <Link
            href="/OrderNow"
            className="inline-flex items-center justify-center rounded-full border border-transparent  bg-red-400 px-5 py-3 text-base font-medium text-white hover:bg-black"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className={iframe_container}>
      <iframe
        src="https://www.tiktok.com/embed/7173411131246087429"
        className={iframe}
        title="Tiktok video player"
        width="600"
        height="600"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    </div>

    <div>
      <header className="bg-rescue-paws bg-center pb-24 pt-20    ">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8  ">
          <div className="px-28 flex justify-between align-center">
            <h2 className="text-9xl font-medium font-love text-red-400">
              Get In Touch
            </h2>
            <p className="text-lg font-serif text-gray-600 font-semibold w-1/3">
              Don't wait to subscribe to our service to help out animal rescue
              charities as well as feed your pets healthy treats! To get in
              touch with us, you can send us an email containing any questions
              or comments.
            </p>
          </div>
        </div>
      </header>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8871.436411564438!2d-78.92307018579231!3d43.87225653063157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51def76b791b9%3A0xe40b7d9a530a09e0!2s1375%20Hopkins%20St%2C%20Whitby%2C%20ON%20L1N%202C2!5e0!3m2!1sen!2sca!4v1666107343570!5m2!1sen!2sca"
          title="Rescue Chow Location"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-gray-100">
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6 flex align-center justify-around">
            <h2 className="text-7xl text-center mt-20 font-medium font-love text-red-400">
              Send Your Questions
            </h2>

            <form className="w-1/3" onSubmit={logEmail}>
              <div>
                <div className="align">
                  <label htmlFor="name">Name:</label>
                  <input
                    className="block w-10/12 bg-gray-100 rounded-md border-gray-300 outline outline-1 outline-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onBlur={getEmailState}
                    type="text"
                    name="name"
                  />
                </div>
                <div className="align">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="block w-10/12 bg-gray-100  rounded-md border-gray-300 outline outline-1 outline-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onBlur={getEmailState}
                    type="email"
                    name="email"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <br />
                  <textarea
                    className="block w-full flex-1 bg-gray-100  rounded-md border-gray-300 outline outline-1 outline-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onBlur={getEmailState}
                    name="message"
                  />
                </div>
                {errorMsg && <p>{captializeFirstChar(errorMsg)}</p>}
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-gray-400 bg-red-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black  "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

            </main>



        </div>



    );
};

const iframe_container = {
    left: 0,
              width: "100%",
              height: 500,
              position: "relative"
            }
  
  const iframe ={top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  border: 0}


export default Home;

