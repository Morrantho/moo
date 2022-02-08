Game=class
{
	static async Load()
	{
		/* Includes Here */
		Game.Init();
	}

	static Init()
	{
		/* Logic Here */
		let e=new Mu.Phys.Emitter(400,400);
		e.PushFunction(Mu.Phys.Particle.DynamicFire);
		e.SetInfinite();
		e.SetFrequency(0);
	}
};
Game.Load();