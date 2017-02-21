var SplashState = {

	preload: function () {

		this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.logo.anchor.setTo(0.5, 0.5);
	},

	create: function () {
	    setTimeout("this.game.state.start('GameState', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideBottom);", 2000);
	}
};