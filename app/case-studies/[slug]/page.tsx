// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCaseStudy } from '@/lib/cosmic';
import type { CaseStudy } from '@/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy: CaseStudy | null = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            ← Back to Case Studies
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {caseStudy.metadata.project_title}
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4">
              {caseStudy.metadata.client_name}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {caseStudy.metadata.project_overview}
            </p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {caseStudy.metadata.featured_image?.imgix_url && (
          <div className="mb-8">
            <img 
              src={`${caseStudy.metadata.featured_image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={caseStudy.metadata.project_title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              width="800"
              height="400"
            />
          </div>
        )}

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            {/* Challenge */}
            {caseStudy.metadata.challenge && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <div 
                  className="prose prose-lg text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
                />
              </section>
            )}

            {/* Solution */}
            {caseStudy.metadata.solution && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <div 
                  className="prose prose-lg text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
                />
              </section>
            )}

            {/* Results */}
            {caseStudy.metadata.results && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Results</h2>
                <div 
                  className="prose prose-lg text-gray-700"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Client</p>
                  <p className="text-gray-900">{caseStudy.metadata.client_name}</p>
                </div>
                {caseStudy.metadata.project_duration && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">Duration</p>
                    <p className="text-gray-900">{caseStudy.metadata.project_duration}</p>
                  </div>
                )}
                {caseStudy.metadata.project_url && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">Website</p>
                    <a 
                      href={caseStudy.metadata.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Live Site →
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Services Used */}
            {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Services Used</h3>
                <div className="space-y-2">
                  {caseStudy.metadata.services_used.map((service) => (
                    <div 
                      key={service.id}
                      className="flex items-center p-2 bg-gray-50 rounded-lg"
                    >
                      {service.metadata.service_icon && (
                        <span className="text-lg mr-3">{service.metadata.service_icon}</span>
                      )}
                      <span className="text-gray-900">{service.metadata.service_name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Images */}
        {caseStudy.metadata.project_images && caseStudy.metadata.project_images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.metadata.project_images.map((image, index) => (
                <div key={index} className="aspect-video">
                  <img 
                    src={`${image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                    alt={`${caseStudy.metadata.project_title} - Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    width="600"
                    height="300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}