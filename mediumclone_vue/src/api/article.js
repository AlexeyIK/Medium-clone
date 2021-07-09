import axios from '@/api/axios';

const getArticle = (slug) => {
	return axios.get(`aricles/${slug}`).then((response) => response.data.article);
};

export default {
	getArticle,
};
