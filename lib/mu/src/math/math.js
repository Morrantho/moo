Mu.Math=class
{
	static async Load()
	{
		await Mu.Include("../lib/mu/src/math/vec2.js");
		await Mu.Include("../lib/mu/src/math/aabb.js");		
	}

	static Clamp(n,min,max)
	{
		if(n<min) n=min;
		if(n>max) n=max;
		return n;
	}

	static Random(min,max)
	{
		return Math.random()*(max-min)+min;
	}

	static Sign(n)
	{
		if(n>0) return 1;
		if(n<0) return -1;
		return 0;
	}
};