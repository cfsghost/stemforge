enyo.kind({
	name: 'AppDesigner.Package.Panel',
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
						{ kind: 'onyx.GroupboxHeader', content: 'Packages' },
						{
							kind: 'onyx.InputDecorator',
							layoutKind: 'FittableColumnsLayout',
							fit: true,
							components: [
								{ classes: 'field-label', content: 'Hostname' },
								{ kind: 'onyx.Input', classes: 'field-inputbox', fit: true, style: 'padding-left: 10px;', value: 'StemOS' }
							]
						}
					]
				}
			]
		}
	]
});
