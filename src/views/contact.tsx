"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Mail } from "lucide-react";
import { PageSEO } from "@/components/PageSEO";
import { PageHeader } from "@/components/PageHeader";
import { siteContent, partnerAudiences } from "@/content/site";
import { themes } from "@/content/themes";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().min(2, "Organization is required."),
  email: z.string().email("Invalid email address."),
  partnerType: z.string().min(1, "Please select a partner type."),
  themeInterest: z.string().min(1, "Please select a domain."),
  message: z.string().min(10, "Please describe your deployment scope or collaboration objectives."),
});

type FormValues = z.infer<typeof formSchema>;

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.38 },
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { partnerPage, footer } = siteContent;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      partnerType: "",
      themeInterest: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          organization: data.organization,
          email: data.email,
          orgType: data.partnerType,
          areaOfInterest: data.themeInterest,
          country: "Not specified",
          message: data.message,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.errors?.[0] || "Submission failed");
      }
      toast({
        title: "Inquiry received",
        description: json.message || "Our team will follow up on your inquiry.",
      });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageSEO
        title="Contact — Institutional Partnerships"
        description={partnerPage.subtitle}
        path="/contact"
      />

      <article className="pt-28 pb-12 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <PageHeader
            label="Contact"
            title={partnerPage.title}
            description={partnerPage.subtitle}
          />

          <section className="mb-14" aria-label="Partner types">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnerAudiences.map((audience, idx) => (
                <motion.div
                  key={audience.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
                  className="bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <h3 className="text-base font-bold text-foreground mb-2">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <section aria-label="Contact form">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <motion.div {...fadeIn} className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-4">{partnerPage.contactCta}</h2>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={14} />
                  {footer.email}
                </a>
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.1 }}
                className="lg:col-span-3 bg-card border border-border p-8 rounded-2xl"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Full name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" className="h-11" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Organization
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Agency, operator, or institution" className="h-11" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@organization.org" className="h-11" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="partnerType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Partner type
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {partnerAudiences.map((a) => (
                                  <SelectItem key={a.id} value={a.id}>
                                    {a.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="themeInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                              Operational domain
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11">
                                  <SelectValue placeholder="Select domain" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {themes.map((t) => (
                                  <SelectItem key={t.id} value={t.id}>
                                    {t.title}
                                  </SelectItem>
                                ))}
                                <SelectItem value="general">General / Multiple</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the system, deployment environment, or partnership scope."
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 font-semibold hover-elevate"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending
                        </>
                      ) : (
                        "Submit inquiry"
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
