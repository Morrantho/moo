Mu.Gfx=class
{
	static canvas;
	static context;

	static async Load()
	{
		await Mu.Include("../lib/mu/src/gfx/color.js");		
	}

	static Init()
	{
		let link=document.createElement("link");
		link.rel="stylesheet";
		link.type="text/css";
		link.href="../lib/mu/style.css";
		document.head.appendChild(link);
		Mu.Gfx.canvas=document.createElement("canvas");
		document.body.appendChild(Mu.Gfx.canvas);
		Mu.Gfx.context=Mu.Gfx.canvas.getContext("2d");
	}

	static Resize()
	{
		Mu.Gfx.canvas.width=window.innerWidth;
		Mu.Gfx.canvas.height=window.innerHeight;
		Mu.Gfx.canvas.style.width=Mu.Gfx.canvas.width;
		Mu.Gfx.canvas.style.height=Mu.Gfx.canvas.height;
	}

	static Clear()
	{
		Mu.Gfx.context.fillStyle="#bdc3c7";
		Mu.Gfx.context.fillRect(0,0,Mu.Gfx.canvas.width,Mu.Gfx.canvas.height);
	}

	static Render()
	{
		Mu.Gfx.Resize();
		Mu.Gfx.Clear();
		for(let particle of Mu.Phys.particles)
		{
			if(!particle) continue;
			particle.Render();
		}
	}
};