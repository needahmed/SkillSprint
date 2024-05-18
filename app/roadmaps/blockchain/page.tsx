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

export function BlockchainRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const basicBlockchainKnowledgeRef = useRef<HTMLDivElement>(null);
  const blockchainStructureRef = useRef<HTMLDivElement>(null);
  const blockchainOperationsRef = useRef<HTMLDivElement>(null);
  const applicationsUsesRef = useRef<HTMLDivElement>(null);
  const generalBlockchainKnowledgeRef = useRef<HTMLDivElement>(null);
  const cryptographyRef = useRef<HTMLDivElement>(null);
  const consensusProtocolsRef = useRef<HTMLDivElement>(null);
  const storageRef = useRef<HTMLDivElement>(null);
  const blockchainInteroperabilityRef = useRef<HTMLDivElement>(null);
  const blockchainsRef = useRef<HTMLDivElement>(null);
  const solanaRef = useRef<HTMLDivElement>(null);
  const tonRef = useRef<HTMLDivElement>(null);
  const evmBasedRef = useRef<HTMLDivElement>(null);
  const l2BlockchainsRef = useRef<HTMLDivElement>(null);
  const oraclesRef = useRef<HTMLDivElement>(null);
  const hybridSmartContractsRef = useRef<HTMLDivElement>(null);
  const chainlinkRef = useRef<HTMLDivElement>(null);
  const oracleNetworksRef = useRef<HTMLDivElement>(null);
  const smartContractsRef = useRef<HTMLDivElement>(null);
  const ercTokensRef = useRef<HTMLDivElement>(null);
  const cryptoWalletsRef = useRef<HTMLDivElement>(null);
  const cryptoFaucetsRef = useRef<HTMLDivElement>(null);
  const decentralizedStorageRef = useRef<HTMLDivElement>(null);
  const smartContractFrameworksRef = useRef<HTMLDivElement>(null);
  const hardhatRef = useRef<HTMLDivElement>(null);
  const brownieRef = useRef<HTMLDivElement>(null);
  const truffleRef = useRef<HTMLDivElement>(null);
  const foundryRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const practicesRef = useRef<HTMLDivElement>(null);
  const fuzzTestingRef = useRef<HTMLDivElement>(null);
  const commonThreatVectorsRef = useRef<HTMLDivElement>(null);
  const sourceRandomnessAttacksRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const slitherRef = useRef<HTMLDivElement>(null);
  const manticoreRef = useRef<HTMLDivElement>(null);
  const managementPlatformsRef = useRef<HTMLDivElement>(null);
  const openzeppelinRef = useRef<HTMLDivElement>(null);
  const versionControlSystemsRef = useRef<HTMLDivElement>(null);
  const gitRef = useRef<HTMLDivElement>(null);
  const repoHostingServicesRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);
  const gitlabRef = useRef<HTMLDivElement>(null);
  const bitbucketRef = useRef<HTMLDivElement>(null);
  const dappsRef = useRef<HTMLDivElement>(null);
  const clientLibrariesRef = useRef<HTMLDivElement>(null);
  const clientNodesRef = useRef<HTMLDivElement>(null);
  const frontEndFrameworksRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const angularRef = useRef<HTMLDivElement>(null);
  const vueRef = useRef<HTMLDivElement>(null);
  const nodeAsAServiceRef = useRef<HTMLDivElement>(null);
  const alchemyRef = useRef<HTMLDivElement>(null);
  const infuraRef = useRef<HTMLDivElement>(null);
  const moralisNodeRef = useRef<HTMLDivElement>(null);
  const quicknodeRef = useRef<HTMLDivElement>(null);
  const supportingLanguagesRef = useRef<HTMLDivElement>(null);
  const javascriptRef = useRef<HTMLDivElement>(null);
  const pythonRef = useRef<HTMLDivElement>(null);
  const goRef = useRef<HTMLDivElement>(null);
  const buildingForScaleRef = useRef<HTMLDivElement>(null);
  const statePaymentChannelsRef = useRef<HTMLDivElement>(null);
  const validiumRef = useRef<HTMLDivElement>(null);
  const ethereum2Ref = useRef<HTMLDivElement>(null);
  const sidechainsRef = useRef<HTMLDivElement>(null);

  const references = {
    "Basic Blockchain Knowledge":
      "https://www.investopedia.com/terms/b/blockchain.asp",
    "Blockchain Structure":
      "https://www.investopedia.com/terms/b/blockchain.asp",
    "Basic Blockchain Operations":
      "https://www.investopedia.com/terms/b/blockchain.asp",
    "Applications and Uses":
      "https://www.ibm.com/blockchain/what-is-blockchain",
    Cryptography: "https://en.wikipedia.org/wiki/Cryptography",
    "Consensus Protocols":
      "https://en.wikipedia.org/wiki/Consensus_(computer_science)",
    Storage: "https://www.ibm.com/blockchain/what-is-blockchain",
    "Blockchain Interoperability":
      "https://en.wikipedia.org/wiki/Interoperability",
    Solana: "https://solana.com/",
    TON: "https://ton.org/",
    "EVM-Based": "https://ethereum.org/en/developers/docs/evm/",
    "L2 Blockchains":
      "https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/",
    Oracles: "https://en.wikipedia.org/wiki/Blockchain_oracle",
    "Hybrid Smart Contracts": "https://chain.link/whitepaper/",
    Chainlink: "https://chain.link/",
    "Oracle Networks": "https://en.wikipedia.org/wiki/Blockchain_oracle",
    "ERC Tokens": "https://ethereum.org/en/developers/docs/standards/tokens/",
    "Crypto Wallets":
      "https://www.investopedia.com/best-bitcoin-wallets-5070283",
    "Crypto Faucets": "https://en.bitcoin.it/wiki/Faucet",
    "Decentralized Storage": "https://ethereum.org/en/developers/docs/storage/",
    Hardhat: "https://hardhat.org/",
    Brownie: "https://eth-brownie.readthedocs.io/en/stable/",
    Truffle: "https://www.trufflesuite.com/truffle",
    Foundry: "https://github.com/gakonst/foundry",
    Practices: "https://en.wikipedia.org/wiki/Blockchain_security",
    "Fuzz Testing & Static Analysis": "https://en.wikipedia.org/wiki/Fuzzing",
    "Common Threat Vectors": "https://owasp.org/www-community/attacks/",
    "Source of Randomness Attacks": "https://eprint.iacr.org/2019/744.pdf",
    Slither: "https://github.com/crytic/slither",
    Manticore: "https://github.com/trailofbits/manticore",
    OpenZeppelin: "https://openzeppelin.com/",
    "Version Control Systems": "https://git-scm.com/",
    GitHub: "https://github.com/",
    GitLab: "https://about.gitlab.com/",
    BitBucket: "https://bitbucket.org/product",
    Dapps: "https://ethereum.org/en/developers/docs/dapps/",
    "Client Libraries":
      "https://ethereum.org/en/developers/docs/apis/javascript/",
    "Client Nodes":
      "https://ethereum.org/en/developers/docs/nodes-and-clients/",
    React: "https://reactjs.org/",
    Angular: "https://angular.io/",
    Vue: "https://vuejs.org/",
    "Node as a Service": "https://infura.io/",
    Alchemy: "https://www.alchemy.com/",
    Infura: "https://infura.io/",
    Moralis: "https://moralis.io/",
    QuickNode: "https://www.quicknode.com/",
    "Supporting Languages":
      "https://ethereum.org/en/developers/docs/programming-languages/",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Python: "https://www.python.org/",
    Go: "https://golang.org/",
    "Building for Scale": "https://ethereum.org/en/developers/docs/scaling/",
    "State and Payment Channels":
      "https://ethereum.org/en/developers/docs/scaling/state_channels/",
    Validium: "https://ethereum.org/en/developers/docs/scaling/validium/",
    "Ethereum 2.0": "https://ethereum.org/en/eth2/",
    Sidechains: "https://ethereum.org/en/developers/docs/scaling/sidechains/",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-creme mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        Blockchain Roadmap
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
            ref={basicBlockchainKnowledgeRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Basic Blockchain Knowledge
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={blockchainStructureRef}
              onClick={() => handleClick(references["Blockchain Structure"])}
            >
              Blockchain Structure
            </Circle>
            <Circle
              ref={blockchainOperationsRef}
              onClick={() =>
                handleClick(references["Basic Blockchain Operations"])
              }
            >
              Basic Blockchain Operations
            </Circle>
            <Circle
              ref={applicationsUsesRef}
              onClick={() => handleClick(references["Applications and Uses"])}
            >
              Applications and Uses
            </Circle>
          </div>
          <Circle
            ref={generalBlockchainKnowledgeRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            General Blockchain Knowledge
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={cryptographyRef}
              onClick={() => handleClick(references["Cryptography"])}
            >
              Cryptography
            </Circle>
            <Circle
              ref={consensusProtocolsRef}
              onClick={() => handleClick(references["Consensus Protocols"])}
            >
              Consensus Protocols
            </Circle>
            <Circle
              ref={storageRef}
              onClick={() => handleClick(references["Storage"])}
            >
              Storage
            </Circle>
            <Circle
              ref={blockchainInteroperabilityRef}
              onClick={() =>
                handleClick(references["Blockchain Interoperability"])
              }
            >
              Blockchain Interoperability
            </Circle>
          </div>
          <Circle
            ref={blockchainsRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Blockchains
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={solanaRef}
              onClick={() => handleClick(references["Solana"])}
            >
              Solana
            </Circle>
            <Circle ref={tonRef} onClick={() => handleClick(references["TON"])}>
              TON
            </Circle>
            <Circle
              ref={evmBasedRef}
              onClick={() => handleClick(references["EVM-Based"])}
            >
              EVM-Based
            </Circle>
            <Circle
              ref={l2BlockchainsRef}
              onClick={() => handleClick(references["L2 Blockchains"])}
            >
              L2 Blockchains
            </Circle>
          </div>
          <Circle
            ref={oraclesRef}
            onClick={() => handleClick(references["Oracles"])}
          >
            Oracles
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={hybridSmartContractsRef}
              onClick={() => handleClick(references["Hybrid Smart Contracts"])}
            >
              Hybrid Smart Contracts
            </Circle>
            <Circle
              ref={chainlinkRef}
              onClick={() => handleClick(references["Chainlink"])}
            >
              Chainlink
            </Circle>
            <Circle
              ref={oracleNetworksRef}
              onClick={() => handleClick(references["Oracle Networks"])}
            >
              Oracle Networks
            </Circle>
          </div>
          <Circle
            ref={smartContractsRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Smart Contracts
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={ercTokensRef}
              onClick={() => handleClick(references["ERC Tokens"])}
            >
              ERC Tokens
            </Circle>
            <Circle
              ref={cryptoWalletsRef}
              onClick={() => handleClick(references["Crypto Wallets"])}
            >
              Crypto Wallets
            </Circle>
            <Circle
              ref={cryptoFaucetsRef}
              onClick={() => handleClick(references["Crypto Faucets"])}
            >
              Crypto Faucets
            </Circle>
            <Circle
              ref={decentralizedStorageRef}
              onClick={() => handleClick(references["Decentralized Storage"])}
            >
              Decentralized Storage
            </Circle>
          </div>
          <Circle
            ref={smartContractFrameworksRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Smart Contract Frameworks
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={hardhatRef}
              onClick={() => handleClick(references["Hardhat"])}
            >
              Hardhat
            </Circle>
            <Circle
              ref={brownieRef}
              onClick={() => handleClick(references["Brownie"])}
            >
              Brownie
            </Circle>
            <Circle
              ref={truffleRef}
              onClick={() => handleClick(references["Truffle"])}
            >
              Truffle
            </Circle>
            <Circle
              ref={foundryRef}
              onClick={() => handleClick(references["Foundry"])}
            >
              Foundry
            </Circle>
          </div>
          <Circle
            ref={securityRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Security
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={practicesRef}
              onClick={() => handleClick(references["Practices"])}
            >
              Practices
            </Circle>
            <Circle
              ref={fuzzTestingRef}
              onClick={() =>
                handleClick(references["Fuzz Testing & Static Analysis"])
              }
            >
              Fuzz Testing & Static Analysis
            </Circle>
            <Circle
              ref={commonThreatVectorsRef}
              onClick={() => handleClick(references["Common Threat Vectors"])}
            >
              Common Threat Vectors
            </Circle>
            <Circle
              ref={sourceRandomnessAttacksRef}
              onClick={() =>
                handleClick(references["Source of Randomness Attacks"])
              }
            >
              Source of Randomness Attacks
            </Circle>
          </div>
          <Circle
            ref={toolsRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Tools
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={slitherRef}
              onClick={() => handleClick(references["Slither"])}
            >
              Slither
            </Circle>
            <Circle
              ref={manticoreRef}
              onClick={() => handleClick(references["Manticore"])}
            >
              Manticore
            </Circle>
          </div>
          <Circle
            ref={managementPlatformsRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Management Platforms
          </Circle>
          <Circle
            ref={openzeppelinRef}
            onClick={() => handleClick(references["OpenZeppelin"])}
          >
            OpenZeppelin
          </Circle>
          <Circle
            ref={versionControlSystemsRef}
            onClick={() => handleClick(references["Version Control Systems"])}
          >
            Version Control Systems
          </Circle>

          <Circle
            ref={repoHostingServicesRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Repo Hosting Services
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={githubRef}
              onClick={() => handleClick(references["GitHub"])}
            >
              GitHub
            </Circle>
            <Circle
              ref={gitlabRef}
              onClick={() => handleClick(references["GitLab"])}
            >
              GitLab
            </Circle>
            <Circle
              ref={bitbucketRef}
              onClick={() => handleClick(references["BitBucket"])}
            >
              BitBucket
            </Circle>
          </div>
          <Circle
            ref={dappsRef}
            onClick={() => handleClick(references["Dapps"])}
          >
            dApps - Decentralized Applications
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={clientLibrariesRef}
              onClick={() => handleClick(references["Client Libraries"])}
            >
              Client Libraries
            </Circle>
            <Circle
              ref={clientNodesRef}
              onClick={() => handleClick(references["Client Nodes"])}
            >
              Client Nodes
            </Circle>
          </div>
          <Circle
            ref={frontEndFrameworksRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Frontend Frameworks
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={reactRef}
              onClick={() => handleClick(references["React"])}
            >
              React
            </Circle>
            <Circle
              ref={angularRef}
              onClick={() => handleClick(references["Angular"])}
            >
              Angular
            </Circle>
            <Circle ref={vueRef} onClick={() => handleClick(references["Vue"])}>
              Vue
            </Circle>
          </div>
          <Circle
            ref={nodeAsAServiceRef}
            onClick={() =>
              handleClick(references["Basic Blockchain Knowledge"])
            }
          >
            Node as a Service
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={alchemyRef}
              onClick={() => handleClick(references["Alchemy"])}
            >
              Alchemy
            </Circle>
            <Circle
              ref={infuraRef}
              onClick={() => handleClick(references["Infura"])}
            >
              Infura
            </Circle>
            <Circle
              ref={moralisNodeRef}
              onClick={() => handleClick(references["Moralis"])}
            >
              Moralis
            </Circle>
            <Circle
              ref={quicknodeRef}
              onClick={() => handleClick(references["QuickNode"])}
            >
              QuickNode
            </Circle>
          </div>
          <Circle
            ref={supportingLanguagesRef}
            onClick={() => handleClick(references["Supporting Languages"])}
          >
            Supporting Languages
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={javascriptRef}
              onClick={() => handleClick(references["JavaScript"])}
            >
              JavaScript
            </Circle>
            <Circle
              ref={pythonRef}
              onClick={() => handleClick(references["Python"])}
            >
              Python
            </Circle>
            <Circle ref={goRef} onClick={() => handleClick(references["Go"])}>
              Go
            </Circle>
          </div>
          <Circle
            ref={buildingForScaleRef}
            onClick={() => handleClick(references["Building for Scale"])}
          >
            Building for Scale
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={statePaymentChannelsRef}
              onClick={() =>
                handleClick(references["State and Payment Channels"])
              }
            >
              State and Payment Channels
            </Circle>
            <Circle
              ref={validiumRef}
              onClick={() => handleClick(references["Validium"])}
            >
              Validium
            </Circle>
            <Circle
              ref={ethereum2Ref}
              onClick={() => handleClick(references["Ethereum 2.0"])}
            >
              Ethereum 2.0
            </Circle>
            <Circle
              ref={sidechainsRef}
              onClick={() => handleClick(references["Sidechains"])}
            >
              Sidechains
            </Circle>
          </div>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicBlockchainKnowledgeRef}
          toRef={blockchainStructureRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicBlockchainKnowledgeRef}
          toRef={blockchainOperationsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicBlockchainKnowledgeRef}
          toRef={applicationsUsesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={basicBlockchainKnowledgeRef}
          toRef={generalBlockchainKnowledgeRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={generalBlockchainKnowledgeRef}
          toRef={cryptographyRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={generalBlockchainKnowledgeRef}
          toRef={consensusProtocolsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={generalBlockchainKnowledgeRef}
          toRef={storageRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={generalBlockchainKnowledgeRef}
          toRef={blockchainInteroperabilityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={generalBlockchainKnowledgeRef}
          toRef={blockchainsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={blockchainsRef}
          toRef={solanaRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={blockchainsRef}
          toRef={tonRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={blockchainsRef}
          toRef={evmBasedRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={blockchainsRef}
          toRef={l2BlockchainsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={blockchainsRef}
          toRef={oraclesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={oraclesRef}
          toRef={hybridSmartContractsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={oraclesRef}
          toRef={chainlinkRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={oraclesRef}
          toRef={oracleNetworksRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={oraclesRef}
          toRef={smartContractsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractsRef}
          toRef={ercTokensRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractsRef}
          toRef={cryptoWalletsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractsRef}
          toRef={cryptoFaucetsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractsRef}
          toRef={decentralizedStorageRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractsRef}
          toRef={smartContractFrameworksRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractFrameworksRef}
          toRef={hardhatRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractFrameworksRef}
          toRef={brownieRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractFrameworksRef}
          toRef={truffleRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractFrameworksRef}
          toRef={foundryRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={smartContractFrameworksRef}
          toRef={securityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={practicesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={practicesRef}
          toRef={fuzzTestingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={practicesRef}
          toRef={commonThreatVectorsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={practicesRef}
          toRef={sourceRandomnessAttacksRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={toolsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={toolsRef}
          toRef={slitherRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={toolsRef}
          toRef={manticoreRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={securityRef}
          toRef={managementPlatformsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={managementPlatformsRef}
          toRef={openzeppelinRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={managementPlatformsRef}
          toRef={versionControlSystemsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={versionControlSystemsRef}
          toRef={gitRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={versionControlSystemsRef}
          toRef={repoHostingServicesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={repoHostingServicesRef}
          toRef={githubRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={repoHostingServicesRef}
          toRef={gitlabRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={repoHostingServicesRef}
          toRef={bitbucketRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={repoHostingServicesRef}
          toRef={dappsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dappsRef}
          toRef={clientLibrariesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dappsRef}
          toRef={clientNodesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dappsRef}
          toRef={frontEndFrameworksRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={frontEndFrameworksRef}
          toRef={reactRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={frontEndFrameworksRef}
          toRef={angularRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={frontEndFrameworksRef}
          toRef={vueRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={frontEndFrameworksRef}
          toRef={nodeAsAServiceRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={nodeAsAServiceRef}
          toRef={alchemyRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={nodeAsAServiceRef}
          toRef={infuraRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={nodeAsAServiceRef}
          toRef={moralisNodeRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={nodeAsAServiceRef}
          toRef={quicknodeRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={nodeAsAServiceRef}
          toRef={supportingLanguagesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={supportingLanguagesRef}
          toRef={javascriptRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={supportingLanguagesRef}
          toRef={pythonRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={supportingLanguagesRef}
          toRef={goRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={supportingLanguagesRef}
          toRef={buildingForScaleRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={buildingForScaleRef}
          toRef={statePaymentChannelsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={buildingForScaleRef}
          toRef={validiumRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={buildingForScaleRef}
          toRef={ethereum2Ref}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={buildingForScaleRef}
          toRef={sidechainsRef}
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
        <BlockchainRoadmap />
      </div>
    </>
  );
}
