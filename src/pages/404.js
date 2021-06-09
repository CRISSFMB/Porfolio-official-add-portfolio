import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1> Opps es gibt einen Fehler</h1>

          <Link to="/" className="btn">
            zurück
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
