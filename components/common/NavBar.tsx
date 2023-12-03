import React from "react";

import DialogModal from "@/components/common/DialogModal";
import OAuthLogin from "@/components/common/OAuthLogin";
import UserMenu from "@/components/UserMenu";
import { getAuthSession } from "@/lib/auth";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavBar = async () => {
  const session = await getAuthSession();

  return (
    <div className="flex py-6 justify-between items-center">
      <p>Threddit</p>

      <div className="flex items-center gap-4">
        {/* <ToggleTheme /> */}
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
