'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'design',
    title: 'Substation Design',
    shortDesc: 'Expert design services for modern electrical substations.',
    fullDesc: 'Our comprehensive design services incorporate the latest technologies and safety standards. We specialize in both new construction and retrofit projects, ensuring optimal performance and reliability.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070',
    features: [
      'Custom 3D modeling and simulation',
      'Environmental impact assessment',
      'Safety and compliance planning',
      'Cost optimization strategies',
    ],
  },
  {
    id: 'construction',
    title: 'Construction Management',
    shortDesc: 'End-to-end project management and construction services.',
    fullDesc: 'From groundbreaking to commissioning, we manage every aspect of substation construction. Our experienced team ensures projects are completed on time and within budget.',
    image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067',
    features: [
      'Project timeline optimization',
      'Quality control processes',
      'Resource management',
      'Regular progress reporting',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Repairs',
    shortDesc: '24/7 maintenance and emergency repair services.',
    fullDesc: 'Keep your infrastructure running at peak efficiency with our comprehensive maintenance programs. Our rapid response team is available 24/7 for emergency repairs.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070',
    features: [
      'Preventive maintenance plans',
      'Emergency response services',
      'Equipment testing and diagnosis',
      'Performance optimization',
    ],
  },
  {
    id: 'upgrades',
    title: 'Upgrades & Modernization',
    shortDesc: 'Modernizing existing infrastructure with cutting-edge technology.',
    fullDesc: 'Transform your aging infrastructure with our modernization services. We integrate smart technologies and sustainable solutions to enhance performance and efficiency.',
    image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2069',
    features: [
      'Smart grid integration',
      'Equipment modernization',
      'Efficiency improvements',
      'Sustainable solutions',
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-primary">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"
            alt="Industrial electrical services"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              Comprehensive solutions for all your electrical infrastructure needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.shortDesc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                {selectedService.title}
              </h2>
              <p className="text-dark-text/80 mb-6">{selectedService.fullDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selectedService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-2 text-dark-text/80"
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-xl text-dark-text/80 max-w-2xl mx-auto">
              A systematic approach to ensure project success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Understanding your needs and project requirements.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Developing detailed project plans and timelines.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implementing solutions with precision and care.',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Providing ongoing maintenance and assistance.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-text/80">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-primary/10 transform translate-x-1/2">
                    <div className="absolute right-0 w-3 h-3 rounded-full bg-primary transform translate-x-1/2 -translate-y-1/2" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 