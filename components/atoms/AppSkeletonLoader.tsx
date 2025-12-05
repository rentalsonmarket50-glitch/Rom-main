import { FC } from 'react';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'card' | 'text' | 'image' | 'list' | 'map';
  count?: number;
}

const SkeletonLoader: FC<SkeletonLoaderProps> = ({ 
  className = '', 
  variant = 'card',
  count = 1 
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const variants = {
    card: 'h-64 w-full',
    text: 'h-4 w-full mb-2',
    image: 'h-48 w-full',
    list: 'h-24 w-full mb-4',
    map: 'h-full w-full',
  };

  if (variant === 'list' && count > 1) {
    return (
      <div className={className}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={`${baseClasses} ${variants.list}`} />
        ))}
      </div>
    );
  }

  return <div className={`${baseClasses} ${variants[variant]} ${className}`} />;
};

export default SkeletonLoader;

