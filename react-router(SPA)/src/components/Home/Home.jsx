import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white min-h-screen flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-indigo-200">Biplav</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Build smarter. Explore innovative products. Collaborate in open-source. Grow with our developer-first platform.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <Link
              to="#"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-md text-lg shadow"
            >
              Browse Products
            </Link>
            <Link
              to="#"
              className="bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-3 rounded-md text-lg shadow"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">Why Choose Us?</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
            We don’t just ship products—we craft experiences. Whether you're an entrepreneur, developer, or a curious explorer, Biplav offers tools that empower your journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Innovative</h3>
              <p className="text-gray-600 text-lg">Cutting-edge solutions built with creativity and clarity.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Open Source</h3>
              <p className="text-gray-600 text-lg">Transparent, collaborative, and community-powered development.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Community</h3>
              <p className="text-gray-600 text-lg">Built by developers, for developers. Join the growing movement.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
