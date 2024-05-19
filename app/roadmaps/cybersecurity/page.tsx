"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// Define the Circle component with click effects
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; onClick?: () => void }
>(({ className, children, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex items-center justify-center rounded-full border-2 bg-white p-5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-center transition duration-300 cursor-pointer hover:bg-creme hover:text-white hover:shadow-lg",
        "h-20 w-48 md:h-24 md:w-60 lg:h-28 lg:w-64 xl:h-32 xl:w-72",
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

// Add displayName to the Circle component
Circle.displayName = "Circle";

const CyberSecurityRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const networkingRef = useRef<HTMLDivElement>(null);
  const osRef = useRef<HTMLDivElement>(null);
  const programmingRef = useRef<HTMLDivElement>(null);
  const securityFundamentalsRef = useRef<HTMLDivElement>(null);
  const networkSecurityRef = useRef<HTMLDivElement>(null);
  const cryptographyRef = useRef<HTMLDivElement>(null);
  const webSecurityRef = useRef<HTMLDivElement>(null);
  const ethicalHackingRef = useRef<HTMLDivElement>(null);
  const incidentResponseRef = useRef<HTMLDivElement>(null);
  const securityOpsRef = useRef<HTMLDivElement>(null);
  const cloudSecurityRef = useRef<HTMLDivElement>(null);
  const advancedTopicsRef = useRef<HTMLDivElement>(null);
  const programmingSkillsRef = useRef<HTMLDivElement>(null);
  const pythonRef = useRef<HTMLDivElement>(null);
  const goRef = useRef<HTMLDivElement>(null);
  const javascriptRef = useRef<HTMLDivElement>(null);
  const cppRef = useRef<HTMLDivElement>(null);
  const malwareAnalysisRef = useRef<HTMLDivElement>(null);
  const threatHuntingRef = useRef<HTMLDivElement>(null);
  const redTeamOpsRef = useRef<HTMLDivElement>(null);

  const references = {
    "Introduction to Cybersecurity":
      "https://www.coursera.org/learn/intro-cyber-security",
    "Networking Fundamentals": "https://www.udemy.com/course/networkplus/",
    "Operating System Basics":
      "https://www.udemy.com/course/linux-for-beginners/",
    "Programming and Scripting": "https://learnpythonthehardway.org/",
    "Security Fundamentals":
      "https://www.udemy.com/course/total-comptia-security-sy0-501/",
    "Network Security":
      "https://www.coursera.org/learn/computer-network-security",
    Cryptography: "https://crypto101.io/",
    "Web Security": "https://www.coursera.org/specializations/website-security",
    "Ethical Hacking": "https://www.udemy.com/course/certified-ethical-hacker/",
    "Incident Response":
      "https://www.sans.org/cyber-security-courses/advanced-incident-response-digital-forensics/",
    "Security Operations":
      "https://www.splunk.com/en_us/training/courses/splunk-for-security.html",
    "Cloud Security":
      "https://www.udemy.com/course/aws-certified-security-specialty/",
    "Advanced Topics":
      "https://www.udemy.com/course/advanced-penetration-testing/",
    "Malware Analysis":
      "https://www.sans.org/cyber-security-courses/malware-analysis-tools-techniques/",
    "Threat Hunting": "https://www.crowdstrike.com/services/threat-hunting/",
    "Red Team Operations":
      "https://www.offensive-security.com/red-team-operations/",
    Python: "https://learnpython.org/",
    Go: "https://golang.org/doc/",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    "C++": "https://www.learncpp.com/",
    "Programming Skills and Knowledge (Optional but Recommended)":
      "https://www.w3schools.com",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-creme mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        Cybersecurity Roadmap
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
        className="relative flex flex-col items-center justify-start w-full max-w-[2000px] p-10 mx-auto rounded-lg"
        ref={containerRef}
      >
        <div className="flex flex-col gap-8 items-center">
          <Circle
            ref={introRef}
            onClick={() =>
              handleClick(references["Introduction to Cybersecurity"])
            }
          >
            Introduction to Cybersecurity
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={networkingRef}
              onClick={() => handleClick(references["Networking Fundamentals"])}
            >
              Networking Fundamentals
            </Circle>
            <Circle
              ref={osRef}
              onClick={() => handleClick(references["Operating System Basics"])}
            >
              Operating System Basics
            </Circle>
            <Circle
              ref={programmingRef}
              onClick={() =>
                handleClick(references["Programming and Scripting"])
              }
            >
              Programming and Scripting
            </Circle>
          </div>
          <Circle
            ref={securityFundamentalsRef}
            onClick={() => handleClick(references["Security Fundamentals"])}
          >
            Security Fundamentals
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={networkSecurityRef}
              onClick={() => handleClick(references["Network Security"])}
            >
              Network Security
            </Circle>
            <Circle
              ref={cryptographyRef}
              onClick={() => handleClick(references.Cryptography)}
            >
              Cryptography
            </Circle>
            <Circle
              ref={webSecurityRef}
              onClick={() => handleClick(references["Web Security"])}
            >
              Web Security
            </Circle>
          </div>
          <Circle
            ref={ethicalHackingRef}
            onClick={() => handleClick(references["Ethical Hacking"])}
          >
            Ethical Hacking
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={incidentResponseRef}
              onClick={() => handleClick(references["Incident Response"])}
            >
              Incident Response
            </Circle>
            <Circle
              ref={securityOpsRef}
              onClick={() => handleClick(references["Security Operations"])}
            >
              Security Operations
            </Circle>
          </div>
          <Circle
            ref={cloudSecurityRef}
            onClick={() => handleClick(references["Cloud Security"])}
          >
            Cloud Security
          </Circle>
          <Circle
            ref={advancedTopicsRef}
            onClick={() => handleClick(references["Advanced Topics"])}
          >
            Advanced Topics
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={malwareAnalysisRef}
              onClick={() => handleClick(references["Malware Analysis"])}
            >
              Malware Analysis
            </Circle>
            <Circle
              ref={threatHuntingRef}
              onClick={() => handleClick(references["Threat Hunting"])}
            >
              Threat Hunting
            </Circle>
            <Circle
              ref={redTeamOpsRef}
              onClick={() => handleClick(references["Red Team Operations"])}
            >
              Red Team Operations
            </Circle>
          </div>
          <Circle
            ref={programmingSkillsRef}
            onClick={() =>
              handleClick(
                references[
                  "Programming Skills and Knowledge (Optional but Recommended)"
                ]
              )
            }
          >
            Programming Skills and Knowledge (Optional but Recommended)
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={pythonRef}
              onClick={() => handleClick(references.Python)}
            >
              Python
            </Circle>
            <Circle ref={goRef} onClick={() => handleClick(references.Go)}>
              Go
            </Circle>
            <Circle
              ref={javascriptRef}
              onClick={() => handleClick(references.JavaScript)}
            >
              JavaScript
            </Circle>
            <Circle ref={cppRef} onClick={() => handleClick(references["C++"])}>
              C++
            </Circle>
          </div>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={introRef}
          toRef={networkingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={introRef}
          toRef={osRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={introRef}
          toRef={programmingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={introRef}
          toRef={securityFundamentalsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityFundamentalsRef}
          toRef={networkSecurityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityFundamentalsRef}
          toRef={cryptographyRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityFundamentalsRef}
          toRef={webSecurityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkSecurityRef}
          toRef={ethicalHackingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkSecurityRef}
          toRef={incidentResponseRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkSecurityRef}
          toRef={securityOpsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityFundamentalsRef}
          toRef={cloudSecurityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={cloudSecurityRef}
          toRef={advancedTopicsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={cloudSecurityRef}
          toRef={programmingSkillsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedTopicsRef}
          toRef={malwareAnalysisRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedTopicsRef}
          toRef={threatHuntingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedTopicsRef}
          toRef={redTeamOpsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={programmingSkillsRef}
          toRef={pythonRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={programmingSkillsRef}
          toRef={goRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={programmingSkillsRef}
          toRef={javascriptRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={programmingSkillsRef}
          toRef={cppRef}
        />
      </div>
    </MaxWidthWrapper>
  );
};

CyberSecurityRoadmap.displayName = "CyberSecurityRoadmap";

// Default export of the page component
export default function Page() {
  return (
    <>
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
        <CyberSecurityRoadmap />
      </div>
    </>
  );
}
