describe('Github Search Test', () => {
  it('Input search keyword "Angular"', () => {
  	cy.visit(Cypress.env('EXTERNAL_API'));

  	cy.get('#standard-basic').type('Ang');
  	cy.get('.MuiButton-containedPrimary').click();
  });

  it('Click Search Button', () => {
    cy.get('#standard-basic').type('ular');
  	cy.get('.MuiButton-containedPrimary').click();
  });

  it('Click Name Sort link of Table', () => {
    cy.get('.MuiButton-containedPrimary').click();

  	cy.get('.MuiDataGrid-columnHeader[data-field="name"]').click();
  	cy.get('.MuiDataGrid-columnHeader[data-field="name"]').click();
  });

  it('Click Owner Sort link of Table', () => {
  	cy.get('.MuiDataGrid-columnHeader[data-field="owner"]').click();
  	cy.get('.MuiDataGrid-columnHeader[data-field="owner"]').click();
  });

  it('Click Stars Sort link of Table', () => {
  	cy.get('.MuiDataGrid-columnHeader[data-field="stargazers_count"]').click();
  	cy.get('.MuiDataGrid-columnHeader[data-field="stargazers_count"]').click();
  });

  it('Click Created at Sort link of Table', () => {
  	cy.get('.MuiDataGrid-columnHeader[data-field="created_at"]').click();
  	cy.get('.MuiDataGrid-columnHeader[data-field="created_at"]').click();
  });

  it('Click Pagination Next Button', () => {
  	cy.get('.MuiTablePagination-actions .MuiIconButton-colorInherit[title="Next page"]').click();
  });

  it('Click Pagination Previous Button', () => {
  	cy.get('.MuiTablePagination-actions .MuiIconButton-colorInherit[title="Previous page"]').click();
  });

  it('Click Pagination Next Button again', () => {
  	cy.get('.MuiTablePagination-actions .MuiIconButton-colorInherit[title="Next page"]').click();
  });

  it('Click Pagination Previous Button again', () => {
  	cy.get('.MuiTablePagination-actions .MuiIconButton-colorInherit[title="Previous page"]').click();
  });

  it('Click Name Sort link of Table again', () => {
  	cy.get('.MuiDataGrid-columnHeader[data-field="name"]').click();
  });

  it('Input search keyword Empty Text', () => {
    cy.visit(Cypress.env('EXTERNAL_API'));

    cy.get('#standard-basic').type(' ');
    cy.get('.MuiButton-containedPrimary').click();
  });

})