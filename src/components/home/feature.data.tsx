import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Fácil Acesso',
    description: 'Nuestra plataforma es fácil de usar y accesible desde cualquier dispositivo con conexión a internet',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Gama de Precios',
    description: 'Contamos con una amplia gama de precios para que puedas elegir el que más se ajuste a tu presupuesto',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Información Actualizada',
    description:
      'Actualizamos constantemente nuestra información para que siempre estés al tanto de las últimas novedades',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Citas con Expertos',
    description: 'Agenda citas con nuestros expertos para resolver tus dudas y recibir asesoramiento personalizado',
    icon: <ContactSupportIcon />,
  },
]
