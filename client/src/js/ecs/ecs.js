let max_entities=65535;
let max_components=64;

let entities=[];
let components=[];
let systems=[];
/******************************************************************************
* Probes for an empty index and returns it. -1 is returned if the limit is hit.
******************************************************************************/
function mu_ecs_entity_create()
{
	for(let i=0;i<max_entities;i++) if(!entities[i]) return i;
	return -1;
}
/******************************************************************************
* Pushes an empty array at the next available index. Used for enum creation.
******************************************************************************/
function mu_ecs_component_create()
{
	let i=components.length;
	components[i]=[];
	return i;
}
/******************************************************************************
* Adds or removes a component from an entity.
* Then, adds or removes the entity from any system based on the change.
******************************************************************************/
function mu_ecs_component_toggle(entity,component)
{
	entities[entity]^=1<<component;
	let entity_mask=entities[entity];
	for(let i=0;i<systems.length;i++)
	{
		let system_mask=systems[i].mask;
		let result_mask=entity_mask&system_mask;
		systems[i].entities[entity]=(result_mask==entity_mask||result_mask==system_mask)&&result_mask!=1;
	}
}
/******************************************************************************
* Pushes an object at the next available system index.
* Systems hold a bool array of their own entities for future operation.
* Mask and callback are stored for future use.
******************************************************************************/
function mu_ecs_system_create(mask,fn)
{
	systems[systems.length]=
	{
		/* Bool array whether an entity exists in a system. */
		entities:[],
		/* System Callback. */
		fn:fn,
		/* The component's a system operates on. */
		mask:mask,
	};
}
/******************************************************************************
* Iterates all systems, and each entity within a system. If the entity belongs
* to a system, the system's callback is fired, telling it to act on it.
******************************************************************************/
function mu_ecs_tick()
{
	for(let i=0;i<systems.length;i++)
	{
		for(let j=0;j<systems[i].entities.length;j++)
		{
			if(systems[i].entities[j])
			{
				systems[i].fn(j);
			}
		}
	}
}