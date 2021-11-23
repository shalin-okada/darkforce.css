import Footer from 'components/footer';
import type { AppProps } from 'next/app';
import 'sanitize.css';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <StyledMain>
        <Component {...pageProps} />
      </StyledMain>
      <Footer />
    </>
  );
};

export default MyApp;
