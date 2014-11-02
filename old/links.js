/* Just update the top header */
function header(str)
{
    var strNew = 'top_'+str+'.html'
    var strFrameset = 'frameset_'+str+'.html'
    if (!(parent.header.location))
	{
		top.location.replace(strFrameset)
		return
    }

    if (parent.header.location.href!=strNew)
		parent.header.location.replace(strNew)
}