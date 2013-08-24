enyo.kind({
	name: 'AppDesigner.Panel',
	kind: 'Panels',
	classes: 'panel',
	fit: true,
	arrangerKind: 'CollapsingArranger',
	realtimeFit: true,
	wrap: false,
	data: [
		{
			id: 'system',
			icon: 'settings-4',
			name: 'System',
			tooltip: 'Manage system settings'
		},
		{
			id: 'package',
			icon: 'database',
			name: 'Package',
			tooltip: 'Manage software packages'
		},
		{
			id: 'external_app',
			icon: 'code',
			name: 'External App',
			tooltip: 'Manage external application'
		}
	],
	components: [
		{
			name: 'menu',
			kind: 'AppDesigner.Menu',
			classes: 'enyo-fit',
			fit: true,
			style: 'width: 200px;',
			touch: true,
			onSelected: 'onSelected',
			onSetupItem: 'onSetupItem'
		},
		{
			name: 'panels',
			kind: 'Panels',
			classes: 'panel',
			arrangerKind: 'CardSlideInArranger',
			fit: true,
			draggable: false,
			realtimeFit: true,
			wrap: false,
			components: [
				{
					kind: 'AppDesigner.System.Panel',
				},
				{
					kind: 'AppDesigner.System.Panel',
				},
				{
					kind: 'AppDesigner.System.Panel',
				}
			]
		}
	],
	rendered: function() {
		this.inherited(arguments);
		this.$.menu.setCount(this.data.length);
		this.$.menu.reset();
		this.$.menu.select(0);
	},
	onSelected: function(inSender, inEvent) {
		var i = inEvent.index;

		this.$.panels.setIndex(i);
	},
	onSetupItem: function(inSender, inEvent) {
		var menu = inSender;
		var i = inEvent.index;

		var item = this.data[i];
		menu.$.item.addRemoveClass("onyx-selected", menu.isSelected(i));
		menu.$.label.setContent(item.name);
		menu.$.icon.src = '/img/dark-icons/' + item.icon + '.png';
		menu.$.icon.srcChanged();
	},
});
