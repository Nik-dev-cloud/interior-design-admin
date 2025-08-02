import { Contact } from '../types/Contact';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/1v4UJapkBtrvord2B65TbpbDpzhmbHHVYIqFf72GQ3aTFrVD9JrDsxdKl/exec'; // Google Apps Script Web App URL

export const getContacts = async (): Promise<Contact[]> => {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};
