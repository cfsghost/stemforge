enyo.kind({
	name: 'AppDesigner.Package.Panel',
	kind: 'Panels',
	fit: true,
	arrangerKind: 'CollapsingArranger',
	realtimeFit: true,
	wrap: false,
	touch: true,
	draggable: false,
	components: [
		{
			name: 'toolbar',
			kind: 'List',
			classes: 'enyo-unselectable',
			reorderable: true,
			classes: 'enyo-fit',
			style: 'width: 42px;',
			touch: true,
			count: 1,
			components: [
				{
					name: 'item',
					style: 'padding: 5px;',
					components: [
						{ name: 'icon', kind: 'onyx.Icon' }
					]
				}
			],
			onSetupItem: 'setupItem'
		},
		{
			name: 'list',
			kind: 'AppDesigner.Package.List',
			fit: true,
			draggable: false,
		}
	],
	load: function() {
		this.$.list.load()
	},
	setupItem: function(inSender, inEvent) {

		this.$.icon.src = '/img/dark-icons/add.png';
		this.$.icon.srcChanged();
	}
});
