describe('Editor Testing', function() {
	it('Bold Button Testing', function() {
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

		cy.get('.section__header').click();

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Bold Text:').type('{enter}');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz ').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-bold').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Zeeshan').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-bold').dblclick({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz Zeeshan Hussain').type('{enter}');

		cy
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.click({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hafiz ')
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.dblclick({ force: true, multiple: true });

		cy
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Zeeshan ')
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.click({ force: true, multiple: true });

		cy
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hussain ')
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.dblclick({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Qureshi ');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('{selectall}');

		cy.get('.ql-formats > .toolbar-icons.ql-bold').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Mr.Zee ');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('{enter}');
	});

	it('Italic Button Testing ', function() {
		cy.get('.ql-formats > .toolbar-icons.ql-bold').dblclick({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Italic Text:').type('{enter}');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz ').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-italic').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Zeeshan').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-italic').dblclick({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz Zeeshan Hussain').type('{enter}');

		cy
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.click({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hafiz ')
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.dblclick({ force: true, multiple: true });

		cy
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.click({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Zeeshan ')
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.dblclick({ force: true, multiple: true })
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.click({ force: true, multiple: true });

		cy
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hussain ')
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.dblclick({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Qureshi ');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('{selectall}');

		cy.get('.ql-formats > .toolbar-icons.ql-italic').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Mr.Zee ');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('{enter}');
	});

	it('Underline Button Testing ', function() {
		cy.get('.ql-formats > .toolbar-icons.ql-bold').dblclick({ force: true, multiple: true });
		cy.get('.ql-formats > .toolbar-icons.ql-italic').dblclick({ force: true, multiple: true });

		cy.get('.ql-formats > .toolbar-icons.ql-underline').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Underline Text:').type('{enter}');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz ').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-underline').dblclick({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Zeeshan').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-underline').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz Zeeshan Hussain').type('{enter}');

		cy
			.get('.ql-formats > .toolbar-icons.ql-underline')
			.dblclick({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hafiz ')
			.get('.ql-formats > .toolbar-icons.ql-underline')
			.click({ force: true, multiple: true });

		cy
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.click({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Zeeshan ')
			.get('.ql-formats > .toolbar-icons.ql-underline')
			.dblclick({ force: true, multiple: true });

		cy
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.dblclick({ force: true, multiple: true })
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.click({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hussain ')
			.get('.ql-formats > .toolbar-icons.ql-underline')
			.click({ force: true, multiple: true });

		cy
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.dblclick({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Qureshi');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('{selectall}');

		cy.get('.ql-formats > .toolbar-icons.ql-underline').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Mr.Zee ');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('{enter}');
	});

	it('Strike Button Testing ', function() {
		cy.get('.ql-formats > .toolbar-icons.ql-bold').dblclick({ force: true, multiple: true });
		cy.get('.ql-formats > .toolbar-icons.ql-italic').dblclick({ force: true, multiple: true });
		cy.get('.ql-formats > .toolbar-icons.ql-underline').dblclick({ force: true, multiple: true });

		cy.get('.ql-formats > .toolbar-icons.ql-strike').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Strike Text:').type('{enter}');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz ').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-strike').dblclick({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Zeeshan').type('{enter}');

		cy.get('.ql-formats > .toolbar-icons.ql-strike').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Hafiz Zeeshan Hussain').type('{enter}');

		cy
			.get('.ql-formats > .toolbar-icons.ql-strike')
			.dblclick({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hafiz ')
			.get('.ql-formats > .toolbar-icons.ql-strike')
			.click({ force: true, multiple: true });

		cy
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.click({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Zeeshan ')
			.get('.ql-formats > .toolbar-icons.ql-strike')
			.dblclick({ force: true, multiple: true });

		cy
			.get('.ql-formats > .toolbar-icons.ql-italic')
			.dblclick({ force: true, multiple: true })
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.click({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Hussain ')
			.get('.ql-formats > .toolbar-icons.ql-strike')
			.click({ force: true, multiple: true });

		cy
			.get('.ql-formats > .toolbar-icons.ql-bold')
			.dblclick({ force: true, multiple: true })
			.get('.text-Editor > .ql-container > .ql-editor')
			.type('Qureshi');

		cy.get('.text-Editor > .ql-container > .ql-editor').type('{selectall}');

		cy.get('.ql-formats > .toolbar-icons.ql-strike').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').type('Mr.Zee ');
	});
});
