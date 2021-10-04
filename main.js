var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    function my_touchmove(e)
    {
        current_position_of_touch_x = e.touch[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touch[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.lineTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.stroke();

        last_position_of_touch_x = current_position_of_touch_x;
        last_position_of_touch_y = current_position_of_touch_y;
    }

