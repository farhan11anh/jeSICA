<template>
  <div>
    <div>
      agus : hello <br>
      jesica : voiila <br>

      <div v-for="message of messages" >
        <p>{{ message }}</p>
      </div>
    </div>
    <input type="text" v-model="message" >
    <button @click="send" type="button">Send</button>


    <select id="gender">
      <option>male</option>
      <option>female</option>
      <option>others</option>
    </select> 
  </div>
</template>

<script>
  // In a Nuxt page or component
export default {
  async mounted() {
    

    this.socket.onopen = () => {
      console.log('WebSocket connection opened');
      // You can send messages to Django here, if needed
      // socket.send(JSON.stringify({ message: 'Hello, Django!' }));
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received a message from Django:', data);
      this.messages.push(data.data.text_response)
      // Handle the message as needed in your Nuxt app
    };

    this.socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  },

  data(){
    return{
      message : "",
      socket : new WebSocket('ws://192.168.1.140:8000/api/chat/exazure/v1/'),

      messages : []
    }
  },

  methods : {
    send(){
      this.messages.push(this.message)
      let msg = {
        text : this.message
      }
      msg = JSON.stringify(msg)

    
      this.socket.send(msg)

      this.message = ""
    }
  }
};

</script>

<style scoped>

select#gender option[value="male"]   { background-image:url('@/img/en-flag.svg');   }
select#gender option[value="female"] { background-image:url('~/img/id-flag.svg');   }


</style>