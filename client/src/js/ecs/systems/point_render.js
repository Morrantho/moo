mu_ecs_system_create(MU_ECS_SYSTEM_RENDER,
{
	mask:
	1<<MU_ECS_COMPONENT_COLOR|
	1<<MU_ECS_COMPONENT_RADIUS|
	1<<MU_ECS_COMPONENT_TRANSFORM,
		
	fn:(state,entity,context)=>
	{
		let color=mu_ecs_component_get(entity,MU_ECS_COMPONENT_COLOR).color;
		let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS).radius;
		let transform=mu_ecs_component_get(entity,MU_ECS_COMPONENT_TRANSFORM).transform;
		context.fillStyle="rgba("+color.r+","+color.g+","+color.b+","+color.a+")";
		context.beginPath();
		context.arc(transform.x,transform.y,radius,0,Math.PI*2);
		context.fill();
	}
});