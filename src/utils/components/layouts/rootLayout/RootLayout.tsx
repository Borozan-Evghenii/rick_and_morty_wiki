import { Footer, Header } from '@components';
import { useScrollTop } from '@hooks';
import { PageLayout } from '@layouts';
import { Outlet } from 'react-router';

export const RootLayout = () => {
  useScrollTop();
  return (
    <>
      <Header />
      <PageLayout>
        <Outlet />
      </PageLayout>
      <Footer />
    </>
  );
};
