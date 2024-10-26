import User from '#models/usuario'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async store({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.findBy('email', email)

    if (!user) {
      return response.unauthorized('Invalid credentials')
    }

    const isPasswordValid = await hash.verify(user.senha, password)

    if (!isPasswordValid) {
      return response.unauthorized('Invalid credentials')
    }

    const token = await User.accessTokens.create(user)

    return response.ok({
      type: 'bearer',
      value: token.value!.release(),
    })
  }
}
