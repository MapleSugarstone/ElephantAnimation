class Elephant {
	constructor(game) {
		this.game = game;
		this.slowness = 0.01
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Elephant.png"), 0, 0, 50, 48, 8, 0.1+this.slowness)
		this.speed = 75;
		this.x = -50;
		this.y = 0;

	};

	update() {
		this.x += this.speed * this.game.clockTick;


	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}