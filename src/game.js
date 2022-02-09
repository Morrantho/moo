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
		e.PushFunction(Mu.Phys.Particle.Fire);
		e.SetRepetitions(1000);
		e.SetFrequency(0); /* <-- this is expensive, dont do it often. */
	}
};
Game.Load();