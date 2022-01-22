mu_ecs_system_create(MU_ECS_SYSTEM_RENDER,
{
	mask:
	1<<MU_ECS_COMPONENT_COLOR|
	1<<MU_ECS_COMPONENT_PLANE|
	1<<MU_ECS_COMPONENT_RADIUS,
		
	fn:(state,entity,context)=>
	{
		let color=mu_ecs_component_get(entity,MU_ECS_COMPONENT_COLOR).color;
		let plane=mu_ecs_component_get(entity,MU_ECS_COMPONENT_PLANE);
		let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS).radius;
		let transform_a=mu_ecs_component_get(plane.point_a,MU_ECS_COMPONENT_TRANSFORM).transform;
		let transform_b=mu_ecs_component_get(plane.point_b,MU_ECS_COMPONENT_TRANSFORM).transform;
		context.strokeStyle="rgba("+color.r+","+color.g+","+color.b+","+color.a+")";
		context.lineWidth=radius;
		context.beginPath();
		context.moveTo(transform_a.x,transform_a.y);
		context.lineTo(transform_b.x,transform_b.y);
		context.stroke();
	}
});