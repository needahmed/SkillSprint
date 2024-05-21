"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { UserButton, useUser, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-creme text-white backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold text-white">
            Skillsprint.
          </Link>
          <div className="flex items-center sm:hidden z-50">
            {isSignedIn && <UserButton />}
            <button
              className="p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
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
            <Link
              href="/#roadmaps"
              className={buttonVariants({
                size: "sm",
              })}
            >
              Roadmaps
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
              <>
                <Link
                  href="/quiz"
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Take Quiz
                </Link>
                
              </>
            )}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className=" bg-black bg-opacity-90 text-creme flex flex-col items-center p-6 gap-4 rounded-xl backdrop-blur">
            {isSignedIn && user && (
              <div className="flex items-center space-x-4 mb-6 mt-10">
                <img
                  src={user.imageUrl}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user.fullName}</p>
                  <p className="text-sm text-gray-400">{user.primaryEmailAddress?.emailAddress}</p>
                </div>
              </div>
            )}
            <div className="flex flex-col items-start space-y-6 mt-10 text-sm w-full">
              <Link
                href="/pricing"
                className="hover:text-gray-400 transition-colors w-full"
                onClick={toggleMobileMenu}
              >
                Pricing
                <hr className="border-t border-gray-600 mt-2" />
              </Link>
              <Link
                href="/counselling"
                className="hover:text-gray-400 transition-colors w-full"
                onClick={toggleMobileMenu}
              >
                1v1 Counselling
                <hr className="border-t border-gray-600 mt-2" />
              </Link>
              <Link
                href="/#roadmaps"
                className="hover:text-gray-400 transition-colors w-full"
                onClick={toggleMobileMenu}
              >
                Roadmaps
                <hr className="border-t border-gray-600 mt-2" />
              </Link>
              {!isSignedIn && (
                <Link
                  href="/sign-in"
                  className="hover:text-gray-400 transition-colors w-full"
                  onClick={toggleMobileMenu}
                >
                  Sign in
                  <hr className="border-t border-gray-600 mt-2" />
                </Link>
              )}
              {!isSignedIn && (
                <Link
                  href="/sign-up"
                  className="hover:text-gray-400 transition-colors w-full"
                  onClick={toggleMobileMenu}
                >
                  Get Started
                  
                  <hr className="border-t border-gray-600 mt-2" />
                </Link>
              )}
              {isSignedIn && (
                <Link
                  href="/quiz"
                  className="hover:text-gray-400 transition-colors w-full"
                  onClick={toggleMobileMenu}
                >
                  Take Quiz
                  <hr className="border-t border-gray-600 mt-2" />
                </Link>
              )}
            </div>
            {isSignedIn && (
              <div className="mt-6 w-full flex justify-center">
                <SignOutButton redirectUrl="/">
                  <button
                    className="hover:text-gray-400 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Sign out
                  </button>
                </SignOutButton>
              </div>
            )}
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
