'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'post1',
    title: 'The Future of Smart Substations',
    excerpt: 'Exploring how AI and IoT are revolutionizing substation operations.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Technology',
    author: {
      name: 'Sarah Johnson',
      role: 'Chief Engineer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976',
    },
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068',
    tags: ['Smart Grid', 'AI', 'IoT', 'Innovation'],
  },
  {
    id: 'post2',
    title: 'Sustainable Practices in Substation Construction',
    excerpt: 'Implementing eco-friendly solutions in modern infrastructure.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Sustainability',
    author: {
      name: 'Michael Chen',
      role: 'Project Director',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    },
    date: '2024-01-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070',
    tags: ['Sustainability', 'Green Energy', 'Construction'],
  },
  {
    id: 'post3',
    title: 'Safety First: Modern Substation Protection',
    excerpt: 'Latest developments in substation safety and protection systems.',
    content: 'Lorem ipsum dolor sit amet...',
    category: 'Safety',
    author: {
      name: 'Emily Rodriguez',
      role: 'Safety Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
    },
    date: '2024-01-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070',
    tags: ['Safety', 'Protection', 'Best Practices'],
  },
];

const categories = ['All', 'Technology', 'Sustainability', 'Safety', 'Industry News'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts
    .filter((post) => 
      selectedCategory === 'All' || post.category === selectedCategory)
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-primary">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
            alt="Blog header"
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
            <h1 className="text-5xl font-heading font-bold mb-6">Our Blog</h1>
            <p className="text-xl">
              Insights and updates from the world of electrical infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
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
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-dark-text">{post.author.name}</p>
                        <p className="text-sm text-dark-text/60">{post.author.role}</p>
                      </div>
                    </div>
                    <h2 className="text-xl font-heading font-bold text-primary mb-2">
                      {post.title}
                    </h2>
                    <p className="text-dark-text/80 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-sm rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-dark-text/60">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for the latest insights and industry updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 