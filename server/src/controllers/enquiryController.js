import Enquiry from '../models/Enquiry.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{7,20}$/;

export async function createEnquiry(req, res) {
  const { name, companyName, email, phoneNumber, serviceRequired, message } = req.body;

  if (!name || !companyName || !email || !phoneNumber || !serviceRequired || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  if (!phonePattern.test(phoneNumber)) {
    return res.status(400).json({ message: 'Please enter a valid phone number.' });
  }

  const enquiry = await Enquiry.create({ name, companyName, email, phoneNumber, serviceRequired, message });
  res.status(201).json({ message: 'Enquiry submitted successfully.', enquiry });
}

export async function listEnquiries(req, res) {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });
  res.json({ enquiries });
}
