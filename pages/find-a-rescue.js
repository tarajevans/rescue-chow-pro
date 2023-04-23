import Image from "next/image";
import Link from "next/link";
import React from "react";

const FindARescue = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-9xl text-center font-medium font-love text-red-400">
                        Our Rescues
                    </h2>
                </div>

        {/* <div className="mt-16 space-y-16">
          { state.rescues.map((rescue, rescueIdx) =>
              <div
                key={rescue.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    rescueIdx % 2 === 0
                      ? "lg:col-start-1"
                      : "lg:col-start-8 xl:col-start-9",
                    "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                  )}
                >
                  <Link target="_blank" rel="noopener" href={rescue.website}>
                    <h3 className=" hover:cursor-pointer hover:underline text-lg font-medium text-gray-900">
                      {rescue.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-sm text-gray-500">
                    {rescue.description}
                  </p>
                </div>
                <div
                  className={classNames(
                    rescueIdx % 2 === 0
                      ? "lg:col-start-6 xl:col-start-5"
                      : "lg:col-start-1",
                    "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-white-100">
                    <Image
                      src={`/images/rescues/${rescue.image}`}
                      alt="rescue"
                      height="200"
                      width= "200"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
          )}
        </div> */}
      </div>
    </div>
    )
}
export default FindARescue;
