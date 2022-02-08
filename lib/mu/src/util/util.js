Mu.Util=class
{
	static Min(a,b)
	{
		if(a<b) return a;
		return b;
	}

	static Max(a,b)
	{
		if(a>b) return a;
		return b;
	}

	static Clone(obj,cloned)
	{
		if(!cloned) cloned={};
		for(let k in obj)
		{
			if(typeof(obj[k])=="object")
			{
				cloned[k]={};
				Mu.Util.Clone(obj[k],cloned[k]);
			}
			cloned[k]=obj[k];
		}
		return cloned;		
	}
};