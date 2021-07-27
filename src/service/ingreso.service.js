import Api from './api.service'

class AuthService extends Api {
  login(credentials) {
    return this.resource.post(`miplata/login`, credentials)
  }

  registerIngreso(credentials) {
    return this.resource.post(`miplata/ingresos`, credentials)
  }

  traerIngreso(userId) {
    return this.resource.get(`miplata/ingresos/${userId}`)
  }

}

export default new AuthService('miplata');