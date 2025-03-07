import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bispo's website" />
        <meta name="author" content="João Gustavo" />
        <meta name="author" content="bisposcode" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="João Gustavo" />
        <meta name="og:title" content="João Gustavo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.bisposcode.io/card.png"
        />
        <title>Bspo Code - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={4}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
