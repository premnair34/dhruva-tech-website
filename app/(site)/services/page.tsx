import React from "react";
import Feature from "@/components/Features";

const ServicesPage = () => {
  return (
    <main>
      <section className="pb-16 pt-40 md:pb-20 md:pt-48 bg-black dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
          <h1 className="text-4xl font-bold text-white mb-5 xl:text-sectiontitle3">
            Our Services
          </h1>
          <p className="text-white opacity-80 max-w-2xl mx-auto text-lg">
            Comprehensive technical solutions designed to help your enterprise scale, adapt, and lead in a digital-first world.
          </p>
        </div>
      </section>
      
      <Feature />
    </main>
  );
};

export default ServicesPage;
