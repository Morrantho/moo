const mu_request_frame=window.requestAnimationFrame;

let mu_canvas=0;
let mu_canvas_context=0;
/* Physics ticks per second. */
const mu_dt=1000/60;
let mu_last_time=0;
let mu_frame_time=0;
let mu_elapsed_time=0.0;
let mu_state=1;
/******************************************************************************
* Testing
******************************************************************************/
function mu_test()
{
	let point1=mu_ecs_entity_point_static_create(50,50,16);
	let point2=mu_ecs_entity_point_static_create(200,200,12);
	let point3=mu_ecs_entity_point_static_create(400,400,8);

	let plane1=mu_ecs_entity_plane_create(point1,point2,4);
	let plane2=mu_ecs_entity_plane_create(point2,point3,2);

	let pointd1=mu_ecs_entity_point_dynamic_create(500,50,16);
}
/******************************************************************************
* Where everything starts. Called when the browser feels like it.
* Run other initialization methods here.
******************************************************************************/
function mu_init()
{
	mu_canvas=document.getElementById("mu_canvas");
	mu_canvas_context=mu_canvas.getContext("2d");
	mu_run();
	mu_test();
};
window.onload=mu_init;
/******************************************************************************
* Main Game Loop. Physics timesteps run at a fixed rate delta. Rendering is
* uncapped.
******************************************************************************/
function mu_run(cur_time)
{
	/* Starts as NaN, make it mu_dt, so we guarantee a physics tick. -pyg */
	if(!cur_time) cur_time=mu_dt;
	/* Time taken between the current and previous frame. -pyg */
	mu_frame_time=cur_time-mu_last_time;
	/* Running sum of time passed between frames. -pyg */
	mu_elapsed_time+=mu_frame_time;
	/* Integrate when greater than fixed delta. -pyg */
	while(mu_elapsed_time>=mu_dt)
	{
		mu_tick(mu_state);
		mu_elapsed_time-=mu_dt;
	}
	mu_render(mu_state);
	mu_last_time=cur_time;
	mu_request_frame(mu_run);
};
/******************************************************************************
* Where all the logic and physics begins.
******************************************************************************/
function mu_tick(mu_state)
{
	mu_ecs_tick(mu_state);
};
/******************************************************************************
* Where all the drawing and rendering takes place.
******************************************************************************/
function mu_render(mu_state)
{
	mu_window_on_resize(mu_canvas);
	mu_window_clear(mu_canvas,mu_canvas_context);
	mu_ecs_render(mu_state,mu_canvas_context);
};