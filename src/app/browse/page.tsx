import Spotlight from "../components/Spotlight/Spotlight";
import Swimlane from "../components/Swimlane/Swimlane";

export default async function BrowsePage() {

  const swimlanes = Array.from(Array(10).keys());

  return (
    <>
      <Spotlight/>
      {swimlanes.map((swimlane, index) => (
        <Swimlane data={swimlane} key={index}/>
      ))}
    </>
  );
  }