import NavBar from "@/components/NavBar";
import Seo from "@/components/Seo";
import { useState } from "react";

export default function Potato() {
  const [conter, setCounter] = useState(0);

  return (
    <div>
      <Seo title="About" />
      <h1>About {conter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
