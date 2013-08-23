enyo.kind({
	name: 'AppDesigner.System.Panel',
	kind: 'Scroller',
	fit: true,
	classes: 'enyo-fit',
	touch: true,
	components: [
		{
			classes: 'appdesigner-system-panel',
			components: [
				{
					kind: 'onyx.Groupbox',
					components: [
						{ kind: 'onyx.GroupboxHeader', content: 'General Settings' },
						{
							kind: 'onyx.InputDecorator',
							fit: true,
							components: [
								{ classes: 'field-label', content: 'Hostname' },
								{ kind: 'onyx.Input', classes: 'field-inputbox', style: 'padding-left: 10px;', value: 'StemOS' }
							]
						}
					]
				},
				{ tag: 'br' },
				{
					kind: 'onyx.Groupbox',
					components: [
						{ kind: 'onyx.GroupboxHeader', content: 'Password' },
						{
							kind: 'onyx.InputDecorator',
							fit: true,
							components: [
								{ classes: 'field-label', content: 'Root Password' },
								{ kind: 'onyx.Input', type: 'password', classes: 'field-inputbox', style: 'padding-left: 10px;' }
							]
						},
						{
							kind: 'onyx.InputDecorator',
							fit: true,
							components: [
								{ classes: 'field-label', content: 'Confirm' },
								{ kind: 'onyx.Input', type: 'password', classes: 'field-inputbox', style: 'padding-left: 10px;' }
							]
						}
					]
				}
			]
		}
	]
});
