import Image from "next/image";
import Link from "next/link";
import hero from "../../public/assets/hero.png";
export default function HomePage() {
  return (
    <div className="grid-halves h-screen-navbar">
      <div className="bg-teal border-right">
        <div className="column-padding">
          <div className="tablet-centred">
            <div className="content-grid home-hero">
              <h1>
                BIM 3D Objects <br />
                that we need most
              </h1>
              <p className="section-subtitle">
                with all parameters editable ready
              </p>
              <Link href="/products" className="large-button">
                <div className="large-button-text">Explore Objects</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-salmon">
        <div className="column-padding centred">
          <div className="callout-wrap">
            <Image src={hero} className="callout-image" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
