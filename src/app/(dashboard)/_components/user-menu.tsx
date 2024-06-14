import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { User } from "lucide-react";

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent/10 rounded-full ">
          <User className="h-4- w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-transparent/60 space-y-4 p-4 mr-10 mt-10 z-50"
        align="start"
      >
        <DropdownMenuLabel>User Information</DropdownMenuLabel>
        <Separator />
        <DropdownMenuItem className="font-base text-md">
          Abdullah
        </DropdownMenuItem>
        <DropdownMenuItem className="text-cream-light text-sm">
          babbu26790@gmail.com
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
