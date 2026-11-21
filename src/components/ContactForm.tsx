import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useMemo } from "react";
import "../style/components/form.css";
import { useLanguage } from "../i18n/LanguageContext";
import type { Translations } from "../i18n/translations";

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

type ErrorMessages = Translations["form"]["errors"];

const makeSchema = (e: ErrorMessages) => z
  .object({
    name: z.string().min(3, { message: e.name }).max(50),
    email: z.string().email(e.email),
    phone: z
      .string()
      .min(1, e.phoneRequired)
      .regex(/^\+?[1-9]\d{9,14}$/, e.phoneFormat)
      .max(20, e.phoneTooLong),
    eventDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, e.dateFormat)
      .min(1, e.dateRequired)
      .refine(
        (dateString) => {
          const selectedDate = new Date(dateString);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return !isNaN(selectedDate.getTime()) && selectedDate >= today;
        },
        {
          message: e.datePast,
        }
      ),
    budget: z.coerce
      .number()
      .min(0, e.budgetNegative)
      .max(100000, e.budgetTooHigh)
      .optional(),
    specialRequests: z.string().optional(),
    itemsToOrder: z
      .array(z.enum(ORDER_ITEMS))
      .min(1, e.itemsMin),
    otherOrderItem: z
      .string()
      .optional()
      .or(
        z
          .string()
          .min(1, e.otherRequired)
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
        message: e.otherRequired,
        path: ["otherOrderItem"],
      });
    }
  });

type FormData = z.infer<ReturnType<typeof makeSchema>>;

const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const schema = useMemo(() => makeSchema(t.form.errors), [t]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
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

  // Re-validate fields that already show an error so messages switch language.
  useEffect(() => {
    const fieldsWithErrors = Object.keys(errors) as (keyof FormData)[];
    if (fieldsWithErrors.length) trigger(fieldsWithErrors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const itemsToOrder = watch("itemsToOrder") || [];
  const showOtherField = itemsToOrder?.includes("other");

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>{t.form.heading}</h2>

        <form
          onSubmit={handleSubmit((data) => {
            reset();
          })}>
          <div className="form-group">
            <label htmlFor="name">{t.form.name}</label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <p className="error-message">{errors.name.message} </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.form.email}</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && (
              <p className="error-message">{errors.email.message} </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">{t.form.phone}</label>
            <input type="tel" id="phone" {...register("phone")} />
            {errors.phone && (
              <p className="error-message">{errors.phone.message} </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">{t.form.eventDate}</label>
            <input type="date" id="eventDate" {...register("eventDate")} />
            {errors.eventDate && (
              <p className="error-message">{errors.eventDate.message} </p>
            )}
          </div>
          <div className="form-group">
            <label>{t.form.items}</label>
            {ORDER_ITEM_OPTIONS.map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.value}
                  {...register("itemsToOrder")}
                />
                <label htmlFor={item.id}>{t.form.itemLabels[item.id]}</label>
              </div>
            ))}
            {errors.itemsToOrder && (
              <p className="error-message">{errors.itemsToOrder.message}</p>
            )}
          </div>

          {showOtherField && (
            <div className="form-group">
              <label htmlFor="otherOrderItem">
                {t.form.otherSpecify}
              </label>
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
            <label htmlFor="budget">{t.form.budget}</label>
            <div className="input-with-icon">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                id="budget"
                {...register("budget")}
                placeholder={t.form.budgetPlaceholder}
              />
            </div>
            {errors.budget && (
              <p className="error-message">{errors.budget.message} </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="specialRequests">{t.form.specialRequests}</label>
            <textarea
              id="specialRequests"
              rows={5}
              {...register("specialRequests")}
            />
            {errors.specialRequests && <p>{errors.specialRequests.message} </p>}
          </div>

          <button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? t.form.submitting : t.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
