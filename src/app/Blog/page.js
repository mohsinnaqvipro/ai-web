"use client";

import React from "react";
import NavbarPage from "@/app/components/Navbar";
import Hero2 from "@/app/components/Hero2";
import BlogArticles from "@/app/components/BlogArticles";
import CtaOne from "@/app/components/CtaOne";
import Footer from "@/app/components/Footer";
import { blogCardData } from "@/shared/Constants/constants";

const Blog = () => {
  return (
    <>
      <NavbarPage />
      <Hero2
        title="Blog"
        description="Irure dolore exercitation aliquip deserunt aute adipisicing ut. Enim exercitation anim est et consequat pr"
        showButton={false}
      />
      <BlogArticles blogCardData={blogCardData} />
      <CtaOne />
      <Footer />
    </>
  );
};

export default Blog;
