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
        "h-20 w-52 md:h-24 md:w-60 lg:h-28 lg:w-64 xl:h-32 xl:w-72",
        className
      )}
      onClick={onClick}
    >
      <span className="text-sm md:text-base lg:text-lg xl:text-xl">
        {children}
      </span>
    </div>
  );
});

// Add displayName to the Circle component
Circle.displayName = "Circle";

export function WebDevRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const htmlRef = useRef<HTMLDivElement>(null);
  const cssRef = useRef<HTMLDivElement>(null);
  const jsRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const tailwindRef = useRef<HTMLDivElement>(null);
  const gitHubRef = useRef<HTMLDivElement>(null);
  const gitRef = useRef<HTMLDivElement>(null);
  const startBackendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const postgresRef = useRef<HTMLDivElement>(null);
  const redisRef = useRef<HTMLDivElement>(null);
  const jwtRef = useRef<HTMLDivElement>(null);
  const restApiRef = useRef<HTMLDivElement>(null);
  const linuxRef = useRef<HTMLDivElement>(null);
  const awsRef = useRef<HTMLDivElement>(null);
  const ec2Ref = useRef<HTMLDivElement>(null);
  const vpcRef = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const monitRef = useRef<HTMLDivElement>(null);
  const ciCdRef = useRef<HTMLDivElement>(null);
  const monitoringRef = useRef<HTMLDivElement>(null);
  const ansibleRef = useRef<HTMLDivElement>(null);
  const terraformRef = useRef<HTMLDivElement>(null);
  const infrastructureRef = useRef<HTMLDivElement>(null);

  const references = {
    HTML: "https://www.w3schools.com/html/",
    CSS: "https://www.w3schools.com/css/",
    JavaScript: "https://www.w3schools.com/js/",
    React: "https://reactjs.org/docs/getting-started.html",
    TailwindCSS: "https://tailwindcss.com/docs",
    GitHub: "https://docs.github.com/en/get-started",
    Git: "https://git-scm.com/doc",
    "Start Backend Development": "https://nodejs.org/en/docs/",
    "Node.js": "https://nodejs.org/en/docs/",
    PostgreSQL: "https://www.postgresql.org/docs/",
    Redis: "https://redis.io/documentation",
    "JWT Auth": "https://jwt.io/introduction/",
    "RESTful APIs": "https://restfulapi.net/",
    "Linux Basics": "https://www.linux.org/pages/download/",
    "Basic AWS Services": "https://aws.amazon.com/documentation/",
    EC2: "https://docs.aws.amazon.com/ec2/index.html",
    VPC: "https://docs.aws.amazon.com/vpc/index.html",
    S3: "https://docs.aws.amazon.com/s3/index.html",
    Monit: "https://mmonit.com/monit/documentation/",
    "CI/CD": "https://www.atlassian.com/continuous-delivery/ci-vs-cd",
    Monitoring: "https://www.datadoghq.com/monitoring/",
    Ansible: "https://docs.ansible.com/",
    Terraform: "https://www.terraform.io/docs",
    Infrastructure:
      "https://www.atlassian.com/software/jira/core/server/documentation",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-creme mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        Web Development Roadmap
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
        className="relative flex flex-col items-center justify-start w-full max-w-[1200px] p-10 mx-auto overflow-hidden rounded-lg"
        ref={containerRef}
      >
        <div className="flex flex-col gap-8 items-center">
          <Circle ref={htmlRef} onClick={() => handleClick(references.HTML)}>
            HTML
          </Circle>
          <Circle ref={cssRef} onClick={() => handleClick(references.CSS)}>
            CSS
          </Circle>
          <Circle
            ref={jsRef}
            onClick={() => handleClick(references.JavaScript)}
          >
            JavaScript
          </Circle>
          <Circle ref={reactRef} onClick={() => handleClick(references.React)}>
            React
          </Circle>
          <Circle
            ref={tailwindRef}
            onClick={() => handleClick(references.TailwindCSS)}
          >
            TailwindCSS
          </Circle>
          <Circle
            ref={gitHubRef}
            onClick={() => handleClick(references.GitHub)}
          >
            GitHub
          </Circle>
          <Circle ref={gitRef} onClick={() => handleClick(references.Git)}>
            Git
          </Circle>
          <Circle
            ref={startBackendRef}
            className="h-28 w-72"
            onClick={() => handleClick(references["Start Backend Development"])}
          >
            Start Backend Development
          </Circle>
          <Circle
            ref={backendRef}
            onClick={() => handleClick(references["Node.js"])}
          >
            Node.js
          </Circle>
          <Circle
            ref={postgresRef}
            onClick={() => handleClick(references.PostgreSQL)}
          >
            PostgreSQL
          </Circle>
          <Circle ref={redisRef} onClick={() => handleClick(references.Redis)}>
            Redis
          </Circle>
          <Circle
            ref={jwtRef}
            onClick={() => handleClick(references["JWT Auth"])}
          >
            JWT Auth
          </Circle>
          <Circle
            ref={restApiRef}
            onClick={() => handleClick(references["RESTful APIs"])}
          >
            RESTful APIs
          </Circle>
          <Circle
            ref={linuxRef}
            onClick={() => handleClick(references["Linux Basics"])}
          >
            Linux Basics
          </Circle>
          <Circle
            ref={awsRef}
            onClick={() => handleClick(references["Basic AWS Services"])}
          >
            Basic AWS Services
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={ec2Ref} onClick={() => handleClick(references.EC2)}>
              EC2
            </Circle>
            <Circle ref={vpcRef} onClick={() => handleClick(references.VPC)}>
              VPC
            </Circle>

            <Circle ref={s3Ref} onClick={() => handleClick(references.S3)}>
              S3
            </Circle>
          </div>
          <Circle ref={monitRef} onClick={() => handleClick(references.Monit)}>
            Monit
          </Circle>
          <Circle
            ref={ciCdRef}
            onClick={() => handleClick(references["CI/CD"])}
          >
            CI/CD
          </Circle>
          <Circle
            ref={monitoringRef}
            onClick={() => handleClick(references.Monitoring)}
          >
            Monitoring
          </Circle>
          <Circle
            ref={ansibleRef}
            onClick={() => handleClick(references.Ansible)}
          >
            Ansible
          </Circle>
          <Circle
            ref={terraformRef}
            onClick={() => handleClick(references.Terraform)}
          >
            Terraform
          </Circle>
          <Circle
            ref={infrastructureRef}
            onClick={() => handleClick(references.Infrastructure)}
          >
            Infrastructure
          </Circle>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={htmlRef}
          toRef={cssRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={cssRef}
          toRef={jsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={jsRef}
          toRef={reactRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={reactRef}
          toRef={tailwindRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={tailwindRef}
          toRef={gitHubRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={gitHubRef}
          toRef={gitRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={gitHubRef}
          toRef={startBackendRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={startBackendRef}
          toRef={backendRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={backendRef}
          toRef={postgresRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={postgresRef}
          toRef={redisRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={redisRef}
          toRef={jwtRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={jwtRef}
          toRef={restApiRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={restApiRef}
          toRef={linuxRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={linuxRef}
          toRef={awsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={awsRef}
          toRef={ec2Ref}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={awsRef}
          toRef={vpcRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={awsRef}
          toRef={s3Ref}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={awsRef}
          toRef={monitRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={monitRef}
          toRef={ciCdRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={ciCdRef}
          toRef={monitoringRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={monitoringRef}
          toRef={ansibleRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={ansibleRef}
          toRef={terraformRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={terraformRef}
          toRef={infrastructureRef}
        />
      </div>
    </MaxWidthWrapper>
  );
}
WebDevRoadmap.displayName = "WebDevRoadmap";
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
        <WebDevRoadmap />
      </div>
    </>
  );
}
