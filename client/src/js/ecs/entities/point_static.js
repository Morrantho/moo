const mu_ecs_entity_point_static_create=(x,y,r)=>
{
	let entity=mu_ecs_entity_create();
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_COLOR);
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_RADIUS);
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_TRANSFORM);

	let color=mu_ecs_component_get(entity,MU_ECS_COMPONENT_COLOR);
	color.color.r=46;
	color.color.g=204;
	color.color.b=113;
	color.color.a=255;

	let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS);
	radius.radius=r||8;

	let transform=mu_ecs_component_get(entity,MU_ECS_COMPONENT_TRANSFORM);
	transform.transform.x=x;
	transform.transform.y=y;
	return entity;
}