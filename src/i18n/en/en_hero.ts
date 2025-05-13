import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hello, my name is Alex Collado Garrido',
  subtitle:
    'Multimedia Engineer with interest in video game development, especially in gameplay programming. I am always open to new experiences, I like to focus on the problem solving, and I want to dedicate myself to creating interactive experiences for everyone to enjoy.',
  name: 'Alex Collado Garrido',
  url: 'https://a-collado.com/',
  contact_button: 'Get in touch',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'www.linkedin.com/in/alex-collado-garrido',
    github: 'https://github.com/a-collado',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: '',
    artstation: 'https://www.artstation.com/a-collado'
  },
  home: 'Home'
}

export default hero
