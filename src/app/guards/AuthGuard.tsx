"use client";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

type AuthGuardProps = {
    children: React.ReactNode
}

export default function AuthGuard({children}: AuthGuardProps) {

    const { user } = UserAuth();
    const router = useRouter();

    if (!user) {
        router.push('/login');
    } else {
        return children
    }

}
