import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Kontakt Formular</h3>

          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />

              <textarea
                name="message"
                placeholder="Nachricht"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              {" "}
              Absenden
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
