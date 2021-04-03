<template>
  <q-page padding class="window-height window-width row justify-center items-center">
    <!-- content -->
    <form @submit.prevent="onSubmit">
      <div class="q-gutter-md" style="width: 350px;">
      <div class="column q-gutter-md q-pa-md shadow-10 bg-white" style="border-radius: 5px">
        <q-input type="email" v-model="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>

        <q-input type="password" v-model="password" label="Password">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
        <div class="flex justify-end">
          <a href="#" @click.prevent="$router.push('/request-password-reset')">Lupa Password?</a>
        </div>
        <q-btn push type="submit" color="green-4" text-color="white" label="LOGIN" />
      </div>
      <div class="flex justify-center q-gutter-y-md shadow-3 bg-white" style="border-radius: 2px">
        <p>Baru di {{ name }} ? <a href="#" @click.prevent="$router.push('/register')">Buat akun</a></p>
      </div>
    </div>
    </form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async onSubmit(evt) {
      console.log("login... ")
      let success = await this.$store.dispatch(
        'auth/login',
        {
          email: this.email,
          password: this.password
        }
      )
      console.log("success: " + success)
      if (!success) {
        this.$q.notify({
          icon: "error",
          message: "Invalid email or password"
        })
      } else {
        this.$router.push('/dashboard', () => {})
      }
    }
  }
}
</script>
