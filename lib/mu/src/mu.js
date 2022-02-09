class Mu
{
	static dt=1000/60;
	static cur_time=0;
	static frame_time=0;
	static elapsed_time=0;
	static debug=false;
	static state=1;

	static Include(src)
	{
		let initd=false;
		let e=document.createElement("script");
		e.src=src;
		e.onload=()=>initd=true;
		document.body.appendChild(e);
		let poll=async(resolve)=>
		{
			if(!initd) return setTimeout(()=>poll(resolve));
			let slashes=src.split("/");
			let file=slashes[slashes.length-1];
			file=file.substring(0,file.length-3);
			file=file.substring(0,1).toUpperCase()+file.substring(1,file.length);
			if(Mu[file]&&Mu[file].Load) await Mu[file].Load();
			console.log("%cMu.Include: %s","color:green;",src);
			resolve();
		}
		return new Promise(resolve=>poll(resolve));
	}
	
	static async Load()
	{
		await Mu.Include("../lib/mu/src/std/std.js");
		await Mu.Include("../lib/mu/src/util/util.js");
		await Mu.Include("../lib/mu/src/event/event.js");
		await Mu.Include("../lib/mu/src/math/math.js");
		await Mu.Include("../lib/mu/src/input/input.js");
		await Mu.Include("../lib/mu/src/phys/phys.js");
		await Mu.Include("../lib/mu/src/gfx/gfx.js");
		Mu.Init();
		await Mu.Include("../src/game.js");
	}

	static Init()
	{
		Mu.Gfx.Init();
		Mu.Input.Init();
		Mu.Phys.Init();
		Mu.Event.Fire("Mu.Init");
		Mu.Run(Mu.dt);
	}
	
	static Run(new_time)
	{
		Mu.frame_time=new_time-Mu.cur_time;
		Mu.elapsed_time+=Mu.frame_time;
		Mu.cur_time=new_time;
		while(Mu.elapsed_time>=Mu.dt)
		{
			Mu.elapsed_time-=Mu.dt;
			Mu.Phys.Run(Mu.cur_time);
		}
		Mu.Gfx.Render();
		window.requestAnimationFrame(Mu.Run);
	}
};
window.onload=Mu.Load;