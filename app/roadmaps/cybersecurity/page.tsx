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
      "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
    "Networking Fundamentals": "https://www.w3schools.com/cybersecurity/cybersecurity_networking.php",
    "Operating System Basics":
      "https://study.com/academy/lesson/the-role-of-operating-systems-in-security.html#:~:text=Do%20operating%20systems%20provide%20security,%2C%20user%2C%20and%20network%20levels.",
    "Programming and Scripting": "https://cybersecurityguide.org/resources/coding-for-cybersecurity/#:~:text=While%20many%20languages%20can%20be,JavaScript%20can%20also%20be%20advantageous.",
    "Security Fundamentals":
      "https://online.adelaide.edu.au/blog/cyber-security-fundamentals",
    "Network Security":
      "https://www.checkpoint.com/cyber-hub/network-security/what-is-network-security/#:~:text=Network%20Security%20protects%20your%20network,accessibility%2C%20and%20overall%20threat%20protection.",
    Cryptography: "https://www.fortinet.com/resources/cyberglossary/what-is-cryptography#:~:text=Cryptography%20is%20the%20process%20of,%2C%20computer%20passwords%2C%20and%20ecommerce.",
    "Web Security": "https://www.fortinet.com/resources/cyberglossary/what-is-web-security",
    "Ethical Hacking": "https://www.synopsys.com/glossary/what-is-ethical-hacking.html#:~:text=Definition,and%20actions%20of%20malicious%20attackers.",
    "Incident Response":
      "https://www.ibm.com/topics/incident-response#:~:text=IBM-,What%20is%20incident%20response%3F,to%20limit%20or%20prevent%20damage.",
    "Security Operations":
      "https://www.cyberark.com/what-is/security-operations/#:~:text=Security%20operations%2C%20also%20known%20as,security%20posture%20of%20an%20organization.",
    "Cloud Security":
      "https://cloud.google.com/learn/what-is-cloud-security#:~:text=Cloud%20security%20refers%20to%20the,and%20infrastructure%20in%20cloud%20environments.",
    "Advanced Topics":
      "https://online.stanford.edu/programs/advanced-cybersecurity-program",
    "Malware Analysis":
      "https://www.fortinet.com/resources/cyberglossary/malware-analysis",
    "Threat Hunting": "https://www.crowdstrike.com/cybersecurity-101/threat-hunting/",
    "Red Team Operations":
      "https://www.checkpoint.com/cyber-hub/cyber-security/what-is-a-red-team/#:~:text=Often%20in%20cybersecurity%20testing%2C%20the,potential%20attacker%20within%20the%20engagement.",
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
    <MaxWidthWrapper className="text-lblack mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-creme max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
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
            <Circle className="circle-c"
              ref={networkingRef}
              onClick={() => handleClick(references["Networking Fundamentals"])}
            >
              Networking Fundamentals
            </Circle>
            <Circle className="circle-c"
              ref={osRef}
              onClick={() => handleClick(references["Operating System Basics"])}
            >
              Operating System Basics
            </Circle>
            <Circle className="circle-c"
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
            <Circle className="circle-c"
              ref={networkSecurityRef}
              onClick={() => handleClick(references["Network Security"])}
            >
              Network Security
            </Circle> 
            <Circle className="circle-c"
              ref={cryptographyRef}
              onClick={() => handleClick(references.Cryptography)}
            >
              Cryptography
            </Circle>
            <Circle className="circle-c"
              ref={webSecurityRef}
              onClick={() => handleClick(references["Web Security"])}
            >
              Web Security
            </Circle>
          </div>
          <Circle className="circle-d"
            ref={ethicalHackingRef}
            onClick={() => handleClick(references["Ethical Hacking"])}
          >
            Ethical Hacking
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-d"
              ref={incidentResponseRef}
              onClick={() => handleClick(references["Incident Response"])}
            >
              Incident Response
            </Circle>
            <Circle className="circle-d"
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
            <Circle className="circle-c"
              ref={malwareAnalysisRef}
              onClick={() => handleClick(references["Malware Analysis"])}
            >
              Malware Analysis
            </Circle>
            <Circle className="circle-c"
              ref={threatHuntingRef}
              onClick={() => handleClick(references["Threat Hunting"])}
            >
              Threat Hunting
            </Circle>
            <Circle className="circle-c"
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
            <Circle className="circle-c"
              ref={pythonRef}
              onClick={() => handleClick(references.Python)}
            >
              Python
            </Circle>
            <Circle className="circle-c" ref={goRef} onClick={() => handleClick(references.Go)}>
              Go
            </Circle>
            <Circle className="circle-c"
              ref={javascriptRef}
              onClick={() => handleClick(references.JavaScript)}
            >
              JavaScript
            </Circle>
            <Circle className="circle-c" ref={cppRef} onClick={() => handleClick(references["C++"])}>
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
