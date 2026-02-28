import { Monitor, Laptop, HardDrive, Keyboard, Mouse, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ProductsPage() {
  usePageMeta(
    'Products - SGS Solutions',
    'Browse our wide selection of computers, laptops, components, and accessories from top brands at competitive prices.'
  );

  const productCategories = [
    {
      icon: Laptop,
      title: 'Laptops',
      description: 'Business and personal laptops from leading manufacturers',
      items: [
        'Business Ultrabooks',
        'Gaming Laptops',
        'Budget-Friendly Options',
        'Workstation Laptops',
      ],
      badge: 'Popular',
    },
    {
      icon: Monitor,
      title: 'Desktop Computers',
      description: 'Custom-built and pre-configured desktop systems',
      items: [
        'Custom Gaming PCs',
        'Office Workstations',
        'All-in-One Systems',
        'Mini PCs',
      ],
      badge: 'Best Value',
    },
    {
      icon: HardDrive,
      title: 'Components & Upgrades',
      description: 'High-quality parts to build or upgrade your system',
      items: [
        'Processors (CPU)',
        'Graphics Cards (GPU)',
        'Memory (RAM)',
        'Storage (SSD/HDD)',
      ],
    },
    {
      icon: Keyboard,
      title: 'Peripherals',
      description: 'Essential accessories for your computing setup',
      items: [
        'Mechanical Keyboards',
        'Wireless Mice',
        'Webcams',
        'USB Hubs',
      ],
    },
    {
      icon: Headphones,
      title: 'Audio & Video',
      description: 'Professional audio and video equipment',
      items: [
        'Headsets',
        'Microphones',
        'Monitors',
        'Speakers',
      ],
    },
    {
      icon: Mouse,
      title: 'Accessories',
      description: 'Complete your setup with quality accessories',
      items: [
        'Laptop Bags',
        'Cable Management',
        'Cleaning Kits',
        'Ergonomic Stands',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive range of computers, components, and accessories. We stock only quality products from trusted brands to ensure your satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <category.icon className="h-6 w-6 text-accent" />
                    </div>
                    {category.badge && (
                      <Badge variant="secondary">{category.badge}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Buy From SGS Solutions?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  We offer the best prices on quality products with price-match guarantees.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Advice</h3>
                <p className="text-muted-foreground">
                  Our knowledgeable staff helps you choose the right products for your needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Warranty Support</h3>
                <p className="text-muted-foreground">
                  All products come with manufacturer warranties and our support guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

