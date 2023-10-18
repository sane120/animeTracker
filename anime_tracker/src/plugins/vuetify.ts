/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#FEF5EF',
          secondary: '#C08497',
          accent: '#59114D',
          error: '#598392',
          info: '#C16E70',
          success: '',
          warning: '',
        },
      },
    },
  },
})
