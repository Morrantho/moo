const mu_ecs_entity_point_create=(x,y)=>
{
	let entity=mu_ecs_entity_create();
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_COLOR);
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_RADIUS);
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_TRANSFORM);

	let color=mu_ecs_component_get(entity,MU_ECS_COMPONENT_COLOR);
	color.r=46;
	color.g=204;
	color.b=113;
	color.a=255;

	let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS);
	radius.radius=32;

	let transform=mu_ecs_component_get(entity,MU_ECS_COMPONENT_TRANSFORM);
	transform.x=x;
	transform.y=y;
	return entity;
}