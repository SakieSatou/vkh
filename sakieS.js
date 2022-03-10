function loadUsers(){
	let id_user = $('#id_user').val()
	var request = $.ajax({
		url: "https://api.vk.com/method/users.get",
		method: "GET",
		data: { user_ids: id_user, fields: 'photo_max_orig', v: 5.131,
			access_token: '49085ce6b2b35f9053954538951718cb6896f84ce0a014a492b88b387bcc86df362a8f3328081b8adf886'
			},
		dataType: "jsonp"
	});
	
	request.done(function( msg ){
		showUsers(msg['response'][0]);
	});
	
	request.fail(function( jqXHR, textStatus ){
		console.log("Request failed: "+ textStatus);
	});
}

function showUsers(user){
	let info = $('#info')
	info.append('<h3>'+user.first_name+' '+user.last_name+'</h3>')
	info.append('<h3>Logo:<br><img src='+user.photo_max_orig+'></img></h3>')
}