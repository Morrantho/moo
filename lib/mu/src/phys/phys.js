Mu.Phys=class
{
	static particles;
	static constraints;
	static bodies;

	static Init()
	{
		Mu.Phys.particles=[];
		Mu.Phys.constraints=[];
		Mu.Phys.bodies=[];
	}

	static Integrate(cur_time)
	{
		for(let particle of Mu.Phys.particles)
		{
			if(!particle) continue;
			particle.Integrate(cur_time);
		}
	}

	static Run(cur_time)
	{
		Mu.Phys.Integrate(cur_time);
	}
};