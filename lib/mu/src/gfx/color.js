Mu.Color=class
{
	static colors=[];

	static Register(alias,str)
	{
		let id=Mu.Color.colors.length;
		Mu.Color[alias]=id;
		Mu.Color.colors[id]=str;
	}

	static Get(alias)
	{
		return Mu.Color.colors[Mu.Color[alias]];
	}
};

Mu.Color.Register("Red","#e84118");
Mu.Color.Register("Green","#2ecc71");
Mu.Color.Register("Blue","#3498db");
Mu.Color.Register("Yellow","#f1c40f");
Mu.Color.Register("Orange","#f39c12");
Mu.Color.Register("Purple","#9b59b6");
Mu.Color.Register("Grey","#34495e");
Mu.Color.Register("Grey2","#2c3e50");