import axios from 'axios'

export const getRequest = (path, params) => {
  return axios.get(path, {
    params
  })
}

export const postRequest = (path, data, params) => {
  return axios.post(path, data, {
    params
  })
}

export const putRequest = (path, data, params) => {
  return axios.put(path, data, {
    params
  })
}

export const deleteRequest = (path, params) => {
  return axios.delete(path, {
    params
  })
}

export default {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
}
