import React from "react";
import Blog from "@/components/Blog";

const BlogPage = () => {
  return (
    <main>
      <section className="pb-16 pt-40 md:pb-20 md:pt-48 bg-black dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
          <h1 className="text-4xl font-bold text-white mb-5 xl:text-sectiontitle3">
            Our Blog
          </h1>
          <p className="text-white opacity-80 max-w-2xl mx-auto text-lg">
            Insights, thoughts, and technical deep-dives from the team.
          </p>
        </div>
      </section>
      <Blog />
    </main>
  );
};

export default BlogPage;