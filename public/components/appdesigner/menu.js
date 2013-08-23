enyo.kind({
	name: 'AppDesigner.Menu',
	kind: 'List',
	classes: 'enyo-unselectable',
	reorderable: true,
	data: [
		{
			icon: 'settings-4',
			name: 'System',
			tooltip: 'Manage system settings'
		},
		{
			icon: 'database',
			name: 'Package',
			tooltip: 'Manage software packages'
		},
		{
			icon: 'code',
			name: 'External App',
			tooltip: 'Manage external application'
		}
	],
	components: [
		{
			name: 'item',
			classes: 'appdesigner-menu-item',
			ontap: 'tapItem',
			components: [
				{ name: 'icon', kind: 'onyx.Icon' },
				{ name: 'label', classes: 'appdesigner-menu-item-label' }
			]
		}
	],
	handlers: {
		onSetupItem: 'setupItem'
	},
	rendered: function() {
		this.inherited(arguments);
		this.setCount(this.data.length);
		this.reset();
	},
	setupItem: function(inSender, inEvent) {
		var i = inEvent.index;
		if (!this.data[i])
			return;

		var item = this.data[i];
		this.$.item.addRemoveClass("onyx-selected", this.isSelected(i));
		this.$.label.setContent(item.name);
		this.$.icon.src = '/img/' + item.icon + '.png';
		this.$.icon.srcChanged();
	},
	tapItem: function(inSender, inEvent) {
	}
});
