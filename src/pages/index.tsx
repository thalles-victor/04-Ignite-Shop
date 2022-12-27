import NextImage from "next/image";

import { HomeContainer, Product } from "../styles/page/home";

import shirt1 from "../assets/shirts/1.png"
import shirt2 from "../assets/shirts/2.png"
import shirt3 from "../assets/shirts/3.png"
import shirt4 from "../assets/shirts/4.png"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <NextImage
          {...shirt1}
          alt=""
          width={520}
          height={480}
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      
      <Product>
        <NextImage
          {...shirt2}
          alt=""
          width={520}
          height={480}
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
