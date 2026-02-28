import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta(
    'About Us - SGS Solutions',
    'Learn about SGS Solutions - your trusted technology partner with over 15 years of experience in computer sales and IT services.'
  );

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our team holds industry certifications and stays current with the latest technology trends.',
    },
    {
      icon: Users,
      title: 'Customer-Focused',
      description: 'We prioritize your satisfaction with personalized service and ongoing support.',
    },
    {
      icon: Target,
      title: 'Proven Track Record',
      description: 'Thousands of satisfied customers and successful projects over 15+ years.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Quality products and services at fair prices with transparent quotes.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              About SGS Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted technology partner for over 15 years, delivering excellence in computer sales and IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, SGS Solutions began with a simple mission: to provide businesses and individuals with reliable technology solutions and exceptional service. What started as a small computer repair shop has grown into a comprehensive IT services provider serving hundreds of satisfied customers.
                </p>
                <p>
                  Over the years, we've built our reputation on technical expertise, honest advice, and a genuine commitment to solving our customers' technology challenges. Whether you need a new computer, a critical repair, or ongoing IT support, we treat every customer with the same dedication and professionalism.
                </p>
                <p>
                  Today, SGS Solutions is proud to be a trusted name in the community, known for quality products, expert service, and customer satisfaction. We continue to evolve with technology while maintaining the personal touch that has always defined us.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/sgs-hero-illustration.dim_1600x900.png"
                alt="SGS Solutions team and services"
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground">
              To empower our customers with reliable technology solutions and expert support, enabling them to focus on what matters most—their work, their passions, and their success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical excellence with exceptional customer service to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/90">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-primary-foreground/90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/90">Repairs Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

