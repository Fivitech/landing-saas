"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { countries } from "@/data/countries";
import { dialCodes, defaultDialCode, type DialCode } from "@/data/dialCodes";

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
      setDialCode(defaultDialCode);
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

function PhoneField({
  dialCode,
  onDialCodeChange,
  number,
  onNumberChange,
  invalid,
}: {
  dialCode: DialCode;
  onDialCodeChange: (value: DialCode) => void;
  number: string;
  onNumberChange: (value: string) => void;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return dialCodes;
    return dialCodes.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dialCode.includes(q) || c.iso.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div
      className={cn(
        "flex h-10 w-full overflow-hidden rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        invalid && "border-destructive",
      )}
    >
      <Popover open={open} onOpenChange={(next) => { setOpen(next); if (!next) setQuery(""); }}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label={`Country code: ${dialCode.name} ${dialCode.dialCode}`}
            className="flex shrink-0 items-center gap-1.5 border-r border-input bg-muted/40 px-3 text-sm font-medium transition hover:bg-muted/70 focus-visible:outline-none"
          >
            <span className="text-base leading-none">{dialCode.flag}</span>
            <span className="tabular-nums">{dialCode.dialCode}</span>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-72 p-0">
          <div className="flex items-center gap-2 border-b border-border px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country or code"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <p className="px-3 py-4 text-center text-sm text-muted-foreground">No matches</p>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.iso}
                  type="button"
                  onClick={() => {
                    onDialCodeChange(c);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition hover:bg-muted",
                    c.iso === dialCode.iso && "bg-muted/60",
                  )}
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="tabular-nums text-muted-foreground">{c.dialCode}</span>
                </button>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
      <input
        id="mobile"
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={number}
        onChange={(event) => onNumberChange(event.target.value)}
        className="h-full w-full bg-transparent px-3 text-base outline-none placeholder:text-muted-foreground md:text-sm"
      />
    </div>
  );
}
