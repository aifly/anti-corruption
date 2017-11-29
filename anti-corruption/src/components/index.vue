<template>
	<div class="zmiti-index-main-ui lt-full" @touchmove='touchmove($event)' @touchstart='touchstart($event)' @touchend='touchend($event)' >
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
				setInterval(()=>{
					this.transX+=this.speed;
					if(this.transX<=-height/2){
						this.transX = 0;
					}
				},20)
			},100)
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