import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: '¡Los animales son lo mejor!',
    content:
      'Me gusta la compañia de los animales, son lo mejor que me ha pasado en la vida. Me encanta cuidarlos y darles todo mi amor. ¡Son lo mejor!',
    user: {
      id: 1,
      name: 'Julio Abad',
      professional: 'Estudiante de veterinaria',
      photo: 'julio.jpeg',
    },
  },
  {
    id: 2,
    title: 'Disfruto la compañia de los animales',
    content:
      'Salgo a pasear a los perros y me encanta disfrutar de su compañia. Me encanta verlos felices y contentos.',
    user: {
      id: 1,
      name: 'Verónica Milagros',
      professional: 'Diseñador de UI/UX',
      photo: 'veronica.jpg',
    },
  },
  {
    id: 3,
    title: '¡Siempre es bueno tener una mascota!',
    content:
      'Trabajo solo en mi propia oficina en mi depa y manejo mis tiempos por lo que puedo dedicarme al 100% al cuidado de cualquier mascota. Me encantan los animales en general.',
    user: {
      id: 1,
      name: 'Francesco Saco',
      professional: 'Estudiante de veterinaria',
      photo: 'francesco.jpg',
    },
  },
  {
    id: 4,
    title: 'Cuidaré a tu mascota con todo mi amor',
    content:
      '¡Estoy muy feliz de recibir a todos! Extraña mucho a sus mascotas que viven en la casa de sus padres en Huacho por lo que tu engreído estará con todo su amor y experiencia :)',
    user: {
      id: 1,
      name: 'Marzia Arellano',
      professional: 'Estudiante de medicina',
      photo: 'marzia.jpg',
    },
  },
  {
    id: 5,
    title: '¡Son lo mejor que me ha pasado!',
    content:
      'Como amante de los animales, me encanta cuidarlos y darles todo mi amor. Son lo mejor que me ha pasado en la vida.',
    user: {
      id: 1,
      name: 'Andrea Lancho',
      professional: 'Diseñadora Gráfica',
      photo: 'andrea.jpg',
    },
  },
]
