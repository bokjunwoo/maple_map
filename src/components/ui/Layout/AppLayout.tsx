import { Container } from '@mui/material';
import HeaderUI from './HeaderUI';
import FooterUI from './FooterUI';

type AppLayoutTpye = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutTpye) => {
  return (
    <>
      <HeaderUI />
      <Container maxWidth="lg">{children}</Container>
      <FooterUI />
    </>
  );
};

export default AppLayout;
