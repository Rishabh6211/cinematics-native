const ROOT_URL = 'https://api.themoviedb.org/3/movie';

export function Get_PlayingNow(){
	alert("in action")
	return dispatch => {
		dispatch({
					type: 'GET_PLAYING',
					payload : []
				});
	fetch(`${ROOT_URL}/now_playing?api_key=9f1d732826e84e62b27ccd198877e6d9&language=en-US&page=1`)
      	.then(res => res.json())
      	.then(list => {
      		dispatch({
					type: 'GET_PLAYING',
					payload : list
				});
				
		  });
		  
      }
	
}