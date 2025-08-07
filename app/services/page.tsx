import { getServices } from '@/lib/cosmic';
import type { Service } from '@/types';

export default async function ServicesPage() {
  const services: Service[] = await getServices();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We deliver comprehensive digital solutions to help your business grow and succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {service.metadata.featured_image?.imgix_url && (
                    <div className="h-48 bg-gray-200">
                      <img 
                        src={`${service.metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                        alt={service.metadata.service_name}
                        className="w-full h-full object-cover"
                        width="400"
                        height="200"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      {service.metadata.service_icon && (
                        <span className="text-2xl mr-3">{service.metadata.service_icon}</span>
                      )}
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.metadata.service_name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.metadata.short_description}
                    </p>
                    {service.metadata.full_description && (
                      <div 
                        className="text-gray-700 mb-4"
                        dangerouslySetInnerHTML={{ __html: service.metadata.full_description }}
                      />
                    )}
                    {service.metadata.starting_price && (
                      <p className="text-lg font-semibold text-blue-600 mb-4">
                        Starting at {service.metadata.starting_price}
                      </p>
                    )}
                    {service.metadata.key_features && service.metadata.key_features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {service.metadata.key_features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No services found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}