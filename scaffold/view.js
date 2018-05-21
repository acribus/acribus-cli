import { ViewFactory, MODE, CollectionDescriptor, constant, Schema, eventHub } from 'acribus'

import {{ resource_name }} from '../../api/{{ resource_name }}'

export default ViewFactory({
  mode: MODE.EDIT_IN_DIALOG,
  data: new CollectionDescriptor('{{ resource_name }}'),
  schema: [],
  actions: [],
  hooks: [],
  options: {},
  nestedResource: [],
  parallelResource: []
})
