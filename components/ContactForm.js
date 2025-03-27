"use client";

import { useState } from "react";

const ContactForm = () => {
  const [responseMsg, setResponseMsg] = useState("");
  const [budget, setBudget] = useState(100); // Initialize the budget to match the range's minimum value

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData();

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // Send budget value from state
    formData.append("entry.1634405862", name);
    formData.append("entry.1075108931", email);
    formData.append("entry.1060056686", subject);
    formData.append("entry.1325549953", message);
    formData.append("entry.1198063544", `$${budget}`); // Use the state value

    try {
      await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSehZAAG0TfarNGA5a6MmRyuhr_grLgv31di9qNBA_yAEVJEUw/formResponse",
          {
            method: "POST",
            mode: "no-cors",
            body: formData,
          }
      );

      setResponseMsg("✅ Message sent successfully!");
      form.reset(); // Clear form
    } catch (err) {
      setResponseMsg("❌ Something went wrong. Please try again.");
    }
  };

  return (
      <div className="leave-comments-area">
        <div className="comments-box">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="row gx-3">
              <div className="col-md-6">
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input
                      name="name"
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Enter your name"
                      required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                      name="email"
                      type="email"
                      className="form-control shadow-none"
                      placeholder="Enter your email"
                      required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label className="form-label">Subject</label>
                  <input
                      name="subject"
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Subject"
                      required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="u-class-slider">
                  <label className="form-label">
                    Budget: <span>${budget}+</span>
                  </label>
                  <input
                      name="budget"
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      className="form-range shadow-none"
                      value={budget} // Bind state to input
                      onChange={(e) => setBudget(Number(e.target.value))} // Update state on slider change
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-4">
                  <label className="form-label">Comment</label>
                  <textarea
                      name="message"
                      className="form-control shadow-none"
                      rows={4}
                      placeholder="Type details about your inquiry"
                      required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <button className="submit-btn" type="submit">
                  Send Message
                  <svg
                      className="icon"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                  >
                    <path
                        d="M17.5 11.6665V6.6665H12.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          {responseMsg && (
              <p
                  className="ajax-response mb-0"
                  style={{ marginTop: "15px", fontWeight: "bold", color: "#00aa55" }}
              >
                {responseMsg}
              </p>
          )}
        </div>
      </div>
  );
};

export default ContactForm;