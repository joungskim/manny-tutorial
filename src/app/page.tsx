'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Satisfied Clients', value: '200+' },
  { label: 'Team Members', value: '50+' },
];

const services = [
  {
    title: 'Substation Design',
    description: 'Expert design services for modern electrical substations.',
    icon: '⚡',
  },
  {
    title: 'Construction Management',
    description: 'End-to-end project management and construction services.',
    icon: '🏗️',
  },
  {
    title: 'Maintenance & Repairs',
    description: '24/7 maintenance and emergency repair services.',
    icon: '🔧',
  },
  {
    title: 'Upgrades & Modernization',
    description: 'Modernizing existing infrastructure with cutting-edge technology.',
    icon: '🔄',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1609881142760-298c2e76725b?q=80&w=1974"
            alt="Modern electrical infrastructure"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Powering Tomorrow&apos;s Infrastructure
            </h1>
            <p className="text-xl mb-8">
              Leading the way in electrical substation construction and maintenance with
              expertise, innovation, and unwavering commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/projects"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-dark-text">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-dark-text/80 max-w-2xl mx-auto">
              Comprehensive electrical infrastructure solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-text/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
