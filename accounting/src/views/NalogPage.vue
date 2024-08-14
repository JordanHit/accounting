<template>
  <main>
    <h1>Налоговая</h1>
    <div class="add-items-container">
      <Nalog :save-data="saveData"></Nalog>
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
import Nalog from "@/components/NalogForm.vue";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

export default {
  name: 'MainPage',
  components: {Nalog, Vue3EasyDataTable},
  data() {
    return {
      message: [],
      headers: [
        {text: "Унп", value: "vunp"},
        {text: "Краткое наименование юридического лица, фамилия, имя, отчество (если таковое имеется) индивидуального предпринимателя", value: "vnaimk"},
        {text: "Наименование, фамилия, собственное имя, отчество (если таковое имеется) индивидуального предпринимателя", value: "vnaimp"},
        {text: "Место нахождения юридического лица", value: "vpadres"},
        {text: "Код ИМНС", value: "nmns"},
        {text: "Наименование ИМНС", value: "vmns"},
        {text: "Дата постановки на учет", value: "dreg"},
        {text: "Состояние", value: "vkods"},
        {text: "Дата изменения состояния", value: "dlikv"},
      ],
      items: [],
    }
  },
  mounted() {

  },
  methods: {
    saveData(data) {
      const apiUrl = import.meta.env.VITE_API_URL1
      this.$http.get(`${apiUrl}/api/grp-public/data?unp=${data}&charset=UTF-8&type=json`)
          .then((res) => {
            this.message = res.data.row
            this.items.push(this.message)
            console.log(this.message)
          })
          .catch((error) => {
            console.error(error)
          });
    },
  }
}
</script>
<style scoped>
@import '../assets/css/bundle.css';
main{
  .table-container{
    width: 1500px;
  }
}


</style>