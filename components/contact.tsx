"use client";

import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // Randomly succeed or fail for demo purposes
      setFormStatus(Math.random() > 0.2 ? "success" : "error");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <p className="mx-auto max-w-2xl text-foreground/80">
            I'd love to contribute my skills to help your vision reach its full
            potential.
          </p>
          <p className="mx-auto max-w-2xl text-foreground/80">
            Open to discussing how I can add value to your ongoing initiatives.
          </p>
        </motion.div>

        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto"
          >
            <div className="space-y-8">
              {/* <h3 className="text-2xl font-bold mb-6">Contact Information</h3> */}

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">Email</h4>
                  <a
                    href="mailto:muneyasu.kagawa@gmail.com"
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    muneyasu.kagawa@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <FiLinkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">LinkedIn</h4>
                  <Link href="https://x.com/m_kagawa_">
                    <p className="text-foreground/80">Muneyasu Kagawa</p>
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <FaXTwitter className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">X</h4>
                  <Link href="https://x.com/m_kagawa_">
                    <p className="text-foreground/80">@m_kagawa_</p>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    disabled={formStatus === "submitting"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={
                  formStatus === "submitting" || formStatus === "success"
                }
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                )}
                {formStatus === "error" && (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Failed to Send
                  </>
                )}
              </Button>

              {formStatus === "error" && (
                <p className="text-destructive text-sm text-center">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
