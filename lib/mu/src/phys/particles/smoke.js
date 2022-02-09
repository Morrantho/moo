Mu.Phys.Particle.Smoke=class extends Mu.Phys.Particle
{
	constructor(x,y)
	{
		super(x,y);
		let vx=Mu.Math.Random(-2,2);
		let vy=Mu.Math.Random(-1,1);
		this.SetVelocity(vx,vy);
		this.SetMass(1.0); /* 1kg */
		let ax=Mu.Math.Sign(vx)*-Mu.Math.Random(0,0.025);
		this.SetAcceleration(ax,-0.25);
		this.SetDamping(0.9);
		let life=2000;
		let radius=24;
		this.SetLife(life);
		this.SetRadius(radius);
		this.ratio=(radius/life)*radius;
		this.red=0;
		this.green=0;
		this.blue=0;
		this.alpha=0.9;
	}

	Integrate(cur_time)
	{
		super.Integrate(cur_time);
		this.SetRadius(this.radius-this.ratio);
		this.alpha-=0.01;
		let color="rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")";
		this.color=color;
	}
};