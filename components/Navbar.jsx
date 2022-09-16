import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "#fce303" }}>
      <div>
        <br />
      </div>
      <div className="d-flex gap-5 my-2  fw-bold justify-content-center">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/experience">
          <a>Experience</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/lab-07">
          <a>Lab-07</a>
        </Link>
      </div>
    </div>
  );
}
