<template>
	<div class="col-md-6 col-12">
		<div class="team-card d-flex align-items-center p-3">
		<!-- <i class="mdi mdi-account-circle icon-large me-2" v-if="props.picture == ''"></i> -->
    <div class="pe-3">
      <img :src="picture" :alt=name class="img-fluid avatar-img">
    </div>
		<h3>{{ name }}</h3>
		<div class="d-flex ms-auto mt-auto">
      <a class="text-light" :href=linkedin><i class="mdi mdi-linkedin icon-medium"></i></a>
      <a class="text-light" :href=github><i class="mdi mdi-github icon-medium"></i></a>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {type: String, required: true},
		linkedin: String,
		github: String,
    picture: String
	},
    setup(props) {
      return {
		};
    },
}
</script>



<style lang="scss" scoped>

  .icon-large {
    font-size: 4rem;
  }
  .icon-medium {
    font-size: 2.5rem;
  }

  .team-card {
    background-color: #1D3354;
    color: white;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  .team-card h3 {
    margin-bottom: 0;
  }

  .avatar-img{
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

</style>