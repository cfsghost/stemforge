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
						{ content: 'samba' },
						{ content: 'xserver-xorg' }
					]
				}
			]
		}
	],
	load: function() {
		console.log(123123123);
	}
});
