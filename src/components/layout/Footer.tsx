import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold">Manny Knows Best</h3>
            <p className="text-sm">Powering Tomorrow&apos;s Infrastructure</p>
            <div className="space-y-2">
              <p className="text-sm">123 Power Street</p>
              <p className="text-sm">Energy City, EC 12345</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
              <p className="text-sm">Email: info@mannyknowsbest.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/design" className="hover:text-secondary transition-colors">
                  Substation Design
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className="hover:text-secondary transition-colors">
                  Construction Management
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-secondary transition-colors">
                  Maintenance & Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/upgrades" className="hover:text-secondary transition-colors">
                  Upgrades & Modernization
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary text-primary font-semibold rounded hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Manny Knows Best. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 