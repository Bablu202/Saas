import Image from "next/image";
import confetti from "../../public/assets/confetti.png";
import Link from "next/link";
export default function SuccessPage() {
  return (
    <div className="section bg-white h-screen">
      <div className="container">
        <div className="section-intro welcome">
          <Image
            src={confetti}
            height={200}
            width={200}
            alt="confetti"
            className="confetti"
          />
          <h1>You're a member!</h1>
          <p>access now</p>
          <Link href="/login" className="large-button">
            <div className="large-button-text">Get Started</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
