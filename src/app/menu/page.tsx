import ClientLayout from '@/components/ClientLayout';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';

const menuItems = {
  hamSubs: [
    {
      name: "Chicken Ham Sub",
      sizes: {
        medium: 6000,
        large: 7500
      },
      description: "Savor our tender sliced chicken paired with premium ham, fresh vegetables, and our signature sauce in this hearty sub.",
      image: "/images/chickenHam.jpg"
    },
    {
      name: "Pork Ham Sub",
      sizes: {
        medium: 6000,
        large: 7500
      },
      description: "Experience the perfect harmony of succulent pork and premium ham, topped with crisp vegetables and our house dressing.",
      image: "/images/pork.jpg"
    },
    {
      name: "Beef Ham Sub",
      sizes: {
        medium: 6000,
        large: 7500
      },
      description: "Indulge in our juicy sliced beef combined with premium ham, fresh greens, and our special sauce for a satisfying meal.",
      image: "/images/beef.jpg"
    },
    {
      name: "Roast Ham Sub",
      price: 7000,
      description: "Delight in our signature roasted ham, slow-cooked to perfection and served with fresh toppings on a freshly baked roll.",
      image: "/images/chickenRoast.jpg"
    },
    {
      name: "Mixed Ham Sub",
      sizes: {
        medium: 6500,
        large: 8000
      },
      description: "Experience the delightful combination of our premium ham varieties, perfectly layered with fresh toppings.",
      image: "/images/meatlovers.jpg"
    },
  ],
  meatClubSubs: [
    {
      name: "Roast Chicken Sub",
      sizes: {
        medium: 8000,
        large: 9500
      },
      description: "Treat yourself to our perfectly roasted chicken, seasoned with herbs and served with fresh vegetables on artisanal bread.",
      image: "/images/chickenRoast.jpg"
    },
    {
      name: "Roast Beef Sub",
      sizes: {
        medium: 8000,
        large: 9500
      },
      description: "Indulge in our juicy roast beef, served with or without ham, and topped with fresh vegetables on a freshly baked roll.",
      image: "/images/beef.jpg"
    },
    {
      name: "Vegetarian Sub",
      sizes: {
        medium: 5000,
        large: 6000
      },
      description: "Delight in a variety of fresh vegetables of your choice, served in a medium-sized sub.",
      image: "/images/veggie.jpg"
    },
    {
      name: "Meat Lovers Sub",
      price: 14000,
      description: "Indulge in an everything sandwich, packed with all our premium meats and toppings.",
      image: "/images/meatlovers.jpg"
    }
  ],
  extras: [
    {
      name: "Salami",
      price: 1000,
      description: "Add a serving of our Italian-style salami for an extra flavor boost.",
      image: "/images/salami.jpg"
    },
    {
      name: "Mixed Meat",
      price: 1000,
      description: "Enhance your sub with a mix of our premium meats.",
      image: "/images/mixedMeat.jpg"
    },
    {
      name: "Extra Ham",
      price: 500,
      description: "Add an extra portion of our premium sliced ham to make your sub even more satisfying.",
      image: "/images/ham.jpeg"
    },
    {
      name: "Mozzarella Cheese",
      price: 500,
      description: "Enhance your sub with creamy, melted mozzarella cheese for an extra layer of deliciousness.",
      image: "/images/mozarella.webp"
    },
    {
      name: "Extra Cheese",
      price: 500,
      description: "Add an extra layer of cheese to your sub for a richer taste.",
      image: "/images/cheese.jpg"
    }
  ],
  drinks: [
    {
      name: "Blue Mountain",
      price: 8500,
      description: "A refreshing blend of tropical flavors to invigorate your senses.",
      image: "/images/lemonade.jpeg"
    },
    {
      name: "Mojitos",
      price: 8500,
      description: "Choose from strawberry, apple, passion, or pineapple for a fruity twist on a classic mojito.",
      image: "/images/mojito.jpg"
    },
    {
      name: "Strawberry Lemonade",
      price: 8500,
      description: "A sweet and tangy blend of strawberries and lemons, perfect for a hot day.",
      image: "/images/mocktail.jpg"
    },
    {
      name: "Regular Lemonade",
      price: 8500,
      description: "Classic lemonade made with fresh lemons for a refreshing taste.",
      image: "/images/lemonade2.jpeg"
    },
    {
      name: "Peach Iced Tea",
      price: 8500,
      description: "A delightful iced tea infused with the sweet flavor of ripe peaches.",
      image: "/images/strawberryLemon.jpeg"
    },
    {
      name: "Iced Coffee Selection",
      price: 8500,
      description: "Explore our refreshing iced coffee selection, featuring Iced Mocha, Iced Latte, and Iced Americano. Each option offers a unique blend of rich espresso and creamy flavors, perfect for cooling down on a warm day.",
      image: "/images/icedCoffee.jpg"
    },
  ],
  milkshakes: [
    {
      name: "Power Shake",
      price: 8500,
      description: "A protein-packed shake with peanut butter for an energy boost.",
      image: "/images/powerShake.png"
    },
    {
      name: "Vanilla Milkshake",
      price: 8500,
      description: "Classic vanilla milkshake, creamy and delicious.",
      image: "/images/vanillaShake.jpg"
    },
    {
      name: "Chocolate Milkshake",
      price: 8500,
      description: "Rich and creamy chocolate milkshake for chocolate lovers.",
      image: "/images/choclateshake.webp"
    },
    {
      name: "Strawberry Milkshake",
      price: 8500,
      description: "Sweet and fruity strawberry milkshake, a classic favorite.",
      image: "/images/strawberryShake.jpeg"
    },
    {
      name: "Coffee Shake",
      price: 8500,
      description: "A coffee-flavored milkshake for a delightful caffeine treat.",
      image: "/images/coffeShake.jpg"
    }
  ],
  hotDrinks: [
    {
      name: "Hot Coffee Selection",
      price: 4000,
      description: "Enjoy our delightful hot coffee selection, featuring Latte, Cappuccino, and Mocha. Each option is crafted with rich espresso and steamed milk, perfect for warming up your day.",
      image: "/images/hot.jpeg"
    },
    {
      name: "Black Coffee",
      price: 4000,
      description: "Rich and bold black coffee, perfect for purists.",
      image: "/images/blackcoffee.jpeg"
    }
  ],
  teas: [
    {
      name: "African/Spice Tea",
      price: 3000,
      description: "Choose between our traditional African tea with a unique blend of spices or our warming Spice Tea infused with aromatic spices. Both served hot and freshly brewed.",
      image: "/images/afrotea.jpg"
    },
    {
      name: "Black Tea",
      price: 3000,
      description: "Classic black tea, rich in flavor and aroma.",
      image: "/images/blacktea.jpeg"
    }
  ]
};

export default function Menu() {
  return (
    <ClientLayout>
      <PageTransition>
        <main>
          <section className="py-12 bg-light">
            <div className="container-custom">
              <h1 className="text-4xl font-display text-center mb-8">Our Menu</h1>
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg text-center flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="font-semibold text-primary">
                      LARGE SUBS - extras included
                    </p>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">HAM SUBS</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.hamSubs.map((item, index) => (
                      <div key={index} className="flex gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            {item.sizes ? (
                              <select className="text-primary font-medium">
                                {Object.entries(item.sizes).map(([size, price]) => (
                                  <option key={size} value={size}>
                                    {size.charAt(0).toUpperCase() + size.slice(1)} - RWF {price}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <span className="text-primary font-medium">RWF {item.price}</span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">MEAT CLUB SUBS</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.meatClubSubs.map((item, index) => (
                      <div key={index} className="flex gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            {item.sizes ? (
                              <select className="text-primary font-medium">
                                {Object.entries(item.sizes).map(([size, price]) => (
                                  <option key={size} value={size}>
                                    {size.charAt(0).toUpperCase() + size.slice(1)} - RWF {price}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <span className="text-primary font-medium">RWF {item.price}</span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-10">
                  <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">EXTRAS</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.extras.map((item, index) => (
                      <div key={index} className="flex gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <span className="text-primary font-medium">RWF {item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">DRINKS</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.drinks.map((item, index) => (
                      <div key={index} className="flex gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <span className="text-primary font-medium">RWF {item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">MILKSHAKES</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.milkshakes.map((item, index) => (
                      <div key={index} className="flex gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <span className="text-primary font-medium">RWF {item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">HOT DRINKS</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.hotDrinks.map((item, index) => (
                      <div key={index} className="flex gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <span className="text-primary font-medium">RWF {item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6">TEAS</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.teas.map((item, index) => (
                      <div key={index} className="flex gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md">
                          <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md object-cover w-full h-full" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <span className="text-primary font-medium">RWF {item.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer at the bottom */}
                <div className="text-center mt-10 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic">Images shown are for illustration purposes only. Actual product may vary.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </ClientLayout>
  );
} 