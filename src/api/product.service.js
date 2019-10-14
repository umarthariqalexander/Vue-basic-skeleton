import apiRequest from '@/utils/http-api'
import apiPaths from '@/config/api'

export default {
  getAllProducts() {
    return apiRequest.getRequest(apiPaths.product.getAllProducts)
  }
}
