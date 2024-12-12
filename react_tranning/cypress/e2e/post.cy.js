describe('Posts Page', () => {
  beforeEach(() => {
    // Мокаем запрос для получения постов
    cy.intercept('GET', '**/posts?_limit=10&_page=1', {
      body: [
        { id: 1, title: 'Test Post 1', body: 'Test content 1' },
        { id: 2, title: 'Test Post 2', body: 'Test content 2' },
        { id: 3, title: 'Test Post 3', body: 'Test content 3' }
      ],
      headers: { 'x-total-count': '3' } // Общий счетчик постов для пагинации
    }).as('getPosts');

    // Переход на страницу /posts
    cy.visit('/posts');
  });

  it('should fetch and display posts', () => {
    // Ждем загрузки запросов
    cy.wait('@getPosts');

    // Проверяем, что посты отображаются
    cy.get('.post').should('have.length', 3); // 3 поста
    cy.get('.post').first().contains('Test Post 1'); // Первый пост
  });
  //
  it('should create a new post', () => {
      // Открываем модальное окно
      cy.get('button').contains('Сделать новый пост').click();

      // Заполняем форму создания поста
      cy.get('input[placeholder="Название поста"]').type('New Post');
      cy.get('input[placeholder="Описание поста"]').type('Ура пост');
      cy.get('button').contains('Создать пост').click();

      // Проверяем, что пост появился
      cy.get('.post').should('have.length', 4);
      cy.get('.post').last().contains('New Post');
  });
  //
  it('should delete a post', () => {
      // Проверяем, что есть 3 поста
      cy.get('.post').should('have.length', 3);

      // Удаляем первый пост
      cy.get('.post').first().find('button').contains('Delete').click();

      // Проверяем, что осталось 2 поста
      cy.get('.post').should('have.length', 2);
  });

  it('should filter posts by title', () => {
      // Вводим текст для поиска
      cy.get('input[class^="MyInput"]').eq(2).type('Test Post 2'); // Первый элемент


      // Проверяем, что отображается только один пост
      cy.get('.post').should('have.length', 1);
      cy.get('.post').first().contains('Test Post 2');
  });
  //
  it('should sort posts by title', () => {
      // Выбираем сортировку
      cy.get('select').select('title');

      // Проверяем порядок постов
      cy.get('.post').first().contains('Test Post 1');
      cy.get('.post').last().contains('Test Post 3');
  });
});
