describe('Editor Testing', function() {
	it('Font Style & Heading Testing', function() {
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
				'#default-toolbar > app-quill-editor-toolbar > .quill-toolbar > .toolbar-colors > .ql-color.ql-picker > .ql-picker-label'
			)
			.click({ force: true, multiple: true });

		cy.get('#ql-picker-options-15 > [data-value="#e60000"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-12 > [data-value="1"]').click({ force: true, multiple: true });
		cy.get('#ql-picker-options-13 > span:nth-child(1)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Heading 1').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#ffff00"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-12 > [data-value="2"]').click({ force: true, multiple: true });
		cy.get('#ql-picker-options-13 > span:nth-child(2)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Heading 2').type('{enter}');

		cy.get('#ql-picker-options-16 > [data-value="#6b24b2"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-12 > [data-value="3"]').click({ force: true, multiple: true });
		cy.get('#ql-picker-options-13 > span:nth-child(3)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Heading 3').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#008a00"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-12 > [data-value="4"]').click({ force: true, multiple: true });
		cy.get('#ql-picker-options-13 > span:nth-child(4)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Heading 4').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#b26b00"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-12 > [data-value="5"]').click({ force: true, multiple: true });
		cy.get('#ql-picker-options-13 > span:nth-child(5)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Heading 5').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#9933ff"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-12 > [data-label="Normal Text"]').click({ force: true, multiple: true });
		cy.get('#ql-picker-options-13 > span:nth-child(6)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Normal Text').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#444444"]').click({ force: true, multiple: true });
		// cy
		// 	.get(
		// 		'#default-toolbar > app-quill-editor-toolbar > div > span:nth-child(2) > span.ql-size.dropdown-lists-toolbar-fontsize.ql-picker > span.ql-picker-label'
		// 	)
		// 	.click({ force: true, multiple: true });
		// cy.get('#ql-picker-options-20 > [data-value="24px"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-12 > [data-value="6"]').click({ force: true, multiple: true });
		cy.get('#ql-picker-options-13 > span:nth-child(7)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Subtitle').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#5c0000"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(8)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Futura Font Style').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#3d1466"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(9)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Garamond Font Style').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#888888"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(10)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Garamond Premier Pro Font Style').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#ffffcc"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(11)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Georgia').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#66a3e0"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(12').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('ITC Baskerville Font Style').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#0047b2"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(13)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Janson Font Style').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#f06666"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(14)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Lora Font Style').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#cce8cc"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(15)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Minion Pro Font Style').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#b2b200"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(16)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Palatino Font Style').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#66a3e0"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(17)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Papyrus Font Style').type('{enter}');
		cy.get('#ql-picker-options-15 > [data-value="#ebd6ff"]').click({ force: true, multiple: true });

		cy.get('#ql-picker-options-13 > span:nth-child(18)').click({ force: true, multiple: true });
		cy.get('.text-Editor > .ql-container > .ql-editor').type('Times New Roman Font Style').type('{enter}');
		cy.get('#ql-picker-options-16 > [data-value="#b26b00"]').click({ force: true, multiple: true });

		// cy.get('.element__header').click()

		cy.get('.section__header').click({ force: true, multiple: true });

		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Heading 1');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Heading 2');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Heading 3');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Heading 4');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Heading 5');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Normal Text');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Subtitle');

		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Futura Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Garamond Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Garamond Premier Pro Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Georgia');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'ITC Baskerville Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Janson Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Lora Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Minion Pro Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Palatino Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Papyrus Font Style');
		cy.get('.text-Editor > .ql-container > .ql-editor').should('contain.text', 'Times New Roman Font Style');
	});
});
