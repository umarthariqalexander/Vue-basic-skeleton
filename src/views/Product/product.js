import Counter from '@/components/Counter.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('Product')

export default {
  name: 'Product',
  components: { Counter },
  methods: { ...mapActions(['getAllProducts']) },
  created() {
    this.getAllProducts()
  }
}
