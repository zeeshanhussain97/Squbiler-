describe('Blog Hover Links Test', function() {
	it('How to write a book', function() {
		cy.visit('https://www.squibler.io');
		cy.title().should('eq', 'Squibler: Where writers get serious');

		cy.contains('Blog').trigger('mouseover').invoke('show').should('be.visible');

		cy.contains('How to Write a Book').click({ force: true });

		cy.title().should('eq', 'How to Write a Book [In 13 Steps] – Squibler');
		cy.go('back');
	});

	it('How To Write a Novel', function() {
		cy.title().should('eq', 'Squibler: Where writers get serious');

		cy.contains('Blog').trigger('mouseover').invoke('show').should('be.visible');

		cy.contains('How to Write a Novel').click({ force: true });

		cy.title().should('eq', 'How to Write a Novel that Gets Read [In 15 Steps] – Squibler');
		cy.go('back');
	});
	it('How To Write a Screenplay', function() {
		cy.title().should('eq', 'Squibler: Where writers get serious');

		cy.contains('Blog').trigger('mouseover').invoke('show').should('be.visible');

		cy.contains(' How to Write a Screenplay').click({ force: true });

		cy.title().should('eq', 'How to Write a Screenplay: Script Writing in 15 Steps – Squibler');
		cy.go('back');
	});
	it('How To Write a Short Story', function() {
		cy.title().should('eq', 'Squibler: Where writers get serious');

		cy.contains('Blog').trigger('mouseover').invoke('show').should('be.visible');

		cy.contains('How to Write a Short Story').click({ force: true });

		cy.title().should('eq', 'How to Write a Short Story That Gets Read (In 7 Steps) – Squibler');
		cy.go('back');
	});
	it('Book Writing Templates', function() {
		cy.title().should('eq', 'Squibler: Where writers get serious');

		cy.contains('Blog').trigger('mouseover').invoke('show').should('be.visible');

		cy.contains('Book Writing Templates').click({ force: true });

		cy.title().should('eq', '9 Best Book Writing Templates [+ Free Download] – Squibler');
		cy.go('back');
	});
	it('Novel Outline Templates', function() {
		cy.title().should('eq', 'Squibler: Where writers get serious');

		cy.contains('Blog').trigger('mouseover').invoke('show').should('be.visible');

		cy.contains('Novel Outline Templates').click({ force: true });

		cy.title().should('eq', 'How to Outline a Novel in 7 Steps [+Free Template] – Squibler');
		cy.go('back');
	});
});
