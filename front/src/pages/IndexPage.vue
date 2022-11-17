<template>
  <q-page>
    <q-card>
      <q-card-section v-if="store.user.phone==null">
        <div class="text-h3 text-red q-pa-lg text-center">
          Porfavor, complete el formulario con datos reales.
        </div>
        <div class="flex flex-center">
          <q-btn to="datos"  color="primary" label="Completar datos" icon="o_contact_phone" />
        </div>
      </q-card-section>
      <q-card-section v-else class="flex-center flex">
        <q-btn label="PANIC" @click="alertCreate" round color="red" size="100px" >
        </q-btn>
      </q-card-section>
    </q-card>
<!--    <pre>{{store.user}}</pre>-->
  </q-page>
</template>

<script>
import {useCounterStore} from "stores/example-store";

export default {
  name: 'IndexPage',
  data () {
    return {
      store:useCounterStore()
    }
  },
  methods: {
    alertCreate(){
      this.$q.dialog({
        title: 'Alerta',
        message: '¿Desea enviar una alerta?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.location()
      }).onCancel(() => {
        this.$q.notify({
          message: 'Alerta cancelada',
          color: 'negative',
          icon: 'cancel',
          position: 'top'
        })
      })
    },
    location(){
      this.$q.loading.show()
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        this.$api.post('alarm', {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          address:this.store.user.address,
          user_id:this.store.user.id
        }).then((response) => {
          this.$q.loading.hide()
          this.store.socket.emit("chat message","Alerta de "+this.store.user.name) //enviar mensaje a socket");
          this.$q.notify({
            message: 'Alerta enviada',
            color: 'positive',
            icon: 'check',
            position: 'top'
          })
        }).catch((error) => {
          this.$q.loading.hide()
          this.$q.notify({
            message: 'Error al enviar la alerta',
            color: 'negative',
            icon: 'cancel',
            position: 'top'
          })
        })
      })
    }
  },
}
</script>
