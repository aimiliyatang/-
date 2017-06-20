define(function(){
	function RandomColor(){

	}

	RandomColor.prototype={
		constructor:RandomColor,
		randomNum : function(){
			return Math.floor(Math.random()*256);
		},
		color:function(){
			var r=this.randomNum();
			var g=this.randomNum();
			var b=this.randomNum();
			return "rgba("+r+","+g+","+b+",1)";
		}
	};
	return new RandomColor();
});