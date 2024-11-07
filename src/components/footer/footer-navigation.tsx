import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const hotelMenu: Array<Navigation> = [
  {
    label: 'Mi Pata Pet Hotel',
    path: 'https://www.mipatapethotel.net/',
  },
  {
    label: 'Wau Hotel',
    path: 'https://es-la.facebook.com/baltoperu/',
  },
  {
    label: 'PetsCamp',
    path: 'https://petscampperu.com/',
  },
  {
    label: 'Doggy Camp',
    path: 'https://www.thedoggycamp.com/',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contáctanos', path: '#' },
  { label: 'Política de privacidad', path: '#' },
  { label: 'Términos y Condiciones', path: '#' },
  { label: 'Preguntas frecuentes', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
  target?: boolean
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path, target }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        target={target ? '_blank' : '_self'}
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Hoteles" />
        {hotelMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} target={true} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={'#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Nosotros" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
