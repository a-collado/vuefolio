import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'itbid',
      position: 'IT Developer intern',
      url: 'https://itbid.com',
      startDate: '2024-02',
      endDate: '2024-07',
      highlights: [
        'Developed, maintained, and upgraded the itbid web platform with a focus on problem-solving and scalability.',
        'Designed and implemented an AI-powered invoice reader using Python, showcasing problem-solving and AI integration skills.'
      ],
      description:
        'Worked on maintaining and upgrading the itbid web platform and solving support tickets.'
    }
  ]
}

export default experience
