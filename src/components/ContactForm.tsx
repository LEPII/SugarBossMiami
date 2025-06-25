import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ORDER_ITEMS = [
  "custom cake",
  "custom cupcake",
  "cookies",
  "brownies",
  "other",
] as const;

export const ORDER_ITEM_OPTIONS = [
  { id: "customCake", value: "custom cake", label: "Custom Cake" },
  { id: "customCupcake", value: "custom cupcake", label: "Custom Cupcake" },
  { id: "cookies", value: "cookies", label: "Cookies" },
  { id: "brownies", value: "brownies", label: "Brownies" },
  { id: "other", value: "other", label: "Other" },
] as const;

const schema = z
  .object({
    name: z.string().min(3, { message: "Please provide a full name" }).max(50),
    email: z.string().email("Invalid Email Address"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(
        /^\+?[1-9]\d{9,14}$/,
        "Invalid phone number format (e.g., +1234567890 or 1234567890)"
      )
      .max(20, "Phone number too long"),
    eventDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)")
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
    budget: z.coerce
      .number()
      .min(0, "Budget cannot be negative")
      .max(100000, "Budget too high, please contact us directly")
      .optional(),
    specialRequests: z.string().optional(),
    itemsToOrder: z
      .array(z.enum(ORDER_ITEMS))
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

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      itemsToOrder: [],
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      budget: 0,
      specialRequests: "",
      otherOrderItem: "",
    },
    mode: "onTouched",
  });

  const itemsToOrder = watch("itemsToOrder") || [];
  const showOtherField = itemsToOrder?.includes("other");

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h3>Send us your inquiry:</h3>

        <form
          onSubmit={handleSubmit((data) => {
            reset();
          })}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && <p>{errors.name.message} </p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && <p>{errors.email.message} </p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" {...register("phone")} />
            {errors.phone && <p>{errors.phone.message} </p>}
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Delivery Date:</label>
            <input type="date" id="eventDate" {...register("eventDate")} />
            {errors.eventDate && <p>{errors.eventDate.message} </p>}
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget (Optional): $</label>
            <input
              type="number"
              id="budget"
              {...register("budget")}
              placeholder="e.g., 200"
            />
            {errors.budget && <p>{errors.budget.message} </p>}
          </div>

          <div className="form-group">
            <label>Which item(s) would you like to order?</label>
            {ORDER_ITEM_OPTIONS.map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.value}
                  {...register("itemsToOrder")}
                />
                <label htmlFor={item.id}>{item.label}</label>
              </div>
            ))}
            {errors.itemsToOrder && (
              <p className="error-message">{errors.itemsToOrder.message}</p>
            )}
          </div>

          {showOtherField && (
            <div className="form-group">
              <label htmlFor="otherOrderItem">Please specify your order:</label>
              <textarea
                id="otherOrderItem"
                rows={3}
                {...register("otherOrderItem")}
              />
              {errors.otherOrderItem && (
                <p className="error-message">{errors.otherOrderItem.message}</p>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests:</label>
            <textarea
              id="specialRequests"
              rows={5}
              {...register("specialRequests")}
            />
            {errors.specialRequests && <p>{errors.specialRequests.message} </p>}
          </div>

          <button type="submit" disabled={!isValid || isSubmitting}>
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
