import SignUp from "../components/SignUp/SignUp";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function SignUpPage() {

  const session = await getServerSession(authOptions);
  if (session) redirect('/browse');

  return (
    <>
      <SignUp/>
    </>
  )
}
