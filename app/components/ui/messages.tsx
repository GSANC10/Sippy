"use client"
import React from 'react';
import { MessageSquare } from "lucide-react";
import { Button } from "./button";

const Messages = () => {
  return (
    <Button variant="transparent" size="lg">
      <MessageSquare className="hover:cursor-pointer hover:text-primary" />
    </Button>
  );
};

export default Messages;