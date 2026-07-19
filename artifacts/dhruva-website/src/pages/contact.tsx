import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(20, { message: "Message must be at least 20 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message received.",
        description: "We'll get back to you within 24 business hours.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Contact</span>
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6">Let's build something real.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you need to modernize a legacy system or build a new platform from scratch, our senior engineers are ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-8">Send us a message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="bg-slate-50 border-slate-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="jane@company.com" className="bg-slate-50 border-slate-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" className="bg-slate-50 border-slate-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" className="bg-slate-50 border-slate-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or challenge..." 
                            className="min-h-[150px] bg-slate-50 border-slate-200 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white rounded-md px-8 py-6 text-base font-medium transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary rounded-3xl p-10 lg:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Headquarters</h4>
                      <p className="text-slate-300 leading-relaxed">
                        100 Tech Square<br/>
                        Suite 400<br/>
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-slate-300">
                        <a href="mailto:hello@dhruvatech.example.com" className="hover:text-white transition-colors">hello@dhruvatech.example.com</a>
                      </p>
                      <p className="text-slate-300 text-sm mt-1">For general inquiries and new projects.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-slate-300">
                        <a href="tel:+14155550198" className="hover:text-white transition-colors">+1 (415) 555-0198</a>
                      </p>
                      <p className="text-slate-300 text-sm mt-1">Mon-Fri from 9am to 6pm PST.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
