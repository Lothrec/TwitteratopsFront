$(document).ready(function () {
    $('#show-action').click(function () {
        console.log("bonjour");
        showDialog({
            title: 'Ecrire un nouveau Tweet',
            text: '<div id=""> <input type="text" id="tweet" class="champ" /> <br/> </div>',
            positive: {
                title: 'Tweeter',
            }
        });
    });



    /* library */
    function showDialog(options) {
        options = $.extend({
            id: 'orrsDiag',
            title: null,
            text: null,
            negative: false,
            positive: false,
            cancelable: true,
            contentStyle: null,
            onLoaded: false
        }, options);

        // remove existing dialogs
        $('.dialog-container').remove();
        $(document).unbind("keyup.dialog");

        $('<div id="' + options.id + '" class="dialog-container"><div class="mdl-card mdl-shadow--16dp"></div></div>').appendTo("body");
        var dialog = $('#orrsDiag');
        var content = dialog.find('.mdl-card');
        if (options.contentStyle != null) content.css(options.contentStyle);
        if (options.title != null) {
            $('<h5>' + options.title + '</h5>').appendTo(content);
        }
        if (options.text != null) {
            $('<p>' + options.text + '</p>').appendTo(content);
        }
        if (options.negative || options.positive) {
            var buttonBar = $('<div class="mdl-card__actions dialog-button-bar"></div>');
            if (options.negative) {
                options.negative = $.extend({
                    id: 'negative',
                    title: 'Cancel',
                    onClick: function () {
                        return false;
                    }
                }, options.negative);
                var negButton = $('<button class="mdl-button mdl-js-button mdl-js-ripple-effect" id="' + options.negative.id + '">' + options.negative.title + '</button>');
                negButton.click(function (e) {
                    e.preventDefault();
                    if (!options.negative.onClick(e))
                        hideDialog(dialog)
                });
                negButton.appendTo(buttonBar);
            }
            if (options.positive) {
                options.positive = $.extend({
                    id: 'positive',
                    title: 'OK',
                    onClick: function () {
                        console.log("oui la ranked");
                        $.ajax({
                            type: "GET",
                            url: "http://localhost:55556/api/tweet",
                            //url:"file:///C:/Users/nicmir/Documents/fac/Projet_twitter/UI/test.json",
                            //data: JSON.stringify({ Markers: markers }),
                            //data: $('#tweet').val();
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function(data){alert(data); console.log(data);},
                            failure: function(errMsg) {
                                alert(errMsg);
                            }
                        });

                    }
                }, options.positive);
                var posButton = $('<button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="' + options.positive.id + '">' + options.positive.title + '</button>');
                posButton.click(function (e) {
                    e.preventDefault();
                    if (!options.positive.onClick(e))
                        hideDialog(dialog)
                });
                posButton.appendTo(buttonBar);
            }
            buttonBar.appendTo(content);
        }
        componentHandler.upgradeDom();
        if (options.cancelable) {
            dialog.click(function () {
                hideDialog(dialog);
            });
            $(document).bind("keyup.dialog", function (e) {
                if (e.which == 27)
                    hideDialog(dialog);
            });
            content.click(function (e) {
                e.stopPropagation();
            });
        }
        setTimeout(function () {
            dialog.css({opacity: 1});
            if (options.onLoaded)
                options.onLoaded();
        }, 1);
    }

    function hideDialog(dialog) {
        $(document).unbind("keyup.dialog");
        dialog.css({opacity: 0});
        setTimeout(function () {
            dialog.remove();
        }, 400);
    }
});