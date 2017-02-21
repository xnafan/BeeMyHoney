var PreloadState = {

	preload: function () {

		//load and position preloadBar
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);

		//gfx
		this.load.image('logo', 'gfx/logo.png' + cacheBuster());
		this.load.image('bee', 'gfx/bee.png' + cacheBuster());
		this.load.image('tiles', 'gfx/tiles.png' + cacheBuster());
		//animations
		// this.load.spritesheet('selectionImage', "gfx/selection.png" + cacheBuster(), 64, 64, 2);

	},

	create: function () {	
		this.game.state.start('SplashState');
	}

};

function cacheBuster() {return "?cb=" + Math.random();}