Mu.Phys.Particle.DynamicFire=class extends Mu.Phys.Particle
{
	constructor(x,y)
	{
		super(x,y);
		let vx=Mu.Math.Random(-2,2);
		let vy=Mu.Math.Random(-1,1);
		this.SetVelocity(vx,vy);
		this.SetMass(1.0); /* 1kg */
		let ax=Mu.Math.Sign(vx)*-Mu.Math.Random(0,0.03);
		this.SetAcceleration(ax,-0.25);
		this.SetDamping(0.9);
		let life=2000;
		let radius=24;
		this.SetLife(life);
		this.SetRadius(radius);
		this.radius_ratio=(radius/life)*radius;
		this.red=30;
		this.green=10;
		this.blue=0;
		this.alpha=1;
	}

	Integrate(cur_time)
	{
		super.Integrate(cur_time);
		this.SetRadius(this.radius-this.radius_ratio);
		this.alpha-=0.001;
		this.red+=3;
		this.green+=1;
		this.blue+=0.1;
		let col="rgb("+this.red+","+this.green+","+this.blue+","+this.alpha+")";
		this.color=col;
	}
};