import { getAuthSession } from "@/lib/auth";
import React from "react";

const Neww = async () => {
  const session = await getAuthSession();
  return (
    <div>{session?.user ? <span>Logged In</span> : <span>Login</span>}</div>
  );
};

export default Neww;
