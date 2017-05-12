$(document).ready(function(){
    var stack = [];
    for(var i=1;i<=75;i++){
        stack.push(i);
    }
    var open = $('#js-open');
    var result_block = $('#js-result');
    var result_count = 0;
    var result_tr;
    var is_doing = false;
    $('body,.container').on("click keydown ontouchstart",function(){
        if(is_doing == true) return;
        var audio = $('#audio').get(0);
        var stack_length = stack.length;
        if(stack_length == 0){
            audio.pause();
            return;
        }
        is_doing = true;
        audio.play();
        var count = 0;
        var timer = setInterval(function(){
            var tmp_rand = Math.floor( Math.random() * stack_length);
            open.html(stack[tmp_rand]);
            if(count >= 20){
                clearInterval(timer);
                var rand = Math.floor( Math.random() * stack_length);
                open.html(stack[rand]);
                if(result_count%30 == 0){
                    result_block.append('<div id="js-result_tr'+result_count+'" style="display:table-row"></div>');
                    result_tr = $('#js-result_tr'+result_count);
                }
                result_tr.append('<div class="result">'+stack[rand]+'</div>');
                stack.splice(rand,1);
                result_count ++;
                if(stack.length === 0) audio.pause();
                is_doing = false;
            }
            count++;
        },100);
    });
});
