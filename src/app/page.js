import Explore from "@/components/sections/venue/Explore";
import HeroSectionVenue from "@/components/sections/venue/HeroSectionVenue";
import TravelInfo from "@/components/sections/venue/TravelInfo";
import VenueGallery from "@/components/sections/venue/VenueGallery";
import WeddingVenue from "@/components/sections/venue/WeddingVenue";

export default function Home() {
  return (
    <>
      <HeroSectionVenue/>
      <WeddingVenue />
      <VenueGallery />
      <TravelInfo />
      <Explore />
    </>
  );
}
