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
      this.$http.post('/api/save', formData)
          .then((res) => {
            this.message = res.data;
            this.getData()
          })
          .catch((error) => {
            console.error(error)
          });
    },
    getData() {
      this.$http.get('/api/data')
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
}

</style>