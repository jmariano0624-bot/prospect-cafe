import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Coffee,
  MapPin,
  Phone,
  Plus,
} from "lucide-react";
import { Header } from "@/components/cether/header";
import { AmbientVideo } from "@/components/cether/ambient-video";
import { Gallery } from "@/components/cether/gallery";
import { Reveal } from "@/components/cether/reveal";

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=Cether+Specialty+Coffee+The+Building+146+D.+Tuazon+Quezon+City";
const socials = [
  ["Instagram", "https://www.instagram.com/cethercoffee/"],
  ["Facebook", "https://www.facebook.com/cethercoffee/"],
  ["TikTok", "https://www.tiktok.com/@cethercoffee"],
] as const;

function Photo({
  file,
  alt,
  className = "",
  sizes = "(max-width: 767px) 100vw, 50vw",
}: {
  file: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`photo image-hover ${className}`}>
      <Image
        src={`/cether/${file}.jpg`}
        alt={alt}
        fill
        sizes={sizes}
        className="media-cover"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <section
          className="hero section-shell"
          id="home"
          aria-labelledby="hero-heading"
        >
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">
                <span className="small-line" /> A LITTLE SHELTER IN THE CITY
              </p>
              <h1 id="hero-heading">
                Coffee worth
                <br />
                <em>slowing down for.</em>
                <br />
                Food worth
                <br />
                <em>staying for.</em>
              </h1>
              <p className="hero-description">
                Specialty coffee. Comfort on a plate.
                <br />A place to feel at home, here in Quezon City.
              </p>
              <div className="hero-actions">
                <a className="action-link" href="#coffee-bistro">
                  Explore Cether <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="text-link" href="#visit">
                  Come on over <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
            <a className="hero-location" href="#visit">
              <MapPin size={14} aria-hidden="true" /> QUEZON CITY, PHILIPPINES{" "}
              <span>
                SCROLL TO SLOW DOWN <ArrowDown size={13} aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className="hero-visual">
            <AmbientVideo
              src="/cether/video-3.mp4"
              poster="/cether/order-1.jpg"
              label="coffee making"
              priority
            />
            <div className="hero-image-note">
              <span className="eyebrow">
                THE EVERYDAY, A LITTLE MORE SPECIAL.
              </span>
              <span>Make yourself at home.</span>
            </div>
            <span className="hero-side-note">
              COFFEE & CONVERSATION / CETHER
            </span>
          </div>
        </section>
        <div className="brand-ribbon" aria-label="Our welcome">
          <span>Sheltered in every sip.</span>
          <Plus aria-hidden="true" size={15} />
          <span>Comfort in every bite.</span>
          <Plus aria-hidden="true" size={15} />
          <span>At home in every moment.</span>
        </div>

        <section
          id="coffee-bistro"
          className="section-shell section-space"
          aria-labelledby="coffee-heading"
        >
          <Reveal className="section-heading intro-heading">
            <p className="eyebrow">01 / TWO GOOD REASONS TO STAY</p>
            <h2 id="coffee-heading">
              Come for the coffee.
              <br />
              <em>Stay for everything else.</em>
            </h2>
            <p>
              That first sip. A plate to linger over.
              <br />
              At Cether, there’s room for both.
            </p>
          </Reveal>
          <div className="split-features">
            <Reveal className="split-feature">
              <a href="#highlights" className="feature-link image-hover">
                <Photo
                  file="order-2"
                  alt="Cether coffees and a croissant at a warmly lit table"
                />
                <div className="feature-copy">
                  <span className="eyebrow">SHELTERED IN EVERY SIP</span>
                  <h3>Specialty Coffee</h3>
                  <span className="feature-arrow">
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </a>
              <p>A familiar ritual. A new favourite. A moment that’s yours.</p>
            </Reveal>
            <Reveal className="split-feature" delay={0.12}>
              <a href="#highlights" className="feature-link image-hover">
                <Photo
                  file="food-3"
                  alt="Lemon herb chicken and rice from the Cether kitchen"
                />
                <div className="feature-copy">
                  <span className="eyebrow">COMFORT IN EVERY BITE</span>
                  <h3>Bistro Dining</h3>
                  <span className="feature-arrow">
                    <ArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              </a>
              <p>Something comforting, and every reason to take your time.</p>
            </Reveal>
          </div>
        </section>

        <section
          id="highlights"
          className="highlights-section section-space"
          aria-labelledby="highlights-heading"
        >
          <div className="section-shell">
            <Reveal className="section-heading heading-row">
              <div>
                <p className="eyebrow">02 / A TASTE OF CETHER</p>
                <h2 id="highlights-heading">
                  Find your <em>little favourite.</em>
                </h2>
              </div>
              <p>
                From the coffee bar to the kitchen.
                <br />A few things worth making time for.
              </p>
            </Reveal>
            <Gallery />
          </div>
        </section>

        <section
          id="space"
          className="space-section section-space"
          aria-labelledby="space-heading"
        >
          <div className="section-shell">
            <div className="space-main">
              <Reveal className="space-photo">
                <Photo
                  file="dining-area-1"
                  alt="Warmly lit Cether dining room with upholstered chairs and marble tables"
                />
              </Reveal>
              <Reveal className="space-copy">
                <p className="eyebrow">03 / MAKE YOURSELF AT HOME</p>
                <h2 id="space-heading">
                  A little room
                  <br />
                  to <em>slow down.</em>
                </h2>
                <p>
                  Settle into a conversation. Share a meal. Let one cup turn
                  into another.
                </p>
                <p>
                  Warm light, a welcoming table, and a little breathing room in
                  the heart of Quezon City.
                </p>
                <a href="#visit" className="text-link">
                  Find your way here{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <div className="space-detail">
                  <Photo
                    file="cether-wall-1"
                    alt="Cether’s brass wall detail above a dining table"
                  />
                  <span>
                    AT HOME
                    <br />
                    IN EVERY MOMENT.
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="space-strip">
              <Reveal>
                <Photo
                  file="front-desk-1"
                  alt="Cether’s illuminated counter beneath a walnut ceiling"
                />
                <p>Meet you at the coffee bar.</p>
              </Reveal>
              <Reveal delay={0.1}>
                <Photo
                  file="whole-cafe-1"
                  alt="The Cether coffee bar and black and white tiled floor"
                />
                <p>A familiar kind of welcome.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="experience-section"
          aria-labelledby="experience-heading"
        >
          <div className="section-shell experience-grid">
            <Reveal className="experience-copy">
              <p className="eyebrow">NO NEED TO RUSH</p>
              <h2 id="experience-heading">
                From the first cup
                <br />
                to the <em>last table.</em>
              </h2>
              <p>
                A coffee stop that becomes a catch-up.
                <br />A shared plate that becomes a longer stay.
                <br />
                Make a little more of the everyday.
              </p>
              <span className="experience-signature">
                That’s the Cether kind of day.
              </span>
            </Reveal>
            <div className="experience-film">
              <AmbientVideo
                src="/cether/video-1.mp4"
                poster="/cether/food-5.jpg"
                label="bistro dining"
              />
              <span className="film-caption">AT THE TABLE / CETHER</span>
            </div>
            <div className="experience-film second-film">
              <AmbientVideo
                src="/cether/video-2.mp4"
                poster="/cether/whole-cafe-1.jpg"
                label="cafe atmosphere"
              />
              <span className="film-caption">IN GOOD COMPANY / CETHER</span>
            </div>
          </div>
        </section>

        <section
          className="community-section section-shell"
          aria-labelledby="community-heading"
        >
          <Reveal className="community-number">
            <span>
              6,000<span className="number-plus">+</span>
            </span>
            <p>
              Combined followers across
              <br />
              Facebook, Instagram &amp; TikTok
            </p>
          </Reveal>
          <Reveal className="community-copy">
            <p className="eyebrow">A LITTLE PLACE. A GROWING COMMUNITY.</p>
            <h2 id="community-heading">
              Good coffee brings
              <br />
              <em>people together.</em>
            </h2>
            <div className="social-links">
              {socials.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        <section
          id="events"
          className="events-section section-space"
          aria-labelledby="events-heading"
        >
          <div className="section-shell events-grid">
            <Reveal className="events-art">
              <a
                href="/cether/event-hosting-offer.jpg"
                target="_blank"
                rel="noreferrer"
                aria-label="View Cether events artwork (opens in a new tab)"
              >
                <Photo
                  file="event-hosting-offer"
                  alt="Cether coffee events bar artwork: Plan your next event with us"
                />
              </a>
            </Reveal>
            <Reveal className="events-copy">
              <p className="eyebrow">04 / MOMENTS WORTH SHARING</p>
              <h2 id="events-heading">
                Your next gathering.
                <br />
                <em>A little more Cether.</em>
              </h2>
              <p>
                Bring Cether into the occasion with our specialty coffee events
                bar. Let’s talk about what you have in mind.
              </p>
              <a href="tel:+639208191959" className="action-link">
                Ask about events <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <div className="package-feature">
                <a
                  href="/cether/coffee-package-offer.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="package-image"
                >
                  <Image
                    src="/cether/coffee-package-offer.jpg"
                    alt="Cether coffee bar package artwork; contact Cether for current details"
                    width={1170}
                    height={1464}
                    sizes="110px"
                  />
                </a>
                <div>
                  <p className="eyebrow">COFFEE, FOR THE OCCASION</p>
                  <h3>The coffee bar, wherever you gather.</h3>
                  <a
                    href="/cether/coffee-package-offer.jpg"
                    className="text-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View package artwork{" "}
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <p className="package-note">
                    Get in touch for current package details.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          className="people-section section-shell section-space"
          aria-labelledby="people-heading"
        >
          <Reveal className="section-heading heading-row">
            <div>
              <p className="eyebrow">THE PEOPLE BEHIND YOUR PAUSE</p>
              <h2 id="people-heading">
                A warm cup.
                <br />
                <em>An even warmer welcome.</em>
              </h2>
            </div>
            <p>
              Behind the bar, in the kitchen,
              <br />
              and here to welcome you.
            </p>
          </Reveal>
          <div className="people-grid">
            {[
              ["staff-1", "A member of the Cether team pouring latte art"],
              [
                "staff-4",
                "A Cether team member serving a pastry on a brass tray",
              ],
              ["staff-3", "The Cether team at work behind the coffee bar"],
              ["staff-2", "The Cether team together at the cafe"],
            ].map(([file, alt], index) => (
              <Reveal key={file} delay={index * 0.06}>
                <Photo
                  file={file}
                  alt={alt}
                  sizes="(max-width: 767px) 50vw, 25vw"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="visit"
          className="visit-section"
          aria-labelledby="visit-heading"
        >
          <div className="section-shell visit-grid">
            <Reveal className="visit-copy">
              <p className="eyebrow">05 / WE’LL SEE YOU HERE</p>
              <h2 id="visit-heading">
                Your table
                <br />
                <em>is this way.</em>
              </h2>
              <address>
                The Building, 146 D. Tuazon
                <br />
                Sta. Mesa Heights, Quezon City
                <br />
                <span>Philippines</span>
              </address>
              <div className="visit-actions">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="action-link"
                >
                  Get directions <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a className="text-link" href="tel:+639208191959">
                  <Phone size={15} aria-hidden="true" />
                  0920 819 1959
                </a>
              </div>
              <div className="visit-details">
                <div>
                  <h3>COME ON OVER</h3>
                  <dl className="hours">
                    <div>
                      <dt>Sunday – Thursday</dt>
                      <dd>09AM–11PM</dd>
                    </div>
                    <div>
                      <dt>Friday – Saturday</dt>
                      <dd>09AM–12MN</dd>
                    </div>
                  </dl>
                  <a
                    className="source-link"
                    href="/cether/operating-hours.jpg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View hours <ArrowUpRight size={12} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
                <div>
                  <h3>A FEW GOOD THINGS TO KNOW</h3>
                  <p>Dine-in · Takeout · Onsite</p>
                  <p>Cash · QR · Card (Debit / Credit)</p>
                  <div className="detail-links">
                    <a
                      className="source-link"
                      href="/cether/services.jpg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Services <ArrowUpRight size={12} aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a
                      className="source-link"
                      href="/cether/mode-of-payment.jpg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Payment options{" "}
                      <ArrowUpRight size={12} aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="visit-photo">
              <Photo
                file="cafe-location"
                alt="The entrance view of Cether at The Building, 146 D. Tuazon, Sta. Mesa Heights, Quezon City"
              />
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="map-tag"
              >
                <MapPin size={18} aria-hidden="true" />
                <span>YOUR LITTLE SHELTER IN QUEZON CITY</span>
                <ArrowUpRight size={18} aria-hidden="true" />
                <span className="sr-only">
                  Get directions (opens in a new tab)
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-heading">
          <Image
            src="/cether/front-desk-1.jpg"
            alt=""
            fill
            sizes="100vw"
            className="media-cover"
          />
          <div className="closing-overlay" />
          <Reveal className="closing-copy">
            <Coffee size={28} strokeWidth={1} aria-hidden="true" />
            <p className="eyebrow">SHELTERED. COMFORTED. AT HOME.</p>
            <h2 id="closing-heading">
              There’s a little Cether
              <br />
              <em>in your everyday.</em>
            </h2>
            <a href="#visit" className="action-link action-light">
              Come on over <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </Reveal>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <div className="footer-top">
          <a href="#home" className="wordmark">
            <span>CETHER</span>
            <small>SPECIALTY COFFEE + BISTRO</small>
          </a>
          <p>
            Sheltered in every sip.
            <br />
            At home in every moment.
          </p>
          <nav aria-label="Footer navigation">
            <a href="#coffee-bistro">Coffee + Bistro</a>
            <a href="#highlights">Highlights</a>
            <a href="#space">The Space</a>
            <a href="#events">Events</a>
            <a href="#visit">Visit</a>
          </nav>
          <div className="footer-contact">
            <a href="tel:+639208191959">0920 819 1959</a>
            <span>Quezon City, Philippines</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Cether Specialty Coffee + Bistro
          </span>
          <div>
            {socials.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {label}
                <ArrowUpRight size={12} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
          <a href="#home">
            BACK TO TOP <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
