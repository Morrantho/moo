Mu.Std.Stack=class
{
	constructor(value)
	{
		this.top=new Mu.Std.Node(value);
	}

	Push(value)
	{
		let top=this.top;
		this.top=new Mu.Std.Node(value);
		this.top.directions[1]=top;
	}

	Pop()
	{
		if(!this.top) return;
		let old_top=this.top;
		let value=this.top.value;
		this.top=this.top.directions[1];
		return value;
	}
};