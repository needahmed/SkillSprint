"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; onClick?: () => void }
>(({ className, children, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-center transition duration-300 cursor-pointer hover:bg-creme hover:text-white hover:shadow-lg",
        "h-16 w-40 md:h-20 md:w-48 lg:h-24 lg:w-56 xl:h-28 xl:w-66",
        className
      )}
      onClick={onClick}
    >
      <span className="text-xs md:text-sm lg:text-base xl:text-lg">
        {children}
      </span>
    </div>
  );
});

Circle.displayName = "Circle";

const SoftwareDevRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const coreConceptsRef = useRef<HTMLDivElement>(null);
  const versionControlRef = useRef<HTMLDivElement>(null);
  const oopRef = useRef<HTMLDivElement>(null);
  const webDevRef = useRef<HTMLDivElement>(null);
  const advWebDevRef = useRef<HTMLDivElement>(null);
  const devOpsRef = useRef<HTMLDivElement>(null);
  const testingRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const advTopicsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);
  const contLearningRef = useRef<HTMLDivElement>(null);

  const references = {
    "Introduction to Programming": "https://www.codecademy.com/learn/learn-python-3",
    "Core Programming Concepts": "https://www.geeksforgeeks.org/data-structures/",
    "Version Control Systems": "https://git-scm.com/book/en/v2",
    "Object-Oriented Programming": "https://www.udacity.com/course/design-patterns--ud206",
    "Web Development": "https://developer.mozilla.org/en-US/docs/Learn",
    "Advanced Web Development": "https://reactjs.org/",
    "DevOps and Deployment": "https://aws.amazon.com/devops/what-is-devops/",
    "Software Testing": "https://www.guru99.com/software-testing.html",
    "Software Architecture": "https://martinfowler.com/architecture/",
    "Advanced Topics": "https://www.coursera.org/specializations/scalable-web-applications",
    "Soft Skills": "https://www.coursera.org/specializations/communication-skills",
    "Continuous Learning": "https://www.pluralsight.com/"
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-lblack mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-creme max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        Software Development Roadmap
      </h1>
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
      <div
        className="relative flex flex-col items-center justify-start w-full max-w-[1600px] p-10 mx-auto rounded-lg"
        ref={containerRef}
      >
        <div className="flex flex-col gap-8 items-center">
          <Circle
            ref={introRef}
            onClick={() => handleClick(references["Introduction to Programming"])}
          >
            Introduction to Programming
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={coreConceptsRef}
              onClick={() => handleClick(references["Core Programming Concepts"])}
            >
              Core Programming Concepts
            </Circle>
            <Circle
              ref={versionControlRef}
              onClick={() => handleClick(references["Version Control Systems"])}
            >
              Version Control Systems
            </Circle>
            <Circle
              ref={oopRef}
              onClick={() => handleClick(references["Object-Oriented Programming"])}
            >
              Object-Oriented Programming
            </Circle>
          </div>
          <Circle
            ref={webDevRef}
            onClick={() => handleClick(references["Web Development"])}
          >
            Web Development
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={advWebDevRef}
              onClick={() => handleClick(references["Advanced Web Development"])}
            >
              Advanced Web Development
            </Circle>
          </div>
          <Circle
            ref={devOpsRef}
            onClick={() => handleClick(references["DevOps and Deployment"])}
          >
            DevOps and Deployment
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={testingRef}
              onClick={() => handleClick(references["Software Testing"])}
            >
              Software Testing
            </Circle>
            <Circle
              ref={architectureRef}
              onClick={() => handleClick(references["Software Architecture"])}
            >
              Software Architecture
            </Circle>
          </div>
          <Circle
            ref={advTopicsRef}
            onClick={() => handleClick(references["Advanced Topics"])}
          >
            Advanced Topics
          </Circle>
          <Circle
            ref={softSkillsRef}
            onClick={() => handleClick(references["Soft Skills"])}
          >
            Soft Skills
          </Circle>
          
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={introRef}
          toRef={coreConceptsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={coreConceptsRef}
          toRef={versionControlRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={versionControlRef}
          toRef={oopRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={oopRef}
          toRef={webDevRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={webDevRef}
          toRef={advWebDevRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={webDevRef}
          toRef={devOpsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={devOpsRef}
          toRef={testingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={testingRef}
          toRef={architectureRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={architectureRef}
          toRef={advTopicsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advTopicsRef}
          toRef={softSkillsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={softSkillsRef}
          toRef={contLearningRef}
        />
      </div>
    </MaxWidthWrapper>
  );
};

SoftwareDevRoadmap.displayName = "SoftwareDevRoadmap";

export default function Page() {
  return (
    <div>
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
      <SoftwareDevRoadmap />
    </div>
  );
}
