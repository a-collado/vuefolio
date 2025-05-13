import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  artstation: 'See more',
  main: [
    {
      name: 'TFG - Robo Bobot',
      techstack: ['godot', 'gamedev', 'multiplayer'],
      image: 'robo_cover.webp',
      description: 'Multiplayer action game developed in the Godot engine',
      src: 'https://github.com/a-collado/tfg-juego-2',
      url: 'https://colladog.itch.io/robo-bobot',
      art: 'https://www.artstation.com/artwork/982OVO',
      id: 'robobot'
    },
    {
      name: 'Unity VR Game - Mad Barista',
      techstack: ['unity', 'gamedev', 'vr'],
      image: 'barista_cover.webp',
      description: 'Inmersive VR Game made in Unity about serving drinks',
      src: 'https://github.com/Qwertyamc/IRV-22-23',
      url: '',
      art: 'https://www.artstation.com/artwork/4NedOk',
      id: 'barista'
    },
    {
      name: "3D Puzzle Game - Ikarus' Odyssey",
      techstack: ['unity', 'gamedev', '3D'],
      image: 'ikarus_cover.webp',
      description: '3D puzle game made in Unity',
      src: 'https://github.com/a-collado/project_wings',
      url: '',
      art: 'https://www.artstation.com/artwork/lG8Le5',
      id: 'ikarus'
    }
  ],
  // Puedes dejar este arreglo vacío
  other: []
}

export default projects
