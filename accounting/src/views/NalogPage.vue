<template>
  <main>
    <h1>Налоговая</h1>
    <div class="radio-container">
      <div class="form_radio_btn">
        <input type="radio" class="custom-radio" id="option1" name="options" v-model="formType" value="true" checked>
        <label for="option1">Унп</label>
      </div>
      <div class="form_radio_btn">
        <input type="radio" class="custom-radio" id="option2" name="options" v-model="formType" value="false">
        <label for="option2">Название</label>
      </div>
    </div>
    <div class="add-items-container">
      <Nalog :save-data="saveData" :saveNameData="saveNameData" :formType="formType"></Nalog>
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
        {text: "Унп", value: "unp"},
        {text: "Краткое наименование юридического лица, фамилия, имя, отчество (если таковое имеется) индивидуального предпринимателя", value: "short_name_ru"},
        {text: "Наименование, фамилия, собственное имя, отчество (если таковое имеется) индивидуального предпринимателя", value: "full_name_ru"},
        {text: "Место нахождения юридического лица", value: "address"},
        {text: "Наименование основного вида деятельности ", value: "oked_name"},
        {text: "Состояние", value: "status"},
      ],
      items: [],
      formType: 'true',
    }
  },
  mounted() {

  },
  methods: {
    saveData(data) {
      let query = JSON.stringify({query: data})
      const apiUrl = import.meta.env.VITE_API_URL1
      this.$http.post(`${apiUrl}/suggestions/api/4_1/rs/findById/party_by`,query,{
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + "fbaa48a7c126b8b9ca4e6c503d9075343623df22"
        },
      })
          .then((res) => {
            this.items.shift()
            this.message = res.data.suggestions[0].data
            this.items.push(this.message)
            console.log(this.items)
          })
          .catch((error) => {
            console.error(error)
          });
    },
    saveNameData(data) {
      let query = JSON.stringify({query: data})
      const apiUrl = import.meta.env.VITE_API_URL1
      this.$http.post(`${apiUrl}/suggestions/api/4_1/rs/suggest/party_by`,query,{
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + "fbaa48a7c126b8b9ca4e6c503d9075343623df22"
        },
      })
          .then((res) => {
            this.items.splice(0, this.items.length)
            this.message = res.data.suggestions
            this.message.forEach((el,i)=>{
              this.items.push(el.data)
            })
            console.log(this.items)
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
  .radio-container {
    .form_radio_btn {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 20px;
      color: var(--blue-light);
      font-size: 14px;

      input[type=radio] {
        display: none;
      }

      label {
        display: inline-block;
        cursor: pointer;
        padding: 0px 16px;
        line-height: 34px;
        font-weight: 500;
        border: 1px var(--blue-light) solid;
        border-radius: 12px;
        user-select: none;
        background-color: transparent;
        transition: background 0.3s, color 0.3s;
        min-width: 80px;
        text-align: center;
      }

      /* Checked */
      input[type=radio]:checked + label {
        background: var(--blue);
        color: var(--white);
        border: none;
      }

      /* Hover */
      label:hover {
        background: var(--blue);
        color: var(--white);
      }

      /* Disabled */
      input[type=radio]:disabled + label {
        background: #efefef;
        color: #666;
      }
    }
  }
}


</style>