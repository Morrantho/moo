let request_frame=window.requestAnimationFrame;

let canvas=0;
let canvas_context=0;

let dt=1000/30; /* Physics ticks per second. */
let last_time=0;
let frame_time=0;
let elapsed_time=0.0;
let state=1;

let mu_init=function()
{
	canvas=document.getElementById("mu_canvas");
	canvas_context=canvas.getContext("2d");
	mu_run();
};
window.onload=mu_init;

let mu_run=function(cur_time)
{
	/* Starts as NaN, make it dt, so we guarantee a physics tick. -pyg */
	if(!cur_time) cur_time=dt;
	/* Time taken between the current and previous frame. -pyg */
	frame_time=cur_time-last_time;
	/* Running sum of time passed between frames. -pyg */
	elapsed_time+=frame_time;
	/* Integrate when greater than fixed delta. -pyg */
	while(elapsed_time>=dt)
	{
		mu_tick(state);
		elapsed_time-=dt;
	}
	mu_render(state);
	last_time=cur_time;
	request_frame(mu_run);
};

let mu_tick=function(state)
{

};

let mu_render=function(state)
{
	mu_window_on_resize(canvas);
	mu_window_clear(canvas,canvas_context);
};