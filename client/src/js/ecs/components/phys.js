const MU_ECS_COMPONENT_PHYS=mu_ecs_component_create(
{
	/* Equivalent to velocity */
	transform:{x:0,y:0},
	gravity:0,
	mass:0,
	friction:0,
	/* Pins or freezes an entity */
	enabled:false
});