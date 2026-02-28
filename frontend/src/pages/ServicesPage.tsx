import { Wrench, Zap, Shield, Cog, Server, HardDrive } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ServicesPage() {
  usePageMeta(
    'Services - SGS Solutions',
    'Professional IT services including computer repairs, upgrades, diagnostics, maintenance, and technical support for businesses and individuals.'
  );

  const services = [
    {
      icon: Wrench,
      title: 'Computer Repairs',
      description: 'Fast and reliable repair services for all computer issues',
      features: [
        'Hardware diagnostics and replacement',
        'Software troubleshooting and fixes',
        'Virus and malware removal',
        'Data recovery services',
        'Same-day service available',
      ],
    },
    {
      icon: Zap,
      title: 'System Upgrades',
      description: 'Boost your computer\'s performance with professional upgrades',
      features: [
        'RAM and storage upgrades',
        'Graphics card installation',
        'Processor upgrades',
        'Operating system updates',
        'Performance optimization',
      ],
    },
    {
      icon: Shield,
      title: 'Diagnostics & Testing',
      description: 'Comprehensive system analysis to identify and resolve issues',
      features: [
        'Complete hardware testing',
        'Software compatibility checks',
        'Performance benchmarking',
        'Security vulnerability assessment',
        'Detailed diagnostic reports',
      ],
    },
    {
      icon: Cog,
      title: 'Preventive Maintenance',
      description: 'Keep your systems running smoothly with regular maintenance',
      features: [
        'System cleaning and optimization',
        'Software updates and patches',
        'Hardware inspection',
        'Backup solutions setup',
        'Scheduled maintenance plans',
      ],
    },
    {
      icon: Server,
      title: 'Network Setup',
      description: 'Professional network installation and configuration',
      features: [
        'Home and office networking',
        'Wi-Fi setup and optimization',
        'Network security configuration',
        'Remote access setup',
        'Network troubleshooting',
      ],
    },
    {
      icon: HardDrive,
      title: 'Data Services',
      description: 'Protect and manage your valuable data',
      features: [
        'Data backup solutions',
        'Cloud storage setup',
        'Data migration services',
        'File recovery',
        'Secure data disposal',
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
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional IT services tailored to your needs. From repairs to upgrades, our certified technicians provide expert solutions with guaranteed satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
              Our Service Guarantee
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quality Workmanship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All repairs and services are performed by certified technicians using quality parts and industry best practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Warranty Backed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We stand behind our work with comprehensive warranties on all repairs and installations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No hidden fees. We provide detailed quotes before starting any work and keep you informed throughout.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fast Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most repairs completed within 24-48 hours. Same-day service available for urgent issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

