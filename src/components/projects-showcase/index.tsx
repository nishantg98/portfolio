import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiDocker, SiJenkins, SiPrometheus, SiAnsible } from 'react-icons/si';
import { skeleton } from '../../utils';

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: { name: string; icon: any }[];
  githubLink?: string;
  demoLink?: string;
}

interface ProjectsShowcaseProps {
  loading: boolean;
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ loading }) => {
  const projects: Project[] = [
    {
      title: 'Multi-Cloud Kubernetes Infrastructure',
      description: 'Enterprise-grade Kubernetes cluster management across AWS, GCP, and Azure',
      problem: 'Managing complex multi-cloud infrastructure with manual processes leading to inconsistencies and deployment delays',
      solution: 'Implemented IaC using Terraform and Helm charts for automated cluster provisioning and application deployment',
      impact: '75% reduction in deployment time, 99.9% uptime, managed 100+ microservices',
      technologies: [
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Terraform', icon: SiTerraform },
        { name: 'Docker', icon: SiDocker },
        { name: 'Prometheus', icon: SiPrometheus },
      ],
    },
    {
      title: 'CI/CD Pipeline Automation Platform',
      description: 'Fully automated CI/CD pipeline with zero-downtime deployments',
      problem: 'Manual deployment processes causing frequent production issues and long release cycles',
      solution: 'Built comprehensive CI/CD platform with Jenkins, ArgoCD, and GitOps workflows for automated testing and deployment',
      impact: 'Deployment frequency increased from weekly to multiple times per day, 90% reduction in deployment failures',
      technologies: [
        { name: 'Jenkins', icon: SiJenkins },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Docker', icon: SiDocker },
        { name: 'Terraform', icon: SiTerraform },
      ],
    },
    {
      title: 'Cloud Infrastructure Cost Optimization',
      description: 'Automated resource optimization and cost management solution',
      problem: 'Cloud costs spiraling out of control with over-provisioned resources and no visibility',
      solution: 'Developed automated monitoring and optimization system using Terraform, CloudWatch, and custom scripts',
      impact: 'Reduced monthly cloud spend by $50K (40% savings), improved resource utilization by 60%',
      technologies: [
        { name: 'Terraform', icon: SiTerraform },
        { name: 'Ansible', icon: SiAnsible },
        { name: 'Prometheus', icon: SiPrometheus },
      ],
    },
  ];

  const renderSkeleton = () => (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card bg-base-100">
          <div className="card-body">
            {skeleton({ widthCls: 'w-full', heightCls: 'h-8', className: 'mb-4' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
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
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
            <FaCode className="text-2xl text-white" />
          </div>
          <h2 className="card-title text-2xl font-bold">Featured DevOps Projects</h2>
        </div>

        {loading ? (
          renderSkeleton()
        ) : (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-base-300/50 bg-gradient-to-br from-base-200/30 to-base-300/20 hover:from-indigo-500/10 hover:to-purple-600/10 hover:border-indigo-500/40 transition-all duration-300 p-6"
              >
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-base-content/70 mb-4">
                        {project.description}
                      </p>
                    </div>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 hover:bg-base-300 rounded-lg transition-colors"
                        title="View on GitHub"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    )}
                  </div>

                  {/* Problem, Solution, Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-base-200/50 rounded-lg p-4">
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-red-500 mb-2">
                        Problem
                      </h4>
                      <p className="text-xs text-base-content/70 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="bg-base-200/50 rounded-lg p-4">
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-500 mb-2">
                        Solution
                      </h4>
                      <p className="text-xs text-base-content/70 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    <div className="bg-base-200/50 rounded-lg p-4">
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-green-500 mb-2">
                        Impact
                      </h4>
                      <p className="text-xs text-base-content/70 leading-relaxed font-semibold">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-1.5 bg-base-300/50 hover:bg-primary/10 rounded-full text-xs font-medium transition-colors group/tech"
                        title={tech.name}
                      >
                        <tech.icon className="text-sm group-hover/tech:scale-110 transition-transform" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
