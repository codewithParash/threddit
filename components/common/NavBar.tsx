import React from "react";
import Link from "next/link";

import DialogModal from "@/components/common/DialogModal";
import OAuthLogin from "@/components/common/OAuthLogin";
import ToggleTheme from "@/components/common/ToggleTheme";
import UserMenu from "@/components/UserMenu";

import { getAuthSession } from "@/lib/auth";

const NavBar = async () => {
  const session = await getAuthSession();

  return (
    <div className="flex py-6 justify-between items-center">
      <Link href="/">Threddit</Link>

      <div className="flex items-center gap-4">
        <ToggleTheme />
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <DialogModal buttonText="Sign in">
            <OAuthLogin />
          </DialogModal>
        )}
      </div>
    </div>
  );
};

export default NavBar;
