import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="  flex justify-center bg-gray-300 Signin h-screen items-center">
      <SignIn />
    </div>
  );
}
