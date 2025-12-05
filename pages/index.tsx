import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// components
import AppHead from '@/components/atoms/AppHead';
import AppHeader from '@/components/organisms/AppHeader';
import AppHero from '@/components/atoms/AppHero';
import AppBanner from '@/components/atoms/AppBanner';
import AppFooter from '@/components/atoms/AppFooter';
import AppCategoryBar from '@/components/atoms/AppCategoryBar';
import AppPropertySection from '@/components/atoms/AppPropertySection';
import AppTopAgents from '@/components/atoms/AppTopAgents';
import AppTestimonials from '@/components/atoms/AppTestimonials';
import AppHowItWorks from '@/components/atoms/AppHowItWorks';
import AppPreLaunch from '@/components/atoms/AppPreLaunch';
import AppSkeletonLoader from '@/components/atoms/AppSkeletonLoader';
// typings
import { IExploreNearby, ILiveAnywhere } from 'typings';
// utils
import { getExploreNearby, getLiveAnywhere } from 'utils/data';

interface IHomeDataProps {
  exploreNearby: IExploreNearby[];
  liveAnywhere: ILiveAnywhere[];
}

const Home: FC<IHomeDataProps> = ({ exploreNearby, liveAnywhere }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading for skeleton effect
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string, query?: any) => {
    // Handle navigation if needed
    console.log('Navigate to:', page, query);
  };

  return (
    <>
      <AppHead />
      <AppHeader exploreNearby={exploreNearby} />
      <main>
        {/* hero */}
        <AppHero />

        {/* Category Bar */}
        <AppCategoryBar />

        {/* Popular homes in Sahibzada Ajit Singh Nagar */}
        <AppPropertySection
          title="Popular homes in Sahibzada Ajit Singh Nagar"
          onNavigate={handleNavigate}
          isLoading={isLoading}
          properties={[
            {
              id: '1',
              title: 'Flat in Sahibzada Ajit Singh Nagar',
              location: 'Sahibzada Ajit Singh Nagar',
              img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
              price: '₹6,825',
              rating: 5.0,
              reviews: 120,
              isGuestFavourite: true,
            },
            {
              id: '2',
              title: 'Room in Sahibzada Ajit Singh Nagar',
              location: 'Sahibzada Ajit Singh Nagar',
              img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
              price: '₹4,100',
              rating: 5.0,
              reviews: 89,
              isGuestFavourite: true,
            },
            {
              id: '3',
              title: 'Flat in Zirakpur',
              location: 'Zirakpur',
              img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
              price: '₹4,912',
              rating: 4.9,
              reviews: 156,
              isGuestFavourite: true,
            },
            {
              id: '4',
              title: 'Room in Sahibzada Ajit Singh Nagar',
              location: 'Sahibzada Ajit Singh Nagar',
              img: '/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp',
              price: '₹6,001',
              rating: 4.89,
              reviews: 203,
              isGuestFavourite: true,
            },
            {
              id: '5',
              title: 'Flat in Sahibzada Ajit Singh Nagar',
              location: 'Sahibzada Ajit Singh Nagar',
              img: '/assets/search/97bc37a6-9a1b-4bb2-8564-771319b246fb.webp',
              price: '₹7,639',
              rating: 5.0,
              reviews: 178,
              isGuestFavourite: true,
            },
            {
              id: '6',
              title: 'Room in Sahibzada Ajit Singh Nagar',
              location: 'Sahibzada Ajit Singh Nagar',
              img: '/assets/search/dde44668-1df5-41b6-8f91-5051975c4865.webp',
              price: '₹3,275',
              rating: 4.86,
              reviews: 94,
              isGuestFavourite: true,
            },
            {
              id: '7',
              title: 'Flat in Zirakpur',
              location: 'Zirakpur',
              img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
              price: '₹8,189',
              rating: 4.95,
              reviews: 145,
            },
          ]}
        />

        {/* Available in Chandigarh this weekend */}
        <AppPropertySection
          title="Available in Chandigarh this weekend"
          onNavigate={handleNavigate}
          isLoading={isLoading}
          properties={[
            {
              id: '8',
              title: 'Cozy Apartment in Sector 17',
              location: 'Chandigarh',
              img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
              price: '₹5,459',
              rating: 4.8,
              reviews: 112,
              isGuestFavourite: true,
            },
            {
              id: '9',
              title: 'Modern Studio in Sector 22',
              location: 'Chandigarh',
              img: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ3OTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
              price: '₹4,367',
              rating: 4.7,
              reviews: 87,
              isGuestFavourite: true,
            },
            {
              id: '10',
              title: 'Luxury Flat in Sector 35',
              location: 'Chandigarh',
              img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
              price: '₹9,549',
              rating: 4.9,
              reviews: 201,
              isGuestFavourite: true,
            },
            {
              id: '11',
              title: 'Spacious Room in Sector 10',
              location: 'Chandigarh',
              img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
              price: '₹3,821',
              rating: 4.6,
              reviews: 76,
              isGuestFavourite: true,
            },
            {
              id: '12',
              title: 'Apartment in Zirakpur',
              location: 'Zirakpur',
              img: '/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp',
              price: '₹6,549',
              rating: 4.53,
              reviews: 134,
            },
            {
              id: '13',
              title: 'Family Home in Sector 15',
              location: 'Chandigarh',
              img: '/assets/search/97bc37a6-9a1b-4bb2-8564-771319b246fb.webp',
              price: '₹8,734',
              rating: 4.85,
              reviews: 98,
            },
            {
              id: '14',
              title: 'Elegant Flat in Sector 27',
              location: 'Chandigarh',
              img: '/assets/search/dde44668-1df5-41b6-8f91-5051975c4865.webp',
              price: '₹7,093',
              rating: 4.92,
              reviews: 167,
              isGuestFavourite: true,
            },
          ]}
        />

        {/* Stay in Gurgaon District */}
        <AppPropertySection
          title="Stay in Gurgaon District"
          onNavigate={handleNavigate}
          isLoading={isLoading}
          properties={[
            {
              id: '15',
              title: 'Flat in Gurgaon',
              location: 'Gurgaon',
              img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
              price: '₹6,230',
              rating: 4.9,
              reviews: 89,
              isGuestFavourite: true,
            },
            {
              id: '16',
              title: 'Flat in Gurgaon',
              location: 'Gurgaon',
              img: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ3OTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
              price: '₹5,237',
              rating: 4.58,
              reviews: 121,
              isGuestFavourite: true,
            },
            {
              id: '17',
              title: 'Flat in Gurgaon',
              location: 'Gurgaon',
              img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
              price: '₹8,262',
              rating: 4.79,
              reviews: 156,
              isGuestFavourite: true,
            },
            {
              id: '18',
              title: 'Apartment in Gurgaon',
              location: 'Gurgaon',
              img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
              price: '₹7,119',
              rating: 4.43,
              reviews: 203,
            },
            {
              id: '19',
              title: 'Flat in Sector 43',
              location: 'Gurgaon',
              img: '/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp',
              price: '₹6,886',
              rating: 4.84,
              reviews: 178,
              isGuestFavourite: true,
            },
            {
              id: '20',
              title: 'Bed and breakfast in Gurgaon',
              location: 'Gurgaon',
              img: '/assets/search/97bc37a6-9a1b-4bb2-8564-771319b246fb.webp',
              price: '₹9,322',
              rating: 5.0,
              reviews: 94,
            },
            {
              id: '21',
              title: 'Flat in Subhash Lok',
              location: 'Gurgaon',
              img: '/assets/search/dde44668-1df5-41b6-8f91-5051975c4865.webp',
              price: '₹12,286',
              rating: 4.95,
              reviews: 145,
            },
          ]}
        />

        {/* Available in New Delhi this weekend */}
        <AppPropertySection
          title="Available in New Delhi this weekend"
          onNavigate={handleNavigate}
          isLoading={isLoading}
          properties={[
            {
              id: '22',
              title: 'Cozy Flat in South Delhi',
              location: 'New Delhi',
              img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
              price: '₹5,837',
              rating: 4.82,
              reviews: 134,
              isGuestFavourite: true,
            },
            {
              id: '23',
              title: 'Room in Karol Bagh',
              location: 'New Delhi',
              img: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ3OTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
              price: '₹4,928',
              rating: 4.67,
              reviews: 98,
              isGuestFavourite: true,
            },
            {
              id: '24',
              title: 'Apartment in Dwarka',
              location: 'New Delhi',
              img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
              price: '₹7,453',
              rating: 4.91,
              reviews: 187,
              isGuestFavourite: true,
            },
            {
              id: '25',
              title: 'Flat in Connaught Place',
              location: 'New Delhi',
              img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
              price: '₹8,765',
              rating: 4.88,
              reviews: 212,
              isGuestFavourite: true,
            },
            {
              id: '26',
              title: 'Guest suite in Vasant Kunj',
              location: 'New Delhi',
              img: '/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp',
              price: '₹6,234',
              rating: 4.75,
              reviews: 156,
              isGuestFavourite: true,
            },
            {
              id: '27',
              title: 'Rental unit in Saket',
              location: 'New Delhi',
              img: '/assets/search/97bc37a6-9a1b-4bb2-8564-771319b246fb.webp',
              price: '₹9,127',
              rating: 4.93,
              reviews: 201,
            },
            {
              id: '28',
              title: 'Home in Paharganj',
              location: 'New Delhi',
              img: '/assets/search/dde44668-1df5-41b6-8f91-5051975c4865.webp',
              price: '₹5,492',
              rating: 4.69,
              reviews: 143,
            },
          ]}
        />
      </main>

      {/* Top Agents */}
      <AppTopAgents onNavigate={handleNavigate} />

      {/* How It Works */}
      <AppHowItWorks />

      {/* Testimonials */}
      <AppTestimonials />

      {/* Pre-Launch Section with Banner */}
      <AppPreLaunch />

      {/* Featured Projects */}
      <AppPropertySection
        title="Featured Projects"
        onNavigate={handleNavigate}
        isLoading={isLoading}
        properties={[
          {
            id: '29',
            title: 'Luxury Apartment in Sector 17',
            location: 'Chandigarh',
            img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
            price: '₹12,500',
            rating: 4.95,
            reviews: 234,
            isGuestFavourite: true,
          },
          {
            id: '30',
            title: 'Modern Flat in Zirakpur',
            location: 'Zirakpur',
            img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
            price: '₹9,800',
            rating: 4.88,
            reviews: 189,
            isGuestFavourite: true,
          },
          {
            id: '31',
            title: 'Spacious House in Mohali',
            location: 'Mohali',
            img: '/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp',
            price: '₹15,200',
            rating: 4.92,
            reviews: 156,
            isGuestFavourite: true,
          },
          {
            id: '32',
            title: 'Cozy Room in Sector 22',
            location: 'Chandigarh',
            img: '/assets/search/97bc37a6-9a1b-4bb2-8564-771319b246fb.webp',
            price: '₹5,500',
            rating: 4.76,
            reviews: 112,
            isGuestFavourite: true,
          },
          {
            id: '33',
            title: 'Premium Apartment in Panchkula',
            location: 'Panchkula',
            img: '/assets/search/dde44668-1df5-41b6-8f91-5051975c4865.webp',
            price: '₹11,300',
            rating: 4.89,
            reviews: 201,
            isGuestFavourite: true,
          },
          {
            id: '34',
            title: 'Studio Apartment in Kharar',
            location: 'Kharar',
            img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
            price: '₹7,200',
            rating: 4.65,
            reviews: 98,
          },
          {
            id: '35',
            title: 'Family Home in Sector 35',
            location: 'Chandigarh',
            img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
            price: '₹18,500',
            rating: 4.97,
            reviews: 267,
            isGuestFavourite: true,
          },
        ]}
      />

      {/* bottom banner */}
      <AppBanner />

      {/* footer */}
      <AppFooter />
    </>
  );
};

export const getStaticProps = async () => {
  const exploreNearby = await getExploreNearby();
  const liveAnywhere = await getLiveAnywhere();

  return {
    props: { exploreNearby, liveAnywhere },
  };
};

export default Home;
