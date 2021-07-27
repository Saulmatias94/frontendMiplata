import Api from './api.service'

class AuthService extends Api {
  login(credentials) {
    return this.resource.post(`miplata/login`, credentials)
  }

  registerGasto(credentials) {
    return this.resource.post(`miplata/gastos`, credentials)
  }

  traerGasto(userId) {
    return this.resource.get(`miplata/gastos/${userId}`)
  }

}

export default new AuthService('miplata');