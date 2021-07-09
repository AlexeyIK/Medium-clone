<template>
	<div>
		<mcv-topbar />
		<router-view />
	</div>
</template>

<script>
import McvTopbar from '@/components/TopBar';
import { actionTypes } from '@/store/modules/auth';

export default {
	name: 'App',
	components: {
		McvTopbar,
	},
	mounted() {
		console.log('hello app');
		this.$store.dispatch(actionTypes.getCurrentUser);
	},
};
</script>
