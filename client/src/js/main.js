let request_frame=window.requestAnimationFrame;

let canvas=0;
let canvas_context=0;
/* Physics ticks per second. */
let dt=1000/30;
let last_time=0;
let frame_time=0;
let elapsed_time=0.0;
let state=1;
/******************************************************************************
* Where everything starts. Called when the browser feels like it.
* Run other initialization methods here.
******************************************************************************/
let mu_init=function()
{
	canvas=document.getElementById("mu_canvas");
	canvas_context=canvas.getContext("2d");
	mu_run();
};
window.onload=mu_init;
/******************************************************************************
* Main Game Loop. Physics timesteps run at a fixed rate delta. Rendering
* runs as fast as it can.
******************************************************************************/
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
/******************************************************************************
* Where all the logic and physics begins.
******************************************************************************/
let mu_tick=function(state)
{

};
/******************************************************************************
* Where all the drawing and rendering takes place.
******************************************************************************/
let mu_render=function(state)
{
	mu_window_on_resize(canvas);
	mu_window_clear(canvas,canvas_context);
};