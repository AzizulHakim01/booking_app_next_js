'use client'
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import React, { useState } from "react";

import { Architects_Daughter } from "next/font/google";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const ArchitectsDaugher = Architects_Daughter({
  weight:"400",
  style:"normal",
  subsets:["latin"],
})

const Login = () => {
const [ email, setEmail] = useState("");
const [ password, setPassword] = useState("");

const handleLogin = async() =>{

}

  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/home/home-bg.png ' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl " />
      <Card className="shadow-2xl bg-opacity-20 w-[480px]">
        <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
          <div className="flex flex-col gap-1 capitalize text-3xl items-center">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
            <span className="text-xl uppercase font-medium italic text-white">
             <span className={ArchitectsDaugher.className}>
             hydra global empire admin Login
             </span>
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col items-center w-full justify-center">
          <div className="flex flex-col gap-2 w-full">
            <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} color="danger"/>
            <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} color="danger"/>
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          <Button color="danger" variant="shadow" className="w-full capatalize" size="lg" onClick={handleLogin}>
            Log In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
