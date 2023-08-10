<template>
    <FullCalendar :options="calendarOptions">
      <template v-slot:eventContent="arg">
        {{ arg.event.title }}
      </template>
    </FullCalendar>
</template>


<script>

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugIn from '@fullcalendar/interaction'
import fullCalendarCore from '@fullcalendar/core'

export default {
  components:{
    FullCalendar,
  },

  setup(){
    return {
      calendarOptions:{
        plugins: [dayGridPlugin, interactionPlugIn, fullCalendarCore],
        initialView: 'dayGridMonth'
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>