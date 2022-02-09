Mu.Phys.Force=class
{
	constructor(particle,force_fn)
	{
		this.particle=particle.id;
		this.apply=force_fn;
		this.id=Mu.Phys.forces.length;
		Mu.Phys.forces[this.id]=this;
	}

	Remove()
	{
		Mu.Phys.forces[this.id]=undefined;
	}
};