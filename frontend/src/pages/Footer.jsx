import React from "react";
import { motion } from "framer-motion";

export default function Footer({ visits }) {
  return (
    <footer className="mt-20 border-t border-white/10 bg-white/5 backdrop-blur-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Dev Raj Dev</h2>
          <p className="text-sm opacity-70">
            Full Stack Developer & DevOps Engineer passionate about building
            scalable applications and solving complex problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-purple-400">About</a></li>
            <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Connect</h2>
          <div className="flex gap-4 text-sm">
            <a href="https://github.com/DR-Dev2672" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/thakur-dev-b672b3213/" target="_blank">LinkedIn</a>
            <a href="mailto:thakurdev2672@gmail.com">Email</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-sm opacity-60 pb-6"
      >
        © {new Date().getFullYear()} Dev Raj Dev • Visitors: {visits}
      </motion.div>
    </footer>
  );
}