import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const renderStars = (rating: string) => {
    const numStars = parseInt(rating);
    return (
      <div className="flex text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < numStars ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {testimonial.metadata.rating && renderStars(testimonial.metadata.rating.key)}
              
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.metadata.testimonial_text}"
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.metadata.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=60&h=60&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name}
                    className="w-12 h-12 rounded-full mr-4"
                    width={60}
                    height={60}
                  />
                )}
                
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.metadata.client_name}
                  </p>
                  <div className="text-sm text-gray-600">
                    {testimonial.metadata.job_title && (
                      <span>{testimonial.metadata.job_title}</span>
                    )}
                    {testimonial.metadata.job_title && testimonial.metadata.company && (
                      <span className="mx-1">at</span>
                    )}
                    {testimonial.metadata.company && (
                      <span className="font-medium">{testimonial.metadata.company}</span>
                    )}
                  </div>
                </div>
              </div>
              
              {testimonial.metadata.service_used && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Service: <span className="text-primary-600 font-medium">
                      {testimonial.metadata.service_used.metadata.service_name}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}