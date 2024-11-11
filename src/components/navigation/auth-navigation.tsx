import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  const message = 'Hola, me gustaría saber más sobre sus servicios'

  const handleSendMessage = (): void => {
    const phoneNumber = '+51987052642'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {/* <StyledButton disableHoverEffect={true} variant="outlined">
        Iniciar Sesión
      </StyledButton> */}
      <StyledButton disableHoverEffect={true} onClick={handleSendMessage}>
        Contáctanos
      </StyledButton>
    </Box>
  )
}

export default AuthNavigation
