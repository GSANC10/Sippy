"use client"
import React from 'react';
import { CircleUserRound} from "lucide-react";
import { Button } from "./button";

const Login = () => {
  return (
    <Button variant="transparent" size="lg">
      <CircleUserRound className="hover:cursor-pointer hover:text-primary" />
    </Button>
  );
};

export default Login;