/*******************************************************************************
**
** FileName: Child APIWrapper.js
**
*******************************************************************************/


var _Debug = false;  // set this to false to turn debugging off
                     // and get rid of those annoying alert boxes.




// local variable definitions
var apiHandle = null;
var API = null;
var findAPITries = 0;
var parentWindow = null;
var interactionsCount = 0;

/*******************************************************************************
**
** Function: isChild()
** Inputs:  None
** Return:  boolean true if this object communicates to SCORM through a wrapper
**          boolean false if there is no parent-child relationship
**
** Description:
** If there is no direct connection to SCORM some functions cannot be called
**
*******************************************************************************/

function isChild(){
	
	if(parentWindow == null || parentWindow == undefined){
		return false;
	}
else{
	return true;
	}
}

/*******************************************************************************
**
** Function: doInitialize()
** Inputs:  None
** Return:  CMIBoolean true if the initialization was successful, or
**          CMIBoolean false if the initialization failed.
**
** Description:
** Initialize communication with LMS by calling the Initialize
** function which will be implemented by the LMS.
**
*******************************************************************************/
function doInitialize()
{
	initChildMessaging();
   
}

/*******************************************************************************
**
** Function doTerminate()
** Inputs:  None
** Return:  CMIBoolean true if successful
**          CMIBoolean false if failed.
**
** Description:
** Close communication with LMS by calling the Terminate
** function which will be implemented by the LMS
**
*******************************************************************************/
function doTerminate()
{  
   return "true";
    
}

/*******************************************************************************
**
** Function doGetValue(name)
** Inputs:  name - string representing the cmi data model defined category or
**             element (e.g. cmi.core.student_id)
** Return:  Parent is not currently able to call getValue on behalf of the child
** if getvalue is needed on interactions count, return an incremented counter
**
*******************************************************************************/
function doGetValue(name)
{
 if(name == "cmi.interactions._count"){
		   return interactionsCount++;
	}
	   
return "";
  
}

/*******************************************************************************
**
** Function doSetValue(name, value)
** Inputs:  name -string representing the data model defined category or element
**          value -the value that the named element or category will be assigned
** Return:  CMIBoolean true if successful
**          CMIBoolean false if failed.
**
** Description:
** Wraps the call to the SetValue function
**
*******************************************************************************/
function doSetValue(name, value)
{
	
if(parentWindow && parentWindow.postMessage){
	data = {message:"doSetValue", name:name,value:value}; 	 	

	parentWindow.postMessage(data, "*");
}
		
   
}

/*******************************************************************************
**
** Function doCommit()
** Inputs:  None
** Return:  None
**
** Description:
** Call the Commit function 
**
*******************************************************************************/
function doCommit()
{

	if(parentWindow && parentWindow.postMessage){
		data = {message:"doCommit"}; 	 	

		parentWindow.postMessage(data, "*");
	}

 }


/*******************************************************************************
**
** Function LMSIsInitialized()
** Inputs:  none
** Return:  true if the LMS API is currently initialized, otherwise false
**
** Description:
** Determines if the LMS API is currently initialized or not.
**
*******************************************************************************/
function LMSIsInitialized()
{
   return false;
}

/******************************************************************************
**
** Function getAPIHandle()
** Inputs:  None
** Return:  value contained by APIHandle
**
** Description:
** Returns the handle to API object if it was previously set,
** otherwise it returns null
**
*******************************************************************************/
function getAPIHandle()
{
   return null;
}


/*******************************************************************************
**
** Function findAPI(win)
** Inputs:  win - a Window Object
** Return:  If an API object is found, it's returned, otherwise null is returned
**
** Description:
** This function looks for an object named API in parent and opener windows
**
*******************************************************************************/
function findAPI(win)
{
   return null;
}


/*
GetAPI
-Searches all parent and opener windows relative to the
 current window for the SCORM 2004 API Adapter.
 Returns a reference to the API Adapter if found or null
 otherwise.
*/
function getAPI() 
{
 return null;
 
}

/*
**          
**
** Description:
** Initialize communication with parent wrapper
**
*******************************************************************************/
function initChildMessaging()
{
	   if(_Debug){

		alert('child is alive');
		}
	
	window.addEventListener('message', receiveMessage);
	
}
function receiveMessage(e) {
	//iframe id is wrappedJetContent
	   if(_Debug){
	 	alert(e.data);
	}
	
	
	var data = eval(e.data);
	
	switch (data.message){
		
		case "initialize":
		
			data = {message:"connected"};
			e.source.postMessage(data, "*");
			parentWindow = e.source;
			break;
			
		case "returnedGetValue":
		
			switch (name){
				case "cmi.interactions._count":
				if(!isNaN(data.value)){
					interactionsCount = data.value;
				}
				
				break;
				default:
				break;
			}
		
			break;
		
		
		
		default:
			if(_Debug){
				alert("Parent reports error in message from child: " + message);
			}
		
	}
	
  }


