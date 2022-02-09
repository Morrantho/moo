Mu.Phys.Particle=class
{
	constructor(x,y)
	{
		this.position=new Mu.Math.Vec2(x,y);
		this.velocity=new Mu.Math.Vec2(x,y);
		this.acceleration=new Mu.Math.Vec2(0,0);
		this.forces=new Mu.Math.Vec2(0,0);
		this.damping=0.9;
		this.drag=0.45;
		this.dragsq=0.45;
		this.imass=1/1;
		this.radius=8;
		this.dragk1=1.05; /* velocity drag */
		this.dragk2=1.05; /* velocity drag squared */
		this.born=Mu.cur_time; /* time of birth */
		this.age=0; /* current age */
		this.life=1000; /* time to live in milliseconds */
		this.color=Mu.Color.Get("Grey");
		this.id=Mu.Phys.particles.length;
		Mu.Phys.particles[this.id]=this;
	}

	AddForce(force)
	{
		this.forces.Add(force);
	}

	GetVelocity()
	{
		return Mu.Math.Vec2.Sub(this.position,this.velocity);
	}

	SetRadius(radius)
	{
		if(radius<0) radius=0;
		this.radius=radius;
	}

	SetMass(mass)
	{
		if(mass<=0)
		{
			this.imass=0;
			return;
		}
		this.imass=1/mass;
	}
	/* Velocity is verlet old position. */
	SetVelocity(x,y)
	{
		this.position.x+=x;
		this.position.y+=y;
	}

	SetAcceleration(x,y)
	{
		this.acceleration.x=x;
		this.acceleration.y=y;
	}

	SetDamping(damping)
	{
		this.damping=damping;
	}

	SetLife(life)
	{
		this.life=life;
	}

	SetColor(mu_color_key)
	{
		this.color=Mu.Color.Get(mu_color_key);
	}
	/* Use this if you want to pick colors not in the color list. */
	SetColorStr(str)
	{
		this.color=str;
	}

	HasInfiniteMass()
	{
		return this.imass<=0;
	}

	Remove()
	{
		Mu.Phys.particles[this.id]=undefined;
	}

	Integrate(cur_time)
	{
		if(this.imass<=0) return;
		let cur=Mu.Math.Vec2.Copy(this.position);
		let vel=Mu.Math.Vec2.Sub(this.position,this.velocity);
		let acc=Mu.Math.Vec2.AddScale(this.acceleration,this.forces,this.imass);
		vel.AddScale(acc,1);
		vel.Scale(Math.pow(this.damping,1));
		this.position.AddScale(vel,1);
		this.velocity=cur;
		this.forces.Clear();
		this.age=cur_time-this.born;
	}

	Render()
	{
		Mu.Gfx.context.fillStyle=this.color;
		Mu.Gfx.context.beginPath();
		Mu.Gfx.context.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI);
		Mu.Gfx.context.fill();
	}
};