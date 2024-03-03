import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get<never, never, any>('http://domain.com.br/sign-in', () => {
    return HttpResponse.json({
      id: "1",
      name: "teste",
      email: "teste@teste.com",
      phone: "+55999999999",
      token: 'eyabcdefg'
    })
  }),
]