/* blank module for now */
Mu.Math=class
{
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