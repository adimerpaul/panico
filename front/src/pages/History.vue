<template>
<q-page>
<q-table :rows="alarms" :columns="alarmColumns" :rows-per-page-options="[0]" >
  <template v-slot:top-right>
    <q-btn flat icon="refresh" @click="alarmGet" />
    <q-btn label="Download excel" @click="alarmDownload" color="green" icon="description" />
  </template>
  <template v-slot:body-cell-status="props">
    <q-td :props="props">
      <q-chip :color="props.row.status === 'Pendiente' ? 'yellow-9' : props.row.status === 'Cancelar' ? 'red' : 'green'" :label="props.row.status" text-color="white" />
    </q-td>
  </template>
  <template v-slot:body-cell-action="props">
    <q-td :props="props" auto-width>
      <q-btn-dropdown color="primary" label="Opciones">
        <q-list>
          <q-item clickable v-close-popup>
            <q-btn  @click="cambio(props.row,'Cancelar')" label="Cancelar" dense icon="warning" color="red" v-if="props.row.status==='Pendiente'" />
          </q-item>

          <q-item clickable v-close-popup v-if="store.user.type=='Administrador'">
            <q-item-section>
              <q-btn  color="primary" label="Maps" icon="public" dense target="_blank" :href="`https://www.google.com.bo/maps/place/${props.row.lat},${props.row.lng}/@${props.row.lat},${props.row.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x0:0xeda9371aeb8c1574!7e2!8m2!3d${props.row.lat}!4d${props.row.lng}?hl=es`" />
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup v-if="props.row.status==='Pendiente'&& store.user.type=='Administrador'">
            <q-item-section>
              <q-btn @click="cambio(props.row,'Terminar')" label="Terminar" dense icon="check" color="green"  />
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup v-if="store.user.type=='Administrador'">
            <q-item-section>
              <q-btn @click="alarmDelete(props.row)" label="Eliminar" dense icon="delete" color="red"  />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

    </q-td>
  </template>
</q-table>
</q-page>
</template>

<script>
import {useCounterStore} from "stores/example-store";
import {date} from "quasar";
import xlsx from "json-as-xlsx"

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

    if (this.store.showSocket) {
      this.store.socket.on('chat message', (data) => {
        this.$q.notify({
          message: data,
          color: 'red-4',
          textColor: 'white',
          icon: 'done',
          position: 'top'
        })
        this.alarmGet();
      })
      this.store.showSocket = false;
    }

    // if (this.store.cupos.length === 0) {
    this.alarmGet();

    // }
  },
  methods:{
    alarmDownload(){
      let data = [
        {
          // sheet: "Adults",
          columns: [
            { label: "Lat", value: "lat" },
            { label: "Lng", value: "lng" },
            { label: "Fecha", value: "fecha" },
            { label: "Estado", value: "status" },
            { label: "Acción", value: "action" },
            { label: "Ciudadano", value: row=>row.user.name+" "+row.user.lastname },
            { label: "City", value: row=>row.user.city },
            { label: "Phone", value: row=>row.user.phone },
            { label: "Email", value: row=>row.user.email },
            { label: "ID", value: "id" },

      //       "lat": "-17.947034",
      //   "lng": "-67.108864",
      //   "address": "admin",
      //   "status": "Pendiente",
      //   "user_id": 1,
      //   "created_at": "2022-11-17T02:51:36.000000Z",
      //   "updated_at": "2022-11-17T02:51:36.000000Z",
      //   "user": {
      //   "id": 1,
      //     "name": "admin",
      //     "lastName": "admin",
      //     "email": "admin@test.com",
      //     "email_verified_at": null,
      //     "phone": "69603027",
      //     "address": "admin",
      //     "city": "ORURO",
      //     "type": "Administrador",
      //     "avatar": "1668653069.jpg",
      //     "created_at": null,
      //     "updated_at": "2022-11-17T02:45:10.000000Z"
      // },
      // "fecha": "16/11/2022 22:51:36"
          ],
          content: this.alarms,
        },
      ]

      let settings = {
        fileName: "Alarms", // Name of the resulting spreadsheet
        // extraLength: 3, // A bigger number means that columns will be wider
        writeMode: 'writeFile', // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
        writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
        // RTL: true, // Display the columns from right-to-left (the default value is false)
      }

      xlsx(data, settings) // Will download the excel file
    },
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
    alarmDelete(alarm){
      this.$q.dialog({
        title: 'Eliminar',
        message: '¿Está seguro de eliminar este registro?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.loading.show();
        this.$api.delete(`alarm/${alarm.id}`)
          .then(response => {
            this.$q.loading.hide();
            this.$q.notify({
              message: 'Registro eliminado',
              color: 'green-4',
              textColor: 'white',
              icon: 'check_circle',
              position: 'top'
            })
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
