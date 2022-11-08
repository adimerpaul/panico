<template>
<q-page>
<q-table :rows="alarms" :columns="alarmColumns" :rows-per-page-options="[0]" >
  <template v-slot:top-right>
    <q-btn flat icon="refresh" @click="alarmGet" />
  </template>
  <template v-slot:body-cell-status="props">
    <q-td :props="props">
      <q-chip :color="props.row.status === 'Pendiente' ? 'yellow-9' : props.row.status === 'Cancelado' ? 'red' : 'green'" :label="props.row.status" text-color="white" />
    </q-td>
  </template>
  <template v-slot:body-cell-action="props">
    <q-td :props="props">
      <q-btn  @click="cambio(props.row,'Cancelar')" label="Cancelar" dense icon="warning" color="red" v-if="props.row.status==='Pendiente'" />
      <q-btn v-if="store.user.type=='Administrador'" color="primary" label="Maps" icon="public" dense target="_blank" :href="`https://www.google.com.bo/maps/place/${props.row.lat},${props.row.lng}/@${props.row.lat},${props.row.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x0:0xeda9371aeb8c1574!7e2!8m2!3d${props.row.lat}!4d${props.row.lng}?hl=es`" />
      <q-btn @click="cambio(props.row,'Terminar')" label="Terminar" dense icon="check" color="green" v-if="props.row.status==='Pendiente'&& store.user.type=='Administrador'" />
    </q-td>
  </template>
</q-table>
</q-page>
</template>

<script>
import {useCounterStore} from "stores/example-store";
import {date} from "quasar";

export default {
  name: `History`,
  data() {
    return {
      selected: [],
      url: process.env.API,
      cupoSearch: '',
      store:useCounterStore(),
      alarms: [],
      alarmColumns:[
        {name:'action', label:'Acción', field:'action', align:'left', sortable:true},
        {name:'status', label:'Estado', field:'status', align:'left', sortable:true},
        {name:'name', label:'Ciudadado', field:row=>row.user.name, align:'left', sortable:true},
        // {name:'id', label:'ID', field:'id', align:'left', sortable:true},
        {name:'lat', label:'Lat', field:'lat', align:'left', sortable:true},
        {name:'lng', label:'Lng', field:'lng', align:'left', sortable:true},
        {name:'fecha', label:'Fecha hora', field:'fecha', align:'left', sortable:true},
      ]
    }
  },
  created() {
    // if (this.store.cupos.length === 0) {
    this.alarmGet();

    // }
  },
  methods:{
    alarmGet(){
      this.$q.loading.show();
      this.alarms = [];
      this.$api.get('alarm')
        .then(response => {
          this.$q.loading.hide();
          // console.log(response.data)
          response.data.forEach((item) => {
            item.fecha = date.formatDate(item.created_at, 'DD/MM/YYYY HH:mm:ss')
            this.alarms.push(item)
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cambio(row,text){
      this.$q.dialog({
        title: 'Cancelar',
        message: `¿Está seguro de ${text} la alarma?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show();
        this.$api.put('alarm/'+row.id, {status: text})
          .then(response => {
            this.alarmGet();
          })
          .catch(error => {
            console.log(error)
          })
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Dismissed')
      })

    }
  },
}
</script>

<style scoped>

</style>
