/// <reference types="cypress" />

describe('Testes para a alteração de um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve alterar informações de um contato', () => {
    cy.get('.edit').first().click()
    cy.get('input[placeholder="Nome"]').clear()
    cy.get('input[placeholder="Nome"]').type('Gabriel Rocha')
    cy.get('input[placeholder="E-mail"]').clear()
    cy.get('input[placeholder="E-mail"]').type('gabriel@gmail.com')
    cy.get('input[placeholder="Telefone"]').clear()
    cy.get('input[placeholder="Telefone"]').type('44999451211')
    cy.get('.alterar').click()
  })
})