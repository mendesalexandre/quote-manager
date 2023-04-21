<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-input outlined v-model="textSearch" :placeholder="$t('view.home.lbl.search')" />

      <!--Home-->
      <q-expansion-item
        v-if="userHavePermission('Home')"
        expand-separator
        :label="$t('view.home.lbl.title')"
        class="text-secondary"
        icon="home"
        to="/welcome"
      >
        <q-item v-if="userHavePermission('TasksTodo')" :inset-level="0.5" clickable v-ripple to="/todo">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-format-list-bulleted" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("view.home.lbl.menuTaskTodo") }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="userHavePermission('TasksDone')" :inset-level="0.5" clickable v-ripple to="/done">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-check-all" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("view.home.lbl.menuTaskDone") }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <!--Finances-->
      <q-expansion-item
        v-if="userHavePermission('Finances')"
        expand-separator
        :label="$t('view.home.lbl.menuMyFinances')"
        class="text-secondary"
        icon="account_balance"
        default-opened
      >
        <q-item v-if="userHavePermission('Finances')" :inset-level="0.5" clickable v-ripple to="/finances">
          <q-item-section avatar>
            <q-icon color="secondary" name="fa-solid fa-hand-holding-dollar" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuFinances") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="userHavePermission('CloseToOverdue')" :inset-level="0.5" clickable v-ripple to="/close-to-overdue">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-calendar-clock" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuMyCloseToOverdue") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="userHavePermission('NotPayed')" :inset-level="0.5" clickable v-ripple to="/not-paid">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-calendar-alert" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuMyOverdueBills") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="userHavePermission('Defaulters')" :inset-level="0.5" clickable v-ripple to="/defaulters">
          <q-item-section avatar>
            <q-icon color="secondary" name="assignment_ind" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuDefaulters") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="userHavePermission('Reports')" :inset-level="0.5" clickable v-ripple to="/reports">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-chart-line" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuReports") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="userHavePermission('Tags')" :inset-level="0.5" clickable v-ripple to="/tags">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-tag-multiple" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuTags") }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="userHavePermission('Indicators')" :inset-level="0.5" clickable v-ripple to="/indicators">
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

      <!--Advertisement (Ads)-->
      <q-expansion-item
        v-if="userHavePermission('Pre-sell')"
        expand-separator
        :label="$t('view.home.lbl.menuMyAds')"
        class="text-secondary"
        icon="mdi-google-ads"
        default-opened
      >
        <q-item v-if="userHavePermission('Pre-sell')" :inset-level="0.5" clickable v-ripple to="/presell">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-web-plus" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuMyPresell") }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-if="userHavePermission('Campaigns')" :inset-level="0.5" clickable v-ripple to="/campaigns">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-finance" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuMyCampaigns") }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-if="userHavePermission('AdsTips')" :inset-level="0.5" clickable v-ripple to="/ads-tips">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-lightbulb-on" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuTips") }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-if="userHavePermission('Roi')" :inset-level="0.5" clickable v-ripple to="/roi">
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-chart-areaspline" />
          </q-item-section>
          <q-item-section>
            <q-item-label color="secondary">
              {{ $t("view.home.lbl.menuMyRoi") }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SideMenuOptions',
  data () {
    const store = useStore()
    const permissions = store.getters['user/getPermissions']
    return {
      textSearch: ref(''),
      permissions
    }
  },
  methods: {
    userHavePermission (moduleName: string) {
      return this.permissions.filter(p => p.name.toUpperCase().trim() === moduleName.toUpperCase().trim() && p.hasAccess === true).length > 0
    }
  }
})
</script>
