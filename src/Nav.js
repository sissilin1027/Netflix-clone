import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/ddls3tj-7a2cc663-0c10-44a4-9994-0a99a8b9f7dd.png/v1/fill/w_859,h_895,strp/_baby_yoda___the_child_asset___2____png_by_captain_kingsman16_ddls3tj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04OTUiLCJwYXRoIjoiXC9mXC9lYTE5NjExNy0wYjY0LTQ5YjctYjEzZi03OWY0M2NmNzdlNTNcL2RkbHMzdGotN2EyY2M2NjMtMGMxMC00NGE0LTk5OTQtMGE5OWE4YjlmN2RkLnBuZyIsIndpZHRoIjoiPD04NTkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qD2V1PNpBhU0XSuWuvUIKVAy5870WFKWqYE_B3wPDDs"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
