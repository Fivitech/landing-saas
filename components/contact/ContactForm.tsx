"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { countries } from "@/data/countries";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    interest: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Phone validation regex (international format)
  const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

  const validateEmail = (email: string) => {
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    if (!phone) {
      return "Phone number is required";
    }
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // Update form data without validation on every keystroke
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear errors when user starts typing
    if (id === 'email' && errors.email) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
    if (id === 'phone' && errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    // Validate on blur
    if (id === 'email') {
      const emailError = validateEmail(value);
      setErrors(prev => ({ ...prev, email: emailError }));
    }
    if (id === 'phone') {
      const phoneError = validatePhone(value);
      setErrors(prev => ({ ...prev, phone: phoneError }));
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);
    
    if (emailError || phoneError) {
      setErrors({
        email: emailError,
        phone: phoneError
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone}\nCompany: ${formData.company || 'Not provided'}\nCountry: ${formData.country}\nInterest: ${formData.interest || 'Not specified'}\n\nMessage: ${formData.message || 'No additional message'}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. Someone from our team will reach out to you shortly.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          interest: "",
          message: ""
        });
        setErrors({
          email: "",
          phone: ""
        });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and our team will get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="name" 
              placeholder="Enter your full name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email address" 
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">
              Contact Number <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="Enter your phone number (e.g., +971 56 881 9915)" 
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">
              Company Name <span className="text-muted-foreground text-sm">(optional)</span>
            </Label>
            <Input 
              id="company" 
              placeholder="Enter your company name" 
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </Label>
            <Select 
              onValueChange={(value) => handleSelectChange('country', value)} 
              value={formData.country}
              required
            >
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
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">
              I'm interested in <span className="text-muted-foreground text-sm">(optional)</span>
            </Label>
            <Select 
              onValueChange={(value) => handleSelectChange('interest', value)} 
              value={formData.interest}
            >
              <SelectTrigger id="interest">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starter">Starter Plan</SelectItem>
                <SelectItem value="professional">Professional Plan</SelectItem>
                <SelectItem value="enterprise">Enterprise Plan</SelectItem>
                <SelectItem value="custom">Custom Solution</SelectItem>
                <SelectItem value="demo">Product Demo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-muted-foreground text-sm">(optional)</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your requirements and questions"
              className="min-h-[120px]"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full rounded-full shadow-lg bg-primary text-white hover:bg-primary/90 hover:shadow-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}