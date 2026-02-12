import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { formatDistance } from 'date-fns';
import {
  CustomError,
  GENERIC_ERROR,
  INVALID_CONFIG_ERROR,
  INVALID_GITHUB_USERNAME_ERROR,
  setTooManyRequestError,
} from '../constants/errors';
import { HelmetProvider } from 'react-helmet-async';
import '../assets/index.css';
import { getInitialTheme, getSanitizedConfig, setupHotjar } from '../utils';
import { SanitizedConfig } from '../interfaces/sanitized-config';
import ErrorPage from './error-page';
import HeadTagEditor from './head-tag-editor';
import { DEFAULT_THEMES } from '../constants/default-themes';
import { BG_COLOR } from '../constants';
import AvatarCard from './avatar-card';
import { Profile } from '../interfaces/profile';
import DetailsCard from './details-card';
import SkillCard from './skill-card';
import Footer from './footer';
import HeroBanner from './hero-banner';
import AboutSection from './about-section';
import ProfessionalTimeline from './professional-timeline';
import CertificationShowcase from './certification-showcase';
import ContactSection from './contact-section';
import AchievementsSection from './achievements-section';
import ProjectsShowcase from './projects-showcase';

/**
 * Renders the GitProfile component.
 *
 * @param {Object} config - the configuration object
 * @return {JSX.Element} the rendered GitProfile component
 */
const GitProfile = ({ config }: { config: Config }) => {
  const [sanitizedConfig] = useState<SanitizedConfig | Record<string, never>>(
    getSanitizedConfig(config),
  );
  const [theme, setTheme] = useState<string>(DEFAULT_THEMES[0]);
  const [error, setError] = useState<CustomError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${sanitizedConfig.github.username}`,
      );
      const data = response.data;

      setProfile({
        avatar: data.avatar_url,
        name: data.name || ' ',
        bio: data.bio || '',
        location: data.location || '',
        company: data.company || '',
      });
    } catch (error) {
      // If GitHub API fails (rate limit or other errors), use fallback profile
      console.warn('GitHub API error, using fallback profile:', error);
      setProfile({
        avatar: '/portfolio/default-avatar.png', // You can add a default avatar
        name: 'Nishant Gupta',
        bio: 'Senior DevOps Engineer | GCP Professional Cloud Architect',
        location: 'India',
        company: 'UKG',
      });

      // Only show error page for critical errors, not rate limiting
      if (error instanceof AxiosError && error.response?.status !== 403 && error.response?.status !== 429) {
        handleError(error as AxiosError | Error);
      }
    } finally {
      setLoading(false);
    }
  }, [sanitizedConfig.github.username]);

  useEffect(() => {
    if (Object.keys(sanitizedConfig).length === 0) {
      setError(INVALID_CONFIG_ERROR);
    } else {
      setError(null);
      setTheme(getInitialTheme(sanitizedConfig.themeConfig));
      setupHotjar(sanitizedConfig.hotjar);
      loadData();
    }
  }, [sanitizedConfig, loadData]);

  useEffect(() => {
    theme && document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleError = (error: AxiosError | Error): void => {
    console.error('Error:', error);

    if (error instanceof AxiosError) {
      try {
        const reset = formatDistance(
          new Date(error.response?.headers?.['x-ratelimit-reset'] * 1000),
          new Date(),
          { addSuffix: true },
        );

        if (typeof error.response?.status === 'number') {
          switch (error.response.status) {
            case 403:
              setError(setTooManyRequestError(reset));
              break;
            case 404:
              setError(INVALID_GITHUB_USERNAME_ERROR);
              break;
            default:
              setError(GENERIC_ERROR);
              break;
          }
        } else {
          setError(GENERIC_ERROR);
        }
      } catch (innerError) {
        setError(GENERIC_ERROR);
      }
    } else {
      setError(GENERIC_ERROR);
    }
  };

  return (
    <HelmetProvider>
      <div className="fade-in h-screen">
        {error ? (
          <ErrorPage
            status={error.status}
            title={error.title}
            subTitle={error.subTitle}
          />
        ) : (
          <>
            <HeadTagEditor
              googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
              appliedTheme={theme}
            />
            <div className={`p-4 lg:p-8 min-h-screen ${BG_COLOR}`}>
              <div className="max-w-7xl mx-auto">
                {/* Full-Width Hero Banner */}
                <div className="mb-8">
                  <HeroBanner />
                </div>

                {/* Achievements Section */}
                <div className="mb-8">
                  <AchievementsSection loading={loading} />
                </div>

                {/* Main Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Left Column - Profile & Contact */}
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    <AvatarCard
                      profile={profile}
                      loading={loading}
                      avatarRing={sanitizedConfig.themeConfig.displayAvatarRing}
                      resumeFileUrl={sanitizedConfig.resume.fileUrl}
                    />
                    <DetailsCard
                      profile={profile}
                      loading={loading}
                      github={sanitizedConfig.github}
                      social={sanitizedConfig.social}
                    />
                    {sanitizedConfig.skills.length !== 0 && (
                      <SkillCard
                        loading={loading}
                        skills={sanitizedConfig.skills}
                      />
                    )}
                    {/* About Section */}
                    <AboutSection />
                  </div>
                </div>

                {/* Right Column - Projects & Content */}
                <div className="lg:col-span-2 col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Projects Showcase */}
                    <ProjectsShowcase loading={loading} />

                    {/* Certification Showcase */}
                    {sanitizedConfig.certifications.length !== 0 && (
                      <CertificationShowcase
                        loading={loading}
                        certifications={sanitizedConfig.certifications}
                      />
                    )}

                    {/* Professional Timeline */}
                    {(sanitizedConfig.experiences.length !== 0 ||
                      sanitizedConfig.educations.length !== 0) && (
                      <ProfessionalTimeline
                        loading={loading}
                        experiences={sanitizedConfig.experiences}
                        educations={sanitizedConfig.educations}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Full-Width Contact Section */}
              <div className="mb-8">
                <ContactSection
                  social={sanitizedConfig.social}
                  resumeUrl={sanitizedConfig.resume.fileUrl}
                />
              </div>
              </div>
            </div>
            {sanitizedConfig.footer && (
              <footer
                className={`p-4 footer ${BG_COLOR} text-base-content footer-center`}
              >
                <div className="card compact bg-base-100 shadow">
                  <Footer content={sanitizedConfig.footer} loading={loading} />
                </div>
              </footer>
            )}
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default GitProfile;
