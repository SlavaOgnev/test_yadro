describe('Posts Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/posts?_limit=10&_page=1', {
      body: [
        { id: 1, title: 'Test Post 1', body: 'Test content 1' },
        { id: 2, title: 'Test Post 2', body: 'Test content 2' },
        { id: 3, title: 'Test Post 3', body: 'Test content 3' }
      ],
      headers: { 'x-total-count': '3' }
    }).as('getPosts');

    cy.visit('/posts');
  });

  it('should fetch and display posts', () => {
    cy.wait('@getPosts');

    cy.get('.post').should('have.length', 3);
    cy.get('.post').first().contains('Test Post 1');
  });
  //
  it('should create a new post', () => {
      cy.get('button').contains('Сделать новый пост').click();

      cy.get('input[placeholder="Название поста"]').type('New Post');
      cy.get('input[placeholder="Описание поста"]').type('Ура пост');
      cy.get('button').contains('Создать пост').click();

      cy.get('.post').should('have.length', 4);
      cy.get('.post').last().contains('New Post');
  });
  //
  it('should delete a post', () => {
      cy.get('.post').should('have.length', 3);

      cy.get('.post').first().find('button').contains('Delete').click();

      cy.get('.post').should('have.length', 2);
  });

  it('should filter posts by title', () => {
      cy.get('input[class^="MyInput"]').eq(2).type('Test Post 2');


      cy.get('.post').should('have.length', 1);
      cy.get('.post').first().contains('Test Post 2');
  });
  //
  it('should sort posts by title', () => {
      cy.get('select').select('title');

      cy.get('.post').first().contains('Test Post 1');
      cy.get('.post').last().contains('Test Post 3');
  });
});
