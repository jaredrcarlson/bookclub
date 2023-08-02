<template>
  <div>
    <div>
      <p class="fs-1 fw-semibold mt-2">
        Club's Booklist
      </p>
    </div>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" class="fw-light">Title</th>
            <th scope="col" class="fw-light">Genre</th>
            <th scope="col" class="fw-light">Progress</th>
            <th scope="col" class="fw-light">Rating</th>
          </tr>
        </thead>
        <tbody class="fw-semibold">
          <!-- FIXME v-for all of the books in a list. Convert the table row into a card component. Add a router link on each row to go to that book's detail page. -->
          <tr scope="row">
            <td>
              <p class="d-flex flex-column">
                <span>
                  Mistborn: The Final Empire
                </span>
                <span class="fw-normal">
                  By Brandon Sanderson
                </span>
              </p>
            </td>
            <td>Fantasy</td>
            <td>
              <p class="d-flex flex-column">
                <span>
                  Completed
                </span>
                <span class="fw-light">
                  completed 1/25/2010
                </span>
              </p>
            </td>
            <td>8/10</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>