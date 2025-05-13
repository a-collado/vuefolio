import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Proyectos',
  source: 'GitHub',
  website: 'Sitio Web',
  main: [
    {
      name: 'TFG - Robo Bobot',
      techstack: ['godot', 'gamedev', 'multiplayer'],
      image: 'robo_cover.webp',
      description: 'Juego de acción multijugador desarrollado con el motor Godot',
      src: 'https://github.com/a-collado/tfg-juego-2',
      url: 'https://colladog.itch.io/robo-bobot',
      id: 'robobot'
    },
    {
      name: 'Unity VR Game - Mad Barista',
      techstack: ['unity', 'gamedev', 'vr'],
      image: 'barista_cover.webp',
      description: 'Juego inmersivo de realidad virtual en Unity sobre servir bebidas.',
      src: 'https://github.com/Qwertyamc/IRV-22-23',
      url: '',
      id: 'barista'
    },
    {
      name: "3D Puzzle Game - Ikarus' Oddyssey",
      techstack: ['unity', 'gamedev', '3D'],
      image: 'ikarus_cover.webp',
      description: 'Juego de puzles en 3D desarrollado en Unity',
      src: 'https://github.com/a-collado/project_wings',
      url: '',
      id: 'ikarus'
    }
  ],
  // Puedes dejar este arreglo vacío
  other: []
}

export default projects
