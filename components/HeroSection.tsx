import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
      <div className="container-max-width">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with 
            <span className="text-primary-600"> Digital Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're a full-service digital agency specializing in branding, web development, and digital marketing. 
            Let us help you create meaningful connections with your audience and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              View Our Services
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
        
        <div className="mt-16">
          <img
            src="https://imgix.cosmicjs.com/0545ead0-73ad-11f0-a051-23c10f41277a-photo-1561070791-2526d30994b5-1754584739708.jpg?w=1200&h=600&fit=crop&auto=format,compress"
            alt="Digital Agency Team at Work"
            className="rounded-lg shadow-2xl mx-auto"
            width={1200}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}