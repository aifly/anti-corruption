<template>
	<div class="zmiti-index-main-ui lt-full" @touchmove='touchmove($event)' @touchstart='touchstart($event)' @touchend='touchend($event)' >
		<canvas width="78" height="75" ref='canvas' class="zmiti-person-canvas"></canvas>
		<img ref='person-img' src='../assets/images/person.png' style="opacity:0;position:absolute;left: -599px;width: auto"/>
		<div ref='aa' class="zmiti-index-bottom-img-C" :style="{transform:'translate(0,'+transX+'px)'}">
			<img src="../assets/images/bg.png">
			<img src="../assets/images/bg.png">
		</div>
	</div>
</template>

<script>
	import './css/index.css';
	export default{
		data(){
			return {
				transX:0
			}
		},
		created(){

			setTimeout(()=>{
				var height = this.$refs.aa.offsetHeight;
				var x =-1;
				this.speed = x;


				var canvas = this.$refs['canvas'];
				var context = canvas.getContext('2d');

				var img = this.$refs['person-img'];
				console.log(canvas.width,canvas.height)

				var imgH = img.height/3,
					imgW = img.width,
					canvasW = canvas.width,
					canvasH = canvas.height,
					personIndex = 0;

					var render = ()=>{
						this.transX+=this.speed;
						if(this.transX<=-height/2){
							this.transX = 0;
						}
						
						personIndex+=.25;

						if(personIndex%1 === 0){
							context.clearRect(0,0,canvasW,canvasH)
							context.drawImage(img,0,(personIndex%3)*imgH,imgW,imgH,0,0,canvasW,canvasH)
						}

						webkitRequestAnimationFrame(render)
					}

					render();

 

				
				
				
				





			
			},100);


			

		},
		methods:{
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

					console.log(this.speed )
					//this.startTime = this.endTime;
					this.initSpeedTimer = setTimeout(()=>{
						this.speed = -1;
					},100)
				}
			}
		}
	}
</script>