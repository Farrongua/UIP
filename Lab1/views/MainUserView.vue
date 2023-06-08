<script setup>
import { reactive } from "vue";
import { useUserStore } from '@/stores/UserStore'
import NavComponent from "@/components/NavComponent.vue";
// import { useRouter } from 'vue-router'

const userStore = useUserStore();
// const router = useRouter()

const user = userStore.getUser
console.log(user)
const table = reactive({
	data: [
		{
			name: 'Ім\'я',
			value: user.name,
		},
		{
			name: 'Email',
			value: user.email,
		},
		{
			name: 'Стать',
			value: user.gender,
		},
		{
			name: 'День нарождення',
			value: new Date(user.dateOfBirth).toISOString().split('T')[0],
		},
	],
	columns: [
		{
			title: 'Поле',
			dataIndex: 'name',
		},
		{
			title: 'Значення',
			dataIndex: 'value',
		},
	],
})
</script>


<template>
	<div style="display: flex; flex-direction: column; ">

<!--		<div style="margin-bottom: 20px; display: flex; justify-content: space-between">-->
<!--			<div>-->
<!--				<a-button-->
<!--						type="primary"-->
<!--						style="margin-right: 10px;"-->
<!--						@click="router.push({name: 'application'})"-->
<!--				>-->
<!--					Приложение-->
<!--				</a-button>-->
<!--				<a-button-->
<!--						type="dashed"-->
<!--						@click="router.push({name: 'description'})"-->
<!--				>-->
<!--					Описание-->
<!--				</a-button>-->
<!--			</div>-->
<!--			<a-button danger @click="userStore.logoutUser()">Выйти</a-button>-->
<!--		</div>-->
		<div>
			<a-table
					:pagination="false"
					:dataSource="table.data"
					:columns="table.columns"
					style="width: 100%;"
			/>
		</div>
	</div>
</template>

<style scoped>

</style>