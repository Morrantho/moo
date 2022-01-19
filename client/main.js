let canvas=0;
let canvas_context=0;
let last_frame=0;
let dt=0;
let elapsed=0;
let tickrate=33;

function moo_init()
{
	canvas=document.getElementById("moo_canvas");
	canvas_context=canvas.getContext("2d");
	moo_run();
}
window.onload=moo_init;

function moo_run(t)
{
	dt=t-last_frame;
	if(elapsed>tickrate)
	{
		moo_tick();
		elapsed=0;
	}
	moo_render();
	last_frame=t;
	elapsed+=dt?dt:0;
	window.requestAnimationFrame(moo_run);
}

function moo_tick()
{
	
}

function moo_render()
{
	moo_window_on_resize(canvas);
	moo_window_clear(canvas,canvas_context);
}