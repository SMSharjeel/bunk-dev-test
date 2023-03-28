describe('App Load', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Expenses List')
    cy.title().should('equal', 'Frontend');
  });
})

describe('Add New Expense', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('.addExpense').click()
    cy.get("#addExpenseInputName").type("Cypress Test");
    cy.get("#addExpenseInputExpense").clear();
    cy.get("#addExpenseInputExpense").type("10");
    cy.get('#addExpenseSubmitButton').click();
    cy.contains('Cypress Test');
  });
})
