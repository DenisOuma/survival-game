import Player from "./Player.js";

export default class MainScene extends Phaser.Scene {
	constructor() {
		super("MainScene");
	}

	preload() {
		Player.preload(this);
		this.load.image("tiles", "assets/imgs/RPG Nature Tileset.png");
		this.load.tilemapTiledJSON("map", "assets/imgs/map.json");
	}

	create() {
		const map = this.make.tilemap({ key: "map" });
		const tileset = map.addTilesetImage(
			"RPG Nature Tileset",
			"tiles",
			32,
			32,
			0,
			0
		);
		const layer1 = map.createLayer("Tile Layer 1", tileset, 0, 0);
		this.player = new Player({
			scene: this,
			x: 0,
			y: 0,
			texture: "male",
			frame: "townsfolk_m_idle_1",
		});

		this.player.inputKeys = this.input.keyboard.addKeys({
			up: Phaser.Input.Keyboard.KeyCodes.W,
			down: Phaser.Input.Keyboard.KeyCodes.S,
			left: Phaser.Input.Keyboard.KeyCodes.A,
			right: Phaser.Input.Keyboard.KeyCodes.D,
		});
	}
	update() {
		this.player.update();
	}
}
