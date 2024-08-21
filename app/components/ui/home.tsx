"use client"
import React from 'react';
import { House as HouseIcon} from "lucide-react";
import { Button } from "./button";

const House = () => {
  return (
    <Button variant="transparent" size="lg">
      <HouseIcon className="hover:cursor-pointer hover:text-primary" />
    </Button>
  );
};

export default House;
