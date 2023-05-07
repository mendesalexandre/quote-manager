<template>
  <div class="q-gutter-md">
    <!-- <div>
      <q-checkbox v-model="moduleOne" :label="$t('pages.user.new.moduleOne')" keep-color/>
    </div>
    <div>
      <q-checkbox v-model="moduleTwo" :label="$t('pages.user.new.moduleTwo')" keep-color/>
    </div>
    <div>
      <q-checkbox v-model="moduleThree" :label="$t('pages.user.new.moduleThree')" keep-color/>
    </div>
    <div>
      <q-checkbox v-model="moduleFourth" :label="$t('pages.user.new.moduleFourth')" keep-color/>
    </div>
    <div>
      <q-checkbox v-model="moduleFifth" :label="$t('pages.user.new.moduleFifth')" keep-color/>
    </div>
    <div>
      <q-checkbox right-label v-model="acceptedTerms" :label="$t('pages.user.new.termAccepted')" checked-icon="task_alt" unchecked-icon="highlight_off"/>
    </div> -->
    <q-radio :v-model="moduleSelected" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="moduleOne" label="Free" />
    <q-radio :v-model="moduleSelected" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="moduleTwo" label="Plus" />
    <q-radio :v-model="moduleSelected" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="moduleThree" label="Business" />
    <q-radio :v-model="moduleSelected" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="moduleFour" label="Enterprise" />
  </div>
</template>
<script>
export default {
  name: 'ModulesAvailable',
  props: {
    moduleSelected: {
      type: String,
      required: false
    }
  }
}
</script>
