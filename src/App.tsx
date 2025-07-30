import { useState } from 'react';
import { Heart, Star, Menu, X, Phone } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  category: string;
  unit: "gm" | "pc";
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products: Product[] = [
    {
      id: 1,
      name: "Choco Biscuits",
      price: 10.00,
      unit: "pc",
      image: `choco_biscuits.jpg`,
      rating: 4.9,
      description: "Rich, velvety dark chocolate truffles with a smooth ganache center",
      category: "biscuits"
    },
    {
      id: 2,
      name: "Almonds chocolates",
      price: 190,
      unit: "gm",
      image: `almonds_chocolate.jpg`,
      rating: 4.8,
      description: "Creamy milk chocolate hearts perfect for gifting",
      category: "chocolate"
    },
    {
      id: 3,
      name: "Oreo balls",
      price: 15,
      unit: "pc",
      image: `Oreo_balls.jpg`,
      rating: 5.0,
      description: "Curated selection of our finest artisan chocolates",
      category: "chocolate balls"
    },
    {
      id: 4,
      name: "White Chocolate Pralines",
      price: 0,
      unit: "pc",
      image: `choco_biscuits.jpg`,
      rating: 4.7,
      description: "Delicate white chocolate pralines with hazelnut filling",
      category: "pralines"
    },
    {
      id: 5,
      name: "Ruby Chocolate Selection",
      price: 0,
      unit: "pc",
      image: "https://images.pexels.com/photos/3725744/pexels-photo-3725744.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      description: "Exotic ruby chocolate with natural berry flavor",
      category: "specialty"
    },
    {
      id: 6,
      name: "Chocolate Covered Strawberries",
      price: 0,
      unit: "pc",
      image: "https://images.pexels.com/photos/4113716/pexels-photo-4113716.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      description: "Fresh strawberries dipped in premium chocolate",
      category: "fruits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white fixed w-full z-50 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text text-transparent">
              Choco_11:11
            </span>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-amber-600">Home</a>
            <a href="#products" className="hover:text-amber-600">Products</a>
            <a href="#about" className="hover:text-amber-600">About</a>
            <a href="#contact" className="hover:text-amber-600">Contact</a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <a href="#home" className="block py-2 hover:text-amber-600">Home</a>
            <a href="#products" className="block py-2 hover:text-amber-600">Products</a>
            <a href="#about" className="block py-2 hover:text-amber-600">About</a>
            <a href="#contact" className="block py-2 hover:text-amber-600">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Crafted with
                <span className="block bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text text-transparent">
                  Love & Chocolate
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover our artisan chocolate collection, handcrafted with the finest ingredients
                and perfected through generations of chocolate mastery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Shop Collection
                </button>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300"
                >
                  Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="Oreo_balls.jpg"
                alt="Premium Chocolates"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.9</span>
                  <span className="text-gray-600">rating</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each piece is carefully crafted using traditional techniques and the finest cocoa beans from around the world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">
                      ₹
                      {product.unit === "gm"
                        ? (product.price / (product.weight || 1)).toFixed(2) + "/200gm"
                        : product.price.toFixed(2) + "/pc"}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chocolate Making Process"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to the World of
                <span className="block bg-gradient-to-r from-amber-600 to-orange-800 bg-clip-text text-transparent">
                  Chocolate Delight
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We’ve just opened our doors, bringing you handcrafted chocolates made with love, premium ingredients, and a passion for perfection.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every bite is a celebration of rich flavor and indulgence. Whether you're a chocolate lover or just discovering the magic, we can't wait to share our creations with you.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">2025</div>
                  <div className="text-gray-600">Year We Started</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-gray-600">Passion & Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our chocolates or need help with your order? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:7096674382" className="text-gray-300 hover:underline">
                +91 7096674382
              </a>
            </div>

            <div className="text-center">
              <a
                href="https://instagram.com/yourusername" // Replace with your actual IG handle
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <i className="fa fa-instagram text-white text-2xl" aria-hidden="true"></i>
              </a>
              <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
              <p className="text-gray-300">@11_CHOCO_11</p> {/* Replace with actual username */}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-800 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">Choco_11:11</span>
              </div>
              <p className="text-gray-300">
                Passionately crafting premium chocolates – a new beginning inspired by tradition and love.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Products</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Join our journey — get the latest updates and sweet deals.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-full text-gray-900 focus:outline-none"
                />
                <button className="bg-amber-600 px-6 py-2 rounded-r-full hover:bg-amber-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Choco_11:11. All rights reserved. Handcrafted with ❤️ and chocolate for a sweet beginning.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;