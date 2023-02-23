import { cy } from 'cypress'

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=xEzcE5GwTQbhAEWHq273iROt7J0niVp6', {
      statusCode: 201,
      method: 'GET',
      fixture: '../fixtures/home-data.json'
    })
    cy.visit('http://localhost:3000')
  })
})