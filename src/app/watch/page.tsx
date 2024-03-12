import Player from "../components/Player/Player";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function WatchPage() {

  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <>
      <Player/>
    </>
  )
}
