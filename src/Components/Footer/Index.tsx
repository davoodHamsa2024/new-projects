import React from "react";

const IFooter = () => {
  return (
    <>
      <footer
        style={{ backgroundColor: "#563d7c" }}
        className="text-white pt-4"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel sapien elit. In malesuada semper mi, nec pulvinar ligula.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <div className="text-white">Home</div>
                </li>
                <li>
                  <div className="text-white">About</div>
                </li>
                <li>
                  <div className="text-white">Services</div>
                </li>
                <li>
                  <div className="text-white">Contact</div>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="tel:+123456789" className="text-white">
                    +123 456 789
                  </a>
                </li>
                <li>
                  <a href="mailto:info@example.com" className="text-white">
                    info@example.com
                  </a>
                </li>
                <li>
                  <div className="text-white">123 Main St, City, Country</div>
                </li>
              </ul>
            </div>
          </div>

          <hr className="bg-light" />

          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">© 2024 Your Company. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-right">
              <div className="text-white mr-3">Privacy Policy</div>
              <div className="text-white">Terms of Service</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IFooter;
