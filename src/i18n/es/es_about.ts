import type { About } from '@/types'

const about: About = {
  title: 'Acerca de',
  summary:
    'Ingeniero Multimedia con interés en el desarrollo de videojuegos, especialmente en la programación de gameplay. Siempre estoy abierto a nuevas experiencias, me gusta enfocarme en la resolución de problemas y quiero dedicarme a crear experiencias interactivas para que todos las disfruten.',
  education: {
    title: 'Educación',
    list: [
      {
        title: 'Grado en Ingeniería Multimedia',
        institution: 'La Salle (Universitat Ramon Llull)',
        url: 'https://www.salleurl.edu/es',
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
