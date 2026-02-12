import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  // Categorize skills for DevOps portfolio
  const categorizeSkills = () => {
    const categories = {
      'Cloud Platforms': ['Kubernetes', 'Docker', 'AWS', 'Google Cloud Platform', 'Microsoft Azure'],
      'DevOps Tools': ['Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'CI/CD', 'ArgoCD', 'Helm'],
      'Monitoring & Observability': ['Prometheus', 'Grafana', 'ELK Stack'],
      'Programming Languages': ['Python', 'Bash', 'Go'],
      'Databases & Storage': ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
      'Other Technologies': ['Git', 'Linux', 'Nginx'],
    };

    const categorized: { [key: string]: string[] } = {};
    const uncategorized: string[] = [];

    Object.keys(categories).forEach(category => {
      categorized[category] = [];
    });

    skills.forEach(skill => {
      let found = false;
      for (const [category, categorySkills] of Object.entries(categories)) {
        if (categorySkills.includes(skill)) {
          categorized[category].push(skill);
          found = true;
          break;
        }
      }
      if (!found) {
        uncategorized.push(skill);
      }
    });

    return { categorized, uncategorized };
  };

  const { categorized, uncategorized } = categorizeSkills();

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3 mb-2">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
            )}
          </h5>
        </div>
        <div className="px-3 pb-2">
          {loading ? (
            <div className="-m-1 flex flex-wrap justify-center">
              {renderSkeleton()}
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(categorized).map(([category, categorySkills]) =>
                categorySkills.length > 0 ? (
                  <div key={category} className="skill-category">
                    <h6 className="text-xs font-semibold text-primary opacity-80 mb-2 uppercase tracking-wide">
                      {category}
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <div
                          key={index}
                          className="text-xs inline-flex items-center font-semibold leading-sm px-3 py-2 bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20 rounded-lg hover:bg-opacity-20 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
              {uncategorized.length > 0 && (
                <div className="skill-category">
                  <div className="flex flex-wrap gap-2">
                    {uncategorized.map((skill, index) => (
                      <div
                        key={index}
                        className="text-xs inline-flex items-center font-semibold leading-sm px-3 py-2 bg-primary bg-opacity-10 text-primary border border-primary border-opacity-20 rounded-lg hover:bg-opacity-20 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
