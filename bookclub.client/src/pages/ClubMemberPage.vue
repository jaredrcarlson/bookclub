<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <p class="m-3 fs-1">
          Member List
        </p>
      </div>
    </section>
    <section class="row justify-content-around">
      <div class="col-md-5 col-12 dark-blue-bg my-2 rounded" v-for="member in members" :key="member.id">
        <MemberCard :memberProp="member" />
      </div>
    </section>
  </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import MemberCard from '../components/MemberCard.vue';

export default {
    setup() {
        return {
            members: computed(() => AppState.members)
        };
    },
    components: { MemberCard }
}
</script>


<style lang="scss" scoped>

</style>