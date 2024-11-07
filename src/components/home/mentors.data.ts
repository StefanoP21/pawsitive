import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
    name: 'Jhon Dwirian',
    category: 'Médico Veterinario',
    description:
      'Amplia experiencia como médico veterinario, especializado en animales domesticos y silvestres. Cuento con una maestría en medicina veterinaria y un doctorado en biología animal.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    name: 'Leon S Kennedy',
    category: 'Cirujano Veterinario',
    description:
      'Actualmente trabajo como cirujano veterinario en una clínica especializada en animales domesticos. Cuento con más de 10 años de experiencia en el campo de la medicina veterinaria.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
    name: 'Elsa Jean',
    category: 'Dermatólogo Veterinario',
    description:
      'Especialista en dermatología veterinaria, cuento con una maestría en dermatología veterinaria y un doctorado en biología animal. Actualmente trabajo en una clínica especializada en animales domesticos.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
    name: 'Erick Smith',
    category: 'Nutricionista Veterinario',
    description:
      'Nutricionista veterinario con más de 10 años de experiencia en el campo de la nutrición animal. Actualmente trabajo en una clínica especializada en animales domesticos.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
