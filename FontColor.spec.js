describe('Editor Testing', function() {
	it('Font Color Button Testing', function() {
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
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Some Text here').type('{selectall}');
		cy.wait(3000);
		cy
			.get(
				'#default-toolbar > app-quill-editor-toolbar > .quill-toolbar > .toolbar-colors > .ql-color.ql-picker > .ql-picker-label'
			)
			.dblclick({ force: true, multiple: true });

		cy.get('#ql-picker-options-15 > [data-value="#e60000"]').click({ force: true, multiple: true });

		
		cy.get('.text-Editor > .ql-container > .ql-editor').type('We Change the font to Red Color').type('{enter}');
	});
});
