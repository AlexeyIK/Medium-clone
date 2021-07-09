<template>
	<div class="home-page">
		<mcv-banner />
		<div class="container page">
			<div class="row">
				<div class="col-md-9">
					<mcv-feed-toggler :tag-name="tagName" />
					<mcv-feed :api-url="apiUrl" />
				</div>
				<div class="col-md-3">
					<mcv-tags />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import McvFeed from '@/components/Feed';
import McvTags from '@/components/Tags';
import McvBanner from '@/components/Banner';
import McvFeedToggler from '@/components/FeedToggler';

export default {
	name: 'McvTagFeed',
	components: {
		McvFeed,
		McvTags,
		McvBanner,
		McvFeedToggler,
	},
	computed: {
		tagName() {
			return this.$route.params.slug;
		},
		apiUrl() {
			return `/articles?tag=${this.tagName}`;
		},
	},
};
</script>
