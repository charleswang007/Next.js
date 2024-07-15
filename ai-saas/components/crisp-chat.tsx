"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5fb9d4bb-a7b0-4bcb-8272-ad09f0844103");
  }, []);

  return null;
};
