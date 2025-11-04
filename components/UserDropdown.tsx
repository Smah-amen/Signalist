'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
const UserDropdown = () => {
  const router = useRouter()
  const handelSignOut = async() => {
    router.push('/signin')
  }
  const user = { name: "sam" , email: "sam@gmail.com"}
  return (
<DropdownMenu>
  <DropdownMenuTrigger  asChild>
    <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">
    <Avatar className="h-8 w-8">
        {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="hidden flex-col  md:flex items-start leading-none">
        <span className="text-base font-medium leading-none">{user?.name}</span>
      </div>
    </Button>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>  )
}

export default UserDropdown