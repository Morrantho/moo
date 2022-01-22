const mu_ecs_system_point_dynamic_constrain=(entity,transform,phys,vel)=>
{
	let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS);
	let t=transform.transform;
	let r=radius.radius;
	if(t.y-r<0)
	{
		transform.transform.y=r;
		phys.transform.y=transform.transform.y+vel.y;
	}
	else if(t.y+r>mu_canvas.height)
	{
		transform.transform.y=mu_canvas.height-r;
		phys.transform.y=transform.transform.y+vel.y;
	}
	else if(t.x-r<0)
	{
		transform.transform.x=r;
		phys.transform.x=transform.transform.x+vel.x;
	}
	else if(t.x+r>mu_canvas.width)
	{
		transform.transform.x=mu_canvas.width-r;
		phys.transform.x=transform.transform.x+vel.x;
	}
};

mu_ecs_system_create(MU_ECS_SYSTEM_TICK,
{
	mask:
	1<<MU_ECS_COMPONENT_COLOR|
	1<<MU_ECS_COMPONENT_TRANSFORM|
	1<<MU_ECS_COMPONENT_RADIUS|
	1<<MU_ECS_COMPONENT_PHYS,

	fn:(state,entity)=>
	{
		let transform=mu_ecs_component_get(entity,MU_ECS_COMPONENT_TRANSFORM);
		let phys=mu_ecs_component_get(entity,MU_ECS_COMPONENT_PHYS);
		/* Calc velocity */
		let vel=mu_std_vec2_sub(transform.transform,phys.transform);
		/* Set old pos to current pos. */
		phys.transform=transform.transform;
		/* Apply friction */
		// vel=mu_std_vec2_muln(vel,phys.friction);
		/* Apply velocity */
		transform.transform=mu_std_vec2_add(transform.transform,vel);
		/* Apply gravity */
		transform.transform=mu_std_vec2_add(transform.transform,phys.gravity);
		/* Keep it in bounds */
		mu_ecs_system_point_dynamic_constrain(entity,transform,phys,vel);
	}
});