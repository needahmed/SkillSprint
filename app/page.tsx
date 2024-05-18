import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="text-creme mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Skillsprint
        </h1>
        <p className="mt-5 max-w-prose text-white sm:text-lg">
          Master your domain, Sprint by Sprint
        </p>

        <Link
          className={`inline-flex items-center bg-creme hover:bg-brown-200 text-white font-bold py-1 px-4 rounded-lg mt-5`}
          href="/quiz"
        >
          Take Quiz <ArrowRight className="h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
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

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <p className="text-lg text-creme p-4 sm:p-8 md:p-20 center ">
                  At Skillsprint, we have redefined the way you learn. Our
                  platform combines the best of both worlds: static roadmaps
                  meticulously designed by experts and dynamic personalized
                  pathways created just for you. We believe in empowering
                  individuals to unleash their full potential, guiding them on a
                  journey that aligns with their skills and interests.
                </p>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-creme sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-white">
              Empower your learning journey with Skillsprint.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-creme">Step 1</span>
              <span className="text-xl font-semibold text-creme">
                Sign up for an account
              </span>
              <span className="mt-2 text-white">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-white underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col text-creme space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-creme">Step 2</span>
              <span className="text-xl font-semibold text-creme">
                Static and AI powered roadmaps
              </span>
              <span className="mt-2 text-white">
                For Free version, you will get access to variety of roadmaps for
                computer science field. For premium users, you will get access
                to a quiz which will analyze your personality.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-creme">Step 3</span>
              <span className="text-xl font-semibold text-creme">
                Work on result
              </span>
              <span className="mt-2 text-white">
                Quiz will recommend you career suitable according to your
                responsibilty.We also provide 1v1 counselling to our users for
                career guidance.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl">
              <div className="flex flex-wrap justify-center max-w-4xl mx-auto gap-4 p-4">
                {/* Web Button */}
                <Link
                  href="/roadmaps/webdevelopment"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Web Development
                </Link>
                {/* Mobile Button */}
                <Link
                  href="/roadmaps/mobiledevelopment"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Mobile App Development
                </Link>
                {/* Data Button */}
                <Link
                  href="/roadmaps/datascience"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Data Science
                </Link>
                {/* Cloud Button */}
                <Link
                  href="/roadmaps/cloudcomputing"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Cloud Computing
                </Link>
                {/* Devops Button */}
                <Link
                  href="/roadmaps/devops"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  DevOps
                </Link>
                {/* AI Button */}
                <Link
                  href="/roadmaps/ai"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Artificial Intelligence
                </Link>
                {/* Blockchain Button */}
                <Link
                  href="/roadmaps/blockchain"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Blockchain
                </Link>
                {/* Databases Button */}
                <Link
                  href="/frontend"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Network and Systems Administration
                </Link>
                {/* Cyber Button */}
                <Link
                  href="/roadmaps/cybersecurity"
                  className="rounded-lg bg-creme px-8 py-2 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"
                >
                  Cyber Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
