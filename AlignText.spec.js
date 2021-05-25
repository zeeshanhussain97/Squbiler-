describe('Editor Testing', function() {
	it('Align Text Testing', function() {
		cy.visit('https://www.squibler.io');

		cy.get('#nav-login').click();

		cy.get('#login-already_sec').click();

		cy.get('input[name=email]').should('be.visible').should('be.enabled').type('saadsoft1993@gmail.com');
		cy.get('input[name=password]').should('be.visible').should('be.enabled').type('saad124');

		cy.get('#notLoadingSignIn').should('be.visible').click();

		cy.title().should('eq', 'Squibler: The Best Writing App for Books, Novels and Screenplays');

		cy.reload();

		cy.get(':nth-child(1) > app-template-project-boxes > .project-item > .project-item__thumbnail').click();
		cy.wait(7000);
		cy
			.get(
				'#default-toolbar > app-quill-editor-toolbar > .quill-toolbar > .listsClass > .ql-picker > .ql-picker-label > svg'
			)
			.click({ multiple: true, force: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing Left').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing Left').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing Left').type('{enter}');

		cy.get('#ql-picker-options-17 > [data-value="center"] > svg').click({ multiple: true, force: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing Center').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing Center').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing Center').type('{enter}');

		cy.get('#ql-picker-options-17 > [data-value="right"] > svg').click({ multiple: true, force: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing right').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing right').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing right').type('{enter}');

		cy.get('#ql-picker-options-17 > [data-value="justify"] > svg').click({ multiple: true, force: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing justify').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing justify').type('{enter}');
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Align Text List Testing justify').type('{enter}');
	});
});
