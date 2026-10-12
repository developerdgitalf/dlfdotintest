"use client";

import "./TeamQuotes.css";

export default function TeamQuotes() {
  return (
    <section className="team-quotes">
      <div className="team-quotes__container">

        {/* =========================================
            FOUNDER PROFILE + QUOTE
        ========================================= */}

        <article className="team-quotes__founder">
          <div className="team-quotes__founder-card">

            {/* QUOTE */}
            <div className="team-quotes__quote-mark">
              “
            </div>

            <div className="team-quotes__quote-content">
              <p className="team-quotes__quote">
                The journey to excellence is incomplete until you
                have earned a good critic as your friend and have
                encouraged a good friend to become a critic.
                Ultimately, a good critic and good friend are
                synonymous words.
              </p>

              <p className="team-quotes__author">
                - ASHWIN GAIDHANI
              </p>
            </div>

            {/* FOUNDER IMAGE */}
            <div className="team-quotes__founder-image-wrap">
              <img
                src="/images/our-team/founder-page.png"
                alt="Ashwin Gaidhani"
                className="team-quotes__founder-image"
              />
            </div>

          </div>
        </article>

        {/* =========================================
            RATATOUILLE QUOTE
        ========================================= */}

        <article className="team-quotes__movie">

          <div className="team-quotes__movie-mark">
            “
          </div>

          <div className="team-quotes__movie-content">

            <p className="team-quotes__movie-quote">
              Not everyone can become a great artist, But a great
              artist can come from anywhere.
            </p>

            <p className="team-quotes__movie-source">
              - Ratatouille Movie
            </p>

          </div>

        </article>

        {/* =========================================
            CLOSING STATEMENT
        ========================================= */}

        <div className="team-quotes__statement">
          <p>
            This quote and the movie (Ratatouille) is inspiring in
            many ways. Excellence is the best endeavor when pursued
            with genuine passion and dedication. With a humble
            beginning and relentless perseverance, I have come a
            long successful way. I dedicate my professional success
            to leaders, friends, and mentors who were always there
            and are with me all along.
          </p>
        </div>

      </div>
    </section>
  );
}