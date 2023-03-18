<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoPlayCarouselSlides"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    height="300px"
    class="bg-primary text-white shadow-1 rounded-borders"
    @mouseenter="autoPlayCarouselSlides = false"
    @mouseleave="autoPlayCarouselSlides = true"
  >
    <q-carousel-slide :name="1" class="column no-wrap flex-center">
      <q-icon name="style" size="56px" />
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
      <q-icon name="style" size="56px" />
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
  </q-carousel>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  watchEffect,
  onMounted
} from 'vue'
import { useStore } from 'vuex'
import { showLoading } from 'src/util/Loading'
import { LoadingStatus } from 'src/models/StatusModel'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'WelcomeBack',
  data () {
    const leftDrawerOpen = ref(false)
    const store = useStore()
    const $q = useQuasar()

    onMounted(() => {
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsCloseToOverdueList')
      store.dispatch('bills/getBillsNotPayedList')
    })

    const billsCloseToOverdue = computed(() => store.getters['bills/getBillsCloseToOverdueLength'])
    const billsNotPayed = computed(() => store.getters['bills/getBillsNotPayedLength'])

    watch(billsCloseToOverdue, () => {
      showLoading(LoadingStatus.OFF)
    })

    watchEffect(async () => {
      if (billsCloseToOverdue.value === undefined) {
        showLoading(LoadingStatus.OFF)
      }
    })

    watch(billsNotPayed, () => {
      showLoading(LoadingStatus.OFF)
    })

    watchEffect(async () => {
      if (billsNotPayed.value === undefined) {
        showLoading(LoadingStatus.OFF)
      }
    })

    return {
      slide: ref(1),
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      store,
      autoPlayCarouselSlides: ref(true),
      billsNotPayed,
      billsCloseToOverdue
    }
  }
})
</script>
