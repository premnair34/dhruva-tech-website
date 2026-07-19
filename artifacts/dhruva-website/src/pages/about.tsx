import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { Target, Compass, Zap, Shield } from 'lucide-react';
import heroImg from '@assets/generated_images/office-collaboration.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About Dhruva.</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Named after the pole star, we serve as a steady, reliable guide for enterprises navigating the complexities of modern technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p>
                Dhruva Technologies was founded on a simple observation: enterprise software is too often built for the moment, rather than for the future. Too many consulting engagements leave behind fragile systems that become tomorrow's legacy debt.
              </p>
              <p>
                We built this firm to be different. We are a collective of senior engineers, architects, and strategists who believe in the craftsmanship of software. We don't just write code; we architect solutions that scale, perform securely, and stand the test of time.
              </p>
              <p>
                Our clients trust us with their most critical systems because we treat their business as our own. We value pragmatic decision-making over hype, transparent communication over pleasantries, and rigorous engineering over shortcuts.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Replace with actual image from generated images when available */}
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative shadow-xl">
                <img 
                  src={heroImg} 
                  alt="Dhruva Office Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Core Principles</h2>
            <p className="text-slate-600">The values that dictate how we write code, advise clients, and build our firm.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Engineering Rigor",
                desc: "We believe in typed systems, comprehensive testing, automated deployments, and peer review. Quality is not a feature; it is the foundation.",
                icon: <Shield className="text-accent" size={32} />
              },
              {
                title: "Pragmatism Over Dogma",
                desc: "We choose the right tool for the job. We are agnostic to technology trends and deeply committed to business outcomes.",
                icon: <Target className="text-accent" size={32} />
              },
              {
                title: "Radical Transparency",
                desc: "We tell the truth about timelines, technical debt, and risks. Bad news does not get better with age.",
                icon: <Compass className="text-accent" size={32} />
              },
              {
                title: "Velocity Through Discipline",
                desc: "Going fast in the short term often means going slow in the long term. We maintain velocity by maintaining discipline.",
                icon: <Zap className="text-accent" size={32} />
              }
            ].map((value, i) => (
              <motion.div variants={fadeIn} key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
                <div className="shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
