var url1="https://api.nasa.gov/planetary/apod?api_key=c4b5csbgdoVFREaWidGaW0we0NiEFXp9AQswBcbu";
		$.ajax({
				dataType: "json",
				url: url1,
				contentType: 'application/json; charset=utf-8',
				success: function(result)
						{
						//document.write(data.explanation);
						//document.getElementById("img1").src=data.url;
						$("#img1").attr("src",result.url);
						$("#exp").text(result.explanation);
						$("#title").text(result.title);
						$("#date").text(result.date);
						},
						
				});
		
		//var json = JSON.parse(data);
	//document.write(json.explanation);
	//window.onload=function(){
	//	document.getElementById("img1").src=json.url;
	//};