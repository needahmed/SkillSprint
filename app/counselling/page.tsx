import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <MaxWidthWrapper className="text-creme mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          1-on-1 Career Counseling
        </h1>

        <p className="mt-5 max-w-prose text-white sm:text-lg">
          Get personalized career guidance and make informed decisions about
          your professional future.
        </p>

        <Link
          href="/booking"
          className="inline-flex items-center bg-creme hover:bg-brown-200 text-white font-bold py-1 px-4 rounded-lg mt-5"
        >
          Book a Session <ArrowRight className="h-5 w-5 ml-2" />
        </Link>
      </MaxWidthWrapper>

      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <MaxWidthWrapper className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-creme">Why Our Counseling?</h2>
        <p className="mt-4 text-white sm:text-lg">
          We provide expert advice tailored to your unique skill set and career
          aspirations, leveraging industry insights to help you achieve your
          goals.
        </p>

        {/* Improved FAQ Section */}
        <div className="my-12 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-creme mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4">
            <li>
              <p className="text-xl font-semibold text-creme">
                What services do we offer?
              </p>
              <p className="text-white">
                We offer personalized career guidance, resume reviews, interview
                preparation, and more.
              </p>
            </li>
            <li>
              <p className="text-xl font-semibold text-creme">
                How can you book a session?
              </p>
              <p className="text-white">
                Sessions can be booked directly through our website via the
                'Book a Session' link above.
              </p>
            </li>
            <li>
              <p className="text-xl font-semibold text-creme">
                What makes our counselors qualified?
              </p>
              <p className="text-white">
                Our counselors are experienced professionals with deep insights
                into various industries and career paths.
              </p>
            </li>
            <li>
              <p className="text-xl font-semibold text-creme">
                Can you get a personalized career plan?
              </p>
              <p className="text-white">
                Yes, we offer personalized career planning to help tailor your
                career trajectory based on your skills and goals.
              </p>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="my-12">
          <h2 className="text-4xl font-bold text-creme">Contact Us</h2>
          <form className="text-white mt-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 mt-2 text-black"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-2 text-black"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 mt-2 text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-creme hover:bg-brown-200 text-white font-bold py-2 px-4 rounded-lg mt-4"
            >
              Send
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
