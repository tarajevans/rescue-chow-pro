import React from "react";
import Link from "next/link";
import Image from "next/image";
import dogHeartImg from "../public/images/icons8-dog-heart-64.png";
import chooseRescueImg from "../public/images/pet-with-girl-free-img.png";
import petsAbout from "../public/images/pets-about-free-img.png";
import petFood from "../public/images/icons8-pet-food-64.png";
import heartPaw from "../public/images/icons8-heart-with-dog-paw-64.png";

const WhoWeAre = () => {
  return (
    <div className="bg-who-section bg-cover bg-fixed divide-y-2 divide-slate-400/25 divide-solid">
      <header className="bg-rescue-paws bg-center pb-24 pt-20  contrast-100   ">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-start"></div>

        <div className="pl-28">
          <h2 className="text-9xl text-center font-medium font-love text-red-400">
            Who We Are
          </h2>
          <p className="text-lg font-serif text-gray-600 font-semibold w-1/3">
          Rescue Chow is a community initiative pet food bank, making a difference in the lives of animals in rescue and in need.
          </p>
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


      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h3 className="text-8xl font-love font-medium text-red-400">
              Rescue Chows continued mission is 3 part:
            </h3>
          </div>

          <div className="mt-10 mb-10">
            <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md ">
                    <Link href="/find-a-rescue">
                      <Image
                        className="h-12 w-12"
                        src={dogHeartImg}
                        alt="rescue chow logo"
                      />
                    </Link>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Part 1!
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Search Our List Of Rescues In Need…
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md ">
                    <Link href="/shop">
                      <Image
                        className="h-12 w-12"
                        src={petFood}
                        alt="rescue chow logo"
                      />
                    </Link>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Part 2!
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Customer Orders Treats …
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md ">
                    <Image
                      className="h-12 w-12"
                      src={heartPaw}
                      alt="rescue chow logo"
                    />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    Part 3!
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500  ">
                  20% Goes Directly To The Chosen Rescue…
                </dd>
              </div>
            </dl>
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

      <div className="flex justify-center">

<div className="relative content-center overflow-hidden bg-red-400 bg-opacity-80 w-4/5  shadow-inner">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-20 lg:pb-28">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h1 className="text-6xl font-mediuim font-love text-black">
          Choose a Rescue to Support
        </h1>
        <p className="mt-4 text-base text-white">
          Rescue Chow is an animal rescue fundraising initiative that
          assists animals and rescues in need with fundraising. When
          your supporters purchase a treat package, 20% of proceeds go
          to your animal rescue or charity of choice.
        </p>
        <p className="mt-4 text-base text-white">
          With every purchase, 20% goes towards helping animals in
          rescue within our Canadian community. We help rescues
          throughout Canada including Toronto, British Columbia,
          Ontario, and Quebec.
        </p>
      </div>
      <div>
        <div className="mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
          >
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-4">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <Image
                  src={chooseRescueImg}
                  alt=""
                  className="object-cover object-center"
                  height={700}
                  width={700}
                />
              </div>
            </div>
          </div>

          <Link
            href="/OrderNow"
            className="inline-block rounded-md border border-transparent bg-white py-3 px-8 text-center font-medium text-red-400 hover:bg-black"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>


</div>


      

      <div className="bg-red-400 bg-opacity-80 pb-24 pt-16  ">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h2 className="text-5xl font-medium font-love text-white drop-shadow-[0_0_2px_rgba(0,0,0,1)]  w-7/12">
            " There has to be a way to raise money for the many integral rescues
            that are in such dire need."
          </h2>
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
      </main>
    </div>


  );
};


export default WhoWeAre;
