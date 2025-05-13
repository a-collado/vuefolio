import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    'Multimedia Engineer with interest in video game development, especially in gameplay programming. I am always open to new experiences, I like to focus on the problem solving, and I want to dedicate myself to creating interactive experiences for everyone to enjoy.',
  education: {
    title: 'Education',
    list: [
      {
        title: "Bachelor's Degree in Multimedia Engineering",
        institution: 'La Salle (Universitat Ramon Llul)',
        url: 'https://www.salleurl.edu/en',
        description: '',
        startDate: '2019-09',
        endDate: '2024-02',
        courses: []
      }
    ]
  },
  achievements: {
    title: 'Logros',
    list: [
      /*{
        title: 'Mejor Astronauta de Sillón del Mundo',
        date: '2023-04',
        url: 'https://website/news/worlds-best-armchair-astronaut',
        awarder: 'Asociación Galáctica de Papas de Sofá',
        summary:
          'Otorgado por logros sobresalientes en el campo de la exploración espacial amateur desde la comodidad de la sala de estar. Reconocido por más de 500 horas de tiempo de telescopio apuntado a la pantalla del televisor, simulando un viaje por el cosmos sin salir del sofá.'
      }*/
    ]
  }
}

export default about
