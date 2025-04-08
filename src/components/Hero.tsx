import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-red-600 text-white py-20">
      <div className="container-custom">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
            Fresh, Delicious Sandwiches in Kigali
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            At BUNZ, we craft the most delicious sandwiches using fresh, high-quality 
            ingredients. Visit us for an unforgettable sandwich experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu" className="btn-secondary">
              View Our Menu
            </Link>
            <Link href="/location" className="border-2 border-white px-4 py-2 rounded-md hover:bg-white hover:text-primary transition-all text-center">
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 