import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Locations from "@/components/Locations";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ScrollFX from "@/components/ScrollFX";
import ContactSystem from "@/components/ContactSystem";
export default function Page() {
  return (<ContactSystem><>
    <ScrollFX /><Header />
    <main><Hero /><About /><Education /><Locations /><Services /><Differentials /><FinalCta /></main>
    <Footer /><WhatsAppFab />
  </></ContactSystem>);
}
