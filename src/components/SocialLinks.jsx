import { FaTwitch, FaYoutube, FaDiscord, FaTwitter, FaGithub, FaTiktok, FaInstagram } from 'react-icons/fa'
import { socials } from '../data/socials'
import './SocialLinks.css'

const iconMap = {
  twitch: FaTwitch,
  youtube: FaYoutube,
  discord: FaDiscord,
  twitter: FaTwitter,
  github: FaGithub,
  tiktok: FaTiktok,
  instagram: FaInstagram,
}

export default function SocialLinks({ size = 'medium' }) {
  return (
    <div className={`social-links social-links--${size}`}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon] || FaGithub
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={social.name}
          >
            <Icon />
            {size === 'large' && <span>{social.name}</span>}
          </a>
        )
      })}
    </div>
  )
}
