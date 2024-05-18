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
        "relative z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-center transition duration-300 cursor-pointer hover:bg-creme hover:text-white hover:shadow-lg",
        "h-16 w-40 md:h-20 md:w-48 lg:h-24 lg:w-56 xl:h-28 xl:w-64",
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

export function NetworkAdminRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const basicsRef = useRef<HTMLDivElement>(null);
  const networkingRef = useRef<HTMLDivElement>(null);
  const protocolsRef = useRef<HTMLDivElement>(null);
  const ipRef = useRef<HTMLDivElement>(null);
  const tcpUdpRef = useRef<HTMLDivElement>(null);
  const dnsRef = useRef<HTMLDivElement>(null);
  const subnettingRef = useRef<HTMLDivElement>(null);
  const routersRef = useRef<HTMLDivElement>(null);
  const switchesRef = useRef<HTMLDivElement>(null);
  const firewallsRef = useRef<HTMLDivElement>(null);
  const wirelessRef = useRef<HTMLDivElement>(null);
  const systemsRef = useRef<HTMLDivElement>(null);
  const linuxRef = useRef<HTMLDivElement>(null);
  const windowsServerRef = useRef<HTMLDivElement>(null);
  const virtualizationRef = useRef<HTMLDivElement>(null);
  const vmwareRef = useRef<HTMLDivElement>(null);
  const hyperVRef = useRef<HTMLDivElement>(null);
  const cloudComputingRef = useRef<HTMLDivElement>(null);
  const awsRef = useRef<HTMLDivElement>(null);
  const azureRef = useRef<HTMLDivElement>(null);
  const googleCloudRef = useRef<HTMLDivElement>(null);
  const monitoringRef = useRef<HTMLDivElement>(null);
  const nagiosRef = useRef<HTMLDivElement>(null);
  const prometheusRef = useRef<HTMLDivElement>(null);
  const zabbixRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const firewallsSecRef = useRef<HTMLDivElement>(null);
  const vpnRef = useRef<HTMLDivElement>(null);
  const idsIpsRef = useRef<HTMLDivElement>(null);
  const backupsRef = useRef<HTMLDivElement>(null);
  const disasterRecoveryRef = useRef<HTMLDivElement>(null);
  const documentationRef = useRef<HTMLDivElement>(null);

  const references = {
    "Networking Basics":
      "https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html",
    Protocols: "https://en.wikipedia.org/wiki/Networking_protocol",
    IP: "https://en.wikipedia.org/wiki/Internet_Protocol",
    "TCP/UDP": "https://en.wikipedia.org/wiki/Transport_layer",
    DNS: "https://en.wikipedia.org/wiki/Domain_Name_System",
    Subnetting: "https://en.wikipedia.org/wiki/Subnetwork",
    Routers: "https://en.wikipedia.org/wiki/Router_(computing)",
    Switches: "https://en.wikipedia.org/wiki/Network_switch",
    Firewalls: "https://en.wikipedia.org/wiki/Firewall_(computing)",
    Wireless: "https://en.wikipedia.org/wiki/Wireless_network",
    "Operating Systems": "https://en.wikipedia.org/wiki/Operating_system",
    Linux: "https://en.wikipedia.org/wiki/Linux",
    "Windows Server": "https://en.wikipedia.org/wiki/Windows_Server",
    Virtualization: "https://en.wikipedia.org/wiki/Virtualization",
    VMware: "https://www.vmware.com/",
    "Hyper-V":
      "https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-technology-overview",
    "Cloud Computing": "https://en.wikipedia.org/wiki/Cloud_computing",
    AWS: "https://aws.amazon.com/",
    Azure: "https://azure.microsoft.com/",
    "Google Cloud": "https://cloud.google.com/",
    Monitoring: "https://en.wikipedia.org/wiki/Network_monitoring",
    Nagios: "https://www.nagios.org/",
    Prometheus: "https://prometheus.io/",
    Zabbix: "https://www.zabbix.com/",
    Security: "https://en.wikipedia.org/wiki/Computer_security",
    FirewallsSec: "https://en.wikipedia.org/wiki/Firewall_(computing)",
    VPN: "https://en.wikipedia.org/wiki/Virtual_private_network",
    "IDS/IPS": "https://en.wikipedia.org/wiki/Intrusion_detection_system",
    Backups: "https://en.wikipedia.org/wiki/Backup",
    "Disaster Recovery": "https://en.wikipedia.org/wiki/Disaster_recovery",
    Documentation: "https://en.wikipedia.org/wiki/Technical_documentation",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-creme mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        Network and Systems Administration Roadmap
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
            ref={basicsRef}
            onClick={() => handleClick(references["Networking Basics"])}
          >
            Networking Basics
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={protocolsRef}
              onClick={() => handleClick(references.Protocols)}
            >
              Protocols
            </Circle>
            <Circle ref={ipRef} onClick={() => handleClick(references.IP)}>
              IP
            </Circle>
            <Circle
              ref={tcpUdpRef}
              onClick={() => handleClick(references["TCP/UDP"])}
            >
              TCP/UDP
            </Circle>
            <Circle ref={dnsRef} onClick={() => handleClick(references.DNS)}>
              DNS
            </Circle>
            <Circle
              ref={subnettingRef}
              onClick={() => handleClick(references.Subnetting)}
            >
              Subnetting
            </Circle>
          </div>
          <Circle
            ref={networkingRef}
            onClick={() => handleClick(references["Networking Basics"])}
          >
            Networking
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={routersRef}
              onClick={() => handleClick(references.Routers)}
            >
              Routers
            </Circle>
            <Circle
              ref={switchesRef}
              onClick={() => handleClick(references.Switches)}
            >
              Switches
            </Circle>
            <Circle
              ref={firewallsRef}
              onClick={() => handleClick(references.Firewalls)}
            >
              Firewalls
            </Circle>
            <Circle
              ref={wirelessRef}
              onClick={() => handleClick(references.Wireless)}
            >
              Wireless
            </Circle>
          </div>
          <Circle
            ref={systemsRef}
            onClick={() => handleClick(references["Operating Systems"])}
          >
            Systems
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={linuxRef}
              onClick={() => handleClick(references.Linux)}
            >
              Linux
            </Circle>
            <Circle
              ref={windowsServerRef}
              onClick={() => handleClick(references["Windows Server"])}
            >
              Windows Server
            </Circle>
          </div>
          <Circle
            ref={virtualizationRef}
            onClick={() => handleClick(references.Virtualization)}
          >
            Virtualization
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={vmwareRef}
              onClick={() => handleClick(references.VMware)}
            >
              VMware
            </Circle>
            <Circle
              ref={hyperVRef}
              onClick={() => handleClick(references["Hyper-V"])}
            >
              Hyper-V
            </Circle>
          </div>
          <Circle
            ref={cloudComputingRef}
            onClick={() => handleClick(references["Cloud Computing"])}
          >
            Cloud Computing
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
            ref={monitoringRef}
            onClick={() => handleClick(references.Monitoring)}
          >
            Monitoring
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={nagiosRef}
              onClick={() => handleClick(references.Nagios)}
            >
              Nagios
            </Circle>
            <Circle
              ref={prometheusRef}
              onClick={() => handleClick(references.Prometheus)}
            >
              Prometheus
            </Circle>
            <Circle
              ref={zabbixRef}
              onClick={() => handleClick(references.Zabbix)}
            >
              Zabbix
            </Circle>
          </div>
          <Circle
            ref={securityRef}
            onClick={() => handleClick(references.Security)}
          >
            Security
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={firewallsSecRef}
              onClick={() => handleClick(references.FirewallsSec)}
            >
              Firewalls
            </Circle>
            <Circle ref={vpnRef} onClick={() => handleClick(references.VPN)}>
              VPN
            </Circle>
            <Circle
              ref={idsIpsRef}
              onClick={() => handleClick(references["IDS/IPS"])}
            >
              IDS/IPS
            </Circle>
          </div>
          <Circle
            ref={backupsRef}
            onClick={() => handleClick(references.Backups)}
          >
            Backups
          </Circle>
          <Circle
            ref={disasterRecoveryRef}
            onClick={() => handleClick(references["Disaster Recovery"])}
          >
            Disaster Recovery
          </Circle>
          <Circle
            ref={documentationRef}
            onClick={() => handleClick(references.Documentation)}
          >
            Documentation
          </Circle>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicsRef}
          toRef={protocolsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicsRef}
          toRef={ipRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicsRef}
          toRef={tcpUdpRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicsRef}
          toRef={dnsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicsRef}
          toRef={subnettingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicsRef}
          toRef={networkingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={routersRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={switchesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={firewallsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={wirelessRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={networkingRef}
          toRef={systemsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={systemsRef}
          toRef={linuxRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={systemsRef}
          toRef={windowsServerRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={systemsRef}
          toRef={virtualizationRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={virtualizationRef}
          toRef={vmwareRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={virtualizationRef}
          toRef={hyperVRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={virtualizationRef}
          toRef={cloudComputingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={cloudComputingRef}
          toRef={awsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={cloudComputingRef}
          toRef={azureRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={cloudComputingRef}
          toRef={googleCloudRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={cloudComputingRef}
          toRef={monitoringRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={monitoringRef}
          toRef={nagiosRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={monitoringRef}
          toRef={prometheusRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={monitoringRef}
          toRef={zabbixRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={monitoringRef}
          toRef={securityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={firewallsSecRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={vpnRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={idsIpsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={backupsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={backupsRef}
          toRef={disasterRecoveryRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={disasterRecoveryRef}
          toRef={documentationRef}
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
        <NetworkAdminRoadmap />
      </div>
    </>
  );
}
