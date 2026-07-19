import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { Link } from 'wouter';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const articles = [
  {
    id: "microservices-maturity",
    title: "The Microservices Maturity Trap",
    excerpt: "Many enterprises adopt microservices to solve organizational problems, only to discover they've created a distributed monolith. How to assess if your architecture matches your operational maturity.",
    date: "Oct 12, 2023",
    readTime: "8 min read",
    category: "Architecture"
  },
  {
    id: "strangler-fig-enterprise",
    title: "Executing the Strangler Fig Pattern at Enterprise Scale",
    excerpt: "A practical guide to modernizing legacy systems without stopping the business. Lessons learned from dismantling a 15-year-old monolith in the financial sector.",
    date: "Sep 28, 2023",
    readTime: "12 min read",
    category: "Modernization"
  },
  {
    id: "engineering-metrics",
    title: "DORA Metrics Are Not Enough",
    excerpt: "Why deployment frequency and lead time don't tell the whole story of engineering health, and the qualitative signals engineering leaders should be tracking instead.",
    date: "Sep 05, 2023",
    readTime: "6 min read",
    category: "Engineering Leadership"
  },
  {
    id: "kubernetes-complexity",
    title: "Taming Kubernetes: When Not to Use It",
    excerpt: "Kubernetes is the standard, but it shouldn't be the default. A framework for deciding when managed services or simpler orchestration tools are the better business choice.",
    date: "Aug 19, 2023",
    readTime: "10 min read",
    category: "Infrastructure"
  },
  {
    id: "tech-debt-board",
    title: "Explaining Technical Debt to the Board",
    excerpt: "Technical debt is a business risk, not just an engineering complaint. How to translate refactoring needs into financial impact and secure budget for foundational work.",
    date: "Jul 30, 2023",
    readTime: "7 min read",
    category: "Strategy"
  }
];

export default function Blog() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Insights</span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6">Thoughts on software, architecture, and scale.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We write about the hard lessons learned in the trenches of enterprise software engineering. No fluff, just signal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col gap-12"
          >
            {articles.map((article, index) => (
              <motion.article 
                variants={fadeIn} 
                key={article.id}
                className="group relative border-b border-slate-100 pb-12 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="text-accent font-medium">{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  <Link href={`/blog/${article.id}`} className="focus:outline-none">
                    <span className="absolute inset-0 z-10"></span>
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {article.excerpt}
                </p>
                
                <div className="inline-flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                  Read Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Teaser */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">The Dhruva Dispatch</h2>
          <p className="text-slate-300 mb-8 text-lg">A monthly newsletter for engineering leaders. No spam, only high-signal essays on software architecture and firm building.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button type="submit" className="bg-accent hover:bg-accent/90 text-white rounded-md px-6 py-3 font-medium transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
