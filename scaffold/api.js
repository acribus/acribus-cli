import { Api } from 'acribus'
import request from './request'

export default new Api(request, {
  list: '/api/list',
  one: '/api/one',
  add: '/api/add',
  update: '/api/update',
  delete: '/api/delete'
})
