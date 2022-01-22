let mu_json_parse=JSON.parse;
let mu_json_tostr=JSON.stringify;

const MU_ECS_MAX_ENTITIES=65535;
const MU_ECS_MAX_COMPONENTS=64;
const MU_ECS_SYSTEM_TICK=0;
const MU_ECS_SYSTEM_RENDER=1;

const mu_ecs_entities=[];
const mu_ecs_components=[];
const mu_ecs_systems=[[],[]];
/******************************************************************************
* Probes for an empty index and returns it. -1 is returned if the limit is hit.
******************************************************************************/
const mu_ecs_entity_create=()=>
{
	for(let i=0;i<MU_ECS_MAX_ENTITIES;i++)
	{
		if(!mu_ecs_entities[i])
		{
			console.log("mu_ecs_entity_create: "+i)
			return i;
		}
	}
	return -1;
}
/******************************************************************************
* Creates an array at the next index, initializing all mu_ecs_entities with the
* callback's returned object. This means we are never allocating at runtime,
* as the data will already contiguously exist for all mu_ecs_entities.
* Returns the index to be used for enums and future api calls.
******************************************************************************/
const mu_ecs_component_create=(obj)=>
{
	let i=mu_ecs_components.length;
	mu_ecs_components[i]=[];
	for(let j=0;j<MU_ECS_MAX_ENTITIES;j++)
	{
		mu_ecs_components[i][j]=mu_json_parse(mu_json_tostr(obj));
	}
	console.log("mu_ecs_component_create: "+i);
	return i;
}
/******************************************************************************
* Adds or removes a component from an entity.
* Then, adds or removes the entity from any system based on the change.
******************************************************************************/
const mu_ecs_component_toggle=(entity,component)=>
{
	mu_ecs_entities[entity]^=1<<component;
	let entity_mask=mu_ecs_entities[entity];
	/* 0 = tick, 1 = render */
	for(let i=0;i<2;i++)
	{
		for(let j=0;j<mu_ecs_systems[i].length;j++)
		{
			let system_mask=mu_ecs_systems[i][j].mask;
			let result_mask=entity_mask&system_mask;
			// mu_ecs_systems[i][j].entities[entity]=(result_mask==entity_mask||result_mask==system_mask)&&result_mask!=1;
			mu_ecs_systems[i][j].entities[entity]=result_mask==system_mask;
		}
	}
}
/******************************************************************************
* Gets component data for an entity.
******************************************************************************/
const mu_ecs_component_get=(entity,component)=>
{
	return mu_ecs_components[component][entity];
}
/******************************************************************************
* Pushes an object at the next available system index.
* Systems hold a bool array of their own entities for future operation.
* Mask and callback are stored for future use.
******************************************************************************/
const mu_ecs_system_create=(sys_typ,obj)=>
{
	let index=mu_ecs_systems[sys_typ].length;
	mu_ecs_systems[sys_typ][index]=
	{
		fn:obj.fn,
		mask:obj.mask,
		entities:[]
	}
	console.log("mu_ecs_system_create: "+index+" "+sys_typ+" "+obj.mask);
}
/******************************************************************************
* Iterates all TICK systems, and each entity within a system. If the entity
* belongs to a system, the system's callback is fired, telling it to act on it.
******************************************************************************/
const mu_ecs_tick=(state)=>
{
	for(let i=0;i<mu_ecs_systems[0].length;i++)
	{
		for(let j=0;j<mu_ecs_systems[0][i].entities.length;j++)
		{
			if(!mu_ecs_systems[0][i].entities[j]) continue;
			mu_ecs_systems[0][i].fn(state,j);
		}
	}
}
/******************************************************************************
* Iterates all RENDER systems, and each entity within a system. If the entity
* belongs to a system, the system's callback is fired, telling it to act on it.
******************************************************************************/
const mu_ecs_render=(state,context)=>
{
	for(let i=0;i<mu_ecs_systems[1].length;i++)
	{
		for(let j=0;j<mu_ecs_systems[1][i].entities.length;j++)
		{
			if(!mu_ecs_systems[1][i].entities[j]) continue;
			mu_ecs_systems[1][i].fn(state,context,j);
		}
	}
}