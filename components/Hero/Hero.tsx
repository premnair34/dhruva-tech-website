"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <section className="overflow-hidden pb-2 pt-40 md:pt-4 xl:pb-2 xl:pt-46">
                <div className="px-4 md:px-8 2xl:px-0 relative z-1 mx-auto max-w-c-1390 rounded-lg bg-black dark:bg-blacksection dark:stroke-strokedark">
                    <Image
                        fill
                        src="/images/shape/shape-dotted-light-02.svg"
                        alt="Dotted"
                        className="absolute left-0 top-0 -z-1 dark:hidden opacity-30 invert"
                    />
                    <Image
                        fill
                        src="/images/shape/shape-dotted-dark-02.svg"
                        alt="Dotted"
                        className="absolute left-0 top-0 -z-1 hidden dark:block opacity-30"
                    />
                    <div className="flex lg:items-center lg:gap-8 xl:gap-32.5 py-10 md:py-20 lg:py-0">
                        <motion.div 
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 1, delay: 0.1 }}
                          viewport={{ once: true }}
                          className=" md:w-1/2 px-8 lg:py-25">
                            <h1 className="mb-5 pr-16 text-3xl font-bold text-white xl:text-hero ">
                                Solve hard problems with {" "}
                                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-primary">
                                    quiet confidence.
                                </span>
                            </h1>
                            <p className="text-white opacity-80 text-lg">
                                Dhruva Technologies is a premier software and consulting firm guiding enterprises through complex technical challenges.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                                >
                                    Start a Conversation
                                </Link>
                                <Link
                                    href="/services"
                                    className="flex items-center justify-center rounded-full bg-transparent border border-white px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-white hover:text-black"
                                >
                                    Explore Our Services
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div 
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          initial="hidden"
                          whileInView="visible"
                          transition={{ duration: 1, delay: 0.1 }}
                          viewport={{ once: true }}
                          className="animate_right hidden md:w-1/2 lg:block">
                            <div className="relative 2xl:-mr-7.5">
                                <Image
                                    src="/images/shape/shape-01.png"
                                    alt="shape"
                                    width={46}
                                    height={246}
                                    className="absolute -left-11.5 top-0 invert"
                                />
                                <Image
                                    src="/images/shape/shape-02.svg"
                                    alt="shape"
                                    width={36.9}
                                    height={36.7}
                                    className="absolute bottom-0 right-0 z-10 invert opacity-50"
                                />
                                <Image
                                    src="/images/shape/shape-03.svg"
                                    alt="shape"
                                    width={21.64}
                                    height={21.66}
                                    className="absolute -right-6.5 bottom-0 z-1 invert opacity-50"
                                />
                                <div className=" relative aspect-[700/444] w-full">
                                    <Image
                                        className="shadow-solid-l"
                                        src="/images/hero/hero-dark.svg"
                                        alt="Hero"
                                        fill
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
