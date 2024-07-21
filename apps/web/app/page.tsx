import { Metadata } from "next";

export const metadata: Metadata = {
  title: "tripie",
};

export default function Home() {
  if (process?.browser) {
    console.log("Variant 2: Application is on client side");
  } else {
    console.log("Variant 2: Application is on server side");
  }
  return <>:)</>;
}
