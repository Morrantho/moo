const mu_ecs_system_point_dynamic_constrain=(state,entity)=>
{
	let transform=mu_ecs_component_get(entity,MU_ECS_COMPONENT_TRANSFORM);
	let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS);
	let t=transform.transform;
	let r=radius.radius;
	if(t.y-r<0)
	{
		transform.transform.y=r;
	}
	else if(t.y+r>mu_canvas.height)
	{
		transform.transform.y=mu_canvas.height-r;
	}
	else if(t.x-r<0)
	{
		transform.transform.x=r;
	}
	else if(t.x+r>mu_canvas.width)
	{
		transform.transform.x=mu_canvas.width-r;
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
		let vel=mu_std_vec2_sub(transform.transform,phys.transform);
		/* Set old pos to current pos. */
		phys.transform=transform.transform;
		/* Apply friction */
		vel=mu_std_vec2_muln(vel,phys.friction);
		/* Apply velocity */
		transform.transform=mu_std_vec2_add(transform.transform,vel);
		/* Apply Gravity */
		transform.transform=mu_std_vec2_add(transform.transform,{x:0,y:phys.gravity});
		/* Keep it in bounds */
		mu_ecs_system_point_dynamic_constrain(state,entity);
	}
});