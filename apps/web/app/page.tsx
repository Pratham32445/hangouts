import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <header className="max-w-6xl m-auto min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={"/logo.png"} width={100} height={50} alt="logo" />
          <h1 className="text-3xl">Hangouts</h1>
        </div>
        <div className="flex gap-4"> 
          <Button className="p-5 cursor-pointer">Get Started</Button>
          <Button className="px-8 py-5 cursor-pointer border-none" variant={"outline"}>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Index;
