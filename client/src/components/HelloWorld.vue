<template>
  <div>
    <button @click="add()">Add</button>
    <p>{{count}}</p>
    <ul>
      <li v-for="msg in message" :key="msg.time">
        {{msg.id}} is {{msg.msg}} at {{msg.time}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      count: 0,
      message: []
    }
  },
  methods: {
    add() {
      // Emit the server side
      this.$socket.emit("add", { a: 5, b: 3 });
    },

    get() {
      this.$socket.emit("get", { id: 12 }, (response) => {
        console.log(response)
      });
    }
		},

		socket: {
			// Prefix for event names
			// prefix: "/counter/",

			// If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
			// namespace: "/counter",

			events: {

				// Similar as this.$socket.on("changed", (msg) => { ... });
				// If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
				//
				changed(msg) {
					console.log("Something changed: " + msg);
        },
        adding(msg){
          this.count+=1;
          this.message.push(msg);
        }

				/* common socket.io events
				connect() {
					console.log("Websocket connected to " + this.$socket.nsp);
				},

				disconnect() {
					console.log("Websocket disconnected from " + this.$socket.nsp);
				},

				error(err) {
					console.error("Websocket error!", err);
				}
				*/

			}
		}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
