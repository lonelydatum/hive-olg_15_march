function start(data) {
	TweenLite.defaultEase = Power2.easeInOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.from('#player_bg', .7, {x: data.playerX || "+=0", scale:data.playerScale||"+=0", ease:Power2.easeOut})
	tl.staggerFrom('#t1 img', .3, {x:'+=50', opacity:0}, .1, .2)
	
	tl.from('#logo_proline', .3, {scale:1.3, opacity:0}, "+=1.8")
	const tlShake = new TimelineMax({repeat:3, yoyo:true})
	tlShake.to('#player_bg', .05, {x:'-=3'})

	tl.add('shake')
	tl.add(tlShake, 'shake')
	tl.staggerTo('#t1 img', .2, {x:'-=20', opacity:0}, .1, 'shake')

	tl.add('t2')
	tl.staggerFrom('#t2 img', .3, {x:'+=50', opacity:0}, .1, 't2-=.33')
	tl.to('#logo_proline', .3, {y:data.logoY||"+=0"}, "t2")

	tl.from(['#odds'], .3, {opacity:0}, "+=.2")
	tl.from(['#logos'], .3, {opacity:0}, "+=.5")
	tl.set('#legalBtn', {display:'block'})



}




export default start