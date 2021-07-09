import { createStore } from 'vuex';

import auth from '@/store/modules/auth';
import feed from '@/store/modules/feedState';
import tags from '@/store/modules/tagsState';
import article from '@/store/modules/articleState';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		auth,
		feed,
		tags,
		article,
	},
});
