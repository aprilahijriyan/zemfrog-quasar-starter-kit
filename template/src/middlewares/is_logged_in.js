import store from '../store'

export default function(to, from, next) {
    console.log("is_logged_in middleware...")
    if (store.state.auth.isLoggedIn) {
        console.log("redirecting...")
        next({ path: '/error-404'})
    } else {
        next()
    }
}