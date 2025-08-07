import Link from 'next/link';
import type { Service } from '@/types';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-4">
                {service.metadata.service_icon && (
                  <span className="text-3xl mr-3">{service.metadata.service_icon}</span>
                )}
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.metadata.service_name}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">
                {service.metadata.short_description}
              </p>
              
              {service.metadata.starting_price && (
                <p className="text-primary-600 font-semibold mb-4">
                  Starting at {service.metadata.starting_price}
                </p>
              )}
              
              {service.metadata.key_features && service.metadata.key_features.length > 0 && (
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {service.metadata.key_features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <Link
                href={`/services/${service.slug}`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}