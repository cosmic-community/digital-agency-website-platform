import { getTeamMembers } from '@/lib/cosmic';
import type { TeamMember } from '@/types';

export default async function TeamPage() {
  const teamMembers: TeamMember[] = await getTeamMembers();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our Team
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Meet the talented individuals who make our agency exceptional. We're passionate about delivering outstanding results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamMembers.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {member.metadata.profile_photo?.imgix_url && (
                    <div className="h-64 bg-gray-200">
                      <img 
                        src={`${member.metadata.profile_photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                        alt={member.metadata.full_name}
                        className="w-full h-full object-cover"
                        width="300"
                        height="300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {member.metadata.full_name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {member.metadata.job_title}
                      </p>
                      {member.metadata.years_experience && (
                        <p className="text-sm text-gray-500 mt-1">
                          {member.metadata.years_experience} years experience
                        </p>
                      )}
                    </div>
                    
                    {member.metadata.bio && (
                      <p className="text-gray-600 mb-4">
                        {member.metadata.bio}
                      </p>
                    )}

                    {member.metadata.skills && member.metadata.skills.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.metadata.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      {member.metadata.linkedin_url && (
                        <a 
                          href={member.metadata.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.metadata.email && (
                        <a 
                          href={`mailto:${member.metadata.email}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No team members found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}