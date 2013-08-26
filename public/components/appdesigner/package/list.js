enyo.kind({
	name: 'AppDesigner.Package.List',
	kind: 'Scroller',
	fit: true,
	classes: 'enyo-fit',
	touch: true,
	components: [
		{
			style: 'padding: 10px;',
			components: [
				{
					name: 'packages',
					kind: 'onyx.Groupbox',
					components: [
						{ kind: 'onyx.GroupboxHeader', content: 'Packages' }
					]
				}
			]
		}
	],
	load: function() {
		var self = this;

		// Clear package list
		self.$.packages.destroyComponents();

		var AppDesigner = App.Engine('AppDesigner');
		AppDesigner.getPackages('fred', 'nas', {}, function(err, packages) {

			for (var packageName in packages) {
				self.$.packages.createComponent({
					content: packageName,
					classes: 'appdesigner-package-item'
				});
			}

			self.$.packages.render();
		});
	}
});
