import { createBucketClient } from '@cosmicjs/sdk';
import type { Service, TeamMember, Testimonial, CaseStudy } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
});

// Services API functions
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Service[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services');
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'services',
      slug
    }).depth(1);
    
    return response.object as Service;
  } catch (error) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching service:', error);
    throw new Error('Failed to fetch service');
  }
}

// Team Members API functions
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as TeamMember[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching team members:', error);
    throw new Error('Failed to fetch team members');
  }
}

// Testimonials API functions
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching testimonials:', error);
    throw new Error('Failed to fetch testimonials');
  }
}

// Case Studies API functions
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as CaseStudy[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching case studies:', error);
    throw new Error('Failed to fetch case studies');
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'case-studies',
      slug
    }).depth(1);
    
    return response.object as CaseStudy;
  } catch (error) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching case study:', error);
    throw new Error('Failed to fetch case study');
  }
}