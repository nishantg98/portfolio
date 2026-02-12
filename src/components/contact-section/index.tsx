import React from 'react';
import { FaEnvelope, FaLinkedin, FaMedium, FaGithub, FaDownload } from 'react-icons/fa';
import { SanitizedSocial } from '../../interfaces/sanitized-config';

interface ContactSectionProps {
  social: SanitizedSocial;
  resumeUrl?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ social, resumeUrl }) => {
  const contacts = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: social.email,
      href: social.email ? `mailto:${social.email}` : undefined,
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: social.linkedin ? 'Connect on LinkedIn' : undefined,
      href: social.linkedin ? `https://www.linkedin.com/in/${social.linkedin}` : undefined,
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View My Code',
      href: 'https://github.com/nishantg98',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: FaMedium,
      label: 'Medium',
      value: social.medium ? 'Read My Articles' : undefined,
      href: social.medium ? `https://medium.com/@${social.medium}` : undefined,
      color: 'from-green-600 to-emerald-700',
    },
  ].filter(contact => contact.value);

  return (
    <div className="card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 shadow-lg border border-base-300/20">
      <div className="card-body">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Let's Build Something Amazing</h2>
          <p className="text-base-content/70">
            Open to DevOps opportunities, consulting, or just a chat about cloud infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 bg-base-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-base-300/30 hover:border-primary/40"
            >
              <div className={`p-3 bg-gradient-to-br ${contact.color} rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="text-2xl text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-base-content/50 uppercase tracking-wide">{contact.label}</p>
                <p className="font-semibold text-sm group-hover:text-primary transition-colors">{contact.value}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-base-content/30 group-hover:text-primary group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {resumeUrl && (
          <div className="text-center">
            <a
              href={resumeUrl}
              download
              className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
