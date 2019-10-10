import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('Customer')
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'customer',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(['showWelcomeMessage'])
  },
  computed: {
    ...mapGetters(['welcomeMessage'])
    // welcomeMessage() {
    //   // Direct access of store states // console.log(this.$store.state.Home.welcomeMessage)
    //   return this.$store.state.Home.welcomeMessage
    // }
  },
  created() {
    this.showWelcomeMessage()
  }
}
