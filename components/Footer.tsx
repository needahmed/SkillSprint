import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative  h-14 inset-x-0 bottom-0 w-full bg-black/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between text-white">
          <Link href="/" className="font-semibold">
            Skillsprint.©
          </Link>
          <span>{new Date().getFullYear()} All Rights Reserved.</span>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
