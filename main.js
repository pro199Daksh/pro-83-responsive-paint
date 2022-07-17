var mouse_event= "";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color= "black";
var line_width= 5;

canvas.addEventListener("mousedown", my_mouse_down)
function my_mouse_down(){
    mouse_event="mousedown"
    color = document.getElementById("ic").value;
    line_width = document.getElementById("in").value;
}

canvas.addEventListener("mouseleave", my_mouse_leave)
function my_mouse_leave(){
    mouse_event="mouseleave"
}

canvas.addEventListener("mouseup", my_mouse_up)
function my_mouse_up(){
    mouse_event="mouseup"
}

canvas.addEventListener("mousemove", my_mouse_move)
function my_mouse_move(e){
  curren_position_of_mouse_x= e.clientX-canvas.offsetLeft;
  curren_position_of_mouse_y= e.clientY-canvas.offsetTop;
  console.log(curren_position_of_mouse_x)
  console.log(curren_position_of_mouse_y)
  if(mouse_event=="mousedown"){
    ctx.beginPath()
    ctx.lineWidth=line_width;
    ctx.strokeStyle=color;
    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(curren_position_of_mouse_x,curren_position_of_mouse_y)
    ctx.stroke()
  } 
  last_position_of_x=curren_position_of_mouse_x;
  last_position_of_y=curren_position_of_mouse_y;

}
color = "black";
    width_of_line = 2;
    width=screen.width;
    new_width= width - 70;
    new_height= screen.height - 300;
    if(width< 992){
        canvas.width= new_width;
        canvas.height= new_height;
        document.body.style.overflow= "hidden";
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("ic").value;
        line_width = document.getElementById("in").value;
        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
    function clearcanvas(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    }

