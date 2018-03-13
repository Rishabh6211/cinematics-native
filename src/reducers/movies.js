export default function(state=[], action){ 
	switch(action.type){
		case "GET_PLAYING":
			return {...state , playing:action.payload};
			break;
	}
	return state;
}