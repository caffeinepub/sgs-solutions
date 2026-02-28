import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '../components/contact/ContactForm';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta(
    'Contact Us - SGS Solutions',
    'Get in touch with SGS Solutions for computer sales, repairs, and IT services. We\'re here to help with all your technology needs.'
  );

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or need assistance? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you need a quote, have a technical question, or want to schedule a service, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Phone</CardTitle>
                        <CardDescription>Mon-Fri 9am-6pm, Sat 10am-4pm</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+15551234567" className="text-lg font-medium hover:text-accent transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <CardDescription>We'll respond within 24 hours</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@sgssolutions.com" className="text-lg font-medium hover:text-accent transition-colors">
                      info@sgssolutions.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Location</CardTitle>
                        <CardDescription>Visit our store</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">
                      123 Tech Street<br />
                      Silicon Valley, CA 94025
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Business Hours</CardTitle>
                        <CardDescription>When we're available</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

