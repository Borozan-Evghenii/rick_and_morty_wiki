import { Footer, Header } from '@components';
import { PageLayout } from '@layouts';
import { Outlet } from 'react-router';

export const RootLayout = () => (
  <>
    <Header />
    <PageLayout>
      <Outlet />
    </PageLayout>
    <Footer />
  </>
);
