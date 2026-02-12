import React from 'react';
import { FaDocker, FaAws, FaGithub, FaDownload, FaBriefcase } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiGooglecloud, SiMicrosoftazure, SiPrometheus } from 'react-icons/si';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl shadow-2xl mb-8 border border-base-300/20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative px-6 py-16 sm:px-10 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">
                ☁️ Senior DevOps Engineer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nishant Gupta
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-base-content/70 mb-4 font-light">
              Cloud Architect | Kubernetes Expert | Automation Enthusiast
            </p>

            <div className="flex justify-center gap-2 mb-8">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <p className="text-lg text-base-content/60 max-w-3xl mx-auto leading-relaxed mb-8">
              Transforming infrastructure into code, automating the impossible, and building cloud-native solutions
              that scale. <span className="font-semibold text-primary">GCP Professional Cloud Architect</span> with
              expertise across AWS, Azure, and cutting-edge DevOps technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/portfolio/Resume.pdf"
                download
                className="btn btn-primary gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </a>
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 text-success border border-success/20 rounded-lg animate-pulse">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="font-semibold text-sm">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="group bg-base-100/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:bg-base-100 hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg">
                  <SiKubernetes className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-lg">Container Orchestration</h3>
              </div>
              <p className="text-sm text-base-content/70">
                Production-grade Kubernetes deployments across multi-cloud environments with auto-scaling and monitoring
              </p>
            </div>

            <div className="group bg-base-100/60 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 hover:bg-base-100 hover:shadow-xl hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg">
                  <FaGithub className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-lg">CI/CD Pipelines</h3>
              </div>
              <p className="text-sm text-base-content/70">
                Enterprise automation with Jenkins, GitHub Actions, and GitLab CI for zero-downtime deployments
              </p>
            </div>

            <div className="group bg-base-100/60 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:bg-base-100 hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg shadow-lg">
                  <SiTerraform className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-lg">Infrastructure as Code</h3>
              </div>
              <p className="text-sm text-base-content/70">
                Terraform and Ansible expertise for reproducible, version-controlled infrastructure deployments
              </p>
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div className="text-center">
            <p className="text-sm font-semibold text-base-content/50 mb-4 uppercase tracking-wider">
              Technologies I Work With
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {[
                { icon: SiKubernetes, color: 'text-blue-500', name: 'Kubernetes' },
                { icon: FaDocker, color: 'text-blue-600', name: 'Docker' },
                { icon: FaAws, color: 'text-orange-500', name: 'AWS' },
                { icon: SiGooglecloud, color: 'text-red-500', name: 'GCP' },
                { icon: SiMicrosoftazure, color: 'text-blue-400', name: 'Azure' },
                { icon: SiTerraform, color: 'text-purple-600', name: 'Terraform' },
                { icon: SiPrometheus, color: 'text-orange-600', name: 'Prometheus' },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-2 p-3 hover:bg-base-100 rounded-lg transition-all duration-200"
                  title={tech.name}
                >
                  <tech.icon className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                  <span className="text-xs text-base-content/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
