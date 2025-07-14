"use client";
import React from "react";

import { SiDiscord } from "@icons-pack/react-simple-icons";
import { toast } from "sonner";

const DiscordToast = ({ id }: { id: string }) => {
  return (
    <li
      className="cursor-pointer"
      onClick={() =>
        toast(
          <div className="flex items-center gap-3">
            <SiDiscord className="size-[1.4rem]" />
            <div>
              <p>Discord User ID</p>
              <p className="text-muted-foreground">@{String(id)}</p>
            </div>
          </div>
        )
      }
    >
      Discord
    </li>
  );
};

export default DiscordToast;
