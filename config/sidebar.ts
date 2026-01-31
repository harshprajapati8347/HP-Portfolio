import { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harsh-prajapati-developer/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/harshprajapati8347/',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/harsh.prajapati.26/',
    icon: FaInstagram,
  },
]
