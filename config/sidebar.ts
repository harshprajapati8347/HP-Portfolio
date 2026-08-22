import { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { site } from 'config/site'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: site.linkedIn,
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: site.githubProfile,
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: site.instagram,
    icon: FaInstagram,
  },
]
