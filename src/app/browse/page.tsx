import Navbar from "../components/Navbar/Navbar";
import Spotlight from "../components/Spotlight/Spotlight";
import Swimlane from "../components/Swimlane/Swimlane";
import Footer from "../components/Footer/Footer";
import { getCards } from "../../../dataFetch";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function BrowsePage() {

  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  const swimlanes = await getCards();

  return (
    <>
      <Navbar />
        <main>
          <Spotlight/>
          {swimlanes.map((swimlane: Swimlane, index: number) => (
            <Swimlane swimlaneData={swimlane} key={index}/>
          ))}
        </main>
      <Footer/>
    </>
  );
}