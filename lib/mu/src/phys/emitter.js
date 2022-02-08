Mu.Phys.Emitter=class extends Mu.Phys.Particle
{
	particle_fns;
	particles;
	frequency;
	repetitions;

	constructor(x,y)
	{
		super(x,y);
		this.particle_fns=[];
		this.particles=[];
		this.frequency=1000;
		this.repetitions=10;
		this.SetColor("Grey");
	}

	Integrate(cur_time)
	{
		super.Integrate(cur_time);
		if(this.age<this.frequency) return;
		this.Emit();
		this.Cleanup();
	}

	PushFunction(fn)
	{
		this.particle_fns.push(fn);
	}

	SetRepetitions(reps)
	{
		this.repetitions=reps;
	}

	SetFrequency(freq)
	{
		this.frequency=freq;
	}

	SetInfinite()
	{
		this.repetitions=-1;
	}

	IsInfinite()
	{
		return this.repetitions==-1;
	}

	Cleanup()
	{
		for(let i=0;i<this.particles.length;i++)
		{
			let pid=this.particles[i];
			if(!pid) continue;
			let particle=Mu.Phys.particles[pid];
			if(!particle) continue;
			if(particle.age<particle.life) continue;
			this.particles.splice(i,1);
			particle.Remove();
		}
	}

	Emit()
	{
		if(!this.repetitions) return;
		for(let i=0;i<this.particle_fns.length;i++)
		{
			let fn=this.particle_fns[i];
			let particle=new fn(this.position.x,this.position.y);
			this.particles.push(particle.id);
		}
		this.born=Mu.cur_time;
		if(this.IsInfinite()) return;
		this.repetitions--;
	}
};