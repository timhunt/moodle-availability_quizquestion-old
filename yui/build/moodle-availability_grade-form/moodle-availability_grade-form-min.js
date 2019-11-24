YUI.add("moodle-availability_quizquestion-form",function(e,t){M.availability_quizquestion=M.availability_quizquestion||{},M.availability_quizquestion.form=e.Object(M.core_availability.plugin),M.availability_quizquestion.form.grades=null,M.availability_quizquestion.form.initInner=function(e){this.grades=e,this.nodesSoFar=0},M.availability_quizquestion.form.getNode=function(t){this.nodesSoFar++;var n='<label class="form-group"><span class="p-r-1">'+M.util.get_string("title","availability_quizquestion")+"</span> "+'<span class="availability-group">'+'<select name="id" class="custom-select"><option value="0">'+M.util.get_string("choosedots","moodle")+"</option>";for(var r=0;r<this.grades.length;r++){var i=this.grades[r];n+='<option value="'+i.id+'">'+i.name+"</option>"}n+='</select></span></label> <br><span class="availability-group form-group"><label><input type="checkbox" class="form-check-input mx-1" name="min"/>'+M.util.get_string("option_min","availability_quizquestion")+'</label> <label><span class="accesshide">'+M.util.get_string("label_min","availability_quizquestion")+'</span><input type="text" class="form-control mx-1" name="minval" title="'+M.util.get_string("label_min","availability_quizquestion")+'"/></label>%</span><br>'+'<span class="availability-group form-group">'+'<label><input type="checkbox" class="form-check-input mx-1" name="max"/>'+M.util.get_string("option_max","availability_quizquestion")+'</label> <label><span class="accesshide">'+M.util.get_string("label_max","availability_quizquestion")+'</span><input type="text" class="form-control mx-1" name="maxval" title="'+M.util.get_string("label_max","availability_quizquestion")+'"/></label>%</span>';var s=e.Node.create('<div class="d-inline-block form-inline">'+n+"</div>");t.id!==undefined&&s.one("select[name=id] > option[value="+t.id+"]")&&s.one("select[name=id]").set("value",""+t.id),t.min!==undefined&&(s.one("input[name=min]").set("checked",!0),s.one("input[name=minval]").set("value",t.min)),t.max!==undefined&&(s.one("input[name=max]").set("checked",!0),s.one("input[name=maxval]").set("value",t.max));var o=function(e,t){var n=e.ancestor("label").next("label").one("input"),r=e.get("checked");return n.set("disabled",!r),t&&r&&n.focus(),r};s.all("input[type=checkbox]").each(o);if(!M.availability_quizquestion.form.addedEvents){M.availability_quizquestion.form.addedEvents=!0;var u=e.one(".availability-field");u.delegate("change",function(){M.core_availability.form.update()},".availability_quizquestion select[name=id]"),u.delegate("click",function(){o(this,!0),M.core_availability.form.update()},".availability_quizquestion input[type=checkbox]"),u.delegate("valuechange",function(){M.core_availability.form.update()},".availability_quizquestion input[type=text]")}return s},M.availability_quizquestion.form.fillValue=function(e,t){e.id=parseInt(t.one("select[name=id]").get("value"),10),t.one("input[name=min]").get("checked")&&(e.min=this.getValue("minval",t)),t.one("input[name=max]").get("checked")&&(e.max=this.getValue("maxval",t))},M.availability_quizquestion.form.getValue=function(e,t){var n=t.one("input[name="+e+"]").get("value");if(!/^[0-9]+([.,][0-9]+)?$/.test(n))return n;var r=parseFloat(n.replace(",","."));return r<0||r>100?n:r},M.availability_quizquestion.form.fillErrors=function(e,t){var n={};this.fillValue(n,t),n.id===0&&e.push("availability_quizquestion:error_selectgradeid"),n.min!==undefined&&typeof n.min=="string"||n.max!==undefined&&typeof n.max=="string"?e.push("availability_quizquestion:error_invalidnumber"):n.min!==undefined&&n.max!==undefined&&n.min>=n.max&&e.push("availability_quizquestion:error_backwardrange")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});
