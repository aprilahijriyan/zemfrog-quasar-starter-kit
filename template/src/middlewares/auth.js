import store from '../store'

export default function(to, from, next) {
    console.log("auth middleware...")
    if (store.state.auth.isLoggedIn) {
        console.log("is logged in...")
        next()
    } else {
        next({ path: '/login'})
    }
}