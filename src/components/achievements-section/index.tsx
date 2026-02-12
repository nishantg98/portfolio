import React from 'react';
import { FaRocket, FaDollarSign, FaClock, FaChartLine } from 'react-icons/fa';
import { skeleton } from '../../utils';

interface AchievementsSectionProps {
  loading: boolean;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ loading }) => {
  const achievements = [
    {
      icon: FaClock,
      title: 'Deployment Time Reduction',
      metric: '85%',
      description: 'Reduced deployment time from 2 hours to 15 minutes through automated CI/CD pipelines',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'blue-500/40',
    },
    {
      icon: FaDollarSign,
      title: 'Cloud Cost Optimization',
      metric: '40%',
      description: 'Cut AWS infrastructure costs by implementing auto-scaling and resource optimization',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/10',
      borderColor: 'green-500/40',
    },
    {
      icon: FaChartLine,
      title: 'System Uptime',
      metric: '99.99%',
      description: 'Achieved and maintained 99.99% uptime SLA for production systems serving 10M+ daily requests',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'purple-500/40',
    },
    {
      icon: FaRocket,
      title: 'Container Adoption',
      metric: '100%',
      description: 'Successfully migrated 50+ microservices to Kubernetes with zero downtime',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-500/10 to-amber-600/10',
      borderColor: 'orange-500/40',
    },
  ];

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="card bg-base-100">
          <div className="card-body">
            {skeleton({ widthCls: 'w-12 h-12', heightCls: 'h-12', className: 'mb-4' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-6', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
            <FaRocket className="text-2xl text-white" />
          </div>
          <h2 className="card-title text-2xl font-bold">Key Achievements</h2>
        </div>

        {loading ? (
          renderSkeleton()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-base-300/50 bg-gradient-to-br from-base-200/30 to-base-300/20 hover:${achievement.bgColor} hover:border-${achievement.borderColor} transition-all duration-300 p-5`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 p-3 bg-gradient-to-br ${achievement.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="text-2xl text-white" />
                  </div>

                  <div className={`text-4xl font-extrabold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                    {achievement.metric}
                  </div>

                  <h3 className="font-bold text-sm mb-3 leading-tight">
                    {achievement.title}
                  </h3>

                  <p className="text-xs text-base-content/60 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsSection;
