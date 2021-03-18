import Link from 'next/link'

export const Header = ({ heading, title }) => {
  return(
    <>
      <div className="header">
        <h2>
          next-i18next
          <hr />
        </h2>
        <h1>{title}</h1>
        <h2>{heading}</h2>
        
        <div className="header__language-bar">
          <Link
            href='/'
            locale='en'
          >
            <a>EN</a>
          </Link>
          &nbsp;&nbsp;||&nbsp;&nbsp;
          <Link
            href='/'
            locale='ms'
          >
            <a>MS</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          width: 100%;
          padding: 2rem 2rem;
        }
        .header__language-bar {
          min-width: 60rem;
        }
      `}</style>
    </>
  )
}
