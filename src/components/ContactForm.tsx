import { useState } from "react";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  budget: string;
  specialRequests: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    budget: "",
    specialRequests: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      budget: "",
      specialRequests: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h3>Get in Touch!</h3>
        <p>
          Phone: <a href="tel:+7863579059">+1 (786) 357-9059</a>
        </p>
        <p>
          Email:
          <a href="mailto:ex@mple.com">ex@mple.com</a>
        </p>
        <p>
          Instagram:
          <a
            href="https://www.instagram.com/sugarbossmiami"
            target="_blank"
            rel="noopener noreferrer">
            @sugarbossmiami
          </a>
        </p>
      </div>

      <div className="contact-form">
        <h3>Send us your inquiry:</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventDate">Date of Event:</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget (Optional):</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., $200 - $300"
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests:</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
