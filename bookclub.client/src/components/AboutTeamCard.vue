<template>
	<div class="col-md-6 col-12">
		<div class="team-card d-flex align-items-center px-3">
		<i class="mdi mdi-account-circle icon-large me-2"></i>
		<h3>{{ name }}</h3>
		<div class="d-flex ms-auto mt-auto">
			<i class="mdi mdi-linkedin icon-medium"></i>
			<i class="mdi mdi-github icon-medium"></i>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {type: String, required: true},
		linkedin: String,
		github: String
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

</style>