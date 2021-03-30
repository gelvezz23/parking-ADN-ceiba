/* eslint-disable no-undef */
describe('test form', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.scrollTo(0, 0);
    cy.fixture('Moto.json').as('MotoData');
    cy.fixture('Carro.json').as('CarroData');
    cy.fixture('Weight.json').as('WeightData');

    cy.get('[name="slot"]').clear();
    cy.get('[name="responsable"]').clear();
    cy.get('.sc-fznZeY').select('');
    cy.get('[name="idResponsable"]').clear();
    cy.get('[name="licensePlate"]').clear();
  });

  it('complete the form and insert Moto', () => {
    cy.get('@MotoData').then((MotoData) => {
      cy.CreateMoto(MotoData);
      cy.get('.sc-fzplWN').click();
      cy.get('.sc-fzokOt').should('not.exist');
      cy.get('.sc-fzokOt').should('not.exist');
    });
  });

  it('complete the form and insert Carro', () => {
    cy.get('@CarroData').then((CarroData) => {
      cy.CreateCarro(CarroData);
      cy.get('.sc-fzplWN').click();
      cy.get('.sc-fzokOt').should('not.exist');
      cy.get('.sc-fzokOt').should('not.exist');
    });
  });

  it('complete the form and insert vehicle weight', () => {
    cy.get('@WeightData').then((WeightData) => {
      cy.CreateWeight(WeightData);
      cy.get('.sc-fzplWN').click();
      cy.get('.sc-fzokOt').should('not.exist');
      cy.get('.sc-fzokOt').should('not.exist');
    });
  });

  it('it must fail because my vehicle is repeated', () => {
    cy.get('@MotoData').then((MotoData) => {
      cy.CreateMoto(MotoData);
      cy.get('.sc-fzplWN').click();
      cy.get('.sc-fzokOt').should('be.visible');
    });
  });

  it('should fail if all data is empty', () => {
    cy.get('.sc-fzplWN').click();
    cy.get('form > :nth-child(3)').should('be.visible');
    cy.get('form > :nth-child(6)').should('be.visible');
    cy.get('form > :nth-child(8)').should('be.visible');
    cy.get('form > :nth-child(10)').should('be.visible');
    cy.get('form > :nth-child(12)').should('be.visible');
  });

  it('debe mostrar que esta lleno el slot de motos', () => {
    cy.get('@MotoData').then((MotoData) => {
      cy.get('[name="slot"]').type(MotoData.slot);
      cy.get('[name="responsable"]').type(MotoData.responsable);
      cy.get('.sc-fznZeY').select(MotoData.type);
      cy.get('[name="idResponsable"]').type(MotoData.idResponsable);
      cy.get('[name="licensePlate"]').type(MotoData.licensePlate + 1);
      cy.get('.sc-fzplWN').click();
      cy.get('.sc-fzokOt').should('be.visible');
    });
  });
});
