"use client";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  return (
    <div>
      <ThemeButton />
      <ThemeButton.Toggle />

      <h1>this is home</h1>
    </div>
  );
}
