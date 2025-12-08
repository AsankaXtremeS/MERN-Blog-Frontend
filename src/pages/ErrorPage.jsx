import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <section className='error-page'>
      <div className="center">
        <Link to="/" className='btn primary'>Go Back Home</Link>
        <h2>{error?.message || "Page Not Found"}</h2>
        {error?.statusText && <p>{error.statusText}</p>}
      </div>
    </section>
  )
}

export default ErrorPage