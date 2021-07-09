<template>
	<div class="article-page">
		<div class="banner">
			<div class="container" v-if="article">
				<h1>{{ article.title }}</h1>
				<div class="article-meta">
					<router-link
						:to="{
							name: 'userProfile',
							params: { slug: article.author.username },
						}"
					>
						<img :src="article.author.image" />
					</router-link>
					<div class="info">
						<router-link
							:to="{
								name: 'userProfile',
								params: { slug: article.author.username },
							}"
							>{{ article.author.username }}</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { actionTypes } from '@/store/modules/articleState';
import { mapState } from 'vuex';

export default {
	name: 'McvArticle',
	computed: {
		...mapState({
			isLoading: (state) => state.article.isLoading,
			error: (state) => state.article.error,
			article: (state) => state.article.data,
		}),
	},
	mounted() {
		this.$store.dispatch(actionTypes.getArticle, {
			slug: this.$route.params.slug,
		});
	},
};
</script>
