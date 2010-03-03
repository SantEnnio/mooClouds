mooClouds
==================

A simple mootools class that injects dynamic elements on the page, like clouds

![mooClouds](http://eqepa.com/Playground/Mootools/mooClouds/mooClouds187x80.png)
 
How to use
----------

*HTML*

	#HTML
	<div id="container">	
	</div>

In the html file you have only to set a div with an id.

*JS*

	#JS
    var mc=new mooClouds({
			maxDynClouds:5,
			maxStatClouds:10,
			cloudsClassesNum:4,
			cloudsClasses:"clouds",
			containerID:"container",
			contX:null,
			contY:null,
			
		});
	mc.generateClouds(); //injects the clouds in the div
	
	mc.destroyClouds(); //destroys all clouds created
	
	
*PARAMS*

* maxDynClouds: number of dynamic clouds to inject. Default value: 0.

* maxStatClouds: number of static clouds to inject. Default value: 0.

* cloudsClassesNum: number of css classes of the clouds. The class will choose a random css class for every cloud that injects. Default value: 1.

* cloudsClasses: name of the clouds css class. For more details view the css section. Default value: "clouds".

* containerID: the id of the container div. Default value:null.

* contX: the width (in px) of the container div. If it is set to null the container will take the dimension from its parent. Default value: null.

* contY: the height (in px) of the container div. If it is set to null the container will take the dimension from its parent. Default value: null.

*CSS*

	#CSS
	.clouds{
		z-index:3;
		width:300px;
		height:200px;
		position:absolute;
	}
	.clouds1{
		background:url(Cloud300x200_1.png) no-repeat center;
	}
	.clouds2{
		background:url(Cloud300x200_2.png) no-repeat center;
	}
	.clouds3{
		background:url(Cloud300x200_3.png) no-repeat center;
	}
	.clouds4{
		background:url(Cloud500x400_1.png) no-repeat center;
		width:500px;
		height:400px;
	}
	
All clouds will have two css classes: the first one is what you specify in the cloudsClasses parameter; the second one is the first plus a random number from 1 to cloudsClassesNum.
So you can create all css classes you want, and you can put inside what do you want (stars, fish, planets...).


*NOTES, DEMO & DOCUMENTATION*

The class is tested with Firefox 3.5, Chrome 4.0 and Internet Explorer 8.
[Here](http://eqepa.com/Playground/Mootools/mooClouds/Example/demo.html) it is a basic demo with 5 dynamic and 10 static clouds.
View the [mooClouds page](http://eqepa.com/en/projects/mootools-plugins/mooclouds/) for more detailed documentation.
For comments and bug report please leave a comment on this [presentation post] (http://eqepa.com/en/blog/2010/03/mooclouds-0-6-released/).