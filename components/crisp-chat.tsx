"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("bd9a5e04-b891-4e26-9015-dd0c33eaf6d5")
    }, []);

    return null;
}