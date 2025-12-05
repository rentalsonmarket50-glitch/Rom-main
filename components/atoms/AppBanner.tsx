import Image from 'next/image';
import Link from 'next/link';

const AppBanner = () => {
  return (
    <section className="my-8 mb-12">
      <div className="container">
        <Link href="/">
          <a className="relative block">
            <div className="h-[400px] lg:h-[400px] object-cover rounded-3xl">
              <div className="absolute inset-0 z-10 md:hidden" />
              <Image
                src="/assets/banner-new.jpg"
                alt="banner"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                placeholder="blur"
                quality={50}
                blurDataURL="/assets/banner-new.jpg"
              />
            </div>

            <div className="absolute z-10 right-8 left-8 sm:right-12 sm:left-12 md:left-16 lg:left-20 md:right-16 lg:right-20 top-8 sm:top-12 md:top-auto md:bottom-1/2 md:translate-y-1/2 md:text-left">
              <h2 className="font-bold sm:font-normal text-white md:mb-3 w-[200px] sm:w-[400px] md:mx-0 text-2xl sm:text-4xl xl:text-5xl leading-tight drop-shadow-lg">
                Find Your Dream Home Today
              </h2>
              <p className="mb-4 text-sm text-white sm:text-lg drop-shadow-md max-w-md">
                Trusted by thousands of satisfied customers. Discover premium rental
                properties with verified listings and expert support.
              </p>
              <button className="px-6 py-3 text-sm font-semibold text-blue-600 bg-white rounded-lg sm:text-base hover:bg-blue-50 transition-colors shadow-lg">
                Explore Properties
              </button>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default AppBanner;
