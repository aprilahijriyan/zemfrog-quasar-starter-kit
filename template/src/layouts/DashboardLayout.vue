<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="bg-white text-dark">
        <q-toolbar-title>
          {{ name }}
        </q-toolbar-title>

        <q-btn-dropdown
          flat
          ref="menuProfile"
          label="Aprila Hijriyan"
          dropdown-icon="img:https://cdn.quasar.dev/img/boy-avatar.png"
          no-icon-animation
          @before-show="dropdownHandler"
        >
          <q-list>
            <q-item clickable v-ripple @click="$router.push('/')">
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
      </q-toolbar>
    </q-header>

    <q-drawer
        v-if="$q.platform.is.desktop"
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="dashboard" />
              </q-item-section>
              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="collections_bookmark" />
              </q-item-section>

              <q-item-section>
                Favorit
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="group" />
              </q-item-section>

              <q-item-section>
                Hubungan
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="primary" name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

    <q-footer v-if="$q.platform.is.mobile">
      <q-tabs
        v-model="tab"
        dense
        class="bg-primary"
      >
        <q-tab name="dashboard" icon="dashboard" label="Home" />
        <q-tab name="favorit" icon="collections_bookmark" label="Favorit" />
        <q-tab name="hubungan" icon="group" label="Hubungan" />
        <q-tab name="drafts" icon="drafts" label="Drafts" />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      drawer: false,
      miniState: true,
      tab: "dashboard"
    }
  },
  methods: {
    dropdownHandler(evt) {
      console.log("menu profile")
      console.log(evt)
      if (this.$q.platform.is.mobile) {
        this.$refs.menuProfile.hide()
      }
    }
  }
}
</script>
