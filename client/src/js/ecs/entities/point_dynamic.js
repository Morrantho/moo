const mu_ecs_entity_point_dynamic_create=(x,y,r)=>
{
	let entity=mu_ecs_entity_point_static_create(x,y,r);
	mu_ecs_component_toggle(entity,MU_ECS_COMPONENT_PHYS);
	
	let transform=mu_ecs_component_get(entity,MU_ECS_COMPONENT_TRANSFORM);

	let phys=mu_ecs_component_get(entity,MU_ECS_COMPONENT_PHYS);
	phys.enabled=true;
	phys.gravity.y=0.5;
	phys.mass=1;
	phys.friction=0.99;
	phys.transform=transform.transform;
	return entity;
}