import { extendBaseTheme } from '@chakra-ui/react'

export const theme = extendBaseTheme({
    styles: {
        global: () => ({
            'html, body': {
                overflowX: 'hidden',
                backgroundColor: '#323030',
                fontSize: '24px',
                fontFamily: `'Helvetica neu,sans-serif'`,
                scrollBehavior: 'smooth',
            },
        }),
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '2rem'
    },
    colors: {
        pentestPrimary: '#323030',
        pentestSecondary: '#b0d351',
        pentestWhite: 'rgb(255, 255, 255)',
    },
})