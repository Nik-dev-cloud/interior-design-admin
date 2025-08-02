
import { useEffect, useState } from "react";

type Contact = {
  timestamp?: string;
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

const ContactUsers = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxUdNGKbNVpPkKsHCDCUZ1LwIFwyXK6D25eWbv_3pZSuJWLXMSD-Oel5Vm-slH_edRA9g/exec")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Submitted Contacts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Project Type</th>
              <th className="px-4 py-2 border">Budget</th>
              <th className="px-4 py-2 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{contact.timestamp}</td>
                <td className="px-4 py-2 border">{contact.name}</td>
                <td className="px-4 py-2 border">{contact.email}</td>
                <td className="px-4 py-2 border">{contact.phone}</td>
                <td className="px-4 py-2 border">{contact.projectType}</td>
                <td className="px-4 py-2 border">{contact.budget}</td>
                <td className="px-4 py-2 border">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactUsers;
