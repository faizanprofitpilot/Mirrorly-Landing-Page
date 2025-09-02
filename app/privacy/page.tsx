export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Mirrorly Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-stone-900">Mirrorly</span>
            </div>
            <a href="/" className="text-stone-600 hover:text-amber-600 transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-8">Privacy Policy</h1>
          <p className="text-stone-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-stone max-w-none">
            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-stone-600 mb-4">
              When you use Mirrorly, we collect the following information:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li>Images you upload for virtual try-on (processed but not stored)</li>
              <li>Google account information (email, name) when you sign in</li>
              <li>Usage data (number of try-ons, subscription status)</li>
              <li>Technical data (browser type, extension version)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-stone-600 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li>Provide virtual try-on services</li>
              <li>Manage your subscription and billing</li>
              <li>Improve our AI models and services</li>
              <li>Provide customer support</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">3. Data Storage and Security</h2>
            <p className="text-stone-600 mb-4">
              Your data is protected with industry-standard security measures:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li>Images are processed in real-time and not permanently stored</li>
              <li>User data is encrypted and stored securely in Supabase</li>
              <li>Payment information is handled by Stripe (PCI compliant)</li>
              <li>All data transmission uses HTTPS encryption</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-stone-600 mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li><strong>Google OAuth:</strong> For user authentication</li>
              <li><strong>Supabase:</strong> For database and user management</li>
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>FASHN API:</strong> For AI-powered virtual try-on</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-stone-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">6. Contact Us</h2>
            <p className="text-stone-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-stone-600">
              Email: <a href="mailto:privacy@mirrorly.ai" className="text-amber-600 hover:text-amber-700">privacy@mirrorly.ai</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
