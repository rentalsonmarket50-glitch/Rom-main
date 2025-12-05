import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

interface Agent {
  id: string;
  name: string;
  img: string;
  properties: number;
  rating: number;
  location: string;
  phone?: string;
  email?: string;
}

interface AppTopAgentsProps {
  onNavigate?: (page: string, query?: any) => void;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    img: '/assets/search/013c9377-349f-418b-8d4c-15f923234a5f.webp',
    properties: 45,
    rating: 4.9,
    location: 'Chandigarh',
    phone: '+91 98765 43210',
    email: 'rajesh@rom.com',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    img: '/assets/search/1379331e-593a-4c1e-af51-222808c85a11.webp',
    properties: 32,
    rating: 4.8,
    location: 'Gurgaon',
    phone: '+91 98765 43211',
    email: 'priya@rom.com',
  },
  {
    id: '3',
    name: 'Amit Singh',
    img: '/assets/search/2dd686bc-0195-40db-a37f-8b02476415b7.webp',
    properties: 28,
    rating: 4.95,
    location: 'New Delhi',
    phone: '+91 98765 43212',
    email: 'amit@rom.com',
  },
  {
    id: '4',
    name: 'Sneha Patel',
    img: '/assets/search/44cb0de7-fa62-49e2-b4b8-68aed14373cb.webp',
    properties: 38,
    rating: 4.87,
    location: 'Zirakpur',
    phone: '+91 98765 43213',
    email: 'sneha@rom.com',
  },
];

const AppTopAgents: FC<AppTopAgentsProps> = ({ onNavigate }) => {
  const router = useRouter();

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-2">Top Agents</h2>
          <p className="text-gray-600">Connect with our verified property experts</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/search', { agentId: agent.id });
                } else {
                  router.push({
                    pathname: '/search',
                    query: { location: agent.location },
                  });
                }
              }}
              className="bg-white rounded-xl border border-gray-200 p-5 cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-blue-50 group-hover:ring-blue-200 transition-all">
                  <Image
                    src={agent.img}
                    alt={agent.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">{agent.name}</h3>
                <p className="mb-3 text-sm text-gray-500">{agent.location}</p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">
                    {agent.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({agent.properties} Properties)
                  </span>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  View Properties
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTopAgents;
