Mu.Std.List=class
{
	constructor()
	{
		this.head=undefined;
		this.tail=undefined;
	}

	Push(value)
	{
		if(!this.head)
		{
			this.head=new Mu.Std.Node(value);
			this.tail=this.head;
			return;
		}
		this.tail.directions[1]=new Mu.Std.Node(value);
		this.tail.directions[1].directions[0]=this.tail;
		this.tail=this.tail.directions[1];
	}

	Pop()
	{
		if(!this.tail) return;
		let value=this.tail.value;
		this.tail=this.tail.directions[0];
		if(this.tail) this.tail.directions[1]=undefined;
		return value;
	}
};