import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: '¡Los animales son lo mejor!',
    content:
      'Me gusta la compañia de los animales, son lo mejor que me ha pasado en la vida. Me encanta cuidarlos y darles todo mi amor. ¡Son lo mejor!',
    user: {
      id: 1,
      name: 'Carmen Sánchez',
      professional: 'Estudiante de veterinaria',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Disfruto la compañia de los animales',
    content:
      'Salgo a pasear a los perros y me encanta disfrutar de su compañia. Me encanta verlos felices y contentos.',
    user: {
      id: 1,
      name: 'Pedro Rodríguez',
      professional: 'Diseñador de UI/UX',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: '¡Siempre es bueno tener una mascota!',
    content: 'En mi casa siempre hemos tenido mascotas, son parte de la familia y siempre nos alegran el día.',
    user: {
      id: 1,
      name: 'Sebastián Flores',
      professional: 'Estudiante de veterinaria',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'El mejor amigo del hombre',
    content:
      'Los perros son los mejores amigos del hombre, siempre están ahí para nosotros y nos acompañan en todo momento.',
    user: {
      id: 1,
      name: 'Juan Pérez',
      professional: 'Estudiante de medicina',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: '¡Son lo mejor que me ha pasado!',
    content:
      'Como amante de los animales, me encanta cuidarlos y darles todo mi amor. Son lo mejor que me ha pasado en la vida.',
    user: {
      id: 1,
      name: 'María González',
      professional: 'Diseñadora Gráfica',
      photo: '5.jpg',
    },
  },
]
