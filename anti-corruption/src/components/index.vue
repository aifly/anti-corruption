<template>
	<div  :class="{active:isJumping}" class="zmiti-index-main-ui lt-full" id="zmiti-index-scene">
		<!-- <canvas width="78" height="50" ref='canvas' class="zmiti-person-canvas"></canvas>
		<img :style="{WebkitTransform:'translate('+jumperTransX+'px,0)',opacity:jumperTransX>0?1:0}" class="zmiti-index-jump" ref='jumper' src="../assets/images/jump.png" width="78">
		<img ref='person-img' src='../assets/images/person.png' style="opacity:0;position:absolute;left: -599px;width: auto"/>
		<div ref='aa' class="zmiti-index-bottom-img-C" :style="{WebkitTransform:'translate(0,'+transX+'px)'}">
			<img ref='bg' src="../assets/images/bg.png">
			<img src="../assets/images/bg.png">
		</div>
		<template>
			<div ref='energy' class="zmiti-index-energy" :style="{left:energy.left+'px',top:energy.top+'px',WebkitTransform:'translate(0,'+energy.transY+'px)'}" v-for='energy in energyList'>
				<img src='../assets/images/energy.png' alt="">
			</div>
		</template> -->
	</div>
</template>

<script>
	import './css/index.css';
	export default{
		data(){
			return {
				transX:0,
				jumperTransX:0,
				isJumping:false,
				step:.125,
				viewW:document.documentElement.clientWidth,
				viewH:document.documentElement.clientHeight,
				energyList:[
					{
						id:'',
						left:180,
						top:document.documentElement.clientHeight,
						transY:0
					}
				]
			}
		},
		created(){

			return;

			function preload() {
			    game.load.tilemap('mario', './dist/static/json/data.json', null, Phaser.Tilemap.TILED_JSON);
			    game.load.image('tiles', './static/img/bg.d5967e8.png');
			    game.load.image('player', './static/img/bg.d5967e8.png');
			}

			var map;
			var layer;
			var p;
			var cursors;

			function create() {
			    map = game.add.tilemap('mario');
			    // 姝ゅ鐨凷uperMarioBros-World1-1涓巎son涓璽ilesets鐨刵ame瀵瑰簲
			    map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
			    // 姝ゅ涓巎son涓璴ayer鐨刵ame瀵瑰簲
			    layer = map.createLayer('World1');
			    // resizeWorld浼氭牴鎹畉ilemap閲嶆柊璁剧疆world鐨勫ぇ灏�
			    layer.resizeWorld();
			    // wrap涓簍rue浼氬～鍏呮暣涓尯鍩�
			    layer.wrap = true;
			    cursors = game.input.keyboard.createCursorKeys();
			}

			function update() {
			    if (cursors.left.isDown) {
			        game.camera.y -= 8;
			    } else if (cursors.right.isDown) {
			        game.camera.y += 8;
			    }
			    if (cursors.up.isDown) {
			        game.camera.y -= 8;
			    } else if (cursors.down.isDown) {
			        game.camera.y += 8;
			    }
			}



			var game = new Phaser.Game(this.viewW,this.viewH, Phaser.AUTO, 'zmiti-index-scene', { preload: preload, create: create, update: update });

			return;
			var img = new Image();
			img.onload = ()=>{
				var height = this.$refs.aa.offsetHeight;
				

				var x =-1;
				this.speed = x;


				var canvas = this.$refs['canvas'];
				var context = canvas.getContext('2d');

				var viewH = document.documentElement.clientHeight;

				var img = this.$refs['person-img'];
				
				var imgH = img.height/3,
					imgW = img.width,
					canvasW = canvas.width,
					canvasH = canvas.height,
					personIndex = 0;

					this.personIndex = personIndex;



					var render = ()=>{

						

						this.transX+=this.speed;
						if(this.isJumping){
							if(this.jumperTransX>70){
								this.jumperTransX-=2;
							}
							else{
								this.jumperTransX+=2;	
							}
						}
						if(this.transX<=-height/2){
							this.transX = 0;
						}

						this.energyList.forEach((item,i)=>{
							item.transY += this.speed;
							if(item.transY<-viewH){
								item.transY = 0;
							}
						})
					
						
						this.personIndex+=this.step;

						if(this.personIndex%1 === 0){
							context.clearRect(0,0,canvasW,canvasH)
							context.drawImage(img,0,(this.personIndex%3)*imgH,imgW,imgH,0,0,canvasW,canvasH)
						}


						webkitRequestAnimationFrame(render)
					}

					render(); 
			}
			img.src='./static/img/bg.d5967e8.png';

		},
		methods:{



			jumping(){
				if(this.isJumping){
					return;
				}

				//this.isJumping = true;

				setTimeout(()=>{
					this.isJumping = false;					
				},2000)
			},
			touchstart(e){
				this.startY = e.changedTouches[0].pageY;

				this.startTime = new Date().getTime();
				this.initSpeedTimer && clearTimeout(this.initSpeedTimer)
			},
			touchmove(e){
				e.preventDefault();
			//	console.log(e);
			},
			touchend(e){
				this.endY = e.changedTouches[0].pageY;
				var disY = this.startY -this.endY;
				if(disY>50){
					this.endTime = new Date().getTime()

					this.speed = - Math.min((this.endTime - this.startTime)/20,10);
					this.personIndex = 0;
					if(this.speed<-4){
						this.step = .25;
					}
					 if(this.speed<-6){
						this.step = .5
					}
					//this.step = .5

					document.title = this.step;

					//this.startTime = this.endTime;
				}
				this.initSpeedTimer = setTimeout(()=>{
					this.speed = -1;
					this.step = .125
				},500)
			}
		}
	}
</script>

<style scoped>
	@-webkit-keyframes bgMove {
	to {

	}
}
</style>