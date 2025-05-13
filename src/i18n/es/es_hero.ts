import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hola, mi nombre es Alex Collado Garrido',
  subtitle:
    'Ingeniero Multimedia con interés en el desarrollo de videojuegos, especialmente en la programación de gameplay. Siempre estoy abierto a nuevas experiencias, me gusta enfocarme en la resolución de problemas y quiero dedicarme a crear experiencias interactivas para que todos las disfruten.',
  name: 'Alex Collado Garrido',
  url: 'https://a-collado.com/',
  contact_button: 'Contáctame',
  //Si un perfil tiene una cadena vacía '', el botón no se renderizará
  profiles: {
    linkedin: 'www.linkedin.com/in/alex-collado-garrido',
    github: 'https://github.com/a-collado',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: '',
    artstation: 'https://www.artstation.com/a-collado'
  },
  home: 'Inicio'
}

export default hero
