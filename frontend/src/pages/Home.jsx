import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [repos, setRepos] = useState([]);
  const [pinned, setPinned] = useState([]);
  const [filter, setFilter] = useState("all");
  const [visits, setVisits] = useState(0);

  // Fetch all repos
  useEffect(() => {
    fetch("https://api.github.com/users/DR-Dev2672/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        // simple pinned logic (top starred)
        const sorted = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count);
        setPinned(sorted.slice(0, 4));
      });
  }, []);

  // Visitor Counter
  useEffect(() => {
    let count = localStorage.getItem("visits") || 0;
    count++;
    localStorage.setItem("visits", count);
    setVisits(count);
  }, []);

  const filteredRepos = repos.filter((repo) => {
    if (filter === "all") return true;
    return repo.language === filter;
  });

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-all duration-500`}>

      {/* Cursor Glow */}
      <div className="fixed w-40 h-40 bg-purple-500 opacity-20 blur-3xl pointer-events-none rounded-full animate-pulse top-1/2 left-1/2"></div>

      {/* Navbar */}
      <nav className="flex justify-between p-6 backdrop-blur-lg sticky top-0 z-50">
        <h1 className="font-bold text-xl">Dev Raj Dev</h1>
        <div className="flex gap-4 items-center">
          <a href="/resume.pdf" download className="underline">Resume</a>
          <button onClick={() => setDark(!dark)}>
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-32 h-32 rounded-full mb-6 border-4 border-purple-500"
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-extrabold">
          DEV RAJ DEV
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl">
          <span className="text-purple-400 font-bold text-2xl">FULL STACK</span> +
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-green-400 font-bold text-2xl ml-2">
            DEVOPS
          </motion.span>
          <span className="ml-2 font-semibold">ENGINEER</span>
        </motion.p>
      </section>

      {/* Pinned Projects */}
      <section className="p-10">
        <h2 className="text-4xl font-bold mb-6">🔥 Pinned Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pinned.map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 shadow-lg">
              <h3 className="text-2xl font-bold">{repo.name}</h3>
              <p className="text-sm opacity-70">{repo.description}</p>
              <a href={repo.html_url} className="text-green-400">GitHub Link</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects with filter */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">All Projects</h2>

        <div className="flex gap-4 mb-6 flex-wrap">
          {["all", "JavaScript", "TypeScript", "Python"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className="px-4 py-1 border rounded-full">
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredRepos.slice(0, 9).map((repo) => (
            <motion.div
              key={repo.id}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 shadow-lg">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p className="text-sm opacity-70">{repo.description}</p>
              <a href={repo.html_url} className="text-green-400">View Code</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((b) => (
            <div key={b} className="p-6 rounded-xl bg-white/10 backdrop-blur">
              <h3 className="font-bold">Coming Soon 🚀</h3>
              <p className="text-sm opacity-70">Tech blogs & tutorials</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 opacity-60">
        Visitors: {visits}
      </footer>
    </div>
  );
}
