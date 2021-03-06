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
							layoutKind: 'FittableColumnsLayout',
							fit: true,
							components: [
								{ classes: 'field-label', content: 'Hostname' },
								{ name: 'hostname', kind: 'onyx.Input', classes: 'field-inputbox', fit: true, style: 'padding-left: 10px;' }
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
							layoutKind: 'FittableColumnsLayout',
							fit: true,
							components: [
								{ classes: 'field-label', content: 'Root Password' },
								{ kind: 'onyx.Input', type: 'password', classes: 'field-inputbox', style: 'padding-left: 10px;' }
							]
						},
						{
							kind: 'onyx.InputDecorator',
							layoutKind: 'FittableColumnsLayout',
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
	],
	load: function() {
		var self = this;

		var AppDesigner = App.Engine('AppDesigner');
		AppDesigner.getSettings('fred', 'nas', {}, function(err, settings) {
			self.$.hostname.setValue(settings.hostname);
		});
	}
});
