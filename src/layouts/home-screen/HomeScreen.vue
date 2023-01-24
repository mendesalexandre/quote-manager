<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HomeScreen',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      keepUserConnected: ref(false),

      essentialLinks: null,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
