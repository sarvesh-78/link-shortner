import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { LinkIcon, LogOut } from "lucide-react";
import { UrlState } from "@/context";
import useFetch from "@/hooks/use-fetch";
import { logout } from "@/db/apiAuth";
import { BarLoader } from "react-spinners";

const Header = () => {
  const {loading, fn: fnLogout} = useFetch(logout);
  const navigate = useNavigate();
  //getting the user object
  const {user, fetchUser} = UrlState();

  return (
    <>
      <nav className="border-b-4">
        <div className="p-4 px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold ">
            Link-Shortner
          </Link>
          <div className="flex gap-4 ">
            {!user ? (
              <Button onClick={() => navigate("/auth")}>Login</Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="w-12 rounded-full overflow-hidden">
                  <Avatar>
                    <AvatarImage src="https://github.com/Tushar292004.png" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    {user?.user_metadata?.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="flex">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      My Links
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      fnLogout().then(() => {
                        fetchUser();
                        navigate("/auth");
                      });
                    }}
                    className="text-red-400"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </nav>
      {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />} 
    </>
  );
}

export default Header;