import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const highlights = [
    'GCP Professional Cloud Architect Certified',
    'Expert in Kubernetes & Docker containerization',
    'Multi-cloud infrastructure deployment (AWS, GCP, Azure)',
    'CI/CD pipeline automation & optimization',
    'Infrastructure as Code with Terraform & Ansible',
    'Monitoring & observability with Prometheus & Grafana',
  ];

  return (
    <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 shadow-lg border border-base-300/20">
      <div className="card-body">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
          <h2 className="card-title text-2xl font-bold">About Me</h2>
        </div>

        <p className="text-base-content/80 leading-relaxed mb-6">
          Senior DevOps Engineer with <span className="font-bold text-primary">4+ years of experience</span> building and
          managing cloud-native infrastructure at scale. Currently architecting enterprise solutions at <span className="font-bold">UKG</span>,
          focusing on Kubernetes orchestration, automated CI/CD pipelines, and multi-cloud deployments.
        </p>

        <p className="text-base-content/80 leading-relaxed mb-6">
          I specialize in transforming traditional infrastructure into modern, cloud-native architectures that are
          scalable, secure, and cost-effective. My expertise spans across AWS, Google Cloud Platform, and Microsoft Azure,
          with a strong focus on automation and infrastructure as code.
        </p>

        <div className="divider"></div>

        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-primary">⚡</span> Key Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <FaCheckCircle className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm text-base-content/80 leading-relaxed">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p className="text-sm italic text-base-content/80">
            "I'm passionate about building reliable, automated infrastructure that empowers development teams
            to ship faster and with confidence."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
