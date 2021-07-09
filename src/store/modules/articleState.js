import articleApi from '@/api/article';

const state = {
	data: null,
	error: null,
	isLoading: false,
};

export const mutationTypes = {
	getArticleStart: '[article] Get article start',
	getArticleSuccess: '[article] Get article success',
	getArticleFailure: '[article] Get article fails',
};

export const actionTypes = {
	getArticle: '[article] Get article',
};

const mutations = {
	[mutationTypes.getArticleStart](state) {
		state.isLoading = true;
		state.data = null;
		state.error = null;
	},
	[mutationTypes.getArticleSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload;
		state.error = null;
	},
	[mutationTypes.getArticleFailure](state) {
		state.isLoading = false;
	},
};

const actions = {
	[actionTypes.getArticle](context, { slug }) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.getArticleStart, slug);
			articleApi
				.getArticle(slug)
				.then((article) => {
					context.commit(mutationTypes.getArticleSuccess, article);
					resolve(article);
				})
				.catch((err) => {
					console.log('Tags error:', err);
					context.commit(mutationTypes.getArticleFailure);
				});
		});
	},
};

export default {
	state,
	actions,
	mutations,
};
