import Link from "next/link";

export default function PromoCard() {
  return (
    <section>
      <div>
        <div>
          <h4>Get Unlimited access</h4>
          <p style={{ fontSize: "1rem" }}>access to all Premium</p>
        </div>
      </div>
      <Link href="/pricing" className="primary button">
        Purchase
      </Link>
    </section>
  );
}
