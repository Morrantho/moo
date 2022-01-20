/******************************************************************************
* Resizes the canvas each frame to match the browser window's size.
******************************************************************************/
function mu_window_on_resize(canvas)
{
	let border=2;
	canvas.width=window.innerWidth-(border*2);
	canvas.height=window.innerHeight-(border*2);
	canvas.style.width=canvas.width;
	canvas.style.height=canvas.height;
	canvas.style.border=border+"px dashed red";
}
/******************************************************************************
* Clears the entire HTML canvas with the color black. This is done each frame
* to prevent drawing on top of what we drew last frame.
******************************************************************************/
function mu_window_clear(canvas,context)
{
	context.fillStyle="#000";
	context.fillRect(0,0,canvas.width,canvas.height);
}