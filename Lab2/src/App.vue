<script setup>
import { RouterView, useRouter } from 'vue-router'
import { onMounted } from "vue";
import { useUserStore } from '@/stores/UserStore'
import NavComponent from "@/components/NavComponent.vue";

const userStore = useUserStore();

onMounted(() => {
	if (localStorage['token-UIP-calculation']) {
		userStore.loginToken()
	} else {
		useRouter().push({name: 'login'})
	}
})
</script>

<template>
	<div style="width: 100%; display: flex; justify-content: center">

		<a-card style="width: 500px; margin-top: 50px; ">
			<template #title>
<!--     			{{ userStore.isLogin }}-->
				<NavComponent v-if="userStore.isLogin"/>
			</template>
			<!--			<template #extra><a href="#">more</a></template>-->
			<RouterView/>
		</a-card>
	</div>
</template>

<style scoped>


</style>

