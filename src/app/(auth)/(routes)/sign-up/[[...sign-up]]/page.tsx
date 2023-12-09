import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="  flex justify-center bg-gray-800 Signin h-[calc(100vh-64px)] items-center">
      <SignUp />
    </div>
  );
}
