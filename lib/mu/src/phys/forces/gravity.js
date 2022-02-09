MU_PHYS_FORCE_GRAVITY=new Mu.Math.Vec2(0,1);

Mu.Phys.Force.Gravity=(particle)=>
{
	if(particle.HasInfiniteMass()) return;
	let force=Mu.Math.Vec2.Scale(MU_PHYS_FORCE_GRAVITY,particle.imass);
	particle.AddForce(force);
}