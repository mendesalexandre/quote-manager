<template>
  <q-dialog v-model="confirm" ref="dialog">
    <q-card flat bordered>
      <q-card-section class="row no-wrap items-center" v-if="error">
        <q-icon class="q-mr-md" name="warning" size="24px" color="negative" />
        <div>Cannot fetch the release notes. Please use the links above instead.</div>
      </q-card-section>

      <q-card-section class="row no-wrap items-center" v-else-if="loading">
        <q-spinner class="q-mr-md" size="24px" color="brand-primary" />
        <div>Loading release notes...</div>
      </q-card-section>

      <template v-else>
        <q-tabs class="header-tabs" v-model="currentPackage" no-caps align="left" active-color="brand-primary" indicator-color="brand-primary">
          <q-tab v-for="packageName in packageList" class="header-btn" :name="packageName" :key="packageName">
            {{ packageName }}
          </q-tab>
        </q-tabs>

        <q-separator />

        <q-tab-panels class="packages-container" v-model="currentPackage" animated>
          <q-tab-panel class="q-pa-none" v-for="(packageReleases, packageName) in packages" :key="packageName" :name="packageName">
            <package-releases :releases="packageReleases" />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-card>

    <q-btn
      push
      @click="onOkClick()"
      class="bg-white text-primary q-ml-sm"
      :label="$t('components.lbl.buttonReturn')"
    />
  </q-dialog>
</template>

<!--<script setup>-->
<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted
} from 'vue'
import { date } from 'quasar'

import PackageReleases from './PackageReleases.vue'

export default defineComponent({
  name: 'ReleaseNotes',
  data () {
    const packages = ref({})
    const packageList = ref([])
    const currentPackage = ref('quasar')

    return {
      packages,
      packageList,
      currentPackage
    }
  },
  methods: {
    onOkClick () {
      this.$emit('ok', null)
      this.$emit('hide')
    }
  }
})
</script>
