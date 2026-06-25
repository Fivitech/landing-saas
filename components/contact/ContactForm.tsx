"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { PhoneField } from "@/components/contact/PhoneField";
import { countries } from "@/data/countries";
import { defaultDialCode, type DialCode } from "@/data/dialCodes";
import { detectDefaultDialCode } from "@/lib/geo";

type FormData = {
  firstName: string;
  lastName: string;
  companyEmail: string;
  companyName: string;
  mobile: string;
  country: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  companyEmail: "",
  companyName: "",
  mobile: "",
  country: "",
  website: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{2,5}[-\s.]?[0-9]{2,6}[-\s.]?[0-9]{2,9}$/;

function validate(data: FormData) {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.companyEmail.trim()) errors.companyEmail = "Company email is required";
  else if (!emailRegex.test(data.companyEmail)) errors.companyEmail = "Enter a valid company email";
  if (!data.companyName.trim()) errors.companyName = "Company name is required";
  if (!data.mobile.trim()) errors.mobile = "Mobile number is required";
  else if (!phoneRegex.test(data.mobile.replace(/\s/g, ""))) errors.mobile = "Enter a valid mobile number";
  if (!data.country) errors.country = "Country is required";

  return errors;
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [dialCode, setDialCode] = useState<DialCode>(defaultDialCode);
  const [errors, setErrors] = useState<FormErrors>({});

  // Default the dial code to the visitor's location (browser timezone) after
  // mount. Runs client-side only, so SSR markup stays consistent (UAE default).
  useEffect(() => {
    setDialCode(detectDefaultDialCode());
  }, []);

  const setField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          mobile: `${dialCode.dialCode} ${formData.mobile.trim()}`,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to send request");

      toast({
        title: "Demo request sent",
        description: "Thanks. The Fivitech team will contact you shortly.",
      });
      setFormData(initialFormData);
      setDialCode(detectDefaultDialCode());
      setErrors({});
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Could not send request",
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-panel rounded-3xl">
      <CardHeader>
        <CardTitle>Request a live demo</CardTitle>
        <CardDescription>Six quick details. No long message box, no sales maze.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <input
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            id="website"
            name="website"
            value={formData.website}
            onChange={(event) => setField("website", event.target.value)}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First name" id="firstName" error={errors.firstName}>
              <Input id="firstName" value={formData.firstName} onChange={(event) => setField("firstName", event.target.value)} autoComplete="given-name" />
            </Field>
            <Field label="Last name" id="lastName" error={errors.lastName}>
              <Input id="lastName" value={formData.lastName} onChange={(event) => setField("lastName", event.target.value)} autoComplete="family-name" />
            </Field>
          </div>
          <Field label="Company email" id="companyEmail" error={errors.companyEmail}>
            <Input id="companyEmail" type="email" value={formData.companyEmail} onChange={(event) => setField("companyEmail", event.target.value)} autoComplete="email" />
          </Field>
          <Field label="Company name" id="companyName" error={errors.companyName}>
            <Input id="companyName" value={formData.companyName} onChange={(event) => setField("companyName", event.target.value)} autoComplete="organization" />
          </Field>
          <Field label="Mobile number" id="mobile" error={errors.mobile}>
            <PhoneField
              dialCode={dialCode}
              onDialCodeChange={setDialCode}
              number={formData.mobile}
              onNumberChange={(value) => setField("mobile", value)}
              invalid={Boolean(errors.mobile)}
            />
          </Field>
          <Field label="Country" id="country" error={errors.country}>
            <Select value={formData.country} onValueChange={(value) => setField("country", value)}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.name}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Button type="submit" className="w-full rounded-full bg-primary py-6 text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : "Request Demo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label} <span className="text-primary">*</span></Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
