"use client"
import React from 'react';
import { Menu as MenuIcon} from "lucide-react";
import { Button } from "../ui/button";

const Menu = () => {
  return (
    <Button variant="transparent" size="icon">
      <MenuIcon className="hover:cursor-pointer hover:text-primary" />
    </Button>
  );
};

export default Menu;