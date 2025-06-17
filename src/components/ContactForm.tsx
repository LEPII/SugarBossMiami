import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    name: z.string(),
    email: z.string().email("Invalid Email Address"),
    phone: z.string(),
    eventDate: z
      .string()
      .min(1, "Event date is required")
      .refine(
        (dateString) => {
          const selectedDate = new Date(dateString);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return !isNaN(selectedDate.getTime()) && selectedDate >= today;
        },
        {
          message: "Event date must be a valid date and not in the past.",
        }
      ),
    budget: z.string().min(1, "Budget is required"),
    specialRequests: z.string().optional(),
    itemsToOrder: z
      .array(z.string())
      .min(1, "Please select at least one item to order"),
    otherOrderItem: z
      .string()
      .optional()
      .or(
        z
          .string()
          .min(1, 'Please specify the "other" item')
          .transform((val) => (val === "" ? undefined : val))
      ),
  })
  .superRefine((data, ctx) => {
    if (
      data.itemsToOrder.includes("other") &&
      (!data.otherOrderItem || data.otherOrderItem.trim() === "")
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please specify the "other" item if "Other" is selected.',
        path: ["otherOrderItem"],
      });
    }
  });

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
