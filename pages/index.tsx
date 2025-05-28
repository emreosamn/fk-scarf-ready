import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>FK Scarf - Ana Sayfa</h1>
      <p>Hoş geldiniz! Site başarıyla kuruldu 🎉</p>

      <nav style={{ marginTop: "2rem" }}>
        <Link href="/checkout">Ödeme</Link> |{" "}
        <Link href="/login">Giriş</Link> |{" "}
        <Link href="/admin">Admin</Link>
      </nav>
    </div>
  );
}
