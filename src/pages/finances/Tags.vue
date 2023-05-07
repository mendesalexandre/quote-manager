<template>
  <q-page padding class="bg-primary">
    <!--Filter panel-->
    <filter-panel>
      <template #filter-content>
        <!-- Tag name -->
        <q-input rounded outlined v-model="tagName" :label="$t('view.finance.lbl.tagName')">
          <template v-slot:prepend>
            <q-icon name="mdi-tag" />
          </template>
        </q-input>
      </template>
      <template #filter-buttons>
        <button-new @click="openDialogNewTag()"/>
        <button-search @click="onSearchClick()"/>
      </template>
    </filter-panel>

    <br>
    <table-panel
      :title="$t('view.tags.lbl.title')"
      :columns="myTagsColumns"
      :rows="rows"
      :show-button-edit="false"
      :show-button-remove="true"
      :show-button-pay="false"
      @on-remove-click-event="onRemoveTag"
    ></table-panel>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

import FilterPanel from 'src/components/FilterPanel.vue'
import ButtonNew from 'src/components/ButtonNew.vue'
import ButtonSearch from 'src/components/ButtonSearch.vue'
import TablePanel from 'src/components/TablePanel.vue'

import { tagsColumns } from 'src/models/ColumnsModel'
import { showLoading } from 'src/util/Loading'
import i18n from 'src/util/i18n'
import { LoadingStatus } from 'src/models/StatusModel'

import DialogNewTag from './DialogNewTag.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tags',
  components: {
    FilterPanel,
    ButtonNew,
    ButtonSearch,
    TablePanel
  },
  data () {
    const store = useStore()
    const myTagsColumns = tagsColumns()

    const onSearchClick = () => {
      showLoading(LoadingStatus.ON)
      store.dispatch('tags/getTagsList', { tag: this.tagName })
    }

    const rows = computed(() => store.getters['tags/getTags'])

    return {
      tagName: ref(''),
      myTagsColumns,
      rows,
      onSearchClick,
      store
    }
  },
  methods: {
    openDialogNewTag () {
      this.$q
        .dialog({
          component: DialogNewTag,
          persistent: true,
          cancel: true
        })
        .onOk((newBill: any) => {
          this.store.dispatch('tags/newTag', newBill)
          this.onSearchClick()
        })
    },
    onRemoveTag (row) {
      this.$q
        .dialog({
          title: i18n.global.t('msg.delete.title'),
          message: i18n.global.t('msg.delete.message'),
          persistent: true,
          cancel: true
        })
        .onOk(() => {
          this.store.dispatch('tags/deleteTag', row.name)
          this.onSearchClick()
        })
    }
  }
})
</script>
