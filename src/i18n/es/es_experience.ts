import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experiencia',
  description: 'Puedes ver mi currículum haciendo clic en el siguiente botón.',
  download_button: 'Descargar CV',
  present: 'Presente',
  month: 'mes | meses',
  year: 'año | años',
  list: [
    {
      company: 'itbid',
      position: 'Prácticas como Desarrollador IT',
      url: 'https://itbid.com',
      startDate: '2024-02',
      endDate: '2024-07',
      highlights: [
        'Desarrollé, mantuve y mejoré la plataforma web de itbid, con un enfoque en la resolución de problemas y la escalabilidad.',
        'Diseñé e implementé un lector de facturas potenciado por IA usando Python, demostrando habilidades en integración de IA y resolución de problemas.'
      ],
      description:
        'Trabajé en el mantenimiento y mejora de la plataforma web de itbid y en la resolución de tickets de soporte'
    }
  ]
}

export default experience
