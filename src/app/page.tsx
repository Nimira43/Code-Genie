import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'

export default function page() {
  return (
    <div>
      <h1>Code Genie</h1>
      <SignedOut>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

