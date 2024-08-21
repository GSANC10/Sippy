"use client"
import React from 'react';
import { Map as MapIcon } from "lucide-react";
import { Button } from "./button";

const Map = () => {
  return (
    <Button variant="transparent" size="icon">
      <MapIcon className="hover:cursor-pointer hover:text-primary" />
    </Button>
  );
};

export default Map;
