enyo.kind({
	name: 'AppDesigner.Package.Panel',
	kind: 'FittableRows',
	fit: true,
	components: [
		{
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
					reorderable: true,
					classes: 'enyo-fit appdesigner-package-toolbar',
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
				},
			]
		},
		{
			name: 'addPackageDialog',
			kind: 'onyx.Popup',
			modal: true,
			centered: true,
			floating: true,
			scrim: true,
	//		autoDismiss: false,
			style: 'background: white; width: 70%; height: 70%;',
			components: [
				{ content: 'Add Pacakge' }
			]
		}
	],
	load: function() {
		this.$.list.load();
	},
	setupItem: function(inSender, inEvent) {

		this.$.item.ontap = 'addPackage';
		this.$.icon.src = '/img/dark-icons/add.png';
		this.$.icon.srcChanged();
	},
	addPackage: function() {
		this.$.addPackageDialog.show();
	}
});
