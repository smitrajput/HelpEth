import React from 'react';
import Header from './Header';
import Head from 'next/head';       //anything contained in it, will be placed in the <head> tag of all the pages
import { Container } from 'semantic-ui-react';

export default (props) => {           //functional components get called using props
  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
