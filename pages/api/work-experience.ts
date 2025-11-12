import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // In a real implementation, you would fetch from your actual data source
    // For now, we'll return the mock data that matches your current work experience
    const workExperience = {
      company: 'Vellore Institute of Technology',
      designation: 'B.Tech Student (Final Year)',
      logo: '/images/logo.svg',
      startDate: '2021',
      endDate: 'Present',
      description: 'Pursuing Bachelor of Technology in Computer Science',
      location: 'Vellore, India'
    };

    res.status(200).json(workExperience);
  } catch (error) {
    console.error('Error fetching work experience:', error);
    res.status(500).json({ error: 'Failed to fetch work experience' });
  }
}
