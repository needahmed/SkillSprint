"use client";
import { useEffect } from "react";

const Counseling = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-lblack py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="max-w-4xl text-5xl text-creme font-bold md:text-6xl lg:text-7xl">
            Schedule a Counseling Session
          </h2>
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
          <p className="mt-5 max-w-prose text-white sm:text-lg">
            Choose a suitable time for your career counseling session
          </p>
        </div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/needahmedwork/career-counselling?background_color=484444&text_color=ffffff&primary_color=e4c7b7"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </div>
  );
};

export default Counseling;
