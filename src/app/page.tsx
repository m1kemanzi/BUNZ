import ClientLayout from '@/components/ClientLayout';
import Image from 'next/image';
import FeaturedItems from '@/components/FeaturedItems';
import Location from '@/components/Location';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <ClientLayout>
      <PageTransition>
        <main>
          {/* Hero Section with Restaurant Image */}
          <section className="relative h-[600px] w-full">
            <Image
              src="/images/sanwich.jpeg"
              alt="BUNZ Restaurant Exterior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="container-custom h-full flex flex-col justify-center items-start text-white">
                <h1 className="text-5xl md:text-6xl font-display mb-4">
                  Welcome to BUNZ
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                  Experience the best sandwiches in Kigali, crafted with fresh ingredients 
                  in our modern and cozy locations.
                </p>
                <a href="/menu" className="btn-primary">
                  View Our Menu
                </a>
              </div>
            </div>
          </section>

          <FeaturedItems />
          <Location />
        </main>
      </PageTransition>
    </ClientLayout>
  );
} 