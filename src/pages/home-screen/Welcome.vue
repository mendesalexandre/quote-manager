<template>
  <div class="q-pa-md">
    <q-space/>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoPlayCarouselSlides"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      height="200px"
      class="bg-primary text-white shadow-1 rounded-borders"
      @mouseenter="autoPlayCarouselSlides = false"
      @mouseleave="autoPlayCarouselSlides = true"
    >
      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <!-- <q-icon name="mdi-arrow-top-right-thick" size="56px" /> -->
        <div class="q-mt-md text-center">
          {{ $t('view.home.lbl.billToOverdue') }}
          {{ billsCloseToOverdue }}

          <div class="q-mt-md">
            <q-btn
              push
              icon="mdi-arrow-top-right-bold-outline"
              class="bg-white text-primary"
              :label="$t('view.home.lbl.access')"
              to="/close-to-overdue"
            >
              <q-tooltip>{{ $t("view.home.tip.access") }}</q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <!-- <q-icon name="style" size="56px" /> -->
        <div class="q-mt-md text-center">
          {{ $t('view.home.lbl.billAlreadyOverdue') }}
          {{ billsNotPayed }}

          <div class="q-mt-md">
            <q-btn
              push
              icon="mdi-arrow-top-right-bold-outline"
              class="bg-white text-primary"
              :label="$t('view.home.lbl.access')"
              to="/not-paid"
            >
              <q-tooltip>{{ $t("view.home.tip.access") }}</q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="column no-wrap flex-center">
        <!-- <q-icon name="style" size="56px" /> -->
        <div class="q-mt-md text-center">
          {{ $t('view.home.lbl.tasksTodo') }}
          {{ tasksTodo }}

          <div class="q-mt-md">
            <q-btn
              push
              icon="mdi-arrow-top-right-bold-outline"
              class="bg-white text-primary"
              :label="$t('view.home.lbl.access')"
              to="/todo"
            >
              <q-tooltip>{{ $t("view.home.tip.access") }}</q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-space/>
    <br>

    <!-- Finances tips -->
    <q-card>
      <doc-card-title :title="$t('view.home.lbl.sectionOne')" />
      <div class="row q-mt-md">
        <q-intersection
          v-for="(tip, index) in tipsFinances"
          :key="index"
          class="example-item"
        >
          <q-card v-if="tip.type === 'FINANCE'" flat bordered class="q-ma-sm">
            <q-card-section>
              <div class="text-h6"> {{ tip.title }} </div>
              <div class="text-subtitle2"> {{ tip.description }}</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </q-card>

    <!-- Investment tips -->
    <q-card>
      <doc-card-title :title="$t('view.home.lbl.sectionTwo')" />
      <div class="row q-mt-md">
        <q-intersection
          v-for="(tip, index) in tipsInvestments"
          :key="index"
          class="example-item"
        >
          <q-card v-if="tip.type === 'INVESTMENT'" flat bordered class="q-ma-sm">
            <q-card-section>
              <div class="text-h6"> {{ tip.title }} </div>
              <div class="text-subtitle2"> {{ tip.description }}</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </q-card>

    <!-- Cards with tips -->
    <!-- <q-card style="max-width: 300px">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-skeleton height="200px" square />

      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card> -->

    <!-- Test with success 1 -->
    <!-- <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoPlayCarouselSlides"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      height="150px"
      width="50vw"
      class="bg-primary text-white shadow-1 rounded-borders"
      @mouseenter="autoPlayCarouselSlides = false"
      @mouseleave="autoPlayCarouselSlides = true"
    >
      <q-carousel-slide v-for="(tip, index) in tips" :key="index" :name="index" class="column no-wrap flex-center">
        <div class="q-mt-md text-center">
          {{ tip }}
        </div>
      </q-carousel-slide>
    </q-carousel> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted
} from 'vue'
import { useStore } from 'vuex'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'

import DocCardTitle from 'src/components/DocCardTitle.vue'

export default defineComponent({
  name: 'WelcomeBack',
  components: {
    DocCardTitle
  },
  data () {
    const leftDrawerOpen = ref(false)
    const store = useStore()

    onMounted(() => {
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsCloseToOverdueList', { showMessage: false })
      store.dispatch('bills/getBillsOverdueList', { showMessage: false })
      store.dispatch('tips/getTipsList', { showMessage: false })
    })

    const billsCloseToOverdue = ref(computed(() => store.getters['bills/getBillsCloseToOverdueLength']))
    const billsNotPayed = ref(computed(() => store.getters['bills/getBillsNotPayedLength']))

    const allTips = ref(computed(() => store.getters['tips/getTips']))
    const tipsFinances = allTips.value.filter((t) => t.type === 'FINANCE')
    const tipsInvestments = allTips.value.filter((t) => t.type === 'INVESTMENT')

    const tasksTodo = 0

    const myListRef = ref(null)

    return {
      slide: ref(1),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      store,
      autoPlayCarouselSlides: ref(true),
      billsNotPayed,
      billsCloseToOverdue,
      tasksTodo,
      myListRef,
      tipsFinances,
      tipsInvestments
    }
  }
})
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>
