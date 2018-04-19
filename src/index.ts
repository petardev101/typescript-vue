import Vue from 'vue'
import Hello from './components/Hello.vue'

let v = new Vue({
    el: '#app',
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello :name="name" :initialEnthusiasm="5" />
    </div>`,
    data: {
        name: 'World'
    },
    components: {
        Hello
    }
});