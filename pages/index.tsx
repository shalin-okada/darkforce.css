import Card from 'components/Card';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin-top: 3rem;
`;

const Code = styled.code`
  padding: 0.75rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;
  font-size: 1.1rem;
  background: #fafafa;
  border-radius: 5px;
`;

const StyledCard = styled(Card)`
  flex-basis: 45%;
  padding: 1.5rem;
  margin: 1rem;
  color: inherit;
  text-align: left;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const Home: NextPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Title>Welcome to W&amp;D Next.js template!</Title>

    <Description>
      Get started by editing <Code>pages/index.tsx</Code>
    </Description>

    <Grid>
      <StyledCard href="https://nextjs.org/docs">
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </StyledCard>

      <StyledCard href="https://nextjs.org/learn">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </StyledCard>

      <StyledCard href="https://github.com/vercel/next.js/tree/master/examples">
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </StyledCard>

      <StyledCard href="https://vercel.com/import?filter=next.js">
        <h3>Deploy &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </StyledCard>
    </Grid>
  </>
);

export default Home;
