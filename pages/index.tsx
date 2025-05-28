import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>FK Scarf - Ana Sayfa</h1>
      <p>Hoş geldiniz! Alışverişe başlamak için aşağıdan seçim yapabilirsiniz.</p>

      <nav style={{ marginTop: "2rem" }}>
        <Link href="/products">🛍️ Ürünleri Gör</Link> |{" "}
        <Link href="/checkout">💳 Ödeme</Link> |{" "}
        <Link href="/login">🔐 Giriş</Link> |{" "}
        <Link href="/admin">🛠️ Admin Panel</Link>
      </nav>
    </div>
  );
}
