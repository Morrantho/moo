mu_ecs_system_create(MU_ECS_SYSTEM_RENDER,{
	mask:
		1<<MU_ECS_COMPONENT_COLOR|
		1<<MU_ECS_COMPONENT_TRANSFORM|
		1<<MU_ECS_COMPONENT_RADIUS,
	fn:(state,context,entity)=>
	{
		let color=mu_ecs_component_get(entity,MU_ECS_COMPONENT_COLOR);
		let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS);
		let transform=mu_ecs_component_get(entity,MU_ECS_COMPONENT_TRANSFORM);
		context.fillStyle="rgba("+color.r+","+color.g+","+color.b+","+color.a+")";
		context.beginPath();
		context.arc(transform.x,transform.y,radius.radius,0,Math.PI*2);
		context.fill();
	}
});