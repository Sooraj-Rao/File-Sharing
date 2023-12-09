import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="  flex justify-center bg-gray-800 Signin h-[calc(100vh-64px)] items-center">
      <SignIn />
    </div>
  );
}
