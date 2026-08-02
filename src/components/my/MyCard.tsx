import { Card } from "@/components/ui/card";
import React from "react";

function MyCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex md:items-center md:justify-center">
      <Card className="w-full md:max-w-sm flex bg-background md:bg-card rounded-none md:rounded-2xl">
        {children}
      </Card>
    </div>
  );
}

export default MyCard;
