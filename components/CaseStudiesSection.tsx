import Link from 'next/link';
import type { CaseStudy } from '@/types';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {caseStudy.metadata.featured_image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata.project_title}
                    className="w-full h-full object-cover"
                    width={800}
                    height={450}
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary-600 font-medium text-sm">
                    {caseStudy.metadata.client_name}
                  </span>
                  {caseStudy.metadata.project_duration && (
                    <span className="text-gray-500 text-sm">
                      {caseStudy.metadata.project_duration}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {caseStudy.metadata.project_title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {caseStudy.metadata.project_overview}
                </p>
                
                {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Services used:</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.metadata.services_used.map((service) => (
                        <span
                          key={service.id}
                          className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                        >
                          {service.metadata.service_name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}