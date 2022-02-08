Mu.Math.Vec2=class
{
	constructor(x,y)
	{
		this.x=x||0;
		this.y=y||0;
		this.z=0;
		this.w=0;
	}

	static Add(a,b)
	{
		return new Mu.Math.Vec2(a.x+b.x,a.y+b.y);
	}

	Add(other)
	{
		this.x+=other.x;
		this.y+=other.y;
	}

	static AddScale(a,b,n)
	{
		let c=Mu.Math.Vec2.Add(a,b);
		c=Mu.Math.Vec2.Scale(c,n);
		return c;
	}

	AddScale(other,n)
	{
		this.Add(other);
		this.Scale(n);
	}

	static Clear(a)
	{
		a.x=0;
		a.y=0;
	}

	Clear()
	{
		this.x=0;
		this.y=0;
	}

	static Copy(a)
	{
		return new Mu.Math.Vec2(a.x,a.y);
	}

	Copy(other)
	{
		this.x=other.x;
		this.y=other.y;
	}

	static Cross(a,b)
	{
		return new Mu.Math.Vec2();
	}

	Cross(other)
	{

	}

	static Div(a,b)
	{
		return new Mu.Math.Vec2(a.x/b.x,a.y/b.y);		
	}

	Div(other)
	{
		this.x/=other.x;
		this.y/=other.y;
	}

	static Dot(a,b)
	{
		return a.x*b.x+a.y*b.y;
	}

	Dot(other)
	{
		return this.x*other.x+this.y*other.y;
	}

	static Limit(a,n)
	{
		if(Mu.Math.Vec2.Mag(a)<n*n) return a;
		return Mu.Math.Vec2.SetMag(a,n);
	}

	Limit(n)
	{
		if(this.Mag()<n*n) return;
		this.SetMag(n);
	}

	static MagSq(a)
	{
		return a.x*a.x+a.y*a.y;
	}

	MagSq()
	{
		return this.x*this.x+this.y*this.y;
	}

	static Mag(a)
	{
		return Math.sqrt(a.x*a.x+a.y*a.y);
	}

	Mag()
	{
		return Math.sqrt(this.x*this.x+this.y*this.y);
	}

	static Mul(a,b)
	{
		return new Mu.Math.Vec2(a.x*b.x,a.y*b.y);
	}
	/*  */
	Mul(other)
	{
		this.x*=other.x;
		this.y*=other.y;
	}

	static Normalize(a)
	{
		let mag=Mu.Math.Vec2.Mag(a);
		if(mag<1) return a;
		return Mu.Math.Vec2.Scale(a,1/mag);
	}

	Normalize()
	{
		let mag=this.Mag();
		if(mag<1) return;
		this.Scale(1/mag);
	}

	static Perp(a)
	{
		return new Mu.Math.Vec2(-a.y,a.x);
	}

	Perp()
	{
		let t=this.x;
		this.x=-this.y;
		this.y=t;
	}

	static PerpA(a,b)
	{
		return new Mu.Math.Vec2(a.y-b.y,b.x-a.x);
	}

	PerpA(other)
	{
		let t=this.x;
		this.x=this.y-other.y;
		this.y=other.x-t;
	}

	static Scale(a,n)
	{
		return new Mu.Math.Vec2(a.x*n,a.y*n);
	}

	Scale(n)
	{
		this.x*=n;
		this.y*=n;
	}

	static SetMag(a,n)
	{
		return Mu.Math.Vec2.Scale(Mu.Math.Vec2.Normalize(a),n);
	}

	SetMag(n)
	{
		this.Normalize();
		this.Scale(n);
	}

	static Sub(a,b)
	{
		return new Mu.Math.Vec2(a.x-b.x,a.y-b.y);
	}

	Sub(other)
	{
		this.x-=other.x;
		this.y-=other.y;
	}
};