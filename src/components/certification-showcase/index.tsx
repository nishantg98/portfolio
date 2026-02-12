import React from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

interface CertificationShowcaseProps {
  certifications: SanitizedCertification[];
  loading: boolean;
}

const CertificationShowcase: React.FC<CertificationShowcaseProps> = ({ certifications, loading }) => {
  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="card bg-base-100">
          <div className="card-body">
            {skeleton({ widthCls: 'w-16 h-16', heightCls: 'h-16', className: 'mb-4' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-6', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-24', heightCls: 'h-4' })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
            <FaAward className="text-2xl text-white" />
          </div>
          <h2 className="card-title text-2xl font-bold">Cloud Certifications</h2>
        </div>

        {loading ? (
          renderSkeleton()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 p-4 bg-gradient-to-br from-base-200/50 to-base-300/30 hover:from-primary/10 hover:to-secondary/10 border border-base-300/30 hover:border-primary/40 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                {cert.badge && (
                  <div className="flex-shrink-0">
                    <img
                      src={cert.badge}
                      alt={cert.name}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-primary/80 font-semibold mb-2">{cert.year}</p>
                  {cert.body && (
                    <p className="text-xs text-base-content/60 leading-relaxed line-clamp-2">{cert.body}</p>
                  )}
                </div>
                <FaExternalLinkAlt className="text-base-content/30 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationShowcase;
