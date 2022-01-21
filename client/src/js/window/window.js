const mu_window_border=0;

/******************************************************************************
* Resizes the canvas each frame to match the browser window's size.
******************************************************************************/
const mu_window_on_resize=(canvas)=>
{
	canvas.width=window.innerWidth-(mu_window_border*2);
	canvas.height=window.innerHeight-(mu_window_border*2);
	canvas.style.width=canvas.width;
	canvas.style.height=canvas.height;
	canvas.style.border=mu_window_border+"px dashed black";
}
/******************************************************************************
* Clears the entire HTML canvas with the color black. This is done each frame
* to prevent drawing on top of what we drew last frame.
******************************************************************************/
const mu_window_clear=(canvas,context)=>
{
	context.fillStyle="#fff";
	context.fillRect(0,0,canvas.width,canvas.height);
}