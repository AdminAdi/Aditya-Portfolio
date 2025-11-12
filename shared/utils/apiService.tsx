import { Company, PersonalDetails, Project } from './types';
import { mockPersonalDetails, mockProjects, mockCompanies } from './mockData';

// Use mock data instead of making API calls
export async function getPersonalDetails(): Promise<PersonalDetails | boolean> {
  return mockPersonalDetails;
}

export async function getProjectDetails(): Promise<Project[] | boolean> {
  return mockProjects;
}

export async function getCompanyDetails(): Promise<Company[] | boolean> {
  return mockCompanies;
}

export async function getGithubDetails(): Promise<unknown> {
  return {
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/yourusername/your-portfolio'
  };
}
