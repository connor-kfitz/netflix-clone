import NextAuth, { Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from "@/app/firebase/clientApp";
import { JWT } from "next-auth/jwt";
import { doc, getDoc } from "firebase/firestore";

async function pullAccountData(token: any): Promise<Account> {
  if (!token.email) return {name: '', profileImagePath: '', favorites: []};
  const docRef = doc(db, "users", token.email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return docSnap.data().accounts[0];
  return {name: '', profileImagePath: '', favorites: []}
}

export const authOptions = {
  pages: {
    signIn: '/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
          .then(userCredential => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch(error => (console.log(error)))
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
      }
    })
  ],
  // Todo: Fix types
  callbacks: {
    async jwt({token, session, trigger}: any): Promise<JWT> {
      if (trigger === 'update' && session?.account) {
        token.account = session.account;
      }
      return token;
   },
    async session({ session, token }: any): Promise<Session> {
         return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            account: token.account ? token.account : await pullAccountData(token)
          }
        } 
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}