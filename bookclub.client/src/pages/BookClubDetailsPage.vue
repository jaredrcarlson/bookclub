<template>
<div class="container-fluid">
    <section class="row">
      <div class="col-md-3 col-12">
        <div>
          <img class="img-fluid card-img" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="card img">
        </div>
        <div class="dark-blue-bg rounded-bottom text-light fw-bold fs-4 text-center p-1">
          <p class="m-0">
            Sci-Fi Group
          </p>
        </div>
      </div>
      <div class="col-md-9 col-12">
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
    </section>
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
.card-img{
  object-fit: cover;
  object-position: center;
}
</style>
