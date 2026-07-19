import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, CheckCircle2, Building2, Code2, Globe2 } from 'lucide-react';
import heroImg from '@assets/generated_images/hero-abstract.png';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary text-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Abstract Technology" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-accent"></span>
                <span className="text-accent font-medium tracking-widest uppercase text-sm">Precision Engineering</span>
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                Solve hard problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">quiet confidence.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Dhruva Technologies is a premier software and consulting firm guiding enterprises through complex technical challenges with reliable, steady, and crafted solutions.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-accent/20 transition-all hover:scale-105">
                    Start a Conversation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-slate-600 text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-base transition-all bg-transparent">
                    Explore Our Expertise
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by engineering teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            {/* Fake logos using icons/text for polished look without generic external images */}
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Building2 size={24} /> NEXUS</div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Globe2 size={24} /> OMNIA</div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><Code2 size={24} /> SYNAPSE</div>
            <div className="flex items-center gap-2 font-bold text-xl text-slate-800 font-serif italic">Aether</div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">The discipline to deliver what others promise.</h2>
            </div>
            <Link href="/services" className="flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all group">
              View all services <ArrowRight size={18} className="transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                desc: "Production-ready systems built on resilient architecture. We don't just write code; we craft instruments of business leverage.",
                icon: "01"
              },
              {
                title: "Cloud & Infrastructure",
                desc: "Scalable, secure, and cost-effective cloud foundations that let your engineering teams sleep through the night.",
                icon: "02"
              },
              {
                title: "Digital Transformation",
                desc: "Modernizing legacy systems without stopping the business. Smooth transitions from fragile to robust.",
                icon: "03"
              }
            ].map((service, i) => (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                key={i} 
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
              >
                <div className="text-slate-300 font-mono text-xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
                Not a vendor. <br/>An engineering partner.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Most consulting firms measure success by hours billed. We measure it by the durability of what we leave behind. At Dhruva, we build systems designed to outlast our tenure.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Senior-heavy teams with deep domain expertise",
                  "Opinionated architecture, pragmatic implementation",
                  "Radical transparency in communication and progress",
                  "Security and scalability considered from day zero"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3] bg-slate-900 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-slate-800 opacity-90 mix-blend-multiply"></div>
                {/* Decorative UI elements mimicking a dashboard/code view */}
                <div className="absolute inset-6 border border-slate-700/50 rounded-xl bg-slate-900/50 backdrop-blur-sm p-6 overflow-hidden flex flex-col gap-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="w-full h-4 bg-slate-800 rounded-sm w-3/4"></div>
                  <div className="w-full h-4 bg-slate-800 rounded-sm w-1/2"></div>
                  <div className="w-full h-4 bg-slate-800 rounded-sm w-5/6"></div>
                  <div className="mt-8 flex gap-4">
                    <div className="w-1/3 h-24 bg-accent/20 border border-accent/30 rounded-lg"></div>
                    <div className="w-2/3 h-24 bg-slate-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to build something real?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Let's discuss your next complex challenge and how our engineering team can help you solve it.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-slate-100 rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all hover:scale-105">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
