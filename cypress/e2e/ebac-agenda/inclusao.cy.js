/// <reference types="cypress" />

describe('Testes para a inclusão de um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve checar os campos do contato', () => {
    cy.get('input').should('have.length', 3)
  })

  it('Deve preencher o formulário de contato', () => {
    cy.get('input[placeholder="Nome"]').type('Silvia Abe')
    cy.get('input[placeholder="E-mail"]').type('silvia@gmail.com')
    cy.get('input[placeholder="Telefone"]').type('44999451211')
    cy.get('.adicionar').click()
  })
})