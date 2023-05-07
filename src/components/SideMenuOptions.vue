<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <q-list bordered class="rounded-borders">
    <!-- <q-input
      outlined
      v-model="textSearch"
      :placeholder="$t('components.lbl.buttonSearch')"
    /> -->

    <div v-for="(m, index) in menus" :key="index">
      <q-expansion-item
        :v-if="m.hasAccess && m.visibleOnMenu"
        expand-separator
        :label="$t(m.label)"
        class="text-secondary bd-primary"
        :icon="m.icon"
      >
        <div v-for="(subMenu, subIndex) in m.children" :key="subIndex" >
          <q-item v-if="subMenu.hasAccess && subMenu.visibleOnMenu" class="bg-primary text-white" active-class="bg-secondary text-white" :inset-level="0.5" clickable v-ripple :to="subMenu.routePath">
            <q-item-section avatar>
              <q-icon :name="subMenu.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t(subMenu.label) }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-expansion-item>
    </div>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SideMenuOptions',
  data () {
    const store = useStore()
    const permissions = computed(() => store.getters['user/getPermissions'])
    // console.log('permissions: ', permissions)
    const menus = permissions.value.filter((p) => p.parent === '' && p.hasAccess && p.visibleOnMenu)
    // console.log('menus: ', menus)
    menus.forEach((p) => {
      const children = permissions.value.filter((c) => c.parent === p.name)
      p.children = children
    })
    // console.log('menus after children: ', menus)
    return {
      textSearch: ref(''),
      permissions,
      menus
    }
  }
  // ,
  // computed: {
  //   filterMenus () {
  //     if (!this.textSearch) {
  //       return ''
  //     }
  //     const searchRegex = new RegExp(this.textSearch, 'i')
  //     return this.items.filter((item) => searchRegex.test(item.label))
  //   }
  // }
})
</script>

<style lang="sass">
.selected-item-menu
  color: white
  background: $secondary
</style>
