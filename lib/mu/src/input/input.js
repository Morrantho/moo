Mu.Input=class
{
	static mouse;
	static keys=[];

	static Init()
	{
		document.oncontextmenu=(e)=>false; /* Lol, bye. */
		// mu_canvas.onmousedown=mu_mouse_on_down;
		// mu_canvas.onmouseup=mu_mouse_on_up;
		// mu_canvas.onmousemove=mu_mouse_on_move;
		// mu_canvas.keydown=mu_key_on_down;
		// mu_canvas.keyup=mu_key_on_up;
	}
};