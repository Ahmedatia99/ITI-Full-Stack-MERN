import React from "react";

function Footer() {
  return (
    <footer
      className="text-light text-center py-4 mt-5"
      style={{
        background: "linear-gradient(135deg, #0d6efd, #6610f2)",
      }}
    >
      <div className="container">
        <h5 className="fw-bold mb-3">My Website</h5>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="#facebook" className="text-light fs-5">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#twitter" className="text-light fs-5">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#instagram" className="text-light fs-5">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#linkedin" className="text-light fs-5">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <p className="mb-0 small">
          © {new Date().getFullYear()} My Website | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
