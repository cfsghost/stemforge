enyo.kind({
	name: 'AppDesigner.Menu',
	kind: enyo.Component,
	data: [
		{
			name: 'System',
			tooltip: 'Manage system settings'
		},
		{
			name: 'Package',
			tooltip: 'Manage software packages'
		},
		{
			name: 'External App',
			tooltip: 'Manage external application'
		}
	],
	components: [
		{
			name: 'list',
			kind: 'List',
			classes: 'enyo-unselectable',
			fit: true,
			reorderable: true,
			components: [
				{
					name: 'item',
					classes: 'appdesigner-menu-item',
					components: [
						{ name: 'label', classes: 'appdesigner-menu-item-label' },
					]
				}
			],
			onSetupItem: 'setupItem'
		}
	],
	init: function() {
		console.log(this);
		//this.$.list.render();
		//this.inherited(arguments);
		this.$.list.setCount(this.data.length);
		this.$.list.reset();
	},
	setupItem: function(inSender, inEvent) {
		console.log(123);
		var i = inEvent.index;
		if (!this.data[i])
			return;

		var item = this.data[i];
		this.$.label.setContent(item.name);
	}
});
