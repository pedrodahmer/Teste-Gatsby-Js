import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        pink: {
            "500": '#EA5C6B'
        }
    },

    fonts: {
        heading: 'Yeseva One'
    },

    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'black'
            }
        }
    }
})