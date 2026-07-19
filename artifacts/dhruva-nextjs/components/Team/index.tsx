"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamData = [
  {
    name: "Arjun Rajan",
    role: "Co-Founder & CTO",
    bio: "Former big-tech engineer who loves architecting scalable distributed systems.",
  },
  {
    name: "Priya Natarajan",
    role: "Director of Engineering",
    bio: "Passionate about building high-performing engineering teams and shipping reliable software.",
  },
  {
    name: "Karthik Subramanian",
    role: "Lead Architect",
    bio: "Expert in microservices and cloud-native solutions that stand the test of time.",
  },
  {
    name: "Divya Murugan",
    role: "Product Strategy Lead",
    bio: "Bridges the gap between technical execution and business value for our enterprise clients.",
  },
  {
    name: "Rahul Krishnan",
    role: "Senior Full Stack Engineer",
    bio: "Crafts beautiful, accessible frontends backed by robust and performant APIs.",
  },
  {
    name: "Meera Venkatesh",
    role: "DevOps & Cloud Engineer",
    bio: "Obsessed with automation, infrastructure as code, and creating zero-downtime deployments.",
  },
];

const Team = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {teamData.map((member, idx) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              key={idx}
              className="rounded-lg bg-white p-7.5 shadow-solid-8 dark:bg-blacksection"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-2xl font-bold uppercase">{member.name.charAt(0)}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                {member.name}
              </h3>
              <p className="mb-4 font-medium text-primary">
                {member.role}
              </p>
              <p className="text-waterloo dark:text-manatee">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;