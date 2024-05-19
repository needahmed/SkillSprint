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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Schedule a Counseling Session
          </h2>
          <p className="mt-2 text-sm text-gray-600">
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
