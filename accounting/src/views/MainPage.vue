<template>
  <main>
    <h1>Закупки</h1>
    <div class="add-items-container">
      <AddForm :saveData="saveData"></AddForm>
    </div>
    <div class="table-container">
      <Vue3EasyDataTable
          :headers="headers"
          :items="items"
          :rows-per-page="10"
          alternating
          buttons-pagination
          header-text-direction="center"
          body-text-direction="center"
          table-class-name="customize-table"
          theme-color="rgba(32, 150, 188, 0.68)"
      />
    </div>
  </main>
</template>
<script>
import AddForm from "@/components/AddForm.vue";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

export default {
  name: 'MainPage',
  components: {AddForm, Vue3EasyDataTable},
  data() {
    return {
      message: [],
      headers: [
        {text: "Название", value: "item", sortable: true},
        {text: "Кабинет", value: "room", sortable: true},
        {text: "Количество", value: "count", sortable: true},
        {text: "Дата", value: "date", sortable: true},
      ],
      items: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    saveData(formData) {
      const apiUrl = import.meta.env.VITE_API_URL
      this.$http.post(`${apiUrl}/api/save`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
          .then((res) => {
            this.message = res.data;
            this.getData()
          })
          .catch((error) => {
            console.error(error)
          });
    },
    getData() {
      const apiUrl = import.meta.env.VITE_API_URL
      this.$http.get(`${apiUrl}/api/data`,{
        headers: {
          'Content-Type': 'application/json',
        }
      })
          .then((res) => {
            this.items = res.data;

          })
          .catch((error) => {
            console.error(error)
          });
    }
  }
}
</script>
<style scoped>
@import '../assets/css/bundle.css';



</style>