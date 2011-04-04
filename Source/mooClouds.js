/*
---
description: mooClouds - A simple mootools class that injects dynamic elements on the page, like clouds

authors:
  - Ennio Pirolo (http://eqepa.com)

license: MIT-style

requires:
  - core/1.2.4.2: 'Fx.morph'

provides: [mooClouds]

...
*/

var mooClouds=new Class({
	
	Implements:Options,
	
	dynCloudsNum:0,
	statCloudsNum:0,
	options:{
		maxDynClouds:0,
		maxStatClouds:0,
		cloudsClassesNum:1,
		cloudsClasses:"clouds",
		containerID:null,
		contX:null,
		contY:null
	},
	cContSizeX:0,
	cContSizeY:0,
	cCont:null,
	
	initialize:function(options){
		this.setOptions(options)
		if(this.options.containerID!=null){
			this.cCont=$(this.options.containerID);
			if(this.cCont!=null){
				this.setContainer();
			}
			else alert("Oops! There was an error with the containers IDs!")
		}
		else alert("Oops! There was an error with the containers IDs!")
	},
	
	addDynamicCloud:function(){
		
		if(this.dynCloudsNum>=this.options.maxDynClouds){
			return false;	
		}
		else{
			var ran = $random(1, this.options.cloudsClassesNum);
			var c=this.getCloud(ran);
			
			var randomDur=$random(200,300);
			randomDur=randomDur*100;
			
			var x=this.cContSizeX;
			var y=this.cContSizeY;
			var move = new Fx.Morph(c, {
				duration:randomDur,
				onComplete:function(){
					var randomDur=$random(200,300);
					randomDur=randomDur*100;
					var randomX=$random(0,x);
					var randomY=$random(0,y);
					//alert(randomX+" "+randomY+" "+randomDur+" "+this.cContSizeX+" "+this.cContSizeY);
					this.start({'left': randomX, 'top': randomY});
					
				}
			});
			
			this.cCont.adopt(c);
			
			var randomX=$random(0,this.cContSizeX);
			var randomY=$random(0,this.cContSizeY);
			move.start({'left': randomX, 'top': randomY});
			this.dynCloudsNum++;
			return true;
			
		}
	},
	
	addStaticCloud:function(){
		
		if(this.statCloudsNum>=this.options.maxStatClouds){
			return false;	
		}
		else{
			
			var ran = $random(1, this.options.cloudsClassesNum);
			var c=this.getCloud(ran);
			this.cCont.adopt(c);
			this.statCloudsNum++;
			return true;
			
		}
	},
	
	getCloud:function(ran){
		
		var c=new Element('div');
		c.addClass(this.options.cloudsClasses);
		c.addClass(this.options.cloudsClasses+""+ran);
		
		var randomX=$random(0,this.cContSizeX);
		var randomY=$random(100,this.cContSizeY);
		
		c.setStyle('left',randomX);
		c.setStyle('top',randomY);
		
		return c;
		
	},
	setContainer:function(){
		
		this.cCont.setStyle("position","relative");
		this.cCont.setStyle("z-index",0);
		this.cCont.setStyle("overflow","hidden");
		
		var x=0;
		if(this.options.contX==null){ x=this.cCont.getParent().getSize().x;}
		else {x=this.options.contX;}
		
		this.cCont.setStyle("width",x);
		
		var y=0;
		if(this.options.contY==null){ y=this.cCont.getParent().getSize().y;}
		else {y=this.options.contY;}
		
		this.cCont.setStyle("height",y);
		
		this.cContSizeX=this.cCont.getSize().x;
		this.cContSizeY=this.cCont.getSize().y;
	},
	generateClouds:function(){
		
		while(this.addDynamicCloud()){
			this.addDynamicCloud();	
		}
		while(this.addStaticCloud()){
			this.addStaticCloud();	
		}
	},
	destroyClouds:function(){
	
		$$("."+this.options.cloudsClasses).destroy();
		this.dynCloudsNum=0;
		this.statCloudsNum=0;
	}
							
});