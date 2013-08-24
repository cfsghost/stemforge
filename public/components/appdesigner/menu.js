enyo.kind({
	name: 'AppDesigner.Menu',
	kind: 'List',
	classes: 'enyo-unselectable appdesigner-menu',
	reorderable: true,
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
	events: {
		onSelected: ''
	},
	tapItem: function(inSender, inEvent) {

		// Fire event
		this.doSelected({ index: inEvent.index });
	}
});
