import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'

export default function page() {
  return (
    <div>
      <h1 className='logo'>Code Genie</h1>
      <SignedOut>
        <SignUpButton>
          <button className='bg-[#ff4500] text-[#fffaf0] py-2 px-4 rounded-md hover:bg-[#111]'>
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

