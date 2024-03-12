import Login from "../components/Login/Login";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function LoginPage() {

  const session = await getServerSession(authOptions);
  if (session) redirect('/browse');

  return (
    <>
      <Login/>
    </>
  )
}
