if(person.properties.userName!="ics"){
	//other user can't execute this script
	model.result = "error"
	model.msg = person.properties.userName+" does not have permission to run this script."
}
else{
	//got the special folder
	var folder= companyhome.childByNamePath("sites/ics/documentLibrary/"+url.extension);
	if (folder == undefined || !folder.isContainer)
	{
		model.result = "error"
		model.msg = "Folder "+url.extension+ " not found."
	}
	else{
		try{
			//set inherite false
			folder.setInheritsPermissions(false);
			//add permission & save
			folder.setPermission("SiteManager", "site_ics_SiteManager");
			folder.setPermission("Consumer", "GROUP_"+folder.name);
			folder.save();

			model.result = "success"
			model.msg = "changed permission ok."
		}catch(error){
			model.result = "error"
			model.msg = "error is:"+error
		}
	}
}