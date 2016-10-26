import req from 'superagent';

export function showFoods() {
  const request = req
  .get('/api/foods')
  .accept('application/json');
  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: 'SHOW_FOODS', payload: response.body });
    });
  }
};

export function addFood(username, description, hashtags, photo) {
  const request = req.post('/api/foods')
   .set('Content-type', 'application/json');
   return (dispatch) => {
     request.send([{
       username: username, description: description, hashtags: hashtags, photo:photo
     }])
      .end(function(err, res){
         if (err || !res.ok) {
           console.log('error');
           dispatch(addAlert('Your food wasn`t added !', 'danger'));
           dispatch({ type: 'ADD_FOODS', res: false });
         } else {
           console.log('poszlo');
           dispatch(addAlert('Your food was successfully added !', 'success'));
           dispatch({ type: 'ADD_FOODS', res: true, req:{
             'username':username, 'description': description,'hashtags':hashtags,'photo':photo
           }});
         }
     });
  }
}

export function removeFood(id, indexInState) {
  const request = req.del('/api/food')
   .set('Content-type', 'application/json');
   return (dispatch) => {
     request.send([{ food_id: id }])
      .end(function(err, res){
         if (err || !res.ok) {
           dispatch({ type: 'REMOVE_FOOD', res: false });
           dispatch(addAlert('Your food wasn`t removed !', 'danger'));
         } else {
           dispatch(addAlert('Your food was successfully removed !', 'success'));
           dispatch({ type: 'REMOVE_FOOD', res: true, req:{ 'id':id, 'indexInState': indexInState}});
         }
     });
   }
}

export function addAlert(text, style) {
  return (dispatch) => {
    dispatch({ type: 'ADD_ALERT', text: text, style: style });
  }
};

export function removeAlert(id){
  return {
    type: 'REMOVE_ALERT',
    id
  };
};
