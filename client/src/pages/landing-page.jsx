import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}