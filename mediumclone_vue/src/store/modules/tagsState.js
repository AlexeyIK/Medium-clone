import tagsApi from '@/api/tags';

const state = {
	tags: null,
	error: null,
	isLoading: false,
};

export const mutationTypes = {
	getTagsStart: '[tags] Get tags start',
	getTagsSuccess: '[tags] Get tags success',
	getTagsFailure: '[tags] Get tags fails',
};

export const actionTypes = {
	getTags: '[tags] Get tags',
};

const mutations = {
	[mutationTypes.getTagsStart](state) {
		state.isLoading = true;
		state.tags = null;
		state.error = null;
	},
	[mutationTypes.getTagsSuccess](state, payload) {
		state.isLoading = false;
		state.tags = payload;
		state.error = null;
	},
	[mutationTypes.getTagsFailure](state) {
		state.isLoading = false;
	},
};

const actions = {
	[actionTypes.getTags](context) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.getTagsStart);
			tagsApi
				.getTags()
				.then((tags) => {
					// console.log('Tags: ', tags);
					context.commit(mutationTypes.getTagsSuccess, tags);
					resolve(tags);
				})
				.catch((err) => {
					console.log('Tags error:', err);
					context.commit(mutationTypes.getTagsFailure);
				});
		});
	},
};

export default {
	state,
	actions,
	mutations,
};
