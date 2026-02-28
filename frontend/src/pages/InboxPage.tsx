import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetSubmissions } from '../hooks/useSubmissions';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Mail, Calendar, User, MessageSquare } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import ProfileSetupDialog from '../components/auth/ProfileSetupDialog';

export default function InboxPage() {
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const isAuthenticated = !!identity;
  
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const { data: submissions, isLoading, error } = useGetSubmissions(50);

  usePageMeta(
    'Inbox - SGS Solutions',
    'View contact form submissions from customers. Authentication required.'
  );

  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-[60vh]">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Inbox
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Sign in to view contact form submissions.
              </p>
              <Button 
                size="lg" 
                onClick={login}
                disabled={isLoggingIn}
                className="bg-accent hover:bg-accent/90"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (showProfileSetup) {
    return <ProfileSetupDialog />;
  }

  if (isLoading || profileLoading) {
    return (
      <div className="flex flex-col min-h-[60vh]">
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-accent" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-[60vh]">
        <section className="py-16 md:py-20">
          <div className="container">
            <Alert variant="destructive">
              <AlertDescription>
                Failed to load submissions. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        </section>
      </div>
    );
  }

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Inbox
            </h1>
            <p className="text-lg text-muted-foreground">
              Contact form submissions from customers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {!submissions || submissions.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">
                    No submissions yet. Check back later.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {submissions.length} {submissions.length === 1 ? 'submission' : 'submissions'}
                  </p>
                </div>
                {submissions.map((submission, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-accent" />
                            <span>{submission.name}</span>
                          </CardTitle>
                          <CardDescription className="flex items-center space-x-2">
                            <Mail className="h-3 w-3" />
                            <span>{submission.email}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(submission.timestamp)}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start space-x-2">
                        <MessageSquare className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground whitespace-pre-wrap">{submission.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

