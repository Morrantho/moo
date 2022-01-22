/* Args are entity ids to already existing point entities, not objects. */
const mu_ecs_entity_plane_create=(point_a,point_b,thickness)=>
{
	let entity=mu_ecs_entity_create();
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_COLOR);
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_PLANE);
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_RADIUS);

	let color=mu_ecs_component_get(entity,MU_ECS_COMPONENT_COLOR);
	color.color.r=0;
	color.color.g=0;
	color.color.b=0;
	color.color.a=255;

	let plane=mu_ecs_component_get(entity,MU_ECS_COMPONENT_PLANE);
	plane.point_a=point_a;
	plane.point_b=point_b;

	let radius=mu_ecs_component_get(entity,MU_ECS_COMPONENT_RADIUS);
	radius.radius=thickness;
	return entity;
}