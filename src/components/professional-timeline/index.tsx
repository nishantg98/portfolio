import React from 'react';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { SanitizedExperience, SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

interface ProfessionalTimelineProps {
  experiences: SanitizedExperience[];
  educations: SanitizedEducation[];
  loading: boolean;
}

const ProfessionalTimeline: React.FC<ProfessionalTimelineProps> = ({
  experiences,
  educations,
  loading
}) => {
  const renderSkeleton = () => (
    <div className="space-y-6">
      {[1, 2].map((i) => (
        <div key={i} className="flex gap-4">
          {skeleton({ widthCls: 'w-12 h-12', heightCls: 'h-12', shape: 'rounded-full' })}
          <div className="flex-1">
            {skeleton({ widthCls: 'w-48', heightCls: 'h-6', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Experience Section */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <FaBriefcase className="text-2xl text-white" />
            </div>
            <h2 className="card-title text-2xl font-bold">Experience</h2>
          </div>

          {loading ? (
            renderSkeleton()
          ) : (
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-base-300/50 bg-gradient-to-br from-base-200/30 to-base-300/20 hover:from-blue-500/10 hover:to-blue-600/10 hover:border-blue-500/40 transition-all duration-300 p-5"
                >
                  {/* Timeline connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-4 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaBriefcase className="text-white text-xl" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>

                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline font-semibold mb-3"
                      >
                        {exp.company}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      <div className="flex items-center gap-2 text-sm text-base-content/60">
                        <FaCalendarAlt className="text-xs" />
                        <span>{exp.from} - {exp.to}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Education Section */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
              <FaGraduationCap className="text-2xl text-white" />
            </div>
            <h2 className="card-title text-2xl font-bold">Education</h2>
          </div>

          {loading ? (
            renderSkeleton()
          ) : (
            <div className="space-y-4">
              {educations.map((edu, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-base-300/50 bg-gradient-to-br from-base-200/30 to-base-300/20 hover:from-purple-500/10 hover:to-purple-600/10 hover:border-purple-500/40 transition-all duration-300 p-5"
                >
                  {/* Timeline connector */}
                  {index !== educations.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-4 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base mb-1 group-hover:text-purple-600 transition-colors leading-tight">
                        {edu.degree}
                      </h3>

                      <p className="font-semibold text-base-content/80 mb-3 flex items-start gap-2">
                        <FaMapMarkerAlt className="text-xs mt-1 flex-shrink-0 text-purple-500" />
                        <span className="flex-1">{edu.institution}</span>
                      </p>

                      <div className="flex items-center gap-2 text-sm text-base-content/60">
                        <FaCalendarAlt className="text-xs" />
                        <span>{edu.from} - {edu.to}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTimeline;
