import Navbar from "../components/Navbar/Navbar";
import Spotlight from "../components/Spotlight/Spotlight";
import Swimlane from "../components/Swimlane/Swimlane";
import Footer from "../components/Footer/Footer";
import { getCards } from "../../../dataFetch";
import AuthGuard from "../guards/AuthGuard";

export default async function BrowsePage() {

  const swimlanes = await getCards();

  return (
    <>
      <AuthGuard>
        <Navbar />
        <main>
          <Spotlight/>
          {swimlanes.map((swimlane: Swimlane, index: number) => (
            <Swimlane swimlaneData={swimlane} key={index}/>
          ))}
        </main>
        <Footer/>
      </AuthGuard>
    </>
  );
}