import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email.").max(255, "Email is too long."),
  subject: z.string().trim().min(3, "Please add a subject.").max(120, "Subject is too long."),
  message: z.string().trim().min(10, "Please add a little more detail.").max(1500, "Message is too long."),
});

type FormFields = z.infer<typeof inquirySchema>;
type FieldErrors = Partial<Record<keyof FormFields, string>>;

const fields = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Your email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
] as const;

export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  function clearError(field: keyof FormFields) {
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = inquirySchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });

    if (!result.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && field in inquirySchema.shape) {
          nextErrors[field as keyof FormFields] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const body = `Hi Ridam,\n\n${result.data.message}\n\nFrom: ${result.data.name}\nEmail: ${result.data.email}`;
    setOpen(false);
    window.setTimeout(() => {
      window.location.href = `mailto:kumarridam172@gmail.com?subject=${encodeURIComponent(result.data.subject)}&body=${encodeURIComponent(body)}`;
    }, 0);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="group h-auto rounded-none px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5">
          Hire Me
          <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto rounded-none border-border bg-background p-6 shadow-2xl sm:p-8">
        <DialogHeader>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">New inquiry</p>
          <DialogTitle className="font-display text-3xl">Let&apos;s build something useful.</DialogTitle>
          <DialogDescription className="pt-2 leading-relaxed">
            Share the role, project, or collaboration you have in mind. Your email app will open with everything ready to send.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-3 space-y-5" onSubmit={handleSubmit} noValidate>
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-foreground/80">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                maxLength={field.name === "email" ? 255 : field.name === "subject" ? 120 : 80}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                onChange={() => clearError(field.name)}
                className="h-11 w-full border border-input bg-secondary/40 px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
              {errors[field.name] && <p id={`${field.name}-error`} className="mt-1.5 text-xs text-destructive">{errors[field.name]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-foreground/80">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1500}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={() => clearError("message")}
              className="w-full resize-y border border-input bg-secondary/40 px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {errors.message && <p id="message-error" className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
          </div>

          <DialogFooter className="gap-3 pt-2 sm:space-x-0">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="rounded-none font-mono text-xs uppercase tracking-widest">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="rounded-none font-mono text-xs uppercase tracking-widest">
              <Mail /> Prepare email
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}