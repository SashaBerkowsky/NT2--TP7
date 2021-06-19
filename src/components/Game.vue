<template>
  <div id="container">
    <div v-for="i in squares" :key="i">
      <div
        class="square"
        :style="colors[i - 1]"
        @click="(event) => checkColor(event)"
      ></div>
    </div>
  </div>
</template>

<script lang="js">


  export default  {
    name: 'componentes-game',

    mounted () {
      this.restart()
      this.$store.dispatch('setRestart', this.restart)
    },
    data () {
      return {  
        squares: this.isHardVuex ? 6: 3,
        colors: [],
        pickedColor: "",
      }
    },
    watch:{
      isHardVuex:function(){
        this.isHardVuex? this.squares = 6 : this.squares =3
        this.restart()
      },
    },
    methods: {
      randomInt(){
        return Math.floor(Math.random() * 256)
        
      },
      squareColor(){
        return  {background: "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" };
      },
      createNewColors(){
        this.colors = []
        for(let i =0;i<this.squares; i++){
          this.colors.push(this.squareColor())
        }
        this.pickedColor = this.colors[this.PickColor()].background
        this.$store.dispatch('changePickedColor', this.pickedColor)
      },
      PickColor(){
        return Math.floor(Math.random() * this.squares );
      },
      restart(){
        this.$store.dispatch('changeGane', false)
        this.createNewColors()
      },
      setAllColorsTo(color){
        this.colors.forEach( (c)=> {
        c.background = color;
       });
      },
      checkColor(event){
        const squareColor = event.target.style.background
        const gane = squareColor == this.pickedColorVuex
        if(gane){
          this.setAllColorsTo(this.pickedColorVuex)
        } else{
          event.target.style.background = "#232323"
        }
        this.$store.dispatch('changeGane', gane)
      }
    },
    computed: {
      pickedColorVuex(){
        return this.$store.state.pickedColor
      },
      isHardVuex(){
        return this.$store.state.isHard
      },
    }
}


</script>

<style scoped lang="css">
#container {
  margin: 20px auto;
  max-width: 600px;
}
.square {
  width: 30%;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
