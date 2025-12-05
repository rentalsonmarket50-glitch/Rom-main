import { FC } from 'react';
import Link from 'next/link';

const AppHowItWorks: FC = () => {
  const steps = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Search Properties',
      description: 'Explore Flat, PG, Apartment, House & Room For Rent across Mohali, Chandigarh, Kharar, Zirakpur, and Panchkula by applying diverse filters based on your preferences and desired locations.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Choose Properties',
      description: 'All rental property details are listed comprehensively, enabling you to review and analyze property information conveniently from your preferred location.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Rent Properties',
      description: 'Register as an owner or broker and upload rental property images along with key details, including the complete address and expected rent.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              How Rentals On Market Works
            </h2>
            <p className="mb-8 text-base text-gray-600 md:text-lg leading-relaxed">
              Discover a diverse range of verified property listings available for rent in your desired location on Rentals On Market. Explore detailed property information and seamlessly connect with property owners without incurring any brokerage fees. Find your perfect rental space hassle-free!
            </p>
            <Link href="/search">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl cursor-pointer">
                Start Searching
              </a>
            </Link>
          </div>

          {/* Right Column - Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHowItWorks;

