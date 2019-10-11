import { SET_WELCOME_MESSAGE, SET_WELCOME_BANNER } from './mutation-types'

export default {
  [SET_WELCOME_MESSAGE]: state => {
    state.welcomeMessage = 'Welcome to Customer Page'
  },
  [SET_WELCOME_BANNER]: state => {
    state.welcomeBanner = 'Customer welcome banner'
  }
}
