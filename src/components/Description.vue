<template>
<transition name="ThemeTransition">
	<div class="description p2">
		<h3>版权声明：</h3>
		<p class="h6">©️知乎 与 ©️知乎日报 所有内容版权归 ©️知乎Zhihu 公司所有。该网页任何内容不得用于会影响、触犯知乎公司利益的地方。</p>
	</div>
</transition>
</template>

<script>
export default {
	name: 'Description',
	components: {

	},
	created: function () {
		window.scrollTo(0,0)
	}
}
</script>

<style>
.description {}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	-webkit-margin-before: 0;
	-webkit-margin-after: 0;
	-webkit-margin-start: 0;
	-webkit-margin-end: 0;
	margin: 0;
}

.github-star {
	color: black;
	padding: 5px;
}

.description p {
	text-indent: 1rem;
	line-height: 1.3rem;
	color: #4c4b4b;
}


/* ==过度动画== */

.ThemeTransition-enter-active,
.ThemeTransition-leave-active {
	transition: opacity .5s
}

.ThemeTransition-enter,
.ThemeTransition-leave-active {
	/*transform: translateX(-100vw);*/
	opacity: 0;
}
</style>
