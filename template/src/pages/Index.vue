{{#if preset.typescript}}
<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
{{#if_eq typescriptConfig "composition"}}import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});{{/if_eq}}{{#if_eq typescriptConfig "class"}}import ExampleComponent from 'components/ClassComponent.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {
  todos: Todo[] = [
    {
      id: 1,
      content: 'ct1'
    },
    {
      id: 2,
      content: 'ct2'
    },
    {
      id: 3,
      content: 'ct3'
    },
    {
      id: 4,
      content: 'ct4'
    },
    {
      id: 5,
      content: 'ct5'
    }
  ];
  meta: Meta = {
    totalCount: 1200
  };
};{{/if_eq}}{{#if_eq typescriptConfig "options"}}import ExampleComponent from 'components/OptionsComponent.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'PageIndex',
  components: { ExampleComponent },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ];
    const meta: Meta = {
      totalCount: 1200
    };
    return { todos, meta };
  }
});{{/if_eq}}
</script>
{{else}}
<template>
  <q-page padding>
    <div class="flex flex-center">
      <img
      alt="Zemfrog logo"
      :class="$q.platform.is.mobile ? 'fit' : ''"
      src="https://raw.githubusercontent.com/zemfrog/zemfrog/master/docs/_static/logo.png"
      :height="$q.platform.is.desktop ? '300px' : ''"
      :width="$q.platform.is.desktop ? '500px' : ''"
    >
    </div>
    <div class="row flex flex-center q-gutter-md">
      <q-btn type="a" href="https://github.com/zemfrog/zemfrog" outline label="Github" icon="lab la-github"></q-btn>
      <q-btn type="a" href="https://zemfrog.readthedocs.io/en/latest/" outline label="Docs" icon="emoji_objects"></q-btn>
    </div>
    <q-footer>
      <div class="column bg-dark text-white text-bold">
      <div class="flex items-center justify-center q-mt-md q-gutter-md">
        <q-btn type="a" href="https://github.com/aprilahijriyan" round color="primary" icon="lab la-github" />
        <q-btn type="a" href="https://facebook.com/apriladev" round color="primary" icon="lab la-facebook-f" />
        <q-btn type="a" href="https://linkedin.com/in/apriladev" round color="primary" icon="lab la-linkedin-in" />
      </div>
      <div class="flex items-center justify-center q-mt-md">
        <p>Copyright (c) Aprila Hijriyan. All right reserved</p>
      </div>
    </div>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      tab: 'intro'
    }
  }
}
</script>
{{/if}}
