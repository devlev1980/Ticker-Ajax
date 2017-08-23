$(function() {
    var messagesArray = [];
    $.getJSON('messageData.json').done(function(data) {
        // console.log(data)
        messagesArray = data.messageList;
        drawTickets(data.messageList);
        $('#userImg').html('<img src=" ' + data.messageList[0].img + '"/ >')
    });



    $('#button').click(function() {
        var textInput = $('input#inputText').val()
        console.log(textInput);
        messagesArray.push({
            'message': textInput,
            'img': 'https://hiflyer.vn/templates/hiflyer/images/avatar/avatar2.png',
            "name": "רועי",
            "date": { "year": "2017", "month": "07", "day": "22" }
        });

        drawTickets(messagesArray);

    })
});

function drawTickets(data) {

    $('.ticketList').empty();

    $.each(data, function(i, items) {
        var date = '<p class="date">' + items.date.year + '/' + items.date.month + '/' + items.date.day + '</p>';

        var showData = '<div class="item">' + '<h3 class="name">' + items.name + '</h3>' + '<img src="' + items.img + '" width="40" height="40"/>' + date + '<p class="message">' + items.message + '</p>' + '<br/></div>';
        // $('#show-data').html(showData).clone().appendTo('.ticketList');
        $('.ticketList').append(showData);


    });

    function ticker() {

        $('.ticketList').easyTicker({
            direction: 'up',
            easing: 'easeInOutBack',
            speed: 'slow',
            interval: 1000,
            height: '100%',
            visible: 1,
            mousePause: 0,

        }).data();
    }
    ticker();

















}