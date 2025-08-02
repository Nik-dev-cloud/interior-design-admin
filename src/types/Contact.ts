export interface Contact {
  id?: string;  // Optional as Google Sheets might not provide an ID
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp?: string;
}
