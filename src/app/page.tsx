import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <Benefits data={benefitOne} />

      <SectionTitle preTitle="Products" title="Here's what we build">
        {/* Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers. */}
      </SectionTitle>

      <Testimonials />

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq /> */}
      {/* <Cta /> */}
    </Container>
  );
}
