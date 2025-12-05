import Image from 'next/image';

const AppHero = () => {
  return (
    <section className="relative h-[65vh] md:h-[85vh]">
      <div className="absolute z-10 w-full bg-gradient-to-b from-transparent-black to-transparent h-28" />
      <Image
        src="/assets/hero-new.jpg"
        layout="fill"
        alt="hero"
        objectFit="cover"
        objectPosition="center bottom"
        placeholder="blur"
        blurDataURL="/assets/hero-new.jpg"
        quality={50}
      />

      <div className="container">
        <div className="absolute z-10 left-0 right-0 top-[45%] md:top-[50%] xl:top-[40%]">
          <h1 className="max-w-[300px] xl:max-w-[400px] mx-auto px-4 text-2xl font-bold tracking-wide text-center text-white md:px-0 md:text-3xl xl:text-4xl drop-shadow-lg">
            Find Your Perfect Rental Property
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
