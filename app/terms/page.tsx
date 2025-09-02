export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-stone-900 mb-8">Terms of Service</h1>
          <p className="text-stone-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-stone max-w-none">
            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-stone-600 mb-6">
              By using Mirrorly, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-stone-600 mb-4">
              Mirrorly is a Chrome extension that provides AI-powered virtual try-on services. Our service allows you to:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li>Upload images for virtual try-on</li>
              <li>View AI-generated try-on results</li>
              <li>Manage subscription plans</li>
              <li>Access customer support</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">3. User Accounts</h2>
            <p className="text-stone-600 mb-4">
              To use certain features of Mirrorly, you must:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li>Sign in with a valid Google account</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Be responsible for all activities under your account</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">4. Subscription Plans</h2>
            <p className="text-stone-600 mb-4">
              Mirrorly offers the following subscription plans:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li><strong>Free:</strong> 5 try-ons per month</li>
              <li><strong>Pro:</strong> $9.99/month for 50 try-ons</li>
              <li><strong>Unlimited:</strong> $19.99/month for unlimited try-ons</li>
            </ul>
            <p className="text-stone-600 mb-6">
              Subscriptions are billed monthly and can be cancelled at any time through your account settings.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">5. Acceptable Use</h2>
            <p className="text-stone-600 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-stone-600 mb-6 space-y-2">
              <li>Upload inappropriate or offensive content</li>
              <li>Use the service for illegal purposes</li>
              <li>Attempt to reverse engineer our AI models</li>
              <li>Share your account with others</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-stone-600 mb-6">
              Mirrorly and its AI technology are protected by intellectual property laws. You may not copy, modify, or distribute our software without permission.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-stone-600 mb-6">
              Mirrorly is provided "as is" without warranties. We are not liable for any damages arising from your use of the service.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">8. Termination</h2>
            <p className="text-stone-600 mb-6">
              We may terminate your account at any time for violation of these terms. You may cancel your subscription at any time.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-stone-600 mb-6">
              We may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">10. Contact Information</h2>
            <p className="text-stone-600 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-stone-600">
              Email: <a href="mailto:legal@mirrorly.ai" className="text-amber-600 hover:text-amber-700">legal@mirrorly.ai</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
