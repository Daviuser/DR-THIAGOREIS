import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ScrollFX from "@/components/ScrollFX";
export default function Page() {
  return (<>
    <ScrollFX /><Header />
    <main><Hero /><About /><Services /><Differentials /><FinalCta /></main>
    <Footer /><WhatsAppFab />
  </>);
}
