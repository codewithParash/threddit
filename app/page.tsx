"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="py-8">Welcome to Threddit.</h1>
      <Button>
        <Link href="/r/create">Create Community</Link>
      </Button>
    </div>
  );
}
