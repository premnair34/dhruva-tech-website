import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { Github, Linkedin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Generative avatar fallbacks since we can't use external placeholder services
const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Principal Architect",
    bio: "Former Staff Engineer at AWS. Specializes in distributed systems and high-throughput data pipelines.",
    initials: "SC",
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Engineering",
    bio: "15 years experience leading enterprise transformations. Focuses on legacy modernization and organizational scale.",
    initials: "MT",
    color: "bg-indigo-100 text-indigo-800"
  },
  {
    name: "Elena Rostova",
    role: "Lead Cloud Architect",
    bio: "Kubernetes contributor and multi-cloud strategy expert. Builds infrastructure that doesn't wake you up at 3AM.",
    initials: "ER",
    color: "bg-slate-200 text-slate-800"
  },
  {
    name: "David Kim",
    role: "Senior Software Engineer",
    bio: "Full-stack pragmatist. Obsesses over performance optimization and clean API design.",
    initials: "DK",
    color: "bg-sky-100 text-sky-800"
  },
  {
    name: "Aisha Patel",
    role: "Product Strategist",
    bio: "Bridges the gap between engineering reality and business outcomes. Former VP Product in FinTech.",
    initials: "AP",
    color: "bg-cyan-100 text-cyan-800"
  },
  {
    name: "James Wilson",
    role: "Security Engineering Lead",
    bio: "Ensures compliance and zero-trust architectures for our highly regulated enterprise clients.",
    initials: "JW",
    color: "bg-navy-100 text-slate-800"
  }
];

export default function Team() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Our People</span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6">Built by engineers. <br/>Led by engineers.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a team of senior practitioners who have operated at scale. We don't employ layers of middle management—just experts who ship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {teamMembers.map((member, index) => (
              <motion.div variants={fadeIn} key={index} className="group">
                <div className="mb-6 relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-100 flex items-center justify-center border border-slate-200">
                  {/* Using a polished initials avatar since we can't use external placeholder APIs */}
                  <div className={`w-full h-full flex items-center justify-center ${member.color} transition-transform duration-500 group-hover:scale-105`}>
                    <span className="text-6xl font-bold tracking-tighter opacity-50">{member.initials}</span>
                  </div>
                  
                  {/* Hover social links */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-slate-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hiring Teaser */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We are always looking for exceptional talent.</h2>
          <p className="text-lg text-slate-300 mb-10">
            If you value engineering rigor, despise bureaucracy, and want to solve hard problems with smart people, we should talk.
          </p>
          <a href="mailto:careers@dhruvatech.example.com" className="inline-flex items-center justify-center bg-white text-primary hover:bg-slate-100 rounded-full px-8 py-4 font-bold shadow-xl transition-all">
            View Open Roles
          </a>
        </div>
      </section>
    </Layout>
  );
}
