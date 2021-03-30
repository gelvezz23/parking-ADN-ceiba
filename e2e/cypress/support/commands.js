/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('CreateMoto', (MotoData) => {
  cy.get('[name="slot"]').type(MotoData.slot);
  cy.get('[name="responsable"]').type(MotoData.responsable);
  cy.get('.sc-fznZeY').select(MotoData.type);
  cy.get('[name="idResponsable"]').type(MotoData.idResponsable);
  cy.get('[name="licensePlate"]').type(MotoData.licensePlate);
});

Cypress.Commands.add('CreateCarro', (CarroData) => {
  cy.get('[name="slot"]').type(CarroData.slot);
  cy.get('[name="responsable"]').type(CarroData.responsable);
  cy.get('.sc-fznZeY').select(CarroData.type);
  cy.get('[name="idResponsable"]').type(CarroData.idResponsable);
  cy.get('[name="licensePlate"]').type(CarroData.licensePlate);
});

Cypress.Commands.add('CreateWeight', (WeightData) => {
  cy.get('[name="slot"]').type(WeightData.slot);
  cy.get('[name="responsable"]').type(WeightData.responsable);
  cy.get('.sc-fznZeY').select('Weight');
  cy.get('[name="idResponsable"]').type(WeightData.idResponsable);
  cy.get('[name="licensePlate"]').type(WeightData.licensePlate);
});
