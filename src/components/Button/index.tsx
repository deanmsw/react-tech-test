import { Button } from '@chakra-ui/react'
import { ButtonProps } from './types'

function PentestButton({ label, ...buttonProps }: ButtonProps){
  return (
      <Button
          backgroundColor={'pentestWhite'}
          borderColor={'pentestSecondary'}
          borderWidth={'2px'}
          marginBottom={'32px'}
          width={'100%'}
          maxWidth={'200px'}
          {...buttonProps}
      >
          {label}
      </Button>
  )
}

export default PentestButton