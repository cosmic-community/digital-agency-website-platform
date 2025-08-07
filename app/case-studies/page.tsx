import Link from 'next/link';
import { getCaseStudies } from '@/lib/cosmic';
import type { CaseStudy } from '@/types';

export default async function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = await getCaseStudies();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Case Studies
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {caseStudy.metadata.featured_image?.imgix_url && (
                    <div className="h-64 bg-gray-200">
                      <img 
                        src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                        alt={caseStudy.metadata.project_title}
                        className="w-full h-full object-cover"
                        width="600"
                        height="320"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-3">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {caseStudy.metadata.project_title}
                      </h2>
                      <p className="text-blue-600 font-medium">
                        {caseStudy.metadata.client_name}
                      </p>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {caseStudy.metadata.project_overview}
                    </p>
                    
                    {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Services Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.metadata.services_used.map((service) => (
                            <span 
                              key={service.id}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {service.metadata.service_icon && (
                                <span className="mr-1">{service.metadata.service_icon}</span>
                              )}
                              {service.metadata.service_name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      {caseStudy.metadata.project_duration && (
                        <p className="text-sm text-gray-500">
                          Duration: {caseStudy.metadata.project_duration}
                        </p>
                      )}
                      <Link 
                        href={`/case-studies/${caseStudy.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read Case Study →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No case studies found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}