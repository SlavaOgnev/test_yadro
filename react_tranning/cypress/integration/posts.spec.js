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
    // it('should create a new post', () => {
    //     // Открываем модальное окно
    //     cy.get('button').contains('Сделать новый пост').click();
    //
    //     // Заполняем форму создания поста
    //     cy.get('input[name="title"]').type('New Post');
    //     cy.get('textarea[name="body"]').type('New Post Content');
    //     cy.get('button').contains('Добавить').click();
    //
    //     // Проверяем, что пост появился
    //     cy.get('.post-item').should('have.length', 4);
    //     cy.get('.post-item').last().contains('New Post');
    // });
    //
    // it('should delete a post', () => {
    //     // Проверяем, что есть 3 поста
    //     cy.get('.post-item').should('have.length', 3);
    //
    //     // Удаляем первый пост
    //     cy.get('.post-item').first().find('button').contains('Удалить').click();
    //
    //     // Проверяем, что осталось 2 поста
    //     cy.get('.post-item').should('have.length', 2);
    // });
    //
    // it('should filter posts by title', () => {
    //     // Вводим текст для поиска
    //     cy.get('input[placeholder="Поиск..."]').type('Test Post 2');
    //
    //     // Проверяем, что отображается только один пост
    //     cy.get('.post-item').should('have.length', 1);
    //     cy.get('.post-item').first().contains('Test Post 2');
    // });
    //
    // it('should sort posts by title', () => {
    //     // Выбираем сортировку
    //     cy.get('select').select('title');
    //
    //     // Проверяем порядок постов
    //     cy.get('.post-item').first().contains('Test Post 1'); // Первый пост
    //     cy.get('.post-item').last().contains('Test Post 3'); // Последний пост
    // });
    //
    // it('should navigate through pagination', () => {
    //     // Мокаем запрос для второй страницы
    //     cy.intercept('GET', '**/posts?_limit=10&_page=2', {
    //         body: [
    //             { id: 11, title: 'Test Post 11', body: 'Test content 11' },
    //             { id: 12, title: 'Test Post 12', body: 'Test content 12' }
    //         ],
    //         headers: { 'x-total-count': '12' }
    //     }).as('getPostsPage2');
    //
    //     // Кликаем на кнопку 2-й страницы
    //     cy.get('.pagination').contains('2').click();
    //
    //     // Ждем завершения запроса
    //     cy.wait('@getPostsPage2');
    //
    //     // Проверяем, что посты обновились
    //     cy.get('.post-item').should('have.length', 2);
    //     cy.get('.post-item').first().contains('Test Post 11');
    // });
});
