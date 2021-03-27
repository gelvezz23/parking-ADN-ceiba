describe('load home', () => {
  it('render of home', () => {
    cy.visit('/');
  });

  it('complete the form', () => {
    cy.get('[name="slot"]').type('M7');
    cy.get('[name="responsable"]').type('Carlos Gomez');
    cy.get('.sc-fznZeY').select('Moto');
    cy.get('[name="idResponsable"]').type('1090');
    cy.get('[name="licensePlate"]').type('XZY88');
  });

  it('Insert vehicle', () => {
    cy.get('.sc-fzplWN').click();
    cy.wait(3000);
  });
});
