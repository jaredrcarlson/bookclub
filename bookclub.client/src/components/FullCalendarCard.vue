<template>
  <div>
    <FullCalendar :options="calendarOptions"/>
  </div>
</template>

<script>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components:{
    FullCalendar
  },

  setup(){
    return {
      calendarOptions:{
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth'
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>