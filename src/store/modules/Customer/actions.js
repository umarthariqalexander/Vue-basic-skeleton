import { SET_WELCOME_MESSAGE, SET_WELCOME_BANNER } from './mutation-types'

export const showWelcomeMessage = ({ commit }) => {
  commit(SET_WELCOME_MESSAGE)
}

export const showWelcomeBanner = ({ commit }) => {
  commit(SET_WELCOME_BANNER)
}
