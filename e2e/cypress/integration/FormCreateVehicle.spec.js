describe('test form', () => {
  beforeEach(() => {
    cy.fixture('Vehicles.json').as('VehicleData');
  });
  it('render of home', () => {
    cy.visit('/');
  });

  it('complete the form', () => {
    cy.get('@VehicleData').then((VehicleData) => {
      cy.get('[name="slot"]').type(VehicleData.slot);
      cy.get('[name="responsable"]').type(VehicleData.responsable);
      cy.get('.sc-fznZeY').select(VehicleData.type);
      cy.get('[name="idResponsable"]').type(VehicleData.idResponsable);
      cy.get('[name="licensePlate"]').type(VehicleData.licensePlate);
    });
  });

  it('Insert vehicle', () => {
    cy.get('.sc-fzplWN').click();
  });

  it('it must fail because my vehicle is repeated', () => {
    cy.get('.sc-fzokOt').should('be.visible');
  });

  it('should fail if all data is empty', () => {
    cy.get('[name="slot"]').clear();
    cy.get('[name="responsable"]').clear();
    //cy.get('.sc-fznZeY').select('', 'Seleccione');
    cy.get('.sc-fznZeY').select('');

    cy.get('[name="idResponsable"]').clear();
    cy.get('[name="licensePlate"]').clear();
    cy.get('.sc-fzplWN').click();
  });

  it('should show error alerts', () => {
    cy.get('form > :nth-child(3)').should('be.visible');
    cy.get('form > :nth-child(6)').should('be.visible');
    cy.get('form > :nth-child(8)').should('be.visible');
    cy.get('form > :nth-child(10)').should('be.visible');
    cy.get('form > :nth-child(12)').should('be.visible');
  });

  after(() => {
    cy.log('Fished');
  });
});
