import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";

// Stripe plan information can be fetched dynamically from Stripe API
const pricingItems = [
  {
    plan: "Free",
    tagline: "For basic roadmaps.",
    // quota: 10,
    features: [
      {
        text: "All basic roadmaps",
        footnote: "Basic roadmap for different career options available",
      },
      {
        text: "Mobile-friendly interface",
      },
      {
        text: "AI recommended roadmap",
        footnote: "Better algorithmic responses for enhanced career choice",
        negative: true,
      },
      {
        text: "1v1 career counseling",
        negative: true,
      },
      {
        text: "Quiz access",
        negative: true,
      },
    ],
  },
  {
    plan: "Pro",
    tagline: "For Personalized career recommendation using AI",
    // quota: 100,
    features: [
      {
        text: "All basic roadmaps",
        footnote: "Basic roadmap for different career options available",
      },
      {
        text: "Mobile-friendly interface",
      },
      {
        text: "AI recommended career paths",
        footnote: "Better algorithmic responses for enhanced content quality",
      },
      {
        text: "1v1 career counseling",
      },
      {
        text: "Quiz access",
      },
    ],
  },
];

const Page = () => {
  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
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
          <h1 className="text-6xl font-bold sm:text-7xl text-creme">Pricing</h1>
          <p className="mt-5 text-white sm:text-lg">
            Whether you&apos;re just trying out our service or need more,
            we&apos;ve got you covered.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, features }) => {
              return (
                <div
                  key={plan}
                  className={cn("relative rounded-2xl bg-creme shadow-lg", {
                    "border-2 border-white shadow-blue-200": plan === "Pro",
                    "border border-gray-200": plan !== "Pro",
                  })}
                >
                  {plan === "Pro" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r  border-black from-creme to-white px-3 py-2 text-sm font-medium text-black">
                      Upgrade now
                    </div>
                  )}
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

                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-bold">
                      {plan}
                    </h3>
                    <p className="text-black">{tagline}</p>
                  </div>

                  <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-1">
                      {/* <p>{quota.toLocaleString()} PDFs/mo included</p> */}
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-4 w-4 text-black" />
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-2">
                          {/* How many PDFs you can upload per month. */}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-10 space-y-5 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-blue-500" />
                          )}
                        </div>
                        {footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-gray-600", {
                                "text-gray-400": negative,
                              })}
                            >
                              {text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-gray-600", {
                              "text-gray-400": negative,
                            })}
                          >
                            {text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200" />
                  <div className="p-5">
                    <Link
                      href={plan === "Free" ? "/signup" : "/pro-signup"}
                      className={buttonVariants({
                        className: "w-full",
                        variant: "secondary",
                      })}
                    >
                      {plan === "Free" ? "Sign up" : "Upgrade now"}
                      <ArrowRight className="h-5 w-5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
