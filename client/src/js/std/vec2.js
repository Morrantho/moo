function mu_std_vec2_create(x,y)
{
	return {x:x,y:y};
}

function mu_std_vec2_add(v1,v2)
{
	return {x:v1.x+v2.x,y:v1.y+v2.y};
}

function mu_std_vec2_addn(v,n)
{
	return {x:v.x+n,y:v.y+n};
}

function mu_std_vec2_sub(v1,v2)
{
	return {x:v1.x-v2.x,y:v1.y-v2.y};
}

function mu_std_vec2_subn(v,n)
{
	return {x:v.x-n,y:v.y-n};
}

function mu_std_vec2_mul(v1,v2)
{
	return {x:v1.x*v2.x,y:v1.y*v2.y};
}

function mu_std_vec2_muln(v,n)
{
	return {x:v.x*n,y:v.y*n};
}

function mu_std_vec2_div(v1,v2)
{
	return {x:v1.x/v2.x,y:v1.y/v2.y};
}

function mu_std_vec2_divn(v,n)
{
	return {x:v.x/n,y:v.y/n};
}

function mu_std_vec2_mag(v)
{
	return v.x*v.x+v.y*v.y;
}

function mu_std_vec2_len(v)
{
	return mu_std_vec2_mag(v);
}

function mu_std_vec2_norm(v)
{
	let len=mu_std_vec2_mag(v);
	if(!len) return v;
	return mu_std_vec2_muln(v,1/len);
}

function mu_std_vec2_dot(v1,v2)
{
	return (v1.x*v2.x)+(v1.y*v2.y);
}

function mu_std_vec2_cross(v1,v2)
{
	return (v1.x*v2.y)-(v1.y*v2.x);
}