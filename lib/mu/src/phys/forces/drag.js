Mu.Phys.Force.Drag=(p)=>
{
	if(p.HasInfiniteMass()) return;
	let k1=p.dragk1,k2=p.dragk2;
	let f=p.GetVelocity();
	let co=f.Mag();
	co=k1*co+k2*co*co;
	f.Normalize();
	f.Scale(-co);
	p.AddForce(f);
}