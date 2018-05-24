window.onload = function () {
                        console.log("oui la ranked");
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:55556/api/tweet",
                            //url:"file:///C:/Users/nicmir/Documents/fac/Projet_twitter/UI/test.json",
                            //data: JSON.stringify({ Markers: markers }),
                            //data: $('#tweet').val();
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function(data){
                                console.log(data);
                                for (var i = data.length - 1; i >= 0; i--) {
                                    data[i]
                                    $("display-tweet").contents().add(   )
                                }
                            },
                            failure: function(errMsg) {
                                alert(errMsg);
                            }
                        });

                    }