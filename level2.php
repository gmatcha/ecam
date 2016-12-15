<!--fragment inside edit.php-->
<script>
	var level2 = {};//namespace
	/** 
	 * Transform a <td> cell to a <input> to make modifications in the Global object
	 * @param {element} element - the <td> cell
	 */
	level2.transformField=function (element)
	{
		element.removeAttribute('onclick');
		element.innerHTML="";

		var field=element.parentNode.getAttribute('field');
		var input=document.createElement('input');
		element.appendChild(input);
		input.id=field;
		input.classList.add('input');
		input.autocomplete='off';
		//value converted
		var multiplier = Units.multiplier(field);
		var currentValue = CurrentLevel[field]/multiplier;
		input.value=currentValue;

		input.onblur=function(){level2.updateField(field,input.value)};
		input.onkeypress=function(event)
		{ 
			if(event.which==13) input.onblur() //somehow creates an error but does not affect to anything
		}
		input.onkeydown=function(event)
		{
			function updateChart()
			{
				//problem: this only updates if we are plotting inputs. WHY?
				var newValue=parseFloat(input.value);
				if(isNaN(newValue))newValue=0;
				newValue*=Units.multiplier(field);
				//only update real inputs
				if(typeof(CurrentLevel[field])!="function")
				{
					CurrentLevel[field]=newValue;
					if(substages.length==1) substages[0][field]=newValue;
				}
				//try to draw charts
				drawCharts();
			}
			switch(event.which)
			{
				case 38: //up key
					if(!event.shiftKey){input.value++;updateChart();} 
					break;
				case 40: //down key
					if(!event.shiftKey){input.value--;updateChart();} 
					break;
				case  9: //TAB
					setTimeout(function()
					{
						var el=document.querySelector('#inputs tr[field='+field+']').nextSibling.childNodes[2];
						if(el){el.onclick();}
					},100);
					break;
			}
		}
		input.select();
	}

	/** Redisplay table id=inputs */
	level2.updateInputs=function ()
	{
		var t=document.getElementById('inputs')
		while(t.rows.length>2){t.deleteRow(-1)}
		for(var field in CurrentLevel)
		{
			/*first check if function*/
			if(typeof(CurrentLevel[field])!="number")
			{
				/*then, check if is calculated variable "c_xxxxxx" */
				if(field.search(/^c_/)==-1) continue;
			}

			/*check if is an option*/
			if(Info[field] && Info[field].magnitude=="Option") continue;

			if(Level3.list.indexOf(field)+1){continue;}

			/*check if field is level3 specific*/if(Level3.list.indexOf(field)+1) continue;

			/*disable row according to questions*/
			if(Questions.isHidden(field))
			{
				continue
				//disableRow(newRow);
			}

			//bool for if current field is a calculated variable (CV)
			var isCV = field.search(/^c_/)!=-1;

			/*new row*/var newRow=t.insertRow(-1);

			/*background*/if(isCV){newRow.classList.add('isCV');}

			/*hlInputs for formula and show formula, only if CV*/
			if(isCV)
			{
				var formula = CurrentLevel[field].toString();
				var prettyFormula = Formulas.prettify(formula);
				newRow.setAttribute('onmouseover','Formulas.hlInputs("'+field+'",CurrentLevel,1)');
				newRow.setAttribute('onmouseout', 'Formulas.hlInputs("'+field+'",CurrentLevel,0)');
				newRow.setAttribute('title',prettyFormula);
			}
			else{
				newRow.setAttribute('onmouseover','Formulas.hlOutputs("'+field+'",CurrentLevel,1)');
				newRow.setAttribute('onmouseout', 'Formulas.hlOutputs("'+field+'",CurrentLevel,0)');
			}
			
			/*new ro attribute field=field>*/
			newRow.setAttribute('field',field);

			/*code*/ 
			var newCell=document.createElement('th');
			newRow.append(newCell);
			newCell.classList.add('variableCode');
			newCell.innerHTML=(function()
			{
				var code = "<a style=font-size:10px href=variable.php?id="+field+">"+field+"</a>";
				return code;
			})();

			/*description*/ 
			var newCell=newRow.insertCell(-1);

			newCell.setAttribute('title', translate(field+"_expla"));

			newCell.innerHTML=(function()
			{
				//implementing translation:
				var description = translate(field+"_descr");
				return description;
			})();

			//editable cell if not CV
			var newCell=newRow.insertCell(-1);
			if(!isCV)
			{
				if(typeof(substages)=="object" && substages.length > 1)
				{
					//this means you are in level 2 and you should NOT be able to modify inputs here
					newCell.title="This value is the sum of all substages. Click here to scroll to substages";
					newCell.classList.add('non-editable');
					newCell.onclick=function()
					{
						//navigate to substages to modify the input
						var f=this.parentNode.getAttribute('field');
						var sscon=document.querySelector('#substages').parentNode;
						sscon.scrollIntoView();
						setTimeout(function(){sscon.classList.remove('folded')},300);
						setTimeout(function(){
							document.querySelector('#substages tr[field='+f+'] td[substage]').click();
						},600);
					};
				}
				else //normal case
				{
					newCell.className="input";
					newCell.title="<?php write('#edit_click_to_modify')?>";
					newCell.setAttribute('onclick','level2.transformField(this)');
				}
			}
			else //calculated variable, show formula
			{
				newCell.title=Formulas.prettify(CurrentLevel[field].toString());
			}

			/*value*/
			newCell.innerHTML=(function()
			{
				var value = isCV ? CurrentLevel[field]() : CurrentLevel[field];
				value/=Units.multiplier(field);
				value=format(value);
				return value
			})();

			//check if this cv has estimated data
			var ed=DQ.hasEstimatedData(field) ? " <span title='<?php write('#variable_this_equation_contains_estimated_data')?>' class=estimated>&#9888;</span>" : "";
			newCell.innerHTML+=ed;

			//unit
			newRow.insertCell(-1).innerHTML=(function()
			{
				if(!Info[field])
					return "<span style=color:#ccc>no unit</span>";

				if(Info[field].magnitude=="Currency")
				{
					return Global.General.Currency;
				}

				if(isCV) 
				{
					return Info[field].unit;
				}
				else
				{
					var str="<select onchange=Units.selectUnit('"+field+"',this.value)>";
					if(Units[Info[field].magnitude]===undefined)
					{
						return Info[field].unit
					}
					var currentUnit = Global.Configuration.Units[field] || Info[field].unit
					for(var unit in Units[Info[field].magnitude])
					{
						if(unit==currentUnit)
							str+="<option selected>"+unit+"</option>";
						else
							str+="<option>"+unit+"</option>";
					}
					str+="</select>"
					return str
				}
			})();

			//data quality
			/*
			newRow.insertCell(-1).innerHTML=(function()
			{
				if(isCV) { return "Calculated" }
				else
				{
					var select=document.createElement('select');
					select.setAttribute('onchange','DQ.update("'+field+'",this.value)');
					['Actual','Estimated'].forEach(function(opt)
					{
						var option=document.createElement('option');
						select.appendChild(option);
						option.value=opt;
						option.innerHTML=translate(opt);
						if(Global.Configuration.DataQuality[field]==opt)
						{
							option.setAttribute('selected',true);
						}
					});
					return select.outerHTML;
				}
			})();
			*/
		}
		
		//here check if table is empty (==t.rows.length is 2)
		if(t.rows.length<3)
		{
			var newCell=t.insertRow(-1).insertCell(-1)
			newCell.colSpan=4
			newCell.innerHTML="<span style=color:#999>~All inputs inactive</span>";
		}

		//bottom line decoration with the color of W/WW
		var newRow=t.insertRow(-1);
		var newTh=document.createElement('th');
		newTh.setAttribute('colspan',4)
		newTh.style.borderBottom='none';
		newRow.appendChild(newTh);
	}

	/**
	 * Update a field from the Global object
	 * @param {string} field - The field of the CurrentLevel object
	 */
	level2.updateField=function(field,newValue)
	{
		newValue=parseFloat(newValue);
		if(isNaN(newValue))newValue=0;
		CurrentLevel[field]=newValue*Units.multiplier(field);
		//also update stage if substages==1
		if(substages.length==1) substages[0][field]=newValue*Units.multiplier(field);
		init();
	}
</script>

<table id=inputs style="width:100%">
	<tr><th colspan=5 class=tableHeader> INPUTS &mdash; 
	All stages in 
	<?php if($sublevel){echo $sublevel;}else{echo $level;} ?>
	<tr>
		<th>Code
		<th><?php write('#edit_description')?>
		<th>Current value
		<th><?php write('#edit_unit')?>
</table>

<style>
	#inputs .non-editable {
		text-align:center;
		cursor:pointer;
		transition:all 1s;
	}
	#inputs .non-editable:hover {
		background:#eaeeea;
	}
	#inputs .non-editable:before {
		content:' ∑';
		float:left;
		color:#999;
	}
	#inputs .non-editable:hover:before {
		color:black;
		content:' ∑';
	}
	#inputs th.tableHeader {
		background:white;
		color:#666;
		font-size:15px;
		padding:0.7em 0 0.2em 0;
		font-weight:normal;
		border:none;
		text-align:left;
	}
</style>
