import Link from "next/link"
import Image from "next/image"

import { SignupForm } from "./SignupForm"


export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="mb-4 flex justify-center">
           <Link href={"/"}>
            <Image src={'/nestify.png'} width={200} height={100} alt="Nestify"/>
           </Link>
        </div>
        <SignupForm/>
      </div>
    </div>
  )
}