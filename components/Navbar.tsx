"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-creme text-white backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold text-white">
            Skillsprint.
          </Link>
          {/*todo add mobile navbar*/}
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/pricing"
              className={buttonVariants({
                size: "sm",
              })}
            >
              Pricing
            </Link>
            <Link
              href="/counselling"
              className={buttonVariants({
                size: "sm",
              })}
            >
              1v1 Counselling
            </Link>
            {!isSignedIn && (
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Sign in
              </Link>
            )}
            {!isSignedIn && (
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get Started
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            )}
            {isSignedIn && (
              <Link
                href="/quiz"
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Take Quiz
              </Link>
            )}
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
