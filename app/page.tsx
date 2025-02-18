
import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-background" >
      <Container className="px-5">
        <Header />
      </Container>
      <Container>
        <Hero />
      </Container>
      {/* <Container>
        <footer>Footer</footer>
      </Container> */}
    </div>
  );
}
