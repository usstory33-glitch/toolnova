"use client";

import { useEffect } from "react";

type Props = {
  toolId: number;
};

export default function TrackRecentlyViewed({
  toolId,
}: Props) {
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("recentTools") || "[]"
    );

    const updated = [
      toolId,
      ...saved.filter((id: number) => id !== toolId),
    ].slice(0, 6);

    localStorage.setItem(
      "recentTools",
      JSON.stringify(updated)
    );
  }, [toolId]);

  return null;
}