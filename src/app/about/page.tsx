'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974',
    bio: 'Over 25 years of experience in electrical infrastructure.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976',
    bio: 'Expert in substation design and modernization.',
  },
  {
    name: 'Michael Chen',
    role: 'Project Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    bio: 'Specialized in large-scale construction management.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Safety Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
    bio: 'Ensuring the highest safety standards in all operations.',
  },
];

const timeline = [
  {
    year: '1998',
    title: 'Company Founded',
    description: 'Started with a vision to revolutionize substation construction.',
  },
  {
    year: '2005',
    title: 'Major Expansion',
    description: 'Expanded operations across multiple states.',
  },
  {
    year: '2012',
    title: 'Innovation Award',
    description: 'Recognized for pioneering smart substation technology.',
  },
  {
    year: '2020',
    title: 'Global Reach',
    description: 'Established international partnerships and projects.',
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070"
            alt="Modern electrical infrastructure"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 h-full flex items-center"
        >
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Our Story</h1>
            <p className="text-xl">
              Building the foundation for a more powerful and sustainable future.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-heading font-bold text-primary text-center mb-16"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className="w-5/12 relative">
                    <div className={`${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}>
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                      <p className="text-dark-text/80">{item.description}</p>
                    </div>
                    {/* Timeline Dot */}
                    <div className="absolute top-3 w-4 h-4 rounded-full bg-primary transform -translate-y-1/2">
                      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-dark-text/80 max-w-2xl mx-auto">
              Meet the experts behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-dark-text/80">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'Committed to delivering the highest quality in every project.',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'Building trust through honest and ethical practices.',
              },
              {
                icon: '🌱',
                title: 'Innovation',
                description: 'Embracing new technologies and sustainable solutions.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-2">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 