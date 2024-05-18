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
        className,
      )}
      onClick={onClick}
    >
      <span className="text-xs md:text-sm lg:text-base xl:text-lg">{children}</span>
    </div>
  );
});

export function DevOpsRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const programmingLanguageRef = useRef<HTMLDivElement>(null);
  const pythonRef = useRef<HTMLDivElement>(null);
  const goRef = useRef<HTMLDivElement>(null);
  const rubyRef = useRef<HTMLDivElement>(null);
  const rustRef = useRef<HTMLDivElement>(null);
  const operatingSystemsRef = useRef<HTMLDivElement>(null);
  const linuxRef = useRef<HTMLDivElement>(null);
  const unixRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const processMonitoringRef = useRef<HTMLDivElement>(null);
  const performanceMonitoringRef = useRef<HTMLDivElement>(null);
  const networkingToolsRef = useRef<HTMLDivElement>(null);
  const textManipulationRef = useRef<HTMLDivElement>(null);
  const vcsRef = useRef<HTMLDivElement>(null);
  const vcsHostingRef = useRef<HTMLDivElement>(null);
  const gitHubRef = useRef<HTMLDivElement>(null);
  const gitLabRef = useRef<HTMLDivElement>(null);
  const bitbucketRef = useRef<HTMLDivElement>(null);
  const containersRef = useRef<HTMLDivElement>(null);
  const lxcRef = useRef<HTMLDivElement>(null);
  const dockerRef = useRef<HTMLDivElement>(null);
  const cloudProvidersRef = useRef<HTMLDivElement>(null);
  const awsRef = useRef<HTMLDivElement>(null);
  const azureRef = useRef<HTMLDivElement>(null);
  const googleCloudRef = useRef<HTMLDivElement>(null);
  const networkingSecurityProtocolsRef = useRef<HTMLDivElement>(null);
  const ftpRef = useRef<HTMLDivElement>(null);
  const dnsRef = useRef<HTMLDivElement>(null);
  const httpsRef = useRef<HTMLDivElement>(null);
  const sshRef = useRef<HTMLDivElement>(null);
  const serverlessRef = useRef<HTMLDivElement>(null);
  const cloudflareRef = useRef<HTMLDivElement>(null);
  const awsLambdaRef = useRef<HTMLDivElement>(null);
  const infrastructureProvisioningRef = useRef<HTMLDivElement>(null);
  const awsCdkRef = useRef<HTMLDivElement>(null);
  const cloudFormationRef = useRef<HTMLDivElement>(null);
  const pulumiRef = useRef<HTMLDivElement>(null);
  const configurationManagementRef = useRef<HTMLDivElement>(null);
  const ansibleRef = useRef<HTMLDivElement>(null);
  const chefRef = useRef<HTMLDivElement>(null);
  const puppetRef = useRef<HTMLDivElement>(null);
  const cicdRef = useRef<HTMLDivElement>(null);
  const gitLabCIRef = useRef<HTMLDivElement>(null);
  const jenkinsRef = useRef<HTMLDivElement>(null);
  const githubActionsRef = useRef<HTMLDivElement>(null);
  const travisCIRef = useRef<HTMLDivElement>(null);
  const secretManagementRef = useRef<HTMLDivElement>(null);
  const sealedSecretsRef = useRef<HTMLDivElement>(null);
  const cloudSpecificToolsRef = useRef<HTMLDivElement>(null);
  const infrastructureMonitoringRef = useRef<HTMLDivElement>(null);
  const zabbixRef = useRef<HTMLDivElement>(null);
  const prometheusRef = useRef<HTMLDivElement>(null);
  const grafanaRef = useRef<HTMLDivElement>(null);
  const datadogRef = useRef<HTMLDivElement>(null);
  const applicationMonitoringRef = useRef<HTMLDivElement>(null);
  const jaegerRef = useRef<HTMLDivElement>(null);
  const newRelicRef = useRef<HTMLDivElement>(null);
  const appDatadogRef = useRef<HTMLDivElement>(null);
  const appPrometheusRef = useRef<HTMLDivElement>(null);
  const logsManagementRef = useRef<HTMLDivElement>(null);
  const elasticStackRef = useRef<HTMLDivElement>(null);
  const lokiRef = useRef<HTMLDivElement>(null);
  const papertailRef = useRef<HTMLDivElement>(null);
  const containerOrchestrationRef = useRef<HTMLDivElement>(null);
  const gkeEksAksRef = useRef<HTMLDivElement>(null);
  const dockerSwarmRef = useRef<HTMLDivElement>(null);
  const kubernetesRef = useRef<HTMLDivElement>(null);
  const artifactManagementRef = useRef<HTMLDivElement>(null);
  const artifactoryRef = useRef<HTMLDivElement>(null);
  const nexusRef = useRef<HTMLDivElement>(null);
  const cloudSmithRef = useRef<HTMLDivElement>(null);
  const gitOpsRef = useRef<HTMLDivElement>(null);
  const serviceMeshRef = useRef<HTMLDivElement>(null);
  const istioRef = useRef<HTMLDivElement>(null);
  const consulRef = useRef<HTMLDivElement>(null);
  const cloudDesignPatternsRef = useRef<HTMLDivElement>(null);
  const availabilityRef = useRef<HTMLDivElement>(null);
  const dataManagementRef = useRef<HTMLDivElement>(null);
  const designImplementationRef = useRef<HTMLDivElement>(null);
  const managementMonitoringRef = useRef<HTMLDivElement>(null);

  const references = {
    "Learn a Programming Language": "https://www.learnprogramming.com",
    Python: "https://www.python.org",
    Go: "https://golang.org",
    Ruby: "https://www.ruby-lang.org",
    Rust: "https://www.rust-lang.org",
    "Operating Systems": "https://www.operatingsystems.com",
    Linux: "https://www.linux.org",
    Unix: "https://www.unix.org",
    "Learn to live in Terminal": "https://www.terminalcommands.com",
    "Process Monitoring": "https://www.processmonitoring.com",
    "Performance Monitoring": "https://www.performancemonitoring.com",
    "Networking Tools": "https://www.networkingtools.com",
    "Text Manipulation": "https://www.textmanipulation.com",
    "Version Control Systems": "https://www.versioncontrolsystems.com",
    "VCS Hosting": "https://www.vcshosting.com",
    GitHub: "https://github.com",
    GitLab: "https://gitlab.com",
    Bitbucket: "https://bitbucket.org",
    Containers: "https://www.containers.com",
    LXC: "https://linuxcontainers.org",
    Docker: "https://www.docker.com",
    "Cloud Providers": "https://www.cloudproviders.com",
    AWS: "https://aws.amazon.com",
    Azure: "https://azure.microsoft.com",
    "Google Cloud": "https://cloud.google.com",
    "Networking, Security and Protocols": "https://www.networkingsecurityprotocols.com",
    FTP: "https://www.ftp.com",
    DNS: "https://www.dns.com",
    HTTPS: "https://www.https.com",
    SSH: "https://www.ssh.com",
    Serverless: "https://www.serverless.com",
    Cloudflare: "https://www.cloudflare.com",
    "AWS Lambda": "https://aws.amazon.com/lambda",
    "Infrastructure Provisioning": "https://www.infrastructureprovisioning.com",
    "AWS CDK": "https://aws.amazon.com/cdk",
    CloudFormation: "https://aws.amazon.com/cloudformation",
    Pulumi: "https://www.pulumi.com",
    "Configuration Management": "https://www.configurationmanagement.com",
    Ansible: "https://www.ansible.com",
    Chef: "https://www.chef.io",
    Puppet: "https://puppet.com",
    "Learn some CI/CD Tool": "https://www.cicdtools.com",
    "GitLab CI": "https://about.gitlab.com/stages-devops-lifecycle/continuous-integration",
    Jenkins: "https://www.jenkins.io",
    "GitHub Actions": "https://github.com/features/actions",
    "Travis CI": "https://travis-ci.org",
    "Secret Management": "https://www.secretmanagement.com",
    "Sealed Secrets": "https://github.com/bitnami-labs/sealed-secrets",
    "Cloud Specific Tools": "https://www.cloudspecifictools.com",
    "Infrastructure Monitoring": "https://www.infrastructuremonitoring.com",
    Zabbix: "https://www.zabbix.com",
    Prometheus: "https://prometheus.io",
    Grafana: "https://grafana.com",
    Datadog: "https://www.datadoghq.com",
    "Application Monitoring": "https://www.applicationmonitoring.com",
    Jaeger: "https://www.jaegertracing.io",
    "New Relic": "https://newrelic.com",
    "App Datadog": "https://www.datadoghq.com",
    "App Prometheus": "https://prometheus.io",
    "Logs Management": "https://www.logsmanagement.com",
    "Elastic Stack": "https://www.elastic.co/elastic-stack",
    Loki: "https://grafana.com/oss/loki",
    Papertail: "https://www.papertail.com",
    "Container Orchestration": "https://www.containerorchestration.com",
    "GKE/EKS/AKS": "https://cloud.google.com/kubernetes-engine",
    "Docker Swarm": "https://docs.docker.com/engine/swarm",
    Kubernetes: "https://kubernetes.io",
    "Artifact Management": "https://www.artifactmanagement.com",
    Artifactory: "https://jfrog.com/artifactory",
    Nexus: "https://www.sonatype.com/nexus/repository-oss",
    CloudSmith: "https://cloudsmith.io",
    "GitOps": "https://www.gitops.com",
    "Service Mesh": "https://www.servicemesh.com",
    Istio: "https://istio.io",
    Consul: "https://www.consul.io",
    "Cloud Design Patterns": "https://www.clouddesignpatterns.com",
    Availability: "https://www.availability.com",
    "Data Management": "https://www.datamanagement.com",
    "Design and Implementation": "https://www.designimplementation.com",
    "Management and Monitoring": "https://www.managementmonitoring.com",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-creme mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">DevOps Roadmap</h1>
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
      <div className="relative flex flex-col items-center justify-start w-full max-w-[2000px] p-10 mx-auto rounded-lg" ref={containerRef}>
        <div className="flex flex-col gap-8 items-center">
          <Circle ref={programmingLanguageRef} onClick={() => handleClick(references["Learn a Programming Language"])}>
            Learn a Programming Language
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={pythonRef} onClick={() => handleClick(references.Python)}>
              Python
            </Circle>
            <Circle ref={goRef} onClick={() => handleClick(references.Go)}>
              Go
            </Circle>
            <Circle ref={rubyRef} onClick={() => handleClick(references.Ruby)}>
              Ruby
            </Circle>
            <Circle ref={rustRef} onClick={() => handleClick(references.Rust)}>
              Rust
            </Circle>
          </div>
          <Circle ref={operatingSystemsRef} onClick={() => handleClick(references["Operating Systems"])}>
            Operating Systems
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={linuxRef} onClick={() => handleClick(references.Linux)}>
              Linux
            </Circle>
            <Circle ref={unixRef} onClick={() => handleClick(references.Unix)}>
              Unix
            </Circle>
          </div>
          <Circle ref={terminalRef} onClick={() => handleClick(references["Learn to live in Terminal"])}>
            Learn to live in Terminal
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={processMonitoringRef} onClick={() => handleClick(references["Process Monitoring"])}>
              Process Monitoring
            </Circle>
            <Circle ref={performanceMonitoringRef} onClick={() => handleClick(references["Performance Monitoring"])}>
              Performance Monitoring
            </Circle>
            <Circle ref={networkingToolsRef} onClick={() => handleClick(references["Networking Tools"])}>
              Networking Tools
            </Circle>
            <Circle ref={textManipulationRef} onClick={() => handleClick(references["Text Manipulation"])}>
              Text Manipulation
            </Circle>
          </div>
          <Circle ref={vcsRef} onClick={() => handleClick(references["Version Control Systems"])}>
            Version Control Systems
          </Circle>
          <Circle ref={vcsHostingRef} onClick={() => handleClick(references["VCS Hosting"])}>
            VCS Hosting
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={gitHubRef} onClick={() => handleClick(references.GitHub)}>
              GitHub
            </Circle>
            <Circle ref={gitLabRef} onClick={() => handleClick(references.GitLab)}>
              GitLab
            </Circle>
            <Circle ref={bitbucketRef} onClick={() => handleClick(references.Bitbucket)}>
              Bitbucket
            </Circle>
          </div>
          <Circle ref={containersRef} onClick={() => handleClick(references.Containers)}>
            Containers
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={lxcRef} onClick={() => handleClick(references.LXC)}>
              LXC
            </Circle>
            <Circle ref={dockerRef} onClick={() => handleClick(references.Docker)}>
              Docker
            </Circle>
          </div>
          <Circle ref={cloudProvidersRef} onClick={() => handleClick(references["Cloud Providers"])}>
            Cloud Providers
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={awsRef} onClick={() => handleClick(references.AWS)}>
              AWS
            </Circle>
            <Circle ref={azureRef} onClick={() => handleClick(references.Azure)}>
              Azure
            </Circle>
            <Circle ref={googleCloudRef} onClick={() => handleClick(references["Google Cloud"])}>
              Google Cloud
            </Circle>
          </div>
          <Circle ref={networkingSecurityProtocolsRef} onClick={() => handleClick(references["Networking, Security and Protocols"])}>
            Networking, Security and Protocols
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={ftpRef} onClick={() => handleClick(references.FTP)}>
              FTP/SFTP
            </Circle>
            <Circle ref={dnsRef} onClick={() => handleClick(references.DNS)}>
              DNS
            </Circle>
            <Circle ref={httpsRef} onClick={() => handleClick(references.HTTPS)}>
              HTTPS
            </Circle>
            <Circle ref={sshRef} onClick={() => handleClick(references.SSH)}>
              SSH
            </Circle>
          </div>
          <Circle ref={serverlessRef} onClick={() => handleClick(references.Serverless)}>
            Serverless
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={cloudflareRef} onClick={() => handleClick(references.Cloudflare)}>
              Cloudflare
            </Circle>
            <Circle ref={awsLambdaRef} onClick={() => handleClick(references["AWS Lambda"])}>
              AWS Lambda
            </Circle>
          </div>
          <Circle ref={infrastructureProvisioningRef} onClick={() => handleClick(references["Infrastructure Provisioning"])}>
            Infrastructure Provisioning
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={awsCdkRef} onClick={() => handleClick(references["AWS CDK"])}>
              AWS CDK
            </Circle>
            <Circle ref={cloudFormationRef} onClick={() => handleClick(references.CloudFormation)}>
              CloudFormation
            </Circle>
            <Circle ref={pulumiRef} onClick={() => handleClick(references.Pulumi)}>
              Pulumi
            </Circle>
          </div>
          <Circle ref={configurationManagementRef} onClick={() => handleClick(references["Configuration Management"])}>
            Configuration Management
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={ansibleRef} onClick={() => handleClick(references.Ansible)}>
              Ansible
            </Circle>
            <Circle ref={chefRef} onClick={() => handleClick(references.Chef)}>
              Chef
            </Circle>
            <Circle ref={puppetRef} onClick={() => handleClick(references.Puppet)}>
              Puppet
            </Circle>
          </div>
          <Circle ref={cicdRef} onClick={() => handleClick(references["Learn some CI/CD Tool"])}>
            Learn some CI/CD Tool
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={gitLabCIRef} onClick={() => handleClick(references["GitLab CI"])}>
              GitLab CI
            </Circle>
            <Circle ref={jenkinsRef} onClick={() => handleClick(references.Jenkins)}>
              Jenkins
            </Circle>
            <Circle ref={githubActionsRef} onClick={() => handleClick(references["GitHub Actions"])}>
              GitHub Actions
            </Circle>
            <Circle ref={travisCIRef} onClick={() => handleClick(references["Travis CI"])}>
              Travis CI
            </Circle>
          </div>
          <Circle ref={secretManagementRef} onClick={() => handleClick(references["Secret Management"])}>
            Secret Management
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={sealedSecretsRef} onClick={() => handleClick(references["Sealed Secrets"])}>
              Sealed Secrets
            </Circle>
            <Circle ref={cloudSpecificToolsRef} onClick={() => handleClick(references["Cloud Specific Tools"])}>
              Cloud Specific Tools
            </Circle>
          </div>
          <Circle ref={infrastructureMonitoringRef} onClick={() => handleClick(references["Infrastructure Monitoring"])}>
            Infrastructure Monitoring
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={zabbixRef} onClick={() => handleClick(references.Zabbix)}>
              Zabbix
            </Circle>
            <Circle ref={prometheusRef} onClick={() => handleClick(references.Prometheus)}>
              Prometheus
            </Circle>
            <Circle ref={grafanaRef} onClick={() => handleClick(references.Grafana)}>
              Grafana
            </Circle>
            <Circle ref={datadogRef} onClick={() => handleClick(references.Datadog)}>
              Datadog
            </Circle>
          </div>
          <Circle ref={applicationMonitoringRef} onClick={() => handleClick(references["Application Monitoring"])}>
            Application Monitoring
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={jaegerRef} onClick={() => handleClick(references.Jaeger)}>
              Jaeger
            </Circle>
            <Circle ref={newRelicRef} onClick={() => handleClick(references["New Relic"])}>
              New Relic
            </Circle>
            <Circle ref={appDatadogRef} onClick={() => handleClick(references["App Datadog"])}>
              Datadog
            </Circle>
            <Circle ref={appPrometheusRef} onClick={() => handleClick(references["App Prometheus"])}>
              Prometheus
            </Circle>
          </div>
          <Circle ref={logsManagementRef} onClick={() => handleClick(references["Logs Management"])}>
            Logs Management
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={elasticStackRef} onClick={() => handleClick(references["Elastic Stack"])}>
              Elastic Stack
            </Circle>
            <Circle ref={lokiRef} onClick={() => handleClick(references.Loki)}>
              Loki
            </Circle>
            <Circle ref={papertailRef} onClick={() => handleClick(references.Papertail)}>
              Papertail
            </Circle>
          </div>
          <Circle ref={containerOrchestrationRef} onClick={() => handleClick(references["Container Orchestration"])}>
            Container Orchestration
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={gkeEksAksRef} onClick={() => handleClick(references["GKE/EKS/AKS"])}>
              GKE/EKS/AKS
            </Circle>
            <Circle ref={dockerSwarmRef} onClick={() => handleClick(references["Docker Swarm"])}>
              Docker Swarm
            </Circle>
            <Circle ref={kubernetesRef} onClick={() => handleClick(references.Kubernetes)}>
              Kubernetes
            </Circle>
          </div>
          <Circle ref={artifactManagementRef} onClick={() => handleClick(references["Artifact Management"])}>
            Artifact Management
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={artifactoryRef} onClick={() => handleClick(references.Artifactory)}>
              Artifactory
            </Circle>
            <Circle ref={nexusRef} onClick={() => handleClick(references.Nexus)}>
              Nexus
            </Circle>
            <Circle ref={cloudSmithRef} onClick={() => handleClick(references.CloudSmith)}>
              Cloud Smith
            </Circle>
          </div>
          <Circle ref={gitOpsRef} onClick={() => handleClick(references["GitOps"])}>
            GitOps
          </Circle>
          <Circle ref={serviceMeshRef} onClick={() => handleClick(references["Service Mesh"])}>
            Service Mesh
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={istioRef} onClick={() => handleClick(references.Istio)}>
              Istio
            </Circle>
            <Circle ref={consulRef} onClick={() => handleClick(references.Consul)}>
              Consul
            </Circle>
          </div>
          <Circle ref={cloudDesignPatternsRef} onClick={() => handleClick(references["Cloud Design Patterns"])}>
            Cloud Design Patterns
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle ref={availabilityRef} onClick={() => handleClick(references.Availability)}>
              Availability
            </Circle>
            <Circle ref={dataManagementRef} onClick={() => handleClick(references["Data Management"])}>
              Data Management
            </Circle>
            <Circle ref={designImplementationRef} onClick={() => handleClick(references["Design and Implementation"])}>
              Design and Implementation
            </Circle>
            <Circle ref={managementMonitoringRef} onClick={() => handleClick(references["Management and Monitoring"])}>
              Management and Monitoring
            </Circle>
          </div>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={programmingLanguageRef} toRef={pythonRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={programmingLanguageRef} toRef={goRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={programmingLanguageRef} toRef={rubyRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={programmingLanguageRef} toRef={rustRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={programmingLanguageRef} toRef={operatingSystemsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={operatingSystemsRef} toRef={linuxRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={operatingSystemsRef} toRef={unixRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={operatingSystemsRef} toRef={terminalRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={terminalRef} toRef={processMonitoringRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={terminalRef} toRef={performanceMonitoringRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={terminalRef} toRef={networkingToolsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={terminalRef} toRef={textManipulationRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={terminalRef} toRef={vcsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={vcsRef} toRef={vcsHostingRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={vcsHostingRef} toRef={gitHubRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={vcsHostingRef} toRef={gitLabRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={vcsHostingRef} toRef={bitbucketRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={vcsHostingRef} toRef={containersRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={containersRef} toRef={lxcRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={containersRef} toRef={dockerRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={containersRef} toRef={cloudProvidersRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudProvidersRef} toRef={awsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudProvidersRef} toRef={azureRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudProvidersRef} toRef={googleCloudRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudProvidersRef} toRef={networkingSecurityProtocolsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={networkingSecurityProtocolsRef} toRef={ftpRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={networkingSecurityProtocolsRef} toRef={dnsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={networkingSecurityProtocolsRef} toRef={httpsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={networkingSecurityProtocolsRef} toRef={sshRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={networkingSecurityProtocolsRef} toRef={serverlessRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={serverlessRef} toRef={cloudflareRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={serverlessRef} toRef={awsLambdaRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={serverlessRef} toRef={infrastructureProvisioningRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureProvisioningRef} toRef={awsCdkRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureProvisioningRef} toRef={cloudFormationRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureProvisioningRef} toRef={pulumiRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureProvisioningRef} toRef={configurationManagementRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={configurationManagementRef} toRef={ansibleRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={configurationManagementRef} toRef={chefRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={configurationManagementRef} toRef={puppetRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={configurationManagementRef} toRef={cicdRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cicdRef} toRef={gitLabCIRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cicdRef} toRef={jenkinsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cicdRef} toRef={githubActionsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cicdRef} toRef={travisCIRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cicdRef} toRef={secretManagementRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={secretManagementRef} toRef={sealedSecretsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={secretManagementRef} toRef={cloudSpecificToolsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={secretManagementRef} toRef={infrastructureMonitoringRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureMonitoringRef} toRef={zabbixRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureMonitoringRef} toRef={prometheusRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureMonitoringRef} toRef={grafanaRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureMonitoringRef} toRef={datadogRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={infrastructureMonitoringRef} toRef={applicationMonitoringRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={applicationMonitoringRef} toRef={jaegerRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={applicationMonitoringRef} toRef={newRelicRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={applicationMonitoringRef} toRef={appDatadogRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={applicationMonitoringRef} toRef={appPrometheusRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={applicationMonitoringRef} toRef={logsManagementRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={logsManagementRef} toRef={elasticStackRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={logsManagementRef} toRef={lokiRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={logsManagementRef} toRef={papertailRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={logsManagementRef} toRef={containerOrchestrationRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={containerOrchestrationRef} toRef={gkeEksAksRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={containerOrchestrationRef} toRef={dockerSwarmRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={containerOrchestrationRef} toRef={kubernetesRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={containerOrchestrationRef} toRef={artifactManagementRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={artifactManagementRef} toRef={artifactoryRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={artifactManagementRef} toRef={nexusRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={artifactManagementRef} toRef={cloudSmithRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={artifactManagementRef} toRef={gitOpsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={gitOpsRef} toRef={serviceMeshRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={serviceMeshRef} toRef={istioRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={serviceMeshRef} toRef={consulRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={serviceMeshRef} toRef={cloudDesignPatternsRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudDesignPatternsRef} toRef={availabilityRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudDesignPatternsRef} toRef={dataManagementRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudDesignPatternsRef} toRef={designImplementationRef} />
        <AnimatedBeam duration={10} containerRef={containerRef} fromRef={cloudDesignPatternsRef} toRef={managementMonitoringRef} />
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
        <DevOpsRoadmap />
      </div>
    </>
  );
}
