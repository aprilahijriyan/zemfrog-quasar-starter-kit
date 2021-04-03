<template>
  <q-page padding class="window-height window-width row justify-center items-center">
    <!-- content -->
    <q-form @submit="onSubmit">
      <div class="q-gutter-md" style="width: 400px;">
      <div class="column q-gutter-md q-pa-md shadow-10 bg-white" style="border-radius: 5px">
        <q-input type="email" v-model="email" label="Email">
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-btn push type="submit" color="green-4" text-color="white" label="SEND" />
      </div>
      <div class="flex justify-center q-gutter-y-md shadow-3 bg-white" style="border-radius: 2px">
        <p>Sudah punya akun ? <a href="#" @click.prevent="$router.push('/login')">Login</a></p>
      </div>
    </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      email: ""
    }
  },
  methods: {
    onSubmit(evt) {
      console.log("forgot password...")
      let success = this.$store.dispatch(
        'auth/forgot_password',
        this.$data
      )
      console.log("success: " + success)
    }
  }
}
</script>
