export default function({ store, redirect, route }) {
    const loginPage = '/login'
    if (!store.getters['users/logged']) {
      store.commit('users/setAfterLogin', route.path)
      redirect(loginPage)
    }
}