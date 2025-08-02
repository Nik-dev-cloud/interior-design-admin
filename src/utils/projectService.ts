import { Project } from '../types/Project';

const STORAGE_KEY = 'portfolio_projects';

// Helper function to get projects from localStorage
const getStoredProjects = (): Project[] => {
  const projectsJson = localStorage.getItem(STORAGE_KEY);
  if (!projectsJson) return [];
  
  const projects = JSON.parse(projectsJson) as (Omit<Project, 'createdAt' | 'updatedAt'> & {
    createdAt: string;
    updatedAt: string;
  })[];
  return projects.map(p => ({
    ...p,
    createdAt: new Date(p.createdAt),
    updatedAt: new Date(p.updatedAt)
  }));
};

// Helper function to save projects to localStorage
const saveProjects = (projects: Project[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const getProjects = (): Project[] => {
  return getStoredProjects();
};

export const getProjectById = (id: string): Project | undefined => {
  const projects = getStoredProjects();
  return projects.find(p => p.id === id);
};

export const createProject = (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project => {
  const projects = getStoredProjects();
  
  const newProject: Project = {
    ...projectData,
    id: Date.now().toString(),
    createdAt: new Date(),
    updatedAt: new Date()
  };

  projects.push(newProject);
  saveProjects(projects);
  return newProject;
};

export const updateProject = (id: string, projectData: Partial<Omit<Project, 'id' | 'createdAt' | 'updatedAt'>>): Project => {
  const projects = getStoredProjects();
  const projectIndex = projects.findIndex(p => p.id === id);
  
  if (projectIndex === -1) {
    throw new Error(`Project with id ${id} not found`);
  }

  const updatedProject: Project = {
    ...projects[projectIndex],
    ...projectData,
    updatedAt: new Date()
  };

  projects[projectIndex] = updatedProject;
  saveProjects(projects);
  return updatedProject;
};

export const deleteProject = (id: string): void => {
  const projects = getStoredProjects();
  const filteredProjects = projects.filter(p => p.id !== id);
  saveProjects(filteredProjects);
};
