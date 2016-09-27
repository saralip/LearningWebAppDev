var main = function () 
{
    "use strict";

    var inputElements = 
    [ $(".comment-input .user1"),
    $(".comment-input .user2 "),
    $(".comment-input .user1 button"),
    $(".comment-input .user2 button")
    ];
    

    var addCommentFromInputBox = function () 
    {
        var $new_comment;
        var backgroundcolor;
        var $whichUser;
        var $userTag;

        if (arguments[0] == 1)
        {
            $whichUser=$(".comment-input .user1 input");
            $userTag=$("<p class = 'userOne'>");

        }
        else
        {
            $whichUser=$(".comment-input .user2 input");
            $userTag=$("<p class = 'userTwo'>");
        }
        if (($whichUser).val() !== "")
        {
            $new_comment = ($userTag).text(($whichUser).val());

            $new_comment.hide();
            $(".pclass").append($new_comment);
            $new_comment.fadeIn();
            ($whichUser).val("");

        }
    };

    var $i = $(".comment-input button").toArray();
    ($i).forEach(function (element)
    {
        $(element).on("click", function ()
        {
    if ((element) === ($i[0]))
    {
        addCommentFromInputBox(1);
        console.log("user 1 clicked");
    }
    else
    {         
        addCommentFromInputBox(2);
        console.log("user 2 clicked");
    }
    
    })});

    $(".comment-input .user1 ").on("keypress", function (event)
    {
        if (event.keyCode === 13) {
            addCommentFromInputBox(1);
        }
    });

    $(".comment-input .user2 ").on("keypress", function (event)
     {
        if (event.keyCode === 13)
        {
            addCommentFromInputBox(2);
      }
    });


};

$(document).ready(main);
