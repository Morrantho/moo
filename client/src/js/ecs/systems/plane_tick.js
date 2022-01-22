mu_ecs_system_create(MU_ECS_SYSTEM_TICK,
{
	mask:
	1<<MU_ECS_COMPONENT_COLOR|
	1<<MU_ECS_COMPONENT_PLANE|
	1<<MU_ECS_COMPONENT_RADIUS,

	fn:(state,entity)=>
	{
		for(let i=0;i<16;i++)
		{
			let plane=mu_ecs_component_get(entity,MU_ECS_COMPONENT_PLANE);
			let transform_a=mu_ecs_component_get(plane.point_a,MU_ECS_COMPONENT_TRANSFORM);
			let transform_b=mu_ecs_component_get(plane.point_b,MU_ECS_COMPONENT_TRANSFORM);
			let diffv=mu_std_vec2_sub(transform_a.transform,transform_b.transform);
			let dist=mu_std_vec2_dist(transform_a.transform,transform_b.transform);
			let diff=((plane.distance-dist)/dist)*0.5;
			let offset=mu_std_vec2_muln(diffv,diff);
			transform_a.transform=mu_std_vec2_add(transform_a.transform,offset);
			transform_b.transform=mu_std_vec2_sub(transform_b.transform,offset);
		}
	}
});