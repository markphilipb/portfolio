import React from "react";

const SidePanel = () => {
  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="profilePic">
          <img src="../../../public/imgs/profilePic.jpg" alt="" />
        </Link>
        <header>
          <h2>Mark Balazon</h2>
          <p>
            <a href="mailto:mark.balazon@gmail.com">mark.balazon@gmail.com</a>
          </p>
        </header>
      </section>

      <section id="blurb">
        <h2>About</h2>
        <p>my about</p>
      </section>

      <section id="footer">
        <p className="copyright"> &copy; Mark Balazon</p>
      </section>
    </section>
  );
};

export default SidePanel;
