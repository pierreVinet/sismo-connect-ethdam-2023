import { exec } from "child_process";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <img
        style={{ position: "absolute", right: 0, zIndex: -1 }}
        src="/assets/sismo-landing-art.svg"
        alt="sismo art"
      />
      <h1>Sismo Connect Onchain</h1>
      <section>
        <ul>
          <li onClick={() => router.push("/secret-angels")}>
            <h3>Secret Angels</h3>
            <p></p>
            {/* replace with the title below */}
            {/* <h3>Claim an airdrop anonymously</h3>
            <p>Sign an address with Sismo Connect where you wish to receive the airdrop</p> */}
          </li>
        </ul>
      </section>
    </div>
  );
}
