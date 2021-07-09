<template>
	<div class="sidebar">
		<p>Popular tags</p>
		<mcv-loading v-if="isLoading" />
		<mcv-error-message v-if="error" />

		<div class="tag-list">
			<router-link
				v-for="tag in tags"
				:key="tag"
				:to="{ name: 'tag', params: { slug: tag } }"
				class="tag-default tag-pill"
			>
				{{ tag }}
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/tagsState';
import McvLoading from '@/components/Loading';
import McvErrorMessage from '@/components/ErrorMessage';

export default {
	name: 'McvTags',
	computed: {
		...mapState({
			isLoading: (state) => state.tags.isLoading,
			tags: (state) => state.tags.tags,
			error: (state) => state.tags.error,
		}),
	},
	components: {
		McvLoading,
		McvErrorMessage,
	},
	mounted() {
		this.$store.dispatch(actionTypes.getTags);
	},
};
</script>
