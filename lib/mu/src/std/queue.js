Mu.Std.Queue=class extends Mu.Std.List
{
	Pop()
	{
		if(!this.head) return;
		let value=this.head.value;
		this.head=this.head.directions[1];
		if(this.head) this.head.directions[0]=undefined;
		return value;
	}
};