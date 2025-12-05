import { FC } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  img: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Mehta',
    location: 'Mumbai',
    img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
    rating: 5,
    text: 'Found the perfect PG through Rentals On Market. The process was smooth and the property was exactly as described.',
  },
  {
    id: '2',
    name: 'Anjali Desai',
    location: 'Bangalore',
    img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
    rating: 5,
    text: 'Great platform for finding rental properties. The filters helped me find exactly what I was looking for.',
  },
  {
    id: '3',
    name: 'Vikram Singh',
    location: 'Delhi',
    img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
    rating: 4,
    text: 'Easy to use interface and great customer support. Highly recommend for anyone looking for rentals.',
  },
];

const AppTestimonials: FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600">Real experiences from our satisfied customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-6 text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTestimonials;
