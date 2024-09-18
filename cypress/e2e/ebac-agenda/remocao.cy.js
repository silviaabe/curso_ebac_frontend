/// <reference types="cypress" />

describe('Testes para a remoção de um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve remover um contato', () => {
    cy.get('.delete').first().click()
  })
})