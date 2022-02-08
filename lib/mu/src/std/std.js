Mu.Std=class
{
	static async Load()
	{
		await Mu.Include("../lib/mu/src/std/node.js");
		await Mu.Include("../lib/mu/src/std/stack.js");
		await Mu.Include("../lib/mu/src/std/list.js");
		await Mu.Include("../lib/mu/src/std/queue.js");
		await Mu.Include("../lib/mu/src/std/bst.js");
	}
};