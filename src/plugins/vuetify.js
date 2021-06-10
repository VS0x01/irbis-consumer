import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

import en from 'vuetify/lib/locale/en'
import uk from 'vuetify/lib/locale/uk'

const opts = {
  lang: {
    locales: { en, uk },
    current: 'uk'
  },
  theme: {
    // primary: #00AB6B; secondary: #E1FCDE
    themes: {
      light: {
        primary: '#55DE99',
        secondary: '#FFFFFF'
      },
      dark: {
        primary: '#007B3F',
        secondary: '#AFC9AC',
        anchor: '#FFFFFF'
      }
    }
  }
}

export default new Vuetify(opts)
