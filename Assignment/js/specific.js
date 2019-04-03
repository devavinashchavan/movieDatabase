$(function(){
	$.ajax({
		type: "get",
		datatype:JSON,
		url : "https://backend-ygzsyibiue.now.sh/api/v1/movies/",
		async:true,
		success: function(response){
			var getLength = response.length;

			$.each( response, function( _i, _data ) {	
				getData = _data;
				$("#live-data")
				.append("<a href='../view-movie-details.html?getid="+_i+"?movieid="+_data.slug+"'><div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 movieThumbContainer' id='movieThumb_"+_i+"'></div></a>");
				$("#movieThumb_"+_i)
				    .append('<div class=""><div class="thumbContainer">')
					.append("<img class='banner-image' src='https://image.tmdb.org/t/p/w500"+_data.posterURL+"'/>")
					.append("<div class='movieTitle'>"+_data.title+"</div>")
					.append("<div class='movieDate'>"+(_data.releaseDate).split("T")[0]+"</div></div></div>");
			});

			var userObjectString = JSON.stringify(response);
     		window.sessionStorage.setItem('userObject',userObjectString);
		},
		error:function(){
			console.log("No page found");
		}
	});
});