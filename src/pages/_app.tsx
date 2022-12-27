import type { AppProps } from 'next/app';
import NextImage from "next/image"
import { globalStyles } from '../styles/global'

import logoImg from "../assets/Logo.svg"
import { Container, Header } from '../styles/page/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Container>
      <Header>
        <NextImage
          {...logoImg}
          alt=""
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
