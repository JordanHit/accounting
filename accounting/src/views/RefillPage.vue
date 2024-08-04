<template>
  <main>
    <h1>Заправка картриджей</h1>
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
    <div class="chart-container">
      <bar-chart v-if="loaded" :items="items"></bar-chart>
    </div>
  </main>
</template>
<script>
import AddForm from "@/components/AddForm.vue";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import BarChart from "@/components/BarChart.vue";

import 'vue3-easy-data-table/dist/style.css';

export default {
  name: 'RefillPage',
  components: {BarChart, AddForm, Vue3EasyDataTable},
  data() {
    return {
      message: [],
      headers: [
        {text: "Кабинет", value: "room", sortable: true},
        {text: "Количество", value: "count", sortable: true},
        {text: "Дата", value: "date", sortable: true},
      ],
      items: [],
      loaded: false
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    saveData(formData) {
      const apiUrl = import.meta.env.VITE_API_URL
      this.$http.post(`${apiUrl}/save2`, formData)
          .then((res) => {
            this.message = res.data;
            this.loaded = false
            this.getData()
          })
          .catch((error) => {
            console.error(error)
          });
    },
    getData() {
      const apiUrl = import.meta.env.VITE_API_URL
      this.$http.get(`${apiUrl}/data2`)
          .then((res) => {
            this.items = res.data;
            this.loaded = true
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

main {
  h1 {
    color: var(--blue);
    margin-bottom: 30px;
  }

  .add-items-container {
    margin-bottom: 30px;
  }

  .table-container {
    width: 1000px;

    .customize-table {
      --easy-table-header-font-size: 14px;
      --easy-table-header-font-color: var(--blue);

      --easy-table-header-item-padding: 10px 15px;

      --easy-table-body-even-row-background-color: rgba(243, 243, 243, 0.44);
      --easy-table-body-row-font-size: 14px;

      --easy-table-body-item-padding: 10px 15px;

      --easy-table-footer-font-size: 14px;
      --easy-table-footer-padding: 0px 10px;
      --easy-table-footer-height: 50px;

      --easy-table-scrollbar-track-color: var(--blue);
      --easy-table-scrollbar-color: var(--blue);
      --easy-table-scrollbar-thumb-color: var(--blue);
      --easy-table-scrollbar-corner-color: var(--blue);

      --easy-table-loading-mask-background-color: var(--blue);
    }
  }
  .chart-container{
    width: 1000px;
    height: 600px;
    margin-top: 30px;
  }
}

</style>