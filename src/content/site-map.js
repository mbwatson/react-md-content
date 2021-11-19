// import home from './home.md'
import { about, home } from './'

export const siteMap = [
  {
    text: 'Home',
    path: '/',
    attributes: home.attributes,
    markdown: home.body,
  },
  {
    text: 'About',
    path: '/about',
    attributes: about.attributes,
    markdown: about.body,
  },
]

