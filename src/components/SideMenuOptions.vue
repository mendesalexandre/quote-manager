<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-input outlined v-model="textSearch" :placeholder="$t('view.home.lbl.search')" />

      <q-expansion-item
        expand-separator
        :label="$t('view.home.lbl.title')"
        class="text-secondary"
        icon="home"
        to="/welcome"
      >
        <q-item :inset-level="0.5" clickable v-ripple to="/todo">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-format-list-bulleted" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("view.home.lbl.menuTaskTodo") }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/done">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-check-all" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("view.home.lbl.menuTaskDone") }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        :label="$t('view.home.lbl.menuMyFinances')"
        class="text-secondary"
        icon="account_balance"
        default-opened
      >
        <q-item :inset-level="0.5" clickable v-ripple to="/finances">
          <q-item-section avatar>
            <q-icon color="secondary" name="fa-solid fa-hand-holding-dollar" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuFinances") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/close-to-overdue">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-calendar-clock" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuMyCloseToOverdue") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/not-paid">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-calendar-alert" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuMyOverdueBills") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/defaulters">
          <q-item-section avatar>
            <q-icon color="secondary" name="assignment_ind" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuDefaulters") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/reports">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-chart-line" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuReports") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/tags">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-tag-multiple" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuTags") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item :inset-level="0.5" clickable v-ripple to="/indicators">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-finance" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuIndicators") }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SideMenuOptions',
  data () {
    return {
      textSearch: ref('')
    }
  }
})
</script>
