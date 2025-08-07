# Digital Agency Website Platform

![Digital Agency Website Preview](https://imgix.cosmicjs.com/0545ead0-73ad-11f0-a051-23c10f41277a-photo-1561070791-2526d30994b5-1754584739708.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive digital agency website built with Next.js 15 that showcases services, team members, case studies, and client testimonials. This professional platform demonstrates expertise across branding, web development, and digital marketing services.

## Features

- **Services Showcase** - Detailed service pages with pricing and features
- **Case Study Portfolio** - Project galleries with results and testimonials
- **Team Member Profiles** - Professional bios with skills and experience
- **Client Testimonials** - Social proof with ratings and company logos
- **Responsive Design** - Optimized for all device sizes
- **SEO Optimized** - Built-in SEO best practices
- **Dynamic Routing** - Individual pages for services and case studies
- **Modern UI** - Clean, professional design with smooth animations

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=6894d5d8d88e61992bc79baf&clone_repository=6894d77ed88e61992bc79bd3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Content management and API integration
- **React** - Component-based UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Bun package manager
- Cosmic account with the cloned bucket

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd digital-agency-website
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables by creating a `.env.local` file:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Getting Team Members
```typescript
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This website integrates with your Cosmic bucket to display:

- **Services** - Complete service listings with descriptions, pricing, and features
- **Team Members** - Staff profiles with photos, bios, and skills
- **Case Studies** - Project portfolios with client information and results
- **Testimonials** - Client reviews with ratings and company details

All content is managed through your Cosmic dashboard and automatically updates on the website.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in the Vercel dashboard
3. Deploy automatically with git push

### Netlify
1. Connect your repository to Netlify
2. Set environment variables in the Netlify dashboard
3. Deploy with automatic builds

### Manual Deployment
```bash
bun run build
bun run start
```

Set the environment variables in your hosting platform's dashboard for production deployment.
<!-- README_END -->