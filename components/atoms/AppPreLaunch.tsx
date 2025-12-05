import { FC, useState } from 'react';
import Image from 'next/image';

const AppPreLaunch: FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you! We will notify you when we launch.');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        {/* Banner Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative w-full flex justify-center items-center">
            <Image
              src="/assets/prelaunch-banner.png"
              alt="Pre-Launch Banner"
              width={1200}
              height={600}
              className="rounded-3xl max-w-full h-auto object-contain"
              quality={90}
              placeholder="blur"
              blurDataURL="/assets/prelaunch-banner.png"
            />
          </div>
        </div>

        {/* Email Subscription Form */}
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Stay Updated
          </h2>
          <p className="mb-6 text-base md:text-lg text-gray-600">
            Be the first to know about new features and exclusive property listings.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppPreLaunch;
