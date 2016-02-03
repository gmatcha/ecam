<!--LINEAR DIAGRAM: file inside edit.php-->

<div id=linearDiagram style=margin:0;padding:0>
	<img class=l1 stage=water    src=img/water.png    onclick=window.location="edit.php?level=Water"                       title="WATER SUPPLY"> 
	<img class=l2 stage=waterGen src=img/waterGen.png onclick=window.location="edit.php?level=Water&sublevel=General" 	   title="Water Energy">
	<img class=l2 stage=waterAbs src=img/waterAbs.png onclick=window.location="edit.php?level=Water&sublevel=Abstraction"  title="Water Abstraction" >
	<img class=l2 stage=waterTre src=img/waterTre.png onclick=window.location="edit.php?level=Water&sublevel=Treatment"    title="Water Treatment">
	<img class=l2 stage=waterDis src=img/waterDis.png onclick=window.location="edit.php?level=Water&sublevel=Distribution" title="Water Distribution">
	<img class=l1 stage=waste    src=img/waste.png    onclick=window.location="edit.php?level=Waste"                       title="WASTEWATER"> 
	<img class=l2 stage=wasteGen src=img/wasteGen.png onclick=window.location="edit.php?level=Waste&sublevel=General"      title="Wastewater Energy">
	<img class=l2 stage=wasteCol src=img/wasteCol.png onclick=window.location="edit.php?level=Waste&sublevel=Collection"   title="Wastewater Collection">
	<img class=l2 stage=wasteTre src=img/wasteTre.png onclick=window.location="edit.php?level=Waste&sublevel=Treatment"    title="Wastewater Treatment">
	<img class=l2 stage=wasteDis src=img/wasteDis.png onclick=window.location="edit.php?level=Waste&sublevel=Discharge"    title="Wastewater Discharge">

	<!--line behind images-->
	<style> #linearDiagramLine {position:relative; transform:translateY(-33px);z-index:-1;width:590px;} </style>
	<hr id=linearDiagramLine>
</div>

<style>
	/* linear diagram images */
	img {cursor:pointer;margin:0 1em 0 1em;vertical-align:middle;padding:0} /*icons inside buttons to navigate to Level2*/
	img.l1 {width:40px;} 
	img.l2 {width:30px;}
</style>

<script>
	//go over <img stage=i> to deactivate the ones inactive
	(function()
	{
		var collection = document.querySelectorAll("#linearDiagram img[stage]")
		for(var i=0;i<collection.length;i++)
		{
			var stage = collection[i].getAttribute('stage');
			var isActive = Global.Configuration['Active Stages'][stage]
			if(!isActive)
			{
				collection[i].src="img/"+stage+"-off.png";
				collection[i].onclick="";
				collection[i].style.cursor="default"
				collection[i].title+=" (INACTIVE)"
			}
		}
	})();
</script>

