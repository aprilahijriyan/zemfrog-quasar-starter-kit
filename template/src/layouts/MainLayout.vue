<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-dark">
        <q-toolbar-title>
          {{ name }}
        </q-toolbar-title>

        <div v-if="$store.state.auth.isLoggedIn">
          <q-btn-dropdown
            flat
            label="Aprila Hijriyan"
            dropdown-icon="img:https://cdn.quasar.dev/img/boy-avatar.png"
            no-icon-animation
          >
            <q-list>
              <q-item clickable v-ripple @click="$router.push('/dashboard')">
                <q-item-section avatar>
                  <q-icon color="primary" name="dashboard" />
                </q-item-section>
                <q-item-section>Dashboard</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="$router.push('/@' + $store.state.auth.user.nickname)">
                <q-item-section avatar>
                  <q-icon color="primary" name="las la-user-circle" />
                </q-item-section>
                <q-item-section>Profil</q-item-section>
              </q-item>
              <q-separator inset></q-separator>
              <q-item clickable v-ripple @click="$store.dispatch('auth/logout'); $router.push('/', () => {})">
                <q-item-section avatar>
                  <q-icon color="primary" name="las la-sign-out-alt" />
                </q-item-section>
                <q-item-section>Log out</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div v-else>
          <q-btn to="/login" outline label="Masuk" class="q-mr-md"/>
          <q-btn to="/register" color="primary" label="Daftar" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
    }
  },
}
</script>
