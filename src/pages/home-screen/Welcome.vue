<template>
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

    <q-carousel-slide :name="3" class="column no-wrap flex-center">
      <q-icon name="style" size="56px" />
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

    <q-carousel-slide :name="4" class="column no-wrap flex-center">
      <q-icon name="style" size="56px" />
      <div class="q-mt-md text-center">
        {{ $t('view.home.lbl.tips') }}
        <br>
        <div v-html="tips">
        </div>

        <!-- <div class="q-mt-md">
          <q-btn
            push
            icon="mdi-arrow-top-right-bold-outline"
            class="bg-white text-primary"
            :label="$t('view.home.lbl.access')"
            to="/todo"
          >
            <q-tooltip>{{ $t("view.home.tip.access") }}</q-tooltip>
          </q-btn>
        </div> -->
      </div>
    </q-carousel-slide>
  </q-carousel>
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
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'WelcomeBack',
  data () {
    const leftDrawerOpen = ref(false)
    const store = useStore()
    const $q = useQuasar()

    onMounted(() => {
      showLoading(LoadingStatus.ON)
      store.dispatch('bills/getBillsCloseToOverdueList', { showMessage: false })
      store.dispatch('bills/getBillsOverdueList', { showMessage: false })
    })

    const billsCloseToOverdue = ref(computed(() => store.getters['bills/getBillsCloseToOverdueLength']))
    const billsNotPayed = ref(computed(() => store.getters['bills/getBillsNotPayedLength']))
    const tasksTodo = 0
    const tips = `
    -O melhor dia de ir ao mercado é entre os dias 15 à 28<br>
    -Procurando por um preço mais acessível para abastecer? Utilize o waze para pesquisar a gasolina mais barata e mais próxima da sua localização<br>
    -Evite deixar lâmpadas ligadas desnecessariamente, isso ajuda o meio ambiente e ajuda na economia de energia<br>
    -Quer economizar no gás? Abre somente meia válvula, isso evita o desperdício do gás de cozinha
    `
    const saveMoney = `
    -Quer aprender como gastar corretamente seu dinheiro? Acesse os indicadores
    -Quer aprender a investir o seu dinheiro? Invista em CDB do banco BTG, na liquidez diária.
    `

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
      tips,
      saveMoney
    }
  }
})
</script>
