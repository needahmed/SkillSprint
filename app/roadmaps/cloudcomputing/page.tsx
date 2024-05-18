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

export function CloudComputingRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fundamentalsRef = useRef<HTMLDivElement>(null);
  const cloudConceptsRef = useRef<HTMLDivElement>(null);
  const serviceModelsRef = useRef<HTMLDivElement>(null);
  const deploymentModelsRef = useRef<HTMLDivElement>(null);
  const providersRef = useRef<HTMLDivElement>(null);
  const awsRef = useRef<HTMLDivElement>(null);
  const azureRef = useRef<HTMLDivElement>(null);
  const googleCloudRef = useRef<HTMLDivElement>(null);
  const computeRef = useRef<HTMLDivElement>(null);
  const virtualMachinesRef = useRef<HTMLDivElement>(null);
  const containersRef = useRef<HTMLDivElement>(null);
  const serverlessRef = useRef<HTMLDivElement>(null);
  const storageRef = useRef<HTMLDivElement>(null);
  const objectStorageRef = useRef<HTMLDivElement>(null);
  const blockStorageRef = useRef<HTMLDivElement>(null);
  const fileStorageRef = useRef<HTMLDivElement>(null);
  const networkingRef = useRef<HTMLDivElement>(null);
  const vpcRef = useRef<HTMLDivElement>(null);
  const subnetsRef = useRef<HTMLDivElement>(null);
  const loadBalancingRef = useRef<HTMLDivElement>(null);
  const dnsRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const iamRef = useRef<HTMLDivElement>(null);
  const encryptionRef = useRef<HTMLDivElement>(null);
  const securityGroupsRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);
  const devOpsRef = useRef<HTMLDivElement>(null);
  const ciCdRef = useRef<HTMLDivElement>(null);
  const infraAsCodeRef = useRef<HTMLDivElement>(null);
  const monitoringRef = useRef<HTMLDivElement>(null);
  const dataServicesRef = useRef<HTMLDivElement>(null);
  const databasesRef = useRef<HTMLDivElement>(null);
  const dataWarehousingRef = useRef<HTMLDivElement>(null);
  const dataLakesRef = useRef<HTMLDivElement>(null);
  const aiMlRef = useRef<HTMLDivElement>(null);
  const aiServicesRef = useRef<HTMLDivElement>(null);
  const dataPipelinesRef = useRef<HTMLDivElement>(null);
  const modelDeploymentRef = useRef<HTMLDivElement>(null);

  const references = {
    Fundamentals:
      "https://www.cloudflare.com/learning/cloud/what-is-the-cloud/",
    "Cloud Concepts":
      "https://www.cloudflare.com/learning/cloud/what-is-cloud-computing/",
    "Service Models (IaaS, PaaS, SaaS)":
      "https://www.redhat.com/en/topics/cloud-computing/cloud-iaas-paas-saas",
    "Deployment Models (Public, Private, Hybrid)":
      "https://www.ibm.com/cloud/learn/public-cloud",
    "Cloud Providers": "https://aws.amazon.com/free/cloud-training/",
    AWS: "https://aws.amazon.com/",
    Azure: "https://azure.microsoft.com/",
    "Google Cloud": "https://cloud.google.com/",
    "Compute Services": "https://aws.amazon.com/products/compute/",
    "Virtual Machines": "https://aws.amazon.com/ec2/",
    Containers:
      "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/",
    Serverless: "https://aws.amazon.com/serverless/",
    "Storage Services": "https://aws.amazon.com/products/storage/",
    "Object Storage": "https://aws.amazon.com/s3/",
    "Block Storage": "https://aws.amazon.com/ebs/",
    "File Storage": "https://aws.amazon.com/efs/",
    Networking: "https://aws.amazon.com/products/networking/",
    VPCs: "https://aws.amazon.com/vpc/",
    Subnets:
      "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html",
    "Load Balancing": "https://aws.amazon.com/elasticloadbalancing/",
    DNS: "https://aws.amazon.com/route53/",
    Security: "https://aws.amazon.com/security/",
    IAM: "https://aws.amazon.com/iam/",
    Encryption: "https://aws.amazon.com/kms/",
    "Security Groups":
      "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
    Compliance: "https://aws.amazon.com/compliance/",
    DevOps: "https://aws.amazon.com/devops/",
    "CI/CD Pipelines": "https://aws.amazon.com/devops/continuous-integration/",
    "Infrastructure as Code": "https://aws.amazon.com/cloudformation/",
    Monitoring: "https://aws.amazon.com/cloudwatch/",
    "Data Services": "https://aws.amazon.com/products/databases/",
    Databases: "https://aws.amazon.com/rds/",
    "Data Warehousing": "https://aws.amazon.com/redshift/",
    "Data Lakes": "https://aws.amazon.com/lake-formation/",
    "AI & Machine Learning": "https://aws.amazon.com/machine-learning/",
    "AI Services": "https://aws.amazon.com/sagemaker/",
    "Data Pipelines": "https://aws.amazon.com/datapipeline/",
    "Model Deployment": "https://aws.amazon.com/sagemaker/deploy/",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-creme mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        Cloud Computing Roadmap
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
            ref={fundamentalsRef}
            onClick={() => handleClick(references.Fundamentals)}
          >
            Fundamentals
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={cloudConceptsRef}
              onClick={() => handleClick(references["Cloud Concepts"])}
            >
              Cloud Concepts
            </Circle>
            <Circle
              ref={serviceModelsRef}
              onClick={() =>
                handleClick(references["Service Models (IaaS, PaaS, SaaS)"])
              }
            >
              Service Models (IaaS, PaaS, SaaS)
            </Circle>
            <Circle
              ref={deploymentModelsRef}
              onClick={() =>
                handleClick(
                  references["Deployment Models (Public, Private, Hybrid)"]
                )
              }
            >
              Deployment Models (Public, Private, Hybrid)
            </Circle>
          </div>
          <Circle
            ref={providersRef}
            onClick={() => handleClick(references["Cloud Providers"])}
          >
            Cloud Providers
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={awsRef} onClick={() => handleClick(references.AWS)}>
              AWS
            </Circle>
            <Circle
              ref={azureRef}
              onClick={() => handleClick(references.Azure)}
            >
              Azure
            </Circle>
            <Circle
              ref={googleCloudRef}
              onClick={() => handleClick(references["Google Cloud"])}
            >
              Google Cloud
            </Circle>
          </div>
          <Circle
            ref={computeRef}
            onClick={() => handleClick(references["Compute Services"])}
          >
            Compute Services
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={virtualMachinesRef}
              onClick={() => handleClick(references["Virtual Machines"])}
            >
              Virtual Machines
            </Circle>
            <Circle
              ref={containersRef}
              onClick={() => handleClick(references.Containers)}
            >
              Containers
            </Circle>
            <Circle
              ref={serverlessRef}
              onClick={() => handleClick(references.Serverless)}
            >
              Serverless
            </Circle>
          </div>
          <Circle
            ref={storageRef}
            onClick={() => handleClick(references["Storage Services"])}
          >
            Storage Services
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={objectStorageRef}
              onClick={() => handleClick(references["Object Storage"])}
            >
              Object Storage
            </Circle>
            <Circle
              ref={blockStorageRef}
              onClick={() => handleClick(references["Block Storage"])}
            >
              Block Storage
            </Circle>
            <Circle
              ref={fileStorageRef}
              onClick={() => handleClick(references["File Storage"])}
            >
              File Storage
            </Circle>
          </div>
          <Circle
            ref={networkingRef}
            onClick={() => handleClick(references.Networking)}
          >
            Networking
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={vpcRef} onClick={() => handleClick(references.VPCs)}>
              VPCs
            </Circle>
            <Circle
              ref={subnetsRef}
              onClick={() => handleClick(references.Subnets)}
            >
              Subnets
            </Circle>
            <Circle
              ref={loadBalancingRef}
              onClick={() => handleClick(references["Load Balancing"])}
            >
              Load Balancing
            </Circle>
            <Circle ref={dnsRef} onClick={() => handleClick(references.DNS)}>
              DNS
            </Circle>
          </div>
          <Circle
            ref={securityRef}
            onClick={() => handleClick(references.Security)}
          >
            Security
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={iamRef} onClick={() => handleClick(references.IAM)}>
              IAM
            </Circle>
            <Circle
              ref={encryptionRef}
              onClick={() => handleClick(references.Encryption)}
            >
              Encryption
            </Circle>
            <Circle
              ref={securityGroupsRef}
              onClick={() => handleClick(references["Security Groups"])}
            >
              Security Groups
            </Circle>
            <Circle
              ref={complianceRef}
              onClick={() => handleClick(references.Compliance)}
            >
              Compliance
            </Circle>
          </div>
          <Circle
            ref={devOpsRef}
            onClick={() => handleClick(references.DevOps)}
          >
            DevOps
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={ciCdRef}
              onClick={() => handleClick(references["CI/CD Pipelines"])}
            >
              CI/CD Pipelines
            </Circle>
            <Circle
              ref={infraAsCodeRef}
              onClick={() => handleClick(references["Infrastructure as Code"])}
            >
              Infrastructure as Code
            </Circle>
            <Circle
              ref={monitoringRef}
              onClick={() => handleClick(references.Monitoring)}
            >
              Monitoring
            </Circle>
          </div>
          <Circle
            ref={dataServicesRef}
            onClick={() => handleClick(references["Data Services"])}
          >
            Data Services
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={databasesRef}
              onClick={() => handleClick(references.Databases)}
            >
              Databases
            </Circle>
            <Circle
              ref={dataWarehousingRef}
              onClick={() => handleClick(references["Data Warehousing"])}
            >
              Data Warehousing
            </Circle>
            <Circle
              ref={dataLakesRef}
              onClick={() => handleClick(references["Data Lakes"])}
            >
              Data Lakes
            </Circle>
          </div>
          <Circle
            ref={aiMlRef}
            onClick={() => handleClick(references["AI & Machine Learning"])}
          >
            AI & Machine Learning
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={aiServicesRef}
              onClick={() => handleClick(references["AI Services"])}
            >
              AI Services
            </Circle>
            <Circle
              ref={dataPipelinesRef}
              onClick={() => handleClick(references["Data Pipelines"])}
            >
              Data Pipelines
            </Circle>
            <Circle
              ref={modelDeploymentRef}
              onClick={() => handleClick(references["Model Deployment"])}
            >
              Model Deployment
            </Circle>
          </div>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={fundamentalsRef}
          toRef={cloudConceptsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={fundamentalsRef}
          toRef={serviceModelsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={fundamentalsRef}
          toRef={deploymentModelsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={fundamentalsRef}
          toRef={providersRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={providersRef}
          toRef={awsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={providersRef}
          toRef={azureRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={providersRef}
          toRef={googleCloudRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={providersRef}
          toRef={computeRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={virtualMachinesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={containersRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={serverlessRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={storageRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={storageRef}
          toRef={objectStorageRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={storageRef}
          toRef={blockStorageRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={storageRef}
          toRef={fileStorageRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={networkingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={vpcRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={subnetsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={loadBalancingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={dnsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={securityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={iamRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={encryptionRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={securityGroupsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={complianceRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={devOpsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={devOpsRef}
          toRef={ciCdRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={devOpsRef}
          toRef={infraAsCodeRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={devOpsRef}
          toRef={monitoringRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={dataServicesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dataServicesRef}
          toRef={databasesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dataServicesRef}
          toRef={dataWarehousingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dataServicesRef}
          toRef={dataLakesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={computeRef}
          toRef={aiMlRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={aiMlRef}
          toRef={aiServicesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={aiMlRef}
          toRef={dataPipelinesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={aiMlRef}
          toRef={modelDeploymentRef}
        />
      </div>
    </MaxWidthWrapper>
  );
}

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
        <CloudComputingRoadmap />
      </div>
    </>
  );
}
