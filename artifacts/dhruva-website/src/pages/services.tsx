import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { ArrowRight, Code2, Cloud, RefreshCcw, Lightbulb, Database } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import servicesAbstract from '@assets/generated_images/services-abstract.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    id: "software-development",
    title: "Software Development",
    icon: <Code2 size={40} className="text-accent" />,
    shortDesc: "Production-ready systems built on resilient architecture.",
    longDesc: "We don't just write code; we craft instruments of business leverage. Our engineering teams build custom software that scales elegantly, performs reliably, and is maintainable long after we hand over the keys. From complex distributed systems to high-performance web applications, we focus on pragmatic architecture and rigorous testing.",
    features: ["Custom Application Development", "API Design & Integration", "System Architecture", "Performance Optimization"]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    icon: <Cloud size={40} className="text-accent" />,
    shortDesc: "Scalable, secure, and cost-effective cloud foundations.",
    longDesc: "A modern application is only as good as the infrastructure it runs on. We design, deploy, and manage cloud environments that provide security, scalability, and operational efficiency. Whether you are migrating to the cloud or optimizing an existing footprint, we build foundations that let your engineering teams sleep through the night.",
    features: ["Cloud Migration", "DevOps & CI/CD", "Infrastructure as Code", "Site Reliability Engineering"]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    icon: <RefreshCcw size={40} className="text-accent" />,
    shortDesc: "Modernizing legacy systems without stopping the business.",
    longDesc: "Legacy systems hold back innovation, but replacing them carries immense risk. We specialize in the strangler fig pattern—incrementally modernizing monolithic applications into resilient microservices while maintaining business continuity. Smooth transitions from fragile to robust.",
    features: ["Legacy Modernization", "Microservices Architecture", "Technical Debt Reduction", "Platform Re-platforming"]
  },
  {
    id: "product-strategy",
    title: "Product Strategy",
    icon: <Lightbulb size={40} className="text-accent" />,
    shortDesc: "Aligning technical execution with business outcomes.",
    longDesc: "The best code solving the wrong problem is a waste of capital. Our strategy practice bridges the gap between technical possibility and business reality. We help technology leaders define product roadmaps, assess technical feasibility, and align engineering investments with strategic goals.",
    features: ["Technical Due Diligence", "Architecture Assessment", "Engineering Process Optimization", "Build vs. Buy Analysis"]
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    icon: <Database size={40} className="text-accent" />,
    shortDesc: "Pipelines and platforms that turn data into leverage.",
    longDesc: "Data is useless if it is siloed, latent, or untrustworthy. We build robust data pipelines, modern data warehouses, and analytics platforms that deliver reliable insights at scale. We treat data engineering with the same rigor as software engineering.",
    features: ["Data Pipelines (ETL/ELT)", "Data Warehousing", "Real-time Analytics", "Data Governance"]
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesAbstract} 
            alt="Services Abstract" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Capabilities designed for the enterprise.</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We bring senior engineering talent to your most complex technical challenges. No junior resources learning on your dime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="mb-6 inline-flex p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-xl font-medium text-slate-600 mb-6">{service.shortDesc}</p>
                  <p className="text-slate-600 leading-relaxed mb-8">{service.longDesc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-slate-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <Link href="/contact">
                      <Button variant="outline" className="group text-primary border-slate-200 hover:bg-slate-50 rounded-full px-6 transition-all">
                        Discuss this service <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center border border-slate-200">
                    {/* Decorative abstract element reflecting the service */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 opacity-50"></div>
                    <div className="relative z-10 w-full h-full flex flex-col justify-center gap-6 opacity-30">
                      <div className="h-4 w-3/4 bg-slate-300 rounded-sm"></div>
                      <div className="h-4 w-1/2 bg-slate-300 rounded-sm"></div>
                      <div className="flex gap-4">
                         <div className="h-24 w-1/3 bg-slate-300 rounded-lg"></div>
                         <div className="h-24 w-2/3 bg-slate-300 rounded-lg"></div>
                      </div>
                      <div className="h-4 w-full bg-slate-300 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How we work</h2>
          <p className="text-lg text-slate-300 mb-12">
            Our engagement model is designed for transparency, rapid value delivery, and alignment with business objectives. We don't believe in black-box development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-accent font-mono text-xl mb-4">01. Discovery</div>
              <p className="text-slate-300 text-sm leading-relaxed">Deep-dive into your architecture, business goals, and constraints. We define success criteria before writing a single line of code.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-accent font-mono text-xl mb-4">02. Execution</div>
              <p className="text-slate-300 text-sm leading-relaxed">Iterative delivery with continuous integration. You see progress weekly, allowing for course correction based on real feedback.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-accent font-mono text-xl mb-4">03. Handover</div>
              <p className="text-slate-300 text-sm leading-relaxed">Extensive documentation, knowledge transfer, and team upskilling. We leave your team equipped to own the solution.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
