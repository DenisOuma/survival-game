export default class MainScene extends Phaser.Scene {
	constructor() {
		super("MainScene");
	}

	preload() {
		console.log("preload");
	}

	create() {
		console.log("create");
		this.player = new Phaser.Physics.Matter.Sprite(this.matter.world);
		this.inputKeys = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			right: Phaser.Input.Keyboard.KeyCodes.D,
		});
	}

	update() {
		console.log("update");
		const speed = 2.5;
		let playerVelocity = new Phaser.Math.Vector2();
		if (this.inputKeys.left.isDown) {
			playerVelocity.X = -1;
		} else if (this.inputKeys.right.isDown) {
			playerVelocity.X = 1;
		}
	}
}