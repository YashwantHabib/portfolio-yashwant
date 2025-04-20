"use client";
import { Undo } from "lucide-react";

export default function BackButton() {
  return (
    <button
      className="text-xs text-stone-500 flex items-center gap-1 my-2 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        history.back();
      }}
    >
      <Undo className="w-[16px]" /> Back
    </button>
  );
}
