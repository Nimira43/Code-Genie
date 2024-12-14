import { SignedIn, SignedOut, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs'

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

      <UserButton />

      <SignedIn>
        <SignOutButton>
          <button className='bg-[#111] text-[#fffaf0] py-2 px-4 rounded-md hover:bg-[#ff4500]'>
              Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

