enyo.kind({

	name: 'frex.Dialog.SignIn',
	kind: 'onyx.Popup',
	classes: 'dialog-signin',
	modal: true,
	centered: true,
	floating: true,
	scrim: true,
	autoDismiss: false,
	components: [
		{ content: 'Sign In' },
		{ tag: 'br' },
		{
			components: [
				{ content: 'E-mail' },
				{
					kind: 'onyx.InputDecorator',
					alwaysLooksFocused: true,
					components: [
						{
							kind: 'onyx.Input'
						}
					]
				}
			]
		},
		{
			components: [
				{ content: 'Password' },
				{
					kind: 'onyx.InputDecorator',
					alwaysLooksFocused: true,
					components: [
						{
							kind: 'onyx.Input',
							type: 'password'
						}
					]
				}
			]
		},
		{ kind: 'onyx.Button', content: 'Sign In' },
		{ kind: 'onyx.Button', content: 'Cancel' }
	]
});
