import { IconType } from 'react-icons'
import {
  
  FaLinkedin,
  
  FaGithub,
  
  
} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  
  
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohit-kumar-0ba38b195/',
    icon: FaLinkedin,
  },
  
  
  {
    label: 'Github',
    href: 'https://github.com/mohitpanchal09',
    icon: FaGithub,
  },
  {
    label: 'Gmail',
    href: 'mailto:panchalmohitg2002@gmail.com',
    icon: HiOutlineMail,
  },
  
 
]
