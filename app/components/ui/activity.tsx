"use client"
import React from 'react';
import { Flame as Activity} from "lucide-react";
import { Button } from "./button";

const Flame = () => {
  return (
    <Button variant="transparent" size="lg">
      <Activity className="hover:cursor-pointer hover:text-primary" />
    </Button>
  );
};

export default Flame;