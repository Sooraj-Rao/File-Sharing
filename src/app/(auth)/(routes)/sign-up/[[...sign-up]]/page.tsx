import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="  flex justify-center bg-gray-300 Signin h-screen items-center">
      <SignUp />
    </div>
  );
}
