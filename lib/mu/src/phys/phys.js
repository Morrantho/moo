Mu.Phys=class
{
	static particles;
	static constraints;
	static bodies;

	static async Load()
	{
		await Mu.Include("../lib/mu/src/phys/particle.js");
		await Mu.Include("../lib/mu/src/phys/relay.js");
		await Mu.Include("../lib/mu/src/phys/emitter.js");
		await Mu.Include("../lib/mu/src/phys/particles/smoke.js");
		await Mu.Include("../lib/mu/src/phys/particles/fire.js");
		await Mu.Include("../lib/mu/src/phys/particles/dynamicfire.js");
	}

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