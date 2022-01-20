let sv=require("socket.io")();
let clients={}; /* key=socket_id,val=socket */
let cache={}; /* key=socket_id */

function sv_send(msg,to,data)
{
	
}

function sv_receive(msg,data)
{

}

function sv_on_cl_disconnect(cl)
{
	cache[cl.id]=null;
	sv.broadcast.emit();
}

function sv_on_cl_connect(cl)
{
	clients[cl.id]=cl;
	if(!cache[cl.id]) cache[cl.id]={};
	cl.on("disconnect",sv_on_cl_disconnect);
}
sv.on("connection",sv_on_cl_connect);

sv.listen(3000);