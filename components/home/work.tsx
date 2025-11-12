import { HeaderSmall } from '@shared-components';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails, WorkExperience } from 'shared/utils/types';

export default function Work(): JSX.Element {
  const [work, setWork] = useState<WorkExperience | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const personalDetails: PersonalDetails = useContext(PersonalDetailsContext);

  useEffect(() => {
    const fetchWorkExperience = async () => {
      try {
        const response = await fetch('/api/work-experience');
        if (!response.ok) {
          throw new Error('Failed to fetch work experience');
        }
        const data = await response.json();
        setWork(data);
      } catch (err) {
        console.error('Error fetching work experience:', err);
        setError('Failed to load work experience');
        // Fallback to static data if API fails
        setWork(personalDetails.work);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkExperience();
  }, [personalDetails.work]);

  if (loading) {
    return (
      <div className="relative h-auto py-10 lg:py-20">
        <div className="text-center text-gray-400">Loading work experience...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative h-auto py-10 lg:py-20">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        <img
          src="/images/vectors/circle-spin.svg"
          alt="Circle Vector"
          className="absolute -right-16 md:-right-64 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/3 pointer-events-none animate-spin"
        />
        <div className="ml-4 sm:mx-12 md:mx-16 flex flex-col md:flex-row gap-8 items-center">
          {/* Company Logo - Now on the left side */}
          <div className="w-48 md:w-1/4 lg:w-1/5 flex-shrink-0">
            <img
              src={work?.logo || personalDetails.work.logo}
              alt="Works at"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Work Description */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/images/vectors/boxes.svg"
                alt="Box Vector"
                className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
              />
              <HeaderSmall text="What does he do?" />
              <h1 className="mb-3 mt-1 text-5xl sm:text-4xl md:text-5xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Currently at{' '}
                <span className="text-pink font-bold">{work?.company || personalDetails.work.company}</span>
                {work?.designation ? ' as a' : ''}
              </h1>
              {work?.designation && (
                <h1 className="mb-6 mt-2 text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-extrabold text-white leading-none">
                  {work.designation}
                </h1>
              )}
              {work?.startDate && (
                <p className="text-gray-400 mb-4">
                  {work.startDate} - {work.endDate || 'Present'}
                  {work.location && ` • ${work.location}`}
                </p>
              )}
              {work?.description && (
                <p className="text-gray-300 mb-6">{work.description}</p>
              )}
              <div className="mt-8">
                <Link href="/work" className="inline-block">
                  <div className="flex items-center text-pink hover:text-pink-400 transition-colors duration-300">
                    <span className="mr-2">View Full Experience</span>
                    <img
                      src="/images/vectors/arrows-right.svg"
                      alt="Next"
                      className="w-8 transform transition-transform duration-300 hover:translate-x-2"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
