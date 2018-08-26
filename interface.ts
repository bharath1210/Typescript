interface task{
	exam: string
}

function inters(arg:task){
	console.log(arg.exam)
}
let activit = { sports: "monday", sub: "tuesday", exam: "wednesday" };
inters(activit);

//....same ....


function inter(arg: { exam: string }) {
    console.log(arg.exam);
}
let activity = { sports: "monday", sub: "tuesday", exam: "wednesday" };
inter(activity);