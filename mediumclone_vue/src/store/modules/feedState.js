import feedApi from '@/api/feed';

const state = {
	data: null,
	error: null,
	isLoading: false,
};

export const mutationTypes = {
	getFeedStart: '[feed] Get feed start',
	getFeedSuccess: '[feed] Get feed success',
	getFeedFailure: '[feed] Get feed fail',
};

export const actionTypes = {
	getFeed: '[feed] Get feed',
};

const mutations = {
	[mutationTypes.getFeedStart](state) {
		state.isLoading = true;
		state.data = null;
	},
	[mutationTypes.getFeedSuccess](state, payload) {
		state.isLoading = false;
		state.data = payload;
	},
	[mutationTypes.getFeedFailure](state) {
		state.isLoading = false;
	},
};

const actions = {
	[actionTypes.getFeed](context, { apiUrl }) {
		return new Promise((resolve) => {
			context.commit(mutationTypes.getFeedStart);
			// console.log('Api url:', apiUrl);
			feedApi
				.getFeed(apiUrl)
				.then((response) => {
					context.commit(mutationTypes.getFeedSuccess, response.data);
					resolve(response.data);
				})
				.catch((error) => {
					console.log('Articles error:', error);
					context.commit(mutationTypes.getFeedFailure);
				});
		});
	},
};

export default {
	state,
	actions,
	mutations,
};
