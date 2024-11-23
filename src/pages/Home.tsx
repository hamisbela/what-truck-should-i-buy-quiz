import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What Truck Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What truck should I buy?"</strong>, you're not alone! Choosing the perfect truck can be overwhelming with so many options available. From mid-size pickups to heavy-duty trucks, finding the best vehicle for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What Truck Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal truck for your lifestyle.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What Truck Should I Buy?" Quiz?</h2>
            <p>
              With countless trucks on the market, deciding on the right one can feel overwhelming. Whether you need a work truck, off-road adventurer, or daily driver, our <strong>What Truck Should I Buy? Quiz</strong> is designed to match you with a truck that fits your lifestyle, budget, and hauling requirements.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Truck Size:</strong> Mid-size, Full-size, or Heavy-duty</li>
              <li><strong>Performance:</strong> Engine power, towing capacity, and payload</li>
              <li><strong>Usage:</strong> Work, recreation, or daily driving</li>
              <li><strong>Budget:</strong> Find the perfect truck within your price range</li>
              <li><strong>Features:</strong> Bed length, cab size, and technology options</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Truck Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Work:</strong> Trucks with high payload and towing capacity</li>
              <li><strong>Best for Off-Road:</strong> Rugged trucks with 4x4 capability</li>
              <li><strong>Best for Daily Use:</strong> Comfortable trucks with good fuel economy</li>
              <li><strong>Best for Luxury:</strong> Premium trucks with high-end features</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What Truck Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your hauling needs, preferred features, and budget, and we'll recommend the best trucks for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Truck Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Total Cost:</strong> Factor in insurance, maintenance, and fuel</li>
              <li><strong>Towing Needs:</strong> Evaluate your towing requirements</li>
              <li><strong>Test Drive:</strong> Always test drive before making a decision</li>
              <li><strong>Research Reliability:</strong> Check consumer reports and reviews</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our Truck Recommendations?</h2>
            <p>
              Our team consists of automotive experts and truck enthusiasts who stay up-to-date with the latest vehicles and technologies. We regularly update our <strong>What Truck Should I Buy? Quiz</strong> to include new models and features, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Truck?</h2>
            <p>
              Don't waste hours researching – let our <strong>What Truck Should I Buy? Quiz</strong> guide you to the perfect vehicle. Whether you're buying your first truck or upgrading your current one, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}