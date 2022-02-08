Mu.Event=class
{
	static events=[];

	static Listen(event,fn)
	{
		if(!Mu.Event.events[event]) Mu.Event.events[event]=[];
		Mu.Event.events[event].push(fn);
	}

	static Fire(event,...args)
	{
		if(!Mu.Event.events[event]) Mu.Event.events[event]=[];
		for(let fn of Mu.Event.events[event]) fn(args);
	}
};