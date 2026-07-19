import React from "react";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <main>
      <section className="pb-16 pt-40 md:pb-20 md:pt-48 bg-black dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
          <h1 className="text-4xl font-bold text-white mb-5 xl:text-sectiontitle3">
            About Us
          </h1>
          <p className="text-white opacity-80 max-w-2xl mx-auto text-lg">
            We are your trusted partners in software engineering and digital transformation.
          </p>
        </div>
      </section>
      
      <div className="pt-20">
        <About />
      </div>
    </main>
  );
};

export default AboutPage;