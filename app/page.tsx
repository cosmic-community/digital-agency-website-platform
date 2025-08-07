import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic';

export default async function Home() {
  const [services, teamMembers, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ]);

  return (
    <>
      <HeroSection />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies.slice(0, 3)} />
      <TeamSection teamMembers={teamMembers} />
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}