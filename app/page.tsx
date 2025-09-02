'use client'

import { useState } from 'react'

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Mirrorly Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-stone-900">Mirrorly</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#pricing" className="text-stone-600 hover:text-amber-600 transition-colors">
                Pricing
              </a>
              <a href="#demo" className="text-stone-600 hover:text-amber-600 transition-colors">
                Demo
              </a>
              <a href="#contact" className="text-stone-600 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"> Virtual Try-On</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
              Experience the future of online shopping. Try on clothes, accessories, and more directly in your browser with our Chrome extension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://chrome.google.com/webstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-700 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                🚀 Add to Chrome - Free
              </a>
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-4"
              >
                ▶️ Watch Demo
              </button>
            </div>
            <p className="text-sm text-stone-500 mt-4">
              No account required • 5 free try-ons • Upgrade anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Why Choose Mirrorly?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Advanced AI technology meets seamless browser integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">AI-Powered</h3>
              <p className="text-stone-600">
                Advanced machine learning algorithms provide realistic try-on results
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Instant Results</h3>
              <p className="text-stone-600">
                Get try-on results in seconds, not minutes
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Privacy First</h3>
              <p className="text-stone-600">
                Your images are processed securely and never stored
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="section-padding bg-stone-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Watch how easy it is to try on clothes with Mirrorly
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-stone-100 to-amber-100 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg"
                  >
                    <span className="text-white text-2xl ml-1">▶️</span>
                  </button>
                ) : (
                  <div className="text-center p-8">
                    <p className="text-stone-600 mb-4">Demo video would be embedded here</p>
                    <p className="text-sm text-stone-500">
                      Replace with your actual demo video or screenshots
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Start free, upgrade when you need more
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-stone-900 mb-4">$0</div>
              <p className="text-stone-600 mb-6">Perfect for trying out Mirrorly</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  5 try-ons per month
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic AI try-on
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Chrome extension access
                </li>
              </ul>
              <a 
                href="https://chrome.google.com/webstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Get Started Free
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Pro</h3>
              <div className="text-4xl font-bold text-stone-900 mb-4">$9.99<span className="text-lg text-stone-600">/month</span></div>
              <p className="text-stone-600 mb-6">For regular users</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  50 try-ons per month
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced AI try-on
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Email support
                </li>
              </ul>
              <a 
                href="https://chrome.google.com/webstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Upgrade to Pro
              </a>
            </div>

            {/* Unlimited Plan */}
            <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Unlimited</h3>
              <div className="text-4xl font-bold text-stone-900 mb-4">$19.99<span className="text-lg text-stone-600">/month</span></div>
              <p className="text-stone-600 mb-6">For power users</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited try-ons
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Premium AI models
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Fastest processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
              <a 
                href="https://chrome.google.com/webstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Go Unlimited
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using Mirrorly to make better fashion choices
          </p>
          <a 
            href="https://chrome.google.com/webstore" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            🚀 Add to Chrome Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-white section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
                          <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Mirrorly Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Mirrorly</span>
            </div>
              <p className="text-stone-400">
                AI-powered virtual try-on technology for the modern shopper.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chrome Store</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-stone-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-stone-400">
                <li><a href="mailto:hello@mirrorly.ai" className="hover:text-white transition-colors">hello@mirrorly.ai</a></li>
                <li><a href="https://twitter.com/mirrorly" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; 2024 Mirrorly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
