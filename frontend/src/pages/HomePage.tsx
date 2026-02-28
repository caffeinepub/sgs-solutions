import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Wrench, ShoppingCart, Headphones, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage() {
  const navigate = useNavigate();
  usePageMeta(
    'SGS Solutions - Computer Sales & IT Services',
    'Professional computer sales and IT services. Quality products, expert repairs, and reliable support for all your technology needs.'
  );

  const valueProps = [
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'Over 15 years of experience in computer sales and IT services with certified technicians.',
    },
    {
      icon: ShoppingCart,
      title: 'Quality Products',
      description: 'Wide selection of top-brand computers, components, and accessories at competitive prices.',
    },
    {
      icon: Wrench,
      title: 'Professional Repairs',
      description: 'Fast, reliable repair services for all makes and models with warranty-backed work.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer support team ready to help you with any technical questions.',
    },
  ];

  const featuredProducts = [
    {
      title: 'Business Laptops',
      description: 'High-performance laptops for professionals and enterprises.',
      image: '/assets/generated/sgs-service-icons.dim_512x512.png',
    },
    {
      title: 'Custom Desktops',
      description: 'Build your perfect workstation with our custom PC solutions.',
      image: '/assets/generated/sgs-service-icons.dim_512x512.png',
    },
    {
      title: 'Accessories',
      description: 'Complete your setup with premium peripherals and components.',
      image: '/assets/generated/sgs-service-icons.dim_512x512.png',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Your Technology Partner for Success
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                SGS Solutions provides premium computer sales, expert repair services, and comprehensive IT support to keep your business running smoothly.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => navigate({ to: '/contact' })}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate({ to: '/services' })}
                >
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/sgs-hero-illustration.dim_1600x900.png"
                alt="Computer services and technology solutions"
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Choose SGS Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with exceptional customer service to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, index) => (
              <Card key={index} className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <prop.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{prop.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products/Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our selection of quality computers and accessories from leading brands.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 object-contain opacity-60"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate({ to: '/products' })}
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-3xl sm:text-4xl">
                Ready to Upgrade Your Technology?
              </CardTitle>
              <CardDescription className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Contact us today for a free consultation. Our team is ready to help you find the perfect solution for your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate({ to: '/contact' })}
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

