import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('footer')

  return(
    <footer>
      <div>{t("footer__heading-text")}:</div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </a>
    </footer>
  )
}

