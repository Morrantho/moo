Mu.Phys.Relay=class extends Mu.Phys.Particle
{
	jobs;
	particle;
	last_pos;
	last_acc;
	last_vel;

	constructor(x,y)
	{
		super(x,y);
		this.jobs=[];
		this.particle=undefined; /* current particle being operated on */
		this.color=Mu.Color.Get("Green");
		this.last_pos=this.position;
		this.last_acc=this.acceleration;
		this.last_vel=this.velocity;
	}

	PushJob(particle_fn)
	{
		this.jobs.push(particle_fn);
		return this;
	}

	Integrate(cur_time)
	{
		super.Integrate(cur_time);
		if(!this.jobs.length) return;
		if(!this.particle)
		{
			let job=this.jobs.splice(0,1)[0];
			/* Let the user do what they want, and expect a particle in return */
			this.particle=job(this.last_pos,this.last_vel,this.last_acc);
		}
		if(this.particle.age>this.particle.life)
		{
			this.last_pos=this.particle.position;
			this.last_vel=this.particle.velocity;
			this.last_acc=this.particle.acceleration;
			this.particle.Remove();
			this.particle=undefined;
		}
	}
};