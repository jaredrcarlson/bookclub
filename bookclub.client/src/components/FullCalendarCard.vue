<template>
  <div>
    
  </div>
</template>


<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugIn from '@fullcalendar/interaction'

export default {
  setup(){

    let calendar = new Calendar({
      plugins:[dayGridPlugin, interactionPlugIn],
      initialview: 'dayGridMonth',
      headerToolbar:{
        left: 'prev,next today',
        center: 'addEventButton',
        right: 'dayGridMonth'
      },
      customButtons:{
        addEventButton:{
          text: 'Add a New Event',
          click: function(){
            let dateStr = prompt('Enter a date in YYYY-MM-DD format')

            let date = new Date(dateStr).toDateString

            if(!isNaN(date.valueOf())){
              calendar.addEvent({
                title: 'New Event',
                start: date,
                allDay: true
              });
              alert('Push to mongoDb')
            }
            else{
              alert('Enter a valid Date.');
            }
          }
        }
      }
    })

    calendar.render()

    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
