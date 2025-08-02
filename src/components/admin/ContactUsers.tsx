import React, { useState, useEffect } from 'react';
import { Mail, Copy, Loader, Search } from 'lucide-react';
import { Contact } from '../../types/Contact';
import { getContacts } from '../../utils/contactService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsers: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const data = await getContacts();
      // Sort by newest first if timestamp exists
      const sortedData = data.sort((a, b) => {
        if (!a.timestamp || !b.timestamp) return 0;
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
      setContacts(sortedData);
      setError(null);
    } catch (error) {
      console.error('Error loading contacts:', error);
      setError('Failed to load contacts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
      .then(() => toast.success('Email copied to clipboard!'))
      .catch(() => toast.error('Failed to copy email'));
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.projectType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 text-lg">{error}</div>
        <button
          onClick={loadContacts}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <ToastContainer position="bottom-right" />
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Contact Requests</h2>
          <p className="text-gray-600">{filteredContacts.length} total contacts</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id || `${contact.email}-${contact.timestamp || Date.now()}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <button
                onClick={() => handleCopyEmail(contact.email)}
                className="p-2 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-gray-100"
                title="Copy email"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  {contact.email}
                </a>
              </div>
              
              <div className="text-gray-600">
                <span className="font-medium">Phone:</span> {contact.phone}
              </div>
              
              <div className="text-gray-600">
                <span className="font-medium">Project Type:</span>{' '}
                <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                  {contact.projectType}
                </span>
              </div>
              
              <div className="text-gray-600">
                <span className="font-medium">Budget:</span> {contact.budget}
              </div>
              
              <div className="mt-3">
                <span className="font-medium text-gray-600">Message:</span>
                <p className="mt-1 text-gray-700 whitespace-pre-wrap">{contact.message}</p>
              </div>

              {contact.timestamp && (
                <div className="text-sm text-gray-500 mt-4">
                  {new Date(contact.timestamp).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsers;
