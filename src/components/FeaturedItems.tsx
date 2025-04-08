import Image from 'next/image';
import Link from 'next/link';

const featuredItems = [
  {
    name: "Mixed Ham Sub",
    price: 5500,
    description: "Discover a delightful combination of our premium ham varieties, perfectly layered with fresh toppings in a medium-sized sub.",
    image: "/images/meatlovers.jpg"
  },
  {
    name: "Chicken Ham Sub",
    price: 7000,
    description: "Savor our tender sliced chicken paired with premium ham, fresh vegetables, and our signature sauce in this hearty sub.",
    image: "/images/chickenHam.jpg"
  },
  {
    name: "Beef Ham Sub",
    price: 7000,
    description: "Indulge in our juicy sliced beef combined with premium ham, fresh greens, and our special sauce for a satisfying meal.",
    image: "/images/beef.jpg"
  }
];

export default function FeaturedItems() {
  return (
    <section className="py-16 bg-light">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">Fan Favorites</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-48">
                <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-primary font-medium">RWF {item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link 
                  href="/menu" 
                  className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 