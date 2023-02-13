import React from "react";
import DropdownMenu from "../components/DropdownMenu";

import Sidebar from "../components/Sidebar";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="home-container">
      {/* <DropdownMenu /> */}
      <Sidebar name="Chinenye Anikwenze" title="Frontend developer" />
      <main>
        <h2>Hi, I'm Chinenye Anikwenze.</h2>
        <p>
          I am a resourceful and detail-oriented Frontend Developer proficient
          in HTML, CSS, JavaScript and popular frameworks such as React. I love
          creating visually stunning and user-friendly websites that engage and
          ease users experience. I'm constantly learning new technologies to
          stay up-to-date with the industry standards and trends. Available for
          remote or on-site internship
        </p>
      </main>
    </section>
  );
};

export default Home;
