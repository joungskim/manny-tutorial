'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  details: {
    client: string;
    duration: string;
    scope: string[];
  };
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'High-Voltage Substation Upgrade',
    category: 'Modernization',
    location: 'Denver, CO',
    year: '2023',
    description: 'Complete modernization of a 500kV substation with smart grid integration.',
    image: 'https://images.unsplash.com/photo-1609881142760-298c2e76725b?q=80&w=1974',
    details: {
      client: 'Colorado Power Authority',
      duration: '18 months',
      scope: [
        'Smart grid technology integration',
        'Control system modernization',
        'Safety system upgrades',
        'Environmental compliance improvements',
      ],
    },
  },
  {
    id: 'project2',
    title: 'New Distribution Substation',
    category: 'Construction',
    location: 'Austin, TX',
    year: '2023',
    description: 'Design and construction of a new 230kV distribution substation.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    details: {
      client: 'Texas Energy Network',
      duration: '24 months',
      scope: [
        'Complete substation design',
        'Construction management',
        'Equipment installation',
        'Testing and commissioning',
      ],
    },
  },
  {
    id: 'project3',
    title: 'Emergency Repair & Upgrade',
    category: 'Maintenance',
    location: 'Seattle, WA',
    year: '2022',
    description: 'Emergency repair and preventive maintenance of critical infrastructure.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069',
    details: {
      client: 'Northwest Power Grid',
      duration: '6 months',
      scope: [
        'Emergency repairs',
        'System diagnostics',
        'Preventive maintenance',
        'Performance optimization',
      ],
    },
  },
  {
    id: 'project4',
    title: 'Renewable Integration Project',
    category: 'Design',
    location: 'Phoenix, AZ',
    year: '2022',
    description: 'Integration of solar and wind power into existing substation.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070',
    details: {
      client: 'Arizona Sustainable Energy',
      duration: '12 months',
      scope: [
        'Renewable energy integration',
        'Control system design',
        'Power flow optimization',
        'Grid stability enhancement',
      ],
    },
  },
];

const categories = ['All', 'Design', 'Construction', 'Maintenance', 'Modernization'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-primary">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070"
            alt="Project showcase"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">Our Projects</h1>
            <p className="text-xl">
              Showcasing our expertise in electrical infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-dark-text hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                      <span className="text-sm font-medium text-secondary mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {project.location} • {project.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary">
                      {selectedProject.title}
                    </h2>
                    <p className="text-accent">
                      {selectedProject.location} • {selectedProject.year}
                    </p>
                  </div>
                  <span className="px-4 py-1 bg-primary/10 text-primary rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-dark-text/80 mb-6">{selectedProject.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading font-bold mb-2">Client</h3>
                    <p className="text-dark-text/80">{selectedProject.details.client}</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2">Duration</h3>
                    <p className="text-dark-text/80">{selectedProject.details.duration}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-heading font-bold mb-4">Project Scope</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.details.scope.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0"
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
                        <span className="text-dark-text/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 