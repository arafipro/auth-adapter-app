import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { headerSigninLinks, headerSignoutLinks } from "@/constants";
import Link from "next/link";
import UserAvatar from "./auth/user-avatar";
import SigninButton from "./signin-button";

export default async function Header() {
  const session = await auth();
  const headerLinks = session ? headerSigninLinks : headerSignoutLinks;
  return (
    <header className="border-b-2 px-8 py-4">
      <ul className="flex gap-8">
        {headerLinks.map((link) => (
          <li key={link.key}>
            <Button variant={"link"} asChild>
              <Link href={link.route}>{link.label}</Link>
            </Button>
          </li>
        ))}
        <li className="ml-auto">
          {session ? <UserAvatar /> : <SigninButton />}
        </li>
      </ul>
    </header>
  );
}
