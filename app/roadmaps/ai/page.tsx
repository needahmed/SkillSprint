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

export function AIRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mathRef = useRef<HTMLDivElement>(null);
  const linearAlgebraRef = useRef<HTMLDivElement>(null);
  const calculusRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsCLTRef = useRef<HTMLDivElement>(null);
  const hypothesisTestingRef = useRef<HTMLDivElement>(null);
  const probabilitySamplingRef = useRef<HTMLDivElement>(null);
  const abTestingRef = useRef<HTMLDivElement>(null);
  const econometricsRef = useRef<HTMLDivElement>(null);
  const preReqEconometricsRef = useRef<HTMLDivElement>(null);
  const regressionsRef = useRef<HTMLDivElement>(null);
  const codingRef = useRef<HTMLDivElement>(null);
  const learnPythonRef = useRef<HTMLDivElement>(null);
  const dataStructuresRef = useRef<HTMLDivElement>(null);
  const learnSQLRef = useRef<HTMLDivElement>(null);
  const edaRef = useRef<HTMLDivElement>(null);
  const dataUnderstandingRef = useRef<HTMLDivElement>(null);
  const dataAnalysisRef = useRef<HTMLDivElement>(null);
  const dataVisualizationRef = useRef<HTMLDivElement>(null);
  const mlRef = useRef<HTMLDivElement>(null);
  const classicMLRef = useRef<HTMLDivElement>(null);
  const advancedMLRef = useRef<HTMLDivElement>(null);
  const deepLearningRef = useRef<HTMLDivElement>(null);
  const nnRef = useRef<HTMLDivElement>(null);
  const cnnRef = useRef<HTMLDivElement>(null);
  const rnnRef = useRef<HTMLDivElement>(null);
  const lstmRef = useRef<HTMLDivElement>(null);
  const reinforcementLearningRef = useRef<HTMLDivElement>(null);
  const nlpRef = useRef<HTMLDivElement>(null);
  const computerVisionRef = useRef<HTMLDivElement>(null);
  const mlOpsRef = useRef<HTMLDivElement>(null);
  const deploymentRef = useRef<HTMLDivElement>(null);

  const references = {
    Mathematics: "https://www.khanacademy.org/math",
    "Linear Algebra, Calculus, Mathematical Analysis":
      "https://www.coursera.org/learn/mathematics-machine-learning",
    "Differential Calculus":
      "https://www.coursera.org/learn/algebra-differential-calculus",
    Statistics: "https://www.khanacademy.org/math/statistics-probability",
    "Statistics, CLT": "https://www.coursera.org/learn/intro-statistics",
    "Hypothesis Testing": "https://www.coursera.org/learn/hypothesis-testing",
    "Probability and Sampling":
      "https://www.coursera.org/learn/probability-statistics",
    "AB Testing": "https://www.coursera.org/learn/ab-testing",
    Econometrics:
      "https://www.khanacademy.org/economics-finance-domain/macroeconomics",
    "Pre-requisites of Econometrics":
      "https://www.coursera.org/learn/fundamentals-econometrics",
    "Regressions, time series, fitting distributions":
      "https://www.coursera.org/learn/econometrics",
    Coding: "https://www.kaggle.com/learn/python",
    "Learn Python Programming Language": "https://www.kaggle.com/learn/python",
    "Data Structures and Algorithms (Python)":
      "https://www.khanacademy.org/computing/computer-science/algorithms",
    "Learn SQL":
      "https://www.khanacademy.org/computing/computer-programming/sql",
    "Exploratory Data Analysis (EDA)": "https://www.kaggle.com/learn/eda",
    "Data understanding, Data Analysis, Visualization":
      "https://www.coursera.org/learn/data-analysis-visualization",
    "Machine Learning": "https://www.coursera.org/learn/machine-learning",
    "Classic ML (Sup. and Unsup.)":
      "https://www.coursera.org/learn/machine-learning",
    "Advanced ML (Ensembles, NNs)":
      "https://www.coursera.org/learn/advanced-machine-learning",
    "Deep Learning": "https://www.coursera.org/specializations/deep-learning",
    "Fully connected NN, CNN, RNN, LSTM":
      "https://www.coursera.org/specializations/deep-learning",
    "Reinforcement Learning":
      "https://www.coursera.org/learn/reinforcement-learning",
    "Natural Language Processing (NLP)":
      "https://www.coursera.org/specializations/natural-language-processing",
    "Computer Vision":
      "https://www.coursera.org/specializations/computer-vision",
    MLOps: "https://www.coursera.org/specializations/mlops",
    "Deployment models, CI/CD":
      "https://www.coursera.org/specializations/mlops",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-creme mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        AI Roadmap
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
            ref={mathRef}
            onClick={() => handleClick(references["Mathematics"])}
          >
            Mathematics
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={linearAlgebraRef}
              onClick={() =>
                handleClick(
                  references["Linear Algebra, Calculus, Mathematical Analysis"]
                )
              }
            >
              Linear Algebra, Calculus
            </Circle>
            <Circle
              ref={calculusRef}
              onClick={() => handleClick(references["Differential Calculus"])}
            >
              Differential Calculus
            </Circle>
          </div>
          <Circle
            ref={statsRef}
            onClick={() => handleClick(references["Statistics"])}
          >
            Statistics
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={statsCLTRef}
              onClick={() => handleClick(references["Statistics, CLT"])}
            >
              Statistics, CLT
            </Circle>
            <Circle
              ref={hypothesisTestingRef}
              onClick={() => handleClick(references["Hypothesis Testing"])}
            >
              Hypothesis Testing
            </Circle>
            <Circle
              ref={probabilitySamplingRef}
              onClick={() =>
                handleClick(references["Probability and Sampling"])
              }
            >
              Probability and Sampling
            </Circle>
            <Circle
              ref={abTestingRef}
              onClick={() => handleClick(references["AB Testing"])}
            >
              AB Testing
            </Circle>
          </div>
          <Circle
            ref={econometricsRef}
            onClick={() => handleClick(references["Econometrics"])}
          >
            Econometrics
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={preReqEconometricsRef}
              onClick={() =>
                handleClick(references["Pre-requisites of Econometrics"])
              }
            >
              Pre-requisites of Econometrics
            </Circle>
            <Circle
              ref={regressionsRef}
              onClick={() =>
                handleClick(
                  references["Regressions, time series, fitting distributions"]
                )
              }
            >
              Regressions, time series
            </Circle>
          </div>
          <Circle
            ref={codingRef}
            onClick={() => handleClick(references["Coding"])}
          >
            Coding
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={learnPythonRef}
              onClick={() =>
                handleClick(references["Learn Python Programming Language"])
              }
            >
              Learn Python
            </Circle>
            <Circle
              ref={dataStructuresRef}
              onClick={() =>
                handleClick(
                  references["Data Structures and Algorithms (Python)"]
                )
              }
            >
              Data Structures and Algorithms
            </Circle>
            <Circle
              ref={learnSQLRef}
              onClick={() => handleClick(references["Learn SQL"])}
            >
              Learn SQL
            </Circle>
          </div>
          <Circle
            ref={edaRef}
            onClick={() =>
              handleClick(references["Exploratory Data Analysis (EDA)"])
            }
          >
            Exploratory Data Analysis (EDA)
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={dataUnderstandingRef}
              onClick={() =>
                handleClick(
                  references["Data understanding, Data Analysis, Visualization"]
                )
              }
            >
              Data Understanding
            </Circle>
            <Circle
              ref={dataAnalysisRef}
              onClick={() =>
                handleClick(
                  references["Data understanding, Data Analysis, Visualization"]
                )
              }
            >
              Data Analysis
            </Circle>
            <Circle
              ref={dataVisualizationRef}
              onClick={() =>
                handleClick(
                  references["Data understanding, Data Analysis, Visualization"]
                )
              }
            >
              Visualization
            </Circle>
          </div>
          <Circle
            ref={mlRef}
            onClick={() => handleClick(references["Machine Learning"])}
          >
            Machine Learning
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={classicMLRef}
              onClick={() =>
                handleClick(references["Classic ML (Sup. and Unsup.)"])
              }
            >
              Classic ML (Sup. and Unsup.)
            </Circle>
            <Circle
              ref={advancedMLRef}
              onClick={() =>
                handleClick(references["Advanced ML (Ensembles, NNs)"])
              }
            >
              Advanced ML (Ensembles, NNs)
            </Circle>
          </div>
          <Circle
            ref={deepLearningRef}
            onClick={() => handleClick(references["Deep Learning"])}
          >
            Deep Learning
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={nnRef}
              onClick={() =>
                handleClick(references["Fully connected NN, CNN, RNN, LSTM"])
              }
            >
              Fully connected NN
            </Circle>
            <Circle
              ref={cnnRef}
              onClick={() =>
                handleClick(references["Fully connected NN, CNN, RNN, LSTM"])
              }
            >
              CNN
            </Circle>
            <Circle
              ref={rnnRef}
              onClick={() =>
                handleClick(references["Fully connected NN, CNN, RNN, LSTM"])
              }
            >
              RNN
            </Circle>
            <Circle
              ref={lstmRef}
              onClick={() =>
                handleClick(references["Fully connected NN, CNN, RNN, LSTM"])
              }
            >
              LSTM
            </Circle>
          </div>
          <Circle
            ref={reinforcementLearningRef}
            onClick={() => handleClick(references["Reinforcement Learning"])}
          >
            Reinforcement Learning
          </Circle>
          <Circle
            ref={nlpRef}
            onClick={() =>
              handleClick(references["Natural Language Processing (NLP)"])
            }
          >
            Natural Language Processing (NLP)
          </Circle>
          <Circle
            ref={computerVisionRef}
            onClick={() => handleClick(references["Computer Vision"])}
          >
            Computer Vision
          </Circle>
          <Circle
            ref={mlOpsRef}
            onClick={() => handleClick(references["MLOps"])}
          >
            MLOps
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle
              ref={deploymentRef}
              onClick={() =>
                handleClick(references["Deployment models, CI/CD"])
              }
            >
              Deployment models, CI/CD
            </Circle>
          </div>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={mathRef}
          toRef={linearAlgebraRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={mathRef}
          toRef={calculusRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={mathRef}
          toRef={statsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={statsRef}
          toRef={statsCLTRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={statsRef}
          toRef={hypothesisTestingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={statsRef}
          toRef={probabilitySamplingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={statsRef}
          toRef={abTestingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={statsRef}
          toRef={econometricsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={econometricsRef}
          toRef={preReqEconometricsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={econometricsRef}
          toRef={regressionsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={econometricsRef}
          toRef={codingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={codingRef}
          toRef={learnPythonRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={codingRef}
          toRef={dataStructuresRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={codingRef}
          toRef={learnSQLRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={codingRef}
          toRef={edaRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={edaRef}
          toRef={dataUnderstandingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={edaRef}
          toRef={dataAnalysisRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={edaRef}
          toRef={dataVisualizationRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={edaRef}
          toRef={mlRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={mlRef}
          toRef={classicMLRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={mlRef}
          toRef={advancedMLRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={mlRef}
          toRef={deepLearningRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deepLearningRef}
          toRef={nnRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deepLearningRef}
          toRef={cnnRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deepLearningRef}
          toRef={rnnRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deepLearningRef}
          toRef={lstmRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deepLearningRef}
          toRef={reinforcementLearningRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deepLearningRef}
          toRef={nlpRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deepLearningRef}
          toRef={computerVisionRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={mlOpsRef}
          toRef={deploymentRef}
        />
      </div>
    </MaxWidthWrapper>
  );
}

AIRoadmap.displayName = "AIRoadmap";

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
        <AIRoadmap />
      </div>
    </>
  );
}
