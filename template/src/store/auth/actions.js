/*
export function someAction (context) {
}
*/

export async function login({commit}, {email, password}) {
    var success = false
    let data = new FormData()
    data.append("username", email)
    data.append("password", password)
    console.log(data)
    try {
        let resp = await this.$axios.post(
            '/jwt/login',
            data
        )
        commit('setToken', resp.data.access_token)
        try {
            let resp = await this.$axios.get(
                '/jwt/user'
            )
            commit('setUser', resp.data)
            success = true
        } catch (error) {
            console.error("Error info user: " + error)
        }
    } catch (error) {
        console.error("Error: " + error)
    }
    return success
}


export async function register(context, payload) {
    var success = false
    const data = new FormData()
    Object.keys(payload).forEach(key => {
        data.append(key, payload[key])
    })
    try {
        let resp = await this.$axios.post(
            '/jwt/register',
            data
        )
        success = true
    } catch (error) {
        console.log("error register: " + error)
    }
    return success
}

export async function forgot_password(context, {email}) {
    var success = false
    const data = new FormData()
    data.append('username', email)
    try {
        await this.$axios.post(
            '/jwt/forgot-password',
            data
        )
        success = true
    } catch (error) {
        console.log("error forgot password " + error)
    }
    return success
}

export function logout({commit}) {
    commit('setToken', '')
    commit('setUser', {})
}