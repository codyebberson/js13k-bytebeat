// Source: https://github.com/SthephanShinkufag/bytebeat-composer/blob/master/library/compact-js.json
// MIT License
// Cloned on 2024-03-12

const songs = [
	{
		"name": "Constructivist",
		"starred": 1,
		"children": [{
			"author": "a1k0n",
			"name": "algorithmic music in a \"constructivist\" way",
			"url": "https://news.ycombinator.com/item?id=3063359#3064980",
			"date": "2011-10-03",
			"codeOriginal": "SS=function(s,o,r,p){var c=s.charCodeAt((t>>r)%p);return c==32?0:31&t*Math.pow(2,c/12-o)},SS(\"0 0     7 7     037:<<\",6,10,32) + (t&4096?SS(\"037\",4,8,3)*(4096-(t&4095))>>12 : 0)",
			"codeMinified": "SS=(s,o,r,p)=>(c=s.charCodeAt((t>>r)%p),32==c?0:31&t*2**(c/12-o)),3*SS('0 0     7 7     037:<<',6,10,32)+5*(t&4096?SS('037',4,8,3)*(4096-(t&4095))>>12:0)"
		}, {
			"author": "Devan Wolf",
			"name": "Simplified Constructivist",
			"url": "https://dollchan.net/btb/res/3.html#224",
			"date": "2022-10-18",
			"codeOriginal": "(t*[1,,1,,,,,,1.5,,1.5,,,,,,1,1.2,1.5,1.8,2,2][t>>10&31]&127)+(t>>12&1?(t*[4,4.8,6][(t>>8)%3]&127)*(~t>>4&255)>>8:0)"
		}]
	}, {
		"author": "CC123",
		"name": "baseline, melody, snare, volume control",
		"url": "http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html?showComment=1317629876555#c513659358561118663",
		"date": "2011-10-03",
		"sampleRate": 11025,
		"codeOriginal": "( ((t*4)*(((t>>>11)&1)?1:0)*(((t>>>11)&8)?0:1) + (t*2)*(((t>>>10)&1)?1:0)*(((t>>>10)&128)?0:1) +(t*4)*(((t>>>10)&1)?1:0)*(((t>>>10)&128)?1:0) + (t*sin(t)*(((t>>>10)&4)?1:0)*(((t>>>10)&1)?1:0))) % 256) * (7/10)",
		"codeMinified": "(4*t*(t>>>11&1?1:0)*(t>>>11&8?0:1)+2*t*(t>>>10&1?1:0)*(t>>>10&128?0:1)+4*t*(t>>>10&1?1:0)*(t>>>10&128?1:0)+t*sin(t)*(t>>>10&4?1:0)*(t>>>10&1?1:0))%256*.7"
	}, {
		"name": "No Limit",
		"cover": {
			"name": "2 Unlimited - No Limit",
			"url": "https://youtu.be/qM5W7Xn7FiA"
		},
		"children": [{
			"author": "mu6k",
			"url": "http://www.pouet.net/topic.php?which=8357&page=9#c388931",
			"date": "2011-10-04",
			"mode": "Signed Bytebeat",
			"codeOriginal": "((sin(2000/(t&0xfff))*127)*0.2 + (( (t<<1)*(1+0.333*((t&0xffff)>0x7fff)+0.177*((t&0xffff)>0xbfff )) )&0xff)*((t&0xfff)/0x1fff)*0.4 + (( ( (t>>4^t>>6|t>>10))|(t*3*(1+0.333*((t&0xffff)>0x7fff)+0.177*((t&0xffff)>0xbfff))) )&0xff)*0.25)",
			"codeMinified": "127*sin(2E3/(t&4095))*.2+(t&4095)/8191*((t<<1)*(1+.333*(32767<(t&65535))+.177*(49151<(t&65535)))&255)*.4+.25*((t>>4^t>>6|t>>10|3*t*(1+.333*(32767<(t&65535))+.177*(49151<(t&65535))))&255)"
		}, {
			"author": "ryg",
			"name": "another take on simplifying mu6k's thing",
			"url": "https://www.pouet.net/topic.php?which=8357&page=10#c388986",
			"date": "2011-10-05",
			"mode": "Signed Bytebeat",
			"codeOriginal": "sin(2000/(y=t&4095))*25+((x=t*(15&0x9866>>(t>>12&12))/6)&127)*(y/1e+4)+((t>>6^t>>8|t>>12|x)&63)",
			"codeMinified": "sin(2e3/(y=t&4095))*25+(x=t*(15&0x9866>>(t>>12&12))/6&127)*y/1e4+((t>>6^t>>8|t>>12|x)&63)",
			"starred": 1
		}]
	}, {
		"author": "ryg",
		"children": [{
			"name": "a new industrial chiptune",
			"url": "http://www.pouet.net/topic.php?which=8357&page=11#c389005",
			"date": "2011-10-05",
			"sampleRate": 11025,
			"codeOriginal": "t*(1+\"4451\"[t>>13&3]/10)&t>>9+(t*0.003&3)",
			"codeMinified": "t*(1+'4451'[t>>13&3]/10)&t>>9+(.003*t&3)"
		}, {
			"url": "https://www.pouet.net/topic.php?which=8357&page=12#c389146",
			"date": "2011-10-06",
			"sampleRate": 44100,
			"codeOriginal": "((t*\"36364689\"[t>>13&7]/12)&128)+((((t>>12)^(t>>12)-2)%11*t/4|t>>13)&127)",
			"codeMinified": "(t*'36364689'[t>>13&7]/12&128)+(((t>>12^(t>>12)-2)%11*t/4|t>>13)&127)",
			"starred": 1
		}]
	}, {
		"name": "G minor Bach",
		"cover": {
			"name": "Bach: Prelude & Fugue in C minor, BWV 847",
			"url": "https://youtu.be/CGVL5j6BEKs"
		},
		"children": [{
			"author": "skurk",
			"url": "http://www.pouet.net/topic.php?which=8357&page=11#c389045",
			"date": "2011-10-05",
			"mode": "Signed Bytebeat",
			"codeOriginal": "30*cos(t*Math.pow(2,(\"B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/\"+ \";2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>69\"+ \"2>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*< ;3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=4\"+ \"81=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1; 26/;2:1;2@&;,9*;\"+ \",8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92 =-;,=->*=-;,\"+ \"=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192 412141;-634\"+ \"1613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6\").charCodeAt (t>>9)/12-7))",
			"codeMinified": "30*cos(t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>9)/12-7))"
		}, {
			"author": "SthephanShi",
			"name": "Non-cos version",
			"codeMinified": "30*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>9)/12-7)"
		}, {
			"author": "Chasyxx",
			"name": "\"Warpnig timeline\" [Slowed down, PWM changing version of G minor Bach + noise]",
			"url": "https://www.reddit.com/r/bytebeat/comments/qi3enp/with_new_bytecodes_already_posted_here_are_all/",
			"date": "2021-10-29",
			"codeOriginal": "a=(30*t*Math.pow(2,\"B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6\".charCodeAt(t>>10)/12-7))%256,a>([(Math.abs(((t>>8)%256)-128))+64])?Math.random()*16:~(Math.random()*16)",
			"codeMinified": "a=30*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>10)/12-7)%256,a>[abs((t>>8)%256-128)+64]?16*random():~(16*random())"
		}, {
			"author": "Decent-Manager-6169",
			"name": "Still Don't Know The Name",
			"url": "https://www.reddit.com/r/bytebeat/comments/scvxia/still_dont_know_the_name/",
			"date": "2022-01-26",
			"sampleRate": 32000,
			"codeOriginal": "a=30*t*pow(2,\"B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6\".charCodeAt(t>>12)/12-7)/4,(a%255+a%128+a%64+a%32+a%16+a%127.8+a%64.8+a%32.8+a%16.8)/3",
			"codeMinified": "a=30*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>12)/12-7)/4,(a%255+a%128+a%64+a%32+a%16+a%127.8+a%64.8+a%32.8+a%16.8)/3"
		}, {
			"author": "Zackx",
			"name": "Synthwave G minor Bach",
			"url": "https://dollchan.net/btb/res/204.html#449",
			"date": "2022-02-22",
			"sampleRate": 26900,
			"codeOriginal": [
				"p=t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>12)/12-4),",
				"((p*1.48%256+p*1.47%256)/2*(-t>>4&255)>>9)+",
				"sin(10*cbrt(t%16384))*32+32+",
				"(12*random()*(~t>>6&255)>>6)*(t&16384)/16e3"
			],
			"codeMinified": "p=t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>12)/12-4),((1.48*p%256+1.47*p%256)/2*(-t>>4&255)>>9)+32*sin(10*cbrt(t%16384))+(12*random()*(~t>>6&255)>>6)*(t&16384)/16E3+32"
		}, {
			"author": "Firstnameiskowitz",
			"name": "G Minor Bach Synthwave but faster",
			"url": "https://www.reddit.com/r/bytebeat/comments/11p36h7/more_lazily_made_remixes/",
			"remix": {
				"author": "Zackx",
				"name": "Synthwave G minor Bach",
				"url": "https://dollchan.net/btb/res/204.html#449"
			},
			"date": "2022-03-12",
			"sampleRate": 32000,
			"codeOriginal": "t%=2**20,p=t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>11)/12-4),((1.48*p%256+1.47*p%256)/2*(-t>>4&255)>>9)+32*sin(10*cbrt(t%16384))+(12*random()*(~t>>6&255)>>6)*(t&16384)/16E3+32"
		}, {
			"author": "Zackx",
			"name": "Still Don't Know The Name + drums",
			"url": "https://dollchan.net/btb/res/204.html#896",
			"remix": [{
				"author": "Decent-Manager-6169",
				"name": "Still Don't Know The Name",
				"url": "https://www.reddit.com/r/bytebeat/comments/scvxia/still_dont_know_the_name/"
			}, {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			}],
			"date": "2023-04-20",
			"sampleRate": 32000,
			"codeOriginal": "a=30*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>12)/12-7)/4,(a%255+a%128+a%64+a%32+a%16+a%127.8+a%64.8+a%32.8+a%16.8)/7-7+((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&8191)/230)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13]",
			"codeMinified": "a=30*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>12)/12-7)/4,(a%255+a%128+a%64+a%32+a%16+a%127.8+a%64.8+a%32.8+a%16.8)/7-7+((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&8191)/230)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13]"
		}, {
			"author": "Zackx",
			"name": "halloween G minor bach",
			"url": "https://dollchan.net/btb/res/204.html#945",
			"date": "2023-04-26",
			"sampleRate": 38000,
			"codeOriginal": "p=t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6'.charCodeAt(t>>12)/12-4),((1.48*p%256+1.47*p%256)/2*(-p*2.95&255)>>9)+32*sin(8*cbrt(t*'1114111811161148'[15&t>>14]%16384))+((t*sin(t>>2)&128)*(~t>>6&255)>>9)*(t&16384?1:0)+32+((127&t*2**([1,9,6,8,9,3,8,1,6,3,4,9,6,4,6,9][t>>17]/12)/8.1)+(sin(t/9e3)*16+64)&128)/2"
		}, {
			"author": "awogler9124812041",
			"name": "Oh No. The Scary Is Coming. Run.",
			"url": "https://www.reddit.com/r/bytebeat/comments/14ax0j5/oh_no_the_scary_is_coming_run/",
			"date": "2023-06-16",
			"sampleRate": 44100,
			"codeOriginal": "a=10*t*2**('B*918/916-918/91B*918/916-918/91>*;2:1;26/;2:1;2>*;2:1;26/;2:1;2A*;291;28/;291;2A*;291;28/;291;2B*=-;,=-91=-;,=-B*=-;,=-91=-;,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&;2:1;26/;2:1;2B&;2:1;26/;2:1;2@&;,9*;,8/;,9*;,@&;,9*;,8/;,9*;,@%=-;,=-91=-;,=-@%=-;,=-91=-;,=->*=-;,=-92=-;,=->*=-;,=-92=-;,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141;-6341613/634163;-6341613/634163;,8/6-8/528/6-8/;,8/6-8/528/6-8'.charCodeAt(t>>12&511)/12-7),b=(sqrt(t%([8,8,8,8,8,8,8,4,8,8,8,8,8,8,8,2,8,8,8,8,8,8,8,4,8,8,8,8,8,8,8,1][t>>13&31]*512)*4096)+(1&t)*64*(t>>13&1))&128,w=t=>t%192.1+t%63.9,w2=t=>t%128+t%63+t%65,(w(a*((t>>10&1)+1))|t>>4)%256/3+w2(a/2)/3+b*2/3",
			"codeMinified": "a=10*t*2**('B*918/916-918/91B*918/916-918/91>*,2:1,26/,2:1,2>*,2:1,26/,2:1,2A*,291,28/,291,2A*,291,28/,291,2B*=-,,=-91=-,,=-B*=-,,=-91=-,,=-E*>6=4>692>6=4>6E*>6=4>692>6=4>6D*<3:1<380<3:1<3D*<3:1<380<3:1<3D(=4<3=481=4<3=4D(=4<3=481=4<3=4B(:18/:16.:18/:1B(:18/:16.:18/:1B&,2:1,26/,2:1,2B&,2:1,26/,2:1,2@&,,9*,,8/,,9*,,@&,,9*,,8/,,9*,,@%=-,,=-91=-,,=-@%=-,,=-91=-,,=->*=-,,=-92=-,,=->*=-,,=-92=-,,=->,8/6-8/428/6-8/>,8/6-8/428/6-8/=-412/4192412141=-412/4192412141,-6341613/634163,-6341613/634163,,8/6-8/528/6-8/,,8/6-8/528/6-8'.charCodeAt(t>>12&511)/12-7),b=sqrt(t%(512*[8,8,8,8,8,8,8,4,8,8,8,8,8,8,8,2,8,8,8,8,8,8,8,4,8,8,8,8,8,8,8,1][t>>13&31])*4096)+64*(1&t)*(t>>13&1)&128,w=t=>t%192.1+t%63.9,w2=t=>t%128+t%63+t%65,(w(a*((t>>10&1)+1))|t>>4)%256/3+w2(a/2)/3+2*b/3"
		}],
		"starred": 2
	}, {
		"author": "Gasman",
		"children": [{
			"name": "some kind of 80s synth type thing (Never Gonna Give You Up)",
			"url": "http://www.pouet.net/topic.php?which=8357&page=12#c389109",
			"cover": {
				"name": "Rick Astley - Never Gonna Give You Up",
				"url": "https://youtu.be/dQw4w9WgXcQ"
			},
			"date": "2011-10-05",
			"codeOriginal": "(t<<3)*[8/9,1,9/8,6/5,4/3,3/2,0][[0xd2d2c8,0xce4088,0xca32c8,0x8e4009][t>>14&3]>>(0x3dbe4688>>((t>>10&15)>9?18:t>>10&15)*3&7)*3&7]"
		}, {
			"name": "Steady On Tim, It's Only A Budget Game",
			"url": [
				"https://demozoo.org/music/305284/",
				"http://www.sizecoding.org/wiki/Steady_On_Tim"
			],
			"date": "2023-02-12",
			"sampleRate": 44100,
			"codeOriginal": "M=T=>(b=abs((T&31)-16),(t*2**([-1,4,7][T*4%3|0]/12+(K=1+((1-(T>>5&3))%2-1)/6))&128)*(T>>8&&12-T%12)/12)+(t*2**(K+(b/5|0)-(5514>>b%(T>>9?4:5)*4&15)/12)&128),M(T=t/5e3)/3+M(T-3)/5+(T>>7&&(t*2**((T&4&&(T&7)-1)/6-4)&63*(197>>T%8&1))+random()*32*(1-(T+4)%8/8))",
			"starred": 2
		}]
	}, {
		"name": "Longline Theory",
		"cover": {
			"name": "Chaos Theory by Conspiracy",
			"url": "https://youtu.be/MAnhcUNHRW0"
		},
		"starred": 2,
		"children": [{
			"author": "mu6k",
			"url": "http://www.pouet.net/topic.php?which=8357&page=13#c389287",
			"date": "2011-10-06",
			"mode": "Signed Bytebeat",
			"codeOriginal": "((sb=t>0xffff)&0)+Math.max(Math.min(((y=Math.pow(2,[15,15,23,8][t>>14&3]/12))&0)+(((y*t*0.241)&127-64)+((y*t*0.25)&127-64))*1.2+ (((a=1-(t&0x7ff)/0x7ff)&0)+(((5*t&0x7ff)*a)&255-127)*((0x53232323>>(t>>11&31))&1)*a*1.0+(((d=(14*t*t^t)&0x7ff)*a)&255-128)*((0xa444c444>>(t>>11&31))&1)*a*1.5+((a*a*d*(t>>9&1)&0xff-0x80)*0.1337))*sb+ ((g=(t&0x7ff)/0x7ff)&0)+((g=1-(g*g))&0)+((h=Math.pow(2,([[15,18,17,17,17,17,999,999,22,22,999,18,999,15,20,22],[20,18,17,17,10,10,999,999,20,22,20,18,17,18,17,10]][((t>>14&3)>2)&1][t>>10&15])/12))&0)+(((h*t&31)+(h*t*1.992&31)+(h*t*.497&31)+(h*t*0.977&31)-64))*g*2.0*sb,127),-128)",
			"codeMinified": "((sb=65535<t)&0)+max(min(((y=2**([15,15,23,8][t>>14&3]/12))&0)+1.2*((y*t*.241&63)+(y*t*.25&63))+(((a=1-(t&2047)/2047)&0)+((5*t&2047)*a&128)*(1394811683>>(t>>11&31)&1)*a+((d=(14*t*t^t)&2047)*a&127)*(2755970116>>(t>>11&31)&1)*a*1.5+.1337*(a*a*d*(t>>9&1)&127))*sb+((g=(t&2047)/2047)&0)+((g=1-g*g)&0)+((h=2**([[15,18,17,17,17,17,999,999,22,22,999,18,999,15,20,22],[20,18,17,17,10,10,999,999,20,22,20,18,17,18,17,10]][2<(t>>14&3)&1][t>>10&15]/12))&0)+((h*t&31)+(h*t*1.992&31)+(h*t*.497&31)+(h*t*.977&31)-64)*g*2*sb,127),-128)",
			"file": "mu6k - Longline Theory.js",
			"fileFormatted": true
		}, {
			"author": "ryg, las, decipher, p01",
			"name": "300b Information Theory",
			"url": "http://www.pouet.net/topic.php?which=8357&page=17#c389541",
			"date": "2011-10-07",
			"mode": "Signed Bytebeat",
			"codeOriginal": "w=t>>9,k=32,m=2048,a=1-t/m%1,d=(14*t*t^t)%m*a,y=[3,3,4.7,2][p=w/k&3]*t/4,h=\"IQNNNN!!]]!Q!IW]WQNN??!!W]WQNNN?\".charCodeAt(w/2&15|p/3<<4)/33*t-t,s=y*.98%80+y%80+(w>>7&&a*((5*t%m*a&128)*(0x53232323>>w/4&1)+(d&127)*(0xa444c444>>w/4&1)*1.5+(d*w&1)+(h%k+h*1.99%k+h*.49%k+h*.97%k-64)*(4-a-a))),s*s>>14?127:s"
		}]
	}, {
		"author": "rabidcow",
		"name": "Rabid symphony",
		"url": "https://www.reddit.com/r/programming/comments/mbakl/experimental_oneline_algorithmic_music/c2zn7qv/",
		"date": "2011-11-15",
		"codeOriginal": "t*Math.pow(2,(\"kotojokohogohotojokohogokokhpmjmjfokhomkjhggcc kotojokohogohotojokohogokokhpmjmjfrmorokfjkkkkkkrpomkjkmokmpoprrjjkkoommoottqqhjkkjjhfecebccccccfffhihfdfcdahhhjkjhghegcmjcjmjpjojmjkhchkhohmhkhjhkhmhohphmhoomkjkhhhhhh\".charCodeAt((t>>10)&255)-58)/12)*63>>6&132",
		"codeMinified": "t*2**(('kotojokohogohotojokohogokokhpmjmjfokhomkjhggcckotojokohogohotojokohogokokhpmjmjfrmorokfjkkkkkkrpomkjkmokmpoprrjjkkoommoottqqhjkkjjhfecebccccccfffhihfdfcdahhhjkjhghegcmjcjmjpjojmjkhchkhohmhkhjhkhmhohphmhoomkjkhhhhhh'.charCodeAt(t>>10&255)-58)/12)*63>>6&132",
		"starred": 1
	}, {
		"author": "yehar",
		"children": [{
			"url": "http://www.pouet.net/topic.php?which=8357&page=21#c401680",
			"date": "2012-02-25",
			"codeOriginal": "t>>4+!(-t>>13&7)+2*!(t>>17)|t*t*(t>>(t>>12^t>>11)%3+10)/(7+(t>>10&t>>14&3))*!(t&512)<<3+(t>>14&1)"
		}, {
			"name": "No 4",
			"url": "http://www.pouet.net/topic.php?which=8357&page=21#c401817",
			"date": "2012-02-26",
			"codeOriginal": "((v=t/2^(t&64?63:0))>>v)/(1+(v>>v>>7))&t/32|(t>>11)%8%3*t*t&15",
			"codeMinified": "v=t/2^(t&64?63:0),v>>=v,v/(1+(v>>7))&t/32|(t>>11)%8%3*t*t&15"
		}, {
			"name": "No 5",
			"url": "https://www.pouet.net/topic.php?which=8357&page=21#c401952",
			"date": "2012-02-28",
			"mode": "Signed Bytebeat",
			"codeOriginal": "(u=3*t>>t/4096%4&-t%(t>>16|16)*t>>14&8191)/(u>>6|1)*4"
		}]
	}, {
		"author": "mu6k",
		"url": "http://www.pouet.net/topic.php?which=8357&page=21#c401841",
		"date": "2012-02-26",
		"codeOriginal": "u=10^(t>>15&7),u+=3,y=(t>>11&7)/u,f=t*8*y,z=(t*16/u)&0x63|f|f*1.01,z*2",
		"codeMinified": "u=10^t>>15&7,u+=3,y=(t>>11&7)/u,f=8*t*y,z=16*t/u&99|f|1.01*f,2*z"
	}, {
		"author": "Suborg",
		"children": [{
			"name": "interleaved major scale, making a rest after each note",
			"url": "http://www.pouet.net/topic.php?which=8357&page=23#c459110",
			"date": "2013-10-18",
			"codeOriginal": "t*.35*(\"#\\013;\\013&\\013A\\013)\\013G\\013+\\013K\\013/\\013S\\0133\\013[\\0138\\013e\\013;\\013k\\013\".charCodeAt(t/1e3%32)-11)"
		}, {
			"name": "Fort Boyard",
			"url": "http://www.pouet.net/topic.php?which=8357&page=23#c459199",
			"date": "2013-10-19",
			"codeOriginal": "t*.17*(\"33AAAAA\\013AAKKKGGG;;A\\013AK[KSSSSSSSS\\013\\013[\\013[SSSKKGGG;;;GGA\\013AK[KAAAAAAAA\".charCodeAt(t/1800%64)-11)"
		}]
	}, {
		"author": "Unknown",
		"url": "https://www.reddit.com/r/bytebeat/comments/20km9l/cool_equations/",
		"date": "2014-03-16",
		"children": [{
			"name": "\"Harmony\". Based off of mu6k's \"Long Line Theory\"",
			"codeOriginal": "t%50.01+t%40.1+t%30.1+t%60.01"
		}, {
			"name": "\"Harmony v2\". Based off of mu6k's \"Long Line Theory\"",
			"codeOriginal": "w=[1,2,3,4,3,4,1][(t>>13)%7]*t,(w%50.01+w%40.1+w%30.1+w%60.01)",
			"codeMinified": "w='1234341'[(t>>13)%7]*t,w%50.01+w%40.1+w%30.1+w%60.01",
			"starred": 1
		}, {
			"name": "Array song",
			"codeOriginal": "a=[1,1,2,3,1,1,2,3,1,1,2,4,4,4,5,5,5][(t>>12)%17],b=[5,4,3,2][(t>>16)%4],(t*b/a)%50.1+(t*b/a)%50",
			"codeMinified": "a='11231123112444555'[(t>>12)%17],b=2+(~t>>16&3),t*b/a%50.1+t*b/a%50"
		}, {
			"name": "Trill",
			"codeOriginal": "sin(sin(t/100)-t/((2+(t>>10&t>>12)%9)))*64+128",
			"codeMinified": "64*sin(sin(t/100)-t/(2+(t>>10&t>>12)%9))+128"
		}]
	}, {
		"author": "Anonymous from russian imageboards",
		"name": "2ch.so Generative Music and remixes vol.1",
		"url": "http://abload.de/img/1405110021643uguil.jpg",
		"date": "2014-07-11",
		"children": [{
			"name": "6) FUNERAL",
			"codeOriginal": "((((((t/16000)%2>1?t*3|16*t:t*2|16*t)|123)+((t/32000)%2>1?(t%1000<500?t*18.3:0):(t%1000<500?t*18.9:0)))|(t/1000<<4))-128)+(t%1000<50?t<<t/3:0)",
			"codeMinified": "(((1<t/16E3%2?3*t|16*t:2*t|16*t)|123)+(1<t/32E3%2?500>t%1E3?18.3*t:0:500>t%1E3?18.9*t:0)|t/1E3<<4)-128+(50>t%1E3?t<<t/3:0)"
		}, {
			"name": "+ FUNERAL WITH RHYTHM",
			"url": "http://arhivach.ng/thread/28592/#71681923",
			"codeOriginal": "((((((t/16000)%2>1?t*3|16*t:t*2|16*t)|123)+((t/32000)%2>1?(t%1000<500?t*18.3:0):(t%1000<500?t*18.9:0)))|(t/1000<<8))|256)%205+(t&1000<50?t<<t/5:0)",
			"codeMinified": "(((1<t/16E3%2?3*t|16*t:2*t|16*t)|123)+(1<t/32E3%2?500>t%1E3?18.3*t:0:500>t%1E3?18.9*t:0)|t/1E3<<8|256)%205+(t&0?t<<t/5:0)"
		}, {
			"name": "8) SAW",
			"codeOriginal": "(((t/2560)%11.6<1.5?(t*7.5):(0)+(t/5120)%2.5<1?(t*5.7):(t*5))&(t*2>>5.5))^((((!t*12)|(t>>5))|((t*4)|(!t>>8))^((~t<<6)|(~t*50))*t*t*t)|((t*12)|(t>>4))|((t*~4)|(t>>8))^((t<<!6)|(t*128)))",
			"codeMinified": "(1.5>t/2560%11.6?7.5*t:1>t/5120%2.5?5.7*t:5*t)&2*t>>5.5^(12*!t|t>>5|(4*t|!t>>8)^(~t<<6|50*~t)*t*t*t|12*t|t>>4|(-5*t|t>>8)^(t<<0|128*t))"
		}, {
			"name": "10) FUTURE ROCK",
			"codeOriginal": "t%1000<50?t<<t/5:0+(t/16000)%2>1?(t/22.5>>t*14)*(t%200>5)%64:(t*2.1)*(t%200>5)%64+((t/500)%6>4?t*4.87:0)%176",
			"codeMinified": "50>t%1E3?t<<t/5:1<t/16E3%2?(t/22.5>>14*t)*(5<t%200)%64:2.1*t*(5<t%200)%64+(4<t/500%6?4.87*t:0)%176"
		}]
	}, {
		"author": "Anonymous from russian imageboards",
		"name": "Extraordinary thread of FRACTAL MUSIC",
		"url": "http://arhivach.ng/thread/28592/",
		"date": "2014-07-12",
		"children": [{
			"url": "http://arhivach.ng/thread/28592/#71679463",
			"codeOriginal": "(t+(t^(t>>7))^0.5)*5|((t*2>>43|t*3*5>>4)*19)&(t*7>>172)/2*(t*((t>>9|t>>13)&15))&129|t*((t>>9|t>3)&25&t>>10)",
			"codeMinified": "5*(t+(t^t>>7)^.5)|19*(2*t>>43|15*t>>4)&(7*t>>172)/2*t*((t>>9|t>>13)&15)&129|t*((t>>9|3<t)&25&t>>10)"
		}, {
			"url": "http://arhivach.ng/thread/28592/#71681647",
			"codeOriginal": "(t*t/10000)%100|((t%29+t%46+t%((t>>14)%2?34:43))+(t%17))<<1",
			"codeMinified": "t*t/1E4%100|t%29+t%46+t%((t>>14)%2?34:43)+t%17<<1"
		}]
	}, {
		"author": "keramon",
		"name": "disheveeeel",
		"url": "https://battleofthebits.com/arena/Entry/disheveeeel.txt/17655/",
		"date": "2015-04-29",
		"codeOriginal": "t * t % (t / 3.33)",
		"codeMinified": "t*t%(t/3.33)"
	}, {
		"author": "radian",
		"name": "I could not explain this to the IT dept",
		"url": "https://battleofthebits.com/arena/Entry/I+could+not+explain+this+to+the+IT+dept./17673/",
		"date": "2015-05-04",
		"codeOriginal": "S=function(c,o,r,p){  var c=c.charCodeAt((t>>r)%p);return c==32?0:31&t*Math.pow(2,c/12-o)},C=function(){if (t%8){return (t&8096?S(\"047\",4,8,3)*(4096-(t&4095))>>12 : 0);}return (t&8096?S(\"259049\",4,8,6)*(4096-(t&4095))>>13 : 0);},S(\"20 0 0 034 4 0 047 259:<<\",7,10,32)+C()+(t&4096?S(\"047\",3,8,3)*(4096-(t&4095))>>12 : 0) +(t&4096?S(\"0407\",5,16,4)*(4096-(t&4095))>>12 : 0) +(((800/(t&16383))&2)*35)",
		"codeMinified": "S=(c,o,r,p)=>(c=c.charCodeAt((t>>r)%p),32==c?0:31&t*2**(c/12-o)),C=()=>t%8?t&8096?S('047',4,8,3)*(4096-(t&4095))>>12:0:t&8096?S('259049',4,8,6)*(4096-(t&4095))>>13:0,S('20 0 0 034 4 0 047 259:<<',7,10,32)+C()+(t&4096?S('047',3,8,3)*(4096-(t&4095))>>12:0)+(t&4096?S('0407',5,16,4)*(4096-(t&4095))>>12:0)+35*(800/(t&16383)&2)"
	}, {
		"author": "mega9man",
		"name": "347 BEATSTEP INC.",
		"url": "https://battleofthebits.com/arena/Entry/347+BEATSTEP+INC./20403/",
		"date": "2016-01-06",
		"sampleRate": 11025,
		"codeOriginal": [
			"128 + ",
			"",
			"sin(t/24 *((t >> 10) & 42) + 1*sin(t/64 * (t/1 >> 15) & 21)) * 24 ",
			"",
			"+ (sin(t*1/3/4*1 + 4*sin(t*1/6/4*1)) * ((t >> 11) & 1)) * 16 ",
			"",
			"+ (sin(t*1/6/4*1 + 4*sin(t*1/12/4*1)) * ((t >> 10) & 1)) * 16",
			" ",
			"+ ((3e3/(y=t*4&16383))&1) * 56 ",
			"",
			"+ ((3e2/(y=t*32&28600))&1) * 56 ",
			"",
			"+ sin(t/16 *((t >> 10) & 42) + 1*sin(t/64 * (t/1 >> 7) & 8)) * 12"
		],
		"codeMinified": "128+24*sin(t/24*(t>>10&42)+1*sin(t/64*(t/1>>15)&21))+sin(1*t/3/4+4*sin(1*t/6/4))*(t>>11&1)*16+sin(1*t/6/4+4*sin(1*t/12/4))*(t>>10&1)*16+56*(3E3/(y=4*t&16383)&1)+56*(300/(y=32*t&28600)&1)+12*sin(t/16*(t>>10&42)+1*sin(t/64*(t/1>>7)&8))",
		"starred": 2
	}, {
		"author": "Gabriel Miceli",
		"url": "https://www.youtube.com/watch?v=V4GfkFbDojc",
		"date": "2016-07-09",
		"children": [{
			"name": "Noise Maker",
			"remix": {
				"author": "Blueberry",
				"name": "Good old fractal melody",
				"url": "http://www.pouet.net/topic.php?which=8357&page=12#c389114"
			},
			"sampleRate": 11025,
			"codeOriginal": "i=t&8191,(((t*((t>>9^((t>>9)-1)^1)%13)&255)/2)+((((t>>3|t<<(t>>12&2))*(i<4096)+(t>>4|t*(t^t+t/256))*(i>4095)))&255)/2)*(2+(t>>16))",
			"codeMinified": "i=t&8191,(((t>>9^(t>>9)-1^1)%13*t&255)/2+((t>>3|t<<(t>>12&2))*(4096>i)+(t>>4|t*(t^t+t/256))*(4095<i)&255)/2)*(2+(t>>16))",
			"starred": 2
		}, {
			"name": "Now this actually sounds pretty cool",
			"codeOriginal": "d=t*465/(43+6*(t>>15&3^1)),((d/4&t>>6)+d/2&127)+(d/6&127)",
			"starred": 1
		}, {
			"name": "Crude Sinewave Dubstep",
			"remix": {
				"author": "krcko",
				"name": "Modem melody",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			},
			"sampleRate": 44100,
			"codeOriginal": "d=(t*(t&t>>12)*8/11025)|0,((d&16)/8-1)*(d*(d^15)+d+127)",
			"codeMinified": "d=t*(t&t>>12)*8/11025|0,((d&16)/8-1)*(d*(d^15)+d+127)",
			"starred": 1
		}, {
			"name": "Crazy Groovy Beats",
			"sampleRate": 32000,
			"codeOriginal": "a=t-2048,((t&t>>6)&(t*(t>>((t&65535)>>12))))+((t*3/4&t>>12)&127)+(t*(a>>7&a>>8&a>>9&16)>>t/64)",
			"codeMinified": "a=t-2048,(t&t>>6&t*(t>>((t&65535)>>12)))+(3*t/4&t>>12&127)+(t*(a>>7&a>>8&a>>9&16)>>t/64)"
		}, {
			"name": "Crazy Groovy Beats 2",
			"codeOriginal": "d=t>>12&1,h=(t>>9)+4,(t*t*(t&255)*d/156+(t*(t^15)+t)*((h|t/2048+1&127)-h)/64&127-d*((t>>5&127)*2/3+32))",
			"codeMinified": "d=t>>12&1,h=(t>>9)+4,t*t*(t&255)*d/156+(t*(t^15)+t)*((h|t/2048+1&127)-h)/64&127-d*(2*(t>>5&127)/3+32)"
		}, {
			"name": "New Sawtooth Music (again) Remix",
			"codeOriginal": "j=(t-41024&t+1024)>>11&255,k=t&16383,(t*(j&255)/2&127)+((100000/(t&4095))/4&63)+((int(k/(k>>7)-136)/8)&((32*(1+(j>7))-1)))",
			"codeMinified": "j=(t-41024&t+1024)>>11&255,k=t&16383,(t*(j&255)/2&127)+(1E5/(t&4095)/4&63)+(int(k/(k>>7)-136)/8&32*(1+(7<j))-1)"
		}, {
			"name": "The Rhythm",
			"codeOriginal": "a=t-256,((44*(t/256-28|3)|t*8&t>>11&t>>5|t*(a>>3&a>>4&a>>5&64)>>t/16)/2&127)+(((t^t+t/256)&255)/(5-(t>>17&3))/2&127)"
		}]
	}, {
		"author": "LJ",
		"name": "here enjoy some choords I made :)",
		"url": "https://www.pouet.net/topic.php?which=8357&page=26#c524954",
		"date": "2016-12-15",
		"sampleRate": 32000,
		"codeOriginal": "((Math.abs(t*(.02+(t*.0001&0x4)*.01)*(1+((t*.0001)%4)<<5)%0xFF-0x80))&0xFF) + (t%100)*.3*Math.abs(sin(t*.00005)*.25+.5)+Math.min(Math.max((t>>16)-2,0)*.5,1)*(t*.1&0xF)*(t*.01&0xFF)/0x70",
		"codeMinified": "(abs(t*(.02+.01*(1E-4*t&4))*(1+1E-4*t%4<<5)%255-128)&255)+t%100*.3*abs(.25*sin(5E-5*t)+.5)+min(.5*max((t>>16)-2,0),1)*(.1*t&15)*(.01*t&255)/112"
	}, {
		"author": "Direm01",
		"name": "driving my 8 bit car",
		"url": "https://www.reddit.com/r/bytebeat/comments/7e7a61/t6t4300xccdd1000_11khz_infix/",
		"date": "2017-11-20",
		"codeOriginal": "(((t>>6)*t)>>430)*[0xccDD]%1000",
		"codeMinified": "52445*((t>>6)*t>>430)%1E3"
	}, {
		"author": "raphaelgoulart",
		"children": [{
			"name": "Fortnite Default Dance in Bytebeat",
			"url": "https://www.reddit.com/r/bytebeat/comments/b48xrx/fortnite_default_dance_in_bytebeat/",
			"date": "2019-03-22",
			"sampleRate": 44100,
			"codeOriginal": [
				"d=.127*t,",
				"b=floor(t/1578),",
				"a=[0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,5.3,5.3,4.75,4.75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,4.75,4.75,0,0,4,4,0,0,3.55,3.55,4,4,0,0],",
				"n=d*random(),",
				"r=floor(b/2)%64,",
				"([0,3,6,10].includes(floor(b/4%16))?d:0)%64+d*a[r]%64+d*a[r]/1.33%64+(b%4==0?n:0)%20+(b%32==16?n:0)%44"
			],
			"codeMinified": "d=.127*t,b=int(t/1578),a=[0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,5.3,5.3,4.75,4.75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4.75,4.75,5.3,0,5.3,5.3,5.3,5.3,4.75,4.75,0,0,4,4,0,0,3.55,3.55,4,4,0,0],n=d*random(),r=int(b/2)%64,([0,3,6,10].includes(int(b/4%16))?d:0)%64+d*a[r]%64+d*a[r]/1.33%64+(0==b%4?n:0)%20+(16==b%32?n:0)%44",
			"starred": 1
		}, {
			"name": "ripthisentry.txt, tune#3",
			"url": "https://battleofthebits.com/arena/Entry/ripthisentry.txt/32559/",
			"date": "2019-08-27",
			"codeOriginal": "n=[1,0,1,0,2,2,1,0,1,0,2,2,1,0,2,2],freq=n[floor(t/500)%16]*2,mod=t/15e3,sin(t*freq/40.7+sin(t*freq/40.7)*mod)*64+64",
			"codeMinified": "freq='1010221010221022'[int(t/500)%16]*2,mod=t/15e3,sin(t*freq/40.7+sin(t*freq/40.7)*mod)*64+64"
		}]
	}, {
		"author": "Romash",
		"name": "weirdo boy",
		"url": "https://battleofthebits.com/arena/Entry/weirdo+boy/31403/",
		"date": "2019-04-12",
		"mode": "Signed Bytebeat",
		"sampleRate": 44100,
		"codeOriginal": "freqs=[220,261,174*2,207],t2=t/11015*24,freq2=1+(t>>15&1)+(((41&(t>>12))%4)^(1+((t>>11)&2)-1)*((t>>10)>1024)),(((t2*(1-freq2)*0.999*freqs[t>>17&3])%128)+(((t2+500)*freq2*1.01*freqs[t>>17&3])%128)-128)/4+(((t2/2*0.999*freqs[t>>17&3])%128)+(((t2/2+500)*1.01*freqs[t>>17&3])%128)-128)*((t>>10)>1024)/4",
		"codeMinified": "freqs=[220,261,348,207],t2=t/11015*24,freq2=1+(t>>15&1)+((41&t>>12)%4^(1+(t>>11&2)-1)*(1024<t>>10)),(t2*(1-freq2)*.999*freqs[t>>17&3]%128+(t2+500)*freq2*1.01*freqs[t>>17&3]%128-128)/4+(t2/2*.999*freqs[t>>17&3]%128+1.01*(t2/2+500)*freqs[t>>17&3]%128-128)*(1024<t>>10)/4"
	}, {
		"author": "InfinitySnapz",
		"name": "rain",
		"url": "https://www.reddit.com/r/bytebeat/comments/ceg1gu/rain/",
		"date": "2019-07-17",
		"sampleRate": 44100,
		"codeOriginal": [
			"(t<2)?",
			"(",
			"",
			"a = 0, ",
			"b = 0,",
			"c = 0",
			"",
			"):(",
			"",
			"a = (a*0.999)+(random()*0.001),",
			"(b<0)?(b = random()*0.7,c = random()):(b = b-(1/44100)),",
			"abs((a*256*(sin(t/50000)*5+10))%256-128) + ((t/300*((c*10)+200))&2)*255*pow(b,random()/5+4)",
			"",
			")"
		],
		"codeMinified": "t<2?(a=0,b=0,c=0):(a=.999*a+.001*random(),b<0?(b=.7*random(),c=random()):b-=1/44100,abs(256*a*(5*sin(t/5E4)+10)%256-128)+255*(t/300*(10*c+200)&2)*b**(random()/5+4))",
		"starred": 1
	}, {
		"author": "spikkks",
		"name": "Vl-Tone Rock 1 rhythm emulation",
		"url": "https://www.reddit.com/r/bytebeat/comments/chkme0/vltone_rock_1_rhythm_emulation/",
		"date": "2019-07-25",
		"codeOriginal": [
			"n = [0,1,2,2,0,1,2,1],",
			"f=n[floor((t%14664)/1833)],",
			"((f==0) ? ((t%1833)*3.15&16)*(  (((t%1833)<325) ? (-3.15*(t%1833)>>6)+16 : 0)  *3.2 /16) : 0 +",
			"(f==1) ? ((t%1833)*6.3&16)*(  (((t%1833)<163) ? (-6.3*(t%1833)>>6)+16 : 0)  *3.2 /16) : 0 +",
			"(f==2) ? random()*51.2*(((t%1833)<1449) ? 1536/((t%1833)+1024)-.5 : 0) : 0) + 127"
		],
		"codeMinified": "f='01220121'[int(t%14664/1833)],(f==0?3.2*(325>t%1833?(t%1833*-3.15>>6)+16:0)/16*(t%1833*3.15&16):0+(f==1)?3.2*(163>t%1833?(t%1833*-6.3>>6)+16:0)/16*(t%1833*6.3&16):0+(f==2)?51.2*random()*(1449>t%1833?1536/(t%1833+1024)-.5:0):0)+127"
	}, {
		"author": "argarak",
		"url": "https://battleofthebits.com/arena/Entry/very+nice+bytebeat+things+cool.txt/32557/",
		"date": "2019-08-27",
		"children": [{
			"name": "fm blippy",
			"sampleRate": 22050,
			"codeOriginal": "s=[.5,.4,.3,.5,.6],128+sin(t*s[int(t/4000)%5]/15+(128+sin(t*.1)*(sin(t*.0001)*10*s[int(t/4000)%5])))*(20-int(t/200)%20)",
			"codeMinified": "s=[.5,.4,.3,.5,.6],128+sin(t*s[int(t/4E3)%5]/15+(128+10*sin(.1*t)*sin(1E-4*t)*s[int(t/4E3)%5]))*(20-int(t/200)%20)"
		}, {
			"name": "neeeiiiuummm filter",
			"codeOriginal": "sq=[50,25],eq=function(s){return 100+sq[int(s/50)%2]*10},lp=function(n){if(n===0){return eq(t);};let avg = 0;for(let i=0;i<n;i++){avg+=eq(t+i);}return(avg/n)},lp(lp(int(abs(sin(t*0.0001)*50))))*2",
			"codeMinified": "sq=[50,25],eq=a=>100+10*sq[int(a/50)%2],lp=a=>{if(a==0)return eq(t);for(c=0,b=0;b<a;b++)c+=eq(t+b);return c/a},2*lp(lp(int(abs(50*sin(1E-4*t)))))"
		}]
	}, {
		"author": "SArpnt",
		"children": [{
			"name": "menacing",
			"url": "https://www.reddit.com/r/bytebeat/comments/ff5phi/menacing/",
			"date": "2020-03-08",
			"sampleRate": 44100,
			"codeOriginal": "r=11e3,s=floor(t/r+1)%32,b='ćóóóćÎÎÎÎÃÃÃÃÃÃÎ°°°°¦¦¦¦'.charCodeAt(s)/300*t%512,160/3*(sin(t%r/(t%r/100+8))+1)*(s%2+.6*(s%16==0))+b%(400+128*sin(b/(21+sin(t/r))))%256*1/3+(.999*(0xDBC97749&2**s?2*b:b)%128>64+15*sin(t/1e4)?64-t/r%1*32:0)",
			"codeMinified": "r=11e3,s=int(t/r+1)%32,b='ćóóóćÎÎÎÎÃÃÃÃÃÃÎ°°°°¦¦¦¦'.charCodeAt(s)/300*t%512,160/3*(sin(t%r/(t%r/100+8))+1)*(s%2+.6*!(s%16))+b%(400+128*sin(b/(21+sin(t/r))))%256/3+(.999*(0xDBC97749&2**s?2*b:b)%128>64+15*sin(t/1e4)?64-t/r%1*32:0)",
			"starred": 2
		}, {
			"name": "arpeggiator fun",
			"url": "https://www.reddit.com/r/bytebeat/comments/fjsa1y/arpeggiator_fun/",
			"date": "2020-03-16",
			"sampleRate": 44100,
			"codeOriginal": "i=int,c='charCodeAt',b=t/441e3*16,q=b%.5,h=x=>t/2210*2**((x-36)/12)%1,w=(x,y=0)=>(h(x)-sin(y*2+b*PI)/8>.5)*30,s=i(b*2)%32,a=abs(8-i(b*8)%16),t==0&&(v=.5),v=3.65*v*(1-v),sin(q/(q/100+3e-4))*40*!(54878&1<<s%16)+(v-.5)*70*max(0,1-((b+1)%2)*.77)+w(s==6&&i(b*6%6)==1?85:s==14&&q<.25?78:'SSSSSSSQOOONNOLJLLLLLNLJIIIGGGGG'[c](s),s==5)+w('@@@@@@BCEEECCBCCEEEEECEEBBB@@@@@'[c](s))+h('pnkgrnkipmigpnkg'[c](a%4+i(s/8)*4)+12*-i(a/4))*27+99",
			"codeMinified": "i=int,c='charCodeAt',b=t/441e3*16,q=b%.5,h=x=>t/2210*2**((x-36)/12)%1,w=(x,y=0)=>(h(x)-sin(y*2+b*PI)/8>.5)*30,s=i(b*2)%32,a=abs(8-i(b*8)%16),t||(v=.5),v=3.65*v*(1-v),sin(q/(q/100+3e-4))*40*!(54878&1<<s%16)+(v-.5)*70*max(0,1-(b+1)%2*.77)+w(s==6&&i(b*6%6)==1?85:s==14&&q<.25?78:'SSSSSSSQOOONNOLJLLLLLNLJIIIGGGGG'[c](s),s==5)+w('@@@@@@BCEEECCBCCEEEEECEEBBB@@@@@'[c](s))+h('pnkgrnkipmigpnkg'[c](a%4+i(s/8)*4)+12*-i(a/4))*27+99",
			"starred": 2
		}, {
			"name": "Sync noise synth",
			"url": "https://www.reddit.com/r/bytebeat/comments/flmyyd/sync_noise_synth/",
			"date": "2020-03-20",
			"sampleRate": 44100,
			"codeOriginal": [
				"p=409.5, // Pitch",
				"s=sin(t/7e4)*20+22, // Sound",
				"k=3, // Seed",
				"v=50, // Volume",
				"x=sin(int(t%p*s/p+k))*1e4,",
				"(x-int(x))*v"
			],
			"codeMinified": "p=409.5,s=20*sin(t/7E4)+22,k=3,v=50,x=1E4*sin(int(t%p*s/p+k)),(x-int(x))*v"
		}, {
			"name": "shredder",
			"url": "https://www.reddit.com/r/bytebeat/comments/gfghdv/shredder_song_not_just_a_terrible_noise/",
			"date": "2020-05-07",
			"codeOriginal": "((~t>>max((t>>10)%16,(t>>12)%16))&t*\"H$TT`0l6\".charCodeAt((t>>11)%8)/19)*(10-(t>>16))",
			"codeMinified": "(~t>>max(t>>10&15,t>>12&15)&t*'H$TT`0l6'.charCodeAt(t>>11&7)/19)*(10-(t>>16))"
		}, {
			"name": "nose grind",
			"url": "https://www.reddit.com/r/bytebeat/comments/ggkslh/cant_think_of_a_name_atm_but_new_thing/",
			"date": "2020-05-09",
			"sampleRate": 44100,
			"codeOriginal": "h=t*[.5,.6,.57,.53][int(t/44e3)%4],((h&h*-2.5+sin(t/1e4)*100)%256*-cos(t/2e7+1.61))-10"
		}, {
			"name": "\"charCodeAt\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/lqkf8j/charcodeat/",
			"date": "2021-02-23",
			"codeOriginal": "c='charCodeAt',l=9+!(t&(1<<16)),c[c]((t>>c[c](((t>>9)%l&t>>12)%l))%l)+(t&(1<<12))*.9",
			"codeMinified": "c='charCodeAt',l=9+!(t&65536),c[c]((t>>c[c](((t>>9)%l&t>>12)%l))%l)+(t&4096)*.9"
		}, {
			"name": "Experiment with <a href='http://www.pouet.net/topic.php?which=8357&page=9#c388930' target='_blank'>\"Running man\"</a> <button class=\"code-text\">t*(3+(1^5&t>>10))*(5+(3&t>>14))>>(3&t>>8)</button> and <a href='http://www.pouet.net/topic.php?which=8357&page=4#c388494' target='_blank'>\"Street Surfer\"</a> <button class=\"code-text\">t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t)</button>",
			"date": "2021-10-07",
			"children": [{
				"name": "Isolated and edited drums",
				"codeOriginal": "t&4096?(t*(t^t%9)|t>>3)>>1:255"
			}, {
				"name": "Altered running man",
				"codeOriginal": "t*(1+(5&t>>10))*(3+(t>>17&1?(2^2&t>>14)/3:3&(t>>13)+1))>>(3&t>>9)"
			}, {
				"name": "Final song",
				"codeOriginal": "(t*(1+(5&t>>10))*(3+(t>>17&1?(2^2&t>>14)/3:3&(t>>13)+1))>>(3&t>>9))&(t&4096?(t*(t^t%9)|t>>3)>>1:255)"
			}]
		}, {
			"name": "minibake",
			"url": "https://www.reddit.com/r/bytebeat/comments/rcykm8/minibake/",
			"date": "2021-12-10",
			"sampleRate": 44100,
			"codeOriginal": "eval(unescape(escape`瑨楳⹄㼿㵁牲慹⠸㠵㤩⹦楬氨〩ⱂ㵴⼵㤰㘬爽䈥ㄬ瘽ㄭ爬洽䈾㸶ⱳ㵂┶㑼〬焽猾㸴Ɫ㵳┱㘬丽愽㹛〬ㄸⰲ〬㈲⸵ⰲ㐬㈷ⰳ〬㌲ⰳ㙝孡崪㜵⼵㘬匽⡦Ɒ㴰⤽㹳楮⠨䈪昫瀩⩐䤪㈩⼲⬮㔬吽⡦Ɒ⤽㸨砽⡂⩦⭰⤥ㄬ浩渨砬ㄭ砩⤬䌽昽㹂⩎⡦嬰嵛煝⤥ㄼ匨⸰㘩⨮㠫⸱☦㤬刽⡳Ɑ㴹攷⤽㸨獩渨猪洩⬱⤪津ㄬ渽∶㔴㐢孱崬氽猾㘱㼵㨢㘸〷≛戭ㄱ嵼籮ⱌ㴲㌲ㄹ㸾戬挽ㄳ㔱㔾㹢☱Ɐ㵛吨氽丨派㈳㼨䈼ㄵ㔲⤪㐺洼㠿氪㵌☱㩬☽䱼津㠩ⱓ⡬⤯㔩⨱㘰ⱔ⡤㵎⡳㴽㈸㼶㩳㸶ㄿ㔺戾ㄱ㼸㩮⴨Ⅲ♱㰲⤩⨲Ⱘ䈪搥ㄩ⩒⡂簰⤪ㄮ㔫⸲㔩⨨ㄭ爪⸷㔩⨴㔬匨愽丨㘴㤶㜾㹢☱☦⡢㰱㉼猾㘱㽮㨷⤩⼲ⱡ扳⡓⡡⼴⤭⸵⤪⡶⨨猽㴶㉼㄰㌷〾㹢☲⤫㈩⤪㌰ⱃ怱㈴ㅠⱣ⩃怳㔶㑠Ᵽ⩃怶㜸㙠ⱳ㴽㈶米㴽㔹簡⡳┸⤦♓⠰ⰲ⼨爫⸱㘩⤪㈷ⱳ┸㴽㐦♒⡴⼳簰⤪瘪㈷ⱳ㴽㘳簱㤵㈴㸾戦ㄦ♒⡴ⰴ〰⤪浡砨ㄭ爪ㄮ㔬〩⨲㝝⹲敤畣攨⡡ⱢⱩ⤽㹡⬨孛㈵㜬㈶ㄬ㐵㌬ㄹ㍼⡳㰶ㄩ⨲㘰嵛浝ⱸ㴵ㄱⰱ㈷㸾ㄲ⵭ⱸⱸⱛ㐴㌬㐴㌬㌬ㅝ孭┴崬ㅝ孭㸾㉝㸾椦ㄦ♢⤬〩⭄⹳桩晴⠩⼲ⱄ⹰畳栨派㈱☦漩Ɐ`.replace(/u(..)/g,\"$1%\")))",
			"starred": 2
		}, {
			"name": "alright fine",
			"url": "https://www.reddit.com/r/bytebeat/comments/rwryz6/alright_fine/",
			"date": "2022-01-05",
			"codeOriginal": "(t>>4&t/(\"SArpnt\".charCodeAt(t/2/\"76547698\"[t>>13&7]*(t>>10&3)%6)+t/(t>>17&1|2)%2))+(t>>12&1?-1:sin(t))"
		}]
	}, {
		"author": "HypernovaHeathen",
		"children": [{
			"name": "Plaate",
			"url": "https://www.pouet.net/topic.php?post=564605",
			"date": "2020-08-15",
			"sampleRate": 44100,
			"codeOriginal": "t=t/1.25,h=t*Math.pow(1.15,((t>>13&3|t>>14&5)^t>>16&3)^-5|t>>14&t>>15&1)*Math.pow(1.15,((((t>>15&t>>16)+4^7)%((t>>13&1)+3))+1))*1.5,h|h*1.01",
			"codeMinified": "t/=1.25,h=t*1.15**((t>>13&3|t>>14&5)^t>>16&3^-5|t>>14&t>>15&1)*1.15**(((t>>15&t>>16)+4^7)%((t>>13&1)+3)+1)*1.5,h|1.01*h"
		}, {
			"name": "Bytebeat But It Actually Breaks The Laws Of Physics",
			"url": "https://www.youtube.com/watch?v=EvxN3D3MuD8",
			"date": "2021-10-28",
			"sampleRate": 44100,
			"codeOriginal": "S=Math.sin,C=Math.cos,(S(t/36+C(t/72.1)*[((t>>14&31)+1),((-t>>14&31)+1)][t>>19&1]/12)*8+C(t/48+S(t/96.5)*[((t>>15&31)+1),((-t>>15&31)+1)][t>>20&1]/6)*8+S(t/18+C(t/36.1)*[((t>>12&31)+1),((-t>>12&31)+1)][t>>17&1]/6)*8+C(t/24+S(t/48.5)*[((t>>13&31)+1),((-t>>13&31)+1)][t>>18&1]/3)*8+32+Math.random()*((-t>>7&31)+1)*(-t>>12&1)+Math.random()*((-t>>9&31)+1)*(-t>>14&1)+Math.abs(1536*Math.log(t&16383)%256-128)/2)*1.5",
			"codeMinified": "S=sin,C=cos,1.5*(8*S(t/36+C(t/72.1)*[(t>>14&31)+1,(-t>>14&31)+1][t>>19&1]/12)+8*C(t/48+S(t/96.5)*[(t>>15&31)+1,(-t>>15&31)+1][t>>20&1]/6)+8*S(t/18+C(t/36.1)*[(t>>12&31)+1,(-t>>12&31)+1][t>>17&1]/6)+8*C(t/24+S(t/48.5)*[(t>>13&31)+1,(-t>>13&31)+1][t>>18&1]/3)+32+random()*((-t>>7&31)+1)*(-t>>12&1)+random()*((-t>>9&31)+1)*(-t>>14&1)+abs(1536*log(t&16383)%256-128)/2)"
		}, {
			"name": "GetDolphinedLOL's Bytebeat Creations But Their Badly Remixed",
			"url": "https://dollchan.net/btb/res/77.html#89",
			"remix": {
				"author": "getDolphinedLol",
				"name": "Ctrl+V",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0ytc9/ctrlv/"
			},
			"date": "2020-07-08",
			"sampleRate": 44100,
			"codeOriginal": "function(x){return x/6+x/9}((([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)+(([2,0,3,0,2,0,2.5,0,3,0,2,0,1.8,0,3,3][(t>>12)%16]*t>>2&127)+(t>>8)&128)+([0,1][(t>>13)%2]*t>>2&127)))+24*Math.sin(4095/(t%16384))+24*Math.cos(6143/(t%16384)*1.007)+48+Math.random()*((-t>>8&31)+1)*(-t>>13&1)",
			"codeMinified": "(x=>x/6+x/9)(([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)+(([2,0,3,0,2,0,2.5,0,3,0,2,0,1.8,0,3,3][(t>>12)%16]*t>>2&127)+(t>>8)&128)+([0,1][(t>>13)%2]*t>>2&127))+24*sin(4095/(t%16384))+24*cos(6143/(t%16384)*1.007)+48+random()*((-t>>8&31)+1)*(-t>>13&1)"
		}]
	}, {
		"author": "neverforgettoleave",
		"name": "simple step sequencer",
		"url": "https://www.reddit.com/r/bytebeat/comments/jmbsoh/simple_step_sequencer/",
		"date": "2020-11-02",
		"sampleRate": 44100,
		"codeOriginal": [
			"speed=2,length=256,(t*Math.pow(1.0594630943592952645618252949463,",
			"[",
			"0,,0,,12,,0,,0,,17,,0,,0,,14,,0,,0,,10,,0,,0,,12,,0,,",
			"0,,0,,15,12,7,3,0,,0,,14,12,7,3,0,,0,,12,7,3,0,-12,,0,,15,12,7,3,",
			"-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,",
			"-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,",
			"-16,,-16,,12,,-16,,-16,,12,,-16,,-17,,14,,-16,,-16,,10,,-16,,-16,,12,,-16,,",
			"-16,,-4,,15,12,7,3,-16,,-16,,14,12,7,3,-4,,-4,,12,7,3,-16,-12,,-16,,15,12,7,3,",
			"-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,",
			"-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,",
			"][floor((t*speed)/4096)%length]) - 1)",
			"| (t >> 5)"
		],
		"codeMinified": "speed=2,length=256,t*1.0594630943592953**[0,,0,,12,,0,,0,,17,,0,,0,,14,,0,,0,,10,,0,,0,,12,,0,,0,,0,,15,12,7,3,0,,0,,14,12,7,3,0,,0,,12,7,3,0,-12,,0,,15,12,7,3,-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,-16,,-16,,12,,-16,,-16,,12,,-16,,-17,,14,,-16,,-16,,10,,-16,,-16,,12,,-16,,-16,,-4,,15,12,7,3,-16,,-16,,14,12,7,3,-4,,-4,,12,7,3,-16,-12,,-16,,15,12,7,3,-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,][int(t*speed/4096)%length]-1|t>>5",
		"starred": 1
	}, {
		"author": "1583736",
		"name": "Cool waveform i guess",
		"url": "https://www.reddit.com/r/bytebeat/comments/ntpnza/cool_waveform_i_guess/",
		"date": "2021-06-06",
		"children": [{
			"name": "first one",
			"sampleRate": 32000,
			"codeOriginal": "t=(6*(t-((t>>10&4|t>>13&3)|(t>>17&6|t>>14&4))*t/((t>>16&7)+4))),Math.pow(Math.abs(1-Math.abs(0.5+cos(t/64.25))**0.3)+Math.abs(0.35-Math.abs(5.5+cos(t/64.5))**0.5),1-Math.abs(1-Math.abs(0.5-sin(t/63.75))**0.5+1-Math.abs(2.1-Math.abs(2.3-sin(t/96))**0.75)))*80+15",
			"codeMinified": "t=6*(t-(t>>10&4|t>>13&3|t>>17&6|t>>14&4)*t/((t>>16&7)+4)),80*(abs(1-abs(.5+cos(t/64.25))**.3)+abs(.35-abs(5.5+cos(t/64.5))**.5))**(1-abs(1-abs(.5-sin(t/63.75))**.5+1-abs(2.1-abs(2.3-sin(t/96))**.75)))+15",
			"starred": 1
		}, {
			"name": "second one",
			"sampleRate": 32000,
			"codeOriginal": "t=(3*(t-((t>>10&4|t>>13&3)|(t>>17&6|t>>14&4))*t/((t>>16&7)+4))),Math.pow(Math.abs(1-Math.abs(0.5+cos(t/64.25))**0.3),1-Math.abs(1-Math.abs(0.5-sin(t/63.75))**0.5))*128+32",
			"codeMinified": "t=3*(t-(t>>10&4|t>>13&3|t>>17&6|t>>14&4)*t/((t>>16&7)+4)),128*abs(1-abs(.5+cos(t/64.25))**.3)**(1-abs(1-abs(.5-sin(t/63.75))**.5))+32"
		}]
	}, {
		"author": "kOLbOSa_exe",
		"children": [{
			"name": "i made some music for 5 minutes",
			"description": "First ever documented mention of dollchan on reddit.",
			"url": "https://www.reddit.com/r/bytebeat/comments/pp9row/i_made_some_music_for_5_minutes_first_post_here/",
			"date": "2021-09-16",
			"sampleRate": 44100,
			"codeOriginal": "ab=function(mult, hz){return Math.sin(t/hz)*mult+128;}, ab(100,[2,6,8,5][(t>>1003)%4]-[0,1.4,1.2,1.1][(t>>15)%4])&~t>>6",
			"codeMinified": "ab=(mult,hz)=>sin(t/hz)*mult+128,ab(100,[2,6,8,5][(t>>1003)%4]-[0,1.4,1.2,1.1][(t>>15)%4])&~t>>6"
		}, {
			"name": "cool sinusoidal beat",
			"description": "First t/(t&4095) beat code ever.",
			"url": "https://www.reddit.com/r/bytebeat/comments/pzb9mz/cool_sinusoidal_beat_some_parts_bring_from_no/",
			"date": "2021-10-01",
			"codeOriginal": "wv=function(a,b){return sin(t/a)*b+128},wv((t&4095)+1000,32)",
			"codeMinified": "wv=(a,b)=>sin(t/a)*b+128,wv((t&4095)+1E3,32)"
		}, {
			"name": "wow that was pretty cool",
			"url": "https://www.reddit.com/r/bytebeat/comments/q4glqu/wow_that_was_pretty_cool/",
			"date": "2021-10-09",
			"sampleRate": 44100,
			"codeOriginal": "(4e3/~((t/3)&4095)%20)*'1213'[(t>>5)%4]*'3944'[(t>>12)%4]-2",
			"codeMinified": "4E3/~(t/3&4095)%20*'1213'[(t>>5)%4]*'3944'[(t>>12)%4]-2"
		}, {
			"name": "fiery sine waveform",
			"description": "Beautiful fiery sin-waveform at the scope.",
			"url": "https://www.reddit.com/r/bytebeat/comments/q4s2dl/some_cool_thingy_here/",
			"date": "2021-10-09",
			"sampleRate": 44100,
			"drawing": { "mode": "Points", "scale": 7 },
			"codeOriginal": "per = (t/2048),(sin(t/10000)*64+80)+(random()*10)+((4e4/((t/4)&4095)%100)>>(random()*t))+(per>128?([13,-12,11,-10,9,-8,7,-6,5,-4,3,-2,1,0][(t>>12)%14]+15)&t%([34,32,33,35][(t>>14)%4]):0)+(per>64?(4e4/((t/4)%4095))%82:0)",
			"codeMinified": "per=t/2048,64*sin(t/1E4)+80+10*random()+(4E4/(t/4&4095)%100>>random()*t)+(128<per?[13,-12,11,-10,9,-8,7,-6,5,-4,3,-2,1,0][(t>>12)%14]+15&t%[34,32,33,35][(t>>14)%4]:0)+(64<per?4E4/(t/4%4095)%82:0)"
		}, {
			"name": "electric guitar",
			"url": "https://www.reddit.com/r/bytebeat/comments/q8x43h/please_post_this_on_dollchamnet_pleaseeeeeeeee/",
			"date": "2021-10-15",
			"codeOriginal": "((((((min(t^t+(t>>11))*40)|t/8&t>>6)/4)&127+((t>>4)%2))))^((5e5)/(t&4095))+(t*2%32)+(random()*t)&4e4/(t&4095)",
			"codeMinified": "(40*min(t^t+(t>>11))|t/8&t>>6)/4&127+(t>>4)%2^5E5/(t&4095)+2*t%32+random()*t&4E4/(t&4095)"
		}, {
			"name": "morse code named as beat",
			"description": "Claimed to be non-js, but throws an error when compiled in C.",
			"url": "https://www.reddit.com/r/bytebeat/comments/qc5q04/my_first_nonjavascript_bytebeat/",
			"date": "2021-10-20",
			"codeOriginal": "((((t>>8)%8*t>>(t>>12)%12)&32)*t>>2)+((((4e3)+50)/(t&4095))&(t>>6|t>>2*t*t)*t)&~t>>4",
			"codeMinified": "(((t>>8)%8*t>>(t>>12)%12&32)*t>>2)+(4050/(t&4095)&(t>>6|t>>2*t*t)*t)&~t>>4"
		}, {
			"name": "b-trtrrrrrt-eat",
			"url": "https://www.reddit.com/r/bytebeat/comments/qcoocw/btrtrrrrrteat/",
			"date": "2021-10-21",
			"sampleRate": 44100,
			"codeOriginal": [
				"s = (x, y) => sin(t/x)*y+128,",
				"(log(s(s(t/(t/10000),32),32))|t>>12)*(t>>7)&(4e5/((t>>2)&4095))"
			],
			"codeMinified": "s=(x,y)=>sin(t/x)*y+128,(log(s(s(t/(t/1E4),32),32))|t>>12)*(t>>7)&4E5/(t>>2&4095)"
		}, {
			"name": "ÿ&&",
			"url": "https://www.reddit.com/r/bytebeat/comments/qgqx3g/%C3%BF/",
			"date": "2021-10-27",
			"sampleRate": 44100,
			"codeOriginal": "((64*sin(t/20))&(64*cos(t/20000)))+128",
			"codeMinified": "(64*sin(t/20)&64*cos(t/2E4))+128"
		}, {
			"name": "in attempt to recreate \"dante's inferno, modified by viznut\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/qix267/in_attempt_to_recreate_dantes_inferno_modified_by/",
			"cover": {
				"name": "viznut+oasiz – Dante's Inferno",
				"url": "https://youtu.be/tCRPUv8V22o?si=P1yS2BygNTo0_Uyo"
			},
			"date": "2021-10-30",
			"codeOriginal": [
				"(((t&t+t/(t>>3))*(t*203|32))&20)+",
				"(t>>10&((((t*208|-5)+(t&t+t/164))+0x7fff)",
				"+(((t*313|-5)+(t&t+t/165))))|((t&t+t/40)",
				"&(t&t+t/42)&(t&t+t/44)))"
			],
			"codeMinified": "((t&t+t/(t>>3))*(203*t|32)&20)+(t>>10&(208*t|-5)+(t&t+t/164)+32767+((313*t|-5)+(t&t+t/165))|t&t+t/40&t&t+t/42&t&t+t/44)",
			"starred": 1
		}, {
			"name": "NO ARRAY ARRAY SONG sin ver",
			"url": "https://www.reddit.com/r/bytebeat/comments/qjmy4v/no_array_array_song/",
			"date": "2021-10-31",
			"sampleRate": 44100,
			"codeOriginal": "sin((((t/t+(((t>>12)%6))+((t>>16)%3))))*t>>4)*32+128",
			"codeMinified": "sin((t/t+(t>>12)%6+(t>>16)%3)*t>>4)*32+128"
		}, {
			"name": "hell rock",
			"url": "https://www.reddit.com/r/bytebeat/comments/sip8sk/hell_rock_32khz_nonjs/",
			"date": "2022-02-02",
			"sampleRate": 32000,
			"codeOriginal": "((t>>12*t/(t/8&4096?130:120)))&127^(((t>>(t/4&4096?4:8))&(t/8&4096?127:63))&(t/64&4096?127:0))+((5e4/(t/(t/8&4096?4:6)&4095))&127)",
			"codeMinified": "t>>12*t/(t/8&4096?130:120)&127^(t>>(t/4&4096?4:8)&(t/8&4096?127:63)&(t/64&4096?127:0))+(5E4/(t/(t/8&4096?4:6)&4095)&127)",
			"starred": 1
		}, {
			"name": "sounds like a square, but it is not",
			"url": "https://www.reddit.com/r/bytebeat/comments/11xps6j/sounds_like_a_square_but_it_is_not/",
			"date": "2023-03-21",
			"sampleRate": 16000,
			"codeOriginal": "max((109>>t/4),-128)+min(128,-(109>>(t/4+16)))+128",
			"codeMinified": "max(109>>t/4,-128)+min(128,-(109>>t/4+16))+128"
		}, {
			"name": "doom-type loop",
			"url": "https://www.reddit.com/r/bytebeat/comments/uqspnh/doomtype_loop/",
			"date": "2022-05-16",
			"mode": "Signed Bytebeat",
			"sampleRate": 32000,
			"stereo": true,
			"codeOriginal": "[sin(((2**18)/(t&t))==NaN?t*t:((2**18)/((t/8&4095)&t>>5)))*32,sin(4e3/(t/4&4095))*64+sin(4e1/(t&4095))*64]",
			"codeMinified": "[32*sin(2**18/(t/8&4095&t>>5)),64*sin(4E3/(t/4&4095))+64*sin(40/(t&4095))]"
		}, {
			"name": "Hex-machine",
			"url": "https://www.reddit.com/r/bytebeat/comments/13scxyx/hexmachine/",
			"date": "2023-05-26",
			"sampleRate": 22050,
			"codeOriginal": "((((((0x22a322b3>>(t>>13)^(t>>13^t>>12))%2)*t*1.2+((t/+1927)%255*(t+918)%255*(t+8275)%255)*(((~t>>11)+1)&2)*100)&~t>>5)&127)+((4e4/(t*2%8192))&2)*20)",
			"codeMinified": "((0x22a322b3>>(t>>13)^t>>13^t>>12)%2*t*1.2+t/1927%255*(t+918)%255*(t+8275)%255*((~t>>11)+1&2)*100&~t>>5&127)+20*(4E4/(2*t%8192)&2)"
		}, {
			"name": "Fault cassette",
			"url": "https://www.reddit.com/r/bytebeat/comments/14cbwiz/fault_cassette_fanfare/",
			"remix": {
				"author": "varjohukka",
				"name": "Fanfare?",
				"url": "http://www.pouet.net/topic.php?which=8357&page=4#c388503"
			},
			"date": "2023-06-18",
			"codeOriginal": "t=t+sin(t/4096*PI)*512,(t&8192?t&4096?t&1024?2*t:4*t:t&512?4*t:4.2*t:(t&4096?t&1024?2*t:10*t:t&512?2*t:8*t)>>2)*(t&16384?3:2)|t*(t&16384?.125:1/(.01*t))",
			"codeMinified": "t+=512*sin(t/4096*PI),(t&8192?t&4096?t&1024?2*t:4*t:t&512?4*t:4.2*t:(t&4096?t&1024?2*t:10*t:t&512?2*t:8*t)>>2)*(t&16384?3:2)|t*(t&16384?.125:1/(.01*t))"
		}, {
			"name": "Atari 2600-like tune",
			"url": "https://www.reddit.com/r/bytebeat/comments/14hybmh/atari_2600like_tune/",
			"date": "2023-06-24",
			"sampleRate": 7500,
			"codeOriginal": "(0b010101101011011>>(t/\"97976565\"[(t>>10)%8]%15)&1)*100",
			"codeMinified": "(0b010101101011011>>t/'97976565'[(t>>10)%8]%15&1)*100"
		}, {
			"name": "Intresting polyrhythm-based machine",
			"description": "it didnt repeated",
			"url": "https://dollchan.net/btb/res/27.html#1401",
			"date": "2023-06-24",
			"mode": "Signed Bytebeat",
			"sampleRate": 32000,
			"codeOriginal": "g=(j)=>(t/(64+j)&1)*5,(g(0)+g(0.1)+g(0.2)+g(0.3)+g(0.4)+g(0.5)+g(0.6)+g(0.7)+g(0.8)+g(0.9)+g(1))*2-58",
			"codeMinified": "g=j=>5*(t/(64+j)&1),2*(g(0)+g(.1)+g(.2)+g(.3)+g(.4)+g(.5)+g(.6)+g(.7)+g(.8)+g(.9)+g(1))-58"
		}, {
			"name": "Noise",
			"url": "https://www.reddit.com/r/bytebeat/comments/14lyjiv/noise/",
			"date": "2023-06-29",
			"sampleRate": 32000,
			"codeOriginal": "s=t>>4,rng=(s+2742)*(s+2755)*s,cos(rng)*((t>>9)%32)+32+sin(rng)*(32-(t>>\"6654\"[(t>>15)%4])%32)+32+((((4e4/(t/\"8842\"[(t>>15)%4]&2047))%128)&2)*40)",
			"codeMinified": "s=t>>4,r=(s+2742)*(s+2755)*s,cos(r)*((t>>9)%32)+32+sin(r)*(32-(t>>'6654'[(t>>15)%4])%32)+32+40*(4E4/(t/'8842'[(t>>15)%4]&2047)%128&2)"
		}, {
			"name": "Crystal Cave",
			"url": "https://www.reddit.com/r/bytebeat/comments/154me2z/crystal_cave/",
			"date": "2023-07-20",
			"codeOriginal": [
				"a = (t) => (cbrt(cos(t/(((t>>10&3)^(t>>13&6)|(t>>12&7))+2)))*(32-(t>>6)&31))+32,",
				"(a(t)/1.5+a(t-3000)/2+a(t-6000)/3)*cbrt(sin(t/8000))+100"
			],
			"codeMinified": "a=t=>cbrt(cos(t/((t>>10&3^t>>13&6|t>>12&7)+2)))*(32-(t>>6)&31)+32,(a(t)/1.5+a(t-3E3)/2+a(t-6E3)/3)+100",
			"starred": 1
		}, {
			"name": "Shufflefare‽",
			"url": "https://www.reddit.com/r/bytebeat/comments/15dwm3c/shufflefare/",
			"remix": {
				"author": "varjohukka",
				"name": "Fanfare?",
				"url": "http://www.pouet.net/topic.php?which=8357&page=4#c388503"
			},
			"date": "2023-07-31",
			"codeOriginal": [
				"t+=(t>>14^t>>11|t>>9&7&(t>>10))*(2**12),",
				"",
				"//Shufflefare!",
				"",
				"(t&8192?t&4096?t&1024?2*t:4*t:t&512?4*t:4.2*t:(t&4096?t&1024?2*t:10*t:t&512?2*t:8*t)>>2)*(t&16384?3:2)|t*(t&16384?.125:1/(.01*t))"
			],
			"codeMinified": "t+=(t>>14^t>>11|t>>9&7&t>>10)*2**12,(t&8192?t&4096?t&1024?2*t:4*t:t&512?4*t:4.2*t:(t&4096?t&1024?2*t:10*t:t&512?2*t:8*t)>>2)*(t&16384?3:2)|t*(t&16384?.125:1/(.01*t))"
		}, {
			"name": "The most average bytebeat beat",
			"url": "https://www.reddit.com/r/bytebeat/comments/15erzw3/the_most_average_bytebeat_beat/",
			"date": "2023-08-01",
			"sampleRate": 16384,
			"codeOriginal": "((2e5/((t*[2,2,1,1][t>>13&3])&4095))&64)+((t/1.5*(t>>12&7+t>>11&1^t>>12&7|t>>16&7))&48)+random()*(64-(t>>[4,6,5,8][t>>13&3])%64)",
			"codeMinified": "(2E5/(t*[2,2,1,1][t>>13&3]&4095)&64)+(t/1.5*(t>>12&7+t>>11&1^t>>12&7|t>>16&7)&48)+random()*(64-(t>>[4,6,5,8][t>>13&3])%64)"
		}, {
			"name": "engin't",
			"description": "\"Street surfer\" with reverb.",
			"url": "https://www.reddit.com/r/bytebeat/comments/163jd24/engint/",
			"remix": {
				"author": "raer",
				"name": "Street Surfer",
				"url": "http://www.pouet.net/topic.php?which=8357&page=4#c388494"
			},
			"date": "2023-08-28",
			"codeOriginal": [
				"q = \"t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t)\",",
				"",
				"h=t=>(eval(q)%256),",
				"",
				"ce();",
				"",
				"function ce(){",
				"    let out=h(t)/4;",
				"    for (ij=1;ij<8;ij++){",
				"        out+=h(t-(ij*900))/(ij*9);",
				"    }",
				"    return out/2+64;",
				"}"
			],
			"codeMinified": "h=t=>(t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t))%256,(p=>{o=h(t)/4;for(i=1;i<8;i++)o+=h(t-i*900)/(i*9);return o/2+64})()"
		}, {
			"name": "kotofejka",
			"url": [
				"https://dollchan.net/btb/res/27.html#2295",
				"https://www.reddit.com/r/bytebeat/comments/16v857w/kotofejka/"
			],
			"date": "2023-09-16",
			"sampleRate": 16000,
			"codeOriginal": [
				"m=parseInt(",
				"\"kotojotohotojotokqtaketqkqtaketa\"",
				"[(t>>13|((t>>10)^(t>>14))*(t>>14&1))%32],",
				"36)/((t>>16^t>>14)&1?1:1.5),",
				"",
				"n=((m*(t/3)&64)+(m*(t/4)&64))*~t>>10,",
				"",
				"o=(sin(t)*6e3)&63&~t>>((t>>12|t>>15)&1?6:9),",
				"",
				"(n&255)/2+o"
			],
			"codeMinified": "m=parseInt('kotojotohotojotokqtaketqkqtaketa'[(t>>13|(t>>10^t>>14)*(t>>14&1))%32],36)/((t>>16^t>>14)&1?1:1.5),n=((t/3*m&64)+(t/4*m&64))*~t>>10,o=6E3*sin(t)&63&~t>>((t>>12|t>>15)&1?6:9),(n&255)/2+o"
		}, {
			"name": "t&t>>8 waterfall",
			"description": "Waterfall in error console.",
			"url": "https://www.reddit.com/r/bytebeat/comments/18mozx3/tt8_waterfall/",
			"date": "2023-12-20",
			"codeOriginal": [
				"n='\\n',a();function a(){",
				"nt = t|0;",
				"for(i=0;i<1024;i++)",
				"{t = nt+i;",
				"n+=String.fromCharCode(65+((t&t>>8)&255));",
				"if(i%64==63){n+='\\n'}}",
				"if(t%64==63){throw n;}",
				"return t&t>>8;}"
			],
			"codeMinified": "n='\\n',(()=>{nt=t|0;for(i=0;i<1024;i++)t=nt+i,n+=String.fromCharCode(65+(t&t>>8&255)),i%64==63&&(n+='\\n');if(t%64==63)throw n;return t&t>>8})()"
		}, {
			"name": "poor doom gateway",
			"url": "https://www.reddit.com/r/bytebeat/comments/18vzknl/poor_doom_gateway/",
			"date": "2024-01-01",
			"codeOriginal": [
				"q = [1.05,0,1.05,0,1.5,0,1.05,0,1.05,0,1.4,0,1.05,0,1.05,0,1.3,0,1.05,0,1.05,0,1.2,0,1.05,0,1.05,0,1.1,0,1.2,0],q=q[(t>>9)%q.length]/[1,1,1.1,1.2][(t>>14)%4],",
				"sin((q*t/3%12+q*t/4.5%12+q*t/1.5%12)/4)*16+16"
			],
			"codeMinified": "q=[1.05,0,1.05,0,1.5,0,1.05,0,1.05,0,1.4,0,1.05,0,1.05,0,1.3,0,1.05,0,1.05,0,1.2,0,1.05,0,1.05,0,1.1,0,1.2,0],q=q[(t>>9)%q.length]/[1,1,1.1,1.2][(t>>14)%4],16*sin((q*t/3%12+q*t/4.5%12+q*t/1.5%12)/4)+16"
		}]
	}, {
		"author": "RealZynx92",
		"children": [{
			"name": "2-bit song",
			"url": "https://www.reddit.com/r/bytebeat/comments/q36kta/2bit_song/",
			"date": "2021-10-07",
			"sampleRate": 32000,
			"codeOriginal": "(pow(2.75,-t/2048%8+8)&128)+(t*(t&t>>11)&64)|t/[2,2,2,2,3,3,4,4][(t>>14)%8]&128",
			"codeMinified": "(2.75**(-t/2048%8+8)&128)+(t*(t&t>>11)&64)|t/[2,2,2,2,3,3,4,4][(t>>14)%8]&128"
		}, {
			"name": "dubstep_thingy",
			"url": "https://www.reddit.com/r/bytebeat/comments/q5oh91/dubstep_thingy/",
			"remix": {
				"author": "Gabriel Miceli",
				"name": "Crude Sinewave Dubstep",
				"url": "https://www.youtube.com/watch?v=V4GfkFbDojc"
			},
			"date": "2021-10-11",
			"sampleRate": 44100,
			"codeOriginal": "a=t*(t&t>>12)/256,128+sin(a/20.5)*((a>>5)%32)*4",
			"starred": 1
		}, {
			"name": "another cool loop i guess",
			"url": "https://www.reddit.com/r/bytebeat/comments/q5pbks/another_cool_loop_i_guess/",
			"date": "2021-10-11",
			"sampleRate": 44100,
			"codeOriginal": "a=t/[2,4,3,5,6,7,8,10][(t>>13)%8],((a*2*(a&64?-1:1)))+15*(3E3/(t&16383)&4)+(25*sin((t*[1.5,1.5,1.5,1.35,1.2,1.2,1,1][(t>>15)%8])/41)+25)+(t*[0.5,0.75,1,0.8,1,1.2,0.4,0.6,0.8,0.3,0.5,0.6][((t>>10)%3)+((t>>16)%4)*3]/2&16)",
			"codeMinified": "a=t/[2,4,3,5,6,7,8,10][(t>>13)%8],2*a*(a&64?-1:1)+15*(3E3/(t&16383)&4)+(25*sin(t*[1.5,1.5,1.5,1.35,1.2,1.2,1,1][(t>>15)%8]/41)+25)+(t*[.5,.75,1,.8,1,1.2,.4,.6,.8,.3,.5,.6][(t>>10)%3+(t>>16)%4*3]/2&16)",
			"starred": 1
		}, {
			"name": "cool dubstep song",
			"url": "https://www.reddit.com/r/bytebeat/comments/q6emvo/cool_dubstep_song/",
			"date": "2021-10-12",
			"sampleRate": 44100,
			"codeOriginal": "((63+sin((t*(t&t>>12))/164)*64)*(t>>13<60)+(t*random()%((-t>>8)%128+128))*(t>>13<64))+((63+sin((t*(t&t>>12)*50/22050)/164)*64)+(3E5/(t&32767)&90)+(3E6/((t+16384)&32767)&100))*(t>>13>63)",
			"codeMinified": "(63+64*sin(t*(t&t>>12)/164))*(t>>13<60)+t*random()%((-t>>8)%128+128)*(t>>13<64)+(63+64*sin(t*(t&t>>12)*50/22050/164)+(3E5/(t&32767)&90)+(3E6/(t+16384&32767)&100))*(t>>13>63)",
			"starred": 2
		}, {
			"name": "remix of \"Trance beat\" by SthephanShi",
			"url": "https://www.reddit.com/r/bytebeat/comments/q834xu/i_remixed_stephanshis_trance_beat/",
			"date": "2021-10-14",
			"codeOriginal": "((t>>(t%16?6:5)|t>>(t%128?11:3))&200)+(3E4/(t&4095)&64)"
		}, {
			"name": "probably the best song i ever made",
			"url": "https://www.reddit.com/r/bytebeat/comments/q8r7g4/probably_the_best_song_i_ever_made/",
			"date": "2021-10-15",
			"sampleRate": 44100,
			"codeOriginal": "a=t/[1.5,1.25,1.5,1][(t>>17)%4]*((t>>12)+1&1),(((a/4^(.998*a/8))&63)%(t>>14)+((32*sin((t/[1,1,1,2,1.5,1.5,1.25,1.25][(t>>15)%8]/20.5))+32)*(t>>20>0)))*(t>>15!=63)+(t*random()%((-t>>9)%64+64)*(t>>15==63))+(((3E5/(t&8191)&50)*[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1][(t>>13)%16])+((3E6/(t&8191)&45)*[0,0,0,0,1,0,0,0][(t>>13)%8])+((t/4*(t&t>>12))&32))*(t>>20>1)",
			"codeMinified": "a=t/[1.5,1.25,1.5,1][(t>>17)%4]*((t>>12)+1&1),(((a/4^.998*a/8)&63)%(t>>14)+(32*sin(t/[1,1,1,2,1.5,1.5,1.25,1.25][(t>>15)%8]/20.5)+32)*(t>>20>0))*(t>>15!=63)+t*random()%((-t>>9)%64+64)*(t>>15==63)+((3E5/(t&8191)&50)*[1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1][(t>>13)%16]+(3E6/(t&8191)&45)*[0,0,0,0,1,0,0,0][(t>>13)%8]+(t/4*(t&t>>12)&32))*(t>>20>1)",
			"starred": 1
		}, {
			"name": "get stickbugged lol",
			"url": "https://www.reddit.com/r/bytebeat/comments/qa0k1s/get_stickbugged_lol/",
			"cover": {
				"name": "Bee Swarm Simulator – Stick Bug",
				"url": "https://youtu.be/gPPKHt6hFCA"
			},
			"date": "2021-10-17",
			"codeOriginal": "r=1.05946309,b=t/0.2575,as=b/r,a=as/r,c=b*r,cs=c*r,d=cs*r,ds=d*r,e=ds*r,f=e*r,fs=f*r,g=fs*r,gs=g*r,([fs,e,cs,b,as,,,,,,,,,,ds,,b,cs,d,ds,fs,,,,,,,,,,cs,,ds,cs,as,gs/2,ds/2,,,,,,,,,,as,,cs,b,gs/2,g/2,fs/2][(t>>10)%64]&127)+([fs/8,0,0,fs/4,fs/8,0,g/4,0,fs/8,0,fs/4,0,fs/8,0,fs/4][(t>>10)%16]&127)",
			"codeMinified": "r=1.05946309,b=t/.2575,as=b/r,a=as/r,c=b*r,cs=c*r,d=cs*r,ds=d*r,e=ds*r,f=e*r,fs=f*r,g=fs*r,gs=g*r,([fs,e,cs,b,as,,,,,,,,,,ds,,b,cs,d,ds,fs,,,,,,,,,,cs,,ds,cs,as,gs/2,ds/2,,,,,,,,,,as,,cs,b,gs/2,g/2,fs/2][(t>>10)%64]&127)+([fs/8,0,0,fs/4,fs/8,0,g/4,0,fs/8,0,fs/4,0,fs/8,0,fs/4][(t>>10)%16]&127)",
			"starred": 1
		}, {
			"name": "2-bit song hardcore remix",
			"url": "https://www.reddit.com/r/bytebeat/comments/qdfa0i/2bit_song/",
			"remix": {
				"name": "2-bit song",
				"url": "https://www.reddit.com/r/bytebeat/comments/q36kta/2bit_song/"
			},
			"date": "2021-10-22",
			"sampleRate": 44100,
			"codeOriginal": "(sqrt((t&16383)*5000)&128)+(3E6/((t+16384)&32767)&128)+(t/2*(t&t>>11)&64)|(t/32&128)&t/16",
			"codeMinified": "(sqrt(5E3*(t&16383))&128)+(3E6/(t+16384&32767)&128)+(t/2*(t&t>>11)&64)|t/32&128&t/16",
			"starred": 2
		}, {
			"name": "having fun with square waves",
			"url": "https://www.reddit.com/r/bytebeat/comments/qeml94/having_fun_with_square_waves/",
			"date": "2021-10-24",
			"sampleRate": 44100,
			"codeOriginal": "(t&64/(t&t>>12?t&t>>14?1:2:4))+(t/[1,2,8,2,4,3,2,3][(t>>13)%8]&64)+(sqrt((t&16383)*1000)&64)+(t*(t&t>>12)&32)",
			"codeMinified": "(t&64/(t&t>>12?t&t>>14?1:2:4))+(t/[1,2,8,2,4,3,2,3][(t>>13)%8]&64)+(sqrt(1E3*(t&16383))&64)+(t*(t&t>>12)&32)"
		}, {
			"name": "remix of \"The time is running out!\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/",
			"remix": {
				"author": "SthephanShi",
				"name": "The time is running out!",
				"url": "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
			},
			"date": "2021-10-25",
			"sampleRate": 11025,
			"codeOriginal": "((t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536<59392?(t&4096?2:16):2))|t>>4)/2&127)+(3E4/(t&4095)&128)+(random()*(((-t>>5)%64)+64))",
			"codeMinified": "((t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(59392>t%65536?t&4096?2:16:2))|t>>4)/2&127)+(3E4/(t&4095)&128)+random()*((-t>>5)%64+64)",
			"starred": 1
		}, {
			"name": "remix of SthephanShi's remix",
			"url": "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/hi9r80q/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "SthephanShi",
				"name": "Remix of RealZynx92's remix",
				"url": "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/hhzb9ft/?utm_source=reddit&utm_medium=web2x&context=3"
			},
			"date": "2021-10-27",
			"sampleRate": 44100,
			"codeOriginal": "t/=4,((t/2*(t&16384?7:5)*(t&512?0.5:(t&256?1:2))*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2))|t>>4)&127)+(1E5/(t%(t&8192?4096:3072))&128-64)+(random()*(((-t>>(t&4096?5:(t&2048?3:4)))%64)+64))",
			"codeMinified": "t/=4,((t/2*(t&16384?7:5)*(t&512?.5:t&256?1:2)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(59392>t%65536?t&4096?2:16:2))|t>>4)&127)+(1E5/(t%(t&8192?4096:3072))&64)+random()*((-t>>(t&4096?5:t&2048?3:4))%64+64)",
			"starred": 2
		}, {
			"name": "better remix of \"The time is running out!\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/",
			"remix": {
				"author": "SthephanShi",
				"name": "The time is running out!",
				"url": "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
			},
			"date": "2021-11-03",
			"sampleRate": 44100,
			"codeOriginal": "t/=4,a=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2)),(t&524288?sqrt((t&4095)*5000)&64|t/16&64:(((t>>9)%64)*random()*((t>>15)%32==15))+6E4/(t%(t&8192?3072:4096))%100)+((-t>>3)%256+256)*tan(sin(a/40.75*2)+cos(a/40.75*2))/32+50",
			"codeMinified": "t/=4,a=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(59392>t%65536?t&4096?2:16:2)),(t&524288?sqrt(5E3*(t&4095))&64|t/16&64:(t>>9)%64*random()*(15==(t>>15)%32)+6E4/(t%(t&8192?3072:4096))%100)+((-t>>3)%256+256)*tan(sin(a/40.75*2)+cos(a/40.75*2))/32+50",
			"starred": 2
		}, {
			"name": "remix of \"first bytebeat remixed\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/qlf0op/first_bytebeat_remixed/hj50s9a/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "NewFall2020",
				"name": "first bytebeat remixed",
				"url": "https://www.reddit.com/r/bytebeat/comments/qlf0op/first_bytebeat_remixed/"
			},
			"date": "2021-11-03",
			"sampleRate": 44100,
			"codeOriginal": "t/=5.5,64*sin((((t*(t&16384?6:5))/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|(t*(t&16384?6:5))*(3+(3&t>>(t&2048?334:14)))>>(1+(3&t>>8))&((sin(t)*t|t>>4)|(tan(t))|t>>3)&128)/21.5)+64+(sqrt((t&4095)*10000)&64|t/8&64)",
			"codeMinified": "t/=5.5,64*sin(((t*(t&16384?6:5)/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|t*(t&16384?6:5)*(3+(3&t>>(t&2048?334:14)))>>1+(3&t>>8)&(sin(t)*t|t>>4|t>>3)&128)/21.5)+64+(sqrt(1E4*(t&4095))&64|t/8&64)"
		}, {
			"name": "fm synth, i guess...?",
			"url": "https://www.reddit.com/r/bytebeat/comments/qlodty/fm_synth_i_guess/",
			"date": "2021-11-03",
			"sampleRate": 32000,
			"codeOriginal": "a=t/1.15,c=t*1.05,d=c*1.1,e=d*1.15,f=d*1.2,b=[a,c,d,a,f,a,c,e][t>>14&7],m=[a,t,c,d,0,0,e,0][t>>12&7],i=[a,c,t,e][t>>17&3],25+4*tan(sin(b/81.5)+cos(b/81.5))+8*atan(sin(m/20.375)+cos(m/20.375))+100+sin(sin(i/40.75*4)+cos(i/40.75*4))*\"4321\"[t>>15&3]+16*sin(4E3/(t&16383)%100)+tan(sin([t,0,0,0][t>>10&3]*cos(t)))*2"
		}, {
			"name": "1-bit song",
			"url": "https://www.reddit.com/r/bytebeat/comments/qmk3k8/1bit_song/",
			"date": "2021-11-04",
			"sampleRate": 32000,
			"codeOriginal": "(48*(random()*\"0000202020002020\"[t/1.2>>10&15]&1))+(6E4/(t/1.2&4095))+(t*[1,random(),random(),random(),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0][(t/1.2>>10)+16&31])+(t/\"12483456\"[t/1.2>>16&7]&40)&64",
			"codeMinified": "48*(random()*'0000202020002020'[t/1.2>>10&15]&1)+6E4/(t/1.2&4095)+t*[1,random(),random(),random(),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0][(t/1.2>>10)+16&31]+(t/'12483456'[t/1.2>>16&7]&40)&64",
			"starred": 1
		}, {
			"name": "\"wow that was pretty cool\" remixed",
			"url": "https://www.reddit.com/r/bytebeat/comments/rjv3if/wow_that_was_pretty_cool_by_kolbosa_exe_remixed/",
			"remix": {
				"author": "kOLbOSa_exe",
				"name": "wow that was pretty cool",
				"url": "https://www.reddit.com/r/bytebeat/comments/q4glqu/wow_that_was_pretty_cool/"
			},
			"date": "2021-12-19",
			"sampleRate": 44100,
			"codeOriginal": "(t/\"4368436845874587\"[t>>16&15]&64)+((4e3/(4095&t/6)%500)*'1213'[(t>>5)%4]*'3944'[(t>>12)%4]-2)+64+sin(3e4/(t&16383))*64",
			"codeMinified": "(t/'4368436845874587'[t>>16&15]&64)+(4E3/(4095&t/6)%500*'1213'[(t>>5)%4]*'3944'[(t>>12)%4]-2)+64+64*sin(3E4/(t&16383))"
		}, {
			"name": "something i made while experimenting with my own remix of TIRO",
			"url": "https://www.reddit.com/r/bytebeat/comments/s70nm1/something_i_made_while_experimenting_with_my_own/",
			"date": "2022-01-18",
			"sampleRate": 32000,
			"codeOriginal": "t/=5.5,((t*(t&16384?6:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536<59392?(t&4096?2:11):2))|t>>4)/2&127)+(3E4/(t&4095)&128)+(random()*(((-t>>5)%64)+64))+(t*\"23\"[t>>14&1]&64)",
			"codeMinified": "t/=5.5,((t*(t&16384?6:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(59392>t%65536?t&4096?2:11:2))|t>>4)/2&127)+(3E4/(t&4095)&128)+random()*((-t>>5)%64+64)+(t*'23'[t>>14&1]&64)",
			"starred": 2
		}, {
			"name": "zynx92 type beat remixed",
			"url": "https://www.reddit.com/r/bytebeat/comments/s8hiun/comment/htjy1ae/?utm_source=reddit&utm_medium=web2x&context=3",
			"date": "2022-01-21",
			"sampleRate": 32000,
			"codeOriginal": "(random()*\"1000\"[t>>10&3]*32)+(sqrt((t&16383)*400)&63*\"10\"[t>>12&1])+(((t&t>>11)&32)+(64*sin(t*(t&t>>12)*4/88200))+([1,1.5,0.5,0.8][(t>>16)%4]*t>>1&128))/3+31",
			"codeMinified": "random()*'1000'[t>>10&3]*32+(sqrt(400*(t&16383))&63*'10'[t>>12&1])+((t&t>>11&32)+64*sin(t*(t&t>>12)*4/88200)+([1,1.5,.5,.8][(t>>16)%4]*t>>1&128))/3+31"
		}]
	}, {
		"author": "GDPlayer_1035",
		"children": [{
			"name": "chiptune engine v1",
			"url": "https://www.reddit.com/r/bytebeat/comments/q5n3zc/chiptune_engine_v1/",
			"date": "2021-10-11",
			"sampleRate": 44100,
			"codeOriginal": "delay=8000,len=8,s1=[1,2,4,8,6,4,2,1],s1v=[16,8,16,8,16,8,16,8],s2=[2,3,5,6,4,7,6,2],s2v=[8,4,8,4,8,4,8,4],n=[0,16,0,16,0,8,0,8],st1=t/2*s1[round(t/delay)%len]&s1v[round(t/delay)%len]*4,st2=t/2*s2[round(t/delay)%len]&s2v[round(t/delay)%len]*4,nse=random()*(n[round(t/delay)%len]*4),nse+st1+st2",
			"codeMinified": "delay=8E3,len=8,s1v=[16,8],s2='23564762',s2v='84',n=[0,16,0,16,0,8,0,8],st1=t/2*'12486421'[round(t/delay)%len]&4*s1v[round(t/delay)%len&1],st2=t/2*s2[round(t/delay)%len]&4*s2v[round(t/delay)%len&1],nse=4*random()*n[round(t/delay)%len],nse+st1+st2"
		}, {
			"name": "sequencer",
			"url": "https://www.reddit.com/r/bytebeat/comments/q5r5zk/sequencer/",
			"date": "2021-10-11",
			"sampleRate": 44100,
			"codeOriginal": [
				"delay=22050,",
				"c5=523,",
				"d5=587,",
				"e5=659,",
				"f5=698,",
				"g5=783,",
				"a5=880,",
				"b5=987,",
				"c6=1046,",
				"tones=[c5,d5,e5,f5,g5,a5,b5,c6][round(t/delay)%8],",
				"(sin(t/44100*tones*6.28000000000001)*128)+128"
			],
			"codeMinified": "delay=22050,c5=523,d5=587,e5=659,f5=698,g5=783,a5=880,b5=987,c6=1046,tones=[c5,d5,e5,f5,g5,a5,b5,c6][round(t/delay)%8],128*sin(t/44100*tones*6.28)+128"
		}, {
			"name": "fire (max zoom)",
			"description": "Fire-like movement of Sierpinski triangles in \"Points\" mode, max zoom.",
			"url": "https://www.reddit.com/r/bytebeat/comments/q80gbs/fire_max_zoom/",
			"date": "2021-10-14",
			"sampleRate": 44100,
			"drawing": { "mode": "Points", "scale": 0 },
			"codeOriginal": "(((((((t%2)?t/2:t/4)+t/800)+sin(t/(t%2?20:10))*9)&t^t))+t^t)",
			"codeMinified": "(t/(t%2?2:4)+t/800+9*sin(t/(t%2?20:10))&t^t)+t^t"
		}, {
			"name": "thing 2",
			"url": "https://www.reddit.com/r/bytebeat/comments/q8ctdl/thing_2/",
			"date": "2021-10-15",
			"sampleRate": 44100,
			"codeOriginal": "sin(((t*(t^(t/2&(t/2))&t/4)&t/90)^t)/22050)*128+128",
			"codeMinified": "128*sin((t*(t^t/2&t/2&t/4)&t/90^t)/22050)+128"
		}, {
			"name": "printer",
			"url": "https://www.reddit.com/r/bytebeat/comments/q94xkt/printer/",
			"date": "2021-10-16",
			"mode": "Signed Bytebeat",
			"sampleRate": 11025,
			"codeOriginal": "(((((t&t/900)*t&t)*t/90000000^t)&127)+(sin(t/9000*(t/9000&127))*63)-63)",
			"codeMinified": "((((t&t/900)*t&t)*t/9E7^t)&127)+63*sin(t/9E3*(t/9E3&127))-63"
		}, {
			"name": "helicopter",
			"url": "https://www.reddit.com/r/bytebeat/comments/q9skto/helicopter/",
			"date": "2021-10-17",
			"sampleRate": 44100,
			"codeOriginal": "(((t%round(t/900)&-t*2)^t/900)/3)",
			"codeMinified": "(t%round(t/900)&2*-t^t/900)/3"
		}, {
			"name": "atari styled bass",
			"url": "https://www.reddit.com/r/bytebeat/comments/qcp8dy/atari_styled_bass/",
			"date": "2021-10-21",
			"sampleRate": 44100,
			"codeOriginal": [
				"nse=\"808080080080800880808080080808800880808080808080088008808\",",
				"(nse[round(t/20)%nse.length])*28&t/90&-t/91"
			],
			"codeMinified": "28*'808080080080800880808080080808800880808080808080088008808'[round(t/20)%57]&t/90&-t/91"
		}, {
			"name": "sin function test",
			"url": "https://www.reddit.com/r/bytebeat/comments/rhgniv/sin_function_test/",
			"date": "2021-12-16",
			"sampleRate": 44100,
			"codeOriginal": "delay=32,wv1=[1,2,3,4,5,6,7,8],((sin(t*(wv1[floor(t/delay/32/4)%wv1.length]/20)&t/delay/256)*64)+64)&-t/delay",
			"codeMinified": "delay=32,64*sin(t*((1+(int(t/delay/128)&7))/20)&t/delay/256)+64&-t/delay"
		}]
	}, {
		"author": "Jay-Arnett-97104",
		"name": "Sine Music v2",
		"url": "https://www.reddit.com/r/bytebeat/comments/q8ev9z/sine_music_v2/",
		"date": "2021-10-15",
		"sampleRate": 11025,
		"codeOriginal": "t=t*4,(sin(t/22/((t>>12)%4+1))*sin(t/22/((t>>15)%4+1))*((t/1)%0.0001)+128)*1280001",
		"codeMinified": "t*=4,1280001*(sin(t/22/((t>>12)%4+1))*sin(t/22/((t>>15)%4+1))*(t/1%1E-4)+128)"
	}, {
		"author": "Bp103",
		"name": "non-js bytebeat thing that resembles music if you squint your ears",
		"url": "https://www.reddit.com/r/bytebeat/comments/qem3ip/nonjs_bytebeat_thing_that_resembles_music_if_you/",
		"date": "2021-10-24",
		"codeOriginal": "((t%(8000*32))<(8000*16)?(t<<((((46517>>((t/512)%16))<<15)>>15)%15))%(((.6+t)>>9)^((.4-t)<<3)):(t<<((((43690>>((t/1024)%16))<<15)>>15)%15))-(((.6+t)>>9)^((.4-t)<<3))) | ((t%8000*16)<(8000*8)?(2<<((((t%4096*2)<<3)/((t%4096*2)>>8))^(((t%8192)<<1))|4>>((t%8192)>>4)))-(((t%1024)<<3)/((t%1024)>>8)):(((t%4096*2)<<3)/((t%4096*2)>>8))^((t%8192)<<1))",
		"codeMinified": "(128E3>t%256E3?(t<<(46517>>t/512%16<<15>>15)%15)%(.6+t>>9^.4-t<<3):(t<<(43690>>t/1024%16<<15>>15)%15)-(.6+t>>9^.4-t<<3))|(64E3>t%8E3*16?(2<<((t%4096*2<<3)/(t%4096*2>>8)^t%8192<<1|4>>(t%8192>>4)))-(t%1024<<3)/(t%1024>>8):(t%4096*2<<3)/(t%4096*2>>8)^t%8192<<1)"
	}, {
		"author": "Chasyxx",
		"children": [{
			"name": "Drifting electricity",
			"url": "https://www.reddit.com/r/bytebeat/comments/qi3enp/with_new_bytecodes_already_posted_here_are_all/",
			"date": "2021-10-29",
			"codeOriginal": "t>>t%(t%2?[61,51,31,41][(t>>14)%4]:34)+(t>>6)|Math.cos((t>>1)/314.159)*128+128",
			"codeMinified": "t>>t%(t%2?[61,51,31,41][(t>>14)%4]:34)+(t>>6)|128*cos((t>>1)/314.159)+128"
		}, {
			"name": "Game (C R O S S)",
			"url": "https://www.reddit.com/r/bytebeat/comments/vs8dtg/game_c_r_o_s_s/",
			"remix": {
				"author": "getDolphinedLol",
				"name": "Vegal *A N G E R Y*",
				"url": "https://www.reddit.com/r/bytebeat/comments/sgjf3j/vegal_a_n_g_e_r_y/"
			},
			"date": "2022-07-06",
			"sampleRate": 12288,
			"codeOriginal": "(t*[1.02,1.215,1.53,1.53,1.02,1.215,1.53,1.36][(t>>15)%8]>>1)%63+(t*[1.02,1.215,1.53,1.53,1.02,1.215,1.53,1.36][(t>>15)%8]>>1)%64+32*random()*(1-(1&t>>10))+(t*[sin(t>>4),sin(t>>1)][(t>>13)%2]&-t>>7&63)+(t>>18?(((t*([1.025,0.5125,0.765,0,0,0,0,0,1.22,.61,.91,0,0,0,0,0,1.1425,0.57125,0.8625,0,0,0,0,0,0.8625,0.57125,1.725,0,0,0,0,0][(t>>12)%32]))&16)*4):0)",
			"codeMinified": "(t*[1.02,1.215,1.53,1.53,1.02,1.215,1.53,1.36][(t>>15)%8]>>1)%63+(t*[1.02,1.215,1.53,1.53,1.02,1.215,1.53,1.36][(t>>15)%8]>>1)%64+32*random()*(1-(1&t>>10))+(t*[sin(t>>4),sin(t>>1)][(t>>13)%2]&-t>>7&63)+(t>>18?4*(t*[1.025,.5125,.765,0,0,0,0,0,1.22,.61,.91,0,0,0,0,0,1.1425,.57125,.8625,0,0,0,0,0,.8625,.57125,1.725,0,0,0,0,0][(t>>12)%32]&16):0)"
		}, {
			"name": "m4ri",
			"url": "https://www.reddit.com/r/bytebeat/comments/10mbft4/m4ri/",
			"remix": {
				"author": "SthephanShi",
				"name": "Cat-girl"
			},
			"date": "2023-01-27",
			"stereo": true,
			"codeOriginal": "[17*t|(t>>2)+(t&32768?13:14)*t|t>>3|t>>4|t>>5|t>>6,((((t>>2)+(t&32768?13:14)*t)/(1+((t>>12)%4)))&128+(t>>12))/3]",
			"codeMinified": "[17*t|(t>>2)+(t&32768?13:14)*t|t>>3|t>>4|t>>5|t>>6,(((t>>2)+(t&32768?13:14)*t)/(1+(t>>12)%4)&128+(t>>12))/3]"
		}, {
			"name": "sus4 (Spaaaace!)",
			"description": "\"Dark Forest\" with 0,5,7 pattern.",
			"url": "https://www.reddit.com/r/bytebeat/comments/10k73al/comment/j6ksxue/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "SthephanShi",
				"name": "Dark Forest",
				"url": "https://battleofthebits.com/arena/Entry/Dark+forest/57555/"
			},
			"date": "2023-01-31",
			"sampleRate": 44100,
			"codeOriginal": "T=t/5E3,b=T>>7,k=b+2&4?8:4,S=(s,p,d=0)=>(t*2**(p+'057'[(T-d)/s%3|0]/12+((1-(T>>5&3))%2+1)/4)&128)/3,N=p=>1E5*sin(T*p|0)&64,S(2,0)+S(2,0,3)/2+(b&&S(0,-2))+(b>1&&S(.25,1)*(1-T%16/20))+(b>2&&.4*N(1E6)*(1-(T+k/2)%k/k))+(b>3&&(64/(T%k)&64)+(T&k&&.6*N(330)*(1-T%k/k)))",
			"starred": 2
		}, {
			"name": "Major 7th (even more explorative!)",
			"description": "\"Dark Forest\" with 0,4,7,11 pattern. The most beautiful chords.",
			"url": "https://www.reddit.com/r/bytebeat/comments/10k73al/comment/j6ksxue/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "SthephanShi",
				"name": "Dark Forest",
				"url": "https://battleofthebits.com/arena/Entry/Dark+forest/57555/"
			},
			"date": "2023-01-31",
			"sampleRate": 44100,
			"codeOriginal": "T=t/5E3,b=T>>7,k=b+2&4?8:4,S=(s,p,d=0)=>(t*2**(p+[0,4,7,11][(T-d)/s%4|0]/12+((1-(T>>5&3))%2+1)/4)&128)/3,N=p=>1E5*sin(T*p|0)&64,S(2,0)+S(2,0,3)/2+(b&&S(0,-2))+(b>1&&S(.25,1)*(1-T%16/20))+(b>2&&.4*N(1E6)*(1-(T+k/2)%k/k))+(b>3&&(64/(T%k)&64)+(T&k&&.6*N(330)*(1-T%k/k)))",
			"starred": 2
		}, {
			"name": "destabilizer",
			"description": "A system that makes t a bit unstable. Set the max zoom.",
			"url": "https://www.reddit.com/r/bytebeat/comments/112iate/destabilizer/",
			"date": "2023-02-15",
			"stereo": true,
			"drawing": { "mode": "Waveform", "scale": 0 },
			"codeOriginal": [
				"tt=t,r=8,u=0x84,a=(b)=>(t^t+b),m=function(t,q){s = t;for (i=0; i<q; i++){s=s+(s>>r)}return s}, a=m(t,178),a-=(t/616.4)-(u),[a,(r<8?(t<<8-r):(t>>r-8))%256==0?255:1],t=a>>1,",
				"",
				"i=(5*t&t>>7|3*t&4*t>>10),ttt=tt,tt=t,t=ttt,o=5*t&t>>7|3*t&4*t>>10,d=[i,o],f=[t,tt],",
				"",
				"f //change to d to hear an example song with distortion"
			],
			"codeMinified": "m=(t,q)=>{s=t;for(i=0;i<q;i++)s+=s>>8;return s},dt=m(t,178)-t/616.4+132>>1,f=t=>(5*t&t>>7|3*t&4*t>>10),[f(dt),f(t)]"
		}, {
			"name": "nɔmba wan we dɛn rimiks",
			"url": "https://www.reddit.com/r/bytebeat/comments/11vejrl/n%C9%94mba_wan_we_d%C9%9Bn_rimiks/",
			"date": "2023-03-19",
			"sampleRate": 11025,
			"codeOriginal": "z=t*'1242'[3&t>>10],((((z*[1,1.2,1.8,2.7][3&t>>14])&255)/2)+(tan(256/(t&4095))*40)+64)^(sin(t*PI/32768)*30)",
			"codeMinified": "z=t*'1242'[3&t>>10],(z*[1,1.2,1.8,2.7][3&t>>14]&255)/2+40*tan(256/(t&4095))+64^30*sin(t*PI/32768)"
		}, {
			"name": "Drum Pattern",
			"url": "https://dollchan.net/btb/res/756.html#967",
			"date": "2023-04-28",
			"codeOriginal": [
				"a=(a,b)=>(b.test(a.toString(2))),",
				"tt=((t>>4)&255),",
				"drum=(t)=>a(t+tt,/^...1/)&&(a(t+tt,/^..1/)||a(t+tt,/^....1/)),",
				"",
				"drum(t%(2048/[1,1,1,1,1,1,2,2][t>>11&7]))?255:0"
			],
			"codeMinified": " a=(a,b)=>b.test(a.toString(2)),tt=t>>4&255,drum=t=>a(t+tt,/^...1/)&&(a(t+tt,/^..1/)||a(t+tt,/^....1/)),drum(t%(2048/[1,1,1,1,1,1,2,2][t>>11&7]))&&255"
		}, {
			"name": "( ͡° ͜ʖ ͡°) alternate engine",
			"url": "https://dollchan.net/btb/res/756.html#994",
			"remix": {
				"author": "getDolphinedLol",
				"name": "( ͡° ͜ʖ ͡°)",
				"url": "https://www.reddit.com/r/bytebeat/comments/s6xqf1/%CA%96/"
			},
			"date": "2023-05-03",
			"sampleRate": 44100,
			"codeOriginal": [
				"t=int(t/4),",
				"l=sin(t>>3),",
				"h=sin(t),",
				"proc=(input,s=11)=>(x=input[(t>>s)%input.length],(x=='h'?h:x=='l'?l:x)*t&t>>(s-8)),",
				"proc(\"l2h2l2h2l2h2l2h3\",12)-8"
			],
			"codeMinified": "((t>>=2)*[l=sin(t>>3),2,h=sin(t),2,l,2,h,2,l,2,h,2,l,2,h,3][t>>12&15]&t>>4)-8",
			"starred": 1
		}, {
			"name": "abandoned pit",
			"url": "https://dollchan.net/btb/res/756.html#1633",
			"cover": {
				"name": "Abandoned Pit - Castlevania: Symphony of the Night Music Extended",
				"url": "https://youtu.be/Qa5ZjayT5CA"
			},
			"date": "2023-05-03",
			"sampleRate": 48000,
			"codeOriginal": [
				"T=t*1.2,",
				"A=(T>>16)<7?[2.4,0,2,2.4]:[0,0,2,2.4],",
				"C=!!((((T>>16)/3)-1.666)&4),",
				"C2=((T>>16)>5)&&!!((((T>>16)/3)-2)&4),",
				"B=[0,0,2,2.7],",
				"D=C2?[1.35,2,1.88]:[1,2.4,2],",
				"a=(t*0.56*D[(T>>16)%3]&192)/(1+(T>>10&63)/4),",
				"b=((t*1.12*((C||C2)?B:A)[(T>>14)&3]&255)/(1+(T>>8&63)/8))&224,",
				"",
				"a+(((T>>16)>5)&&b)"
			],
			"codeMinified": "T=1.2*t,A=T>>16<7?[2.4,0,2,2.4]:[0,0,2,2.4],C=!!((T>>16)/3-1.666&4),C2=T>>16>5&&!!((T>>16)/3-2&4),B=[0,0,2,2.7],D=C2?[1.35,2,1.88]:[1,2.4,2],a=(.56*t*D[(T>>16)%3]&192)/(1+(T>>10&63)/4),b=(1.12*t*(C||C2?B:A)[T>>14&3]&255)/(1+(T>>8&63)/8)&224,a+(T>>16>5&&b)"
		}, {
			"name": "cave_7",
			"description": "Mysterious echoes in minor key.",
			"url": "https://dollchan.net/btb/res/756.html#1762",
			"remix": {
				"author": "baenhohoho",
				"name": "echo_testing",
				"url": "https://www.reddit.com/r/bytebeat/comments/1546vk4/echo_testing/"
			},
			"date": "2023-07-30",
			"sampleRate": 31000,
			"codeOriginal": [
				"f=4,t/=f,r=(x,y,z)=>(t||(a=Array(n=4096*f).fill(y)),c=x%256+a[(t*f)%n],a[(t*f)%n]=c*z,c),",
				"c=((t*5)/(4+(t>>15)%16)*(1+(3&t>>13))>>(1&t>>12)&16)*8,",
				"d=r(c*1.00009**(-t%16384)%256/4,64,.8)*1.5,e=isNaN(d)?e:d"
			],
			"codeMinified": "f=4,t/=f,r=(x,y,z)=>(t||(a=Array(n=4096*f).fill(y)),c=x%256+a[t*f%n],a[t*f%n]=c*z,c),c=8*(5*t/(4+(t>>15)%16)*(1+(3&t>>13))>>(1&t>>12)&16),d=1.5*r(c*1.00009**(-t%16384)%256/4,64,.8),e=isNaN(d)?e:d",
			"starred": 1
		}, {
			"name": "ヾ(⌐■_■)ノ400",
			"description": "A combination of Zackx's tunes. Kernkraft with echo.",
			"url": "https://dollchan.net/btb/res/756.html#1814",
			"remix": [{
				"author": "Zackx",
				"name": "ヾ(⌐■_■)ノ♪",
				"url": "https://dollchan.net/btb/res/204.html#1683"
			}, {
				"author": "Zackx",
				"name": "kernkraft 400",
				"url": "https://dollchan.net/btb/res/204.html#280"
			}],
			"date": "2023-08-05",
			"sampleRate": 40000,
			"codeOriginal": "a=t=>(t*2**((e=parseInt('0cfhjc0c0cfhjkjfh5 5f3jc0c0c0c0c'[(t>>13)%32],36),isNaN(e)?-9e9:e)/12)/2.4&128)*(1-t%8192/12E3),a(t)+a(t-12288)/2+a(t-24576)/4+a(t-49152)/8"
		}, {
			"name": "CRZStepD",
			"url": "https://dollchan.net/btb/res/756.html#2345",
			"remix": {
				"author": "lhphr",
				"name": "CRZstepᑦ",
				"url": "https://dollchan.net/btb/res/44.html#61"
			},
			"date": "2023-09-26",
			"sampleRate": 31000,
			"codeOriginal": "f=x=>t&165&t%255&&t/256*(t&t>>x),a=37649&1<<(t>>12&15)&&128*sin(2048/((t%4096)/4)**.0125)+128,(a|f(12)-f(14)+128)^(t>>6)^(((t&32&t>>8)||t>>6)^(t>>6))",
			"codeMinified": "f=x=>t&165&t%255&&t/256*(t&t>>x),a=37649&1<<(t>>12&15)&&128*sin(2048/(t%4096/4)**.0125)+128,(a|f(12)-f(14)+128)^(t&32&t>>8||t>>6)"
		}, {
			"name": "please some remix this out of strings",
			"description": "An interesting way to reduce an array.",
			"url": "https://dollchan.net/btb/res/756.html#2430",
			"remix": [{
				"author": "Decent-Manager-6169",
				"name": "please someone remix this",
				"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/please_someone_remix_this/"
			}, {
				"author": "SthephanShi",
				"name": "Trip to Otherworld",
				"url": "https://www.reddit.com/r/bytebeat/comments/127ij8e/trip_to_otherworld/"
			}],
			"date": "2023-10-10",
			"sampleRate": 32000,
			"codeOriginal": [
				"rel={a:-7,b:-11,c:-2,d:-4,e:-9,f:10,g:12},",
				"s=t=>(t=max(0,t),(t*2.09*2**((rel[x=\"80a50a80a50a805af0a50bf1a73cf3c7g0a80ag0a80ag08ag0a80ag0f137c3578db5db8da5dbfd5a7ce3ce7ce3ec875fg0a80ag0a80ag08ag0a80ag0f137c357\"[t>>12&127]]??x)/12)&128)",
				"*(1-((t%4096)/4096))),s(t)+s(t-8192)/2+s(t-16384)/4"
			],
			"codeMinified": "rel={a:-7,b:-11,c:-2,d:-4,e:-9,f:10,g:12},s=t=>(t=max(0,t),(2.09*t*2**((rel[x='80a50a80a50a805af0a50bf1a73cf3c7g0a80ag0a80ag08ag0a80ag0f137c3578db5db8da5dbfd5a7ce3ce7ce3ec875fg0a80ag0a80ag08ag0a80ag0f137c357'[t>>12&127]]??x)/12)&128)*(1-t%4096/4096)),s(t)+s(t-8192)/2+s(t-16384)/4",
			"starred": 1
		}, {
			"name": "Cave_8",
			"description": "Good for some horror game. Reminds the \"Government Funding\" cover for Backrooms.",
			"url": "https://dollchan.net/btb/res/756.html#2528",
			"remix": {
				"name": "cave_7",
				"url": "https://dollchan.net/btb/res/756.html#1762"
			},
			"date": "2023-10-23",
			"sampleRate": 29000,
			"codeOriginal": [
				"t||(rvA=[]),rvI=0,",
				"$A=t==0,",
				"rv=(X,L,dry=0.5,wet=0.5,dry2=0,T=t,Q=false)=>(",
				"    (t&&!(rvA[rvI]==undefined))||(",
				"        rvA.push(Array(L).fill(0))",
				"    ),",
				"    //(()=>{throw rv})()",
				"    OUTPUT1=rvA[rvI][Q?int(T%L):t%L]=",
				"        rvA[rvI][Q?t%L:int(T%L)]*wet+",
				"        (X&255)*dry,",
				"    Q?OUTPUT1+X*dry2:rvA[rvI][t%L]+X*dry2",
				"),R=t*10/(4+(t>>17)%16)*(1+(3&t>>15))>>(1&t>>14)&128,rv(R*1.00003**-(t&16383),16384,0.2,0.8,0.0,t/1.004,true)*2"
			],
			"codeMinified": "t||(rvA=[]),rvI=0,$A=t==0,rv=(X,L,dry=.5,wet=.5,dry2=0,T=t,Q=false)=>(t&&void 0!=rvA[rvI]||rvA.push(Array(L).fill(0)),OUTPUT1=rvA[rvI][Q?int(T%L):t%L]=rvA[rvI][Q?t%L:int(T%L)]*wet+(X&255)*dry,Q?OUTPUT1+X*dry2:rvA[rvI][t%L]+X*dry2),R=10*t/(4+(t>>17)%16)*(1+(3&t>>15))>>(1&t>>14)&128,2*rv(R*1.00003**(-(t&16383)),16384,.2,.8,0,t/1.004,!0)",
			"starred": 1
		}]
	}, {
		"author": "NewFall2020",
		"children": [{
			"name": "first bytebeat remixed (This was made by SthephanShi and I remixed it)",
			"url": "https://www.reddit.com/r/bytebeat/comments/qlf0op/first_bytebeat_remixed/",
			"date": "2021-11-02",
			"codeOriginal": "((t*(t&16384?6:5))/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|(t*(t&16384?6:5))*(3+(3&t>>(t&2048?334:14)))>>(1+(3&t>>8))&((sin(t)*t|t>>4)|(tan(t))|t>>3)",
			"codeMinified": "(t*(t&16384?6:5)/4|t>>4)*(1+(3&t>>11))>>(3&t>>9)|t*(t&16384?6:5)*(3+(3&t>>(t&2048?334:14)))>>1+(3&t>>8)&(sin(t)*t|t>>4|t>>3)"
		}, {
			"name": "When Bytebeat has a Harmony v2",
			"url": "https://www.reddit.com/r/bytebeat/comments/qqcblq/when_bytebeat_has_a_harmony_v2/",
			"date": "2021-11-09",
			"sampleRate": 32000,
			"codeOriginal": "t/=4,d=[1,1.5,1.75,2,2.5,4,1,3][(t>>13)%8]*t,e=[1,1.5,1.75,1.6666,2,4,1,3][(t>>13)%8]*t,f=[1,1.5,1.75,1.6,2,2.4,1,3][(t>>13)%8]*t,g=[0.5,0.75,0.875,1,0.75,0.5,0.25,0.75,0.625,0.75,0.875,1,0.75,0.5,0.25,0.75][(t>>13)%16]*t,h=[2,3,3.5,4,5,8,2,6][(t>>13)%8]*t,(d%32+e%42.66666666+f%51.212121212121+g%64+h%16)",
			"codeMinified": "t/=4,d=[1,1.5,1.75,2,2.5,4,1,3][(t>>13)%8]*t,e=[1,1.5,1.75,1.6666,2,4,1,3][(t>>13)%8]*t,f=[1,1.5,1.75,1.6,2,2.4,1,3][(t>>13)%8]*t,g=[.5,.75,.875,1,.75,.5,.25,.75,.625,.75,.875,1,.75,.5,.25,.75][(t>>13)%16]*t,h=[2,3,3.5,4,5,8,2,6][(t>>13)%8]*t,d%32+e%42.66666666+f%51.212121212121+g%64+h%16"
		}, {
			"name": "Awesome level - Remixed",
			"url": "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
			"remix": {
				"author": "SthephanShi",
				"name": "Awesome level"
			},
			"date": "2021-11-29",
			"sampleRate": 32000,
			"codeOriginal": [
				"t/=4,",
				"a=(t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:16/2)))>>(3&t>>10)|t>>4),",
				"b=(t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4),",
				"c=3e4/(t&4095)&128-64,",
				"d=(t*(t&16384?6:5)*(2*(1&t>>11)))/32%64,",
				"e=(random()*(((-t>>[6,5,5,5,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64)+64)),",
				"(((((a%64)+(a/2%64)+(b/4%64))/2)+64)+(c/2*2)-44)+d+e"
			],
			"codeMinified": "t/=4,a=t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:8)))>>(3&t>>10)|t>>4,b=t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4,c=3E4/(t&4095)&64,d=t*(t&16384?6:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,5,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64+64),(a%64+a/2%64+b/4%64)/2+64+c/2*2-44+d+e",
			"starred": 1
		}, {
			"name": "Awesome level #2 Remix",
			"url": "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
			"remix": {
				"name": "Awesome level #2",
				"author": "SthephanShi"
			},
			"date": "2021-11-29",
			"sampleRate": 32000,
			"codeOriginal": [
				"t/=4,",
				"a=(t*(t&16384?6:5)*(3-(3&t>>(t&2048?7:16/2)))>>(3&t>>10)|t>>4),",
				"b=(t*(t&16384?6:5)*(5-(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4),",
				"c=3e4/(t&8191)&128-64,",
				"d=(t*(t&16384?6:5)*(2*(1&t>>11)))/32%64,",
				"e=(random()*(((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64)+64)),",
				"(((((a%64)+(a/2%64)+(b/4%64))/2)+64)+(c/2*2)-44)+d+e"
			],
			"codeMinified": "t/=4,a=t*(t&16384?6:5)*(3-(3&t>>(t&2048?7:8)))>>(3&t>>10)|t>>4,b=t*(t&16384?6:5)*(5-(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>4,c=3E4/(t&8191)&64,d=t*(t&16384?6:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64+64),(a%64+a/2%64+b/4%64)/2+64+c/2*2-44+d+e"
		}, {
			"name": "Awesome level #3 fanmade",
			"url": "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
			"remix": {
				"name": "Awesome level #2",
				"author": "SthephanShi"
			},
			"date": "2021-11-29",
			"sampleRate": 32000,
			"codeOriginal": [
				"t/=4,",
				"a=(t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:16/2)))>>(3&t>>10)|t>>3),",
				"b=(t*(t&16384?6:5)*(2+(3&t>>(t&4096?8:15)))>>(3&t>>9)|t>>4),",
				"c=3e4/(t&4095)&128-64,",
				"d=(t*(t&16384?6:5)*(2*(1&t>>11)))/32%64,",
				"e=(random()*(((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64)+64)),",
				"(((((a%64)+(a/2%64)+(b/4%64))/2)+64)+(c/2*2)-44)+d+e"
			],
			"codeMinified": "t/=4,a=t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:8)))>>(3&t>>10)|t>>3,b=t*(t&16384?6:5)*(2+(3&t>>(t&4096?8:15)))>>(3&t>>9)|t>>4,c=3E4/(t&4095)&64,d=t*(t&16384?6:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,4,5,5,4,4,5,5,5,4,5,5,4,3][(t>>11)%16])%64+64),(a%64+a/2%64+b/4%64)/2+64+c/2*2-44+d+e"
		}, {
			"name": "TIRO remixed again",
			"url": "https://www.reddit.com/r/bytebeat/comments/r557yi/4_links/",
			"remix": {
				"author": "RealZynx92",
				"name": "remix of \"The time is running out!\"",
				"url": "https://www.reddit.com/r/bytebeat/comments/qf9meb/remix_of_the_time_is_running_out_by_stephanshi/"
			},
			"date": "2021-11-29",
			"sampleRate": 44100,
			"codeOriginal": [
				"t/=4,",
				"a=",
				"b=((t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536?(t&4096?2:16):2))|t>>4)/2&127),",
				"c=3e4/(t%(t&8192?5120:4096))&128-64,",
				"d=(t*(t&16384?7:5)*(2*(1&t>>11)))/32%64,",
				"e=(random()*(((-t>>[6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,3][(t>>11)%64])%64)+64)),",
				"(b/2%128)+(c%164)+d+e"
			],
			"codeMinified": "t/=4,b=(t*(t&16384?7:5)*(3-(3&-t>>9)+(3&t>>8))>>(2&t>>(t%65536?t&4096?2:16:2))|t>>4)/2&127,c=3E4/(t%(t&8192?5120:4096))&64,d=t*(t&16384?7:5)*2*(1&t>>11)/32%64,e=random()*((-t>>[6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,3][(t>>11)%64])%64+64),b/2%128+c%164+d+e",
			"starred": 2
		}, {
			"name": "TIRO Remixed#5",
			"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/comment/hmu205h/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "RealZynx92",
				"name": "better remix of \"The time is running out!\"",
				"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/"
			},
			"date": "2021-12-01",
			"sampleRate": 44100,
			"codeOriginal": [
				"t/=4,a=t&524288?(t*(t&16384?7:5)*(3-(3&t>>11)+(3&t<<8))):(t*(t&16384?7:5)*(4-(3&t>>10)+(3&t<<7))),",
				"b=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2)),",
				"c=((a/32%32)+(b/4%32)),",
				"",
				"t&524288?(random()*(((-t>>([6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3,6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%64]))%64)+64))%102+((5.12e4/(t%(t&8192?4096:4096))&128-64)%180)+c:(random()*(((-t>>([6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4][(t>>11)%32]))%64)+64))%102+((3.02e4/(t%(t&8192?4096:6144))&128-64)%180)+c"
			],
			"codeMinified": "t/=4,a=t&524288?t*(t&16384?7:5)*(3-(3&t>>11)+(3&t<<8)):t*(t&16384?7:5)*(4-(3&t>>10)+(3&t<<7)),b=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(59392>t%65536?t&4096?2:16:2)),c=a/32%32+b/4%32,t&524288?random()*((-t>>[6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3,6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%64])%64+64)%102+(51200/(t%4096)&64)%180+c:random()*((-t>>[6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4][(t>>11)%32])%64+64)%102+(30200/(t%(t&8192?4096:6144))&64)%180+c",
			"starred": 1
		}, {
			"name": "TIRO Remixed#5.1",
			"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/comment/hmu25u3/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "RealZynx92",
				"name": "better remix of \"The time is running out!\"",
				"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/"
			},
			"date": "2021-12-01",
			"sampleRate": 44100,
			"codeOriginal": [
				"t/=4,a=t&524288?(t*(t&16384?7:5)*(3-(3&t>>11)+(3&t<<8))):((t*(t&16384?7:5)*(1+(3&t>>10)+(3&t<<7)))),",
				"b=t*(t&16384?7:5)*(3-(3&t>>(t&524288?10:9))+(3&t>>(t&262144?4:8)))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2)),",
				"c=((a/32%32)+(b/4%32)),",
				"",
				"t&524288?(random()*(((-t>>([6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3,6,5,5,4,5,5,5,4,5,5,5,4,5,5,4,4,5,5,5,4,5,5,5,4,5,5,5,4,5,5,4,3][(t>>11)%64]))%64)+64))%102+((5.12e4/(t%(t&8192?4096:4096))&128-64)%180)+c:(t&262144?(random()*(((-t>>([6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,4,5,3,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4,6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,4,3,2,1][(t>>11)%128]))%64)+64))%102+((3.02e4/(t%(t&8192?4096:6144))&128-64)%180)+c:(random()*(((-t>>([6,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,4,5,5,5,5,5,5,4,4][(t>>11)%32]))%64)+64))%1+((3.02e4/(t%(t&8192?3072:4096))&128-64)%180)+c)"
			],
			"codeMinified": "t/=4,a=t&2**19?t*(t&2**14?7:5)*(3-(3&t>>11)+(3&t<<8)):t*(t&2**14?7:5)*(1+(3&t>>10)+(3&t<<7)),b=t*(t&2**14?7:5)*(3-(3&t>>(t&2**19?10:9))+(3&t>>(t&2**18?4:8)))>>(3&-t>>(59392>t%2**16?t&4096?2:16:2)),c=a/32%32+b/4%32,t&2**19?random()*((-t>>'6554555455545544555455545554554365545554555455445554555455545543'[(t>>11)%64])%64+64)%102+(51200/(t%4096)&64)%180+c:t&2**18?random()*((-t>>'65555554555555545555555455555544655555545555555455555554555554536555555455555554555555545555554465555554555555545555555455554321'[(t>>11)%128])%64+64)%102+(30200/(t%(t&8192?4096:6144))&64)%180+c:random()*((-t>>'65555554555555545555555455555544'[(t>>11)%32])%64+64)%1+(30200/(t%(t&8192?3072:4096))&64)%180+c",
			"starred": 2
		}, {
			"name": "Neurofunk remixed",
			"url": "https://www.reddit.com/r/bytebeat/comments/s0laz2/comment/hv2s233/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "SthephanShi",
				"name": "Neurofunk",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0laz2/neurofunk/"
			},
			"date": "2021-02-01",
			"sampleRate": 44100,
			"codeOriginal": [
				"t/=5.5125,",
				"a=t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2),",
				"b=a/3%(85+(1/3))+((t%65536<61440?44583.5284:0)/(t&4095)/2%128),",
				"c=((t%1024<256?4:0))*(t*Math.random())|t>>0,",
				"d=((t%512<256?4:0))*(t*Math.random())|t>>0,",
				"e=(t%16384<(1024*14)?c:d),",
				"f=e/8%32+(b%190),",
				"(t%131072<126976?f:(f+(44583/(-t&4095))/2%128))"
			],
			"codeMinified": "t/=5.5125,a=t*((t&4096?59392>t%65536?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2),b=a/3%(85+1/3)+(61440>t%65536?44583.5284:0)/(t&4095)/2%128,c=(256>t%1024?4:0)*t*random()|t>>0,d=(256>t%512?4:0)*t*random()|t>>0,e=14336>t%16384?c:d,f=e/8%32+b%190,126976>t%131072?f:f+44583/(-t&4095)/2%128",
			"starred": 1
		}]
	}, {
		"author": "getDolphinedLol",
		"children": [{
			"name": "Bots",
			"url": "https://www.reddit.com/r/bytebeat/comments/raab29/bots_44100_hz/",
			"date": "2021-12-06",
			"sampleRate": 44100,
			"codeOriginal": "-(((30*sin(t>>4))^t>>9)|(tan(t>>13)&t>>4)*t>>5)",
			"codeMinified": "-(30*sin(t>>4)^t>>9|(tan(t>>13)&t>>4)*t>>5)"
		}, {
			"name": "⌬ (Signed Bytebeat)",
			"url": "https://www.reddit.com/r/bytebeat/comments/rda606/signed_bytebeat/",
			"date": "2021-12-10",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "(30*sin(t>>5)*t>>15)",
			"codeMinified": "30*sin(t>>5)*t>>15"
		}, {
			"name": "- (44100 Hz)",
			"url": "https://www.reddit.com/r/bytebeat/comments/re5h0j/44100_hz/",
			"date": "2021-12-11",
			"sampleRate": 44100,
			"codeOriginal": "((t-t%(t/62.4/2E1)^t)+t/4E3)-t>>1",
			"codeMinified": "(t-t%(t/62.4/20)^t)+t/4E3-t>>1"
		}, {
			"name": "Ice Age",
			"url": "https://www.reddit.com/r/bytebeat/comments/reokmi/ice_age_32k_hz/",
			"date": "2021-12-12",
			"sampleRate": 32000,
			"codeOriginal": "m=(t*[6,7,8,7][t/1.6&t>>12&3]/8&t>>10)-5",
			"codeMinified": "(t*'6787'[t/1.6&t>>12&3]/8&t>>10)-5"
		}, {
			"name": "Shredder Vol. 2",
			"url": "https://www.reddit.com/r/bytebeat/comments/rxcwfw/shredder_vol_2_22050_hz/",
			"date": "2022-01-06",
			"sampleRate": 22050,
			"codeOriginal": "t>>(t&8192?3:4)|t*(t>>5&t>>7)|(t*(t>>4&t>>5|t>>9)&144)|\"$TH\".charCodeAt(t+t>>t)",
			"codeMinified": "t>>(t&8192?3:4)|t*(t>>5&t>>7)|t*(t>>4&t>>5|t>>9)&144|'$TH'.charCodeAt(t+t>>t)"
		}, {
			"name": "funky remix of \"the time is running out!\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/ry4ikf/comment/hrmh2m3/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "SthephanShi",
				"name": "The time is running out!",
				"url": "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
			},
			"date": "2022-01-07",
			"mode": "Signed Bytebeat",
			"sampleRate": 11025,
			"codeOriginal": "(t>>4|t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t%65536<59392?(t&4096?2:16):2))&96)+(64*random(t)*(1&t>>11))+(44444/(t%pow(4,(3+(2+(1)))))&128)",
			"codeMinified": "(t>>4|t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(59392>t%65536?t&4096?2:16:2))&96)+64*random()*(1&t>>11)+(44444/(t%4096)&128)",
			"starred": 1
		}, {
			"name": "fitebeat",
			"url": "https://www.reddit.com/r/bytebeat/comments/ry7d6g/fitebeat/",
			"date": "2022-01-07",
			"codeOriginal": "((\"Baz§zaB-\".charCodeAt((t*(t&4096?3:2)*(t&2048?2:1))>>3&7))+(((t>>1)*(t&32768?3:2)*(1&t>>11)&144))+(64*random(t)*(1-(1&t>>9)))+(44444/(t%pow(4,(3+(2+(1)))))&64))/2",
			"codeMinified": "('Baz\u00a7zaB-'.charCodeAt(t*(t&4096?3:2)*(t&2048?2:1)>>3&7)+((t>>1)*(t&32768?3:2)*(1&t>>11)&144)+64*random()*(1-(1&t>>9))+(44444/(t%4096)&64))/2"
		}, {
			"name": "65536",
			"url": "https://www.reddit.com/r/bytebeat/comments/s0ixnm/65536_signed_bytebeat/",
			"date": "2022-01-10",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "t/=4.7,(((t>>3)*(t&32768?3:2)*(t&65536?1.8:2)&64)+((t*(t&16384?3:2)*(t&4096?2:1)&64)+(64*sin(3123/(t%pow(4,(3+(2+(1)))))))+(64*random()*(1-(1&t>>10))))/2)-64",
			"codeMinified": "t/=4.7,((t>>3)*(t&32768?3:2)*(t&65536?1.8:2)&64)+((t*(t&16384?3:2)*(t&4096?2:1)&64)+64*sin(3123/(t%4096))+64*random()*(1-(1&t>>10)))/2-64"
		}, {
			"name": "goose melody",
			"url": "https://www.reddit.com/r/bytebeat/comments/s0t3j1/goose_melody/",
			"date": "2022-01-10",
			"sampleRate": 44100,
			"codeOriginal": "t/=1.2,([4,0,4,0,4,3.8,4,4.8,5,0,4.8,0,4,3.9,3.8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,0.5,0,1,0,0.5,0,4,0,4,0,4,3.8,4,5,7,0,7,0,7,7,8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,0.5,0,1,0,0.5,0][(t>>12)%64]*(t>>1)&128)",
			"codeMinified": "t/=1.2,[4,0,4,0,4,3.8,4,4.8,5,0,4.8,0,4,3.9,3.8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0,4,0,4,0,4,3.8,4,5,7,0,7,0,7,7,8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0][(t>>12)%64]*(t>>1)&128"
		}, {
			"name": "the danger zone",
			"url": "https://www.reddit.com/r/bytebeat/comments/s0xhgq/the_danger_zone/",
			"date": "2022-01-11",
			"sampleRate": 44100,
			"codeOriginal": "[1,0.5,1,1.2,1,0.5,1,0.9,1,0.5,1,1.2,4,3.5,4,3][(t>>13)%16]*t&128",
			"codeMinified": "[1,.5,1,1.2,1,.5,1,.9,1,.5,1,1.2,4,3.5,4,3][(t>>13)%16]*t&128"
		}, {
			"name": "Ctrl+V",
			"url": "https://www.reddit.com/r/bytebeat/comments/s0ytc9/ctrlv/",
			"date": "2022-01-11",
			"sampleRate": 44100,
			"codeOriginal": "(([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2)+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)",
			"codeMinified": "([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)",
			"starred": 1
		}, {
			"name": "ARRAY 11025HZ SONG",
			"url": "https://www.reddit.com/r/bytebeat/comments/s1cai7/array_11025hz_song/",
			"date": "2022-01-11",
			"sampleRate": 11025,
			"codeOriginal": "([1,0,2,0,3,0,2.4,0][(t>>12)%8]*t)+([0,128][(t>>12)%2]*random())|t>>3",
			"codeMinified": "[1,0,2,0,3,0,2.4,0][(t>>12)%8]*t+[0,128][(t>>12)%2]*random()|t>>3"
		}, {
			"name": "funny boi",
			"url": "https://www.reddit.com/r/bytebeat/comments/s1bltj/funny_boi/",
			"date": "2022-01-11",
			"sampleRate": 44100,
			"codeOriginal": "[3,0,3,0,3,3,2,2,3,3,3.5,3.5,3,3,2.5,2.5,3,2.9,3,2.9,3,0,3,0,2.5,2.5,2,2,1.8,1.8,2,2][(t>>12)%32]*t&191"
		}, {
			"name": "pootis",
			"url": "https://www.reddit.com/r/bytebeat/comments/s1gjav/pootis_44100hz/",
			"date": "2022-01-11",
			"sampleRate": 44100,
			"codeOriginal": "(([2,0,3,0,2,0,2.5,0,3,0,2,0,1.8,0,3,3][(t>>12)%16]*t>>2&127)+(t>>8)&128)+([0,1][(t>>13)%2]*t>>2&127)+(128*sin(4095/(t%pow(4,(3+(3+(1)))))))",
			"codeMinified": "(([2,0,3,0,2,0,2.5,0,3,0,2,0,1.8,0,3,3][(t>>12)%16]*t>>2&127)+(t>>8)&128)+([0,1][(t>>13)%2]*t>>2&127)+128*sin(4095/(t%16384))",
			"starred": 1
		}, {
			"name": "-PWM MUSIC-",
			"url": "https://www.reddit.com/r/bytebeat/comments/s27xzz/pwm_muisc/",
			"date": "2022-01-12",
			"sampleRate": 32000,
			"codeOriginal": "(([2,2,1,0,1,0,1,0,0.9,0.9,1,1,1.5,1.5,0.5,0.5][(t>>11)%16]*t&127)+(t>>10)&128)+(10*random())+(16383/(t%pow(4,(3+(3+(1))))))",
			"codeMinified": "(([2,2,1,0,1,0,1,0,.9,.9,1,1,1.5,1.5,.5,.5][(t>>11)%16]*t&127)+(t>>10)&128)+10*random()+16383/(t%16384)"
		}, {
			"name": "something cool",
			"url": "https://www.reddit.com/r/bytebeat/comments/s628sb/something_cool/",
			"date": "2022-01-17",
			"sampleRate": 44100,
			"codeOriginal": [
				"t/=4.7,",
				"(x=[4,2,1,0.5][(t>>10)%4]*t,",
				"(t*(t&16384?x:t&8192?3:4)&127)+(x&128)|t>>3)/2"
			],
			"codeMinified": "t/=4.7,(x=[4,2,1,.5][(t>>10)%4]*t,(t*(t&16384?x:t&8192?3:4)&127)+(x&128)|t>>3)/2"
		}, {
			"name": "i put a whole bag of jellybeans up my ass",
			"url": "https://www.reddit.com/r/bytebeat/comments/s66475/i_put_a_whole_bag_of_jellybeans_up_my_ass/",
			"date": "2022-01-17",
			"sampleRate": 44100,
			"codeOriginal": "([1,0.5,2,0.5,3,0.5,2,0.5,5,0.5,4,0.5,3.5,0.5,4,0.5,7,0.5,6,0.5,7,0.5,8,0.8,8,0.8,8,0.8,8,0.8,8,0.5][(t>>12)%32]*t>>1&191)+(t>>9)&192",
			"codeMinified": "([1,.5,2,.5,3,.5,2,.5,5,.5,4,.5,3.5,.5,4,.5,7,.5,6,.5,7,.5,8,.8,8,.8,8,.8,8,.8,8,.5][(t>>12)%32]*t>>1&191)+(t>>9)&192"
		}, {
			"name": "chocolate chip bytebeat code",
			"url": "https://www.reddit.com/r/bytebeat/comments/s69l6o/chocolate_chip_bytebeat_code/",
			"date": "2022-01-17",
			"sampleRate": 44100,
			"codeOriginal": "t/=4.7,[sin(t>>3),2,sin(t>>1),3][(t>>11)%4]*t|[2,1,0.5,0.1,2,1,0.5,PI][(t>>12)%8]*t>>4",
			"codeMinified": "t/=4.7,[sin(t>>3),2,sin(t>>1),3][(t>>11)%4]*t|[2,1,.5,.1,2,1,.5,PI][(t>>12)%8]*t>>4",
			"starred": 1
		}, {
			"name": "( ͡° ͜ʖ ͡°)",
			"url": "https://www.reddit.com/r/bytebeat/comments/s6xqf1/%CA%96/",
			"date": "2022-01-18",
			"sampleRate": 11025,
			"codeOriginal": "([sin(t>>3),2,sin(t),2,sin(t>>3),2,sin(t),2,sin(t>>3),2,sin(t),2,sin(t>>3),2,sin(t),3][(t>>11)%16]*t&t>>3)-20",
			"codeMinified": "([sin(t>>3),2,sin(t),'2223'[3&t>>13]][3&t>>11]*t&t>>3)-20",
			"starred": 2
		}, {
			"name": "kinda funni remix of \"the time is running out!\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/s7aiq2/kinda_funni_remix_of_the_time_is_running_out_by/",
			"remix": {
				"author": "SthephanShi",
				"name": "The time is running out!",
				"url": "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
			},
			"date": "2021-10-19",
			"sampleRate": 11025,
			"codeOriginal": "t*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8))>>(3&-t>>(t&4096?2:16))|4e4/(t&4095)|t>>(t&4096?t&8192?4:2:3)",
			"starred": 1
		}, {
			"name": "grogrogilla",
			"url": "https://www.reddit.com/r/bytebeat/comments/s73i8u/grogrogilla/",
			"date": "2022-01-18",
			"codeOriginal": "t/=0.4,([sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2.5,sin(t>>2),3,][(t>>12)%16]*t&t>>4)-20",
			"codeMinified": "t/=.4,([sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2,sin(t>>2),2,sin(t>>4),2.5,sin(t>>2),3][(t>>12)%16]*t&t>>4)-20",
			"starred": 1
		}, {
			"name": "taiko drums",
			"url": "https://www.reddit.com/r/bytebeat/comments/s7daoh/taiko_drums/",
			"date": "2022-01-19",
			"sampleRate": 11025,
			"codeOriginal": "([1,1,1,1,2,3,2.4,3,1,1,1,1,6,3,2,2.4][(t>>11)%16]*t*(t&4096?1:2)&t>>(t&8192?3:4))-16",
			"starred": 1
		}, {
			"name": "snaerasrakd",
			"url": "https://www.reddit.com/r/bytebeat/comments/saf49d/snaerasrakd/",
			"date": "2022-01-23",
			"sampleRate": 44100,
			"codeOriginal": "t/=5.5,+[1.5,sin(t>>1),1.5,sin(t>>1),2,sin(t>>1),1.8,sin(t>>1),][(t>>12)%8]*t&-t>>4|128*random()*(1-(1&t>>9))|4e4/(t&4095)",
			"codeMinified": "t/=5.5,+[1.5,sin(t>>1),1.5,sin(t>>1),2,sin(t>>1),1.8,sin(t>>1)][(t>>12)%8]*t&-t>>4|128*random()*(1-(1&t>>9))|4E4/(t&4095)",
			"starred": 1
		}, {
			"name": "music ...yes",
			"url": "https://www.reddit.com/r/bytebeat/comments/sda9eo/music_yes/",
			"date": "2022-01-26",
			"sampleRate": 40000,
			"codeOriginal": "(-t&128)+(t&200?128:2)&t>>(t>>3&t>>12)*(t&8192?120:4)+(t>>8)|[2,0,2,0,2,2,1.8,1.8,3,3,2,2,2.5,2.5,2,2,2,0,3,3.5,4,4,3,0,2,0,2,0,2,0,5,0,6,0,6,0,6,0,6,0,6,6,5.5,6,6.8,6.8,6,0,1,0,2,0,1,0,2,0,1,0,2,0,1,0,2,2][(t>>12)%64]*t>>1&128|tan(4e3/(t&16383))"
		}, {
			"name": "Vegal *A N G E R Y*",
			"url": "https://www.reddit.com/r/bytebeat/comments/sgjf3j/vegal_a_n_g_e_r_y/",
			"date": "2022-01-30",
			"sampleRate": 12288,
			"codeOriginal": "((t*[1,1.2,1.5,1.5][(t>>15)%4]>>1)%63)+((t*[1,1.2,1.5,1.5][(t>>15)%4]>>1)%64)+(32*random()*(1-(1&t>>10)))+(t*[sin(t>>4),sin(t>>1)][(t>>13)%2]&-t>>7&63)",
			"codeMinified": "(t*[1,1.2,1.5,1.5][(t>>15)%4]>>1)%63+(t*[1,1.2,1.5,1.5][(t>>15)%4]>>1)%64+32*random()*(1-(1&t>>10))+(t*[sin(t>>4),sin(t>>1)][(t>>13)%2]&-t>>7&63)"
		}, {
			"name": "funni music",
			"url": "https://www.reddit.com/r/bytebeat/comments/shafna/funni_music/",
			"date": "2022-01-31",
			"sampleRate": 44100,
			"codeOriginal": "(\"Baz§zaB-\".charCodeAt((t*[1,0,1.5,0,1.4,0,1.5,0,1.8,1.8,1.8,1.8,1.5,1.5,1.5,1.5][(t>>12)%16]>>4)%8))+([64,32,32,32][(t>>12)%4]*random())*(1-(1&t>>11))+(128*sin(t/160))/4",
			"codeMinified": "'Baz\u00a7zaB-'.charCodeAt((t*[1,0,1.5,0,1.4,0,1.5,0,1.8,1.8,1.8,1.8,1.5,1.5,1.5,1.5][(t>>12)%16]>>4)%8)+[64,32,32,32][(t>>12)%4]*random()*(1-(1&t>>11))+128*sin(t/160)/4"
		}, {
			"name": "the teem is rooning out",
			"url": "https://www.reddit.com/r/bytebeat/comments/shsssm/the_teem_is_rooning_out/",
			"remix": {
				"author": "SthephanShi",
				"name": "The time is running out!",
				"url": "https://www.reddit.com/r/bytebeat/comments/q9owio/the_time_is_running_out/"
			},
			"date": "2022-02-01",
			"mode": "Signed Bytebeat",
			"sampleRate": 11025,
			"codeOriginal": "((t*[5,7][(t>>14)%2]>>2&128)+(t*[1,2,3,4][(t>>10)%4]*[5,7][(t>>14)%2]&95)+(96*random()*(1-(1&t>>[9,11][(t>>12)%2])))+(70*sin(4e3/(t&4095))))/2-90",
			"codeMinified": "((t*[5,7][(t>>14)%2]>>2&128)+(t*[1,2,3,4][(t>>10)%4]*[5,7][(t>>14)%2]&95)+96*random()*(1-(1&t>>[9,11][(t>>12)%2]))+70*sin(4E3/(t&4095)))/2-90"
		}, {
			"name": "PsOt iT nO rDeDiT",
			"url": "https://www.reddit.com/r/bytebeat/comments/shuj5e/psot_it_no_rdedit/",
			"date": "2022-02-01",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "((t*[0,1,0,1,0,1,0,1.5][(t>>13)%8]>>1&96)+(t*[5,4.8,4.6,4.8,3,0,2.8,0,3,3,2.8,2.8,2,0,1,0][(t>>12)%16]>>2&64)+(90*sin(t/11025))+(64*sin(4e3/(t&16383))))/2-30",
			"codeMinified": "((t*[0,1,0,1,0,1,0,1.5][(t>>13)%8]>>1&96)+(t*[5,4.8,4.6,4.8,3,0,2.8,0,3,3,2.8,2.8,2,0,1,0][(t>>12)%16]>>2&64)+90*sin(t/11025)+64*sin(4E3/(t&16383)))/2-30"
		}, {
			"name": "a$$ music",
			"url": "https://www.reddit.com/r/bytebeat/comments/si40ks/a_music/",
			"date": "2022-02-01",
			"sampleRate": 32000,
			"codeOriginal": "(((t/[.36,.36,.3,.240][(t>>15)%4]>>4)%63)+((t/[.36,.36,.3,.240][(t>>15)%4]>>4)%64)+(64*sin(t*[0,1,0,1,0,1,0,1.5][(t>>13)%8]/15&6))+(64*random()*(1-(1&t>>11)))+(t*[sin(t>>4),sin(t>>2)][(t>>14)%2]&-t>>7&127))/1.5+40",
			"codeMinified": "((t/[.36,.36,.3,.24][(t>>15)%4]>>4)%63+(t/[.36,.36,.3,.24][(t>>15)%4]>>4)%64+64*sin(t*[0,1,0,1,0,1,0,1.5][(t>>13)%8]/15&6)+64*random()*(1-(1&t>>11))+(t*[sin(t>>4),sin(t>>2)][(t>>14)%2]&-t>>7&127))/1.5+40"
		}, {
			"name": "i think i just commited a crime",
			"url": "https://www.reddit.com/r/bytebeat/comments/skiv5q/i_think_i_just_commited_a_crime/",
			"date": "2022-02-04",
			"sampleRate": 32000,
			"codeOriginal": "(t*[2,1.8,1.5,1,2,3,1.5,1][(t>>14)%8]>>1&95)*4e3/(t&[2047,12287,16383,16383,511,1023,16383,16383][(t>>14)%8])"
		}, {
			"name": "pamper poopers",
			"url": "https://www.reddit.com/r/bytebeat/comments/sm4ih6/pamper_poopers/",
			"date": "2022-02-06",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "gc=(t*[1,1,1,1.5][(t>>15)%4]*[1,2][(t>>13)%2]>>2&96)+(t*[1,1,0,0,1,1,0,1,3,0,2,0,3,0,2,0,3,3,2.8,2.8,3,3,2.4,2.4,2,2,0,0,1.8,1.8][(t>>12)%32]>>1&64)+((t>>3)*(t>>7)*(1-(t>>11&1))&64)+(96*sin(4e4/(t&16383))),gc/2-40",
			"codeMinified": "((t*[1,1,1,1.5][(t>>15)%4]*[1,2][(t>>13)%2]>>2&96)+(t*[1,1,0,0,1,1,0,1,3,0,2,0,3,0,2,0,3,3,2.8,2.8,3,3,2.4,2.4,2,2,0,0,1.8,1.8][(t>>12)%32]>>1&64)+((t>>3)*(t>>7)*(1-(t>>11&1))&64)+96*sin(4E4/(t&16383)))/2-40",
			"starred": 2
		}, {
			"name": "h",
			"url": "https://www.reddit.com/r/bytebeat/comments/1092tgd/h/",
			"date": "2022-01-11",
			"mode": "Signed Bytebeat",
			"sampleRate": 32000,
			"codeOriginal": "sin(t>>13&t/(t>>12&-t>>14&15)&63)*(t>>7&127)"
		}, {
			"name": "f",
			"url": "https://www.reddit.com/r/bytebeat/comments/109znwp/f/",
			"date": "2022-01-12",
			"sampleRate": 44100,
			"codeOriginal": "t/=5.5,((4e4/(t&8191)&127)+((t*(sin(t>>1))*(t>>12&1)|t>>5)&127)+(t>>10&t*(t&32768?1.5:1)&63)+((t*(t>>(t>>10&(t>>12&t>>13))&(t>>10&t>>11))*(t&8192?3:2)>>1|t/4>>(t>>12)%4)&127))/1.5",
			"codeMinified": "t/=5.5,((4E4/(t&8191)&127)+((t*sin(t>>1)*(t>>12&1)|t>>5)&127)+(t>>10&t*(t&32768?1.5:1)&63)+((t*(t>>(t>>10&t>>12&t>>13)&t>>10&t>>11)*(t&8192?3:2)>>1|t/4>>(t>>12)%4)&127))/1.5"
		}, {
			"name": "w",
			"url": "https://www.reddit.com/r/bytebeat/comments/10a047i/w/",
			"date": "2022-01-12",
			"sampleRate": 44100,
			"codeOriginal": "t>>=2,(random()*(t>>11&1)*(-t>>4&63))+(t*(sin(t>>1))*(t>>12&1)&-t>>5&127)+((t/4*(t&8192?7:5)*(t&4096?2:1)|t/(t&16384?8:4)>>(t>>12)%4)&127)",
			"codeMinified": "t>>=2,random()*(t>>11&1)*(-t>>4&63)+(t*sin(t>>1)*(t>>12&1)&-t>>5&127)+((t/4*(t&8192?7:5)*(t&4096?2:1)|t/(t&16384?8:4)>>(t>>12)%4)&127)"
		}, {
			"name": "z",
			"url": "https://www.reddit.com/r/bytebeat/comments/10digax/z/",
			"date": "2022-01-16",
			"sampleRate": 11025,
			"codeOriginal": "((4e4/(t&16383)&127)+(random()*(t>>12&1)*(-t>>5&127))+((t&4096?t*(-t>>7&t>>11):t&8192?t*(t>>10&t&127):t*t/[1,2,3,4][t>>10&3])>>1&127))/1.5",
			"codeMinified": "((4E4/(t&16383)&127)+random()*(t>>12&1)*(-t>>5&127)+((t&4096?t*(-t>>7&t>>11):t&8192?t*(t>>10&t&127):t*t/[1,2,3,4][t>>10&3])>>1&127))/1.5"
		}, {
			"name": "l(ast)",
			"url": "https://www.reddit.com/r/bytebeat/comments/10g2lh0/last/",
			"date": "2022-01-19",
			"sampleRate": 44100,
			"codeOriginal": "((4e5/(t&32767)&127)+(t*(sin(t>>3))*(t>>15&1)&-t>>8&127)+(t*[1,1.5,1.35,1.18,1,1.18,1.35,1.8][t>>13&7]/[1.25,1.5,1.75,2][t>>17&3]>>1&95))/1.5",
			"codeMinified": "((4E5/(t&32767)&127)+(t*sin(t>>3)*(t>>15&1)&-t>>8&127)+(t*[1,1.5,1.35,1.18,1,1.18,1.35,1.8][t>>13&7]/[1.25,1.5,1.75,2][t>>17&3]>>1&95))/1.5",
			"starred": 1
		}, {
			"name": "rgrekfjhufheghzufzghufijhdsuhgueirbghfjkjkhags",
			"url": "https://www.reddit.com/r/bytebeat/comments/12dfkuc/rgrekfjhufheghzufzghufijhdsuhgueirbghfjkjkhags/",
			"date": "2023-04-06",
			"codeOriginal": "a=t*(t>>10&3)/[1,1.5,1.25,1.30][t>>14&3],(4e4/(t&4095)&127)+(t/[1,1.25,1.5,1.75][t>>15&3]&64)+(a%64)+(a%63)",
			"codeMinified": "a=t*(t>>10&3)/[1,1.5,1.25,1.3][t>>14&3],(4E4/(t&4095)&127)+(t/[1,1.25,1.5,1.75][t>>15&3]&64)+a%64+a%63"
		}, {
			"name": "I Wanna Byte Your Ass",
			"url": "https://www.reddit.com/r/bytebeat/comments/14ekxt6/i_wanna_byte_your_ass/",
			"date": "2023-06-20",
			"mode": "Signed Bytebeat",
			"sampleRate": 11025,
			"codeOriginal": "a=t*((t&1024?2:1)*(t&2048?2:.5))*(t&16384?(t&32768?.9:.8):1),(cbrt(sin(a/16))*25+sin(a/8)*10)+(random()*50*(1&t>>12)&-t>>6)",
			"codeMinified": "a=t*(t&1024?2:1)*(t&2048?2:.5)*(t&16384?t&32768?.9:.8:1),25*cbrt(sin(a/16))+10*sin(a/8)+(50*random()*(1&t>>12)&-t>>6)"
		}, {
			"name": "frodo and the magic weed",
			"url": "https://www.reddit.com/r/bytebeat/comments/14je5fs/frodo_and_the_magic_weed/",
			"date": "2023-06-26",
			"sampleRate": 48000,
			"codeOriginal": "(((4e4/(t&2**13-1))*'1001101110011010'[15&t>>13]&128)+((t*sin(t>>2)*'00100011'[7&t>>14]&128)%256*(-t&2**14-1)/2e4)+(t*[1,1.2,1.35,1.5][3&t>>16]>>2&128)+(t/16*'8867'[3&t>>15]*'1232'[3&t>>13]&128))/1.5",
			"codeMinified": "((4E4/(t&2**13-1)*'1001101110011010'[15&t>>13]&128)+(t*sin(t>>2)*'00100011'[7&t>>14]&128)%256*(-t&2**14-1)/2E4+(t*[1,1.2,1.35,1.5][3&t>>16]>>2&128)+(t/16*'8867'[3&t>>15]*'1232'[3&t>>13]&128))/1.5",
			"starred": 1
		}]
	}, {
		"author": "Decent-Manager-6169",
		"children": [{
			"name": "Weird Thingy Music",
			"url": "https://www.reddit.com/r/bytebeat/comments/rbmtv1/weird_thingy_music/",
			"date": "2021-12-08",
			"sampleRate": 32000,
			"codeOriginal": "a=t&t>>6,b=t|t>>8,c=t|t>>7,d=t|t>>9,a+b+c+d",
			"codeMinified": "(t&t>>6)+(t|t>>8)+(t|t>>7)+(t|t>>9)"
		}, {
			"name": "Weird Thingy Music 2",
			"url": "https://www.reddit.com/r/bytebeat/comments/recb8f/weird_thingy_music_2/",
			"date": "2021-12-12",
			"sampleRate": 44100,
			"codeOriginal": [
				"ONE=t*[6,8,7,9][t/1.6>>12&3]/8,",
				"IDEK=ONE/[1,1.1,1,1.1,0.9,1,0.90,0.975][t/1.6>>17&7]/8&15,",
				"IHY=t*[6.1,8.2,7.3,7.3][t/1.6>>16&3]/10.8,IHY=(IHY%128+IHY%127+IHY%96+IHY%64+IHY%192)/16,",
				"IDK=(t*Math.random()|t/1.6>>11)&15,",
				"SDK=(t*Math.random()|t/1.6>>8)&15,",
				"IDEK+IHY+IDK+SDK"
			],
			"codeMinified": "ONE=t*[6,8,7,9][t/1.6>>12&3]/8,IDEK=ONE/[1,1.1,1,1.1,.9,1,.9,.975][t/1.6>>17&7]/8&15,IHY=t*[6.1,8.2,7.3,7.3][t/1.6>>16&3]/10.8,IHY=(IHY%128+IHY%127+IHY%96+IHY%64+IHY%192)/16,IDK=(t*random()|t/1.6>>11)&15,SDK=(t*random()|t/1.6>>8)&15,IDEK+IHY+IDK+SDK"
		}, {
			"name": "Recreated Stimmer",
			"url": "https://www.reddit.com/r/bytebeat/comments/rjm4c4/recreated_stimmer/",
			"remix": {
				"name": "Stimmer",
				"url": "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
			},
			"date": "2021-12-19",
			"codeOriginal": [
				"a=(t*(t>>11&t>>13))*[6,4,2,0][t>>9&3]/2&127,b=t*[2,4,2,4,",
				"2.5,5,2.5,5,",
				"3,6,3,6,",
				"3.5,7,3.5,7][t>>11&15]&128,a+b"
			],
			"codeMinified": "a=t*(t>>11&t>>13)*[6,4,2,0][t>>9&3]/2&127,b=t*[2,4,2,4,2.5,5,2.5,5,3,6,3,6,3.5,7,3.5,7][t>>11&15]&128,a+b"
		}, {
			"name": "Stimmer (Sine Edition)",
			"url": "https://www.reddit.com/r/bytebeat/comments/rk7x5o/stimmer_sine_edition/",
			"remix": {
				"name": "Stimmer",
				"url": "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
			},
			"date": "2021-12-20",
			"codeOriginal": [
				"(a=(t*(4|7&t>>13)>>(~t>>11&1)),",
				"b=Math.sin(a/4/5.1)*42+64)+(c=(t*(t>>11&t>>13)*(~t>>9&3)&127),",
				"d=Math.sin(c/4/10.2)*((-t>>7&15)+1)*4+64)"
			],
			"codeMinified": "(a=t*(4|7&t>>13)>>(~t>>11&1),b=42*sin(a/4/5.1)+64)+(c=t*(t>>11&t>>13)*(~t>>9&3)&127,sin(c/4/10.2)*((-t>>7&15)+1)*4+64)"
		}, {
			"name": "stimmer but its all triangle",
			"url": "https://www.reddit.com/r/bytebeat/comments/rld1aj/stimmer_but_its_all_triangle/",
			"remix": {
				"name": "Stimmer",
				"url": "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
			},
			"date": "2021-12-21",
			"codeOriginal": "a=(t*(4|7&t>>13)>>(~t>>11&1)),a=Math.abs(a%256-128),b=(t*2*(t>>11&t>>13)*(~t>>9&3)),b=Math.abs(b%256-128)/1.1,a+b",
			"codeMinified": "a=t*(4|7&t>>13)>>(~t>>11&1),a=abs(a%256-128),b=2*t*(t>>11&t>>13)*(~t>>9&3),b=abs(b%256-128)/1.1,a+b"
		}, {
			"name": "Sine Music Test 1",
			"url": "https://www.reddit.com/r/bytebeat/comments/rn8xsl/sine_music_test_1/",
			"date": "2021-12-24",
			"sampleRate": 44100,
			"codeOriginal": [
				"a=t*\"87\"[t/1.1>>16&1]/2.75,a=(Math.cos(a/5.13/8)*64+64)/8,",
				"b=t*\"87\"[t/1.1>>16&1]/2.75/0.8,b=(Math.cos(b/5.13/8)*64+64)/8,",
				"c=(t*Math.random()|t/1.1>>7)&31*[1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0][t/1.1>>12&15],",
				"d=(t*Math.random()|t/1.1>>9)&31*[0,1][t/1.1>>15&1],",
				"e=t*[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0][t/1.1>>12&15]*[2.4,2.15,2.4,2.15,2.7,2.15,2.7,2.15][t/1.1>>16&7]/2.75,e=(Math.cos(e/14.8)*64+64)/4,a+b+c+d+e"
			],
			"codeMinified": "a=t*'87'[t/1.1>>16&1]/2.75,a=(64*cos(a/5.13/8)+64)/8,b=t*'87'[t/1.1>>16&1]/2.75/.8,b=(64*cos(b/5.13/8)+64)/8,c=(t*random()|t/1.1>>7)&31*[1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0][t/1.1>>12&15],d=(t*random()|t/1.1>>9)&31*[0,1][t/1.1>>15&1],e=t*[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0][t/1.1>>12&15]*[2.4,2.15,2.4,2.15,2.7,2.15,2.7,2.15][t/1.1>>16&7]/2.75,e=(64*cos(e/14.8)+64)/4,a+b+c+d+e"
		}, {
			"name": "Stimmer but with Hihat and Crash",
			"url": "https://www.reddit.com/r/bytebeat/comments/rrt7xo/stimmer_but_with_hihat_and_crash/",
			"remix": {
				"name": "Stimmer",
				"url": "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
			},
			"date": "2021-12-30",
			"codeOriginal": [
				"a=((t*(4|7&t>>13)>>(~t>>11&1)&128)+(t*(t>>11&t>>13)*(~t>>9&3)&127))/2,",
				"b=(t*Math.random()|t>>6)&63*\"01\"[t>>12&1],",
				"c=(t*Math.random()|t>>4)&32,a+b+c"
			],
			"codeMinified": "a=((t*(4|7&t>>13)>>(~t>>11&1)&128)+(t*(t>>11&t>>13)*(~t>>9&3)&127))/2,b=(t*random()|t>>6)&63*'01'[t>>12&1],c=(t*random()|t>>4)&32,a+b+c"
		}, {
			"name": "Melody Of Im Blue (with drums)",
			"url": "https://www.reddit.com/r/bytebeat/comments/rs1qqi/comment/hqridb8/?utm_source=reddit&utm_medium=web2x&context=3",
			"cover": {
				"name": "Eiffel 65 - Blue (Da Ba Dee)",
				"url": "https://youtu.be/zA52uNzx7Y4"
			},
			"date": "2021-12-30",
			"sampleRate": 44100,
			"codeOriginal": [
				"a=t*[1.35,0.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,0.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,0.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,0.85,1.125,1.35,1.27,0.75,1,1.125,1.125,1.125,1,1.125,1.125,1,1.125,1.27][t/2.4>>12&63]/4&63,",
				"b=(Math.sin(t/2|t/12)*((-t/2.4>>6&31)+1)+32)*[1,0][t/2.4>>11&1],",
				"c=(Math.sin(t/3|t/18)*((-t/2.4>>8&31)+1)+32)*[0,1][t/2.4>>13&1],a+b+c"
			],
			"codeMinified": "a=t*[1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.27,.75,1,1.125,1.125,1.125,1,1.125,1.125,1,1.125,1.27][t/2.4>>12&63]/4&63,b=(sin(t/2|t/12)*((-t/2.4>>6&31)+1)+32)*[1,0][t/2.4>>11&1],c=(sin(t/3|t/18)*((-t/2.4>>8&31)+1)+32)*[0,1][t/2.4>>13&1],a+b+c",
			"starred": 1
		}, {
			"name": "Sine Melody",
			"url": "https://www.reddit.com/r/bytebeat/comments/rwd856/sine_melody/",
			"date": "2022-01-05",
			"sampleRate": 44100,
			"codeOriginal": [
				"a=(v=t/16*[2,4,2,4,2,4,2,4,2,5,2,4,3,3,2,1][t>>13&15]*((t>>13&3)+1),w=t/16*[1,2,1,2,3,2,1,4,5,4,6,3,2,4,1,3,3][t>>13&15]*((t>>13&3)+1),m=((Math.sin(v>>1)*64+64)+(Math.cos(w>>1)*64+64))/8+((Math.sin(v)*64+64)+(Math.cos(w)*64+64))/8)^64,",
				"b=Math.sin(t/[64,16,17,16,14,16,17,16,32,16,17,16,21,24,26,32][t>>14&15]*2)*2*((-t>>10&15)+1)+16,a+b"
			],
			"codeMinified": "a=(v=t/16*[2,4,2,4,2,4,2,4,2,5,2,4,3,3,2,1][t>>13&15]*((t>>13&3)+1),w=t/16*[1,2,1,2,3,2,1,4,5,4,6,3,2,4,1,3,3][t>>13&15]*((t>>13&3)+1),m=(64*sin(v>>1)+64+(64*cos(w>>1)+64))/8+(64*sin(v)+64+(64*cos(w)+64))/8)^64,b=2*sin(t/[64,16,17,16,14,16,17,16,32,16,17,16,21,24,26,32][t>>14&15]*2)*((-t>>10&15)+1)+16,a+b",
			"starred": 1
		}, {
			"name": "literally don't know the name",
			"url": "https://www.reddit.com/r/bytebeat/comments/ryoyt5/literally_dont_know_the_name/",
			"date": "2022-01-08",
			"sampleRate": 44100,
			"codeOriginal": [
				"a=t*\"60303060303060303060303060306030\"[t/5.5>>9&31]/8&127,",
				"b=t*\"60303060303060303060303060306030\"[t/5.5>>9&31]/[0,2.65,2.5,3][t/5.5>>14&3]/2&127,a+b"
			],
			"codeMinified": "a=t*'60303060303060303060303060306030'[t/5.5>>9&31]/8&127,b=t*'60303060303060303060303060306030'[t/5.5>>9&31]/[0,2.65,2.5,3][t/5.5>>14&3]/2&127,a+b",
			"starred": 1
		}, {
			"name": "Never gonna give you up",
			"url": "https://www.reddit.com/r/bytebeat/comments/s0b0m0/i_made_the_coolest_music/",
			"cover": {
				"name": "Rick Astley - Never Gonna Give You Up",
				"url": "https://youtu.be/dQw4w9WgXcQ"
			},
			"date": "2022-01-10",
			"codeMinified": "a=64E3,80*(128<t*[[6.5,7.3,8.7,7.3,11,0,0,11,0,0,10,0,0,0,0,0,6.5,7.3,8.2,6.5,10,0,0,10,0,0,8.7,0,0,8.2,7.3,0,6.5,7.3,8.7,7.3,8.7,0,0,0,10,0,8.2,0,0,7.3,6.5,0,0,0,6.5,0,10,0,0,0,8.7,0,0,0,0,0,0,0][int(64*t/a%64)]][int(t/a)%1]%255)*(1-64*t%a/a)"
		}, {
			"name": "short simple music (based on: simple step sequencer)",
			"url": "https://www.reddit.com/r/bytebeat/comments/s7cb1v/short_simple_music_based_on_simple_step_sequencer/",
			"remix": {
				"author": "neverforgettoleave",
				"name": "simple step sequencer",
				"url": "https://www.reddit.com/r/bytebeat/comments/jmbsoh/simple_step_sequencer/"
			},
			"date": "2022-01-19",
			"sampleRate": 32000,
			"codeOriginal": "t*[2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,1.6,1.6,0,0,1.6,1.6,2,2,1.6,1.6,0,0,1.6,1.6,2,2,1.74,1.74,2.22,2.35,1.74,2.22,2.35,2.22,1.74,1.74,2.22,2.35,1.74,2.35,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22][t>>12&63]|t>>\"5655\"[t>>16&3]"
		}, {
			"name": "something music",
			"url": "https://www.reddit.com/r/bytebeat/comments/sc4v7u/something_music/",
			"date": "2022-01-25",
			"sampleRate": 44100,
			"codeOriginal": "ASDFDSA=t*[1.7,2.3,1.7,2.3,2.9,3.4,2.9,3.4][t>>13&7]*[1,0.884,1.317,1][t>>17&3]/4&63,EDCFCDE=t*[1,0.881,1.317,1][t>>17&3]/4,EDCFCDE=(EDCFCDE%75/2+EDCFCDE%75.1/2+EDCFCDE%56+EDCFCDE%44.5+EDCFCDE%37.5)/1.5,ASDFDSA+EDCFCDE",
			"codeMinified": "ASDFDSA=t*[1.7,2.3,1.7,2.3,2.9,3.4,2.9,3.4][t>>13&7]*[1,.884,1.317,1][t>>17&3]/4&63,EDCFCDE=t*[1,.881,1.317,1][t>>17&3]/4,EDCFCDE=(EDCFCDE%75/2+EDCFCDE%75.1/2+EDCFCDE%56+EDCFCDE%44.5+EDCFCDE%37.5)/1.5,ASDFDSA+EDCFCDE"
		}, {
			"name": "can someone remix my bytebeat again?",
			"url": "https://www.reddit.com/r/bytebeat/comments/seqpws/can_someone_remix_my_bytebeat_again/",
			"date": "2022-01-28",
			"sampleRate": 32000,
			"codeOriginal": [
				"t=t/6,a=t*[5.95,7,7.9,8.9][t>>13&3]/8,a=(a%32+a%31.8)+",
				"(t*[7.9,8.9,5.95,7][t>>13&3]/2&63*[1,0,1,0,1,1,1,0][t>>10&7])"
			],
			"codeMinified": "t/=6,a=t*[5.95,7,7.9,8.9][t>>13&3]/8,a%32+a%31.8+(t*[7.9,8.9,5.95,7][t>>13&3]/2&63*[1,0,1,0,1,1,1,0][t>>10&7])"
		}, {
			"name": "Short Music 001",
			"url": "https://www.reddit.com/r/bytebeat/comments/shqrgl/short_music_001/",
			"date": "2022-02-01",
			"codeOriginal": "t*\"6689\"[t>>13&3]/2*[1,1.25][t>>11&1]*[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1.5,1,1,1,1.5,1,1,1,1.5,1,1,1,1.5,1,1,1,1.5,1,1,1,1.5,1,1,1,1.5,1,1,1,1.5,1][t>>11&63]*[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1,-1,1][t>>10&63]"
		}, {
			"name": "Short Music 002",
			"url": "https://www.reddit.com/r/bytebeat/comments/sig7lr/short_music_002/",
			"date": "2022-02-02",
			"sampleRate": 44100,
			"codeOriginal": "a=t/2*[1,-1,0,1,0,1,0,-1][t*1.2>>13&7]/[1.25,1.58,1.4,1.25][t*1.2>>17&3]&127,b=(A=t/[0.625,0.52,0.47,0.42,0.35,0.42,0.47,0.52][t*1.2>>13&7],B=t/[0.79,0.52,0.465,0.42,0.35,0.42,0.465,0.52][t*1.2>>13&7],C=t/[0.7,0.55,0.52,0.465,0.42,0.465,0.52,0.55][t*1.2>>13&7],[A,B,C,A][t*1.2>>17&3]/2&127),a+b",
			"codeMinified": "a=t/2*[1,-1,0,1,0,1,0,-1][1.2*t>>13&7]/[1.25,1.58,1.4,1.25][1.2*t>>17&3]&127,b=(A=t/[.625,.52,.47,.42,.35,.42,.47,.52][1.2*t>>13&7],B=t/[.79,.52,.465,.42,.35,.42,.465,.52][1.2*t>>13&7],C=t/[.7,.55,.52,.465,.42,.465,.52,.55][1.2*t>>13&7],[A,B,C,A][1.2*t>>17&3]/2&127),a+b"
		}, {
			"name": "unnamedsong1",
			"url": "https://www.reddit.com/r/bytebeat/comments/v0orkh/unnamedsong1/",
			"date": "2022-05-30",
			"sampleRate": 44100,
			"codeOriginal": [
				"a=(A=t/2*[1.7,1.5,1.7,1.9][t/1.2>>17&3]/4&31,",
				"B=t/0.75*[1.7,1.5,1.7,1.9][t/1.2>>17&3]/8&31,A+B&255)*(t/1.2>>9&255)>>8,",
				"b=(t/3*[1.7,1.5,1.7,1.9][t/1.2>>17&3]*\"1001001000100100\"[t/1.2>>12&15]&255)*(-t/1.2>>4&255)>>10,",
				"c=(t*random()|t/1.2>>10)*'10'[t/1.2>>16&1]&63,",
				"d=t/16*[1.7,1.5,1.7,1.9][t/1.2>>17&3]*\"12\"[t/1.2>>13&1]&16,a+b+c+d"
			],
			"codeMinified": "a=(A=t/2*[1.7,1.5,1.7,1.9][t/1.2>>17&3]/4&31,B=t/.75*[1.7,1.5,1.7,1.9][t/1.2>>17&3]/8&31,A+B&255)*(t/1.2>>9&255)>>8,b=(t/3*[1.7,1.5,1.7,1.9][t/1.2>>17&3]*'1001001000100100'[t/1.2>>12&15]&255)*(-t/1.2>>4&255)>>10,c=(t*random()|t/1.2>>10)*'10'[t/1.2>>16&1]&63,d=t/16*[1.7,1.5,1.7,1.9][t/1.2>>17&3]*'12'[t/1.2>>13&1]&16,a+b+c+d",
			"starred": 1
		}, {
			"name": "Trash Remix of Cant Help Falling in Love",
			"url": "https://www.reddit.com/r/bytebeat/comments/10aqx8d/trash_remix_of_cant_help_falling_in_love_i_hate/",
			"cover": {
				"name": "Elvis Presley - Can't Help Falling In Love",
				"url": "https://youtu.be/vGJTaP6anOU"
			},
			"date": "2023-01-13",
			"sampleRate": 32000,
			"codeOriginal": "c=1.047,cs=1.107,d=1.173,ds=1.243,e=1.318,f=1.389,fs=1.475,g=1.568,gs=1.655,a=1.754,as=1.856,b=1.977,AA=t*1.003*[c,0,0,0,g,0,0,0,c,0,0,0,0,0,d,e,f,0,0,0,e,0,0,0,d,0,0,0,0,0,0,g/2,a/2,0,0,0,b/2,0,0,0,c,0,0,0,d,e,0,f,e,0,0,0,d,0,0,0,c,0,0,0,0,0,0,0][t*1.2>>13&63]%256/3,AB=(3e3/(y=t*1.2&16383)&1)*35+(x=t*12*[c,b/2,a/2,a/2,f/2,e/2,d/2,d/2,a/2,g/2,e/2,c/2,e/2,g/2,c,c][t*1.2>>15&15]/24&127)*y/4e4+((t*1.2>>8^t*1.2>>10|t*1.2>>14|x)&63)/1.1,A=t*1.005*[c/2,c,e,g,c*2,g,e,c][t*1.2>>12&7]%256/6,B=t*1.005*[e/2,e,g,b,e*2,b,g,e][t*1.2>>12&7]%256/6,C=t*1.005*[a/4,a/2,c,e,a,e,c,a/2][t*1.2>>12&7]%256/6,D=t*1.005*[f/2,f,a,c*2,f*2,c*2,a,f][t*1.2>>12&7]%256/6,E=t*1.005*[e/2,e,g,c*2,e*2,c*2,g,e][t*1.2>>12&7]%256/6,F=t*1.005*[g/4,g/2,b/2,d,g,d,b/2,g/2][t*1.2>>12&7]%256/6,G=t/2.005*[f/2,f,a,c*2,f*2,c*2,a,f][t*1.2>>12&7]%256/6,[A+AA+AB,B+AA+AB,C+AA+AB,C+AA+AB,D+AA+AB,E+AA+AB,F+AA+AB,F+AA+AB,G+AA+AB,F+AA+AB,C+AA+AB,F+AA+AB,A+AA+AB,F+AA+AB,A+AA+AB,A+AA+AB][t*1.2>>15&15]",
			"starred": 1
		}, {
			"name": "something from pm 6:06",
			"url": "https://www.reddit.com/r/bytebeat/comments/10gx77z/something_from_pm_606/",
			"date": "2023-01-20",
			"sampleRate": 32768,
			"codeOriginal": [
				"TEST=(t?0:Reverb=Array(12288).fill(0),Reverb2=(",
				"",
				"c=1.047/1.02,cs=1.107/1.02,d=1.173/1.02,ds=1.243/1.02,e=1.318/1.02,f=1.389/1.02,fs=1.475/1.01,g=1.568/1.02,gs=1.655/1.02,a=1.754/1.02,as=1.856/1.02,b=1.977/1.02,",
				"A=(((t/1.98*[c,g/2][t>>15&1]&255)*(-t>>7&255)>>8&255)*(-t>>7&255)>>8&255)*(-t>>7&255)>>10,",
				"B=t*[0,0,g,a,g,f,e,d,e,e,e,e,0,0,0,0,][t>>14&15]%256/5,",
				"B2=t*[0,0,c,d,c,as/2,a/2,g/2,a/2,a/2,a/2,a/2,0,0,0,0][t>>14&15]%256/8,",
				"C=t*[e,f,e,e,0,0,f,f,e,d,d,d,0,0,0,0][t>>13&15]%256/5,",
				"C2=t/2*[a,as,a,a,0,0,as,as,a,g,g,g,0,0,0,0][t>>13&15]%256/8,[A,A,A,A+B+B2,A+B+B2,A+B+B2,A+B+B2,A+C+C2,A,A+B+B2,A+B+B2,A+B+B2,A+B+B2,A+C+C2,A,A+B+B2,A,A,A][t>>17])+Reverb.shift(),Reverb.push(Reverb2/3),Reverb2+0*'11010010'[t>>11&7])"
			],
			"codeMinified": "TEST=(t?0:Reverb=Array(12288).fill(0),Reverb2=(c=1.047/1.02,cs=1.107/1.02,d=1.15,ds=1.243/1.02,e=1.318/1.02,f=1.389/1.02,fs=1.475/1.01,g=1.568/1.02,gs=1.655/1.02,a=1.754/1.02,as=1.856/1.02,b=1.977/1.02,A=(((t/1.98*[c,g/2][t>>15&1]&255)*(-t>>7&255)>>8&255)*(-t>>7&255)>>8&255)*(-t>>7&255)>>10,B=t*[0,0,g,a,g,f,e,d,e,e,e,e,0,0,0,0][t>>14&15]%256/5,B2=t*[0,0,c,d,c,as/2,a/2,g/2,a/2,a/2,a/2,a/2,0,0,0,0][t>>14&15]%256/8,C=t*[e,f,e,e,0,0,f,f,e,d,d,d,0,0,0,0][t>>13&15]%256/5,C2=t/2*[a,as,a,a,0,0,as,as,a,g,g,g,0,0,0,0][t>>13&15]%256/8,[A,A,A,A+B+B2,A+B+B2,A+B+B2,A+B+B2,A+C+C2,A,A+B+B2,A+B+B2,A+B+B2,A+B+B2,A+C+C2,A,A+B+B2,A,A,A][t>>17])+Reverb.shift(),Reverb.push(Reverb2/3),Reverb2+0*'11010010'[t>>11&7])"
		}, {
			"name": "something1",
			"url": "https://www.reddit.com/r/bytebeat/comments/10mbdj0/something1/",
			"date": "2023-01-27",
			"sampleRate": 32000,
			"codeOriginal": [
				"c=1.047,cs=1.107,d=1.173,ds=1.243,e=1.318,f=1.392,fs=1.476,g=1.568,gs=1.656,a=1.755,as=1.862,b=1.977,",
				"",
				"t*[as,0,as,as,cs*2,cs*2,as,0,ds*2,cs*2,as,as,cs*2,cs*2,gs,gs,as,0,as,as,fs,fs,f,f,cs*2,cs*2,f,f,c*2,c*2,f,f][t*1.4>>12&31]&128"
			],
			"codeMinified": "c=1.047,cs=1.107,d=1.173,ds=1.243,e=1.318,f=1.392,fs=1.476,g=1.568,gs=1.656,a=1.755,as=1.862,b=1.977,t*[as,0,as,as,2*cs,2*cs,as,0,2*ds,2*cs,as,as,2*cs,2*cs,gs,gs,as,0,as,as,fs,fs,f,f,2*cs,2*cs,f,f,2*c,2*c,f,f][1.4*t>>12&31]&128"
		}, {
			"name": "Weebls Stockmarket/Maxwell the Cat Theme",
			"url": "https://www.reddit.com/r/bytebeat/comments/10s4ncz/weebls_stockmarketmaxwell_the_cat_theme/",
			"cover": {
				"name": "Weebls Stuff - Stockmarket",
				"url": "https://youtu.be/Oyc1pluilgc"
			},
			"date": "2023-02-03",
			"sampleRate": 32000,
			"codeOriginal": [
				"c=1.047,cs=1.107,d=1.173,ds=1.243,e=1.318,f=1.392,fs=1.476,g=1.571,gs=1.656,a=1.755,as=1.862,b=1.978,",
				"",
				"(t*[d,0,d,0,d,0,e,0,f,f,0,0,f,f,f,0,b,0,b,0,b,0,a,0,g,g,0,0,g,g,g,g,c,c,c,c,c,c,c,c,a/2,a/2,a/2,a/2,a/2,a/2,a/2,a/2,e,e,e,e,e,e,e,e,c,c,c,c,c,c,c,c,d,0,d,0,d,0,e,0,f,f,0,0,f,f,f,0,c*2,0,b,0,b,0,a,0,g,g,0,0,g,g,g,0,a,0,a,0,a,0,a,0,a,0,a,0,a,a,b,b,a,a,a,a,g,g,g,0,f,f,f,0,e,e,e,0][t/1.68>>11&127]&63)+(t/3.98*'0010'[t/1.68>>11&3]*[d,c][t/1.68>>16&1]&31)+(t/4*'0010'[t/1.68>>11&3]*[b/2,a/2][t/1.68>>16&1]&31)+(t/9.4*[0,0,g/2,0,d/2,0,g/2][t/1.68>>11&7]*[d,c][t/1.68>>16&1]&31)+(sin(1.78**(-t/1.68/256%32+8))*32+31)+((sin(t/1.8)*64+64&255)*'1000'[t/1.68>>10&3]*'0000000100000001000000010000010100000001000000010001000000010101'[t/1.68>>12&63]*(-t/1.68>>2&255)>>9)"
			],
			"codeMinified": "c=1.047,cs=1.107,d=1.173,ds=1.243,e=1.318,f=1.392,fs=1.476,g=1.571,gs=1.656,a=1.755,as=1.862,b=1.978,(t*[d,0,d,0,d,0,e,0,f,f,0,0,f,f,f,0,b,0,b,0,b,0,a,0,g,g,0,0,g,g,g,g,c,c,c,c,c,c,c,c,a/2,a/2,a/2,a/2,a/2,a/2,a/2,a/2,e,e,e,e,e,e,e,e,c,c,c,c,c,c,c,c,d,0,d,0,d,0,e,0,f,f,0,0,f,f,f,0,2*c,0,b,0,b,0,a,0,g,g,0,0,g,g,g,0,a,0,a,0,a,0,a,0,a,0,a,0,a,a,b,b,a,a,a,a,g,g,g,0,f,f,f,0,e,e,e,0][t/1.68>>11&127]&63)+(t/3.98*'0010'[t/1.68>>11&3]*[d,c][t/1.68>>16&1]&31)+(t/4*'0010'[t/1.68>>11&3]*[b/2,a/2][t/1.68>>16&1]&31)+(t/9.4*[0,0,g/2,0,d/2,0,g/2][t/1.68>>11&7]*[d,c][t/1.68>>16&1]&31)+(32*sin(1.78**(-t/1.68/256%32+8))+31)+((64*sin(t/1.8)+64&255)*'1000'[t/1.68>>10&3]*'0000000100000001000000010000010100000001000000010001000000010101'[t/1.68>>12&63]*(-t/1.68>>2&255)>>9)",
			"starred": 2
		}, {
			"name": "cyriak's shepard tone",
			"url": "https://www.reddit.com/r/bytebeat/comments/10zcu9v/trying_to_replicate_cyriaks_shepard_tone_because/",
			"date": "2023-02-11",
			"sampleRate": 128000,
			"codeMinified": "t/=4,k=1.04*2**([12,12,12,11,9,9,5,5,16,16,14,14,12,12,14,14,15,15,15,14,12,12,8,8,19,19,17,17,15,15,17,17,18,18,18,17,15,15,11,11,22,22,23,23,20,20,18,18,14,14,14,16,18,18,14,14,25,25,23,23,21,21,23,23][t/1.2>>12&63]/12)*[1,2,4,8,16,32,64,128][t/1.2>>18&7],((t*k&128&255)*(-t/1.2>>13&255)>>10)+(t/8*k&128)/4+(t/64*k&128)/4+((t*4*k&128&255)*(-t/1.2>>13&255)>>10)+(t/256*k&128)/4+((t*32*k&128&255)*(-t/1.2>>13&255)>>10)+(t/2048*k&128)/4+(t/16384*k&128)/4"
		}, {
			"name": "Not quite accurate Calvin Harris - Summer",
			"url": "https://dollchan.net/btb/res/520.html#520",
			"cover": {
				"name": "Calvin Harris - Summer",
				"url": "https://youtu.be/ebXbLfLACGM"
			},
			"date": "2023-03-04",
			"sampleRate": 32000,
			"codeOriginal": [
				"v=-9e9,",
				"",
				"a=(t*1.045*2**([19,19,28,31,30,30,24,23,][t*1.05>>15&7]/12)%256/4+t*1.045*2**([12,12,12,16,14,14,9,11][t*1.05>>15&7]/12)%256/4&255)*(t*1.05>>6&255)>>8,",
				"",
				"b=(t*1.05*2**([v,v,2,2,7,7,9,7,11,11,v,v,v,v,v,v,v,v,2,2,7,v,7,v,4,2,v,v,v,v,v,v,v,v,v,7,7,7,7,11,9,11,v,v,v,v,v,v,v,v,4,2,9,v,7,v,7,v,v,v,v,v,v,v][t*1.05>>13&63]/12)*[1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1][t*1.05>>13&63]%256/3)-'0001010101000000000100000000000000001000000000000000000000000000'[t*1.05>>13&63]*171,",
				"",
				"[b,a+b,a+b,a+b,a+b,a+b,a+b,a+b,a][t*1.05>>16]"
			],
			"codeMinified": "v=-9E9,a=(1.045*t*2**([19,19,28,31,30,30,24,23][1.05*t>>15&7]/12)%256/4+1.045*t*2**([12,12,12,16,14,14,9,11][1.05*t>>15&7]/12)%256/4&255)*(1.05*t>>6&255)>>8,b=1.05*t*2**([v,v,2,2,7,7,9,7,11,11,v,v,v,v,v,v,v,v,2,2,7,v,7,v,4,2,v,v,v,v,v,v,v,v,v,7,7,7,7,11,9,11,v,v,v,v,v,v,v,v,4,2,9,v,7,v,7,v,v,v,v,v,v,v][1.05*t>>13&63]/12)*[1,1,1,-1,1,-1,1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1][1.05*t>>13&63]%256/3-171*'0001010101000000000100000000000000001000000000000000000000000000'[1.05*t>>13&63],[b,a+b,a+b,a+b,a+b,a+b,a+b,a+b,a][1.05*t>>16]"
		}, {
			"name": "Trash Remix of Small Mouse",
			"url": "https://dollchan.net/btb/res/520.html#574",
			"remix": {
				"author": "SthephanShi",
				"name": "Small Mouse",
				"url": "https://dollchan.net/btb/res/204.html#424"
			},
			"date": "2023-03-10",
			"sampleRate": 44100,
			"codeOriginal": "M=(T=t/1.2,a=[0,3,5,7,0,3,-4,-2],a1=[3,7,9,11,3,7,0,2],a2=[7,10,12,14,7,10,3,5],B=a=>(.88*t*2**(a[i=7&T>>15]/12)&-T>>6)%256/5,S=(s,p)=>.7*(.88*p*t*2**([a,a1,a2,a1][3&T>>s][i]/12)&64),B(a)+B(a1)+B(a2)+[S(14,1)+S(15,2),2*(S(9,1)+S(14,2))*(1-T%8192/9E3)][1&T>>13])/2,R=(a=(t*random()&-T>>'7767767767767767'[T>>13&15]&31))+((a&255)*(T>>6&255)>>9),K=sin(1.7**(-T/512%16+8))*'10010010100101011'[T>>13&15]*32+32,H=((((sin(t>>1)*t&255)*(-T>>6&255)>>9&255)*(-T>>6&255)>>9&255)*(-T>>6&255)>>9&255)*(-T>>6&255)>>7,G=log(T%16384)*t/3e3&64,Q=t*.222*2**([0,3,5,7,0,3,-4,-2][T>>15&7]/12)*(T>>13&1)&64,W=t*.0555*2**([0,3,5,7,0,3,-4,-2][T>>15&7]/12)*((-T>>13&1)+1)&63,[M+W,M+R+Q+W,((M&255)*(T>>6&255)>>7)+R+H+K+Q+W+G/1.2,((M&255)*(T>>6&255)>>7)+R+H+K+Q+W+G/1.2][T>>19&3]/1.6",
			"codeMinified": "M=(T=t/1.2,a=[0,3,5,7,0,3,-4,-2],a1=[3,7,9,11,3,7,0,2],a2=[7,10,12,14,7,10,3,5],B=a=>(.88*t*2**(a[i=7&T>>15]/12)&-T>>6)%256/5,S=(s,p)=>.7*(.88*p*t*2**([a,a1,a2,a1][3&T>>s][i]/12)&64),B(a)+B(a1)+B(a2)+[S(14,1)+S(15,2),2*(S(9,1)+S(14,2))*(1-T%8192/9E3)][1&T>>13])/2,R=(a=t*random()&-T>>'7767767767767767'[T>>13&15]&31)+((a&255)*(T>>6&255)>>9),K=sin(1.7**(-T/512%16+8))*'10010010100101011'[T>>13&15]*32+32,H=((((sin(t>>1)*t&255)*(-T>>6&255)>>9&255)*(-T>>6&255)>>9&255)*(-T>>6&255)>>9&255)*(-T>>6&255)>>7,G=log(T%16384)*t/3E3&64,Q=.222*t*2**([0,3,5,7,0,3,-4,-2][T>>15&7]/12)*(T>>13&1)&64,W=.0555*t*2**([0,3,5,7,0,3,-4,-2][T>>15&7]/12)*((-T>>13&1)+1)&63,[M+W,M+R+Q+W,((M&255)*(T>>6&255)>>7)+R+H+K+Q+W+G/1.2,((M&255)*(T>>6&255)>>7)+R+H+K+Q+W+G/1.2][T>>19&3]/1.6",
			"starred": 1
		}, {
			"name": "Synthwave",
			"url": "https://dollchan.net/btb/res/520.html#577",
			"date": "2023-03-10",
			"sampleRate": 32000,
			"codeOriginal": "a=t*1.01*2**([0,-2,0,3,5,7,10,12,-5,-2,0,3,5,7,10,12,-7,-2,-4,0,3,5,10,5,0,-2,-4,0,3,5,10,5,-9,-7,-5,-2,-4,0,3,8,-5,-7,-5,-2,-4,0,3,8,-5,-2,7,5,-5,-2,7,3,-5,-2,5,2,0,3,2,-2][t/1.66>>12&63]/12),a=(a%256+a%254)/4,b=t*.503*2**([0,-2,-4,-5][t/1.66>>16&3]/12),b=(b%256+b%255)/5,a+b",
			"starred": 1
		}, {
			"name": "An iconic german thingy",
			"url": "https://dollchan.net/btb/res/520.html#592",
			"cover": {
				"name": "Deutsches Marschlied - Erika",
				"url": "https://youtu.be/vjVCOwSPl0U"
			},
			"date": "2023-03-11",
			"sampleRate": 48000,
			"codeOriginal": "v=-9e9,t*.7*2**([0,0,0,1,3,v,3,v,3,v,8,v,8,v,12,v,12,12,12,10,8,v,v,v,v,v,v,v,7,v,8,v,10,v,v,v,v,v,v,v,12,12,12,10,8,v][t*.7>>13&63]/12)"
		}, {
			"name": "please someone remix this",
			"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/please_someone_remix_this/",
			"cover": {
				"name": "VD - Erebus - omnibi phase 2",
				"url": "https://youtu.be/WAJR72cOpCg?t=1416"
			},
			"date": "2023-03-18",
			"sampleRate": 32000,
			"codeOriginal": "(t*2.09*2**([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,][t*1.2>>12&127]/12)&255)*(-t*1.2>>4&255)>>8",
			"starred": 1
		}, {
			"name": "Square Melody thingy",
			"url": "https://www.reddit.com/r/bytebeat/comments/11x8lox/square_melody_thingy/",
			"date": "2023-03-21",
			"sampleRate": 65536,
			"codeOriginal": "v=-9e9,((t*.511*2**([-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,v,6,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,1,-1,1,-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,v,6,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,6,4,2][t>>13&127]/12)&64)+(t*.512*2**([v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,][t>>13&63]/12)&32)+(t*.256*2**([v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,][t>>13&63]/12)&32)*(t>>20&1)+(t*.1285*2**([-3,2][t>>18&1]/12)&64)+([t,t,t,t,t,t,t,-t,t,-t,t,t,t,t,t,t,t,t,t,-t,t,-t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t][t>>13&63]*.512*2**([1,v,1,v,1,v,v,4,4,4,4,v,9,v,9,v,9,v,v,13,13,13,13,v,11,v,9,11,v,13,11,9,6,4,v,6,v,9,6,9,14,9,14,18,v,14,18,14,9,6,v,9,v,4,6,9,14,9,14,18,21,18,v,16][t>>13&63]/12)&64)*(t>>20&1))/1.000001",
			"codeMinified": "v=-9E9,((.511*t*2**([-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,v,6,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,1,-1,1,-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,-3,-3,v,4,4,v,9,v,-3,-3,v,1,1,v,4,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,v,6,v,2,2,v,6,6,v,9,v,-3,-3,v,2,2,6,4,2][t>>13&127]/12)&64)+(.512*t*2**((a=[v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,-3,4,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9,v,2,6,9])[t>>13&63]/12)&32)+(.256*t*2**(a[t>>13&63]/12)&32)*(t>>20&1)+(.1285*t*2**([-3,2][t>>18&1]/12)&64)+(.512*[t,t,t,t,t,t,t,-t,t,-t,t,t,t,t,t,t,t,t,t,-t,t,-t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t][t>>13&63]*2**([1,v,1,v,1,v,v,4,4,4,4,v,9,v,9,v,9,v,v,13,13,13,13,v,11,v,9,11,v,13,11,9,6,4,v,6,v,9,6,9,14,9,14,18,v,14,18,14,9,6,v,9,v,4,6,9,14,9,14,18,21,18,v,16][t>>13&63]/12)&64)*(t>>20&1))/1.000001",
			"starred": 1
		}, {
			"name": "atari thingy",
			"url": "https://www.reddit.com/r/bytebeat/comments/121ie23/dont_know_what_to_name_with_atari_thingy/",
			"date": "2023-03-25",
			"sampleRate": 32000,
			"codeOriginal": "T=t*1.02,c=1.047,cs=1.107,d=1.174,ds=1.243,e=1.318,f=1.389,fs=1.476,g=1.568,gs=1.655,a=1.754,as=1.857,b=1.977,A=t*'23423423'[T>>12&7],B=t*[2,3.185,4,2,3.185,4,2,3.185][T>>12&7],'099900900090909999099090099000000'[[A,A,A,A,A,A,A,B][T>>15&7]*[b,b,b,d*2,g,g,fs,as][T>>15&7]>>6&31]*64",
			"starred": 2
		}, {
			"name": "what the hell did i made",
			"url": "https://dollchan.net/btb/res/520.html#702",
			"date": "2023-03-27",
			"sampleRate": 70997,
			"codeOriginal": "T=.2361,(t*T*2**([4,4,7,7,9,9,11,11,12,12,11,11,9,9,7,7,9,9,14,14,2,2,14,14,9,9,14,14,2,2,14,14,16,16,11,11,7,7,16,16,11,11,7,7,16,16,11,11,4,4,11,11,12,12,4,4,11,11,12,14,14,14,12,12,7,7,11,11,7,7,11,11,7,7,11,11,14,14,11,11,14,14,9,9,6,6,9,9,14,14,9,9,6,6,14,14,16,16,11,11,19,19,16,16,11,11,16,16,19,19,11,11,12,12,7,7,12,12,16,16,19,19,16,19,19,19,24,24][t>>13&127]/12)&63)+(abs(cbrt(sin(t*PI/128*T*2**([7,6,7,12.1][t>>17&3]/12))))*32)+(abs(cbrt(sin(t*PI/128*T*2**([11,9,4,0][t>>17&3]/12))))*32)+(abs(cbrt(sin(t*PI/128*T*2**([18.95,18,16,16][t>>17&3]/12))))*32)",
			"codeMinified": "T=.2361,a=k=>32*abs(cbrt(sin(t*PI/128*T*2**(k[t>>17&3]/12)))),(t*T*2**([4,4,7,7,9,9,11,11,12,12,11,11,9,9,7,7,9,9,14,14,2,2,14,14,9,9,14,14,2,2,14,14,16,16,11,11,7,7,16,16,11,11,7,7,16,16,11,11,4,4,11,11,12,12,4,4,11,11,12,14,14,14,12,12,7,7,11,11,7,7,11,11,7,7,11,11,14,14,11,11,14,14,9,9,6,6,9,9,14,14,9,9,6,6,14,14,16,16,11,11,19,19,16,16,11,11,16,16,19,19,11,11,12,12,7,7,12,12,16,16,19,19,16,19,19,19,24,24][t>>13&127]/12)&63)+a([7,6,7,12.1])+a([11,9,4,0])+a([18.95,18,16,16])",
			"starred": 1
		}, {
			"name": "what the hell did i just made again?",
			"url": "https://dollchan.net/btb/res/520.html#712",
			"date": "2023-03-29",
			"sampleRate": 70997,
			"codeMinified": "T=.236,a=k=>([t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,-t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,-t,t,t,t,t,t,t,t,t,-t,t,t][t>>14&63]*k*T*2**([11,11,7,7,2,2,7,7,7,7,9,9,11,11,7,7,9,9,6,6,2,2,6,6,9,9,11,11,9,9,6,6,11,11,7,7,4,4,7,7,9,9,11,11,9,9,7,7,12,12,7,7,4,4,7,7,12,12,12,12,11,11,7,9,11,11,7,7,2,2,7,7,7,7,9,9,11,11,7,7,9,9,6,6,2,2,6,6,9,9,11,11,9,9,6,6,7,7,4,4,-1,-1,4,4,4,4,-1,-1,4,4,-1,-1,7,7,4,4,0,0,4,4,7,7,7,7,6,6,7,9][t>>13&127]/12)&63),b=k=>(abs(cbrt(sin(t*PI/128*T*2**(k[t>>17&3]/12))))*32),a(2)+a(.5)+b([7,6,7,12.1])+b([11,9,4,0])+b([18.95,18,16,16])",
			"starred": 1
		}, {
			"name": "why do i keep making this",
			"url": "https://dollchan.net/btb/res/520.html#737",
			"cover": {
				"name": "Forever Bound - Stereo Madness",
				"url": "https://youtu.be/JhKyKEDxo8Q"
			},
			"date": "2023-03-31",
			"sampleRate": 70997,
			"codeOriginal": "T=.236,(t/2*T*2**([7,2,4,0][t>>17&3]/12)*((t>>14&1)+2)&63)+(abs(cbrt(sin(t*PI/128*T*2**([7,6,7,12.1][t>>17&3]/12))))*32)+(abs(cbrt(sin(t*PI/128*T*2**([11,9,4,0][t>>17&3]/12))))*32)+(abs(cbrt(sin(t*PI/128*T*2**([18.95,18,16,16][t>>17&3]/12))))*32)",
			"codeMinified": "T=.236,a=k=>32*abs(cbrt(sin(t*PI/128*T*2**(k[t>>17&3]/12)))),(t/2*T*2**([7,2,4,0][t>>17&3]/12)*((t>>14&1)+2)&63)+a([7,6,7,12.1])+a([11,9,4,0])+a([18.95,18,16,16])"
		}, {
			"name": "the final marathon: hortas instrumental",
			"url": "https://dollchan.net/btb/res/520.html#992",
			"cover": {
				"name": "VD - The final marathon - hortas",
				"url": "https://youtu.be/hUTl_b1Ua1w?t=1295"
			},
			"date": "2023-05-03",
			"sampleRate": 43008,
			"codeOriginal": "v=-9e9,z=[-t,t,0,-t,t,0,0,0][t>>13&7],b=1.56,((t*b*2*2**([v,4,4,4,7,7,v,v,v,7,7,7,0,0,4,4,v,4,4,4,7,7,v,v,v,7,7,7,0,0,4,2][t>>13&31]/12)&64)+(t*b*2**([0,-3,-5,2][t>>16&3]/12)*'0001'[t>>14&3]&64)+(z*b*2**([5,4,0,-1][t>>16&3]/12)&64)+(z*b*2**([2,0,-3,-5][t>>16&3]/12)&64)+(z*b*2**([-3,-5,-8,-10][t>>16&3]/12)&64))/1.001"
		}, {
			"name": "Ataritin",
			"url": "https://dollchan.net/btb/res/520.html#992",
			"remix": {
				"name": "atari thingy",
				"url": "https://www.reddit.com/r/bytebeat/comments/121ie23/dont_know_what_to_name_with_atari_thingy/"
			},
			"date": "2023-05-03",
			"sampleRate": 32000,
			"codeOriginal": [
				"v=-9e9,n=1.052,A=[-1,6,11,-1,6,11,-1,6][t>>12&7],",
				"B=[2,9,14,2,9,14,2,9][t>>12&7],",
				"C=[-5,2,7,-5,2,7,-5,2][t>>12&7],",
				"D=[-6,1,6,-6,1,6,-6,1][t>>12&7],",
				"E=[-2,6,10,-2,6,10,-2,6][t>>12&7],",
				"",
				"AA=((t>>8^t>>10|t>>14|t*n/2*2**([-1,-1,-1,2,-5,-5,-6,-2][t>>15&7]/12))&63),",
				"",
				"a='099900900090909999099090099000000'[t*n*2**([A,A,A,B,C,C,D,E][t>>15&7]/12)>>4&31]*3,",
				"",
				"b=t*n/1.0005*2**([-1,-1,v,1,1,v,2,2,2,2,6,v,2,v,1,v,-1,-1,v,-3,-3,v,-1,-1,-1,-1,-6,-3,-1,-1,-3,-3,-5,-5,v,1,1,v,2,2,2,2,6,v,2,v,1,-1,-2,-2,v,-6,-6,v,-2,-2,-2,-2,4,4,2,2,1,1,-1,-1,v,1,1,v,2,2,2,2,6,9,11,11,9,9,6,6,v,4,4,v,6,6,6,4,2,4,6,6,4,4,2,2,7,2,2,-1,7,2,v,2,4,6,7,4,v,6,10,10,v,6,6,v,10,10,13,13,10,10,6,4,2,1][t>>12&127]/12)&64,a+b/1.2+AA*1.5+(sin(1.65**(-t/512%32+8))*32)+32"
			],
			"codeMinified": "v=-9E9,n=1.052,a=t>>12&7,A=[-1,6,11,-1,6,11,-1,6][t>>12&7],B=[2,9,14,2,9,14,2,9][a],C=[-5,2,7,-5,2,7,-5,2][a],D=[-6,1,6,-6,1,6,-6,1][a],E=[-2,6,10,-2,6,10,-2,6][a],AA=(t>>8^t>>10|t>>14|t*n/2*2**([-1,-1,-1,2,-5,-5,-6,-2][t>>15&7]/12))&63,a=3*'099900900090909999099090099000000'[t*n*2**([A,A,A,B,C,C,D,E][t>>15&7]/12)>>4&31],b=t*n/1.0005*2**([-1,-1,v,1,1,v,2,2,2,2,6,v,2,v,1,v,-1,-1,v,-3,-3,v,-1,-1,-1,-1,-6,-3,-1,-1,-3,-3,-5,-5,v,1,1,v,2,2,2,2,6,v,2,v,1,-1,-2,-2,v,-6,-6,v,-2,-2,-2,-2,4,4,2,2,1,1,-1,-1,v,1,1,v,2,2,2,2,6,9,11,11,9,9,6,6,v,4,4,v,6,6,6,4,2,4,6,6,4,4,2,2,7,2,2,-1,7,2,v,2,4,6,7,4,v,6,10,10,v,6,6,v,10,10,13,13,10,10,6,4,2,1][t>>12&127]/12)&64,a+b/1.2+1.5*AA+32*sin(1.65**(-t/512%32+8))+32",
			"starred": 2
		}, {
			"name": "Erebus zenith instrumental",
			"url": "https://dollchan.net/btb/res/520.html#992",
			"cover": {
				"name": "VD - Erebus - zenith",
				"url": "https://youtu.be/WAJR72cOpCg?t=1085"
			},
			"date": "2023-05-03",
			"sampleRate": 79189,
			"codeOriginal": "n=4096,m=2048,(t*.2115*2**([1,2,-1,1][t>>17&3]/12)&64?-V:V=32/(1+t/32768%4))+(t*.423*2**([1,1,2,2,8,8,8,9,8,8,8,8,8,8,6,6,9,9,9,9,11,11,11,11,9,9,8,8,8,8,8,8,6,6,6,6,8,8,8,8,6,6,4,4,2,2,2,2,1,1,1,1,1,1,-4,-4,-4,-4,-3,-3,-3,-3,-1,-1,1,1,2,2,8,8,11,11,13,13,13,13,13,13,6,6,9,9,9,9,11,11,11,11,9,9,8,8,8,8,8,8,6,6,6,6,13,13,13,13,16,16,13,13,11,9,8,8,6,6,6,6,4,4,2,2,2,2,-1,-1,-1,-1,1,1][t>>13&127]/12)&64?-W:W=32/(1+t/[n,n,n,m,n,n,n,n,n,n,m,n,n,n,m,n,n,n,m,n,n,n,m,n,n,n,n,m,n,n,n,n,n,n,n,m,n,n,n,n,n,n,m,n,n,n,m,n,n,n,n,n,n,n,m,n,n,n,n,m,n,n,n,n][t>>14&63]%4)+128)*1.05",
			"starred": 2
		}, {
			"name": "atari thingy v2 (with kicks and hihat)",
			"url": "https://dollchan.net/btb/res/520.html#1052",
			"date": "2023-05-18",
			"sampleRate": 48000,
			"codeOriginal": "n=.7,'099900900090909999099090099000000'[t*n*2**([-6,1,6,-6,1,6,-6,1,-6,1,6,-6,1,6,-6,1,-6,1,6,-6,1,6,-6,1,-3,4,9,-3,4,9,13,9,2,9,14,2,9,14,2,9,2,9,14,2,9,14,2,9,1,8,13,1,8,13,1,8,1,5,11,1,5,11,1,5,-3,6,9,-3,6,9,-3,6,-3,6,9,-3,6,9,-3,6,1,6,9,1,6,9,1,6,4,9,13,4,9,13,16,13,2,9,14,2,9,14,2,9,2,9,14,2,9,14,2,9,1,8,13,1,8,13,1,8,5,13,17,5,13,17,5,13][t>>12&127]/12)>>4&31]*6+sin(1.7**(-t/512%32+8))*50+50+(50e2/(t&8191)&63)*1.5",
			"codeMinified": "n=.7,6*'099900900090909999099090099000000'[t*n*2**([-6,1,6,-6,1,6,-6,1,-6,1,6,-6,1,6,-6,1,-6,1,6,-6,1,6,-6,1,-3,4,9,-3,4,9,13,9,2,9,14,2,9,14,2,9,2,9,14,2,9,14,2,9,1,8,13,1,8,13,1,8,1,5,11,1,5,11,1,5,-3,6,9,-3,6,9,-3,6,-3,6,9,-3,6,9,-3,6,1,6,9,1,6,9,1,6,4,9,13,4,9,13,16,13,2,9,14,2,9,14,2,9,2,9,14,2,9,14,2,9,1,8,13,1,8,13,1,8,5,13,17,5,13,17,5,13][t>>12&127]/12)>>4&31]+50*sin(1.7**(-t/512%32+8))+50+1.5*(5E3/(t&8191)&63)",
			"starred": 1
		}, {
			"name": "A Blocked Forever V2 Preview",
			"url": "https://dollchan.net/btb/res/520.html#1261",
			"cover": {
				"name": "FNF Vs Dave and Bambi - Exospheric Corruption - Blocked Forever V2",
				"url": "https://youtu.be/Ke28YqHZ-uo"
			},
			"date": "2023-06-08",
			"sampleRate": 73728,
			"codeOriginal": "S='4111111111111111'[t>>11&15],N='41111111'[t>>11&7],p=[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33],Q='10'[t>>11&1],n=t*1.82,PWM1=((n/2*2**([6,6,9,8,6,6,4,4,1,1,-1,-1,1,1,4,4,1,1,2,1,-1,-1,1,-1,-3,-3,-1,-3,-4,-4,-8,-8,-3,-3,-1,-1,1,1,-1,-1,2,2,1,1,8,8,9,8,6,6,4,4,1,1,-1,-1,5,5,1,1,8,8,5,5][t>>14&63]/12)&127)*[S,N,S,S,S,S,S,S,S,N,S,N,S,N,S,S,S,S,S,S,S,S,S,N,S,S,S,S,S,S,S,S,S,N,S,N,S,N,S,S,S,S,S,S,S,S,S,N,S,S,S,S,S,S,S,S][t>>15&31]+(p[t>>11&63])&128),PWM2=((n/2*2**([a=[18,13,9,13,9,6,1,6,1,-3,-6,-3][t>>13&15],a,a,d=[-6,-3,1,6,9,13,18,13][t>>12&7],b=[20,14,11,14,11,8,2,8,2,-1,-4,-1,11,8,2,8][t>>13&15],b,b,b,c=[9,5,1,5,5,1,-3,1,2,5,8,2,5,8,4,2][t>>13&15],c,c,c,a,a,a,d][t>>15&15]/12)&127)*[Q,Q,Q,1,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,1][t>>15&15]+(p[t>>11&63])&128),[PWM1,PWM1,PWM2,PWM1,PWM2,PWM1][(t>>19)%6]",
			"codeMinified": "S='4111111111111111'[t>>11&15],N='41111111'[t>>11&7],p=[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33],Q='10'[t>>11&1],n=1.82*t,PWM1=(n/2*2**([6,6,9,8,6,6,4,4,1,1,-1,-1,1,1,4,4,1,1,2,1,-1,-1,1,-1,-3,-3,-1,-3,-4,-4,-8,-8,-3,-3,-1,-1,1,1,-1,-1,2,2,1,1,8,8,9,8,6,6,4,4,1,1,-1,-1,5,5,1,1,8,8,5,5][t>>14&63]/12)&127)*[S,N,S,S,S,S,S,S,S,N,S,N,S,N,S,S,S,S,S,S,S,S,S,N,S,S,S,S,S,S,S,S,S,N,S,N,S,N,S,S,S,S,S,S,S,S,S,N,S,S,S,S,S,S,S,S][t>>15&31]+p[t>>11&63]&128,PWM2=(n/2*2**([a=[18,13,9,13,9,6,1,6,1,-3,-6,-3][t>>13&15],a,a,d=[-6,-3,1,6,9,13,18,13][t>>12&7],b=[20,14,11,14,11,8,2,8,2,-1,-4,-1,11,8,2,8][t>>13&15],b,b,b,c=[9,5,1,5,5,1,-3,1,2,5,8,2,5,8,4,2][t>>13&15],c,c,c,a,a,a,d][t>>15&15]/12)&127)*[Q,Q,Q,1,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,Q,1][t>>15&15]+p[t>>11&63]&128,[PWM1,PWM1,PWM2,PWM1,PWM2,PWM1][(t>>19)%6]"
		}, {
			"name": "why am i still making this?",
			"url": "https://dollchan.net/btb/res/520.html#1325",
			"cover": {
				"name": "DJ Haning & Rizky Ayuba - You Know I'll Go Get Tik Tok Remix",
				"url": "https://youtu.be/opGCwdMneTk"
			},
			"date": "2023-06-18",
			"sampleRate": 70997,
			"codeOriginal": "T=.236,([t,t,-t,t,-t,t,t,t,t,t,-t,t,-t,t,-t,t,-t,t,-t,t,-t,t,-t,t,t,t,-t,t,t,t,-t,t][t>>14&31]*T*2**([11,14,14,14,14,14,12,11,9,14,14,14,14,14,14,16,16,11,11,11,11,11,11,14,16,12,12,12,16,12,12,14][t>>14&31]/12)&63)+(abs(cbrt(sin(t*PI/128*T*2**([7,6,7,12.1][t>>17&3]/12))))*32)+(abs(cbrt(sin(t*PI/128*T*2**([11,9,4,0][t>>17&3]/12))))*32)+(abs(cbrt(sin(t*PI/128*T*2**([18.95,18,16,16][t>>17&3]/12))))*32)",
			"codeMinified": "T=.236,a=k=>32*abs(cbrt(sin(t*PI/128*T*2**(k[t>>17&3]/12)))),([t,t,-t,t,-t,t,t,t,t,t,-t,t,-t,t,-t,t,-t,t,-t,t,-t,t,-t,t,t,t,-t,t,t,t,-t,t][t>>14&31]*T*2**([11,14,14,14,14,14,12,11,9,14,14,14,14,14,14,16,16,11,11,11,11,11,11,14,16,12,12,12,16,12,12,14][t>>14&31]/12)&63)+a([7,6,7,12.1])+a([11,9,4,0])+a([18.95,18,16,16])",
			"starred": 1
		}, {
			"name": "We're Finally Landing Preview",
			"url": "https://www.reddit.com/r/bytebeat/comments/155gm22/were_finally_landing_preview/",
			"cover": {
				"name": "Home - We're Finally Landing",
				"url": "https://youtu.be/zR6fECxF44I"
			},
			"date": "2023-07-21",
			"sampleRate": 98304,
			"codeOriginal": [
				"v=-9e9,",
				"Tn=t*1.34,",
				"Fd=-t>>11&255,",
				"Fd2=-t>>[11,11,11,10][t>>19&3]&255,",
				"Chord=(a=k=>(Tn/32*2**(k[t>>19&3]/12)&31),((a([2,4,7,7])/1.6+a([14,16,19,19])+a([16,19,23,22])&255)*Fd>>8)+(((Tn/16*2**([18,23,26,[26,28][t>>18&1]][t>>19&3]/12)&63)&255)*Fd2>>8)),",
				"M1=Tn/4/((-t>>15&1)+1)*2**([[14,9,6,4],[16,11,7,4],[19,14,11,7],v][t>>19&3][t>>13&3]/12)&63,",
				"M2=Tn/4*2**([7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5][t>>13&31]/12)&63,",
				"M3=Tn/4*2**([-2,-5,16,14,10,7,4,2][t>>13&7]/12)&63,",
				"Mel=[M1,M1,M1,[M2,M3][t>>18&1]][t>>19&3],Chord+Mel*.9"
			],
			"codeMinified": "v=-9E9,Tn=1.34*t,Fd=-t>>11&255,Fd2=-t>>[11,11,11,10][t>>19&3]&255,Chord=(a=k=>Tn/32*2**(k[t>>19&3]/12)&31,((a([2,4,7,7])/1.6+a([14,16,19,19])+a([16,19,23,22])&255)*Fd>>8)+((Tn/16*2**([18,23,26,[26,28][t>>18&1]][t>>19&3]/12)&63)*Fd2>>8)),M1=Tn/4/((-t>>15&1)+1)*2**([[14,9,6,4],[16,11,7,4],[19,14,11,7],v][t>>19&3][t>>13&3]/12)&63,M2=Tn/4*2**([7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5,14,10,7,2,-2,-5][t>>13&31]/12)&63,M3=Tn/4*2**([-2,-5,16,14,10,7,4,2][t>>13&7]/12)&63,Mel=[M1,M1,M1,[M2,M3][t>>18&1]][t>>19&3],Chord+.9*Mel",
			"starred": 1
		}]
	}, {
		"author": "Diicorp95",
		"children": [{
			"name": "The rings",
			"url": "https://www.reddit.com/r/bytebeat/comments/ruk9am/8000_hz_the_rings/",
			"date": "2022-01-02",
			"codeOriginal": "t/5*0.4^t-t+2**6*cos(2>>t)-(12*tan(t))",
			"codeMinified": "t/5*.4^t-t+2**6*cos(2>>t)-12*tan(t)"
		}, {
			"name": "o$c1ll4tör (remix)",
			"url": "https://www.reddit.com/r/bytebeat/comments/rwto8m/comment/hregwfu/?utm_source=reddit&utm_medium=web2x&context=3",
			"date": "2022-01-05",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "127*sin(t/20.5)&63*cos(t/27.25)"
		}]
	}, {
		"author": "_elevate__",
		"children": [{
			"name": "the 42 melody but array and with a different waveform",
			"url": "https://www.reddit.com/r/bytebeat/comments/rz5f3l/the_42_melody_but_array_and_with_a_different/",
			"date": "2022-01-08",
			"sampleRate": 44100,
			"codeOriginal": "(sin((t/112.5)*[0,1,0,1,4,5,4,5,0,1,0,1,4,5,4,5,16,17,16,17,20,21,20,21,16,17,16,17,20,21,20,21][t/11025&31])*127)+(sin(t/5000)*100)",
			"codeMinified": "127*sin(t/112.5*[0,1,0,1,4,5,4,5,0,1,0,1,4,5,4,5,16,17,16,17,20,21,20,21,16,17,16,17,20,21,20,21][t/11025&31])+100*sin(t/5E3)"
		}, {
			"name": "squsinsaw music",
			"url": "https://www.reddit.com/r/bytebeat/comments/s7aiep/squsinsaw_music/",
			"date": "2022-01-19",
			"codeOriginal": "squ=((t)*[1,0,2,0,1,0,2,2,1,0,2,0,1,0,2,0,1.5,0,3,3,1.5,0,3,0,1.35,0,2.7,2.7,1.35,0,2.70,][t>>10&31])&64,sine=((sin(((t/40.743648)*([8,9,9.5,12][t>>10&3])*[1,1,1.5,1.35][t>>13&3]))*32)+32),saw=(((t/4)*[0,0,0,0,0,0,0,0,8,9.5,12,16,0,0,0,0][t>>8&15])&31),kick=((1E5/(t&4095)/5)&63),snr=((((t*t*t>>10)&63)|((t>>6)&63))*\"0101\"[t>>12&3]),(sine%((-t>>4)&63))+(squ*[0,1,1,1,1,1,1,1][t>>16&7])+(kick*[0,0,1,1,1,1,1,1][t>>16&7])+(snr*[0,0,1,1,1,1,1,1][t>>16&7])+(saw*[0,0,1,1,1,1,1,1][t>>16&7])",
			"codeMinified": "squ=t*[1,0,2,0,1,0,2,2,1,0,2,0,1,0,2,0,1.5,0,3,3,1.5,0,3,0,1.35,0,2.7,2.7,1.35,0,2.7][t>>10&31]&64,sine=32*sin(t/40.743648*[8,9,9.5,12][t>>10&3]*[1,1,1.5,1.35][t>>13&3])+32,saw=t/4*[0,0,0,0,0,0,0,0,8,9.5,12,16,0,0,0,0][t>>8&15]&31,kick=1E5/(t&4095)/5&63,snr=(t*t*t>>10&63|t>>6&63)*'0101'[t>>12&3],sine%(-t>>4&63)+squ*[0,1,1,1,1,1,1,1][t>>16&7]+kick*[0,0,1,1,1,1,1,1][t>>16&7]+snr*[0,0,1,1,1,1,1,1][t>>16&7]+saw*[0,0,1,1,1,1,1,1][t>>16&7]",
			"starred": 2
		}]
	}, {
		"author": "Pestis",
		"name": "Cracklebass [141 BPM bytebeat edit]",
		"url": "https://demozoo.org/music/305285/",
		"date": "2023-02-12",
		"sampleRate": 44100,
		"codeOriginal": "(o=>{for(x=i=5,m=(n,i)=>'!9$1!9,1!:#<!!!)! !+)**\" 8;%0111@$DD ]XT&'.charCodeAt(8*n+i>>1)-32>>3*(1&i)&7;n=m(m(i,o)-1,e=o*2**m(9,i++)%8),i<9;)x+=n&&((t*2**((10*n-n*n+m(9,o%6>4&&8*o&3))/12+i-12)&8)-4)*(1-e%1)})(t/6e5),6*x+52*sin((e%1)**.4*151)*n+98+random()",
		"starred": 1
	}, {
		"author": "TomCat",
		"name": "Feel the Bit!",
		"url": "https://demozoo.org/music/305283/",
		"date": "2022-02-12",
		"sampleRate": 44100,
		"codeOriginal": "t*=.4,T=t>>8,W=f=>abs((f&255)*t/16%256-128),C=i=>W('2X^K@m~^\"@K6\"@K6'.charCodeAt(i+x%4+(T/4&8))+26)*S(16),S=s=>(-s*t&65535)/2**17,k=t&8191,(k>>T&32)+(4e4/k&32)+(81>>(T/4&7)&1&&4e4*sin(t*t)&31)+W(W(b=19+[-4,4,6,1,-4,9,6,1][x=T>>8&7])/64+4*b)*S(1)+C(0)+C(4)",
		"starred": 1
	}, {
		"author": "Algorias",
		"name": "Phantasie für drei Blockflöten, Op. 256",
		"url": "https://demozoo.org/music/305279/",
		"date": "2022-02-12",
		"sampleRate": 44100,
		"codeOriginal": "i=t/8**5-2,T=x=>abs(x%2-1),R=(A,B)=>[C=A+B,S=i=>\"0x\"+\"66DAD0035655ACD\"[(A+6*(i>58-C))*(i|B)%15],d=+S(i+1),V=T(i*4),r=d=>T(t/50/C*1.06**d)*30*C,(r(d)*V+r(d+.1)*(1-V))*(i/9>6-3*A+B)*min(max(i%1,d==S(i),.7-T(i*8)),8-i%1*8+(d==S(i+2)))][5],R(1,0)+R(2,0)+R(2,1)"
	}, {
		"author": "Arch0474",
		"name": "Demporal Tisturbance",
		"url": "https://dollchan.net/btb/res/3.html#32",
		"date": "2022-02-13",
		"sampleRate": 44100,
		"codeOriginal": "((0.5*t&t>>8|t&t>>12&t&t>>8)|t*[.3,.335,0.5,0.5][(t>>16)%4])%128+t*0.5%[32,64,128,255][(t>>16)%4]*[0.4,0.3,0.2,0.1][(t>>16)%4]",
		"codeMinified": "(.5*t&t>>8|t&t>>12&t&t>>8|t*[.3,.335,.5,.5][(t>>16)%4])%128+.5*t%[32,64,128,255][(t>>16)%4]*[.4,.3,.2,.1][(t>>16)%4]"
	}, {
		"author": "PortablePorcelain",
		"children": [{
			"name": "creepy droning static thing",
			"url": "https://www.reddit.com/r/bytebeat/comments/tvnthr/creepy_droning_static_thing/",
			"date": "2022-04-04",
			"mode": "Signed Bytebeat",
			"sampleRate": 22050,
			"codeOriginal": "sin(t*Math.PI/255+sin(t*Math.PI/128)*(t/(65536+(16384*Math.random()))))*64",
			"codeMinified": "64*sin(t*PI/255+sin(t*PI/128)*(t/(65536+16384*random())))"
		}, {
			"name": "super creepy tornado sound effect with EAS included",
			"url": "https://www.reddit.com/r/bytebeat/comments/u56wj4/eas_standard_tone_getting_hit_by_a_tornado_noise/",
			"date": "2022-04-16",
			"sampleRate": 44100,
			"codeOriginal": [
				"SAMP=44100,",
				"hz=t/SAMP*256,",
				"freq1=853,",
				"freq2=960,",
				"d=sin(hz*Math.PI/128*freq1)*32+sin(hz*Math.PI/128*freq2)*32+64,",
				"t<2?(a=0,b=0,c=0):(a=0.99*a+(.003+t/131072000)*random(),b<0?(b=.5*random(),c=random()):b-=1/440,abs(256*a*(5*sin(t/5E4)+10)%256-128)+255*(t/300*(10*c+200)&1)*b**(random()/5+10-(t/131072)))+d"
			],
			"codeMinified": "SAMP=44100,hz=t/SAMP*256,freq1=853,freq2=960,d=32*sin(hz*PI/128*freq1)+32*sin(hz*PI/128*freq2)+64,2>t?(a=0,b=0,c=0):(a=.99*a+(.003+t/131072E3)*random(),0>b?(b=.5*random(),c=random()):b-=1/440,abs(256*a*(5*sin(t/5E4)+10)%256-128)+255*(t/300*(10*c+200)&1)*b**(random()/5+10-t/131072))+d",
			"starred": 1
		}, {
			"name": "1fccccf1",
			"url": "https://dollchan.net/btb/res/55.html#55",
			"date": "2022-04-30",
			"mode": "Signed Bytebeat",
			"codeOriginal": "a=((t*(Math.pow(2, (t>>16&3)-1)))*((0x1fccccf1>>(t>>10)*(t>>11))%8))|t>>3,b=a%128-32,c=sin(5000/(t&4095))*32,b+c",
			"codeMinified": "((0x1fccccf1>>(t>>10)*(t>>11))%8*2**((t>>16&3)-1)*t|t>>3)%128+32*sin(5E3/(t&4095))-32"
		}, {
			"name": "Doom E1M1 theme recreation",
			"url": "https://dollchan.net/btb/res/55.html#55",
			"cover": {
				"name": "Doom OST - E1M1 - At Doom's Gate",
				"url": "https://youtu.be/BSsfjHCFosw"
			},
			"date": "2022-04-30",
			"codeOriginal": "q='5 5 JJ5 5 FF5 5 AA5 5 ==5 5 ==??5 5 JJ5 5 FF5 5 AA5 5 ========  5 5 JJ5 5 FF5 5 AA5 5 ==5 5 ==??5 5 JJ5 5 FF5 5 AA5 5 ========  < < XX< < RR< < MM< < II< < IILL< < XX< < RR< < MM< < IIIIIIII  5 5 JJ5 5 FF5 5 AA5 5 ==5 5 ==??5 5 JJ5 5 FF5 5 AA5 5 ========  ',s=((t/540)%q.length),b=(q.charCodeAt(s)-32)*(t/8),tanb=tan(b*Math.PI/512)*64-128,sinb=sin(b*Math.PI/64)*64-128,(tanb|sinb)-sinb",
			"codeMinified": "q='5 5 JJ5 5 FF5 5 AA5 5 ==5 5 ==??5 5 JJ5 5 FF5 5 AA5 5 ========  5 5 JJ5 5 FF5 5 AA5 5 ==5 5 ==??5 5 JJ5 5 FF5 5 AA5 5 ========  < < XX< < RR< < MM< < II< < IILL< < XX< < RR< < MM< < IIIIIIII  5 5 JJ5 5 FF5 5 AA5 5 ==5 5 ==??5 5 JJ5 5 FF5 5 AA5 5 ========  ',s=t/540%q.length,b=(q.charCodeAt(s)-32)*(t/8),tanb=64*tan(b*PI/512)-128,sinb=64*sin(b*PI/64)-128,(tanb|sinb)-sinb",
			"starred": 2
		}, {
			"name": "Gabriel Miceli's \"Techno\" but the melodies are on opposite ears",
			"url": "https://www.reddit.com/r/bytebeat/comments/ukua3q/gabriel_micelis_techno_but_the_melodies_are_on/",
			"remix": {
				"author": "Gabriel Miceli",
				"name": "Techno",
				"url": "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
			},
			"date": "2022-05-08",
			"sampleRate": 11025,
			"stereo": true,
			"codeOriginal": "[(((t/10|0)^(t/10|0)-1280)%11*t),(((t/640|0)^(t/640|0)-2)%13*t)]",
			"codeMinified": "[((t/10|0)^(t/10|0)-1280)%11*t,((t/640|0)^(t/640|0)-2)%13*t]"
		}, {
			"name": "Stimmer but the melodies are on opposite ears",
			"url": "https://www.reddit.com/r/bytebeat/comments/ukucgm/stimmer_but_the_melodies_are_on_opposite_ears/",
			"remix": {
				"name": "Stimmer",
				"url": "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
			},
			"date": "2022-05-08",
			"stereo": true,
			"codeOriginal": "[(t/2*(4|7&t>>13)>>(~t>>11&1)&128),(t*2*(t>>11&t>>13)*(~t>>9&3)&127)]",
			"codeMinified": "[t/2*(4|7&t>>13)>>(~t>>11&1)&128,2*t*(t>>11&t>>13)*(~t>>9&3)&127]"
		}, {
			"name": "TIRO remix",
			"url": "https://dollchan.net/btb/res/55.html#80",
			"remix": {
				"author": "NewFall2020",
				"name": "TIRO Remixed#5.1",
				"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/comment/hmu25u3/?utm_source=reddit&utm_medium=web2x&context=3"
			},
			"date": "2022-06-20",
			"sampleRate": 44100,
			"codeOriginal": "t/=4,z=(x)=>log(sin(x*PI/64)/1+4),y=(x)=>z(x*(1+(1/(x/x))))-sin(x*PI/(64-(1/(x/t))))/2,c=(x)=>abs(y(x/2))**y(x)/z(x),q=c(t*2/(2**(-t>>16&3))*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8)))*(t&4096?16:36),b=z(t&4096?(3-(3&t>>9)+(3&t>>8))*t*(t&16384?7:5)>>3&t*(t&16384?7:5):0)*128,l=3e4/(t%(t&8192?3072:4096))&72,k=b+q+l,u=(random()*64|t>>\"6554554455545434655455445554543265545544555454346554554455543210\"[t>>12&63])%64,g=k+u,j=5e4/(t%(t&8192?7168:6144))&64,n=(g+j-164),s=z(t/4*(t&16384?7:5)|t>>13)*64,min((s+n)/1.5,255)",
			"codeMinified": "t/=4,z=x=>log(sin(x*PI/64)/1+4),y=x=>z(x*(1+1/(x/x)))-sin(x*PI/(64-1/(x/t)))/2,c=x=>abs(y(x/2))**y(x)/z(x),q=c(2*t/2**(-t>>16&3)*(t&16384?7:5)*(3-(3&t>>9)+(3&t>>8)))*(t&4096?16:36),b=128*z(t&4096?(3-(3&t>>9)+(3&t>>8))*t*(t&16384?7:5)>>3&t*(t&16384?7:5):0),l=3E4/(t%(t&8192?3072:4096))&72,k=b+q+l,u=(64*random()|t>>'6554554455545434655455445554543265545544555454346554554455543210'[t>>12&63])%64,g=k+u,j=5E4/(t%(t&8192?7168:6144))&64,n=g+j-164,s=64*z(t/4*(t&16384?7:5)|t>>13),min((s+n)/1.5,255)"
		}, {
			"name": "remix of crude sinewave dubstep",
			"url": "https://dollchan.net/btb/res/55.html#82",
			"remix": {
				"author": "Gabriel Miceli",
				"name": "Crude Sinewave Dubstep",
				"url": "https://www.youtube.com/watch?v=V4GfkFbDojc"
			},
			"date": "2022-06-28",
			"mode": "Signed Bytebeat",
			"sampleRate": 169000,
			"codeOriginal": "c=(v)=>sin(v*PI),b=t/4,q=c(b*(b&b>>12)/11025/2)/2,n=((6e5/(b&16383))/256)%1,k=((6e5/(b+16383&32767))/256)%1.5,o=((6e4/(b&4095))/256)%0.5,g=min((4*b/[8,8,8,9,10,10,9,9][b>>15&7]&255)*(-b>>5&255)>>8,128),w=min((q+n-k-o)*96+g,127)",
			"codeMinified": "c=v=>sin(v*PI),b=t/4,q=c(b*(b&b>>12)/11025/2)/2,n=6E5/(b&16383)/256%1,k=6E5/(b+16383&32767)/256%1.5,o=6E4/(b&4095)/256%.5,g=min((4*b/[8,8,8,9,10,10,9,9][b>>15&7]&255)*(-b>>5&255)>>8,128),w=min(96*(q+n-k-o)+g,127)",
			"starred": 1
		}, {
			"name": "Second remix of Wiretapped",
			"url": "https://dollchan.net/btb/res/55.html#83",
			"remix": {
				"author": "wiretapped",
				"url": "https://www.noisebridge.net/wiki/Bytebeat"
			},
			"date": "2022-06-30",
			"sampleRate": 75000,
			"codeOriginal": "t/=8,v=(1+(t>>14)%4),b=t*(1+(t>>10)*(43+2*(t>>15-(t>>16)%8)%8)%8)*v|t/3*v>>t*v|t*3*v+t*2*v,b%=256,q=(x,y,z)=>x/(t%y)&z,min(b+q(4e5,4096,64)+q(8e4,1024,53)-q(11e4,t&4096?3072:4096,40)+q(3e5,t&4096?2560:3072,40),400)/1.8+16",
			"codeMinified": "t/=8,v=1+(t>>14)%4,b=t*(1+(t>>10)*(43+2*(t>>15-(t>>16)%8)%8)%8)*v|t/3*v>>t*v|3*t*v+2*t*v,b%=256,q=(x,y,z)=>x/(t%y)&z,min(b+q(4E5,4096,64)+q(8E4,1024,53)-q(11E4,t&4096?3072:4096,40)+q(3E5,t&4096?2560:3072,40),400)/1.8+16"
		}, {
			"name": "bassline remix",
			"url": "https://dollchan.net/btb/res/55.html#83",
			"remix": {
				"author": "tejeez",
				"name": "Bassline #countercomplex",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			},
			"date": "2022-06-30",
			"sampleRate": 72000,
			"codeOriginal": "t/=8,q=(2+(5&t>>14)),v=(~t>>2)*((127&t*(7&t>>10))<(245&t*q))|t>>t*q/8|t>>2,v%=256,v=v/2-1,f=(x,y,z)=>x/(t%y)&z,v+f(2e4,4096,64)+f(4e3,1024,64)-f(4e3,t&4096?t&8192?5120:3072:4096,64)&-t>>((q+3)/2)",
			"codeMinified": "t/=8,q=2+(5&t>>14),v=(~t>>2)*((127&t*(7&t>>10))<(245&t*q))|t>>t*q/8|t>>2,v%=256,v=v/2-1,f=(x,y,z)=>x/(t%y)&z,v+f(2E4,4096,64)+f(4E3,1024,64)-f(4E3,t&4096?t&8192?5120:3072:4096,64)&-t>>(q+3)/2"
		}, {
			"name": "\"squsinsaw\" remix",
			"url": "https://dollchan.net/btb/res/55.html#86",
			"remix": {
				"author": "_elevate__",
				"name": "squsinsaw music",
				"url": "https://www.reddit.com/r/bytebeat/comments/s7aiep/squsinsaw_music/"
			},
			"date": "2022-07-04",
			"sampleRate": 32000,
			"codeOriginal": "t/=4,sn=(f=(x)=>sin(x*PI/128),v=t*[8,9,9.5,12][t>>10&3],n=\"6698\"[t>>13&3]/6,v=f(v*n)*127-128,g=(s,y=4)=>(s&255)*(-t>>y&63)>>8,v=g(v)*1.5),sq=t/2*n*[2,4,2,4][t>>11&3]&32,c='10'[t>>10&1],x='11'[t>>10&1],sq*=[c,c,c,c,c,x,c,c,c,x,c,c,c,x,c,c][t>>11&15],sw=t/2*n*[8,9.5,12,16][t>>8&3]&63,sw*='01'[t>>11&1],kc=2e4/(t&4095)&63,sr=random()*64*'0101'[t>>12&3],sr=g(sr,6)*5,sw=g(sw,5)*4,sn+sq*'01111111'[t>>16&7]+kc*'00111111'[t>>16&7]+sr*'00111111'[t>>16&7]+sw*'00111111'[t>>16&7]",
			"codeMinified": "t/=4,o=(t>>15)%16,g=(s,y=4)=>(s&255)*(-t>>y&63)>>8,sn=(f=x=>sin(x*PI/128),v=t*[8,9,9.5,12][t>>10&3],n='6698'[t>>13&3]/6,v=1.5*g(127*f(v*n)-128)),sq=t/2*n*(1+(t>>11&1))&32,sq*=[c=~t>>10&1,c,c,c,c,1,c,c,c,1,c,c,c,1,c,c][t>>11&15],sw=t*n*[4,4.75,6,8][t>>8&3]&63,4*g(sw*='01'[t>>11&1],5),kc=2E4/(t&4095)&63,sr=5*g(64*random()*'0101'[t>>12&3],6),sw=4*g(sw,5),sn+sq*(o>1)+(kc+sr+sw)*(o>3)",
			"starred": 2
		}, {
			"name": "some detective theme",
			"url": "https://dollchan.net/btb/res/55.html#109",
			"date": "2022-07-22",
			"sampleRate": 48000,
			"codeOriginal": "l=(s,o,r,p,u)=>(c=s.charCodeAt((t/r)%s.length),2**((c-o)/p)/(2**u)),p=(w,x,y,z)=>w*(x**(y/z)),q=x=>l('0$$0$$0$1%0$$0$$0$+.',x,2**13,12,3),(t/4*q(12))%63+(t*q(17)*'0111'[t/(10*2**14)&3])%63+(t*q(8)*'0011'[t/(10*2**14)&3])%63",
			"codeMinified": "l=(s,o,r,p,u)=>(c=s.charCodeAt(t/r%s.length),2**((c-o)/p)/2**u),p=(w,x,y,z)=>w*x**(y/z),q=x=>l('0$$0$$0$1%0$$0$$0$+.',x,2**13,12,3),t/4*q(12)%63+t*q(17)*'0111'[t/(10*2**14)&3]%63+t*q(8)*'0011'[t/(10*2**14)&3]%63",
			"starred": 1
		}, {
			"name": "binary cycle",
			"url": "https://dollchan.net/btb/res/55.html#119",
			"date": "2022-07-27",
			"sampleRate": 32000,
			"codeOriginal": "128*(f=t>>10,f.toString(2)[t>>3&15])",
			"codeMinified": "128*(t>>10).toString(2)[t>>3&15]"
		}, {
			"name": "octal cycle",
			"url": "https://dollchan.net/btb/res/55.html#119",
			"date": "2022-07-27",
			"sampleRate": 32000,
			"codeOriginal": "16*(f=t>>3,f.toString(8)[t>>3&15])",
			"codeMinified": "16*(t>>3).toString(8)[t>>3&15]"
		}, {
			"name": "We are temporally deficient!",
			"url": "https://dollchan.net/btb/res/55.html#136",
			"date": "2022-08-09",
			"sampleRate": 36000,
			"codeOriginal": "t*=.1875,x=(x,y)=>max(x&255,t/y&255),y=(x(t*(t/3&4096?7.5:6)*2**(t/3>>14&3),8)&x(t*(t/3&4096?5:4.5)*2**(t/3>>14&3),12))+(512/(t/3&1023))+(1024/(t&1023)),((y&255)^(x(t*(t/3&4096?7.5:6)*2&t*(t/3&4096?5:4.5)*2,8)&255))&192",
			"codeMinified": "t*=.1875,x=(x,y)=>max(x&255,t/y&255),y=(x(t*(t/3&4096?7.5:6)*2**(t/3>>14&3),8)&x(t*(t/3&4096?5:4.5)*2**(t/3>>14&3),12))+512/(t/3&1023)+1024/(t&1023),(y&255^x(t*(t/3&4096?7.5:6)*2&t*(t/3&4096?5:4.5)*2,8)&255)&192"
		}, {
			"name": "simple step sequencer remix",
			"url": "https://dollchan.net/btb/res/55.html#155",
			"remix": {
				"author": "neverforgettoleave",
				"name": "simple step sequencer",
				"url": "https://www.reddit.com/r/bytebeat/comments/jmbsoh/simple_step_sequencer/"
			},
			"date": "2022-08-20",
			"sampleRate": 44100,
			"codeOriginal": "f=a=>a*(2**(1/12))**[0,,0,,12,,0,,0,,17,,0,,0,,14,,0,,0,,10,,0,,0,,12,,0,,0,,0,,15,12,7,3,0,,0,,14,12,7,3,0,,0,,12,7,3,0,-12,,0,,15,12,7,3,-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,-16,,-16,,12,,-16,,-16,,12,,-16,,-17,,14,,-16,,-16,,10,,-16,,-16,,12,,-16,,-16,,-4,,15,12,7,3,-16,,-16,,14,12,7,3,-4,,-4,,12,7,3,-16,-12,,-16,,15,12,7,3,-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,][int(t/2048)%256]-1|0,(f(t*1.5)%191+f(t*1.5/2)%192+(5e4/(t&16383))+((random()*(-t&8191)/64)|15)+(8e4/((t+16383)&32767)))/2",
			"codeMinified": "f=a=>a*(2**(1/12))**[0,,0,,12,,0,,0,,17,,0,,0,,14,,0,,0,,10,,0,,0,,12,,0,,0,,0,,15,12,7,3,0,,0,,14,12,7,3,0,,0,,12,7,3,0,-12,,0,,15,12,7,3,-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,-4,,-4,,12,,-4,,-4,,15,,-4,,-4,,14,,-4,,-4,,10,,-4,,-4,,12,,-4,,-16,,-16,,12,,-16,,-16,,12,,-16,,-17,,14,,-16,,-16,,10,,-16,,-16,,12,,-16,,-16,,-4,,15,12,7,3,-16,,-16,,14,12,7,3,-4,,-4,,12,7,3,-16,-12,,-16,,15,12,7,3,-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,-19,,-19,,12,,-19,,-19,,15,,-19,,-19,,14,,-19,,-19,,10,,-19,,-19,,12,,-19,,][int(t/2048)%256]-1|0,(f(1.5*t)%191+f(1.5*t/2)%192+5E4/(t&16383)+(random()*(-t&8191)/64|15)+8E4/(t+16383&32767))/2"
		}, {
			"name": "sparta remix chord progression",
			"url": "https://www.reddit.com/r/bytebeat/comments/11kp8bu/128char_sparta_remix_chord_progression/",
			"cover": {
				"name": "Keaton Monger - This is Sparta! Last techno remix",
				"url": "https://youtu.be/rvYZRskNV3w"
			},
			"date": "2023-03-07",
			"sampleRate": 32000,
			"codeOriginal": "seq=[[2,5,9],[3,7,10],[0,3,7],[3,7,10]][t>>15&3],f=(a,b,c)=>(p=(a,b)=>(a*2**((b+1)/12)),p(t,a)%64+p(t,b)%64+p(t,c)%64),f(...seq)",
			"codeMinified": "[a,b,c]=['259','37A','037','37A'][t>>15&3],p=x=>t*2**(++x/12)%64,p(a)+p(b)+p('0x'+c)"
		}, {
			"name": "heavyAF breakbeat + atari thingy + other Greaserpirate stuff",
			"url": "https://dollchan.net/btb/res/55.html#786",
			"remix": [{
				"author": "Greaserpirate",
				"name": "Neurofunk, heavyAF breakbeat edition",
				"url": "https://www.reddit.com/r/bytebeat/comments/zr9def/neurofunk_heavyaf_breakbeat_edition_stereo/"
			}, {
				"author": "Decent-Manager-6169",
				"name": "atari thingy",
				"url": "https://www.reddit.com/r/bytebeat/comments/121ie23/dont_know_what_to_name_with_atari_thingy/"
			}],
			"date": "2023-04-08",
			"sampleRate": 30000,
			"codeOriginal": "t%=2**21,t/=2,t?0:y=Array(16).fill(0),ɐ=0,ø=(x,sp=.1,q=256)=>(x%=q,x|=0,mi=y[ɐ]=min(y[ɐ]+sp,x,q),mx=y[ɐ+1]=max(y[ɐ+1]-sp,x,mi+9),ɐ+=2,(x-mi)*255/(mx-mi)),n=k=>isNaN(k)?0:k,p=(k,l,j=2,q=(r=k=>k),z=t>>11,y=Infinity)=>(l=k*(n(l=l.charCodeAt(z%l.length))<=32?0:2**((l-64)/12)),q(l)%y)*j,ɞ=(x,y=1,z=255)=>min(max(x,y),z),k=(q,r=1,s=1,v=64)=>(q+(sin(t*s*PI/1536)*r*32)),ɞ((ø(ø(sin(sin(k(p(t,`@GL@GL@G`.repeat(3)+`CJOCJOCJ<CH<CH<C<CH<CH<C;BG;BG;B?GK?GK?G`,1),1/8,3)*PI/64)*4%3)*(2+(t>131072)*((w=t*p(1,`@@@C<<;?`,1,k=>k,t>>14))>>7&1)),(sin(w*PI/64+t/65536)*2|0)/10))/3+((t>>7^t>>9|t>>13|w)&63)+((d=t%524288)<507904?(t>262144)*p(t/2,`@@@C<<;?`,t/4096%2,k=>sin(k*PI/16)*64,t>>14)+(t>393216)*p(t*.75,`@@@><<;>`,t/4096%2,k=>cbrt(sin(k*PI/16+t/1638.4))*64,t>>14):0)/3)+32+(t>262144)*(d<507904)*cbrt(sin(cbrt(t&8191)*10))*32+(t>524288)*n((s=sin(t>>5),h=1&t,2E5/(t&2**11/[1,2,h,2,1,h,s,h,2,2,1,h,1,2,3,s+3,1,2,h,2,s,s-h,h,s+2,1,2,3,2,t&42,4,w&t>>12,w*w&73][(t>>11)%32]-1))%256)/4)",
			"codeMinified": "t%=2**21,(t/=2)?0:y=Array(16).fill(0),A=0,O=(x,s=.1,q=256)=>(x%=q,x|=0,mi=y[A]=min(y[A]+s,x,q),mx=y[A+1]=max(y[A+1]-s,x,mi+9),A+=2,255*(x-mi)/(mx-mi)),n=k=>isNaN(k)?0:k,p=(k,l,j=2,q=(r=k=>k),z=t>>11,y=Infinity)=>(l=k*(n(l=l.charCodeAt(z%l.length))<=32?0:2**((l-64)/12)),q(l)%y)*j,S=(x,y=1,z=255)=>min(max(x,y),z),k=(q,r=1,s=1)=>q+(sin(t*s*PI/1536)*r*32),S(O(O(sin(4*sin(k(p(t,'@GL@GL@G'.repeat(3)+'CJOCJOCJ<CH<CH<C<CH<CH<C;BG;BG;B?GK?GK?G',1),1/8,3)*PI/64)%3)*(2+(t>131072)*((w=t*p(1,'@@@C<<;?',1,k=>k,t>>14))>>7&1)),(2*sin(w*PI/64+t/65536)|0)/10))/3+((t>>7^t>>9|t>>13|w)&63)+((d=t%524288)<507904?(t>262144)*p(t/2,'@@@C<<;?',t/4096%2,k=>sin(k*PI/16)*64,t>>14)+(t>393216)*p(.75*t,'@@@><<;>',t/4096%2,k=>cbrt(sin(k*PI/16+t/1638.4))*64,t>>14):0)/3+32+(t>262144)*(d<507904)*cbrt(sin(10*cbrt(t&8191)))*32+(t>524288)*n((s=sin(t>>5),h=1&t,2E5/(t&2**11/[1,2,h,2,1,h,s,h,2,2,1,h,1,2,3,s+3,1,2,h,2,s,s-h,h,s+2,1,2,3,2,t&42,4,w&t>>12,w*w&73][(t>>11)%32]-1))%256)/4)",
			"starred": 1
		}, {
			"name": "TB303-esque",
			"url": "https://www.reddit.com/r/bytebeat/comments/13mhzom/three_codes_in_one_post/",
			"date": "2023-05-20",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "f=(x,w=3,y=4,z=2,q=128,a=k=>sin(k*PI/4))=>(i=x/q,k=abs(i-(i|0))**z*y,t||(l=0),l=a(k*w)*(i%1-1)),f(w=t/4*[1,2,1,2,1,3,2.7,2.4,1,2,1,2,1,3,2.7,3,3.2,2.4,1.2,2.4,3.6,1.8,3.2,1.8,3,1.5,3,1.5,3,1.5,3,1.5][(t>>13)%32]*1.4,(.7/PI*t/1024%32-16)*2,3,1,256)*64",
			"starred": 1
		}, {
			"name": "Frog melody",
			"url": "https://www.reddit.com/r/bytebeat/comments/13me24e/comment/jkv8nll/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "baenhohoho",
				"name": "goose melody but atari square",
				"url": "https://www.reddit.com/r/bytebeat/comments/13me24e/goose_melody_but_atari_square/"
			},
			"date": "2023-05-20",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "f=(x,w=3,y=4,z=2,q=128,a=k=>sin(k*PI/4))=>(i=x/q,k=abs(i-(i|0))**z*y,t||(l=0),l=a(k*w)*(i%1-1)),f(w=t*[4,0,4,0,4,3.8,4,4.8,5,0,4.8,0,4,3.9,3.8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0,4,0,4,0,4,3.8,4,5,7,0,7,0,7,7,8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0][(t>>12)%64]/2.4,sin(t/163840)+1,64,1,256)*64"
		}, {
			"name": "bitbeat concerto",
			"url": "https://www.reddit.com/r/bytebeat/comments/14nq9up/bitbeat_concerto/",
			"date": "2023-07-21",
			"sampleRate": 48000,
			"codeOriginal": "t*=.184,(1&((t*2**(([5,5,7,7,0,0,5,0][t/3>>13&7]-5)/12-2))&((t>>9)%24+1)?!(1&t*2**(('aaeeecfffe`a^^ccce^^^c`^\\\\\\\\cccehhhcefhhhejhccchec'.charCodeAt((t>>12)%48)-97)/12-5))?1:('000000001000101011001100'[(t>>9)%24]*random()*2):0))*64",
			"codeMinified" : "t*=.184,64*(1&(t*2**(([5,5,7,7,0,0,5,0][t/3>>13&7]-5)/12-2)&(t>>9)%24+1?1&t*2**(('aaeeecfffe`a^^ccce^^^c`^\\\\\\\\cccehhhcefhhhejhccchec'.charCodeAt((t>>12)%48)-97)/12-5)?'000000001000101011001100'[(t>>9)%24]*random()*2:1:0))"
		}, {
			"name": "filter thing",
			"url": "https://www.reddit.com/r/bytebeat/comments/15bsx3s/filter_thing/",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "Synthwave",
				"url": "https://dollchan.net/btb/res/520.html#577"
			},
			"date": "2023-07-28",
			"sampleRate": 48000,
			"codeOriginal": "a=(t*=2/3)*1.01*2**([0,-2,0,3,5,7,10,12,-5,-2,0,3,5,7,10,12,-7,-2,-4,0,3,5,10,5,0,-2,-4,0,3,5,10,5,-9,-7,-5,-2,-4,0,3,8,-5,-7,-5,-2,-4,0,3,8,-5,-2,7,5,-5,-2,7,3,-5,-2,5,2,0,3,2,-2][t/1.66>>12&63]/12),a=(a%256+a%254)/4,b=t*.503*2**([0,-2,-4,-5][t/1.66>>16&3]/12),b=(b%256+b%255)/5,d=a+b,t>0?0:e=f=0,g=k=>min(max(f+=(e+=d-f)-(e*=k/(k+1)),0),255),g(abs(sin(t/1.66*PI/65536))*64)",
			"starred": 1
		}, {
			"name": "filtered arpeg",
			"url": "https://www.reddit.com/r/bytebeat/comments/15ciw98/filtered_arpeg/",
			"remix": {
				"author": "lhphr",
				"name": "Unnecessary-ARPEG.hc",
				"url": "https://dollchan.net/btb/res/44.html#50"
			},
			"date": "2023-07-29",
			"sampleRate": 48000,
			"codeOriginal": "t*=441/480,d=((15+1*'1370'[t>>17&3])/8*'12346543'[t>>12&7]*(t/4)%192+160)%256/2+(sqrt(5E3*(t%65536&(2**[9,12,12,14,,,,,13,12,11,14][(t>>11&15|t^t/32%8*t)&11])-1))&128),h=(i=0)+1,c=(d,k)=>(this[h]??=this[i]??=0,g=(k,h,i)=>min(max(this[i]+=(this[h]+=d/4+64-this[i])-(this[h]*=1/(1+k/24000)),0),255),h++,i++,g(k,--h,--i)),c(d,abs(t/2**19%1-.5)*1000)",
			"codeMinified" : "t*=441/480,d=((15+1*'1370'[t>>17&3])/8*'12346543'[t>>12&7]*(t/4)%192+160)%256/2+(sqrt(5E3*(t%65536&2**[9,12,12,14,,,,,13,12,11,14][(t>>11&15|t^t/32%8*t)&11]-1))&128),h=(i=0)+1,c=(d,k)=>(this[h]??=this[i]??=0,g=(k,h,i)=>min(max(this[i]+=(this[h]+=d/4+64-this[i])-(this[h]*=1/(1+k/24E3)),0),255),h++,i++,g(k,--h,--i)),c(d,1E3*abs(t/2**19%1-.5))"
		}, {
			"name": "fimmer (stimmer with resonance filter applied)",
			"url": "https://www.reddit.com/r/bytebeat/comments/16gs1yk/fimmer_stimmer_with_resonance_filter_applied/",
			"remix": {
				"name": "Stimmer",
				"url": "https://forum.arduino.cc/t/one-line-algorithmic-music/73409"
			},
			"date": "2023-09-12",
			"sampleRate": 32000,
			"codeOriginal": "t/=4,h=1+(i=0),lp=(d,k)=>(this[h]??=0,this[i]??=0,g=(k,h,i)=>min(max(this[i]+=(this[h]+=d/4+64-this[i])-(this[h]/=(1+k/48000)),0),255),h+=2,i+=2,g(k,h-2,i-2)),lp(t*(4|t>>13&3)>>(~t>>11&1)&128,max(1e6/(t%2048),1000))+lp(t*(t>>11&t>>13)*(~t>>9&3)&127,max(1e6/(t%2048),1000)*2)",
			"codeMinified" : "t/=4,h=1+(i=0),lp=(d,k)=>(this[h]??=0,this[i]??=0,g=(k,h,i)=>min(max(this[i]+=(this[h]+=d/4+64-this[i])-(this[h]/=1+k/48E3),0),255),h+=2,i+=2,g(k,h-2,i-2)),lp(t*(4|t>>13&3)>>(~t>>11&1)&128,max(1E6/(t%2048),1E3))+lp(t*(t>>11&t>>13)*(~t>>9&3)&127,2*max(1E6/(t%2048),1E3))"
		}, {
			"name": "you spin me byte round",
			"url": "https://www.reddit.com/r/bytebeat/comments/16nwz8h/you_spin_me_byte_round/",
			"cover": {
				"name": "Dead Or Alive - You Spin Me Round",
				"url": "https://youtu.be/PGNiXGX2nLU"
			},
			"date": "2023-09-21",
			"mode": "Signed Bytebeat",
			"sampleRate": 48000,
			"codeOriginal": [
				"t?0:Z=Y=Array(16384).fill(b=c=d=0),",
				"h=0,",
				"H=(t,b)=>{for(i=m=0;i<t.length;i++)b>t[i]&&(m=b-t[i]);return m},",
				"lpr=(b,n)=>(t||(Z[h]=0),t||(Z[++h]=0),g=(i,n,r)=>min(max(Z[r]+=(Z[n]+=b/4+64-Z[r])-(Z[n]/=1+i/48e3),0),255),h+=2,g(n,h,h+1)),",
				"b+=(U=170/288e4),l=0,",
				"p=(k,s=b,f=sin,q=10)=>(t?0:Z[h]=0,Q=Z[h]=(q*Z[h]+(isNaN(parseInt(k[s|0],36))?0:2**(parseInt(k[s|0],36)/12)))/(q+1),h+=2,t?0:Z[h]=0,Q=Z[h]+=isNaN(parseInt(k[s|0],36))?0:Q,Y=f(Q),Q=0,Y),",
				"(p('    CCCCCCCCCCCCFFFFFFFFAAAAHHHHFCCCCCCCHHHHFFFFAAAAAAAAHHHHFFEE',b*4%64,k=>sin(k*PI/128)>.75,1200)*(1.5-H([0,1,2,3,4,5,6,6.5,7,8,9,9.5,10,10.5,11,11.5,12,13,14,15,15.5],b%16))/2.5+((R=k=>lpr(random()*256-128,k)/64-1)(8000)>0)*max((1+b*4)&3,1)*(b*4%1-1)/6+p(['CFJF','CFJF','CFJF','AFJF'][b/2&3|0],b*16%4,k=>k/256%1>.25,0)/2*(((b+.5)%1-1)*(1==((b+.5)&1)))+p('CCCA885A',b/2%8,k=>sin(k*PI/512*+'12'[b*2&1])>0,0)/3+(sin(cbrt(b*('222222242222242422222224222484848'[b*2&31])%1*4)*128)>0)/3+(((2==(b*2&3))*(R(1000)+R(5000)+R(7000)+R(10000)+R(25000))>0)*(b*2%1-1)**1)/2)*64"
			],
			"codeMinified": "t?0:Z=Y=Array(16384).fill(b=c=d=0),h=0,H=(t,b)=>{for(i=m=0;i<t.length;i++)b>t[i]&&(m=b-t[i]);return m},lpr=(b,n)=>(t||(Z[h]=0),t||(Z[++h]=0),g=(i,n,r)=>min(max(Z[r]+=(Z[n]+=b/4+64-Z[r])-(Z[n]/=1+i/48E3),0),255),h+=2,g(n,h,h+1)),b+=U=170/288E4,l=0,p=(k,s=b,f=sin,q=10)=>(t?0:Z[h]=0,Q=Z[h]=(q*Z[h]+(isNaN(parseInt(k[s|0],36))?0:2**(parseInt(k[s|0],36)/12)))/(q+1),h+=2,t?0:Z[h]=0,Q=Z[h]+=isNaN(parseInt(k[s|0],36))?0:Q,Y=f(Q),Q=0,Y),64*(p('    CCCCCCCCCCCCFFFFFFFFAAAAHHHHFCCCCCCCHHHHFFFFAAAAAAAAHHHHFFEE',4*b%64,k=>sin(k*PI/128)>.75,1200)*(1.5-H([0,1,2,3,4,5,6,6.5,7,8,9,9.5,10,10.5,11,11.5,12,13,14,15,15.5],b%16))/2.5+((R=k=>lpr(256*random()-128,k)/64-1)(8E3)>0)*max(1+4*b&3,1)*(4*b%1-1)/6+p(['CFJF','CFJF','CFJF','AFJF'][b/2&3|0],16*b%4,k=>k/256%1>.25,0)/2*((b+.5)%1-1)*(1==(b+.5&1))+p('CCCA885A',b/2%8,k=>sin(k*PI/512*+'12'[2*b&1])>0,0)/3+(0<sin(128*cbrt(b*'222222242222242422222224222484848'[2*b&31]%1*4)))/3+(0<(2==(2*b&3))*(R(1E3)+R(5E3)+R(7E3)+R(1E4)+R(25E3)))*(2*b%1-1)/2)",
			"starred": 1
		}, {
			"name": "the person that i am directly referring to is currently a visible hue with a high frequency wavelength",
			"url": "https://www.reddit.com/r/bytebeat/comments/16xbupa/the_person_that_i_am_directly_referring_to_is/",
			"cover": {
				"name": "Eiffel 65 - Blue (Da Ba Dee)",
				"url": "https://youtu.be/zA52uNzx7Y4"
			},
			"date": "2023-10-01",
			"sampleRate": 48000,
			"codeOriginal": "(r=t)?0:A=Array(12288).fill(0),a=max(min(((P=k=>t*2**(k/12-1.1))(parseInt((-(z=t/1.25)>>17&3?'H9EHJCGHHEHLMELJ':'H9EHG7CEEECEEEGG')[z>>13&15],36))%256*min(z>>4&1023,255)/1024)+((C=(k,u,f)=>{for(j=w=0;j<u;j++)w+=f(P(parseInt(k.substr(u*(z>>15&3),u*(z>>15&3)+u)[j],36)));return w})('9EHCJG'+(-z>>17&3?'HELAHE':'HE9EH9'),3,k=>(k/2%64&k/4%64)&(256*(z/65536%1))))+(7e3*cbrt(16e3*((z&16383)/65536**2))&64)+max(t*sin(t*t)%16*min(z/4096%1-.5,0)*4,0)+(r%3?x:x=random())*32*abs(z/8192%1-1)+(r%2?y:y=random())*64*abs(z/16384%1-1)*(z>>14&1),255),0),a=a+A[Z=r/1.25%A.length|0],A[Z-1]=a*.25,max(min(a,255),0)",
			"codeMinified" : "(r=t)?0:A=Array(12288).fill(0),a=max(min((P=k=>t*2**(k/12-1.1))(parseInt((-(z=t/1.25)>>17&3?'H9EHJCGHHEHLMELJ':'H9EHG7CEEECEEEGG')[z>>13&15],36))%256*min(z>>4&1023,255)/1024+(C=(k,u,f)=>{for(j=w=0;j<u;j++)w+=f(P(parseInt(k.substr(u*(z>>15&3),u*(z>>15&3)+u)[j],36)));return w})('9EHCJG'+(-z>>17&3?'HELAHE':'HE9EH9'),3,k=>k/2%64&k/4%64&z/65536%1*256)+(7E3*cbrt((z&16383)/65536**2*16E3)&64)+max(t*sin(t*t)%16*min(z/4096%1-.5,0)*4,0)+32*(r%3?x:x=random())*abs(z/8192%1-1)+64*(r%2?y:y=random())*abs(z/16384%1-1)*(z>>14&1),255),0),a+=A[Z=r/1.25%A.length|0],A[Z-1]=.25*a,max(min(a,255),0)",
			"starred": 1
		}]
	}, {
		"author": "lhphr",
		"children": [{
			"name": "madnessdescent{offset}",
			"url": "https://dollchan.net/btb/res/44.html#44",
			"sampleRate": 11025,
			"codeOriginal": "(z=(x=((a=t+16777216)&a>>7)+a/32768)/(y=-x|x*a<<8)|y/x)**z"
		}, {
			"name": "processings",
			"url": "https://dollchan.net/btb/res/44.html#44",
			"date": "2022-04-05",
			"sampleRate": 22050,
			"codeOriginal": "(t**(1+(t>>8)/(t/2%(2-4*(x=(t>>17&1))))%(2+14*x))**(t/127%(2-x)))",
			"codeMinified": "t**(1+(t>>8)/(t/2%(2-4*(x=t>>17&1)))%(2+14*x))**(t/127%(2-x))"
		}, {
			"name": "Unnecessary-ARPEG.drm",
			"url": "https://dollchan.net/btb/res/44.html#44",
			"date": "2022-04-06",
			"sampleRate": 11025,
			"codeOriginal": "((15+1*'1370'[t>>15&3])/8*'12346543'[t>>10&7]*t%192+160)%256/2+64+((x=t>>(y=2+1*('99999999999999889999999967886855999999997788886799999999678568459199297788999756956999946788685347999999778888649391990664075405'[t>>10&127]))&2)-1)*(2*3e3*(x+1)/(t&(2**(y+1)-1))&1)*64",
			"codeMinified": "((15+1*'1370'[t>>15&3])/8*'12346543'[t>>10&7]*t%192+160)%256/2+64+((x=t>>(y=2+1*'99999999999999889999999967886855999999997788886799999999678568459199297788999756956999946788685347999999778888649391990664075405'[t>>10&127])&2)-1)*(6E3*(x+1)/(t&(2**(y+1)-1))&1)*64"
		}, {
			"name": "Unnecessary-ARPEG",
			"url": "https://dollchan.net/btb/res/44.html#44",
			"date": "2022-04-07",
			"sampleRate": 11025,
			"codeOriginal": "((15+1*'1370'[t>>15&3])/8*'12346543'[t>>10&7]*t%192+160)%256/2+64"
		}, {
			"name": "Numbers Not In Sight",
			"description": "Just a small experiment that I did. No numbers - how hard can it be?",
			"url": "https://dollchan.net/btb/res/44.html#44",
			"date": "2022-04-09",
			"codeOriginal": "((~t)-(t))*((x=t/t)-(t>>(z=(y=x+x)**y*y+y))%y)^(t*(t>>z))%(y**y**y)*-t>>z",
			"codeMinified": "(~t-t)*((x=t/t)-(t>>(z=(y=x+x)**y*y+y))%y)^t*(t>>z)%(y**y**y)*-t>>z"
		}, {
			"name": "delchor",
			"description": "Probably a simple progression of chords.",
			"url": "https://dollchan.net/btb/res/44.html#44",
			"date": "2022-04-13",
			"sampleRate": 44100,
			"codeOriginal": "(s=4*((l=t/44100*4400)%2**12)>>11<7)*((a=l*'12'[l>>8&1]*'66998887'[l>>13&7]/6)%48+a%64)|(a<<3&a>>7)%32"
		}, {
			"name": "oddsine",
			"description": "Was messing around with the sine funcion and got this by chance.",
			"url": "https://dollchan.net/btb/res/44.html#50",
			"date": "2022-04-19",
			"sampleRate": 44100,
			"codeOriginal": "(32*sin((x=t/[1,1,1,2,1.5,1.5,w=1.25+(0.75-1.25*(t>>16&1))*(t>>15&1),w][t>>12&7])/441*65)>>(x/2&16))+128",
			"codeMinified": "(32*sin((x=t/[1,1,1,2,1.5,1.5,w=1.25+(.75-1.25*(t>>16&1))*(t>>15&1),w][t>>12&7])/441*65)>>(x/2&16))+128"
		}, {
			"name": "Unnecessary-ARPEG.hc",
			"description": "Unnecessary hardcore remix of \"Unnecessary-ARPEG\".",
			"url": "https://dollchan.net/btb/res/44.html#50",
			"remix": {
				"name": "Unnecessary-ARPEG",
				"url": "https://dollchan.net/btb/res/44.html#44"
			},
			"date": "2022-04-19",
			"sampleRate": 44100,
			"codeOriginal": "((15+1*'1370'[t>>17&3])/8*'12346543'[t>>12&7]*(t/4)%192+160)%256/2+((sqrt(5E3*(t%65536&(2**[9,12,12,14,,,,,13,12,11,14][(t>>11&15|t^(t/32%8)*t)&11])-1))&128))",
			"codeMinified": "((15+1*'1370'[t>>17&3])/8*'12346543'[t>>12&7]*(t/4)%192+160)%256/2+(sqrt(5E3*(t%65536&(2**[9,12,12,14,,,,,13,12,11,14][(t>>11&15|t^t/32%8*t)&11])-1))&128)",
			"starred": 1
		}, {
			"name": "genreframe",
			"url": "https://dollchan.net/btb/res/44.html#50",
			"date": "2022-04-22",
			"sampleRate": 32000,
			"codeOriginal": "2*((x=t%16384)%((x/(y=2+(t>>15&3)-2.25*((t>>15)%8==7))*(y-1))>>7))|x<<(y-2)&x>>(8-(t>>17&1))",
			"codeMinified": "2*((x=t%16384)%(x/(y=2+(t>>15&3)-2.25*(7==(t>>15)%8))*(y-1)>>7))|x<<y-2&x>>8-(t>>17&1)"
		}, {
			"name": "HAZEHOUSE",
			"description": "Electrohouse's weird distant brother.",
			"url": "https://dollchan.net/btb/res/44.html#50",
			"remix": {
				"author": "Anonymous from russian imageboards",
				"name": "Electrohouse",
				"url": "http://arhivach.ng/thread/28592/#71681785"
			},
			"date": "2022-04-22",
			"codeOriginal": "t*=11/12,((t/2**(x=512/[128,128,143,137][t>>14&3])&1?x*t:t>>4)^t>>6)>>(t%16)&t>>4",
			"codeMinified": "t*=11/12,((t/2**(x=512/[128,128,143,137][t>>14&3])&1?x*t:t>>4)^t>>6)>>t%16&t>>4"
		}, {
			"name": "CBRT-FILE R00TZ",
			"description": "Sort of a proper song?",
			"url": "https://dollchan.net/btb/res/44.html#50",
			"date": "2022-04-22",
			"sampleRate": 22050,
			"codeOriginal": "l=t%2**20,n=(l*l/Math.PI)%1,(l>>13)-31?((cbrt(6e7/(r='11141112'[l>>13&7])*(r*l&8191))&64)*1.5+(l>>13&1)*(l>2**17)*(l>>8*l&31)+(l>2**18)*(l*(m='45764586'[l>>15&7])*(5+1*'12357532'[l>>11&7])/20)%64)+(l>2**19)*(16*sin((l<<(r/2-1))*Math.PI/15435*44*(1*m+3))+16)+(l>786432)*((l>>14&1)*((~l+256>>8)%64+63)*n):((~l+128>>7)%64+95)*n",
			"codeMinified": "l=t%2**20,n=l*l/PI%1,(l>>13)-31?1.5*(cbrt(6E7/(r='11141112'[l>>13&7])*(r*l&8191))&64)+(l>>13&1)*(l>2**17)*(l>>8*l&31)+(l>2**18)*(l*(m='45764586'[l>>15&7])*(5+1*'12357532'[l>>11&7])/20)%64+(l>2**19)*(16*sin((l<<r/2-1)*PI/15435*44*(1*m+3))+16)+(786432<l)*(l>>14&1)*((~l+256>>8)%64+63)*n:((~l+128>>7)%64+95)*n",
			"starred": 1
		}, {
			"name": "Paradigm Contacter",
			"description": "I might add that this doesn't work properly on the Greggman page and doesn't seem to load at all on the Paul Hayes page, so this formula can probably be used to test a bytebeat player's accuracy and efficiency.",
			"url": "https://dollchan.net/btb/res/44.html#53",
			"date": "2022-04-23",
			"sampleRate": 11025,
			"codeOriginal": "(f=((l=(r=t%2**20)%2**14)>>13&1)+(r%2**19>>14==31))?0:x=y=0,z=(((x=x/1.001-l)/4&(l|x)+l*(r>>17!=4)*(r>2**16))+(r>2**17)*(y=y+l&l>>5)^64*x/r*y>>1&127*(r>196608)*(r>>18!=2))+(r>2**18)*(x>>(4+4*(s=r>>17&1))*y>>(5+s)),((r>2**18)-(r>>14==47)?f?x/(1-s/1024)|y/2:z:r%2**19>>14==15?n*q:z)^(t>r)*(r>>13==0)*(n=l*l/sqrt(l)%1)*((q=((~r+128>>6)%128+191))-63)",
			"codeMinified": "(f=((l=(r=t%2**20)%2**14)>>13&1)+(31==r%2**19>>14))?0:x=y=0,z=(((x=x/1.001-l)/4&(l|x)+l*(4!=r>>17)*(r>2**16))+(r>2**17)*(y=y+l&l>>5)^64*x/r*y>>1&127*(196608<r)*(2!=r>>18))+(r>2**18)*(x>>(4+4*(s=r>>17&1))*y>>5+s),((r>2**18)-(47==r>>14)?f?x/(1-s/1024)|y/2:z:15==r%2**19>>14?n*q:z)^(t>r)*(0==r>>13)*(n=l*l/sqrt(l)%1)*((q=(~r+128>>6)%128+191)-63)",
			"starred": 1
		}, {
			"name": "sine of power",
			"description": "Decided to raise t to the power of a sine function. Ended up sounding somewhat unique.",
			"url": "https://dollchan.net/btb/res/44.html#54",
			"date": "2022-04-24",
			"codeOriginal": "(t%32768>>4)**sin(t/2/'66546657'[t>>13&7])&t>>4"
		}, {
			"name": "Duotrigottogon",
			"description": "Fast paced.",
			"url": "https://dollchan.net/btb/res/44.html#54",
			"date": "2022-04-26",
			"sampleRate": 44100,
			"codeOriginal": "(6E3**(1-t%2**(12-((t>>13&7)==7)-((t>>15&7)==7))/16384)&128)+(t*(t&t>>9)>>11&64)+(t<<3*(t&t>>10)>>4&63)"
		}, {
			"name": "The Evaluator",
			"description": "This song doesn't loop, and it's 5 minutes long.",
			"url": "https://dollchan.net/btb/res/44.html#54",
			"date": "2022-04-26",
			"codeOriginal": "eval(unescape(escape`琿〺砽礽〬⡧㵛⡡㴨砽砯㈫⡺㴨眽⠱⬱⨧㜷㤸❛琾㸱㐦㍝⤯㠩⩴⨧ㄱ〲㈱㈲❛琾㸱〦㝝⤥㌲⤦⡹㵸⨲⨪⸵籸㸾ㅞ礯ㄮ㔩⤫⡢㴱㘪獩渨㈰㐸⼨琥㠱㤲⤪⨮〱⤫ㄶ⤬⡳㴨愯㉼⡣㵺⼨ㄫ⡴㸾ㄵ☱⤩☳㈩⼸⤫⡡☱⸵⩴⤩⬲⩢⭣⬨搽㘴⨨⡴㸾ㄵ☳⤽㴳⤪⡵㴨⡱㵴┲⨪ㄵ⤪焯焪⨮㔪偉⤥ㄩ┨焫㄰㈴㸾㄰⤩ⱡ⬱⸵⩢⬴⩢┳㈫挫⡯㴨⡥㵛瘽㈪⠨琾㸱㈦㜩㴽㜩⨨ㄭ⸵⨨琾㸱㔦ㄩ⤬瘬Ⱜ瘬瘬Ⱜ㈬㈮㌷㔬㌬㑝孴㸾㠦ㄵ崪眪琯㈩⼲☱㔩⬨攦ㄵ⤩⬨昽⡴㸾ㄲ☱⤪㘴⩵♾琾㸷┶㐫㘳⤪⸷Ⱳ㵳⬲⩢⬴⩢┳㈫挫搫漫昪⸸Ⱘ氽戫挩⭦⨮㔬氫搫⠲⩥☳ㄩ⭦⨮㔬爭搬爬渽砯睼氬渫戫ㄮ㔪⡥☳ㄩⱢ⬨洽⡰㵺⼲☨琾㸸☳ㄩ⤫漩Ⱞ㤪猫戫搫㈪洬爭搬⸸㔪爫⸴⩯⭰ⱡ⭬⭦⨮㘫洬氫昪⸴⭭⬮㘪搬⡡☳㈩⭢⭭Ⱘ稦㌱⤫洬瀫漪⠱⵴㸾ㄶ☱⥝孴㸾ㄷ崩㸲㔵㼲㔵㩧☲㔵`.replace(/u(..)/g,\"$1%\")))",
			"codeMinified": "eval(unescape(escape`琿〺砽礽〬㈵㔼⡧㵛⡡㴨砽砯㈫⡺㴨眽⠱⬱⨧㜷㤸❛琾㸱㐦㍝⤯㠩⩴⨧ㄱ〲㈱㈲❛琾㸱〦㝝⤥㌲⤦⡹㵸⨲⨪⸵籸㸾ㅞ礯ㄮ㔩⤫⡢㴱㘪獩渨㈰㐸⼨琥㠱㤲⤪⨮〱⤫ㄶ⤬⡳㴨愯㉼⡣㵺⼨ㄫ⡴㸾ㄵ☱⤩☳㈩⼸⤫⡡☱⸵⩴⤩⬲⩢⭣⬨搽㘴⨨㌽㴨琾㸱㔦㌩⤪⡵㴨焽琥㈪⨱㔩⩱⽱⨪⸵⩐䤥ㄩ┨焫㄰㈴㸾㄰⤩ⱡ⬱⸵⩢⬴⩢┳㈫挫⡯㴨⡥㵛瘽㈪⠷㴽⡴㸾ㄲ☷⤩⨨ㄭ⸵⨨琾㸱㔦ㄩ⤬瘬Ⱜ瘬瘬Ⱜ㈬㈮㌷㔬㌬㑝孴㸾㠦ㄵ崪眪琯㈩⼲☱㔩⬨攦ㄵ⤩⬮㜪⡦㴶㐪⡴㸾ㄲ☱⤪甦繴㸾㜰⤬爽猫㈪戫㐪戥㌲⭣⭤⭯⬮㠪昬⡬㵢⭣⤫⸵⩦ⱬ⭤⬨㈪攦㌱⤫⸵⩦ⱲⵤⱲⱮ㵸⽷籬Ɱ⭢⬱⸵⨨攦㌱⤬戫⡭㴨瀽稯㈦琾㸸☳ㄩ⭯⤬⸹⩳⭢⭤⬲⩭ⱲⵤⰮ㠵⩲⬮㐪漫瀬愫氫⸶⩦⭭ⱬ⬮㐪昫洫⸶⩤Ⱘ愦㌲⤫戫洬⡺☳ㄩ⭭Ɒ⭯⨨ㄭ琾㸱㘦ㄩ嵛琾㸱㝝⤿㈵㔺朦㈵5`.replace(/u(..)/g,'$1%')))",
			"starred": 1
		}, {
			"name": "TTT (The Tonal Tone)",
			"description": "There's a chance that you might hear the melody differently. Saying this from personal experience.",
			"url": "https://dollchan.net/btb/res/44.html#54",
			"date": "2022-04-27",
			"sampleRate": 32000,
			"codeOriginal": "p=t=>2**(t/12),s=t=>16*sin(f/t*q),a=(t,w,v)=>f/t*p([0,3,5,w,v][(5*f>>14)%5])&15,m=t=>f/7*p([0,0,,,3,5,0,0,-2,-2,,,-4,-4][((f>>14)-t)&15])*q&31,f=t*3.52%2**24,q=p([0,-4,0,3][f>>19&3]),n=((f/28*q&15)+(f/42*q&15)+(f/56*q&15))/(2**(2**15/(f%2**19))),(f>>22!=3?(f>>15)%256!=127?m(0)-(f>2**21)*(s(88)+s(176))+(f>2**22)*n+(f>2**23)*a(28/q,7,12):a(56,12,15)+a(28,12,15)+a(14,12,15):m(0)+m(4/3)/2+m(8/3)/4+m(4)/8+n+s(54)/3+s(88)/2)+128-(f>>19)",
			"codeMinified": "p=t=>2**(t/12),s=t=>16*sin(f/t*q),a=(t,w,v)=>f/t*p([0,3,5,w,v][(5*f>>14)%5])&15,m=t=>f/7*p([0,0,,,3,5,0,0,-2,-2,,,-4,-4][(f>>14)-t&15])*q&31,f=3.52*t%2**24,q=p([0,-4,0,3][f>>19&3]),n=((f/28*q&15)+(f/42*q&15)+(f/56*q&15))/(2**(2**15/(f%2**19))),(3!=f>>22?127!=(f>>15)%256?m(0)-(f>2**21)*(s(88)+s(176))+(f>2**22)*n+(f>2**23)*a(28/q,7,12):a(56,12,15)+a(28,12,15)+a(14,12,15):m(0)+m(4/3)/2+m(8/3)/4+m(4)/8+n+s(54)/3+s(88)/2)+128-(f>>19)",
			"starred": 2
		}, {
			"name": "ᓯᑯ ᓯᓚ ᑖᖅᑐᒥ ᐆᒻᒪᑦ",
			"description": "%2.8 led to an interesting waveform. The arpeggio was annoying to set up, and it might be a bit off still for all I know.",
			"url": "https://dollchan.net/btb/res/44.html#54",
			"date": "2022-04-28",
			"sampleRate": 44100,
			"codeOriginal": "c=z=>t*2**(([5+z,3+z,2+z,z,5+z,3+z,10+z,7+z][t>>17&7]-5)/12),a=y=>t/2205*2**(('MQTWY]`cec`]YWTQ'.charCodeAt(t>>12&15)+[5,3,2,0,5,3,10,7][t>>17&7]-y)/12)%2.8,12*((c(0)>>4)%2.8-(t>2**20)*((c(o=1/20)>>5)%2.8+(2+(t>2**21))/3*(60620&1<<(t%2**17>>13)?(1-t%2**14/2**14)*sin(t**PI):0)))+(t>2**21)*((0xd9119111&1<<(t%2**18>>13)?22*sin(1024/(t%2**13)**.05):0)+12*((c(2*o)/64%2.8&c(2*o)/32.2)+(c(-o)>>3)%2.8/2-(a(o)+a(12))/2%2.8))+128",
			"codeMinified": "c=z=>t*2**(([5+z,3+z,2+z,z,5+z,3+z,10+z,7+z][t>>17&7]-5)/12),a=y=>t/2205*2**(('MQTWY]`cec`]YWTQ'.charCodeAt(t>>12&15)+[5,3,2,0,5,3,10,7][t>>17&7]-y)/12)%2.8,12*((c(0)>>4)%2.8-(t>2**20)*((c(o=.05)>>5)%2.8+(2+(t>2**21))/3*(60620&1<<(t%2**17>>13)?(1-t%2**14/2**14)*sin(t**PI):0)))+(t>2**21)*((3641807121&1<<(t%2**18>>13)?22*sin(1024/(t%2**13)**.05):0)+12*((c(2*o)/64%2.8&c(2*o)/32.2)+(c(-o)>>3)%2.8/2-(a(o)+a(12))/2%2.8))+128"
		}, {
			"name": "octave transition",
			"description": "An interesting transition between different octaves.",
			"url": "https://dollchan.net/btb/res/44.html#54",
			"date": "2022-04-29",
			"codeOriginal": "sin((s=PI*(q=t%(a=(f=409600)+f/11/PI)>a/2?a-t%a:t%a)/800)*11*2**(s%0.002))*64+128",
			"codeMinified": "64*sin(11*(s=PI*(q=t%(a=(f=409600)+f/11/PI)>a/2?a-t%a:t%a)/800)*2**(s%.002))+128"
		}, {
			"name": "CRZstepᑦ",
			"description": "Is this what yall call dubstep or something.",
			"url": "https://dollchan.net/btb/res/44.html#61",
			"date": "2022-05-01",
			"sampleRate": 32000,
			"codeOriginal": "f=x=>t&(165&t%255)&&t/256*(t&t>>x),f(12)-f(14)+128",
			"codeMinified": "f=x=>t&165&t%255&&t/256*(t&t>>x),f(12)-f(14)+128"
		}, {
			"name": "Retrixtaria",
			"description": "This doesn't loop, it's 7 minutes long. Has a quality value of 2 due to it sounding a bit awkward occasionally.",
			"url": "https://dollchan.net/btb/res/44.html#61",
			"date": "2022-05-07",
			"sampleRate": 4000,
			"codeOriginal": "b=(v=32)=>(j=(t*11/10*2**((t>>13&6^t>>14&3)/12)))%v^(j%v/16*(t>>9&15)),x=(s=2)=>a*.05*s^((b(128)&32/s)-(b()&8/s)*2)*s,z=s=>b(32/s)-b(64/s)^b(32/s),([a=37649&1<<(t>>9&15)&&32*sin(2048/(t%512)**.0125),a-b(),a-b(64)+b()+(d=2*(((t>>14&3)==3)*(k=64*(t**2.5%1))&(t>>8&63))/3),a-b(64)+(c=2*((t>>11&1)*k&(-t>>5&63))/3)*.8,w=a-(b(64)^b(12.8))-b()+c+d,x(1),x()-d,w-d,w^(b()^b(6.4)),b(32)+c/2^b(64)-c/2,z(1)+d/2,a/2-b(64)|b()+c/2,(a+b(64)|2*b()-c/2)-d*.8,x()-b(),x()-b(64)+d,(w-d+x())/1.1+20,(w+x(3))/1.1+20,x(3)+a/2,x()+a/2,2*b(),(y=2*(b()+b(16)))-d,w-d+y,w+y,a*.8+z(1)+c,z(2)+c/2,b()^b()-b(16),b(16)][t>>16]&255)+128",
			"codeMinified": "b=(v=32)=>(j=11*t/10*2**((t>>13&6^t>>14&3)/12))%v^j%v/16*(t>>9&15),x=(s=2)=>.05*a*s^((b(128)&32/s)-2*(b()&8/s))*s,z=s=>b(32/s)-b(64/s)^b(32/s),([a=37649&1<<(t>>9&15)&&32*sin(2048/(t%512)**.0125),a-b(),a-b(64)+b()+(d=2*((3==(t>>14&3))*(k=t**2.5%1*64)&t>>8&63)/3),a-b(64)+.8*(c=2*((t>>11&1)*k&-t>>5&63)/3),w=a-(b(64)^b(12.8))-b()+c+d,x(1),x()-d,w-d,w^b()^b(6.4),b(32)+c/2^b(64)-c/2,z(1)+d/2,a/2-b(64)|b()+c/2,(a+b(64)|2*b()-c/2)-.8*d,x()-b(),x()-b(64)+d,(w-d+x())/1.1+20,(w+x(3))/1.1+20,x(3)+a/2,x()+a/2,2*b(),(y=2*(b()+b(16)))-d,w-d+y,w+y,.8*a+z(1)+c,z(2)+c/2,b()^b()-b(16),b(16)][t>>16]&255)+128",
			"starred": 1
		}, {
			"name": "Intra",
			"description": "I guess it's trying to do a melody...",
			"url": "https://dollchan.net/btb/res/44.html#61",
			"date": "2022-05-08",
			"sampleRate": 22050,
			"codeOriginal": "(t*=t>>11&7)?x=t%257&t%255&t>>12^x/1.5:x=0"
		}, {
			"name": "Positronomia",
			"description": "It loops in about 5 minutes, and I somehow got an interesting melody rhythm about half-way.",
			"url": "https://dollchan.net/btb/res/44.html#61",
			"date": "2022-05-11",
			"sampleRate": 22050,
			"codeOriginal": "t/=z=2205/2816,p=a=>2**(a/12),f=(a,b=31)=>((t*p(a-227+'áá  ááåèææááååáàãã  ããããææááååãàáá  ááññïðññïïññ'.charCodeAt(c=(t>>12)-16*(t%2**18>>16==3)&63))&63)-32)%((-t-2048*'      !\"      !\"      !\"    !\"!\"        !\"      '.charCodeAt(c))/128%64+32+b),m=b=>f(-12,b)-f(0,b)-f(12,b),h=(a,b,c,d)=>t/16384%1*cos(t/PI/z/8*p([a,b,c,c][t>>16&3]+d)),g=(a,b,c)=>h(a,b,c,o=1/8)+h(a,b,c,0)+h(a,b,c,-o),i=(a,b,c)=>g(a-9,b-14,c-14)+g(a-4,b-5,c-8)+g(a,b,c)+g(a+5,b+3,c+7),q=(t>>15)%32!=31,y=(a,b)=>a&1<<(t>>19&15)&&b,(y(47342,m()/2)-y(52992,(m()-m(t>>9&31))/2)+q*(y(65487,10*i(2,9,10))+y(14072,((t>>20==2)+1)*5*i(-10,-3,-2))+y(30716,16*sin(2048/(t%16384)**.02))+y(15564,(l=t%2**17)*l/l**.5*PI%1*16*(t>>14&1)&-t>>11%64+63))|0)+128",
			"codeMinified": "t/=z=2205/2816,p=a=>2**(a/12),f=(a,b=31)=>((t*p(a-227+'áá  ááåèææááååáàãã  ããããææááååãàáá  ááññïðññïïññ'.charCodeAt(c=(t>>12)-16*(t%2**18>>16==3)&63))&63)-32)%((-t-2048*'      !\"      !\"      !\"    !\"!\"        !\"      '.charCodeAt(c))/128%64+32+b),m=b=>f(-12,b)-f(0,b)-f(12,b),h=(a,b,c,d)=>t/16384%1*cos(t/PI/z/8*p([a,b,c,c][t>>16&3]+d)),g=(a,b,c)=>h(a,b,c,o=1/8)+h(a,b,c,0)+h(a,b,c,-o),i=(a,b,c)=>g(a-9,b-14,c-14)+g(a-4,b-5,c-8)+g(a,b,c)+g(a+5,b+3,c+7),q=(t>>15)%32!=31,y=(a,b)=>a&1<<(t>>19&15)&&b,(y(47342,m()/2)-y(52992,(m()-m(t>>9&31))/2)+q*(y(65487,10*i(2,9,10))+y(14072,((t>>20==2)+1)*5*i(-10,-3,-2))+y(30716,16*sin(2048/(t%16384)**.02))+y(15564,(l=t%2**17)*l/l**.5*PI%1*16*(t>>14&1)&-t>>74))|0)+128",
			"starred": 1
		}, {
			"name": "wvConstruct",
			"description": "A wave of sorts suddenly emerges.",
			"url": "https://dollchan.net/btb/res/44.html#66",
			"date": "2022-05-11",
			"sampleRate": 11025,
			"codeOriginal": "t?32*(x=8*cos((t>>10)%27*(t*'2265'[(t>>10)/27&3]%512/512)+abs(x)**.5)/PI)+128:x=0"
		}, {
			"name": "$ine $tabilizer",
			"description": "Weird usage of the sine wave.",
			"url": "https://dollchan.net/btb/res/44.html#66",
			"date": "2022-05-12",
			"sampleRate": 32000,
			"codeOriginal": "t/=b=t&t>>12,f=(a,c)=>32*sin(b--%2**c*t/2**a)|0,f(5,4)+f(9,6)+f(12,8)+f(14,9)+128"
		}, {
			"name": "$ine Ðecrement",
			"description": "Another odd usage of the sine wave.",
			"url": "https://dollchan.net/btb/res/44.html#66",
			"date": "2022-05-12",
			"sampleRate": 32000,
			"codeOriginal": "b=t&t>>12,f=(a,c)=>32*sin(b--%2**c*t/2**a),f(5,4)+f(9,6)+f(12,8)+f(14,9)+128"
		}, {
			"name": "tempotacular!!!",
			"description": "This is one of the more unique ones because the BPM changes throughout the song. Also got a decently complex melody.",
			"url": "https://dollchan.net/btb/res/44.html#66",
			"date": "2022-05-14",
			"sampleRate": 32000,
			"codeOriginal": "t?a=a+(b=max((589824-a)/65536,1))+[0,0,1,3,5,-1,-3,-5][i]/20:b=a=0,c=z=>2**(z/12),d=z=>2*32**z**.5&63,e=z=>d(sin(h/PI*b/z))/3,f=c(((a>>16)+2&6)-2),g=z=>t*f/7.5*c(z)&31,h=[t,a][!(i=a>>19)&1],j=d(sin(t/11*c([0,3,5,7,12,15,18][a>>10+(a>>11&6)&7]))),k=d(sin(2048/(a%(l=2**14))**.05)),m=e(32)-e(8/f)-e(6/f),n=2*(g(0)+g(4)+g(7))/3,o=16*(1-a%l/l)*sin((t>>2)**3)*(a>>14&1),p=t/30*f*c('0+($    74+('.charCodeAt(a>>11&11)+.5)&24,min(!(i>>3)*((a>>14&31)-(i==7)!=31?[3*e(32)-k,q=m+j-k,q=q+n,q=q-o,q-p,q-m+k/2-p,m+j-k/2-p,2*j/3-p][i]:(1-(a>>9&2))*32*c(h&-a>>4&63)**-1)+128,255)",
			"codeMinified": "t?a=a+(b=max((589824-a)/65536,1))+[0,0,1,3,5,-1,-3,-5][i]/20:b=a=0,c=z=>2**(z/12),d=z=>2*32**z**.5&63,e=z=>d(sin(h/PI*b/z))/3,f=c(((a>>16)+2&6)-2),g=z=>t*f/7.5*c(z)&31,h=[t,a][!(i=a>>19)&1],j=d(sin(t/11*c([0,3,5,7,12,15,18][a>>10+(a>>11&6)&7]))),k=d(sin(2048/(a%(l=2**14))**.05)),m=e(32)-e(8/f)-e(6/f),n=2*(g(0)+g(4)+g(7))/3,o=16*(1-a%l/l)*sin((t>>2)**3)*(a>>14&1),p=t/30*f*c('0+($    74+('.charCodeAt(a>>11&11)+.5)&24,min(!(i>>3)*((a>>14&31)-(i==7)!=31?[3*e(32)-k,q=m+j-k,q+=n,q-=o,q-p,q-m+k/2-p,m+j-k/2-p,2*j/3-p][i]:32*(1-(a>>9&2))*c(h&-a>>4&63)**-1)+128,255)",
			"starred": 2
		}, {
			"name": "Nocturnizf",
			"description": "Sort of a melody with this one?",
			"url": "https://dollchan.net/btb/res/44.html#66",
			"date": "2022-05-16",
			"sampleRate": 44100,
			"codeOriginal": "((a=t%2**17)/((b=2**(('22532250'[t>>17&7]-2)/12))*a%(64*'4321'[a>>[1,4,2,12][c=a>>14&3]&3]))/2**(a>>12&3)&255)/2+(c!=3)*(128*sin(b**2*4096/(a%32768)**.01)&64)",
			"starred": 1
		}, {
			"name": "Byte Me A Beat",
			"description": "I don't know about you, but for me, this came out better than expected.",
			"url": "https://dollchan.net/btb/res/44.html#66",
			"date": "2022-05-18",
			"sampleRate": 44100,
			"codeOriginal": "t%=2**23,c=1*'00730079'[t>>16&7],m=(b,a,d)=>2**(b+(c+[4,7,4,7,6,4,2,0,4,,,4,,4,4][t>>12&15]-4)/12)*t%64>>(t>>a&d),n=(b=0,a=9,d=7)=>m(b++,a,d)-m(b,a,d),b=(a,d=256)=>16*sin(t/14e3*2**(8+(c+a)/12))**d,j=a=>28*sin(5e4/(t%2**(12+a))**1e-3)/(a+1)|0,k=0xd9119111&1<<(t%2**17>>12)?j(0):j(1),h=(8*((t>>12&3)==0)+8)*(1-t%2**12/2**12)*sin(t**3),d=b(-5)+b(0)+b(3)-2*b(-12,2),e=n()+n(-1,14,3)/2,z=(t>>15&15)!=15,min(255,[n(),n()-d,f=e-z*(d+h/2),q=4/3*((n(-1)&e)-e)-d+k+b(.05)+h,r=z*q-(n(0,11,1)-n(1,10,3))/(4-2*!z),g=(e^n())-d-2*b(-12,2)-h/2,z*g+n(-2)+e,q,r,i=e+n(-3,13)/2+2*b(-12,3)+k,z*i-d+h,q,r,g+k-h/2,e-d,f][t>>19]+128)",
			"starred": 2
		}, {
			"name": "t% funk",
			"description": "I guess another remix of \"idk it's 't%'\"? Why not.",
			"url": "https://dollchan.net/btb/res/44.html#66",
			"remix": {
				"name": "idk it's \"t%\"",
				"url": "https://dollchan.net/btb/res/44.html#44"
			},
			"date": "2022-05-19",
			"sampleRate": 32000,
			"codeOriginal": "(t%(t&t>>12)/2**(t/1024%4-3)&127)+(8e3**(1-t%16384/1e4)&64)"
		}, {
			"name": "sketchy reverb attempt",
			"description": "An attempt at reverb. Not the most ideal, but it's something. This has considerable performance issues in every browser I've tested other than Firefox. Play this code in there if possible.",
			"url": "https://dollchan.net/btb/res/44.html#69",
			"date": "2022-05-22",
			"sampleRate": 44100,
			"codeOriginal": "a=Array,c=10584e3/71,l=0,p=L=>A.push(a(0|c/(1+1/PI**2*l)).fill(0))+(l++<L?p(L):l=0),t?0:(this.A=a(),y=a(6).fill(0))+p(95),m=t/c,f=1+(m&4)/4,s=f*min(max(32*(m%1)/f-1,0),2)/2,z=0,f=a=>((y[z++]+=2**((a+[3,1,6+s,5,3,1,10+s,7][m&7])/12))/2205*352&16)-8,h=L=>A[l].shift()+(l++<L?h(L):l=0),w=h(95),x=f(-12)+f(-7)+f(0)+f(5)+f(12)+f(17)+w,p=L=>A[l].push(x/(L+1+20*l))+(l++<L&&p(L)),p(95),x+24*w+128",
			"codeMinified": "a=Array,c=10584E3/71,l=0,p=L=>A.push(a(0|c/(1+1/PI**2*l)).fill(0))+(l++<L?p(L):l=0),t?0:(this.A=a(),y=a(6).fill(0))+p(95),m=t/c,f=1+(m&4)/4,s=f*min(max(m%1*32/f-1,0),2)/2,z=0,f=a=>((y[z++]+=2**((a+[3,1,6+s,5,3,1,10+s,7][m&7])/12))/2205*352&16)-8,h=L=>A[l].shift()+(l++<L?h(L):l=0),w=h(95),x=f(-12)+f(-7)+f(0)+f(5)+f(12)+f(17)+w,p=L=>A[l].push(x/(L+1+20*l))+(l++<L&&p(L)),p(95),x+24*w+128",
			"starred": 1
		}, {
			"name": "Pyramid Dungeon",
			"description": "Probably just me, but I'm seeing a slight desert-like style in this.",
			"url": "https://dollchan.net/btb/res/44.html#69",
			"date": "2022-05-22",
			"sampleRate": 32000,
			"codeOriginal": "m=2**([t>>13&5,7-(t>>13&5),7,4+3*(t>>17&2)][t>>16&3]/12),(m*t/2&32)+(m*t/8&31)+32*tan(PI/4*sin(m*t*PI/125)**(m*t/(8-2*(t>>17&1))&t>>12&62))",
			"starred": 1
		}, {
			"name": "waver",
			"description": "A loop with... buzzing kicks I guess?",
			"url": "https://dollchan.net/btb/res/44.html#69",
			"date": "2022-05-23",
			"sampleRate": 44100,
			"codeOriginal": "m=a=>(32-(t>>(7+(t>>12&3)-(t>>14&2))&31))*asin(1/sin(t*PI/65536)*sin(t/36*2**(('44204469'[t>>16&7]-4+a)/12)))|0,k=(f,w,x=2**f)=>16*sin(w*1e3/(t%x/x)**.01)|0,max(min(m(0)+m(.05)-m(-.05)-m(.14)+m(-.1),16),-16)+k(12+(t>>15&3)-(t>>13&3)^(t>>12&3),1)+2*k(14,3)+128",
			"codeMinified": "m=a=>(32-(t>>7+(t>>12&3)-(t>>14&2)&31))*asin(1/sin(t*PI/65536)*sin(t/36*2**(('44204469'[t>>16&7]-4+a)/12)))|0,k=(f,w,x=2**f)=>16*sin(1E3*w/(t%x/x)**.01)|0,max(min(m(0)+m(.05)-m(-.05)-m(.14)+m(-.1),16),-16)+k(12+(t>>15&3)-(t>>13&3)^t>>12&3,1)+2*k(14,3)+128",
			"starred": 1
		}, {
			"name": "Time Is A Suggestion",
			"description": "The time variable (t) is never used in this code, hence the name.",
			"url": "https://dollchan.net/btb/res/44.html#69",
			"date": "2022-05-27",
			"sampleRate": 32000,
			"codeOriginal": "z=Z=>2**(Z/12),this.a??=0,a+=1,a%=2**22,c=1*'00750079'[a>>15&7],b=a*z(c+1*'00337373'[a>>11&7]),d=(D,f=2)=>b/f&16+D,e=1.5*(300*(a%(4096*(4-(a>>14&1))))**.25&32),f=F=>32*sin(a/46*z(c-F))**(2+(a>>8-(a>>16&1)&254)),g=f(9)+f(4)+f(0),h=(a>>14&1)*(-a>>9&31)*sin((a>>1)**3)**2,i=(!(a>>12&3)+1)*(-a>>8&15)*sin(a**3)**2,y=d(32)+e+g+h+i,min(255,[d(0),d(32)+g,y-i,y,x=y+(d(0,1)^d(32,1))/2+f(-5),x,y-i,y-i,w=g+i/2+d(0)*(-a>>6&31)/16,w+e,v=w+e+h+i/2,!!(-a>>14&15)*v+d(32),x,x,d(32)+g+i,!!(-a>>16&3)*d(0)+g][a>>18&15])",
			"starred": 2
		}, {
			"name": "FLⱯR3Z0NE",
			"description": "\"Electrohouse\" with some additional sounds and slight tweaks.",
			"url": "https://dollchan.net/btb/res/44.html#69",
			"remix": {
				"author": "Anonymous from russian imageboards",
				"name": "Electrohouse",
				"url": "http://arhivach.ng/thread/28592/#71681785"
			},
			"date": "2022-05-26",
			"codeOriginal": "(t>>t%(t&1?t>>15&1?51:t>>14&3?58:65:39)&t>>4&255)/2+(3e5/(t-(t>>2&1024)&4095)&63)+(t>>11&1)*((t>>15&1?19:t>>14&3?17:15)/10*t%78+((t>>9&3)+2)*(t>>15&1?30:t>>14&3?27:20)/20*t%39)/1.5",
			"starred": 1
		}, {
			"name": "uni Firaz",
			"description": "This works well with too many sample rates for some reason.",
			"url": "https://dollchan.net/btb/res/44.html#88",
			"date": "2022-05-27",
			"sampleRate": 22050,
			"codeOriginal": "m=t/25*2**(4-!(-t>>15&3)+[0,4,9,0,4,9,12,16][t>>(11-(t>>14&1))&7]/12),f=z=>m/(4-(t>>15&3))/z&31,(1e3**(1-t%16384/1e4)&32)+(t>>14&1)*(-t>>9&31)*sin((t/(2+(t>>10&15))|0)**3)**2+(m&16^f(.99)^f(1.01))",
			"codeMinified": "m=t/25*2**(4-!(-t>>15&3)+[0,4,9,0,4,9,12,16][t>>11-(t>>14&1)&7]/12),f=z=>m/(4-(t>>15&3))/z&31,(1E3**(1-t%16384/1E4)&32)+(t>>14&1)*(-t>>9&31)*sin((t/(2+(t>>10&15))|0)**3)**2+(m&16^f(.99)^f(1.01))"
		}, {
			"name": "the lone system",
			"description": "An echo type of thing with some pitch sliding.",
			"url": "https://dollchan.net/btb/res/44.html#88",
			"date": "2022-06-02",
			"sampleRate": 32000,
			"codeOriginal": "p=v=>2**(v/12),a=v=>Array(3072*v).fill(0),t?0:(y=[0,0,0],d=[a(1),a(4)]),s=min(max(t/65536%1*16-1,0),2)/2,c=[0,4+s,2,-1.5-s/2,0,4+s,9,12][t>>16&7],w=(v,q)=>sin(y[v]+=p(q)/25)**2,z=(m=((y[0]+=p([0,5][t>>10&1]+c))&32)/(1+t/16384%4)+16*(w(1,c)+w(2,c+5)))+d[0].shift()+d[1].shift(),d[0].push(z/2),d[1].push(z/2.5),(z+m)/2",
			"starred": 2
		}, {
			"name": "Fidelity Tweak",
			"description": "A lo-fi effect.",
			"url": "https://dollchan.net/btb/res/44.html#88",
			"date": "2022-06-04",
			"sampleRate": 32000,
			"codeOriginal": "f=F=>2**(F/12),s=V=>32*(cos(t*f(c+V)/50)**2)**.125,w=V=>s(V+(o=1/8))+s(V)+s(V-o)+8,t?0:d=v=0,c='25302574'[t>>17&7]-2,v+=[0,.8,.95,.9][t>>13&3],v<1?d=f([0,4,7,12][t>>9&3]+c)*t%64+w(0)+w(4)+w(7)+w(14):v--,d"
		}, {
			"name": "T!me Tr!al",
			"description": "Quite of a complex melody for a nice loop.",
			"url": "https://dollchan.net/btb/res/44.html#88",
			"date": "2022-06-04",
			"sampleRate": 44100,
			"codeOriginal": "p=v=>2**(v/12),z=12*(t>>18&1),w=t/32768%1,64*abs(sin(t/50*p([0,3,7,12,,19,,7][t>>11+(t>>13&3^t>>14&1)&7]+z)))**.25+32*sin(70/w**.3)+16*(t>>15&1)*(1-w)*sin((t/3%1024|0)**3)+p([0,3,7,12][t>>11&3]+z)*t/11%16+(t>>13&1&&p(0xA7305730>>(t>>14&28)&15)*t/11&32)+48"
		}, {
			"name": "3DIAL",
			"description": "I don't think this is how I'm supposed to melody.",
			"url": "https://dollchan.net/btb/res/44.html#88",
			"date": "2022-06-26",
			"sampleRate": 32000,
			"codeOriginal": "v=t/3,m=v>>10&127^v>>10&v>>9&255,(3E3**(1-t/2**(12-(t>>12&1))%3/3)&64)+64*(1-t/16384%1)*sin((v%16384>>(v>>7&7))**3)**2+1.5*(2**((m/7|0)+[-1,1,1,4,4,6,9][m%7]/12)*t/25*11&32)"
		}, {
			"name": "T!me Tr!al EX",
			"description": "\"T!me Tr!al\" as a full song. Contains changes to the song BPM and also doesn't use the built-in time.",
			"url": "https://dollchan.net/btb/res/44.html#88",
			"remix": {
				"name": "T!me Tr!al",
				"url": "https://dollchan.net/btb/res/44.html#88"
			},
			"date": "2022-07-04",
			"sampleRate": 44100,
			"codeOriginal": "isNaN(this.T)?P=T=0:0,p=v=>2**(v/12),f=e=>T/2**e%1,m=(s=0,S=0)=>max(64*abs(sin(P/50*p([0,3,7,12,15,19,12,7][T>>11+(T>>13+S&3^T>>14+S&1)&7]+(z=12*(h=T>>18&1))+s)))**.25,16),S=[m(),m()+(c=!!(-T>>15&15))*((k=32*sin(70/(F=f(15))**.3)|0)+(Q=(a=p([0,3,7,12][T>>11&3]+z)*P/11%16)*(1+f(19))*F**(1-f(19)))),A=m()+(d=k+(s=T>>15&1&&16*(1-F)*sin((P/3%1024|0)**3))+a+(b=T>>13&1&&p([0,3,7,5+5*h][T>>16&3])*P/11&32)),B=m()+c*d,(q=m(-12)^m()/6)+(i=a+b+s)-c*s,q+c*(i+k/2-m()*f(15)),A,B,(M=(y=m(0,1))&m(-5,1))+b,M+c*(b+Q+k/2),C=M+d+16,M+c*d+16,y+c*(Q+b+(k+s)*h),C,y+a+k/2-b,y*(1-f(19)/2)+a*!h][T>>19]+32,P++,T+=[.75,(T>>15)/64+.5,1,1,1,1,1,1-!c/4,.6,(T>>15)/80-1.15,.8,.8,h/20+.8,.9,.8,.7-h/10][T>>19],S",
			"starred": 1
		}, {
			"name": "ghost code",
			"description": "Where's the visuals?",
			"url": "https://www.reddit.com/r/bytebeat/comments/vu7olj/ghost_code/",
			"date": "2022-07-08",
			"sampleRate": 1e+308,
			"codeOriginal": "this.T??=0,T+=147/640,T%=2**23,V=T|0,q=(v,x=10)=>sin(2**(v/12)*V/x),F=32,p=x=>(F-V/512*3%16)*q(m-z,x)**F,z=[0,2,4,1,0,2,-4,-7][V>>16&7],m='037'[(3*V>>13)%3],a=p(10),b=F*q(-z)+F&F*q(-z,5)+F,c=(F-V/256*3*(1+(V>>14&1^V>>12&1))%F)*sin((V%65536)**3)**2,d=F*sin(500/(V%(8192/3/(1+((V>>11^V>>12^V>>14)&1))))**.1)**2,e=1.5*p(20),f=V*2**((m-z+20)/12)/PI&F,[a,A=a+b,A+=c+d,A+=e,b+c/2+e,b+(c|d)+e,A,A+=f,Z=b+f,Z+=d+e,B=a+b+e+(V>>13&1)*f,B+c/2+d,A,A,Z+a,(-V>>18&1)*a+b][V>>19]",
			"starred": 1
		}, {
			"name": "Δ",
			"description": "First song where I used triangle waves, and it was almost only triangle waves.",
			"url": "https://dollchan.net/btb/res/44.html#127",
			"date": "2022-07-11",
			"sampleRate": 44100,
			"codeOriginal": "p=v=>t*2**v,b=t%2**19,q=t>>14&1,T=z=>(z>>8&1?~z:z)&255,[1,0,r=!(-t>>16&7),1,0,1,r,r][t>>13&7]*T(90**(2-t/8192%1))/4+(4+4*!q)*(1-t/2**(13-q^r)%1)*sin(b**3)-(T(p(c=(t>>18&1)/3)*2.01)+T(p(c)*2.5)-T(p(c)*2.98))/12-T(p(c+'$($(+(+.0+(0+(0('.charCodeAt(t>>13&15)/12)/4)/(4+t/1024%8)+T(p(c+(1*'038'[t>>10&7]+min(44-(b>>10)/16,16))/12))/8+128",
			"starred": 2
		}, {
			"name": "Penultimate Dawn of Time Stability",
			"description": "TIRO remix??? No way!",
			"url": "https://dollchan.net/btb/res/44.html#127",
			"remix": {
				"author": "RealZynx92",
				"name": "better remix of \"The time is running out!\"",
				"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/"
			},
			"date": "2022-07-18",
			"sampleRate": 44100,
			"codeOriginal": "(t/=4)?t%=2621440:(d=Array(12288).fill(0),v=n=0),n>v?0:(n=(1^t>>9&3^t>>11&2)<<11,v=0),q=t&16384?7:5,c=!!(-t>>14&15),f=t/262144%1,r=1-f,M=(V,r)=>((r*t>>12&1)*t*q*'34451223'[t>>8&7]>>(3&-t>>V)&255)/(2+t/512%4),B=1.5*(!((t>>11&13^t>>13&11)&1)*50**(2-t/2048%1)&32),A=t*2**([0,3,7,12,15,19,24,19][t>>11&7]/12+(t>>16&3))%128/6-12+d.shift(),d.push(A*[0,c*.5,.5,c*.5,R=.75,c*R,R,R,R,r*R][t>>18]),s=p=>(t*q*p*1.01&128)/6,s=(s(1)-s(R)+s(2)-s(.5))/(2.2-t/2048%2),K=sin(1E3/++v**.1)*16&~48,C=M(2,1),a=K-B-A-C+s,max(min(([m=M(16,-1),m-c*(B+A-f*(f*K-C)),Z=m+a,m+c*a,m-A,m-A+c*f*(K-B-C),Z,!(-t>>16&3)||t&32768?Z:Z-K-s,m-B-A+r*(s/2-C),r*m-A][t>>18])+128,255),0)"
		}, {
			"name": "WICKED HEXATRNION",
			"description": "A simple melody with a bunch of other effects alongside it.",
			"url": "https://dollchan.net/btb/res/44.html#127",
			"date": "2022-07-23",
			"sampleRate": 32000,
			"codeOriginal": "t%=2**22,m=2**([2*!(-t>>17&3),3+2*!!(t>>17&3),7+2*(t>>18&1),12][t>>12&3]/12),q=sin(t**3),k=6,i=250,f=Z=>(t+2**19)/m%(i++/4)+(k---1?f():(k=6,i=250)),2*f()/6-16+!!(t>>20)*(32*sin(3e2**(t%4096)**.01)*'10010110'[t>>12&7]+(1+.7*!(t>>11&1))*6*q*(1-t/2048%1)+!(-t>>17&7)*16*q*(t/2**17%1)**4)+!!(t>>21)*(24*sin((t/(4+(16+(t>>10)&31))|0)**3)*(1-(t+16384)/32768%1)+(f()/6^-f())/5+84)+!(-t>>20&3)*((1.01*t/m/(1+(t>>10&1))&48)-24)",
			"starred": 1
		}, {
			"name": "The Unescaper",
			"url": "https://dollchan.net/btb/res/44.html#127",
			"date": "2022-08-01",
			"sampleRate": 16000,
			"codeOriginal": "eval(unescape(escape`瑼簨稽娽〬搽孝ⱌ㴱㈸⤬攽吽㹛焽琯㈪⨱㤥ㄬㄭ煝孔崪⨲Ᵽ㵡㴾敶慬⡡孴㸾ㄹ崩ⱂ㵾琾㸱㐦ㄬ圽攨〩ⱷ㵥⠱⤬爽⠧㜷㤸❛琾㸱㔦㍝ⴠⴱ⤯㠬伽爪琪✱㄰㈲ㄲ㈧孴㸾ㄱ☷崬稽稯㉞伥㘴ⱚ㵺幚⼱⸵幺㸾ㅞ娬朽學㴡⠭琾㸱㌦㜩⨨㈭⡴㸾ㄶ☱⤩ⱸⰬⱸⱸⰬⰲⰲ⸳㜵ⰳⰴ嵛琾㸹☱㕝⩲⩴⼴簰Ⱬ㴳㈪獩渨㔱㈯⡴┱㘳㠴⬱⤪⨮ㄩ⨪㈬匽伯⠲⬨琾㸱㔦㈩⤦㌲ⱬ㵺♚ⱹ㴨氯㉼匯㈩⬨氦ㄮ㔪琩ⱎ㴨洽琥㈪⨱㘩⨪㈮㔪偉┱ⱒ㴶㐪ℨ繴㸾ㄶ☳⤪严⡭㸾ㄱ⥼〬渽琦㠱㤲☦㘴⩎♾琾㸷ⱇ㵧┱㘫术㈥ㄶⱋ㴱⸵⩫ⱦ㵴㴾⡴㽹㩬⤫匫䬫⸸⩮⭄ⱔ㵓㴾℡⡾琾㸱㌦㌱⥼籾琪㌾㹓☱ⱳ㴳㈪獩渨琯㈰⸵⩲⤫㌲Ⱶ㵬⩂ⱨ㴨㘫⡾琾㸶⬨琾㸱㈦ㄩ☱㔩⤪丬䄽℡⡾琾㸱㔦ㄵ⤬䌽匫栫猬䠽ㄵ㌶⨲⨪挨✲㈱㈳㌱ㄳㄲ✩ⱡ㵟㴾筦潲⠻搮汥湧瑨㹈㭤⹳桩晴⠩⤻景爨㭤⹬敮杴格䠻搮灵獨⠰⤩㭽ⱡ⠩ⱄ㵣⠧氰䝵田䜰畇甧⤫搮獨楦琨⤬椽㌮㈭圪ㄮ㘬䤽圪㌬搮灵獨⡄⩣⠧椰䤲㈰㈰㈲㈧⤯㐩ⱆ㵦⠱⤬樽浡砨ㄯ㠬圩ⱊ㵷⼨眫⸰〱⤬⡳㵭楮⡛䰫㵣⠧圱ㅪㄱ䨱ㄱ眧⤪⡣⠧䐰い〰䘰〰䐧⤭䰩ⱌ⭒ⱬ⭫ⱹ⭋⭒ⱦ⠰⤬吨ㄱ⤪⡆⭒⤬䰫猬䰫䄪⡳⬨ㄫ圯㈩⩫⤬夽䐫猯㈫䬫港㈫栫匬吨ㄲ⤪⡙⭒⤬䴽汞卼欬䴫港㈫䜫刬䰬䰬伯㈥㌲⭃ⱔ⠱〩⩏⼲┳㈫䄪⡃⭋⤬夬夫ㄮ㔪刬䘫栬䘫栫刬儽䰫ㄱ㘪圬兝孴㸾ㄸ崬㈵㔩⤡㵳㼱㈸㩳`.replace(/u(..)/g,'$1%')))",
			"starred": 2
		}, {
			"name": "polydimension",
			"description": "A \"NΞW DIMΞNSION\" with some arguably weird rhythm.",
			"url": "https://dollchan.net/btb/res/44.html#203",
			"remix": {
				"author": "burlynn n01se",
				"name": "A NΞW DIMΞNSION",
				"url": "https://battleofthebits.com/arena/Entry/A+N%CE%9EW+DIM%CE%9ENSION/42606/"
			},
			"date": "2022-08-06",
			"sampleRate": 22050,
			"codeOriginal": "w=x=>(x%=256)>128?512-2*x:x,c=t/12E3%256,f=c>>6,b=c%4,a=[4/3,8/7][y=f&1],z=c%a,l=c%1,g=c>64,h=random(),r=(a,m,s)=>{for(e=i=0;i<a.length;m*b<a[i++]||e++);return s-b+a[--e]/m},q=t*'8897'[c>>2&3]/3.5,j=c%32>a,max(0,min(255,(c<32||min(1,max(0,3*z-.2))*j)/5*((w(q)+w(1.2*q)-w(1.6*q)-w(1.8*q))*r([0,2,4,6,10,11+f,18,22],3+f,.8)-l*l*w('2484'[32*c&3]*q+w(4*q))*y-(w(t)-w(t/2+l*w(t*(c>>2&15))+w(2*t*(1+(c>>5&3)))))*r([0,3,6,8,12,14],4,1)*g-5/4*w(q/4+w((7-l*(2+(c>>2&3)+(c>>3&1))%1)**5*3)/2)*(c%64>48)-w(r([-4,2,6,9,12,16,20],8-f,2)**4*6E3*(f-1))*(c>128)+h*(16-c%16)**2/4)+z*(1-z*(c%128>80?4:2)%a)**4*80*h*g+(c>32)*(w(2*t+60*sin(z*25))*!j*z+w((1-z)**9*2E3*(1+c%2))*.6)+128))",
			"starred": 2
		}, {
			"name": "ESC▲L▲↑OR P▲R↑Y",
			"description": "Funky beats.",
			"url": "https://dollchan.net/btb/res/44.html#203",
			"date": "2022-09-04",
			"sampleRate": 44100,
			"codeOriginal": "q=t/6144,c=q%32,d=q%16,f=2*(c==d),g=(q/3^q/2+3)%11,m=p=>(g!=(q%11|0))*9*atan(tan(t/p*2**((2*g%14-(g%7>3))/12))),32*sin((q&3?1e3:2e4)/(t%(6144/(1+(c>30)))))+14*atan(tan(t/256*(q&1)))+(q/2+(c>29)+(c>29.5)&1)*9*sin((t/(1+16*q%32|0)%2**20|0)**3)+(1-q%(1/(1+(d-f>10)-(d-f>12))))*5*sin((t%2**20)**3)+m(64)-m(128)+128",
			"starred": 1
		}, {
			"name": "bŽk",
			"url": "https://dollchan.net/btb/res/44.html#203",
			"date": "2022-09-05",
			"sampleRate": 44100,
			"codeOriginal": "t?0:n=0,r=22050,q=t/r,m=(q*3/4^q+8)%9,m!=n?T=r:(q/4|0)!=((q-1/r)/4|0)?T=r:0,n=m,c='44564453'[q/4&7],M=(p,v,e=2)=>sin(t*2**((2*m%14-(m%7>3)+p)/12-4))*max(T/r,0)**e*v,T--,Q=p=>atan(tan(t/p/256*c)),M(-12,24,3)+M(0,16,3)+M(12,16)+M(24,8)+M(31,8,1)+M(36,4,1)+8*(Q(4)^Q(1))+128",
			"starred": 1
		}, {
			"name": "Sequencemania",
			"description": "\"simple step sequencer\" with the fast paced style on it.",
			"url": "https://dollchan.net/btb/res/44.html#203",
			"remix": {
				"author": "neverforgettoleave",
				"name": "simple step sequencer",
				"url": "https://www.reddit.com/r/bytebeat/comments/jmbsoh/simple_step_sequencer/"
			},
			"date": "2022-09-13",
			"sampleRate": 44100,
			"codeOriginal": "x=~t>>14&3,m=v=>t*2**((s='< < H < < M < < J < < F < < H < < < KHC?< < JHC?< < HC?<0 < KHC?8 8 H 8 8 K 8 8 J 8 8 F 8 8 H 8 8 8 H 8 8 K 8 8 J 8 8 F 8 8 H 8 , , H , , H , + J , , F , , H , , 8 KHC?, , JHC?8 8 HC?,0 , KHC?) ) H ) ) K ) ) J ) ) F ) ) H ) ) ) H ) ) K ) ) J ) ) F ) ) H ) '.charCodeAt(t>>11&255))==32?-1/0:(s+v)/12-4)%256,M=v=>m(12+v)-m(v),min(max((M(0)^M(-12.1)^M(.1)^M(6.9))/2+(24*sin(2e3/(t%(2**(14-!x-!(~t>>13&7)-!!x*(t>>7&1)-!(~t>>13&9))))**.1)&~32)+24*(t>>13&1)*sin(abs(t/(1+(t>>10&6))|0)**3)+1.5*(14-2*(t>>8&7-4*!(~t>>13&9)))*sin(t**3)+144,0),255)",
			"codeMinified": "x=~t>>14&3,m=v=>t*2**((s='< < H < < M < < J < < F < < H < < < KHC?< < JHC?< < HC?<0 < KHC?8 8 H 8 8 K 8 8 J 8 8 F 8 8 H 8 8 8 H 8 8 K 8 8 J 8 8 F 8 8 H 8 , , H , , H , + J , , F , , H , , 8 KHC?, , JHC?8 8 HC?,0 , KHC?) ) H ) ) K ) ) J ) ) F ) ) H ) ) ) H ) ) K ) ) J ) ) F ) ) H ) '.charCodeAt(t>>11&255))==32?-1/0:(s+v)/12-4)%256,M=v=>m(12+v)-m(v),min(max((M(0)^M(-12.1)^M(.1)^M(6.9))/2+(24*sin(2E3/(t%2**(14-!x-!(~t>>13&7)-!!x*(t>>7&1)-!(~t>>13&9)))**.1)&-33)+24*(t>>13&1)*sin(abs(t/(1+(t>>10&6))|0)**3)+1.5*(14-2*(t>>8&7-4*!(~t>>13&9)))*sin(t**3)+144,0),255)",
			"starred": 1
		}, {
			"name": "ÐiskΩtroÑ",
			"url": "https://dollchan.net/btb/res/44.html#367",
			"remix": {
				"author": "Zackx",
				"name": "Discobeat",
				"url": "https://dollchan.net/btb/res/204.html#204"
			},
			"date": "2022-09-21",
			"sampleRate": 9930,
			"codeOriginal": "((t&'0032'[t>>10&3]*t|t>>5|t*6&t>>(t>>10-(t>>14&1)+!(~t>>12&1^t>>13&1)&1?14:10)|(t&20?1:5+(3*t>>9&31)))-(t>>5)&255)/2+64+32*cos(99*(3+(t>>10&4))/(t%4096+1)**.1)**2+(~t>>7-!(t>>12&3)&12)*cos(t**3)**2"
		}, {
			"name": "enemy spider",
			"url": "https://dollchan.net/btb/res/44.html#367",
			"cover": {
				"name": "The Giant Enemy Spider",
				"url": "https://youtu.be/pAoDgCF-feg"
			},
			"date": "2022-09-29",
			"sampleRate": 44100,
			"codeOriginal": "T=t/3072,y=-4,M=p=>t*2**(eval('33    33    33  33    33    444 1111  yyyyy 1 8 6 4 3 1 6 4 3 1 0000000000000000'[T+32*((T>>5&3)==2)+32&127])/12-1/4)/p%32>16+8*cos(PI*T/16)&&22,(M(.5)^M(4))/2+M(4)+M(2)+M(1)/2+((t>>5^t>>1)%39>16&&36*(1-T/(2-!(T/2+1&31))%1)*'0010001000100011'[T/2&15])+(32*asin(sin(t/2**('5379'[T/32&3]/12+8)%32*PI)**2)**(T/8%1)&~T%32)+1.5*(T/4&1)*(t/16%16+t/24%16)+((T%8*1e8)**.4&39)+(2e3**(1-T/2%2)&32)"
		}, {
			"name": "qai",
			"description": "Somewhat reminiscent of \"The Evaluator\".",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/ye0jc7/nice_little_melody/itz42ai/?context=3",
				"https://dollchan.net/btb/res/44.html#367"
			],
			"remix": [{
				"name": "The Evaluator",
				"url": "https://dollchan.net/btb/res/44.html#54"
			}, {
				"author": "awogler9124812041",
				"name": "nice little melody",
				"url": "https://www.reddit.com/r/bytebeat/comments/ye0jc7/nice_little_melody/"
			}],
			"date": "2022-10-27",
			"sampleRate": 44100,
			"codeOriginal": "t?0:d=Array(x=3e4).fill(0),Q=t/5e3,k=Q/4%1,q=Q|0,c=('7798'[q/16&3]- -1)/8,w=v=>sin(PI*sin(t/2.7/v*c)),s=(w(q%4+(q/4&3)+1)*22+28*asin(w(16/'11022122'[q&7])))+d.shift(),d.push(s/3+d[x/2]/4+d[x/4]/3),k*s+28*sin(20*(1e3*k)**.4-1e3*(1-k)**(8*Q&32))+128",
			"codeMinified": "t?0:d=Array(x=3E4).fill(0),Q=t/5E3,k=Q/4%1,q=Q|0,c=++'7798'[q/16&3]/8,w=v=>sin(PI*sin(t/2.7/v*c)),s=22*w(q%4+(q/4&3)+1)+28*asin(w(16/'11022122'[q&7]))+d[T=t%x],d[T]=(s/3+d[x/2]/4+d[x/4]/3),k*s+28*sin(20*(1E3*k)**.4-1E3*(1-k)**(8*Q&32))+128"
		}, {
			"name": "extended Ievan Bytebeat Polkka",
			"url": "https://dollchan.net/btb/res/44.html#481",
			"remix": {
				"author": "May_I_Change_My_Name",
				"name": "Ievan Bytebeat Polkka",
				"url": "https://www.reddit.com/r/bytebeat/comments/ye43du/comment/itwj5bt/?utm_source=reddit&utm_medium=web2x&context=3"
			},
			"date": "2022-11-31",
			"sampleRate": 11025,
			"codeOriginal": "t*=11839.744/11025,p=2**((x=(t>>13&3)==2)/6),s=\"1103111211111112110311102222111211110022222211031111022222221103\"[t>>11&63],((~t>>3&(t>>11&1?x?5:4.8:4-(t>>12&1))*t/p&(t>>7)+t*6/p&255)>>1)+(t*((s>2?t*(s-2):~(t*s))>>10&1)*2**((\"hhmmmmooppmmmmmpookkkkooppmmmmmmhhmmmmooppmmmmmptttrppooppmmmmmottttrrppookk kkorrrrppooppmmmmppttttrrppookkkkoorrrrppooppmmmmmm\".charCodeAt(t>>10&127)-85)/12)&96)",
			"starred": 2
		}, {
			"name": "Awaiting Connection",
			"description": "I guess using no arrays is something.",
			"url": "https://dollchan.net/btb/res/44.html#367",
			"date": "2023-01-19",
			"sampleRate": 44100,
			"codeOriginal": "f=(p,r=~0)=>5*t/p&r&15,z=t>>14,q=2**!(~z>>2&15),m=65536,min(t/m/2,1)*(f(98)+f(78)+f(65))+(z>>4&&(1-t/m%1)**2*(t/3.9*q&24))+(z>>5&15&&f(98/2**(z>>3&1),~t>>11)+f(78/q,~t/3>>10)+f(65/q,~t>>9))/1.5+(z>>5&7&&(~t>>11&z&1&&5e9/(1+t%999)%19)+(z>>6&7&&(t%m/3|0)**3*2.94%47*max(1-(2+t/8192)%4,0)))+(z>>6&3&&(3e2/(t/4096%1)**.4&32)*(4486609+(z>>7&1)*7665156620>>(t>>12)&1))",
			"starred": 2
		}, {
			"name": "Doomcall",
			"url": "https://dollchan.net/btb/res/44.html#481",
			"date": "2023-02-11",
			"sampleRate": 32000,
			"codeOriginal": "t||(a=Array,d=[a(24576).fill(0),a(12288).fill(0)],l=[0,0,0,0]),x=t>>17&1,j=t/4096,k=j/4%1,h=(v,p)=>{w=0;for(i=1;i-1<v;i++)w+=(i<=v||v%1)*(i*(t+24*sin(j*PI))*2**(([0,3,7,5,,7,,5,,3+4*x,,12*x-2,8*x,3+4*x][t>>13&15]+p)/12)&256);return w/4/v},(_=>{for(i=0;i<4;i++)l[i]+=((i?l[i-1]:d[0].shift()+d[1].shift())-l[i])/2})(),y=(h(6-(k%.5*2)**.7*6,12)^h(4,19))+l[3],d[0].push(y/4),d[1].push(y/3),k**.5*y+56*sin((k*2e5)**.4)**4+((t>>5^t/(.8+(j*6|0)/6%1)>>1)%39>16&&54*(1-j/(2-!(j/2+1&31))%1)*(50244>>(j/2&15)&1))",
			"codeMinified": "t||(a=Array,d=[a(24576).fill(0),a(12288).fill(0)],l=[0,0,0,0]),x=t>>17&1,j=t/4096,k=j/4%1,h=(v,p)=>{w=0;for(i=1;i-1<v;i++)w+=(i<=v||v%1)*(i*(t+24*sin(j*PI))*2**(([0,3,7,5,,7,,5,,3+4*x,,12*x-2,8*x,3+4*x][t>>13&15]+p)/12)&256);return w/4/v},(_=>{i=4;while(i--)l[i]+=((i?l[i-1]:d[0].shift()+d[1].shift())-l[i])/2})(),y=(h(6-(k%.5*2)**.7*6,12)^h(4,19))+l[3],d[0].push(y/4),d[1].push(y/3),k**.5*y+56*sin((k*2e5)**.4)**4+((t>>5^t/(.8+(j*6|0)/6%1)>>1)%39>16&&54*(1-j/(2-!(j/2+1&31))%1)*(50244>>(j/2&15)&1))",
			"starred": 2
		}, {
			"name": "HARSHSLICE",
			"description": "An interesting and also semi-chaotic song.",
			"url": "https://dollchan.net/btb/res/44.html#481",
			"date": "2023-02-20",
			"sampleRate": 32000,
			"codeOriginal": "z=t%2**20,a=z*2**((t*3>>14^t>>13)%4-2+(t>>12)%3+'03030375'[t>>15&7]/12+(r=t>>19)%2),f=(x,v=1)=>a*2**(x/12)%64<32+16*sin(z*PI/16384)&&(a*2**(x/12)&64)*v,((f(0)^f(-24)^f(-36)^f(7)^f(-5)^f(7,q=r/2&1&&a%2)^f(-5,q))+((z*3*2**(r/4&1&&(t*3>>14-r%2^t*3>>15)%3+r%2)%32768)**.1*4e3&64))*4/3"
		}, {
			"name": "Trackertime",
			"url": "https://dollchan.net/btb/res/44.html#481",
			"remix": {
				"author": "Zackx",
				"name": "the coolest song",
				"url": "https://dollchan.net/btb/res/204.html#401"
			},
			"date": "2023-02-13",
			"sampleRate": 44100,
			"codeOriginal": "r=t/1.3,f=y=>.9*t*2**(y.charCodeAt(z=r>>15&7)/12-4),p=f(a='035703,.'),q=r>>10&3,s=r>>13&1,x=(-r&16383)/8e3,(p&-r>>6)/4%64+p/16%32*x+(s&&f([a,a2='379;3702','7:<>7:35',a2][q])/8%8*(-r&8191)/1e3)+(s^z&1^1&&800*log(1+r%8192)&32)+(r>>14&1&&(r/(5+q)|0)**E%32*x)",
			"codeMinified": "r=t/1.3,f=y=>.9*t*2**(y.charCodeAt(z=k>>9&7)/12-4),k=r>>6,p=f(a='035703,.'),q=k>>4&3,s=k>>7&1,x=(-k&255)/125,(-k&p)/4%64+p/16%32*x+(s&&f([a,a2='379;3702','7:<>7:35',a2][q])/8%8*(-k&127)/15)+(s^z&1^1&&800*log(1+r%8192)&32)+(k>>8&1&&(r/(5+q)|0)**E%32*x)",
			"starred": 1
		}, {
			"name": "Trackermystics",
			"description": "\"Trackertime\" as a full song.",
			"url": "https://dollchan.net/btb/res/44.html#481",
			"remix": {
				"name": "Trackertime",
				"url": "https://dollchan.net/btb/res/44.html#481"
			},
			"date": "2023-02-14",
			"sampleRate": 44100,
			"codeOriginal": "r=t/1.3%2**23,f=y=>.9*t*2**((y.charCodeAt(z=r>>15&7)+(r>>21&2))/12-4),p=f(a='035703,.'),w=(v,x,n=0)=>(r>>v+15&x)!=n,q=r>>10&3,s=r>>13&1,x=(-r&16383)/8e3,u=!w(5,7,4),d=f([a,a2='379;3702','7:<>7:35',a2][q])/8,e=(-r&8191)/1e3,g=w(4,15,15),w(4,3)*(s&&d%8*e)+!w(4,15,11)*(s&&(d&4)*e/2)+w(0,63,31)*(g*w(3,31,16)*(p&-r>>6)/4%64+(w(6,3,u)?w(4,3,u):!w(4,3,3))*(p&r>>9)/4%32+w(5,3,u)*p/16%32*x+g*w(5,1,u)*(s^z&1^1&&800*log(1+r%8192)&32)+w(4,7,u)*(r>>14&1&&(r/(5+q)|0)**E%32*x))",
			"codeMinified": "r=t/1.3%2**23,f=y=>.9*t*2**((y.charCodeAt(z=k>>9&7)+(k>>15&2))/12-4),k=r>>6,p=f(a='035703,.'),w=(v,x,n=0)=>(k>>v+9&x)!=n,q=k>>4&3,s=k>>7&1,x=(-k&255)/125,u=!w(5,7,4),d=f([a,a2='379;3702','7:<>7:35',a2][q])/8,e=(-k&127)/15,g=w(4,15,15),w(4,3)*(s&&d%8*e)+!w(4,15,11)*(s&&(d&4)*e/2)+w(0,63,31)*(g*w(3,31,16)*(p&-k)/4%64+(w(6,3,u)?w(4,3,u):!w(4,3,3))*(p&k>>3)/4%32+w(5,3,u)*p/16%32*x+g*w(5,1,u)*(s^z&1^1&&800*log(1+r%8192)&32)+w(4,7,u)*(k>>8&1&&(r/(5+q)|0)**E%32*x))",
			"starred": 1
		}, {
			"name": "the throwback",
			"url": "https://dollchan.net/btb/res/44.html#481",
			"cover": {
				"name": "Kenet & Rez - Unreal Super Hero 3",
				"url": "https://youtu.be/9STiQ8cCIo0"
			},
			"date": "2023-02-26",
			"sampleRate": 44100,
			"codeOriginal": "(t/=1.25)||(d=Array(15360).fill(0),x=0),x+=2**([[0,3,7,12,15,12,7,3],[3*(t>>15&1),7,10,15,19,15,10,7],[5,9,12,17,21,17,12,9],[0,7,12,19,24,19,12,7]][t>>16&3][t>>12&7]/12+2.015),x%=512,o=(x&256?127-x/2:x/2)+d.shift(),d.push(o/3),o/4+128",
			"starred": 1
		}, {
			"name": "autochxrded",
			"url": "https://dollchan.net/btb/res/44.html#837",
			"remix": {
				"author": "May_I_Change_My_Name",
				"name": "SID \"Autochord\" Effect",
				"url": "https://www.reddit.com/r/bytebeat/comments/123xsp7/sid_autochord_effect/"
			},
			"date": "2023-03-28",
			"sampleRate": 32000,
			"codeOriginal": "t?0:z=0,v=~t>>15,u=t>>13,z+=x=2**((u&1^!(v&3))+(u/4&1^!(v&11))+2*!(v&15)),z%=w=16384,z/w*((C=t=>(S=(p,t)=>t*2**(p[u>>4&3]/12)&255)('0000',t)+S('7745',t)+S([10,9,7,8],t)+S([15,17,11,15],t)>>2)(t-(1+(u&1))*(t/2048%8))>C(t)&&128)+(1-z/w)*(50/(x/z)**.5&128)",
			"codeMinified": "t?0:z=0,v=~t>>15,u=t>>13,z+=x=2**((u&1^!(v&3))+(u/4&1^!(v&11))+2*!(v&15)),z%=w=16384,z/w*((C=t=>(S=(p,t)=>t*2**(p[u>>4&3]/12)&255)('0000',t)+S('7745',t)+S([10,9,7,8],t)+S([15,17,11,15],t)>>2)(t-t/2048%8*(1+(u&1)))>C(t)&&128)+(1-z/w)*(50/(x/z)**.5&128)",
			"starred": 2
		}, {
			"name": "C0D3R4V3",
			"description": "Got a cool synth out of this thanks to pitch sliding techniques.",
			"url": "https://dollchan.net/btb/res/44.html#837",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "please someone remix this",
				"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/please_someone_remix_this/"
			},
			"date": "2023-03-29",
			"sampleRate": 32000,
			"codeOriginal": "(t*=1.2)?0:x=y=0,v=!(~t>>19&3),t%=2**(20-7*(t>>20&1&&t>>12&1^~t>>14&1)),w=sin(t**3)**2,x+=y+=(2.09*2**(\"80)50)80)50)805):0)50%:1)73.:3.7<0)80)<0)80)<08)<0)80)<0:137.3578,%5,%8,)5,%:,5)7.'3.'7.'3'.875:<0)80)<0)80)<08)<0)80)<0:137.357\".charCodeAt(t>>12&127)/12-5)-y)/200,u=s=>(r=x*s%128,r/2^r/(2+t/2048%2)^r/6),(u(1)^v*u(2))+(x&32^v*x*2&32)+((t%2**(14-!(~t>>14&3)-!(~t>>15&5)))**.4*99&64)+(~t>>7&31)*w+(t>>14&1&&~t>>8&63)*sin((t/16^t/8)**3)**2+t**18/8e106*w",
			"starred": 1
		}, {
			"name": "skyrnpqriy",
			"description": "Simple loop with a heavy kick.",
			"url": "https://dollchan.net/btb/res/44.html#837",
			"remix": {
				"author": "getDolphinedLol",
				"name": "rgrekfjhufheghzufzghufijhdsuhgueirbghfjkjkhags",
				"url": "https://www.reddit.com/r/bytebeat/comments/12dfkuc/rgrekfjhufheghzufzghufijhdsuhgueirbghfjkjkhags/"
			},
			"date": "2023-04-06",
			"sampleRate": 48000,
			"codeOriginal": "(t/=6)%262144?0:a=b=0,a+=b+=((1+(t>>10&3))/[1,1.5,5/4,4/3][t>>14&3]/6-b)/500,f=x=>2**(x/12+1)*a&127^2**(x/12)*a&127,y=t/4096%1,y**.2*(f(12)^f(-b)^f(a/64%1/a*5e3))+(1-y)*(1e3*(t%4096)**.3&128)"
		}, {
			"name": "preciserr",
			"description": "A song created with the use of precision errors in floats.",
			"url": "https://dollchan.net/btb/res/44.html#1367",
			"date": "2023-04-21",
			"sampleRate": 32000,
			"codeOriginal": "x=t&t>>12,y=t/4096,z=!(~t>>13&15),(y/x%1==y%x/x)*(y/2**!z%1)**.5*127+(50*(t%2**(13-z))**.5&128)"
		}, {
			"name": "ventures",
			"url": "https://dollchan.net/btb/res/44.html#1367",
			"date": "2023-05-08",
			"sampleRate": 32000,
			"codeOriginal": "a=p=>t*11/400*2**(p/12),z=p=>1-2*(a(p)&1),r=p=>2*asin(sin(a(p)*PI))/PI,q=t/4096,s=t>>10,((2-q%2)*z([0,7,12,19,5,7,12,17][s>>2+(s>>2&3)&7])+(q/2&1)*z('0507'[u=s>>7&3]-36)+(q/8%.5)*z([0,7,12,19][s&3]+12)+r('0525'[u]-12)+r(-'5350'[u]))*24+128",
			"codeMinified": "a=p=>t*11/400*2**(p/12),z=p=>1-2*(a(p)&1),r=p=>sin(a(p)*PI),q=t/4096,s=t>>10,((2-q%2)*z([0,7,12,19,5,7,12,17][s>>2+(s>>2&3)&7])+(q/2&1)*z('0507'[u=s>>7&3]-36)+q/8%.5*z([0,7,12,19][s&3]+12)+r('0525'[u]-12)+r(-'5350'[u]))*24+128",
			"starred": 1
		}, {
			"name": "name melody",
			"description": "Used the concept of using 'lhphr' name as a melody.",
			"url": "https://dollchan.net/btb/res/44.html#1367",
			"date": "2023-05-29",
			"sampleRate": 44100,
			"codeOriginal": "N='lhphr',s=t/.75,t||(d=Array(l=12288).fill(0),D=Array.of(...d)),C=N[c='charCodeAt']((2+(s>>17)&3)+!(2+(-s>>17)&3))%16/12-4/3*!(-s>>18&3),z=(t*2**(N[c]((M=s*2>>14&15)%6)%11/12-2-C)&31*(M<14))+d[t%l],d[t%l]=z/2,x=(p,e=3)=>16*sin(t*2**(p/12-C)/32)**e/((s/16384&7)+1),Z=x(-12,15)+x(0)+x(4)+x(7)+D[t%l],D[t%l]=Z/1.3,z+Z+128"
		}, {
			"name": "Niarix Visions",
			"description": "Rather complicated with it containing pitch sliding and an unique method of approaching the melody via accessing the this variable.",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/142alfa/niarix_visions/",
				"https://dollchan.net/btb/res/44.html#1367"
			],
			"date": "2023-05-31",
			"sampleRate": 48000,
			"codeOriginal": "t?0:d=Array(w=3*(u=4096)).fill(v=y=0),t%=2**23,Y=t/u,s=sin,c=(x,y,z)=>t*2**(y[Y>>4&7]/12+z)%16>8+4*s(t*PI/x),e=(y,z=0)=>!(z&&z-1)*c(16*u,'22572253',y-6)+!z*(c(14*u,'00260021',y-5.5)+c(3*w,'33693364',y-5.5)),h=!!(~Y>>3&15),b=Y>>4&2,x=b/b&&43-max(t/2/u%32,31),l=12,m=10+b,n=m+b,o='030-3-5-8-l-8-5-0-353-0-5-m-nxxx'[Y&31],y+=(z=2**((+o+2||this[o])/12))*(~t>>11&1||Y%64>61)||-y,v+=z||-v,B=y&32^y/2.01&32,F=y/2.02&16,a=[0,A=y/2%32,2*A+h*(B-A),A+B-F,A^B-F,(h?y:v)/2&48,I=v/2&32,I+F,I+h*(F-B),k=I+B-F,k-y%32,I+h*(A+F),B,B,B+I,I][f=Y>>7]+d[t%w],d[t%w]=a/2,j=5*e(3.01),C=32*s(3e3*(t%u)**.01)*(307599633+20446*u*b>>(Y&31)&1),D=s(t**3)*8*(!(Y&3&&~Y>>1&31)/2+1-Y%1),min(max(a-[g=(i=l*s(t*PI/u/32)**2+6)*e(1),g,q=h&&g+D,G=4/3*g+C+D-8*e(2),G,q+h*C,H=i*e(2)+j,H,r=h&&D+H,G,G+j,h&&g+j+C,C+(J=2*i*e(0,1)),p=C+D+J,p+H/2,r][f]+128,0),255)",
			"starred": 2
		}]
	}, {
		"author": "baenhohoho",
		"children": [{
			"name": "Noisy Beats but only stereo",
			"url": "https://www.reddit.com/r/bytebeat/comments/ukwl5r/noisy_beats_but_only_stereo/",
			"remix": {
				"author": "tejeez",
				"name": "Noisy beats",
				"url": "https://youtu.be/GtQdIYUtAHg?t=2m55s"
			},
			"date": "2022-05-08",
			"stereo": true,
			"codeOriginal": "[((-t&4095)*(255&t*(t&t>>13))>>12),(127&t*(234&t>>8&t>>3)>>(3&t>>14))]",
			"codeMinified": "[(-t&4095)*(255&t*(t&t>>13))>>12,127&t*(234&t>>8&t>>3)>>(3&t>>14)]"
		}, {
			"name": "chomik",
			"url": "https://www.reddit.com/r/bytebeat/comments/uwnd1o/chomik/",
			"date": "2022-05-24",
			"sampleRate": 44100,
			"codeOriginal": "(t=t/1.5,a=(sin(t/16*[1.5,1][t>>12&1]*[1,0.9,0.8,0.75][t>>16&3])*32)*(-t>>4&255)>>8,b=(t/0.78/4*[1,1.5][t>>8&1]*[1,0.9,0.8,0.75][t>>10&3]&8),c=(sqrt(2048*(t&32767)/8))%24,d=(random()*256)*[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0][t>>8&15]/8,e=t/1>>t/512&64,f=((t*[1,0.9,0.8,0.75][t>>17&3]/0.78%127.8)+(t*[1,0.9,0.8,0.75][t>>17&3]/0.78%256))/10,g=[1,0.9,0.8,0.75][t>>15&3]*t/4/0.78&8,h=c&t>>9,i=f&100/2,j=(a*128)%256/20+8,[a,a+b,a+b+c,a+b+h,a+b+c+d+e+h,a+e+b,a+j+e,a+h+i+j,a+f+e,a+f+e+h,a+f+e+i,a+b+c+d+e+f+g+h+i+j,a+b+e,a+b+e,a+b+e+g+h+i+j,a+b+c+d+e+f+h+i,a+c+d+e+f+g+h+i+j,a+b+e+h+i][t>>20])/1.5+32",
			"codeMinified": "(t/=1.5,a=32*sin(t/16*[1.5,1][t>>12&1]*[1,.9,.8,.75][t>>16&3])*(-t>>4&255)>>8,b=t/.78/4*[1,1.5][t>>8&1]*[1,.9,.8,.75][t>>10&3]&8,c=sqrt(2048*(t&32767)/8)%24,d=256*random()*[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0][t>>8&15]/8,e=t/1>>t/512&64,f=(t*[1,.9,.8,.75][t>>17&3]/.78%127.8+t*[1,.9,.8,.75][t>>17&3]/.78%256)/10,g=[1,.9,.8,.75][t>>15&3]*t/4/.78&8,h=c&t>>9,i=f&50,j=128*a%256/20+8,[a,a+b,a+b+c,a+b+h,a+b+c+d+e+h,a+e+b,a+j+e,a+h+i+j,a+f+e,a+f+e+h,a+f+e+i,a+b+c+d+e+f+g+h+i+j,a+b+e,a+b+e,a+b+e+g+h+i+j,a+b+c+d+e+f+h+i,a+c+d+e+f+g+h+i+j,a+b+e+h+i][t>>20])/1.5+32"
		}, {
			"name": "fijsdfrdifjfred",
			"url": "https://www.reddit.com/r/bytebeat/comments/uy1yty/fijsdfrdifjfred/",
			"date": "2022-05-26",
			"sampleRate": 32000,
			"codeOriginal": "(sin((t/32/5.0931/4*[12,12,9,12,12,9,12,12,9,12,12,9,12,9,12,9][t>>12&15]*[1,0.89,0.8,0.75][t>>17&3]))*128)&175",
			"codeMinified": "128*sin(t/32/5.0931/4*[12,12,9,12,12,9,12,12,9,12,12,9,12,9,12,9][t>>12&15]*[1,.89,.8,.75][t>>17&3])&175",
			"starred": 1
		}, {
			"name": "how to do echo without using array(number).fill(0)",
			"url": "https://www.reddit.com/r/bytebeat/comments/14dhu1n/how_to_do_echo_without_using_arraynumberfill0/",
			"remix": {
				"name": "the 42 melody",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			},
			"date": "2022-06-19",
			"codeOriginal": "x=q=>(m=(234&q>>10),z=q*m%256/4),x(t)+x(t-2048)/2*(8192<t)+x(t-3072)/4*(16384<t)+x(t-4096)/8*(32768<t)+x(t-6144)/16*(32768<t)+x(t-8192)/32*(32768<t)+x(t-12288)/64*(4096<t)",
			"codeMinified": "x=q=>(m=234&q>>10,z=q*m%256/4),x(t)+x(t-2048)/2*(8192<t)+x(t-3072)/4*(16384<t)+x(t-4096)/8*(32768<t)+x(t-6144)/16*(32768<t)+x(t-8192)/32*(32768<t)+x(t-12288)/64*(4096<t)"
		}, {
			"name": "what",
			"url": "https://www.reddit.com/r/bytebeat/comments/v3ro35/what/",
			"date": "2022-07-03",
			"sampleRate": 32000,
			"codeOriginal": [
				"(Melody=t/[1.2,0,1.2,0,1.2,1.2,NaN,NaN,1,0,1,0,1,1,NaN,NaN,0.8,0,0.8,0,0.8,0.8,0,Infinity,0.9,0,0.9,0,0.9,0.9,0,0][t>>12&31]/4&63|t^t,",
				"Kick=sqrt(1e3/5*(t%32768))&32,",
				"Snare=(sin(t|t*1.5)*32*(-t>>3&255)>>8)*\"10001010\"[t>>11&7]+32,",
				"Hihat=(((sin(t|t*5))*32)*(-t>>4&255)>>9)+32,",
				"what=(t*\"12344321\"[t>>9&7]&-t>>5)*[0,0,1,0][t>>13&3]/4&63,",
				"Melody+Kick+Snare+Hihat+what)/1.2"
			],
			"codeMinified": "((t>>12+(t>>14&1)&1||t/[1.2,1,.8,.9][t>>15&3]/4&63)+(sqrt(t%32768*200)&32)+(32*sin(t|1.5*t)*(-t>>3&255)>>8)*'10001010'[t>>11&7]+64+(32*sin(t|5*t)*(-t>>4&255)>>9)+((t*'12344321'[t>>9&7]&-t>>5)*!(2+(t>>13)&3)/4&63))/1.2"
		}, {
			"name": "goose melody but atari square",
			"url": "https://www.reddit.com/r/bytebeat/comments/13me24e/goose_melody_but_atari_square/",
			"remix": {
				"author": "getDolphinedLol",
				"name": "goose melody",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0t3j1/goose_melody/"
			},
			"date": "2023-05-20",
			"sampleRate": 44100,
			"codeOriginal": "T=t/1.2,V=x=>(this.c=[4,0,4,0,4,3.8,4,4.8,5,0,4.8,0,4,3.9,3.8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0,4,0,4,0,4,3.8,4,5,7,0,7,0,7,7,8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0][(T>>12)%64],255&c*-t/1.2/2*x/64-64),SS=(c,o,r,d)=>((255&t>>4|255)>>4*(V(1)*V(2)&V(2)/4)+(2**(c>>r-o)&64&-t%d)/12)/4,(SS())*2",
			"codeMinified": "T=t/1.2,V=x=>(this.c=[4,0,4,0,4,3.8,4,4.8,5,0,4.8,0,4,3.9,3.8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0,4,0,4,0,4,3.8,4,5,7,0,7,0,7,7,8,3.7,3,3.1,3,3.1,2,0,1.5,0,1,0,.5,0,1,0,.5,0][(T>>12)%64],255&c*-t/1.2/2*x/64-64),SS=(c,o,r,d)=>((255&t>>4|255)>>4*(V(1)*V(2)&V(2)/4)+(2**(c>>r-o)&64&-t%d)/12)/4,2*SS()"
		}, {
			"name": "getdolphinedlol type beat",
			"url": "https://www.reddit.com/r/bytebeat/comments/153i0lm/getdolphinedlol_lilfluffygoattt_type_beat/",
			"remix": {
				"author": "getDolphinedLol",
				"name": "a$$ music",
				"url": "https://www.reddit.com/r/bytebeat/comments/si40ks/a_music/"
			},
			"date": "2023-07-19",
			"sampleRate": 32000,
			"codeOriginal": "((([t*sin(t>>4),t*sin(t>>2)][t>>14&1]&-t>>7)&127)+(t/7*' 4 4 4 6'[t>>13&7]&63)+(a=(t*'4523'[t>>16&3]/7),a%190+a%128)/2+(3e4/(t&16383)&64))/1.5",
			"codeMinified": "(([t*sin(t>>4),t*sin(t>>2)][t>>14&1]&-t>>7&127)+(t/7*' 4 4 4 6'[t>>13&7]&63)+(a=t*'4523'[t>>16&3]/7,a%190+a%128)/2+(3E4/(t&16383)&64))/1.5"
		}, {
			"name": "worst remix of aturned777",
			"url": "https://www.reddit.com/r/bytebeat/comments/153ght9/worst_remix_of_aturned777/",
			"remix": {
				"author": "aturned777",
				"url": "https://dollchan.net/btb/res/3.html#406"
			},
			"date": "2023-07-19",
			"sampleRate": 32000,
			"mode": "Signed Bytebeat",
			"codeOriginal": "r=x=>(t?0:a=Array(8192).fill(0),c=x+a.shift(),a.push(c/1.5),c),l=t/(4+(t>>15&15))*(1+(t>>13&3))*[1,2,4,8][t>>17&3]*4,k=sin(l*PI/127+sin(l*PI/256)+asin(sin(l*PI/32))+acos(cos(l*PI/125)/2)+tanh(tan(l*PI/54))*cos(t*PI/16384)+sign(cos(l*PI/32+1)))*64*1.0001**(-t%8192),r(k)/2-(2.5**(-t/512%32+8)&64)-random()*32*1.0003**(-t%4096)+32"
		}, {
			"name": "echo_testing",
			"url": "https://www.reddit.com/r/bytebeat/comments/1546vk4/comment/jsqtpz7/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "aturned777",
				"url": "https://dollchan.net/btb/res/3.html#406"
			},
			"date": "2023-07-20",
			"sampleRate": 32000,
			"codeOriginal": "r=(x,y,z)=>(t||(a=Array(n=12287).fill(y)),c=x%256+a[t%n],a[t%n]=c*z,c),c=t*8/(4+(t>>15&3))*(1+(t>>13&3))>>!(t>>12&3)&128,r(c*1.00009**(-t%16384)%256/4,64,.8)*2",
			"starred": 1
		}]
	}, {
		"author": "Anonymous",
		"name": "I have made a thing#1",
		"url": "https://dollchan.net/btb/res/3.html#78",
		"date": "2022-06-19",
		"codeOriginal": [
			"x=6.28318530718*4*t/44100,",
			"a=1200-(1200>>((t>>16)%2)),",
			"b=400+(400>>((t>>14)%4)),",
			"c=200+(400>>((t>>10)%4)),",
			"d=200+(200>>((t>>12)%4)),",
			"(sin(x*a)+sin(x*b)+sin(x*c)+sin(x*d)+4)*30"
		],
		"codeMinified": "x=6.28318530718*4*t/44100,a=1200-(1200>>(t>>16)%2),b=400+(400>>(t>>14)%4),c=200+(400>>(t>>10)%4),d=200+(200>>(t>>12)%4),30*(sin(x*a)+sin(x*b)+sin(x*c)+sin(x*d)+4)"
	}, {
		"author": "hcdphobe",
		"children": [{
			"name": "short melody of 24 oras",
			"url": "https://www.reddit.com/r/bytebeat/comments/vrn5o6/short_melody_of_24_oras/",
			"date": "2022-07-05",
			"sampleRate": 22050,
			"codeOriginal": "drum1=(t*random()|t>>6)&49,drum2=(((t>>5)*(t>>3))*[0,1][(t>>13)%2]*t|t>>6)&200,melody=([3.05,0,0,3.05,0,0,0,3.05,3.4,0,0,3.4,0,0,0,3.39,3.6,0,0,3.6,0,0,0,3.6,4.05,0,4.05,0,4.55,0,4.55][(t>>12)%32]*t)&129,melody+drum1+drum2",
			"codeMinified": "drum1=(t*random()|t>>6)&49,drum2=((t>>5)*(t>>3)*[0,1][(t>>13)%2]*t|t>>6)&200,melody=[3.05,0,0,3.05,0,0,0,3.05,3.4,0,0,3.4,0,0,0,3.39,3.6,0,0,3.6,0,0,0,3.6,4.05,0,4.05,0,4.55,0,4.55][(t>>12)%32]*t&129,melody+drum1+drum2"
		}, {
			"name": "sonic drowning ost",
			"url": "https://dollchan.net/btb/res/163.html#253",
			"cover": {
				"name": "Sonic 1 Music - Drowning",
				"url": "https://youtu.be/9Yw5jkAHgME"
			},
			"date": "2022-11-19",
			"sampleRate": 44100,
			"codeOriginal": "q=t,a=6.05,b=6.4,t*b/4,v=t/4*[a/4,b/4][q>>15&1]&128,f=((((t/4*[a/4,b/4][q>>15&1]*[1,4][q>>13&1]&127)+32)&128?-q>>5:0)&255)/2,u=(t*12)*sin(t>>4)&128?-(q>>7)+384:0,i=(t*12)*sin(q>>4)&128?-(q>>5):0,ac=min(v/2+f+((u)&255)/3+((i)&255)/5,255)",
			"codeMinified": "q=t,a=6.05,b=6.4,t*b/4,v=t/4*[a/4,b/4][q>>15&1]&128,f=(((t/4*[a/4,b/4][q>>15&1]*[1,4][q>>13&1]&127)+32&128?-q>>5:0)&255)/2,u=12*t*sin(t>>4)&128?-(q>>7)+384:0,i=12*t*sin(q>>4)&128?-(q>>5):0,ac=min(v/2+f+(u&255)/3+(i&255)/5,255)"
		}, {
			"name": "ctrl+v.hc",
			"url": "https://dollchan.net/btb/res/163.html#263",
			"remix": {
				"author": "getDolphinedLol",
				"name": "Ctrl+V",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0ytc9/ctrlv/"
			},
			"date": "2022-11-28",
			"sampleRate": 44100,
			"codeOriginal": "(([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)/2+((Math.sqrt(4000*(t&16383))&128)|t>>5&128)/1.5+(Math.random()*((-t>>6)%64+64))+(4000000/(16383+t&32767)&192)/1.5)/1.8",
			"codeMinified": "(([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/2+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>2&128)/2+(sqrt(4E3*(t&16383))&128|t>>5&128)/1.5+random()*((-t>>6)%64+64)+(4E6/(16383+t&32767)&192)/1.5)/1.8",
			"starred": 1
		}, {
			"name": "sketchy attempt of calce",
			"url": "https://dollchan.net/btb/res/163.html#375",
			"date": "2023-01-28",
			"sampleRate": 22050,
			"codeOriginal": "x=((t/2*[1,sin(t>>2),1.22,sin(t>>2),1.12,sin(t>>2),1.5,sin(t>>2),][t>>13&7]|t>>5)&255)/2,c=((random()*t)&128|t>>3)&128?0:44,r=(230000/(t&8191))&64,x+c+r*1.15",
			"codeMinified": "a=sin(t>>2),x=((t/2*[1,a,1.22,a,1.12,a,1.5,a][t>>13&7]|t>>5)&255)/2,c=(random()*t&128|t>>3)&128?0:44,r=23E4/(t&8191)&64,x+c+1.15*r"
		}, {
			"name": "combination (Death 1000666ZZ + Street Surfer)",
			"url": "https://www.reddit.com/r/bytebeat/comments/10qo7mm/someone_has_posted_a_bytebeat_link_in_comments_on/",
			"remix": {
				"author": "raer",
				"name": "Street Surfer",
				"url": "http://www.pouet.net/topic.php?which=8357&page=4#c388494"
			},
			"date": "2023-02-01",
			"codeOriginal": "(t*([(t>>10^t>>11|t>>12&t>>13),(t>>8^t>>6|t>>5&t>>9),(t>>11^t>>14|t>>13&t>>15)][(t>>14^t>>15^t>>13)%3])|t>>([2,3,2,3][(t>>13^t>>12^t>>11)%4]))&(t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t))",
			"codeMinified": "(t*[t>>10^t>>11|t>>12&t>>13,t>>8^t>>6|t>>5&t>>9,t>>11^t>>14|t>>13&t>>15][(t>>14^t>>15^t>>13)%3]|t>>[2,3,2,3][(t>>13^t>>12^t>>11)%4])&(t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t))"
		}, {
			"name": "remix of \"Death chase\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/qh9hhr/comment/j87nntn/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "SthephanShi",
				"name": "Death chase",
				"url": "https://www.reddit.com/r/bytebeat/comments/qh9hhr/death_chase/"
			},
			"date": "2023-02-12",
			"sampleRate": 44100,
			"codeOriginal": "t/=4,c=523.25,cs=554.36,e=659.26,g=784,min(255,(((t*[cs,e,cs,g,cs,e,cs,c][(t>>14)%8]/(t&2<<16?440:220)*(3-(1&t>>9))>>(3&t>>8)|t>>([5,4,4,4,4,4,4,3,4,4,4,3,4,4,4,4,5,4,4,4,4,4,4,3,5,4,4,4,5,4,4,4][(t>>12)%32]))&127)+(3E5/(t&4095)&128-64)+(random()*(((-t>>4)%64)+64))+(t/2/440*(t&16384?t&32768?t&65536?c:g:e:cs)&64)*'10'[t>>11&1]+((t*'01'[t>>12&1]*sin(t/4*5>>2)&-t>>4)&255)/1.5+(3E5/(t%4096)&192)/1.4)/2.3)",
			"codeMinified": "t/=4,c=523.25,cs=554.36,e=659.26,g=784,min(255,(((t*[cs,e,cs,g,cs,e,cs,c][(t>>14)%8]/(t&131072?440:220)*(3-(1&t>>9))>>(3&t>>8)|t>>[5,4,4,4,4,4,4,3,4,4,4,3,4,4,4,4,5,4,4,4,4,4,4,3,5,4,4,4,5,4,4,4][(t>>12)%32])&127)+(3E5/(t&4095)&64)+random()*((-t>>4)%64+64)+(t/2/440*(t&16384?t&32768?t&65536?c:g:e:cs)&64)*'10'[t>>11&1]+(t*'01'[t>>12&1]*sin(t/4*5>>2)&-t>>4&255)/1.5+(3E5/(t%4096)&192)/1.4)/2.3)",
			"starred": 1
		}, {
			"name": "remix of \"kernkraft 400\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/112nn9c/remix_of_melody_of_kernkraft_400_by_zombie_nation/",
			"remix": {
				"author": "Zackx",
				"name": "kernkraft 400",
				"url": "https://dollchan.net/btb/res/204.html#280"
			},
			"date": "2023-02-15",
			"sampleRate": 44100,
			"codeOriginal": "t*=10000/44100,w=(t/8*[1,4,4.8,5.4,6,2,1,2,1,4,4.8,5.4,6,6.33,6,4.8,5.4,2.7,1.35,2.7,4.8,3,6,4,1,2,1,2,1,2,1,2][(t>>11)%32]*1.52),c=(100000/(t&4095)&64),e=(t*[1,1,1,1,4/6,4.8/8,1,1][t>>13&7]*1.52)%256/4,v=random()*((-t>>5)%64+64),k=32,min(255,w%k+w*1.99%k+w*.505%k+c+e+v/1.2)",
			"codeMinified": "t*=1E4/44100,w=t/8*[1,4,4.8,5.4,6,2,1,2,1,4,4.8,5.4,6,6.33,6,4.8,5.4,2.7,1.35,2.7,4.8,3,6,4,1,2,1,2,1,2,1,2][(t>>11)%32]*1.52,c=1E5/(t&4095)&64,e=t*[1,1,1,1,4/6,.6,1,1][t>>13&7]*1.52%256/4,v=random()*((-t>>5)%64+64),k=32,min(255,w%k+1.99*w%k+.505*w%k+c+e+v/1.2)",
			"starred": 1
		}, {
			"name": "ARRAY 44100HZ SONG",
			"url": "https://dollchan.net/btb/res/163.html#471",
			"remix": {
				"author": "getDolphinedLol",
				"name": "ARRAY 11025HZ SONG",
				"url": "https://www.reddit.com/r/bytebeat/comments/s1cai7/array_11025hz_song/"
			},
			"date": "2023-02-25",
			"sampleRate": 44100,
			"codeOriginal": "this.n??=0,n+=.25,this.q??=0,q+=1,this.e??=0,e+=1,d=(e>>2)*(e>>2)*(e>>2),c=[1,0,2,0,3,0,2.4,0][(n>>12)%8],f=[4/3,0,8/3,0,3.95,0,6.7/2,0][(n>>12)%8],g=[1.5,0,3,0,4.5,0,3.5,0][(n>>12)%8],z=cbrt(n%4096)*10,W=x=>([c,c,f,g][(n>>15)%4]*n*x+([0,128][(n>>12)%2]*sin(d)&127)|n>>3)&255,q>=507907&&q<524288?(((sin(n>>3)*n)&-n>>4)&255)/1.2:[W(1)/2.5,W(1)/2.5+W(2)/2.5/2,W(1)/2.5+W(2)/2.5/2+W(4)/2.5/3,W(1)/2.5+W(2)/2.5/2+W(4)/2.5/3+W(8)/2.5/4][(n>>15)%4]/1.5+(q>524287?q=0:0)+(sin(z)*30)+50",
			"codeMinified": "this.n??=0,n+=.25,this.q??=0,q++,q%=524287,this.e??=0,e++,d=(e>>2)**3,c=[1,0,2,0,3,0,2.4,0][(n>>12)%8],f=[4/3,0,8/3,0,3.95,0,3.35,0][(n>>12)%8],g=[1.5,0,3,0,4.5,0,3.5,0][(n>>12)%8],z=10*cbrt(n%4096),W=x=>([c,c,f,g][(n>>15)%4]*n*x+([0,128][(n>>12)%2]*sin(d)&127)|n>>3)&255,q>=507907&&q<524288?(sin(n>>3)*n&-n>>4&255)/1.2:[W(1)/2.5,W(1)/2.5+W(2)/5,W(1)/2.5+W(2)/5+W(4)/7.5,W(1)/2.5+W(2)/5+W(4)/7.5+W(8)/10][(n>>15)%4]/1.5+30*sin(z)+50"
		}, {
			"name": "vony remix of awesome level",
			"url": "https://dollchan.net/btb/res/163.html#479",
			"remix": {
				"author": "SthephanShi",
				"name": "Awesome level"
			},
			"date": "2023-02-26",
			"sampleRate": 32000,
			"codeOriginal": "t/=4,((500000/(t*4&65535>>(t*4>>15&3|-t*4>>13&3^t*4>>12&3|t>>16&3))&64)*1.8/1.5+((t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>2)&255)/6+((t*2*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>2)&255)/6+random()*((-t>>(t&2048?4:5))%64+64)+((t*(t&16384?6:5)*(3+(3&t>>14))>>(3&t>>8)|t>>4)&255)/5)/1.5",
			"codeMinified": "t/=4,(1.8*(5E5/(4*t&65535>>(4*t>>15&3|4*-t>>13&3^4*t>>12&3|t>>16&3))&64)/1.5+((t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>2)&255)/6+((2*t*(t&16384?6:5)*(3+(3&t>>(t&2048?7:14)))>>(3&t>>9)|t>>2)&255)/6+random()*((-t>>(t&2048?4:5))%64+64)+((t*(t&16384?6:5)*(3+(3&t>>14))>>(3&t>>8)|t>>4)&255)/5)/1.5"
		}, {
			"name": "remix of short simple music",
			"url": "https://dollchan.net/btb/res/163.html#510",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "short simple music",
				"url": "https://www.reddit.com/r/bytebeat/comments/s7cb1v/short_simple_music_based_on_simple_step_sequencer/"
			},
			"date": "2023-03-03",
			"sampleRate": 32400,
			"codeOriginal": "e=x=>(t*x*[2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,1.6,1.6,0,0,1.6,1.6,2,2,1.6,1.6,0,0,1.6,1.6,2,2,1.74,1.74,2.22,2.35,1.74,2.22,2.35,2.22,1.74,1.74,2.22,2.35,1.74,2.35,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22][t>>12&63]|t>>[5,6,5,5][t>>16&3])%256,(([2,1.6,1.74,2][t>>16&3]*t/4&t>>6)&128)/2+(100000/(t%16384)&64)+e(1)/4+e(.5)/4+e(2)/4",
			"codeMinified": "e=x=>(t*x*[2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,1.6,1.6,0,0,1.6,1.6,2,2,1.6,1.6,0,0,1.6,1.6,2,2,1.74,1.74,2.22,2.35,1.74,2.22,2.35,2.22,1.74,1.74,2.22,2.35,1.74,2.35,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22,2,0,2.35,3,2,2,2.35,2.22][t>>12&63]|t>>'5655'[t>>16&3])%256,([2,1.6,1.74,2][t>>16&3]*t/4&t>>6&128)/2+(1E5/(t%16384)&64)+(e(1)+e(.5)+e(2))/4"
		}, {
			"name": "DJ Adding sinewaves",
			"url": "https://dollchan.net/btb/res/163.html#518",
			"remix": {
				"author": "Zackx",
				"name": "Adding sinewave",
				"url": "https://dollchan.net/btb/res/204.html#249"
			},
			"date": "2023-03-03",
			"sampleRate": 8100,
			"codeOriginal": "c=x=>sin(16*cbrt(t&8191>>x))*32,z=[1,.8865,.79,.593][(t>>14)%4]*[.5,1,2,4][3&t>>10],((z*t%100+z*t%100.5+z*t%67)/1.5+32+32*sin(z*t/1.34))/2+c([1,1,1,2,1,1,3,2][t>>12&7])+64",
			"codeMinified": "c=x=>32*sin(16*cbrt(t&8191>>x)),z=[1,.8865,.79,.593][(t>>14)%4]*[.5,1,2,4][3&t>>10],((z*t%100+z*t%100.5+z*t%67)/1.5+32*sin(z*t/1.34)+32)/2+c('11121132'[t>>12&7])+64",
			"starred": 1
		}, {
			"name": "my own hard-coded music",
			"url": "https://dollchan.net/btb/res/163.html#518",
			"date": "2023-03-04",
			"sampleRate": 8100,
			"codeOriginal": "w=t**(t/1414&3)%256,y=cbrt((t*1024/1414&4095))*1000&128,r=(t*2*((t*1024/1414>>12&7)+2)/(4+(t*1024/1414>>12&5))&127)+32&128,w/3+y/2+r/2",
			"codeMinified": "w=t**(t/1414&3)%256,y=1E3*cbrt(1024*t/1414&4095)&128,r=(2*t*((1024*t/1414>>12&7)+2)/(4+(1024*t/1414>>12&5))&127)+32&128,w/3+y/2+r/2",
			"starred": 1
		}, {
			"name": "DJ 42-melody",
			"url": "https://www.reddit.com/r/bytebeat/comments/11s0os5/dj_42melody500_members/",
			"remix": {
				"name": "the 42 melody",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			},
			"date": "2023-03-15",
			"mode": "Signed Bytebeat",
			"sampleRate": 32000,
			"codeOriginal": "t/=4,(t*(42&t>>10)%256/4+sin(cbrt(t%4096)*16)*64-43+((t&4096)?(random()*t&-t>>5)%256/2:0))/2",
			"codeMinified": "t/=4,(t*(42&t>>10)%256/4+64*sin(16*cbrt(t%4096))-43+(t&4096&&(random()*t&-t>>5)%256/2))/2"
		}, {
			"name": "slowlovania",
			"url": "https://www.reddit.com/r/bytebeat/comments/14ceiyb/slowlovania/",
			"cover": {
				"name": "Undertale - Megalovania",
				"url": "https://youtu.be/wDgQdr8ZkTw"
			},
			"date": "2023-06-18",
			"sampleRate": 32000,
			"codeOriginal": "T=t/1.5,Y=T>>11&31,Y2=T>>16&3,m=NaN,v=min(32,-t*2**([1,m,1,m,13,13,13,m,8,8,8,m,m,m,7,7,7,m,6,6,6,m,4,4,4,4,1,1,4,4,6,6][Y]/12)&96)*2,x=f=>f*t*2**([1,-1,-3,-1][Y2]/12)&255,v2=f=>x(f)&-T>>6&255,c=v+(v2(1)+v2(.99)+v2(1.5)+v2(1.505)+v2(.75)+x(1)*(-T&16383)/9e3)/8,c*c>>16?255:c",
			"starred": 1
		}, {
			"name": "\"you'll know i'll go get remix\": pwm cover",
			"url": "https://www.reddit.com/r/bytebeat/comments/1585hrp/youll_know_ill_go_get_remix_pwm_cover_by_hcdphobe/",
			"cover": {
				"name": "DJ Haning & Rizky Ayuba - You Know I'll Go Get Tik Tok Remix",
				"url": "https://youtu.be/opGCwdMneTk"
			},
			"date": "2023-07-24",
			"sampleRate": 15360,
			"codeOriginal": "l=t*1.15,v=4*t*1.065,v=v*2**([0,3,3,3,3,3,1,0,-2,3,3,3,3,3,3,5,5,0,0,0,0,0,0,3,5,1,1,1,5,1,1,3][l>>12&31]/12),v=(v&127)+((-l>>((l>>12&31)>28?4:5)&127)/1.5+24)&128,v+64",
			"codeMinified": "l=1.15*t,v=4.26*t,v*=2**([0,3,3,3,3,3,1,0,-2,3,3,3,3,3,3,5,5,0,0,0,0,0,0,3,5,1,1,1,5,1,1,3][l>>12&31]/12),v=(v&127)+((-l>>(28<(l>>12&31)?4:5)&127)/1.5+24)&128,v+64"
		}]
	}, {
		"author": "Dresdenboy",
		"name": "Visitors from the Dark Side",
		"url": "https://dollchan.net/btb/res/220.html#220",
		"date": "2022-08-09",
		"sampleRate": 44100,
		"codeOriginal": "max(0,min(128,((b=(-t*1.0595**((\"0010010030705503\"[t>>13&15])-12+3*(t>>18&1))&255),c=(b**3)>>5,(sin(b*(.2+sin(t/6e6))*.2))*c+c)*(-t&8191)>>18)))-((sqrt(t&8183)<<6&64)*(((t>>15)&1)^(t>>13))-(t&15))*(t>2<<19)+((t&16383)*(-t>>3&511)/7e4)*random()*(t>1<<19)",
		"codeMinified": "max(0,min(128,(b=-t*1.0595**('0010010030705503'[t>>13&15]-12+3*(t>>18&1))&255,c=b**3>>5,sin(b*(.2+sin(t/6E6))*.2)*c+c)*(-t&8191)>>18))-((sqrt(t&8183)<<6&64)*(t>>15&1^t>>13)-(t&15))*(1048576<t)+(t&16383)*(-t>>3&511)/7E4*random()*(524288<t)",
		"starred": 1
	}, {
		"author": "Butterroach",
		"name": "TWO MILLION alarm clocks",
		"url": "https://dollchan.net/btb/res/3.html#160",
		"remix": {
			"author": "yehar",
			"name": "ONE MILLION alarm clocks",
			"url": "http://www.pouet.net/topic.php?which=8357&page=21#c401895"
		},
		"date": "2022-08-23",
		"stereo": true,
		"codeOriginal": "[t*t/(t>>12&t>>8)<<7|t*(t>>11&t>>6)<<7,t*t/(t>>11&t>>6)<<7|t*(t>>11&t>>6)<<7]"
	}, {
		"author": "Devan Wolf",
		"name": "POW techno",
		"url": "https://dollchan.net/btb/res/3.html#224",
		"date": "2022-10-18",
		"codeOriginal": "Math.pow((t>>(t>>12&1))&65535,(t>>10&3)+1)|(t<<4&16383)/(t>>5&127)",
		"codeMinified": "((t>>(t>>12&1))&65535)**((t>>10&3)+1)|(t<<4&16383)/(t>>5&127)"
	}, {
		"author": "awogler9124812041",
		"children": [{
			"name": "the audio effect on those meme content-aware scaling videos",
			"description": "put this before ANY formula: t+=sin(t/100)*t/8000,",
			"url": "https://www.reddit.com/r/bytebeat/comments/ybfq1h/the_audio_effect_on_those_meme_contentaware/",
			"remix": {
				"author": "SthephanShi",
				"name": "Hard level"
			},
			"date": "2022-10-23",
			"codeOriginal": "t+=sin(t/100)*t/8000,t*(t&16384?7:5)*(5-(3&t>>8))>>(3&-t>>(t&4096?2:16))|t>>(t&16384?t&4096?3:4:3)",
			"codeMinified": "t+=sin(t/100)*t/8E3,t*(t&16384?7:5)*(5-(3&t>>8))>>(3&-t>>(t&4096?2:16))|t>>(t&16384?t&4096?3:4:3)"
		}, {
			"name": "funky minimal sierpinski harmony remix",
			"url": "https://www.reddit.com/r/bytebeat/comments/11it6gb/funky_minimal_sierpinski_harmony_remix/",
			"date": "2023-03-05",
			"sampleRate": 44100,
			"codeOriginal": "sin(random()|512/cbrt(t%16384))*40+40+random()/cbrt(t%8192)*128+(t&t>>11)%256/2+(t&t>>5)/2%256/6+(t>>(t/8))%256/8",
			"codeMinified": "40*sin(random()|512/cbrt(t%16384))+40+random()/cbrt(t%8192)*128+(t&t>>11)%256/2+(t&t>>5)/2%256/6+(t>>t/8)%256/8"
		}, {
			"name": "cool square drums",
			"url": "https://www.reddit.com/r/bytebeat/comments/127mivm/cool_square_drums/",
			"date": "2023-03-31",
			"sampleRate": 44100,
			"codeOriginal": "(cbrt(((t>>9)%128>114?t&4095:t&8191))*256|(t>>13&1?t*64:0))&128",
			"codeMinified": "(256*cbrt((t>>9)%128>114?t&4095:t&8191)|(t>>13&1?64*t:0))&128"
		}, {
			"name": "minimal sparta harmony",
			"url": "https://www.reddit.com/r/bytebeat/comments/16yvbwx/minimal_sparta_harmony/",
			"cover": {
				"name": "Keaton Monger - This is Sparta! Last techno remix",
				"url": "https://youtu.be/rvYZRskNV3w"
			},
			"remix": {
				"author": "miiro",
				"name": "Sierpinski harmony",
				"url": "https://youtu.be/qlrs2Vorw2Y?t=2m14s"
			},
			"date": "2023-10-03",
			"sampleRate": 16000,
			"codeOriginal": "t||(d=1.174,e=1.318,f=1.389,a=Array(n=256).fill(0)),a[t%n]=(t&t>>8)%256,a[floor(t*[e,e,e,e,f,f,f,f,d,d,d,d,f,f,f,f,e,e*2,e,e*2,f,f*2,f,f*2,d,d*2,d,d*2,f,f*2,f,f*2,][t>>12&31]%n)]",
			"codeMinified": "t||(d=1.174,e=1.318,f=1.389,a=Array(n=256).fill(0)),a[t%n]=(t&t>>8)%256,a[floor(t*[e,e,e,e,f,f,f,f,d,d,d,d,f,f,f,f,e,2*e,e,2*e,f,2*f,f,2*f,d,2*d,d,2*d,f,2*f,f,2*f][t>>12&31]%n)]",
			"starred": 1
		}, {
			"name": "42 hell",
			"url": "https://www.reddit.com/r/bytebeat/comments/16zq5xl/42_hell/",
			"remix": {
				"name": "the 42 melody",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			},
			"date": "2023-10-04",
			"codeOriginal": "a=i=>t*(42&(t>>i)+2)%256,a(7)/8+a(8)/8+a(9)/8+a(10)/8+a(11)/8+a(12)/8+a(13)/8+a(14)/8"
		}, {
			"name": "ryg remix",
			"url": "https://www.reddit.com/r/bytebeat/comments/184bgns/ryg_remix/",
			"remix": {
				"author": "ryg",
				"url": "https://www.pouet.net/topic.php?which=8357&page=12#c389146"
			},
			"date": "2023-10-04",
			"sampleRate": 44100,
			"codeOriginal": [
				"a=t=>(t%129+t%126)&128,",
				"b=x=>x*x|t>>5,",
				"w=(v,m,a)=>(((v-m)%(a-m))+(a-m))%(a-m)+m,",
				"a(t*'36364689'[t>>13&7]/12/2)/2",
				"+w(b(((t>>12^(t>>12)-2)%11*t/4|t>>13)),0,256)%256/4",
				"+((4e4/(t>>3&2047)+(random()*128|(t&1)*255)/(((t/128+192)%128)+1)+(random()*128|(t&1)*255)/(((t/128+160)%128)+1))%256|0)/2"
			],
			"codeMinified": "a=t=>t%129+t%126&128,b=x=>x*x|t>>5,w=(v,m,a)=>((v-m)%(a-m)+(a-m))%(a-m)+m,a(t*'36364689'[t>>13&7]/12/2)/2+w(b((t>>12^(t>>12)-2)%11*t/4|t>>13),0,256)%256/4+((4E4/(t>>3&2047)+(128*random()|255*(t&1))/((t/128+192)%128+1)+(128*random()|255*(t&1))/((t/128+160)%128+1))%256|0)/2",
			"starred": 1
		}]
	}, {
		"author": "May_I_Change_My_Name",
		"children": [{
			"name": "Slowed \"Sine Melody\" down and added a chord progression",
			"url": "https://www.reddit.com/r/bytebeat/comments/rwd856/comment/itquhlj/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "Sine Melody",
				"url": "https://www.reddit.com/r/bytebeat/comments/rwd856/sine_melody/"
			},
			"date": "2022-10-25",
			"sampleRate": 32000,
			"stereo": true,
			"codeOriginal": "Z=t=>(a=(v=t/16*[2,4,2,4,2,4,2,4,2,5,2,4,3,3,2,1][t>>13&15]*((t>>13&3)+1),w=t/16*[1,2,1,2,3,2,1,4,5,4,6,3,2,4,1,3,3][t>>13&15]*((t>>13&3)+1),m=(64*sin(v>>1)+(64*cos(w>>1)))/8+(64*sin(v)+(64*cos(w)))/8),n=[[64,77,96,64][t>>18&3],[32,38.5,84,32][t>>18&3]],b=2*sin(t/[n[0],16,17,16,14,16,17,16,n[1],16,17,16,21,24,26,32][t>>14&15]*2)*((-t>>10&15)+1),a+b),E=(e,i)=>i>16?0:e<0?0:Z(e)/2-E(e-24576+(i==0?12288:0),i+2)*0.5,[3*E(t,0)+128,3*E(t,1)+128]",
			"codeMinified": "Z=t=>(a=(v=t/16*[2,4,2,4,2,4,2,4,2,5,2,4,3,3,2,1][t>>13&15]*((t>>13&3)+1),w=t/16*[1,2,1,2,3,2,1,4,5,4,6,3,2,4,1,3,3][t>>13&15]*((t>>13&3)+1),m=(64*sin(v>>1)+64*cos(w>>1))/8+(64*sin(v)+64*cos(w))/8),n=[[64,77,96,64][t>>18&3],[32,38.5,84,32][t>>18&3]],b=2*sin(t/[n[0],16,17,16,14,16,17,16,n[1],16,17,16,21,24,26,32][t>>14&15]*2)*((-t>>10&15)+1),a+b),E=(e,i)=>16<i?0:0>e?0:Z(e)/2-.5*E(e-24576+(i==0?12288:0),i+2),[3*E(t,0)+128,3*E(t,1)+128]",
			"starred": 1
		}, {
			"name": "Stuck a Sierpinski bassline on \"Im Blue\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/rs1qqi/comment/itrba3j/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "Melody Of Im Blue (with drums)",
				"url": "https://www.reddit.com/r/bytebeat/comments/rs1qqi/comment/hqridb8/?utm_source=reddit&utm_medium=web2x&context=3"
			},
			"date": "2022-10-25",
			"sampleRate": 44100,
			"codeOriginal": "a=t*[1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.5,1,1.27,1.35,1.35,1.125,1.35,1.7,1.8,1.125,1.7,1.5,1.35,.85,1.125,1.35,1.27,.75,1,1.125,1.125,1.125,1,1.125,1.125,1,1.125,1.27][t/2.4>>12&63]/4&63,b=(sin(t/2|t/12)*((-t/2.4>>6&31)+1)+32)*[1,0][t/2.4>>11&1],c=(sin(t/3|t/18)*((-t/2.4>>8&31)+1)+32)*[0,1][t/2.4>>13&1],d=t*[2.25,2,1.8,1.5][t/2.4>>14&3]/8&127&t/2.4>>6,a+b+c+d",
			"starred": 1
		}, {
			"name": "Bytebeat Concerto No. 1",
			"url": "https://www.reddit.com/r/bytebeat/comments/ye7djq/bytebeat_concerto_no_1/",
			"date": "2022-10-26",
			"sampleRate": 11025,
			"codeOriginal": "t*=34.647*256/11025,o=(t>>13)%3,T=(p)=>2**(p/12),C=(p,m)=>(2*t*p&~t>>(5+o)|3*t*p&~t>>(4+o)|4*(m?T(3):1.25)*t*p&~t>>(3+o))*2**o&255,S=(p)=>t*p%64+t*p%32.1+t*p%15.96+t*p%8.04+t*p%3.97,(S(T(\"aaeeecfffe`a^^ccce^^^c`^\\\\\\\\cccehhhcefhhhejhccchec\".charCodeAt((t>>12)%48)-97))<<1)+C(T(\"55770050\"[t/3>>13&7]-5),((t/3>>13)-2&7)<2)>>2",
			"codeMinified": "t*=34.647*256/11025,o=(t>>13)%3,T=p=>2**(p/12),C=(p,m)=>(2*t*p&~t>>5+o|3*t*p&~t>>4+o|4*(m?T(3):1.25)*t*p&~t>>3+o)*2**o&255,S=p=>t*p%64+t*p%32.1+t*p%15.96+t*p%8.04+t*p%3.97,(S(T('aaeeecfffe`a^^ccce^^^c`^\\\\\\\\cccehhhcefhhhejhccchec'.charCodeAt((t>>12)%48)-97))<<1)+C(T('55770050'[t/3>>13&7]-5),2>((t/3>>13)-2&7))>>2",
			"starred": 1
		}, {
			"name": "Ievan Bytebeat Polkka",
			"url": "https://www.reddit.com/r/bytebeat/comments/ye43du/comment/itwj5bt/?utm_source=reddit&utm_medium=web2x&context=3",
			"cover": {
				"name": "Loituma - Ievan Polkka",
				"url": "https://youtu.be/nbAHzYQIf40"
			},
			"date": "2022-10-26",
			"sampleRate": 11025,
			"codeOriginal": "t*=46.249*256/11025,T=(p)=>2**(p/12),B=(p,m)=>(~t>>3&(t>>11&1?m?4.8:5:4-(t>>12&1))*t*p&(t>>7)+t*6*p&255)>>1,s=\"11031112111111121103111022221112\"[t>>11&31],q=t*2*((s>2?t*(s-2):~(t*s))>>10&1),M=q*T(\"h0m0mm0op0m0m0mpo0k0k0o0p0m0m0mmh0m0mm0op0m0m0mptttrppooppm0m0mm\".charCodeAt(t>>10&63)-97)&96,B(T(-2*((t>>13&3)==2)),(t>>13&3)!=2)+M",
			"codeMinified": "t*=46.249*256/11025,T=p=>2**(p/12),B=(p,m)=>(~t>>3&(t>>11&1?m?4.8:5:4-(t>>12&1))*t*p&(t>>7)+6*t*p&255)>>1,s='11031112111111121103111022221112'[t>>11&31],q=2*t*((2<s?t*(s-2):~(t*s))>>10&1),M=q*T('h0m0mm0op0m0m0mpo0k0k0o0p0m0m0mmh0m0mm0op0m0m0mptttrppooppm0m0mm'.charCodeAt(t>>10&63)-97)&96,B(T(-2*((t>>13&3)==2)),(t>>13&3)!=2)+M",
			"starred": 2
		}, {
			"name": "blast from the past",
			"url": "https://www.reddit.com/r/bytebeat/comments/zxmmzm/comment/j3nh0ri/?utm_source=reddit&utm_medium=web2x&context=3",
			"cover": {
				"name": "Harold Faltermeyer - Axel F",
				"url": "https://youtu.be/Qx2gvHjNhQ0"
			},
			"date": "2023-01-09",
			"sampleRate": 44100,
			"codeOriginal": "((z=(x=t>>6^t>>13)*4^t)+t>>(y=t>>11)%8|t%32^y<<x-t/3.12524|y<<6)|(t*1.06**(12+[0,0,0,,3,3,,0,,0,5,,0,,-2,,0,0,0,,7,7,,0,,0,8,,7,,3,,0,,7,,12,,0,-2,,10,-5,,2,2,0,0,0,0,0,0,,,,,,,,][t>>12&63]))%127",
			"codeMinified": "(z=4*(x=t>>6^t>>13)^t)+t>>(y=t>>11)%8|t%32^y<<x-t/3.12524|y<<6|t*1.06**(12+[0,0,0,,3,3,,0,,0,5,,0,,-2,,0,0,0,,7,7,,0,,0,8,,7,,3,,0,,7,,12,,0,-2,,10,-5,,2,2,0,0,0,0,0,0][t>>12&63])%127"
		}, {
			"name": "Meet the Musician",
			"url": "https://www.reddit.com/r/bytebeat/comments/108mdge/meet_the_musician/",
			"cover": {
				"name": "Chase William - Some Things Abt Me",
				"url": "https://youtu.be/QZLsdW2l_54"
			},
			"date": "2023-01-11",
			"sampleRate": 10000,
			"codeOriginal": [
				"t-=1<<11,",
				"q=t>>11&7,",
				"e=~(q<1?t>>3:q<3?128+(t>>4):q<7?(t>>5)+64:(~t>>5)-64),",
				"N=p=>(t*p&255&e)/4,",
				"C=n=>N(n[0])+N(n[1])+N(n[2])+N(n[3])+(t*n[0]&255)/4,",
				"P=t>>14&3,",
				"B=C([[3,9/2,21/4,57/8],[2,3,5,7],[8/3,4,6,20/3],[20/9,50/9,4,20/3]][P]),",
				"M=t*\"<<<H???0\\0<6<666H<<<H??00\\0006<<666\\0<?H<?HQ\\0HQZHQZ`HQZ`QZ`lQHx\\0xll\\0H\".charCodeAt(t>>11&63)/9&175,",
				"D=128*sin(4096/(t&4095))+128,",
				"M/4+B/3+D/4"
			],
			"codeMinified": "t-=2048,q=t>>11&7,e=~(1>q?t>>3:3>q?128+(t>>4):7>q?(t>>5)+64:(~t>>5)-64),N=p=>(t*p&255&e)/4,C=n=>N(n[0])+N(n[1])+N(n[2])+N(n[3])+(t*n[0]&255)/4,P=t>>14&3,B=C([[3,4.5,5.25,7.125],[2,3,5,7],[8/3,4,6,20/3],[20/9,50/9,4,20/3]][P]),M=t*'<<<H???0\\x00<6<666H<<<H??00\\x006<<666\\x00<?H<?HQ\\x00HQZHQZ`HQZ`QZ`lQHx\\x00xll\\x00H'.charCodeAt(t>>11&63)/9&175,D=128*sin(4096/(t&4095))+128,M/4+B/3+D/4",
			"starred": 1
		}, {
			"name": "Remix of \"My new instrumental in a new year\"",
			"url": "https://dollchan.net/btb/res/204.html#411",
			"remix": {
				"author": "Zackx",
				"name": "My new instrumental in new year",
				"url": "https://dollchan.net/btb/res/204.html#292"
			},
			"date": "2023-02-18",
			"sampleRate": 32000,
			"codeOriginal": [
				"s=17,q=2**(1/12),u=t>>s-1&1,",
				"p=1.042*t,w=64,v=p*[.502,.4,.3,.448][3&t>>s]/(1+(~t>>13&1)),v2=p*[.75,.6,.452,.67][3&t>>s],v3=p*[.896,.796,.75*(u?1:1/q**2),.896][3&t>>s],v4=p*[1.126*(u?q:1),.896*(u?q**2:1),.896,1.126*(u?1:q)][3&t>>s],((v&w)+(v2&w)+(v3&w)+(v4&w))*(t&16383)/16383/1.9+32*sin(20*cbrt((t%16384)/40))+32*random()*(-t&8E3)/8E3+(t*[0,sin(t/1.3>>1)][1&t>>14]&-t>>7&127)/3+32*sin(sin(v*PI/128/'21'[1&t>>13])*(-t&8191)/2048/1.5)+64"
			],
			"codeMinified": "s=17,q=2**(1/12),u=t>>s-1&1,p=1.042*t,w=64,v=p*[.502,.4,.3,.448][3&t>>s]/(1+(~t>>13&1)),v2=p*[.75,.6,.452,.67][3&t>>s],v3=p*[.896,.796,.75*(u?1:1/q**2),.896][3&t>>s],v4=p*[1.126*(u?q:1),.896*(u?q**2:1),.896,1.126*(u?1:q)][3&t>>s],((v&w)+(v2&w)+(v3&w)+(v4&w))*(t&16383)/16383/1.9+32*sin(20*cbrt(t%16384/40))+32*random()*(-t&8E3)/8E3+(t*[0,sin(t/1.3>>1)][1&t>>14]&-t>>7&127)/3+32*sin(sin(v*PI/128/'21'[1&t>>13])*(-t&8191)/2048/1.5)+64",
			"starred": 2
		}, {
			"name": "Poker Face",
			"url": "https://dollchan.net/btb/res/204.html#435",
			"cover": {
				"name": "Lady Gaga - Poker Face",
				"url": "https://youtu.be/bESGLojNYSo"
			},
			"remix": {
				"author": "Zackx",
				"name": "My new instrumental in new year",
				"url": "https://dollchan.net/btb/res/204.html#292"
			},
			"date": "2023-02-20",
			"sampleRate": 44100,
			"codeOriginal": "m=[,15,14,10,10,15,14,10,10,7,8,7,8,7,8,8,7,8,10,10,10,10,10,10,2,3,2,-2,2,3,2,-2],T=q=>2**(q/12),S=f=>(p*f&~t>>5)%256/6,s=16,q=2**(1/12),u=t>>s-1&1,p=1.042*t,w=64,v=p*[.502,.4,.3,.448][3&t>>s]/(1+(~t>>13&1)),v2=p*[.75,.6,.452,.67][3&t>>s],v3=p*[.896,.796,.75*(u?1:1/q**2),.896][3&t>>s],v4=p*[1.126*(u?q:1),.896*(u?q**2:1),.896,1.126*(u?1:q)][3&t>>s],(((v&w)+(v2&w)+(v3&w)+(v4&w))*(t&16383)/16383/1.9+32*sin(20*cbrt(t%16384/40))+32*random()*(-t&8E3)/8E3+(t*[0,sin(t/1.3>>1)][1&t>>14]&-t>>7&127)/3+32*sin(sin(v*PI/128/'21'[1&t>>13])*(-t&8191)/2048/1.5)+64)/2+S(T(m[t>>13&31]))+((t>>16&3)==3?S(T(10))/1.5:0)",
			"starred": 1
		}, {
			"name": "CAT-GIRL Alternate Rhythm",
			"url": "https://dollchan.net/btb/res/204.html#460",
			"remix": {
				"author": "Zackx",
				"name": "remix of \"Cat-girl\". Nya (＾• ω •＾)",
				"url": "https://dollchan.net/btb/res/204.html#457"
			},
			"date": "2023-02-23",
			"sampleRate": 32000,
			"codeOriginal": "t/=4,T=t+2048,p=t*[.7,.945][1&t>>15],86-(17*T|(T>>2)+(t&32768?13:14)*T|T>>3|T>>5)%256/3+32*sin(12*cbrt(t%4096))+32+(10*random()*(~t>>4&255)>>6)*(t&4096)/4E3+((p%128+p%127)/2*(~t>>3&255)>>7)%256/3.5*[1,2][1&t>>11]",
			"starred": 1
		}, {
			"name": "ok",
			"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/comment/jcprysy/?utm_source=reddit&utm_medium=web2x&context=3",
			"description": "Yet another remix of Decent-Manager's thing.",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "please someone remix this",
				"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/please_someone_remix_this/"
			},
			"date": "2023-03-18",
			"sampleRate": 32000,
			"codeOriginal": [
				"t*=1.2,",
				"m=t*1.76*2**([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,][t>>12&127]/12)&~t>>4&255,",
				"k=(e=0.9998**(t&16383),asin(sin(e*150))*40*e+64),",
				"b=(T=t*2**([-9,-1,-6,1,-1,1,-4,-4][t>>16&7]/12)>>1,T&T%255&64)+(T&T%257)&255,",
				"m/3+b/5+k"
			],
			"codeMinified": "t*=1.2,m=1.76*t*2**([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7][t>>12&127]/12)&~t>>4&255,k=(e=.9998**(t&16383),40*asin(sin(150*e))*e+64),b=(T=t*2**([-9,-1,-6,1,-1,1,-4,-4][t>>16&7]/12)>>1,T&T%255&64)+(T&T%257)&255,m/3+b/5+k",
			"starred": 1
		}, {
			"name": "Empty 512 Chars",
			"description": "Using effect of changing the PWM duty cycle of the square wave arpeggiator.",
			"url": "https://www.reddit.com/r/bytebeat/comments/11x6wzo/empty_512_chars/",
			"cover": {
				"name": "Matt Simmonds - Empty (512 bytes)",
				"url": "https://deepsid.chordian.net/?file=/MUSICIANS/0-9/4-Mat/Empty_512_bytes.sid"
			},
			"date": "2023-03-21",
			"sampleRate": 21500,
			"codeOriginal": "T=q=>2**(q/12),r=t*.7,es='11021101'[r>>12&7],be=(es=='0'||es=='2'&&~r>>11&1?0:r>>9-es&15?~(r>>6-es):r>>3-es)&127,bc=T('0x'+'00558A11'[r>>15&7]),bp=[.5,T(-5),1]['0022222000222211'[r>>11&15]]*bc,b=((t*bp&255)<(r>>8&31))*be,ae=.999**(r&2047),ap=[0,T(7),2,T(17),4,2,T(17),1][r>>11&7],a=t*ap%128*ae,n='037',j='047',cp=T(-'02440277'[r>>15&7]),cn=T(eval('njjjnjnn'[r>>15&7])[(r*3>>10)%3])*cp,c=((t*cn&63)<((r>>10)+32&63))*40,de=.9995**(r&8191),d=r>>13&1?(sin(800/(de+1))+random())*64:sin(150*de)*64,60+d*de*.9+(a+b+c)/2",
			"codeMinified": "T=q=>2**(q/12),r=.7*t,es='11021101'[r>>12&7],be=(es==0||es==2&&~r>>11&1?0:r>>9-es&15?~(r>>6-es):r>>3-es)&127,bc=T('0x'+'00558A11'[r>>15&7]),bp=[.5,T(-5),1]['0022222000222211'[r>>11&15]]*bc,b=((t*bp&255)<(r>>8&31))*be,ae=.999**(r&2047),ap=[0,T(7),2,T(17),4,2,T(17),1][r>>11&7],a=t*ap%128*ae,n='037',j='047',cp=T(-'02440277'[r>>15&7]),cn=T(eval('njjjnjnn'[r>>15&7])[(3*r>>10)%3])*cp,c=40*((t*cn&63)<((r>>10)+32&63)),de=.9995**(r&8191),d=r>>13&1?64*(sin(800/(de+1))+random()):64*sin(150*de),60+d*de*.9+(a+b+c)/2",
			"starred": 2
		}, {
			"name": "The 42 Melody",
			"description": "The code text visualization with melody played. Set \"Points\" mode and zoom to 1/32.",
			"url": "https://www.reddit.com/r/bytebeat/comments/13740tr/the_42_melody/",
			"date": "2023-05-04",
			"drawing": { "mode": "Points", "scale": 5 },
			"codeOriginal": [
				"P=[0,0,32,32,254,33,33,0,42,28,8,28,42,0,126,129,32,32,254,33,33,0,34,20,8,34,20,8,0,33,65,255,1,1,0,126,129,129,129,126,0,54,73,85,34,5,0,48,80,144,255,16,0,67,133,137,145,97,0,129,126,0,0,0],",
				"m=t>>10&42,",
				"R=(t*(m?m:1)&255)>>5,",
				"P[(t>>9)%P.length]>>R&1?32*R+32*random():0"
			],
			"codeMinified": "P=[0,0,32,32,254,33,33,0,42,28,8,28,42,0,126,129,32,32,254,33,33,0,34,20,8,34,20,8,0,33,65,255,1,1,0,126,129,129,129,126,0,54,73,85,34,5,0,48,80,144,255,16,0,67,133,137,145,97,0,129,126,0,0,0],m=t>>10&42,R=(t*(m||1)&255)>>5,P[(t>>9)%P.length]>>R&1?32*(R+random()):0",
			"starred": 2
		}, {
			"name": "SID \"Autochord\" Effect",
			"description": "Method of generating reliable 1-bit polyphonic chords on a C64 SID chip.",
			"url": "https://www.reddit.com/r/bytebeat/comments/123xsp7/sid_autochord_effect/",
			"date": "2023-05-27",
			"sampleRate": 44100,
			"codeOriginal": [
				"T=q=>2**(q/12), // This strategy sounds best with equal-tempered chords rather than just intonation",
				"S=(p,t)=>t*p&255, // Bounded saw wave generator",
				"C=t=>S(1,t)+S(T(7),t)+S(T(10),t)+S(2*T(3),t)>>2, // Make a chord",
				"// C(t) // Original chord in saw waves",
				"C(t-8)>C(t)?64:0 // \"Autochord\", play around with 8 in t-8 for different \"thickness\""
			],
			"codeMinified": "T=q=>2**(q/12),S=(p,t)=>t*p&255,C=t=>S(1,t)+S(T(7),t)+S(T(10),t)+S(2*T(3),t)>>2,C(t-8)>C(t)?64:0"
		}, {
			"name": "Groovy Polka",
			"description": "Could be C-compatible if there were no exponentiation and floating point numbers.",
			"url": "https://www.reddit.com/r/bytebeat/comments/14iunvh/groovy_polka/",
			"date": "2023-06-25",
			"codeOriginal": "t*(5+((t>>10^2)&7))&t>>4|0.999**(t&4095)*(t*(4-(t>>12&1))/2&255)",
			"codeMinified": "t*(5+((t>>10^2)&7))&t>>4|.999**(t&4095)*(t*(4-(t>>12&1))/2&255)"
		}, {
			"name": "Trivial Interpolated Pitch",
			"description": "The / character in the string fills its time slot with a slide from the previous pitch to the next.",
			"url": "https://www.reddit.com/r/bytebeat/comments/15jjbff/trivial_interpolated_pitch/",
			"date": "2023-08-06",
			"sampleRate": 44100,
			"codeOriginal": "t||(p=0),T=q=>2**(q/12),m='0/4/7/4/0 477 4 ',i=t/8192%m.length,I=i|0,dp=[0,T(m[I+1]-(m[I+1]-m[I-1])*(1-i%1)),T(m[i|0])].at(' /'.indexOf(m[I])),p+=dp"
		}, {
			"name": "Pitch Fixer Function",
			"description": "Set FIX=1 and enjoy the equal temperament.",
			"url": "https://www.reddit.com/r/bytebeat/comments/15o18qg/pitch_fixer_function/",
			"cover": {
				"name": "Nyan Cat",
				"url": "https://youtu.be/zqLEO5tIuYs"
			},
			"date": "2023-08-11",
			"sampleRate": 44100,
			"codeOriginal": [
				"FIX=0, // Set to 1 and listen to the magic happen",

				"F=q=>FIX?2**(round(log(q)/log(2)*12)/12):q,t>>17?t*F([2.1,2.1,2.4,0,1.7,1.6,1.6,1.4,1.7,1.6,1.4,0,1.4,1.4,1.6,1.6,1.7,0,1.7,1.6,1.4,1.6,1.8,2.1,2.4,1.8,2.1,2.4,1.8,1.6,1.4,2.4,2.1,2.1,2.4,0,1.7,1.6,1.6,1.4,1.7,1.6,1.4,0,1.4,1.4,1.6,1.6,1.7,0,1.7,1.6,1.4,1.6,1.8,1.4,0,0,0,0,0,0,0,0][32^t>>12&63])%128+t*F([.95,1.9,1.06,2.1,1.4,2.8,1.2,2.4,.95,1.9,1.06,2.1,1.4,2.8,1.4,2.8][t>>13&15])/4%128:t*F([1.8,1.9,2.1,0,2.8,0,1.8,1.9,2.1,2.8,3.2,3.5,3.2,2.7,2.8,2.8,2.1,0,1.8,1.9,2.1,0,2.8,0,3.2,2.7,2.8,3.2,3.7,3.5,3.2,2.8][t>>12&31])&127"
			],
			"codeMinified": "FIX=0,F=q=>FIX?2**(round(log(q)/log(2)*12)/12):q,t>>17?t*F([2.1,2.1,2.4,0,1.7,1.6,1.6,1.4,1.7,1.6,1.4,0,1.4,1.4,1.6,1.6,1.7,0,1.7,1.6,1.4,1.6,1.8,2.1,2.4,1.8,2.1,2.4,1.8,1.6,1.4,2.4,2.1,2.1,2.4,0,1.7,1.6,1.6,1.4,1.7,1.6,1.4,0,1.4,1.4,1.6,1.6,1.7,0,1.7,1.6,1.4,1.6,1.8,1.4,0,0,0,0,0,0,0,0][32^t>>12&63])%128+t*F([.95,1.9,1.06,2.1,1.4,2.8,1.2,2.4,.95,1.9,1.06,2.1,1.4,2.8,1.4,2.8][t>>13&15])/4%128:t*F([1.8,1.9,2.1,0,2.8,0,1.8,1.9,2.1,2.8,3.2,3.5,3.2,2.7,2.8,2.8,2.1,0,1.8,1.9,2.1,0,2.8,0,3.2,2.7,2.8,3.2,3.7,3.5,3.2,2.8][t>>12&31])&127",
			"starred": 1
		}, {
			"name": "Alternate Wail",
			"description": "Siren Head effect.",
			"url": "https://www.reddit.com/r/bytebeat/comments/15jjbff/trivial_interpolated_pitch/",
			"date": "2023-08-28",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "F=t=>(r=t+1E5*sin(2*PI*t/1E6),asin(sin(PI*r*(t*1.1&32768?5:6)/256))*80),E=(Z,t,f,i=0)=>i<18?t<0?0:Z(t)+E(Z,t-8192,f,i+1)*f:0,E(F,t,0.7)/3+random()*16*sin(t*PI/3E5)",
			"codeMinified": "F=t=>(r=t+1E5*sin(2*PI*t/1E6),80*asin(sin(PI*r*(1.1*t&32768?5:6)/256))),E=(z,t,f,i=0)=>i<18?t<0?0:z(t)+E(z,t-8192,f,i+1)*f:0,E(F,t,.7)/3+16*random()*sin(t*PI/3E5)"
		}, {
			"name": "Every Breath You Take",
			"url": "https://www.reddit.com/r/bytebeat/comments/16mas5v/every_breath_you_take/",
			"cover": {
				"name": "The Police - Every Breath You Take",
				"url": "https://youtu.be/OMOGaugKpzs?si=QQ4oJ7ZuoQPw1Yn1"
			},
			"date": "2023-09-19",
			"sampleRate": 40000,
			"stereo": true,
			"codeOriginal": "T=q=>2**(q/12),t-=49152,M=t=>(t&8192?(t&t>>6&255)/4+(t*3>>1&t>>6&255)/4:0)+(t*T([0,7,14,7,16,14,7,14,0,7,14,7,16,14,7,14,-3,4,11,4,12,11,4,11,-3,4,11,4,12,11,4,11,5,12,19,12,17,12,5,12,7,14,21,14,19,14,7,14,0,7,14,7,16,14,7,14,0,7,14,7,16,14,7,14][t>>13&63])>>1&255)*(~t>>5&255)/510+(128*sin((8E14/(t&16383))**0.2)+128)/4,E=(e,i)=>16<i?0:0>e?0:M(e)/2+.5*E(e-24576+(i==0?12288:0),i+2),V=(t*T([0,0,0,0,0,0,0,0,,-5,4,5,4,4,2,2,0,0,0,0,0,0,0,0,,0,0,4,4,5,5,0,,0,0,5,5,4,4,2,,2,0,4,4,2,-3,0,0,0,0,0,0,0,0,,,-5,4,5,4,4,2,2][t>>13&63])&80)/2,[E(t,0)+V,E(t,1)+V]",
			"starred": 1
		}]
	}, {
		"author": "Zackx",
		"children": [{
			"name": "Namber wan",
			"url": "https://dollchan.net/btb/res/204.html#232",
			"date": "2022-11-03",
			"sampleRate": 11025,
			"codeOriginal": "z=t*'1242'[3&t>>10],z*([1,1.2,1.8,2.7][3&t>>14])",
			"codeMinified": "z=t*'1242'[3&t>>10],z*[1,1.2,1.8,2.7][3&t>>14]"
		}, {
			"name": "Namber tu use square wave",
			"url": "https://dollchan.net/btb/res/204.html#232",
			"remix": {
				"name": "Namber wan",
				"url": "https://dollchan.net/btb/res/204.html#232"
			},
			"date": "2022-11-03",
			"sampleRate": 44100,
			"codeOriginal": "z=t*'12345432'[7&t>>12],z*([1,1.2,1.8,2.7][3&t>>16])|127",
			"codeMinified": "z=t*'12345432'[7&t>>12],z*[1,1.2,1.8,2.7][3&t>>16]|127"
		}, {
			"name": "Sawtooth bass",
			"url": "https://dollchan.net/btb/res/204.html#247",
			"date": "2022-11-14",
			"sampleRate": 11025,
			"codeOriginal": "z=[1,0.8865,0.79,0.593][(t>>14)%4],(z*t%100+z*t%100.5+z*t%67)/1.2",
			"codeMinified": "z=[1,.8865,.79,.593][(t>>14)%4],(z*t%100+z*t%100.5+z*t%67)/1.2"
		}, {
			"name": "Adding sinewave",
			"url": "https://dollchan.net/btb/res/204.html#249",
			"remix": {
				"name": "Sawtooth bass",
				"url": "https://dollchan.net/btb/res/204.html#247"
			},
			"date": "2022-11-16",
			"codeOriginal": "z=[1,0.8865,0.79,0.593][(t>>14)%4]*[0.5,1,2,4][3&t>>10],(z*t%100+z*t%100.5+z*t%67)/1.5+32+(sin(z*t/1.34))*32",
			"codeMinified": "z=[1,.8865,.79,.593][(t>>14)%4]*[.5,1,2,4][3&t>>10],(z*t%100+z*t%100.5+z*t%67)/1.5+32+32*sin(z*t/1.34)"
		}, {
			"name": "bytesnare",
			"url": "https://dollchan.net/btb/res/204.html#254",
			"date": "2022-11-19",
			"codeOriginal": [
				"snarerate=[1,0.5,0.25,0][3&t>>17]",
				",temp=[1,1,1,0.5,1,1,1,0.75][7&t>>12],",
				"z=[1,1,1.34,1.5][3&t>>14]*[1,2,2.5,3][3&t>>10]+[0,sin(t)][1&snarerate*t>>11],",
				"(z*t*2)|(t>>4*temp|t>>4*temp)"
			],
			"codeMinified": "snarerate=[1,.5,.25,0][3&t>>17],temp=[1,1,1,.5,1,1,1,.75][7&t>>12],z=[1,1,1.34,1.5][3&t>>14]*[1,2,2.5,3][3&t>>10]+[0,sin(t)][1&snarerate*t>>11],z*t*2|t>>4*temp|t>>4*temp"
		}, {
			"name": "hard life",
			"url": "https://dollchan.net/btb/res/204.html#260",
			"date": "2022-11-27",
			"sampleRate": 32000,
			"codeOriginal": [
				"bass=[1,1.12,.75,.66,.592,.66,.75,.9][7&t>>15]*1.32,",
				"z=[1,1.12,1.5,1.78,1,1.12,.75,.669][7&t>>15]*1.32,(z*t%256+z*-t%257+bass*t%512+bass*-t%514)/9+128"
			],
			"codeMinified": "bass=[1,1.12,.75,.66,.592,.66,.75,.89][7&t>>15]*1.32,z=[1,1.12,1.5,1.78,1,1.12,.75,.669][7&t>>15]*1.32,(z*t%256+z*-t%257+bass*t%512+bass*-t%514)/9+128"
		}, {
			"name": "Adding beat",
			"url": "https://dollchan.net/btb/res/204.html#262",
			"remix": {
				"name": "hard life",
				"url": "https://dollchan.net/btb/res/204.html#260"
			},
			"date": "2022-11-27",
			"sampleRate": 32000,
			"codeOriginal": [
				"bass=[1,1.12,.75,.67,.594,.67,.75,.89][7&t/32000]*1.32,",
				"z=[1,1.12,1.5,1.78,1,1.12,.75,.669][7&t/32000]*1.32,(z*t%256+z*-t%257+bass*t%512+bass*-t%514)/12+((beat=t=>sin(cbrt(t/80)*30)*63+128),beat(t%16000))"
			],
			"codeMinified": "bass=1.32*[1,1.12,.75,.67,.594,.67,.75,.89][7&t/32E3],z=1.32*[1,1.12,1.5,1.78,1,1.12,.75,.669][7&t/32E3],(z*t%256+z*-t%257+bass*t%512+bass*-t%514)/12+(beat=a=>63*sin(30*cbrt(a/80))+128,beat(t%16E3))"
		}, {
			"name": "PWM MUISC remix",
			"url": "https://dollchan.net/btb/res/204.html#264",
			"remix": {
				"author": "getDolphinedLol",
				"name": "-PWM MUSIC-",
				"url": "https://www.reddit.com/r/bytebeat/comments/s27xzz/pwm_muisc/"
			},
			"date": "2022-11-29",
			"sampleRate": 32000,
			"codeOriginal": [
				"e=4,p=1.24,p2=1.001,z=[2,2,1,0,1,0,1,0,.888,.888,1,1,1.5,1.5,.5,.5][(t>>11)%16]*p,",
				"[1,2,5,5,6,12,7,8,10,6,4,9,4,3,2,9,2,2,4,5][(z*t>>e)%20]*6+[1,2,5,5,6,12,7,8,10,6,4,9,4,3,2,9,2,2,4,5][(p2*z*t>>e)%20]*6+63+((beat=t=>sin(cbrt(t/80)*30)*60),beat(t%16384))/1.5"
			],
			"codeMinified": "e=4,p=1.24,p2=1.001,z=[2,2,1,0,1,0,1,0,.888,.888,1,1,1.5,1.5,.5,.5][(t>>11)%16]*p,6*[1,2,5,5,6,12,7,8,10,6,4,9,4,3,2,9,2,2,4,5][(z*t>>e)%20]+6*[1,2,5,5,6,12,7,8,10,6,4,9,4,3,2,9,2,2,4,5][(p2*z*t>>e)%20]+63+(beat=function(a){return 60*sin(30*cbrt(a/80))},beat(t%16384))/1.5"
		}, {
			"name": "Dum clap clap",
			"url": "https://dollchan.net/btb/res/204.html#274",
			"date": "2022-12-20",
			"sampleRate": 11025,
			"codeOriginal": "z=[1,2,1,2,1,2,0.89,0.95][7&t>>11]*[1,1.194,1.34,1.8][3&t>>16],(z*t&64)+(z*1.007*t&64)+(z*(t>>8|t>>9)*t&32)/1.5+[(2e5/(t%4096)&192)/2,3e4/(t%[2048,4096][1&t>>13])&148*random()][1&t>>12]",
			"codeMinified": "z=[1,2,1,2,1,2,.89,.95][7&t>>11]*[1,1.194,1.34,1.8][3&t>>16],(z*t&64)+(1.007*z*t&64)+(z*(t>>8|t>>9)*t&32)/1.5+[(2E5/(t%4096)&192)/2,3E4/(t%[2048,4096][1&t>>13])&148*random()][1&t>>12]",
			"starred": 1
		}, {
			"name": "kernkraft 400",
			"url": "https://dollchan.net/btb/res/204.html#280",
			"cover": {
				"name": "Zombie Nation - Kernkraft 400",
				"url": "https://youtu.be/z5LW07FTJbI"
			},
			"date": "2022-12-24",
			"sampleRate": 10000,
			"codeOriginal": "t*[1,4,4.8,5.4,6,2,1,2,1,4,4.8,5.4,6,6.33,6,4.8,5.4,2.7,1.35,2.7,4.8,3,6,4,1,2,1,2,1,2,1,2][(t>>11)%32]*1.52",
			"starred": 1
		}, {
			"name": "My new instrumental in new year",
			"url": "https://dollchan.net/btb/res/204.html#292",
			"date": "2023-01-03",
			"sampleRate": 32000,
			"codeOriginal": [
				"s=17,p=t*1.042,w=64,",
				"v=p*[.502,.4,.3,.448][3&t>>s],",
				"v2=p*[.75,.6,.452,.67][3&t>>s],",
				"v3=p*[.896,.796,.75,.896][3&t>>s],",
				"v4=p*[1.126,.896,.896,1.126][3&t>>s],",
				"((v&w)+(v2&w)+(v3&w)+(v4&w))*(t&16383)/16e3/2+",
				"((_=t=>sin(cbrt(t/40)*20)*32+64),_(t%16384))+",
				"(24*random()*(-t&8e3)/8e3)+(t*[0,sin(t/1.3>>1)][1&t>>14]&-t>>7&127)/4+(32*sin(sin(v*PI/128/'21'[1&t>>13])*(-t&8191)/2048/1.5))"
			],
			"codeMinified": "s=17,p=1.042*t,w=64,v=p*[.502,.4,.3,.448][3&t>>s],v2=p*[.75,.6,.452,.67][3&t>>s],v3=p*[.896,.796,.75,.896][3&t>>s],v4=p*[1.126,.896,.896,1.126][3&t>>s],((v&w)+(v2&w)+(v3&w)+(v4&w))*(t&16383)/16E3/2+(_=t=>32*sin(20*cbrt(t/40))+64,_(t%16384))+24*random()*(-t&8E3)/8E3+(t*[0,sin(t/1.3>>1)][1&t>>14]&-t>>7&127)/4+32*sin(sin(v*PI/128/'21'[1&t>>13])*(-t&8191)/2048/1.5)",
			"starred": 2
		}, {
			"name": "The devil was behind you",
			"url": "https://dollchan.net/btb/res/204.html#381",
			"date": "2023-02-06",
			"sampleRate": 16000,
			"codeOriginal": [
				"p=t*2**(([0,3,-1,-1][3&t>>16])/12),",
				"((p*1.04&255)+(p*1.05&255))/3.5+",
				"(t>>5&(-t>>2)*(-t>>5))%256/3+(3e6/(t*'10000100'[7&t>>11]&2047)&128)/2"
			],
			"codeMinified": "p=t*2**([0,3,-1,-1][3&t>>16]/12),((1.04*p&255)+(1.05*p&255))/3.5+(t>>5&(-t>>2)*(-t>>5))%256/3+(3E6/(t*'10000100'[7&t>>11]&2047)&128)/2"
		}, {
			"name": "Cool song adding bass",
			"url": "https://dollchan.net/btb/res/204.html#384",
			"date": "2023-02-07",
			"sampleRate": 44100,
			"codeOriginal": [
				"((p=t*0.9*2**",
				"(([0,3,5,7,0,3,-4,-2][7&t/1.3>>15])/12))&-t/1.3>>6)%256/2+(p%512/8)"
			],
			"codeMinified": "((p=.9*t*2**([0,3,5,7,0,3,-4,-2][7&t/1.3>>15]/12))&-t/1.3>>6)%256/2+p%512/8"
		}, {
			"name": "Square & sawtooth the video game C chords",
			"url": "https://dollchan.net/btb/res/204.html#396",
			"date": "2023-02-11",
			"sampleRate": 32000,
			"codeOriginal": [
				"e=[0,2,4,7][3&t>>11]+12,",
				"p=t*2**(([1,3,5,6,8,10,12,13][7&t>>15]+e)/12),",
				"v=((p&128)+(p/.996&128))/2.35,v2=(p%256+p%172+p%128+p%86*2)/5,",
				"[v,v2][1&t>>14]"
			],
			"codeMinified": "e=[0,2,4,7][3&t>>11]+12,p=t*2**(([1,3,5,6,8,10,12,13][7&t>>15]+e)/12),v=((p&128)+(p/.996&128))/2.35,v2=(p%256+p%172+p%128+p%86*2)/5,[v,v2][1&t>>14]",
			"starred": 1
		}, {
			"name": "Song for sega CD ＼(≧▽≦)／",
			"url": "https://dollchan.net/btb/res/204.html#397",
			"remix": {
				"name": "Square & sawtooth the video game C chords",
				"url": "https://dollchan.net/btb/res/204.html#396"
			},
			"date": "2023-02-11",
			"sampleRate": 22050,
			"codeOriginal": [
				"e=[0,2,4,7,12,7,4,2][7&t>>11]+12,",
				"p=t*1.01*2**(([1,3,5,5,1,3,6,6][7&t>>15]+e)/12),",
				"v=((p&128)+(p/.996&128))/2,v2=(p%256+p%172+p%128+p%86*2)/6,",
				"v*(-t&2047)/2e3+v2"
			],
			"codeMinified": "e=[0,2,4,7,12,7,4,2][7&t>>11]+12,p=1.01*t*2**(([1,3,5,5,1,3,6,6][7&t>>15]+e)/12),v=((p&128)+(p/.996&128))/2,v2=(p%256+p%172+p%128+p%86*2)/6,v*(-t&2047)/2E3+v2"
		}, {
			"name": "the coolest song",
			"url": "https://dollchan.net/btb/res/204.html#401",
			"remix": {
				"name": "Cool song adding bass",
				"url": "https://dollchan.net/btb/res/204.html#384"
			},
			"date": "2023-02-13",
			"sampleRate": 44100,
			"codeOriginal": [
				"r=t/1.3,d=(-r&8191)/8e3,m=((p=.9*t*2**([0,3,5,7,0,3,-4,-2][7&r>>15]/12))&-r>>6)%256/2,",
				"b=(p%512)/4*(-r&16383)/16e3,",
				"a=[0,3,5,7,0,3,-4,-2][7&r>>15],",
				"a2=[3,7,9,11,3,7,0,2][7&r>>15],",
				"a3=[7,10,12,14,7,10,3,5][7&r>>15],",
				"s=t*.9*2**(([a,a2,a3,a2][3&r>>10])/12)%64*d*2,",
				"m+b+[0,s][1&r>>13]"
			],
			"codeMinified": "r=t/1.3,d=(-r&8191)/8E3,m=((p=.9*t*2**([0,3,5,7,0,3,-4,-2][7&r>>15]/12))&-r>>6)%256/2,b=p%512/4*(-r&16383)/16E3,a=[0,3,5,7,0,3,-4,-2][7&r>>15],a2=[3,7,9,11,3,7,0,2][7&r>>15],a3=[7,10,12,14,7,10,3,5][7&r>>15],s=.9*t*2**([a,a2,a3,a2][3&r>>10]/12)%64*d*2,m+b+[0,s][1&r>>13]",
			"starred": 2
		}, {
			"name": "ｃｏｏｌ ｖａｐｏｒｗａｖｅ",
			"url": "https://dollchan.net/btb/res/204.html#408",
			"remix": {
				"name": "the coolest song",
				"url": "https://dollchan.net/btb/res/204.html#401"
			},
			"date": "2023-02-17",
			"sampleRate": 32000,
			"codeOriginal": [
				"r=t/1.3,d=(-r&8191)/8e3,m=((p=.88*t*2**([0,3,5,7,0,3,-4,-2][7&r>>15]/12))&-r>>6)%256/2,",
				"b=(p%512)/4*(-r&16383)/16e3,",
				"a=[0,3,5,7,0,3,-4,-2][7&r>>15],",
				"a2=[3,7,9,11,3,7,0,2][7&r>>15],",
				"a3=[7,10,12,14,7,10,3,5][7&r>>15],",
				"s=t*.88*2**(([a,a2,a3,a2][3&r>>14])/12)%64*d,",
				"m+b/2+[s,s*2][1&r>>13]"
			],
			"codeMinified": "r=t/1.3,d=(-r&8191)/8E3,m=((p=.88*t*2**([0,3,5,7,0,3,-4,-2][7&r>>15]/12))&-r>>6)%256/2,b=p%512/4*(-r&16383)/16E3,a=[0,3,5,7,0,3,-4,-2][7&r>>15],a2=[3,7,9,11,3,7,0,2][7&r>>15],a3=[7,10,12,14,7,10,3,5][7&r>>15],s=.88*t*2**([a,a2,a3,a2][3&r>>14]/12)%64*d,m+b/2+[s,2*s][1&r>>13]",
			"starred": 2
		}, {
			"name": "Castle at the night",
			"url": "https://dollchan.net/btb/res/204.html#414",
			"date": "2023-02-18",
			"sampleRate": 44100,
			"stereo": true,
			"codeOriginal": [
				"p=[2,4,5,9,2,4,5,9,2,4,5,9,12,9,7,5,0,2,4,7,0,2,4,7,0,2,4,7,0,2,4,0,-2,0,2,5,-2,0,2,5,-2,0,2,5,-2,0,2,-2,-3,-1,1,4,-3,-1,1,4,-3,-1,1,7,-3,-1,1,9][63&t>>13],",
				"z=t*2**(p/12),",
				"L=(z*1.005|z/2.01)%256/2.5,",
				"R=(z*1.005|z/2.02)%256/2.5,",
				"v=(z|t>>5)%256/2.5,",
				"[L+v,R+v]"
			],
			"codeMinified": "p=[2,4,5,9,2,4,5,9,2,4,5,9,12,9,7,5,0,2,4,7,0,2,4,7,0,2,4,7,0,2,4,0,-2,0,2,5,-2,0,2,5,-2,0,2,5,-2,0,2,-2,-3,-1,1,4,-3,-1,1,4,-3,-1,1,7,-3,-1,1,9][63&t>>13],z=t*2**(p/12),L=(1.005*z|z/2.01)%256/2.5,R=(1.005*z|z/2.02)%256/2.5,v=(z|t>>5)%256/2.5,[L+v,R+v]",
			"starred": 1
		}, {
			"name": "what this song i remixed?",
			"url": "https://dollchan.net/btb/res/204.html#418",
			"remix": {
				"author": "ryg",
				"url": "https://www.pouet.net/topic.php?which=8357&page=12#c389146"
			},
			"date": "2023-02-18",
			"sampleRate": 44100,
			"codeOriginal": [
				"b=[2,1,3,5][3&t>>16],",
				"(p=t*'36364689'[t>>13&7]/12),(p%256/2+p%254/2)/2+",
				"(((t>>12^(t>>12)-b)%11*t/4|t>>13)&127)"
			],
			"codeMinified": "b='2135'[3&t>>16],p=t*'36364689'[t>>13&7]/12,(p%256/2+p%254/2)/2+(((t>>12^(t>>12)-b)%11*t/4|t>>13)&127)"
		}, {
			"name": "DJ running man",
			"url": "https://dollchan.net/btb/res/204.html#440",
			"remix": {
				"author": "viznut",
				"name": "Running man",
				"url": "http://www.pouet.net/topic.php?which=8357&page=9#c388930"
			},
			"date": "2023-02-21",
			"codeOriginal": [
				"b=t*'11111112'[7&t>>12],",
				"((t*(3+(1^t>>10&5))*(5+(3&t>>14))>>(t>>8&3))%256/2*(-t>>2&255)>>8)+",
				"sin(cbrt(b%4096)*13)*48+48+(32*random()*(-t&4095)/4e3)*(t&4096)/2400"
			],
			"codeMinified": "((t*(3+(1^t>>10&5))*(5+(3&t>>14))>>(t>>8&3))%256/2*(-t>>2&255)>>8)+48*sin(13*cbrt(t*'11111112'[7&t>>12]%4096))+32*random()*(-t&4095)/4E3*(t&4096)/2400+48"
		}, {
			"name": "DJ running man#3",
			"url": "https://dollchan.net/btb/res/204.html#442",
			"remix": {
				"author": "viznut",
				"name": "Running man",
				"url": "http://www.pouet.net/topic.php?which=8357&page=9#c388930"
			},
			"date": "2023-02-21",
			"sampleRate": 32000,
			"codeOriginal": [
				"t/=4,b=t*'11182413'[7&t>>12],",
				"((t*(3+(1^t>>10&5))*(5+(3&t>>14))>>(t>>10&3))%256/2*(-t>>2&255)>>8)+",
				"sin(cbrt(b%4096)*13)*48+48+(32*random()*(-t&4095)/4e3)*(t&4096)/2400"
			],
			"codeMinified": "t/=4,((t*(3+(1^t>>10&5))*(5+(3&t>>14))>>(t>>10&3))%256/2*(-t>>2&255)>>8)+48*sin(13*cbrt(t*'11182413'[7&t>>12]%4096))+32*random()*(-t&4095)/4E3*(t&4096)/2400+48",
			"starred": 1
		}, {
			"name": "DJ kernkraft 400",
			"url": "https://dollchan.net/btb/res/204.html#445",
			"remix": {
				"name": "kernkraft 400",
				"url": "https://dollchan.net/btb/res/204.html#280"
			},
			"date": "2023-02-21",
			"sampleRate": 10000,
			"codeOriginal": [
				"b=t*'1421124214121438'[15&t>>12],",
				"t*[1,4,4.8,5.4,6,2,1,2,1,4,4.8,5.4,6,6.3,6,4.8,5.4,2.7,1.35,2.7,4.8,3,6,4,1,2,1,2,1,2,1,2][(t>>11)%32]*1.52%256/2+",
				"sin(9*cbrt(b%4096))*64+64"
			],
			"codeMinified": "t*[1,4,4.8,5.4,6,2,1,2,1,4,4.8,5.4,6,6.3,6,4.8,5.4,2.7,1.35,2.7,4.8,3,6,4,1,2,1,2,1,2,1,2][(t>>11)%32]*1.52%256/2+64*sin(9*cbrt(t*'1421124214121438'[15&t>>12]%4096))+64"
		}, {
			"name": "remix of \"Cat-girl\". Nya (＾• ω •＾)",
			"url": "https://dollchan.net/btb/res/204.html#457",
			"remix": {
				"author": "SthephanShi",
				"name": "Cat-girl"
			},
			"date": "2023-02-23",
			"sampleRate": 32000,
			"codeOriginal": [
				"t/=4,",
				"p=t*[0.7,0.945][1&t>>15],",
				"86-(17*t|(t>>2)+(t&32768?13:14)*t|t>>3|t>>5)%256/3+sin(12*cbrt(t%4096))*32+32+",
				"(10*random()*(~t>>4&255)>>6)*(t&4096)/4e3+((p%128+p%127)/2*(~t>>3&255)>>7)%256/3.5*[1,2][1&t>>11]"
			],
			"codeMinified": "t/=4,p=t*[.7,.945][1&t>>15],86-(17*t|(t>>2)+(t&32768?13:14)*t|t>>3|t>>5)%256/3+32*sin(12*cbrt(t%4096))+32+(10*random()*(~t>>4&255)>>6)*(t&4096)/4E3+((p%128+p%127)/2*(~t>>3&255)>>7)%256/3.5*'12'[1&t>>11]",
			"starred": 1
		}, {
			"name": "Workout Ctrl+V",
			"url": "https://dollchan.net/btb/res/204.html#458",
			"remix": {
				"author": "getDolphinedLol",
				"name": "Ctrl+V",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0ytc9/ctrlv/"
			},
			"date": "2023-02-23",
			"sampleRate": 44100,
			"codeOriginal": [
				"b=t*[0,2,0,2,0,2,0,3,0][(t>>13)%8],",
				"([2,2,3,0,2.9,0,3,0,3.55,3.55,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/4+",
				"(10*random()*(-t>>4&255)>>6)+(t*",
				"sin(t>>1)&-t>>7&255)*(t&16384)/32e3+",
				"sin(10*cbrt(t&16383))*32+32+sin(b*PI/512)*32+32"
			],
			"codeMinified": "([2,2,3,0,2.9,0,3,0,3.55,3.55,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&192)/4+(10*random()*(-t>>4&255)>>6)+(t*sin(t>>1)&-t>>7&255)*(t&16384)/32E3+32*sin(10*cbrt(t&16383))+32+32*sin(t*'020202030'[(t>>13)%8]*PI/512)+32",
			"starred": 1
		}, {
			"name": "DJ \"Fanfare?\"",
			"url": "https://dollchan.net/btb/res/204.html#464",
			"remix": {
				"author": "varjohukka",
				"name": "Fanfare?",
				"url": "http://www.pouet.net/topic.php?which=8357&page=4#c388503"
			},
			"date": "2023-02-24",
			"codeOriginal": "128-((t&8192?t&4096?t&1024?2*t:4*t:t&512?4*t:4.2*t:(t&4096?t&1024?2*t:10*t:t&512?2*t:8*t)>>2)*(t&16384?3:2)|t*(t&16384?.125:1/(.01*t)))%256/2+sin(13*cbrt(t*'12842114'[7&t>>12]%4096))*32+32+64*random()*(1-t&4095)/4e3*(t&4096)/4e3",
			"starred": 1
		}, {
			"name": "ПΣЦЯӨBΣΛƬ",
			"url": "https://dollchan.net/btb/res/204.html#465",
			"remix": {
				"author": "SthephanShi",
				"name": "Neurofunk",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0laz2/neurofunk/"
			},
			"date": "2023-02-24",
			"sampleRate": 32000,
			"codeOriginal": [
				"t/=4,z='1111111111111110'[15&t>>12]%4096,86-(t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2))%256/3+",
				"sin(16*cbrt(t*z%4096))*32+32+",
				"32*random()*(~t*z&4095)/4e3*(t&4096)/2e3"
			],
			"codeMinified": "t/=4,z='1111111111111110'[15&t>>12]%4096,86-(t*((t&4096?59392>t%65536?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2))%256/3+32*sin(16*cbrt(t*z%4096))+32+32*random()*(~t*z&4095)/4E3*(t&4096)/2E3",
			"starred": 2
		}, {
			"name": "VL-tone rhythm with beat",
			"url": "https://dollchan.net/btb/res/204.html#473",
			"remix": {
				"author": "spikkks",
				"name": "Vl-Tone Rock 1 rhythm emulation",
				"url": "https://www.reddit.com/r/bytebeat/comments/chkme0/vltone_rock_1_rhythm_emulation/"
			},
			"date": "2023-02-25",
			"sampleRate": 44100,
			"codeOriginal": [
				"r=t/1.25,z=t*[1,2,,,1,2,,2][7&r>>13],",
				"p=(z*4.56&128)/3*(1-r&2047)/600*((-r&4096)/4e3*(-r&2048)/4e3)+",
				"sin(9*cbrt(r%32768))*48+48+random()*(1-r&8091)/8e3*64*[0,0,1,1,0,0,1,0][7&r>>13]"
			],
			"codeMinified": "r=t/1.25,z=t*[1,2,,,1,2,,2][7&r>>13],p=(4.56*z&128)/3*(1-r&2047)/600*((-r&4096)/4E3*(-r&2048)/4E3)+48*sin(9*cbrt(r%32768))+48+random()*(1-r&8091)/8E3*64*'00110010'[7&r>>13]"
		}, {
			"name": "CRAZY NOISE BEAT!!! ( ╯°□°)╯ ┻━━┻",
			"url": "https://dollchan.net/btb/res/204.html#476",
			"remix": {
				"author": "Gabriel Miceli",
				"name": "Noise Maker",
				"url": "https://www.youtube.com/watch?v=V4GfkFbDojc"
			},
			"date": "2023-02-25",
			"sampleRate": 11025,
			"codeOriginal": "i=t&8191,127-(((t>>9^(t>>9)-1^1)%13*t&255)/2+((t>>3|t<<(t>>12&2))*(4096>i)+(t>>4|t*(t^t+t/256))*(4095<i)&255)/2)*(2+(t>>16))%256/2+(3e4/(t*'1111111211111124'[15&t>>12]%4096)**.1&128)/1.5",
			"starred": 1
		}, {
			"name": "inside castle",
			"url": "https://dollchan.net/btb/res/204.html#480",
			"remix": {
				"name": "Castle at the night",
				"url": "https://dollchan.net/btb/res/204.html#414"
			},
			"date": "2023-02-26",
			"sampleRate": 44100,
			"codeOriginal": "a=t=>(p=[2,4,5,9,2,4,5,9,2,4,5,9,12,9,7,5,0,2,4,7,0,2,4,7,0,2,4,7,0,2,4,0,-2,0,2,5,-2,0,2,5,-2,0,2,5,-2,0,2,-2,-3,-1,1,4,-3,-1,1,4,-3,-1,1,7,-3,-1,1,9][(t>>13)%64],z=t*2**(p/12)*3.2,(z&128)/1.5)*(1-t%8192/12e3),a(t)/1+a(t-12168)/2+a(t-12168*2)/4+a(t-12168*3)/8+a(t-12168*4)/16",
			"codeMinified": "a=t=>(p=[2,4,5,9,2,4,5,9,2,4,5,9,12,9,7,5,0,2,4,7,0,2,4,7,0,2,4,7,0,2,4,0,-2,0,2,5,-2,0,2,5,-2,0,2,5,-2,0,2,-2,-3,-1,1,4,-3,-1,1,4,-3,-1,1,7,-3,-1,1,9][(t>>13)%64],z=t*2**(p/12)*3.2,(z&128)/1.5)*(1-t%8192/12E3),a(t)+a(t-12168)/2+a(t-24336)/4+a(t-36504)/8+a(t-48672)/16",
			"starred": 1
		}, {
			"name": "DJ harmony",
			"url": "https://dollchan.net/btb/res/204.html#498",
			"remix": {
				"author": "miiro",
				"name": "Sierpinski harmony",
				"url": "https://youtu.be/qlrs2Vorw2Y?t=2m14s"
			},
			"date": "2023-03-02",
			"sampleRate": 10000,
			"codeOriginal": [
				"(8*t&t>>8|1.3333*t&t>>6|6*t&t>>9)%256/3+sin(16*cbrt(t%4096))*32+32+",
				"(t/1.5%64)*1.5*(t%4096/4e3)*(1&-t>>9)"
			],
			"codeMinified": "(8*t&t>>8|1.3333*t&t>>6|6*t&t>>9)%256/3+32*sin(16*cbrt(t%4096))+32+t/1.5%64*1.5*(t%4096/4E3)*(1&-t>>9)"
		}, {
			"name": "Works as evil",
			"url": "https://dollchan.net/btb/res/204.html#525",
			"date": "2023-03-05",
			"sampleRate": 48000,
			"codeOriginal": [
				"e=sin(t/3e3)*16+64,r=t/1.5,a=x=>2**((x+2.85)/12),",
				"(((127&t*a([[1,8,4,8,3,8,-1,8],[-1,6,3,6,1,6,3,6],[-3,4,1,4,-1,4,1,4],[3,1,0,1,3,-9,4,-8,6,-6,8,-4,9,-3,11,-1]][!(~r>>16&2)|[2&r>>17]][r>>12&[7,7,7,7,7,7,7,15][7&r>>16]]))+(e)&128)*(-r>>4&255)>>8)+((127&t*a([1,1,1,4,-1,-1,-1,-1,-3,-3,-3,-3,-4,-4,-4,0][15&r>>15])/8)+(sin(t/8e3)*16+64)&128)/2"
			],
			"codeMinified": "e=16*sin(t/3E3)+64,r=t/1.5,a=x=>2**((x+2.85)/12),(((127&t*a([[1,8,4,8,3,8,-1,8],[-1,6,3,6,1,6,3,6],[-3,4,1,4,-1,4,1,4],[3,1,0,1,3,-9,4,-8,6,-6,8,-4,9,-3,11,-1]][!(~r>>16&2)|[2&r>>17]][r>>12&[7,7,7,7,7,7,7,15][7&r>>16]]))+e&128)*(-r>>4&255)>>8)+((127&t*a([1,1,1,4,-1,-1,-1,-1,-3,-3,-3,-3,-4,-4,-4,0][15&r>>15])/8)+(16*sin(t/8E3)+64)&128)/2",
			"starred": 1
		}, {
			"name": "City night",
			"url": "https://dollchan.net/btb/res/204.html#562",
			"remix": {
				"name": "Works as evil",
				"url": "https://dollchan.net/btb/res/204.html#525"
			},
			"date": "2023-03-08",
			"sampleRate": 44100,
			"stereo": true,
			"codeOriginal": [
				"s=x=>t*2**((x)/12),e=3&t>>18,",
				"g=[0,2,4,5][e],g2=[0,2,4,5][e],g3=[0,0,5,5][e],g4=[0,0,5,3][e],g5=[0,0,0,2][e],",
				"a=t=>(p=s([1-g,13-g2,8-g5,4-g3,6-g4,4-g3,8-g5,4-g3][(t>>13)%8]),((p/1.4&127)+(sin(t/8e3)*16+64)&128)/1.5)*(1-t%8192/12E3),",
				"[a(t)+a(t-12168)/2+a(t-12168*3)/4,a(t)+a(t-12168*2)/2+a(t-12168*4)/4]"
			],
			"codeMinified": "s=x=>t*2**(x/12),e=3&t>>18,g=[0,2,4,5][e],g2=[0,2,4,5][e],g3=[0,0,5,5][e],g4=[0,0,5,3][e],g5=[0,0,0,2][e],a=t=>(p=s([1-g,13-g2,8-g5,4-g3,6-g4,4-g3,8-g5,4-g3][(t>>13)%8]),((p/1.4&127)+(16*sin(t/8E3)+64)&128)/1.5)*(1-t%8192/12E3),[a(t)+a(t-12168)/2+a(t-36504)/4,a(t)+a(t-24336)/2+a(t-48672)/4]",
			"starred": 2
		}, {
			"name": "Synthwave remis",
			"url": "https://dollchan.net/btb/res/520.html#589",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "Synthwave",
				"url": "https://dollchan.net/btb/res/520.html#577"
			},
			"date": "2023-03-11",
			"sampleRate": 44100,
			"codeOriginal": "r=t/1.66,a=t*1.01*2**([0,-2,0,3,5,7,10,12,-5,-2,0,3,5,7,10,12,-7,-2,-4,0,3,5,10,5,0,-2,-4,0,3,5,10,5,-9,-7,-5,-2,-4,0,3,8,-5,-7,-5,-2,-4,0,3,8,-5,-2,7,5,-5,-2,7,3,-5,-2,5,2,0,3,2,-2][r>>12&63]/12),a=(a%256+a%254)/4,b=t*.503*2**([0,-2,-4,-5][r>>16&3]/12),b=(b%256+b%255)/5,(a+b)/2+32*sin(10*cbrt(r%16384))+32+(t*sin(r>>1)&-r>>7&255)*(r&16384)/32E3",
			"starred": 1
		}, {
			"name": "PWM",
			"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/comment/jcp0vjk/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "please someone remix this",
				"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/please_someone_remix_this/"
			},
			"date": "2023-03-18",
			"sampleRate": 32000,
			"codeOriginal": "r=t*1.2,c=x=>t*2.09*2**(x/12),a=((c([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,][r>>12&127])&127)+(sin(t/4e3)*16+64)&128)*(-r>>4&255)>>9,b=c([5,5,7,3,5,5,5,3,1,1,3,3,-2,-2,-2,1][15&r>>15])/8,a*2+((b&127)+(sin(t/8e3)*16+64)&128)/1.5",
			"codeMinified": "r=1.2*t,c=x=>2.09*t*2**(x/12),a=((c([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7][r>>12&127])&127)+(16*sin(t/4E3)+64)&128)*(-r>>4&255)>>9,b=c([5,5,7,3,5,5,5,3,1,1,3,3,-2,-2,-2,1][15&r>>15])/8,2*a+((b&127)+(16*sin(t/8E3)+64)&128)/1.5",
			"starred": 1
		}, {
			"name": "X100X",
			"url": "https://dollchan.net/btb/res/204.html#665",
			"remix": {
				"author": "Glebguything",
				"name": "random 100c music i made",
				"url": "https://www.reddit.com/r/bytebeat/comments/11mq8e4/comment/jbk5fv8/?utm_source=reddit&utm_medium=web2x&context=3"
			},
			"date": "2023-03-20",
			"sampleRate": 40000,
			"codeOriginal": "t/=4,t*(t>>5|t>>6|t>>7|t>>8|t)%256/4+50+50*sin(4E3/(t*'4211111211141128'[15&t>>12]%4096)**.02)+(75*random()&-t>>5)*'01'[(t>>12)%2]",
			"starred": 1
		}, {
			"name": "epic coolest",
			"url": "https://dollchan.net/btb/res/204.html#706",
			"remix": {
				"name": "Cool song adding bass",
				"url": "https://dollchan.net/btb/res/204.html#384"
			},
			"date": "2023-03-28",
			"sampleRate": 44100,
			"codeOriginal": "c=x=>t*2**((x-1.9)/12),r=t/1.5,((p=c([0,0,3,3,5,5,3,2,0,0,-2,-2,-4,-4,-5,-1][15&r>>14]))&r>>6)%256/3+(p/2%256/8+p/2%254/8)*(r>262144?1:0)+(random()*(-r*'2112'[3&r>>13]&4095)/96)*(r>524288?1:0)+(t*sin(r/1.5>>1)&-r>>7&255)*(r&16384)/32E3*(r>786432?1:0)+(sin(3e3/(r%16384)**.01)*32+32)*(r>1048576?1:0)",
			"codeMinified": "c=x=>t*2**((x-1.9)/12),r=t/1.5,((p=c([0,0,3,3,5,5,3,2,0,0,-2,-2,-4,-4,-5,-1][15&r>>14]))&r>>6)%256/3+(p/2%256/8+p/2%254/8)*(262144<r)+random()*(-r*'2112'[3&r>>13]&4095)/96*(524288<r)+(t*sin(r/1.5>>1)&-r>>7&255)*(r&16384)/32E3*(786432<r)+(32*sin(3E3/(r%16384)**.01)+32)*(1048576<r)"
		}, {
			"name": "squ + delay effect",
			"url": "https://dollchan.net/btb/res/520.html#708",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "what the hell did i made",
				"url": "https://dollchan.net/btb/res/520.html#702"
			},
			"date": "2023-03-28",
			"sampleRate": 70997,
			"codeOriginal": [
				"T=t*.2361,",
				"a=t=>(T*2**([4,4,7,7,9,9,11,11,12,12,11,11,9,9,7,7,9,9,14,14,2,2,14,14,9,9,14,14,2,2,14,14,16,16,11,11,7,7,16,16,11,11,7,7,16,16,11,11,4,4,11,11,12,12,4,4,11,11,12,14,14,14,12,12,7,7,11,11,7,7,11,11,7,7,11,11,14,14,11,11,14,14,9,9,6,6,9,9,14,14,9,9,6,6,14,14,16,16,11,11,19,19,16,16,11,11,16,16,19,19,11,11,12,12,7,7,12,12,16,16,19,19,16,19,19,19,24,24][(t>>13)%128]/12)*2&64)*(1-t%16384/32e3),(abs(cbrt(sin(T*PI/128*2**([7,6,7,12.1][t>>17&3]/12))))*32)+(abs(cbrt(sin(T*PI/128*2**([11,9,4,0][t>>17&3]/12))))*32)+(abs(cbrt(sin(T*PI/128*2**([18.95,18,16,16][t>>17&3]/12))))*32)+a(t)+a(t-24336)/2+a(t-24336*2)/4+a(t-24336*3)/8+a(t-24336*4)/16"
			],
			"codeMinified": "T=.2361*t,a=t=>(T*2**([4,4,7,7,9,9,11,11,12,12,11,11,9,9,7,7,9,9,14,14,2,2,14,14,9,9,14,14,2,2,14,14,16,16,11,11,7,7,16,16,11,11,7,7,16,16,11,11,4,4,11,11,12,12,4,4,11,11,12,14,14,14,12,12,7,7,11,11,7,7,11,11,7,7,11,11,14,14,11,11,14,14,9,9,6,6,9,9,14,14,9,9,6,6,14,14,16,16,11,11,19,19,16,16,11,11,16,16,19,19,11,11,12,12,7,7,12,12,16,16,19,19,16,19,19,19,24,24][(t>>13)%128]/12)*2&64)*(1-t%16384/32E3),b=k=>32*abs(cbrt(sin(T*PI/128*2**(k[t>>17&3]/12)))),a(t)+a(t-24336)/2+a(t-48672)/4+a(t-73008)/8+a(t-97344)/16+b([7,6,7,12.1])+b([11,9,4,0])+b([18.95,18,16,16])",
			"starred": 2
		}, {
			"name": "DJ techno",
			"url": "https://dollchan.net/btb/res/204.html#729",
			"remix": {
				"author": "Gabriel Miceli",
				"name": "Techno",
				"url": "https://www.youtube.com/watch?v=V4GfkFbDojc"
			},
			"date": "2023-03-31",
			"sampleRate": 13000,
			"codeOriginal": [
				"r=t/1.25,p=2.35,((((t/10|0)^(t/10|0)-1280)%11*t/p&127)+(((t/640|0)^(t/640|0)-2)%13*t/p&127))/2+sin(3e3/(r%4096)**.01)*32+32+",
				"(t*sin(t)&-r>>6&127)*(r&4096)/4e3"
			],
			"codeMinified": "r=t/1.25,p=2.35,((((t/10|0)^(t/10|0)-1280)%11*t/p&127)+(((t/640|0)^(t/640|0)-2)%13*t/p&127))/2+32*sin(3E3/(r%4096)**.01)+32+(t*sin(t)&-r>>6&127)*(r&4096)/4E3"
		}, {
			"name": "nightmare in castle",
			"url": "https://dollchan.net/btb/res/204.html#770",
			"remix": {
				"name": "inside castle",
				"url": "https://dollchan.net/btb/res/204.html#480"
			},
			"date": "2023-04-06",
			"sampleRate": 44100,
			"codeOriginal": "T=1/1.2,a=t=>(p=[2,4,5,12,2,4,5,9,2,4,5,9,7,9,7,5,0,2,4,7,0,2,4,9,0,2,4,7,0,2,4,0,-2,0,2,5,-2,0,2,7,-2,0,2,9,-2,0,2,-2,0,2,4,9,0,2,4,7,1,2,4,10,4,5,7,14][(t*T>>13)%64],z=t*2**(p/12)*1.355,(z&128)/1.5)*(1-t*T%8192/12E3),a(t)+a(t-(1<<12)*3/T)/2+a(t-(1<<12)*5/T)/4+a(t-(1<<12)*7/T)/8+a(t-(1<<12)*9/T)/16",
			"codeMinified": "T=1/1.2,a=t=>(p=[2,4,5,12,2,4,5,9,2,4,5,9,7,9,7,5,0,2,4,7,0,2,4,9,0,2,4,7,0,2,4,0,-2,0,2,5,-2,0,2,7,-2,0,2,9,-2,0,2,-2,0,2,4,9,0,2,4,7,1,2,4,10,4,5,7,14][(t*T>>13)%64],z=t*2**(p/12)*1.355,(z&128)/1.5)*(1-t*T%8192/12E3),a(t)+a(t-12288/T)/2+a(t-20480/T)/4+a(t-28672/T)/8+a(t-36864/T)/16",
			"starred": 1
		}, {
			"name": "what i making in midnight (harmony)",
			"url": "https://dollchan.net/btb/res/204.html#772",
			"date": "2023-04-06",
			"sampleRate": 44100,
			"codeOriginal": "T=1.05,a=t=>(p=[0,7,12,0,7,12,0,7,12,0,7,15,14,15,10,5,-4,3,8,-4,3,8,-4,3,8,-4,3,8,-5,2,7,10][(t*T>>13)%32],z=t*2**(p/12)*1.8,(z&-t*T>>5&255)/1.5)*(1-t*T%8192/12E3),a(t)+a(t-(1<<12)*3/T)/2+a(t-(1<<12)*5/T)/4+a(t-(1<<12)*7/T)/8+a(t-(1<<12)*9/T)/16",
			"codeMinified": "T=1.05,a=t=>(p=[0,7,12,0,7,12,0,7,12,0,7,15,14,15,10,5,-4,3,8,-4,3,8,-4,3,8,-4,3,8,-5,2,7,10][(t*T>>13)%32],z=t*2**(p/12)*1.8,(z&-t*T>>5&255)/1.5)*(1-t*T%8192/12E3),a(t)+a(t-12288/T)/2+a(t-20480/T)/4+a(t-28672/T)/8+a(t-36864/T)/16",
			"starred": 2
		}, {
			"name": "what i making in midnight (squarewave)",
			"url": "https://dollchan.net/btb/res/204.html#772",
			"remix": {
				"name": "what i making in midnight (harmony)",
				"url": "https://dollchan.net/btb/res/204.html#772"
			},
			"date": "2023-04-06",
			"sampleRate": 55600,
			"codeOriginal": "T=.75,a=t=>(p=[0,7,12,0,7,12,0,7,12,0,7,15,14,15,10,5,-4,3,8,-4,3,8,-4,3,8,-4,3,8,-5,2,7,10][(t*T>>13)%32],z=t*2**(p/12)*1.8/2.53,(z&-t*T>>6&64)/1.5)*(1-t*T%8192/12E3),a(t)+a(t-(1<<12)*3/T)/2+a(t-(1<<12)*5/T)/4+a(t-(1<<12)*7/T)/8+a(t-(1<<12)*9/T)/16+a(t-(1<<12)*11/T)/32",
			"codeMinified": "T=.75,a=t=>(p=[0,7,12,0,7,12,0,7,12,0,7,15,14,15,10,5,-4,3,8,-4,3,8,-4,3,8,-4,3,8,-5,2,7,10][(t*T>>13)%32],z=t*2**(p/12)*1.8/2.53,(z&-t*T>>6&64)/1.5)*(1-t*T%8192/12E3),a(t)+a(t-12288/T)/2+a(t-20480/T)/4+a(t-28672/T)/8+a(t-36864/T)/16+a(t-45056/T)/32",
			"starred": 2
		}, {
			"name": "time leap",
			"url": "https://dollchan.net/btb/res/204.html#783",
			"cover": {
				"name": "Aero Chord - Time Leap",
				"url": "https://youtu.be/beDFafObkFw"
			},
			"date": "2023-04-07",
			"sampleRate": 44100,
			"codeOriginal": "T=1.0525,b=a=>t*2**([0,0,0,2,4,4,4,7][7&t*T>>15]/12)/5.95%a/2,a=t=>(p=[0,7,,0,7,,0,7,,0,7,11,9,7,6,2,4,7,,4,7,,4,7,,4,11,12,14,7,6,2][(t*T>>13)%32],z=t*2**(p/12)*2.7,(z&-t*T>>5&255)/1.5)*(1-t*T%8192/12E3)/2,a(t)+a(t-(1<<12)*3/T)/2+a(t-(1<<12)*5/T)/4+a(t-(1<<12)*7/T)/8+a(t-(1<<12)*9/T)/16+(b(128)+b(127))*(t*T>524288?1:0)",
			"codeMinified": "T=1.0525,b=a=>t*2**([0,0,0,2,4,4,4,7][7&t*T>>15]/12)/5.95%a/2,a=t=>(p=[0,7,,0,7,,0,7,,0,7,11,9,7,6,2,4,7,,4,7,,4,7,,4,11,12,14,7,6,2][(t*T>>13)%32],z=t*2**(p/12)*2.7,(z&-t*T>>5&255)/1.5)*(1-t*T%8192/12E3)/2,a(t)+a(t-12288/T)/2+a(t-20480/T)/4+a(t-28672/T)/8+a(t-36864/T)/16+(b(128)+b(127))*(524288<t*T?1:0)",
			"starred": 2
		}, {
			"name": "( ͡° ͜ʖ ͡°) #2",
			"url": "https://dollchan.net/btb/res/204.html#785",
			"remix": {
				"author": "getDolphinedLol",
				"name": "( ͡° ͜ʖ ͡°)",
				"url": "https://www.reddit.com/r/bytebeat/comments/s6xqf1/%CA%96/"
			},
			"date": "2023-04-07",
			"sampleRate": 11025,
			"codeOriginal": [
				"F=[sin(t>>3),2][(t>66536?1:0)],F2=[sin(t),3][(t>66536?1:0)],F3=a=>[sin(t>>a),2][(t>262144?1:0)],F4=[,2][(t>262144?1:0)],",
				"((([sin(t>>3),F,sin(t),F3(4),sin(t>>2),F4,sin(t),F4,sin(t>>3),F3(3),sin(t),F4,sin(t>>2),F4,sin(t),F2][(128+t>>11)%16]*t&128+t>>3)-20)&255)/3+sin(3E3/(t*'11111112'[7&t>>12]%4096)**.02)*32+32"
			],
			"codeMinified": "F=[sin(t>>3),2][+(66536<t)],F2=[sin(t),3][+(66536<t)],F3=a=>[sin(t>>a),2][+(262144<t)],F4=[,2][+(262144<t)],(([sin(t>>3),F,sin(t),F3(4),sin(t>>2),F4,sin(t),F4,sin(t>>3),F3(3),sin(t),F4,sin(t>>2),F4,sin(t),F2][(128+t>>11)%16]*t&128+t>>3)-20&255)/3+32*sin(3E3/(t*'11111112'[7&t>>12]%4096)**.02)+32",
			"starred": 2
		}, {
			"name": "crazy noise beat + ( ͡° ͜ʖ ͡°) #2 stereo mix",
			"url": "https://dollchan.net/btb/res/204.html#807",
			"remix": [{
				"name": "( ͡° ͜ʖ ͡°) #2",
				"url": "https://dollchan.net/btb/res/204.html#785"
			}, {
				"name": "CRAZY NOISE BEAT!!! ( ╯°□°)╯ ┻━━┻",
				"url": "https://dollchan.net/btb/res/204.html#476"
			}],
			"date": "2023-04-11",
			"sampleRate": 11025,
			"stereo": true,
			"codeOriginal": [
				"F=[sin(t>>3),2][(t>66536?1:0)],F2=[sin(t),3][(t>66536?1:0)],F3=a=>[sin(t>>a),2][(t>262144?1:0)],F4=[,2][(t>262144?1:0)],",
				"[(((([sin(t>>3),F,sin(t),F3(4),sin(t>>2),F4,sin(t),F4,sin(t>>3),F3(3),sin(t),F4,sin(t>>2),F4,sin(t),F2][(128+t>>11)%16]*t&128+t>>3)-20)&255)/3+sin(3E3/(t*'11111112'[7&t>>12]%4096)**.02)*32+32),+",
				"(i=t&8191,127-(((t>>9^(t>>9)-1^1)%13*t&255)/2+((t>>3|t<<(t>>12&2))*(4096>i)+(t>>4|t*(t^t+t/256))*(4095<i)&255)/2)*(2+(t>>16))%256/2+(3e4/(t*'1111111211111124'[15&t>>12]%4096)**.1&128)/1.5)]"
			],
			"codeMinified": "F=[sin(t>>3),2][+(66536<t)],F2=[sin(t),3][+(66536<t)],F3=a=>[sin(t>>a),2][+(262144<t)],F4=[,2][+(262144<t)],[(([sin(t>>3),F,sin(t),F3(4),sin(t>>2),F4,sin(t),F4,sin(t>>3),F3(3),sin(t),F4,sin(t>>2),F4,sin(t),F2][(128+t>>11)%16]*t&128+t>>3)-20&255)/3+32*sin(3E3/(t*'11111112'[7&t>>12]%4096)**.02)+32,(i=t&8191,127-(((t>>9^(t>>9)-1^1)%13*t&255)/2+((t>>3|t<<(t>>12&2))*(4096>i)+(t>>4|t*(t^t+t/256))*(4095<i)&255)/2)*(2+(t>>16))%256/2+(3E4/(t*'1111111211111124'[15&t>>12]%4096)**.1&128)/1.5)]",
			"starred": 1
		}, {
			"name": "remix of the throwback",
			"url": "https://dollchan.net/btb/res/204.html#815",
			"remix": {
				"author": "lhphr",
				"name": "the throwback",
				"url": "https://dollchan.net/btb/res/44.html#481"
			},
			"date": "2023-04-11",
			"mode": "Signed Bytebeat",
			"sampleRate": 48000,
			"codeOriginal": "(t/=1.25)||(d=Array(15360).fill(0),x=0),x+=2**([[0,3,7,12,15,12,7,3],[3*(t>>15&1),7,10,15,19,15,10,7],[5,9,12,17,21,17,12,9],[8,12,15,20,24,20,15,12]][t>>16&3][t>>12&7]/12+1.24*1.8),x%=512,o=(x&256?127-x/2:x/2)+d[t*1.25%15360],d[(t*1.25-1)%15360]=o/2,o/4+(B=t*2**([1,1,6,9][3&t>>16]/12)/11.6,B%64+B%63.7)-64",
			"codeMinified": "(t/=1.25)||(d=Array(15360).fill(0),x=0),x+=2**([[0,3,7,12,15,12,7,3],[3*(t>>15&1),7,10,15,19,15,10,7],[5,9,12,17,21,17,12,9],[8,12,15,20,24,20,15,12]][t>>16&3][t>>12&7]/12+2.232),x%=512,o=(x&256?127-x/2:x/2)+d[1.25*t%15360],d[(1.25*t-1)%15360]=o/2,o/4+(B=t*2**([1,1,6,9][3&t>>16]/12)/11.6,B%64+B%63.7)-64",
			"starred": 1
		}, {
			"name": "LET'S PARTY EVERYONE!!!!!!!!!!",
			"url": "https://dollchan.net/btb/res/204.html#839",
			"remix": {
				"author": "Decent-Manager-6169",
				"name": "please someone remix this",
				"url": "https://www.reddit.com/r/bytebeat/comments/11ud8tv/please_someone_remix_this/"
			},
			"date": "2023-04-16",
			"sampleRate": 44100,
			"codeOriginal": "r=t*1.15,c=x=>t*2**((x+13)/12),h=m=>(r>m),a=((c([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,][r>>12&127])&(-r>>4)&255)/4),b=a=>c([5,5,5,1,8,8,8,3,1,1,3,3,-2,-2,-2,1][15&r>>15])/16%a,(a+(b(128)+b(127))/3*(r>524288?r<1572864:0)+((b(128)&64)*h(1048576))*(r&8192)/7e3)*(r<1540096?1:r>1572864)+(64&(2e4/(r*'1113111411141128'[15&r>>14]%16384+512)**.1))*h(1572864)+random()*(1-r%32768/4e4)*64*h(1540096)*(r<1572864)+(t*sin(t>>4)&(255&-r>>7)*(r&32768)/32e3)/4*h(2621440)",
			"codeMinified": "r=1.15*t,c=x=>t*2**((x+13)/12),h=m=>(r>m),a=(c([8,0,-7,5,0,-7,8,0,-7,5,0,-7,8,0,5,-7,10,0,-7,5,0,-11,10,1,-7,7,3,-2,10,3,-2,7,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7,8,-4,-11,5,-4,-11,8,-4,-7,5,-4,-11,10,-4,5,-7,7,-2,-9,3,-2,-9,7,-2,-9,3,-9,-2,8,7,5,10,12,0,-7,8,0,-7,12,0,-7,8,0,-7,12,0,8,-7,12,0,-7,8,0,-7,12,0,10,1,3,7,-2,3,5,7][r>>12&127])&-r>>4&255)/4,b=a=>c([5,5,5,1,8,8,8,3,1,1,3,3,-2,-2,-2,1][15&r>>15])/16%a,(a+(b(128)+b(127))/3*(524288<r?1572864>r:0)+(b(128)&64)*h(1048576)*(r&8192)/7E3)*(1540096>r?1:1572864<r)+(64&2E4/(r*'1113111411141128'[15&r>>14]%16384+512)**.1)*h(1572864)+random()*(1-r%32768/4E4)*64*h(1540096)*(1572864>r)+(t*sin(t>>4)&(255&-r>>7)*(r&32768)/32E3)/4*h(2621440)",
			"starred": 1
		}, {
			"name": "Ststututterter hardcore remix",
			"url": "https://dollchan.net/btb/res/204.html#848",
			"remix": {
				"author": "Unknown",
				"name": "Ststututterter",
				"url": "https://www.reddit.com/r/bytebeat/comments/20km9l/cool_equations/"
			},
			"date": "2023-04-17",
			"sampleRate": 11025,
			"codeOriginal": "(255&(t*-(t>>8|t|t>>9|t>>13)^t))/2+((3e4/(t*'1114111811121110'[15&t>>12]%4096)**.1)&128)",
			"codeMinified": "(255&(t*-(t>>8|t|t>>9|t>>13)^t))/2+(3E4/(t*'1114111811121110'[15&t>>12]%4096)**.1&128)"
		}, {
			"name": "a remix of \"PARTY!\"",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/12onki0/comment/jgnq7mz/?utm_source=reddit&utm_medium=web2x&context=3",
				"https://dollchan.net/btb/res/204.html#853"
			],
			"remix": {
				"author": "Scary-Sand2937",
				"name": "PARTY!",
				"url": "https://www.reddit.com/r/bytebeat/comments/12onki0/party/"
			},
			"date": "2023-04-17",
			"sampleRate": 37500,
			"codeOriginal": "t/=4,b=w=>t*2**([0,2,4,4,0,2,-3,-3][7&t>>14]/12)*1.05%w/2,((((t+t%[1,3,5,2][(t/3>>10)&3])*2**([0,1,3,5,7,8][(t>>10)%6]/12)<<((t>>[10,11][t/3>>10&1])*1.25&3)>>1&63)-(t>>10&31|1)|t>>2)&255)/2.5+b(127)+b(128)",
			"codeMinified": "t/=4,b=a=>t*2**([0,2,4,4,0,2,-3,-3][7&t>>14]/12)*1.05%a/2,((((t+t%[1,3,5,2][t/3>>10&3])*2**([0,1,3,5,7,8][(t>>10)%6]/12)<<(1.25*(t>>[10,11][t/3>>10&1])&3)>>1&63)-(t>>10&31|1)|t>>2)&255)/2.5+b(127)+b(128)",
			"starred": 1
		}, {
			"name": "funny hardcore song",
			"url": "https://dollchan.net/btb/res/204.html#861",
			"date": "2023-04-18",
			"sampleRate": 38000,
			"codeOriginal": "d='1114111211141138'[15&t>>14],(t^t>>(-t*d>>12&3))%256/2.5*(t&8192)/8192+((4e4/(t*d%16384)**.1)&128)/1.75+(t*sin(t>>2)&(-t>>7&127))*(t&8192*2)/16384",
			"codeMinified": "d='1114111211141138'[15&t>>14],(t^t>>(-t*d>>12&3))%256/2.5*(t&8192)/8192+(4E4/(t*d%16384)**.1&128)/1.75+(t*sin(t>>2)&-t>>7&127)*(t&16384)/16384"
		}, {
			"name": "hardcore bass",
			"url": "https://dollchan.net/btb/res/204.html#863",
			"date": "2023-04-18",
			"sampleRate": 32000,
			"codeOriginal": "d='3363111311133386'[15&t>>13],((4e4/(t*d%16384+512)**.1)&128)/2+(t*sin(t>>1)&(-t>>7&127))*(t&8192*2)/24e3+64-sin(t*PI/246)*((t>>7&127)+(48)&128)/3",
			"codeMinified": "d='3363111311133386'[15&t>>13],(4E4/(t*d%16384+512)**.1&128)/2+(t*sin(t>>1)&-t>>7&127)*(t&16384)/24E3+64-sin(t*PI/246)*((t>>7&127)+48&128)/3",
			"starred": 2
		}, {
			"name": "the ryg",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/12r8v3k/list_of_my_creationremixes/",
				"https://dollchan.net/btb/res/204.html#866"
			],
			"remix": {
				"author": "ryg",
				"url": "https://www.pouet.net/topic.php?which=8357&page=12#c389146"
			},
			"date": "2023-04-19",
			"sampleRate": 44100,
			"codeOriginal": "(t*('36364689'[t>>13&7]&15)/12&128)/2+(((t>>12^(t>>12)-2)%11*t/4|t>>13)&127)*(t>1048576)/2.5+cbrt(sin(3e3/(t*(a='1112111411121348'[15&t>>14])%16384+128*a)**.02))*32+32+(((t*sin(t>>3)&128)*(-t>>8&127)>>7)*(t&32768)/64e3)*(t>524288)",
			"codeMinified": "(t*('36364689'[t>>13&7]&15)/12&128)/2+(((t>>12^(t>>12)-2)%11*t/4|t>>13)&127)*(t>1048576)/2.5+32*cbrt(sin(3E3/(t*(a='1112111411121348'[15&t>>14])%16384+128*a)**.02))+32+((t*sin(t>>3)&128)*(-t>>8&127)>>7)*(t&32768)/64E3*(t>524288)",
			"starred": 1
		}, {
			"name": "STAY",
			"url": "https://dollchan.net/btb/res/204.html#868",
			"cover": {
				"name": "The Kid LAROI, Justin Bieber - STAY",
				"url": "https://youtu.be/kTJczUoc26U"
			},
			"date": "2023-04-19",
			"sampleRate": 48000,
			"codeOriginal": "r=8192,a=t=>(p=t/1.36*2**([-19,-1,0,7,,,0,,-17,,-1,0,,,-5,,-15,-1,0,7,,,0,,-20,,-1,0,,,-5,-3][(t>>13)%32]/12),(((p&127)+16)&128)*(1-t%r/r)),a(t)+a(t-r*2)/4+a(t-r*4)/6+a(t-r*8)/12+a(t-r*16)/24",
			"codeMinified": "r=8192,a=t=>(p=t/1.36*2**([-19,-1,0,7,,,0,,-17,,-1,0,,,-5,,-15,-1,0,7,,,0,,-20,,-1,0,,,-5,-3][(t>>13)%32]/12),((p&127)+16&128)*(1-t%r/r)),a(t)+a(t-2*r)/4+a(t-4*r)/6+a(t-8*r)/12+a(t-16*r)/24",
			"starred": 2
		}, {
			"name": "happy thing with long sierpinski harmony",
			"url": "https://dollchan.net/btb/res/204.html#873",
			"date": "2023-04-19",
			"sampleRate": 48000,
			"stereo": true,
			"codeOriginal": [
				"r=12288,a=t=>(t*2**(([[0,2,4,5,7,9,11,14,0,2,4,5,7,9,11,16],[-3,4,7,9,12,14,12,16,-3,4,7,9,12,14,12,19]][!(~t>>16&2)|[1&t>>17]][(t>>13)%16]+.7)/12)&t>>12&255)*(1-t%8192/16e3)/2,",
				"[",
				"a(t)+a(t-r)/2+a(t-r*2)/8+a(t-r*3)/6+a(t-r*4)/12+a(t-r*5)/12,",
				"a(t)+a(t-r)/4+a(t-r*2)/6+a(t-r*3)/8+a(t-r*4)/8+a(t-r*5)/24]"
			],
			"codeMinified": "r=12288,a=t=>(t*2**(([[0,2,4,5,7,9,11,14,0,2,4,5,7,9,11,16],[-3,4,7,9,12,14,12,16,-3,4,7,9,12,14,12,19]][!(~t>>16&2)|[1&t>>17]][(t>>13)%16]+.7)/12)&t>>12&255)*(1-t%8192/16E3)/2,[a(t)+a(t-r)/2+a(t-r*2)/8+a(t-r*3)/6+a(t-r*4)/12+a(t-r*5)/12,a(t)+a(t-r)/4+a(t-r*2)/6+a(t-r*3)/8+a(t-r*4)/8+a(t-r*5)/24]",
			"starred": 2
		}, {
			"name": "unnamed song hardcore remix",
			"url": "https://dollchan.net/btb/res/204.html#874",
			"remix": {
				"author": "Anonymous from russian imageboards",
				"name": "Extraordinary thread of FRACTAL MUSIC",
				"url": "http://arhivach.ng/thread/28592/#71679463"
			},
			"date": "2023-04-20",
			"sampleRate": 44100,
			"codeOriginal": "t/=4,(5*(t+(t^t>>7)^.5)|19*(2*t>>43|15*t>>4)&(7*t>>172)/2*t*((t>>9|t>>13)&15)&129|t*((t>>9|3<t)&25&t>>10))%256/2.5+(3e4/(t*'1114111211141348'[15&t>>12]%4096)**.1&128)*(t>65536)/1.5+(cos(t*PI*2)*(t)-t>>7&127)*(t&8192)/18e3*(t>262144)",
			"codeMinified": "t/=4,(5*(t+(t^t>>7)^.5)|19*(2*t>>43|15*t>>4)&(7*t>>172)/2*t*((t>>9|t>>13)&15)&129|t*((t>>9|3<t)&25&t>>10))%256/2.5+(3E4/(t*'1114111211141348'[15&t>>12]%4096)**.1&128)*(t>65536)/1.5+(cos(t*PI*2)*t-t>>7&127)*(t&8192)/18E3*(262144<t)"
		}, {
			"name": "drums detail",
			"url": "https://dollchan.net/btb/res/204.html#891",
			"date": "2023-04-20",
			"sampleRate": 48000,
			"codeOriginal": "((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13]",
			"codeMinified": "(300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13]",
			"starred": 1
		}, {
			"name": "BЯΣΛKXӨЯᄃӨЯΣ",
			"url": "https://dollchan.net/btb/res/204.html#891",
			"remix": {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			},
			"date": "2023-04-20",
			"sampleRate": 48000,
			"codeOriginal": "(t^t>>(-t*'1111111211111124'[15&t>>14]>>12&3)<<(t>>14&7))%256/3+((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13]",
			"codeMinified": "(t^t>>(-t*'1111111211111124'[15&t>>14]>>12&3)<<(t>>14&7))%256/3+(300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13]",
			"starred": 1
		}, {
			"name": "Morning day",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/12sl3rv/i_made_perfectly_song_with_2_songs/",
				"https://dollchan.net/btb/res/204.html#892"
			],
			"remix": [{
				"name": "happy thing with long sierpinski harmony",
				"url": "https://dollchan.net/btb/res/204.html#873"
			}, {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			}],
			"date": "2023-04-20",
			"sampleRate": 48000,
			"stereo": true,
			"codeOriginal": [
				"r=12288,e=x=>t*2**((x+.75)/12),a=t=>(e(([0,2,4,5,7,9,11,14,0,2,4,5,7,9,11,16,-3,4,7,9,12,14,12,16,-3,4,7,9,12,14,12,19][(t>>13)%32]+12))&256)*(1-t%8192/16e3)/6,g=(((3e2**(t*[1,,,4,,4,4,8,1,,,4,,4,8,16][15&t>>13]%32768)**.04)&128)/2.75+(random()*(-t&4095)/150)*(t>524288)+((t*sin(t>>2)&255)*(-t&8191)/32e3)*'00100101'[7&t>>13])*(t>262144),b=((127&e([0,0,0,2,-3,-3,-3,4][7&t>>15])/8)+(sin(t/2e4)*16+64)&128)/3*(t>1048576),",
				"[a(t)+a(t-r)/2+a(t-r*2)/8+a(t-r*3)/6+a(t-r*4)/12+a(t-r*5)/12+g+b,a(t)+a(t-r)/4+a(t-r*2)/6+a(t-r*3)/8+a(t-r*4)/8+a(t-r*5)/24+g+b]"
			],
			"codeMinified": "r=12288,e=x=>t*2**((x+.75)/12),a=t=>(e([0,2,4,5,7,9,11,14,0,2,4,5,7,9,11,16,-3,4,7,9,12,14,12,16,-3,4,7,9,12,14,12,19][(t>>13)%32]+12)&256)*(1-t%8192/16E3)/6,g=((300**((t*[1,,,4,,4,4,8,1,,,4,,4,8,16][15&t>>13]%32768)**.04)&128)/2.75+random()*(-t&4095)/150*(524288<t)+(t*sin(t>>2)&255)*(-t&8191)/32E3*'00100101'[7&t>>13])*(262144<t),b=((127&e([0,0,0,2,-3,-3,-3,4][7&t>>15])/8)+(16*sin(t/2E4)+64)&128)/3*(1048576<t),[a(t)+a(t-r)/2+a(t-r*2)/8+a(t-r*3)/6+a(t-r*4)/12+a(t-r*5)/12+g+b,a(t)+a(t-r)/4+a(t-r*2)/6+a(t-r*3)/8+a(t-r*4)/8+a(t-r*5)/24+g+b]",
			"starred": 2
		}, {
			"name": "madfuldescent{offset} hardcore remix",
			"url": "https://dollchan.net/btb/res/204.html#898",
			"date": "2023-04-21",
			"sampleRate": 11025,
			"codeOriginal": "1.999*((t>>(t>>17)%3)*-(t>>9|t>>8|t>>10|t>>3|t)+(t>>(t>>16)%3)*(t>>9|t>>17)&128)/3+((3e4/(t*'1111118844220242'[15&t>>11]%4096)**.1)&128)",
			"codeMinified": "1.999*((t>>(t>>17)%3)*-(t>>9|t>>8|t>>10|t>>3|t)+(t>>(t>>16)%3)*(t>>9|t>>17)&128)/3+(3E4/(t*'1111118844220242'[15&t>>11]%4096)**.1&128)"
		}, {
			"name": "Melody XOR breakcore",
			"url": "https://dollchan.net/btb/res/204.html#899",
			"remix": {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			},
			"date": "2023-04-21",
			"sampleRate": 48000,
			"codeOriginal": "p=t/2**(('08753875'[7&t>>16])/12),(p*1.38^p*1.39>>(-t>>12&3)<<(t>>15&3))%256/3+((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13]",
			"codeMinified": "p=t/2**('08753875'[7&t>>16]/12),(1.38*p^1.39*p>>(-t>>12&3)<<(t>>15&3))%256/3+(300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13]",
			"starred": 1
		}, {
			"name": "BM9 harmony speed up with drum",
			"url": "https://www.reddit.com/r/bytebeat/comments/12vt718/list_of_my_creatorremixes_2/",
			"remix": [{
				"author": "May_I_Change_My_Name",
				"name": "BM9 harmony",
				"url": "https://www.reddit.com/r/bytebeat/comments/yi1cf9/u_wot_m9/"
			}, {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			}],
			"date": "2023-04-23",
			"sampleRate": 44400,
			"codeOriginal": "i=t/4,(2*i&i>>8|5*i&i>>7|9*i&i>>4|15*i&i>>4)%256/2.5+(((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13])/1.25",
			"codeMinified": "i=t/4,(2*i&i>>8|5*i&i>>7|9*i&i>>4|15*i&i>>4)%256/2.5+((300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13])/1.25"
		}, {
			"name": "( ͡° ͜ʖ ͡°) breakcore",
			"url": "https://www.reddit.com/r/bytebeat/comments/12vt718/list_of_my_creatorremixes_2/",
			"remix": [{
				"author": "getDolphinedLol",
				"name": "( ͡° ͜ʖ ͡°)",
				"url": "https://www.reddit.com/r/bytebeat/comments/s6xqf1/%CA%96/"
			}, {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			}],
			"date": "2023-04-23",
			"sampleRate": 44400,
			"codeOriginal": "((([sin(t>>5),2,,2,sin(t>>5),2,,2,sin(t>>5),2,,2,sin(t>>5),2,,3][(768+t>>13)%16]*t/4&768+t>>5)-20)&255)/3+(((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/20e3)*'00100101'[7&t>>13])/1.5+cos(t*PI/2)*(1-t%8192/8192)*[0,18][1&t>>13]+18",
			"codeMinified": "(([sin(t>>5),2,,2,sin(t>>5),2,,2,sin(t>>5),2,,2,sin(t>>5),2,,3][(768+t>>13)%16]*t/4&768+t>>5)-20&255)/3+((300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/2E4*'00100101'[7&t>>13])/1.5+cos(t*PI/2)*(1-t%8192/8192)*[0,18][1&t>>13]+18",
			"starred": 1
		}, {
			"name": "neurobreakcore",
			"url": "https://www.reddit.com/r/bytebeat/comments/12vt718/list_of_my_creatorremixes_2/",
			"remix": [{
				"author": "SthephanShi",
				"name": "Neurofunk",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0laz2/neurofunk/"
			}, {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			}],
			"date": "2023-04-23",
			"sampleRate": 32000,
			"codeOriginal": "l=t/4,(l*((l&4096?59392>l%65536?7:l&7:16)+(1&l>>14))>>(3&-l>>(l&2048?2:10))|l>>(l&16384?l&4096?10:3:2))%256/2.5+(((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13])/1.25",
			"codeMinified": "l=t/4,(l*((l&4096?59392>l%65536?7:l&7:16)+(1&l>>14))>>(3&-l>>(l&2048?2:10))|l>>(l&16384?l&4096?10:3:2))%256/2.5+((300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13])/1.25"
		}, {
			"name": "Hard level with drum",
			"url": "https://www.reddit.com/r/bytebeat/comments/12vt718/list_of_my_creatorremixes_2/",
			"remix": [{
				"author": "SthephanShi",
				"name": "Hard level"
			}, {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			}],
			"date": "2023-04-23",
			"sampleRate": 32000,
			"codeOriginal": "i=t/4,(i*(i&16384?7:5)*(5-(3&i>>8))>>(3&-i>>(i&4096?2:16))|i>>(i&16384?i&4096?3:4:3))%256/3+(((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13])/1.5",
			"codeMinified": "i=t/4,(i*(i&16384?7:5)*(5-(3&i>>8))>>(3&-i>>(i&4096?2:16))|i>>(i&16384?i&4096?3:4:3))%256/3+((300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13])/1.5",
			"starred": 1
		}, {
			"name": "Discobreakcore",
			"url": "https://dollchan.net/btb/res/204.html#930",
			"remix": {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			},
			"date": "2023-04-24",
			"sampleRate": 39720,
			"codeOriginal": "i=t/4,128-((i&8%\"21 35 3\"[i>>9&6]*i|i>>5|i*6&i>>7%i*(i&1024?2:6)|(i&20?1:5))+(64-t/2%16384)/64)%256/2+(((3e2**(t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+(random()*(-t&4095)/150)+((t*sin(t>>2)&255)*(-t&8191)/24e3)*'00100101'[7&t>>13])/2",
			"codeMinified": "i=t/4,128-((i&8%'21 35 3'[i>>9&6]*i|i>>5|6*i&i>>7%i*(i&1024?2:6)|(i&20?1:5))+(64-t/2%16384)/64)%256/2+((300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13])/2"
		}, {
			"name": "Future car",
			"url": "https://dollchan.net/btb/res/204.html#964",
			"date": "2023-04-27",
			"sampleRate": 44100,
			"codeOriginal": "r=t/1.3,u=(r<1048576?r<1032192:1),l=[0,0,-7,-4,0,0,3,5][7&r>>16],p=t*'1121122112121222'[15&r>>12]/2.22*2**(l/12)*u,148-((1.003*p%256+.997*p%256)/6*(-p*2&256)>>9)+((sin(3e3/(r%16384+512)**.01))*32)*(r&8192?0:1)*u*(r>262144)+(p%64+p%86+p%512/4)/4*(r>524288)*u-64+((sin(3e3/(r%16384+2e3)**.1)*24)*(r>1032192?r<1048576:0)+random()*((-r>>6&255)>>3))*(r>1032192)*(r&16384?1:0)+(32&t*2**(([-7,0,5,17,24,29,24,17][7&r>>11]+l)/12)/5.94)/1.75*(r>1572864)",
			"codeMinified": "r=t/1.3,u=r<1048576?r<1032192:1,l=[0,0,-7,-4,0,0,3,5][7&r>>16],p=t*'1121122112121222'[15&r>>12]/2.22*2**(l/12)*u,148-((1.003*p%256+.997*p%256)/6*(2*-p&256)>>9)+32*sin(3E3/(r%16384+512)**.01)*(r&8192?0:1)*u*(r>262144)+(p%64+p%86+p%512/4)/4*(r>524288)*u-64+(24*sin(3E3/(r%16384+2E3)**.1)*(r>1032192?r<1048576:0)+random()*((-r>>6&255)>>3))*(r>1032192)*(r&16384?1:0)+(32&t*2**(([-7,0,5,17,24,29,24,17][7&r>>11]+l)/12)/5.94)/1.75*(r>1572864)",
			"starred": 1
		}, {
			"name": "multi channel with function",
			"url": "https://dollchan.net/btb/res/204.html#974",
			"date": "2023-04-29",
			"sampleRate": 32000,
			"codeOriginal": [
				"e=x=>t*2**((x-4.4)/12),s=(a,b,c)=>((a&128)/2+(b&32)+(c%128)/2),",
				"s(",
				"e([0,12,0,12,-7,5,-5,7][7&t>>13]),",
				"e([0,2,4,5,7,7,12,12,10,7,5,7,9,5,9,5][15&t>>12]),",
				"e([0,4,7,12,16,19,24,28][7&t>>17]))"
			],
			"codeMinified": "e=x=>t*2**((x-4.4)/12),s=(a,b,c)=>(a&128)/2+(b&32)+c%128/2,s(e([0,12,0,12,-7,5,-5,7][7&t>>13]),e([0,2,4,5,7,7,12,12,10,7,5,7,9,5,9,5][15&t>>12]),e([0,4,7,12,16,19,24,28][7&t>>17]))",
			"starred": 1
		}, {
			"name": "C64 thing",
			"url": "https://dollchan.net/btb/res/204.html#1091",
			"date": "2023-05-26",
			"sampleRate": 32000,
			"codeOriginal": "(t*2**('047'[(t>>10)%3]/12)*1.04*2**('0572'[3&t>>17]/12)&127)+(t>>10)&128"
		}, {
			"name": "U.N. owen was her? (melody)",
			"url": "https://dollchan.net/btb/res/204.html#1149",
			"cover": {
				"name": "Flandre's theme - U.N. Owen was her?",
				"url": "https://youtu.be/VIop055eJhU"
			},
			"date": "2023-06-01",
			"sampleRate": 44100,
			"codeOriginal": [
				"r=t/1.04,squ=x=>(32&x),pwm=x=>((127&x/2)+(r>>10)&128),n=x=>t*2**((x+5.5)/12),",
				"squ(n([0,0,,,7,7,,,2,2,,,7,7,,,3,3,,,5,5,7,7,5,5,,,9,9,,,12,12,7,7,14,14,15,15,14,14,15,14,12,12,10,10,7,7,10,,5,5,7,,3,3,3,3,3,3,3,3][63&r>>12]))*2+squ(n([0,0,,,7,7,,,2,2,,,7,7,,,4,4,,,6,6,7,7,6,6,,,9,9,,,12,12,7,7,14,14,16,16,14,14,16,14,12,12,9,9,7,7,9,,6,6,7,,4,4,4,4,4,4,4,4][63&r>>12])/1.25)/1.65+pwm(n([8,10,12,9,8,10,12,12,12][7&r>>15])/8)/2"
			],
			"codeMinified": "r=t/1.04,squ=x=>32&x,pwm=x=>(127&x/2)+(r>>10)&128,n=x=>t*2**((x+5.5)/12),2*squ(n([0,0,,,7,7,,,2,2,,,7,7,,,3,3,,,5,5,7,7,5,5,,,9,9,,,12,12,7,7,14,14,15,15,14,14,15,14,12,12,10,10,7,7,10,,5,5,7,,3,3,3,3,3,3,3,3][63&r>>12]))+squ(n([0,0,,,7,7,,,2,2,,,7,7,,,4,4,,,6,6,7,7,6,6,,,9,9,,,12,12,7,7,14,14,16,16,14,14,16,14,12,12,9,9,7,7,9,,6,6,7,,4,4,4,4,4,4,4,4][63&r>>12])/1.25)/1.65+pwm(n([8,10,12,9,8,10,12,12,12][7&r>>15])/8)/2"
		}, {
			"name": "we land on mars (SID machine)",
			"url": "https://dollchan.net/btb/res/204.html#1214",
			"cover": {
				"name": "Matt Simmonds - Empty (512 bytes)",
				"url": "https://deepsid.chordian.net/?file=/MUSICIANS/0-9/4-Mat/Empty_512_bytes.sid"
			},
			"date": "2023-06-04",
			"sampleRate": 48000,
			"codeOriginal": "n=x=>t*2**((x-.91)/12),r=t*1.4,(((127&n([[0,3,7],[-2,2,5],[-4,0,3],[-7,-4,0]][3&r>>17][(r/1.33333>>10)%3]))+(sin(t/12E3)*24+64)&128)*((-r>>5)&255)>>9)+(r>>5&255)/8+64+((127&n([0,0,12,12,,,,-2,0,,12,12,3,3,15,15,-2,-2,10,10,,,,-4,-2,,10,10,5,5,7,7,-4,-4,8,8,,,,-6,-4,-4,8,8,-4,,8,8,-7,-7,5,5,,,,-9,-7,-7,5,,-5,-5,7,][63&r>>13])/8)+(r>>10)&128)/3",
			"codeMinified": "n=x=>t*2**((x-.91)/12),r=1.4*t,(((127&n([[0,3,7],[-2,2,5],[-4,0,3],[-7,-4,0]][3&r>>17][(r/1.33333>>10)%3]))+(24*sin(t/12E3)+64)&128)*(-r>>5&255)>>9)+(r>>5&255)/8+64+((127&n([0,0,12,12,,,,-2,0,,12,12,3,3,15,15,-2,-2,10,10,,,,-4,-2,,10,10,5,5,7,7,-4,-4,8,8,,,,-6,-4,-4,8,8,-4,,8,8,-7,-7,5,5,,,,-9,-7,-7,5,,-5,-5,7][63&r>>13])/8)+(r>>10)&128)/3",
			"starred": 1
		}, {
			"name": "night of nights (flowering night)",
			"url": "https://dollchan.net/btb/res/204.html#1242",
			"cover": {
				"name": "Izayoi Sakuya's theme - Night of Nights",
				"url": "https://youtu.be/vS_a8Edde8k"
			},
			"date": "2023-06-07",
			"sampleRate": 48000,
			"codeOriginal": "s=x=>(v=q=>(x*q&255)/5,v(1)+v(1.006)+v(2)+v(2.01)+v(1.5)*.5),n=x=>t*1.975*2**(parseInt((x),36)/12),s(n('4444bbbbaabbaabbddddbbbbaabbaa668888ffffddffddffiiiiffffddddffff4444bbbbaabbaabbddddbbbbaabbaa668888ffffddffddffijjjffffddddffff4444bbbbaabbaabbddddbbbbaabbaa668888ffffddffddffiiiiffffbbbbccccdddd        ddddffff        ffffggg g g hh  hh  iiiiiiiiiiiiiiii'[255&t>>11]))",
			"codeMinified": "s=x=>(v=q=>(x*q&255)/5,v(1)+v(1.006)+v(2)+v(2.01)+.5*v(1.5)),n=x=>1.975*t*2**(parseInt(x,36)/12),s(n('4444bbbbaabbaabbddddbbbbaabbaa668888ffffddffddffiiiiffffddddffff4444bbbbaabbaabbddddbbbbaabbaa668888ffffddffddffijjjffffddddffff4444bbbbaabbaabbddddbbbbaabbaa668888ffffddffddffiiiiffffbbbbccccdddd        ddddffff        ffffggg g g hh  hh  iiiiiiiiiiiiiiii'[255&t>>11]))"
		}, {
			"name": "o(^▽^)┛",
			"url": "https://dollchan.net/btb/res/204.html#1295",
			"date": "2023-06-12",
			"sampleRate": 48000,
			"codeOriginal": "r=t/1.1,g=x=>parseInt(x,36),n=x=>t*2**(x/12)/1.71,e=15&r>>15,pwm=x=>((x/2&127)+(r>>10)&128)/2.01,p=n(g([['BCEJ','HCA9'],['37AF','279E']][!(~r>>17&3)|0][1&r>>16][3&r>>11>>(1&r>>16)])),((p&127)+32&128)/2+pwm(n(g('75757532'[7&r>>16]))/2)+pwm(n(g('2750279527503326'[e])))+pwm(n(g('7BC97EHCEJHLFFIL'[e])))",
			"starred": "1"
		}, {
			"name": "Megalovania remix",
			"url": "https://www.reddit.com/r/bytebeat/comments/14ceiyb/comment/joqrwb3/?utm_source=reddit&utm_medium=web2x&context=3",
			"cover": {
				"name": "Undertale - Megalovania",
				"url": "https://youtu.be/wDgQdr8ZkTw"
			},
			"remix": {
				"author": "hcdphobe",
				"name": "slowlovania",
				"url": "https://www.reddit.com/r/bytebeat/comments/14ceiyb/slowlovania/"
			},
			"date": "2023-06-19",
			"sampleRate": 35500,
			"codeOriginal": "T=t/1,Y=T>>11&31,Y2=T>>16&3,m=NaN,v=min(32,-t*2**([1,m,1,m,13,13,13,m,8,8,8,m,m,m,7,7,7,m,6,6,6,m,4,4,4,4,1,1,4,4,6,6][Y]/12)&96)*2,x=f=>f*t*2**([1,-1,-3,-1][Y2]/12)&255,v2=f=>x(f)&-T>>6&255,c=v+(v2(1)+v2(.99)+v2(1.5)+v2(1.505)+v2(.75)+x(1)*(-T&16383)/9e3)/8,c*c>>16?255:c",
			"starred": 1
		}, {
			"name": "START!",
			"url": "https://dollchan.net/btb/res/204.html#1393",
			"date": "2023-06-23",
			"sampleRate": 48000,
			"codeOriginal": [
				"r=t*.9,n=x=>t*2**(parseInt(x,36)/12)*.83,saw=x=>n(x)/4%256/4,squ=x=>(n(x)&64)/2,",
				"h=[",
				"'1111111144144242',",
				"'2211224423336333',",
				"'2222422424224222',",
				"'1112222132212244'",
				"][3&r>>(3&~r>>16)>>2][15&r>>12],",
				"sin(6*cbrt(r*h%16384/h+64))*(1-r*h%8192/8192)*(r*h&8192?0:1)*64+64+saw('1D1D1D681D1D1DGF'[15&r>>13])*(r>524288)+",
				"squ('8BDGBISPKGNPWZWNBDKDLGNPWSRLKIGI'[31&r>>12])*(r>1048576)"
			],
			"codeMinified": "r=.9*t,n=x=>t*2**(parseInt(x,36)/12)*.83,saw=x=>n(x)/4%256/4,squ=x=>(n(x)&64)/2,h=['1111111144144242','2211224423336333','2222422424224222','1112222132212244'][3&r>>(3&~r>>16)>>2][15&r>>12],sin(6*cbrt(r*h%16384/h+64))*(1-r*h%8192/8192)*(r*h&8192?0:1)*64+64+saw('1D1D1D681D1D1DGF'[15&r>>13])*(524288<r)+squ('8BDGBISPKGNPWZWNBDKDLGNPWSRLKIGI'[31&r>>12])*(1048576<r)"
		}, {
			"name": "london bridge is falling down",
			"url": "https://dollchan.net/btb/res/204.html#1402",
			"cover": {
				"name": "London Bridge is Falling Down",
				"url": "https://youtu.be/pUu0FWlMpgk"
			},
			"date": "2023-06-25",
			"sampleRate": 48000,
			"codeOriginal": "t*2**(parseInt('KKKMKKIIHHIIKKKKFFHHIIIIHHIIKKKKKKKMKKIIHHIIKKKKFFFFKKKKHHDDDDDD'[63&t/1.45>>12],36)/12)*1.31&128"
		}, {
			"name": "Frère Jacques/Brother John",
			"url": "https://dollchan.net/btb/res/204.html#1402",
			"cover": {
				"name": "Frère Jacques",
				"url": "https://youtu.be/BC6rvbxdywg"
			},
			"date": "2023-06-25",
			"sampleRate": 48000,
			"codeOriginal": [
				"r=t/1.45,n=(x,y,z)=>(64&t*2**(parseInt(x,36)/12)/2.88/z)/((r*y%32768+2048)**.6)*128,",
				"n('CCEEGGCCCCEEGGCCGGHHJJJJGGHHJJJJJLJHGGCCJLJHGGCCCC77CCCCCC77CCCC'[63&r>>13],",
				"'2222212142422121'[15&r>>15],1)+n(['CJGJCJGJ','CCC7CC77'][1&r>>18][7&r>>13],[4,'11141122'[7&r>>13]][1&r>>18],2)"
			],
			"codeMinified": "r=t/1.45,n=(x,y,z)=>(64&t*2**(parseInt(x,36)/12)/2.88/z)/(r*y%32768+2048)**.6*128,n('CCEEGGCCCCEEGGCCGGHHJJJJGGHHJJJJJLJHGGCCJLJHGGCCCC77CCCCCC77CCCC'[63&r>>13],'2222212142422121'[15&r>>15],1)+n(['CJGJCJGJ','CCC7CC77'][1&r>>18][7&r>>13],[4,'11141122'[7&r>>13]][1&r>>18],2)",
			"starred": 1
		}, {
			"name": "rickroll with parseInt",
			"url": "https://dollchan.net/btb/res/204.html#1405",
			"cover": {
				"name": "Rick Astley - Never Gonna Give You Up",
				"url": "https://youtu.be/dQw4w9WgXcQ"
			},
			"remix": {
				"author": "Gasman",
				"name": "some kind of 80s synth type thing (Never Gonna Give You Up)",
				"url": "http://www.pouet.net/topic.php?which=8357&page=12#c389109"
			},
			"date": "2023-06-26",
			"sampleRate": 32000,
			"codeOriginal": "t*2**(parseInt('ACFCJJ JJ HHHHHHACEAHH HH FFFFFFACFCFF HH EEEEEECCAAHHHHHHFFFFFF'[63&t>>12],36)/12)&255"
		}, {
			"name": "Spring park",
			"url": "https://dollchan.net/btb/res/204.html#1445",
			"date": "2023-06-30",
			"sampleRate": 40000,
			"codeOriginal": "((127&t*2**(parseInt('5CL5J5L05CL5J5L02CL2J2LM2OM2L2J0'[31&t>>13],36)/12)*.395)+(sin(t/8E3)*24+64)&128)*(1-t%8192/12e3)*2+(t/32%256)/3",
			"codeMinified": "((127&t*2**(parseInt('5CL5J5L05CL5J5L02CL2J2LM2OM2L2J0'[31&t>>13],36)/12)*.395)+(24*sin(t/8E3)+64)&128)*(1-t%8192/12E3)*2+t/32%256/3"
		}, {
			"name": "some rave",
			"url": "https://dollchan.net/btb/res/204.html#1451",
			"date": "2023-07-01",
			"sampleRate": 50000,
			"codeOriginal": "(t/4%256*(t&4096?0:1)*(t%32768/32768))/2+sin(2E4/(t%32768+1024)**.8)*48+48+((t*sin(t>>2)&64)*(-t>>7&255)>>8)*(t&32768?1:0)",
			"codeMinified": "t/4%256*!(t&4096)*(t%32768/32768)/2+48*sin(2E4/(t%32768+1024)**.8)+48+((t*sin(t>>2)&64)*(-t>>7&255)>>8)*!!(t&32768)"
		}, {
			"name": "boss incoming!",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/14o7gdv/they_alone_in_the_forest/",
				"https://dollchan.net/btb/res/204.html#1462"
			],
			"description": "\"Someone in the forest found the rarest sword and suddenly the boss will appear.\" Nice arpeggios.",
			"date": "2023-07-02",
			"sampleRate": 44100,
			"codeOriginal": "q=x=>parseInt(x,36),T=t*1.4,y=T*4/3,p=t*2**(q(['79AEA9','79AHA9','39AEA9','269CA9'][3&y>>17][(T>>13)%6])/12),(p%256+p%255)/6+((127&t*2**(q('7732'[(3&y>>17)])/12)/8)+(y>>10)&128)/2*(524288<y)+(64&t*2**(q(['7AE','AEH','37A',['279','69C'][1&T>>17]][3&y>>17][(y>>11)%3])/12))/3*(1048576<y)+(random()*16*'200020203320200020202030'[(T>>12)%24])*(2097152<y)",
			"codeMinified": "q=x=>parseInt(x,36),T=1.4*t,y=4*T/3,p=t*2**(q(['79AEA9','79AHA9','39AEA9','269CA9'][3&y>>17][(T>>13)%6])/12),(p%256+p%255)/6+((127&t*2**(q('7732'[3&y>>17])/12)/8)+(y>>10)&128)/2*(y>524288)+(64&t*2**(q(['7AE','AEH','37A',['279','69C'][1&T>>17]][3&y>>17][(y>>11)%3])/12))/3*(y>1048576)+16*random()*'200020203320200020202030'[(T>>12)%24]*(y>2097152)",
			"starred": 1
		}, {
			"name": "badapple",
			"description": "The shortest Bad Apple cover!",
			"url": "https://dollchan.net/btb/res/204.html#1470",
			"cover": {
				"name": "Touhou Project - Bad Apple",
				"url": "https://youtu.be/FtutLA63Cp8"
			},
			"date": "2023-07-03",
			"codeOriginal": "a='4679BBGEBB44B9764679BB976',t>>t*2**(parseInt((a+'4676436'+a+'67799BB')[63&t*1.2>>11],36)/12)"
		}, {
			"name": "triple baka",
			"url": "https://dollchan.net/btb/res/204.html#1482",
			"date": "2023-07-05",
			"mode": "Signed Bytebeat",
			"sampleRate": 48000,
			"codeOriginal": "v=t*PI/32*2**(parseInt('D 8 8   8   6   5 6 8   8   1'[31&t*1.05>>11],36)/12)*.992,(sin(v+sin(v)))*64&255",
			"codeMinified": "v=t*PI/32*2**(parseInt('D 8 8   8   6   5 6 8   8   1'[31&1.05*t>>11],36)/12)*.992,64*sin(v+sin(v))&255"
		}, {
			"name": "daylight",
			"url": "https://dollchan.net/btb/res/204.html#1570",
			"date": "2023-07-09",
			"mode": "Signed Bytebeat",
			"sampleRate": 48000,
			"codeOriginal": "n=x=>t*2**(parseInt(x,36)/12)/1.14,r=t/1.4,((n(['I8','D3','H1',['I3','H1'][1&r>>15]][3&r>>16][1&r>>13])&128)-64)/3*(1-r%8192/14E3)+((n('BBAA88A8'[7&r>>15])%256)-128)/4*(1-r%8192/14E3)+((n('88331131'[7&r>>15])/(r&8192?4:8)%128)-64)*(1-r*(r&32768?2:1)%8192/9E3)",
			"codeMinified": "n=x=>t*2**(parseInt(x,36)/12)/1.14,r=t/1.4,((n(['I8','D3','H1',['I3','H1'][1&r>>15]][3&r>>16][1&r>>13])&128)-64)/3*(1-r%8192/14E3)+(n('BBAA88A8'[7&r>>15])%256-128)/4*(1-r%8192/14E3)+(n('88331131'[7&r>>15])/(r&8192?4:8)%128-64)*(1-r*(r&32768?2:1)%8192/9E3)",
			"starred": 1
		}, {
			"name": "MӨӨПƧᄃΛППΣЯ",
			"url": "https://dollchan.net/btb/res/204.html#1606",
			"remix": [{
				"author": "viznut",
				"name": "moon scanner generalization",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			}, {
				"name": "drums detail",
				"url": "https://dollchan.net/btb/res/204.html#891"
			}],
			"date": "2023-07-12",
			"sampleRate": 48000,
			"codeOriginal": "i=t/4,((2*(i>>5&i)-(i>>5)+i*(i>>14&14))&255)/3+((300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13])",
			"codeMinified": "i=t/4,(2*(i>>5&i)-(i>>5)+i*(i>>14&14)&255)/3+((300**((t*[[1,,,4,,4,4,8,4],[1,,,4,,4,8,16]][!(~t>>16&1)|0][7&t>>13]%32768)**.04)&128)/2+random()*(-t&4095)/150+(t*sin(t>>2)&255)*(-t&8191)/24E3*'00100101'[7&t>>13])",
			"starred": 1
		}, {
			"name": "ΛᄃIDIƧƬIᄃ",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/150ewfy/%CE%BB%E1%84%83idi%C6%A8%C6%ADi%E1%84%83/",
				"https://dollchan.net/btb/res/204.html#1625"
			],
			"date": "2023-07-15",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "r=t*1.8,e=(r>>13)%12,((((t*2**(parseInt('3FF3FF3F1D4G'[e],36)/12)/3.4&255)*(1-(r>>'02202200000'[e])%8192/10e3)*(-cos(t/4E4)+2)&64)-32)*(~r>>'566566555555'[e]&255)>>6)",
			"codeMinified": "r=1.8*t,e=(r>>13)%12,(((t*2**(parseInt('3FF3FF3F1D4G'[e],36)/12)/3.4&255)*(1-(r>>'02202200000'[e])%8192/1E4)*(-cos(t/4E4)+2)&64)-32)*(~r>>'566566555555'[e]&255)>>6",
			"starred": 1
		}, {
			"name": "Power Up",
			"url": "https://www.reddit.com/r/bytebeat/comments/1528126/2_sound_effect_super_mario_bros/",
			"date": "2023-07-17",
			"sampleRate": 47300,
			"codeOriginal": "(t*2**(parseInt('616ADID269E9EILQL48BGBGKNSN'[t*1.28>>11],36)/12)&127)+32&128",
			"starred": 2
		}, {
			"name": "1-Up",
			"url": "https://www.reddit.com/r/bytebeat/comments/1528126/2_sound_effect_super_mario_bros/",
			"date": "2023-07-17",
			"sampleRate": 47300,
			"codeOriginal": "r=t*1.23,((128&t*2**(parseInt('9CLHJO'[r>>13],36)/12)*4.22))*(1-r%8192/13E3)",
			"codeMinified": "r=1.23*t,(128&t*2**(parseInt('9CLHJO'[r>>13],36)/12)*4.22)*(1-r%8192/13E3)",
			"starred": 1
		}, {
			"name": "better cover of \"we like to party!\"",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/15397al/better_cover_of_we_like_to_party/",
				"https://dollchan.net/btb/res/204.html#1660"
			],
			"cover": {
				"name": "Vengaboys - We like to Party!",
				"url": "https://youtu.be/6Zbi0XmGtMw"
			},
			"date": "2023-07-18",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": [
				"r=t/1.16,n=(x,y)=>(((t*2**(parseInt(x,36)/12)/1.183/y)&255)-128)/2*'1010101010110100'[15&r>>12],",
				"n(['HHFFHHFFHHAAAA','DDFFDDFFDDHHHH'][1&r>>17][15&r>>12],1)+",
				"n(['HHFFHHFFHHAAAA','EEFFEEFFEEHHHH'][1&r>>17][15&r>>12],5)"
			],
			"codeMinified": "r=t/1.16,i=15&r>>12,j=1&r>>17,n=(x,y)=>((t*2**(parseInt(x,36)/12)/1.183/y&255)-128)/2*'1010101010110100'[i],n(['HHFFHHFFHHAAAA','DDFFDDFFDDHHHH'][j][i],1)+n(['HHFFHHFFHHAAAA','EEFFEEFFEEHHHH'][j][i],5)"
		}, {
			"name": "cherry blossom",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/154anfb/cherry_blossom/",
				"https://dollchan.net/btb/res/204.html#1673"
			],
			"date": "2023-07-20",
			"sampleRate": 44100,
			"codeOriginal": "a=t=>((127&t*2**(parseInt('3A7C502HJMLHJECA'[(t>>13)%16],36)/12)/1.178)+76&128)*(1-t%8192/10E3),a(t)+a(t-12288)/2+a(t-24576)/4+a(t-36864)/8+a(t-49152)/16",
			"codeMinified": "a=t=>((127&t*2**(parseInt('3A7C502HJMLHJECA'[(t>>13)%16],36)/12)/1.178)+76&128)*(1-t%8192/1E4),a(t)+a(t-12288)/2+a(t-24576)/4+a(t-36864)/8+a(t-49152)/16",
			"starred": 1
		}, {
			"name": "sleepless nights",
			"url": "https://dollchan.net/btb/res/204.html#1800",
			"cover": {
				"name": "FM Attack - Sleepless Nights",
				"url": "https://youtu.be/afSjekgcalI"
			},
			"date": "2023-07-19",
			"sampleRate": 48000,
			"codeOriginal": "r=1.38,a=t=>((p=x=>t*2**(parseInt('6DIK6DIL6DIK4BGI29EG29EG29EG4BGI'[(t/r>>13)%32],36)/12)/1.22*x&255),p(1)+p(.992))/3*(1-t/r%8192/12E3),a(t)+a(t-12288*r)/2+a(t-24576*r)/4+a(t-49152*r)/8",
			"codeMinified": "r=1.38,a=t=>(p=x=>t*2**(parseInt('6DIK6DIL6DIK4BGI29EG29EG29EG4BGI'[(t/r>>13)%32],36)/12)/1.22*x&255,p(1)+p(.992))/3*(1-t/r%8192/12E3),a(t)+a(t-12288*r)/2+a(t-24576*r)/4+a(t-49152*r)/8",
			"starred": 2
		}, {
			"name": "stars racing",
			"description": "Beautiful arpeggio with echo.",
			"url": "https://dollchan.net/btb/res/204.html#1681",
			"date": "2023-07-20",
			"sampleRate": 44100,
			"codeOriginal": "a=t=>(t*2**(parseInt('OKHFKDCFKA858135'[(t>>11)%16],36)/12)*2**('0251'[3&t>>17]/12)*2&128)*(1-t%2048/2048/(-cos(t/4E4)+2)),a(t)+a(t-12288)/2+a(t-24576)/4",
			"starred": 1
		}, {
			"name": "ヾ(⌐■_■)ノ♪",
			"url": [
				"https://dollchan.net/btb/res/204.html#1683",
				"https://dollchan.net/btb/res/204.html#1816"
			],
			"date": "2023-07-21",
			"sampleRate": 48000,
			"codeOriginal": "a=t=>(t*2**(parseInt('0CV0COHJ8OMQAMTY'[(t>>13)%16],36)/12)/2.4&128)*(1-t%8192/12E3),a(t)+a(t-12288)/2+a(t-24576)/4+a(t-36864)/8+a(t-49152)/16",
			"starred": 2
		}, {
			"name": "lazy jones - star dust",
			"url": [
				"https://www.reddit.com/r/bytebeat/comments/155w0cg/lazy_jones_star_dust_kernkraft_400/",
				"https://dollchan.net/btb/res/204.html#1685"
			],
			"cover": {
				"name": "Lazy Jones - Star Dust",
				"url": "https://youtu.be/YsorGbKwNlA?t=23"
			},
			"remix": {
				"name": "kernkraft 400",
				"url": "https://dollchan.net/btb/res/204.html#280"
			},
			"date": "2023-07-21",
			"mode": "Signed Bytebeat",
			"sampleRate": 32000,
			"codeOriginal": [
				"r=t*1.25,w=(x,y)=>((t*2**(x/12)/y%256/4)-32)*(-cos(r*PI/4096)+1),",
				"w([-12,12,15,17,19,0,-12,0,-12,12,15,17,19,20,19,15,17,5,-7,5,15,7,19,12,-12,0,-12,0,-12,0,-12,0][31&r>>13],.99)+w([0,0,0,0,5,7,0,0][7&r>>15],'21'[1&r>>13])"
			],
			"codeMinified": "r=1.25*t,w=(x,y)=>(t*2**(x/12)/y%256/4-32)*(-cos(r*PI/4096)+1),w([-12,12,15,17,19,0,-12,0,-12,12,15,17,19,20,19,15,17,5,-7,5,15,7,19,12,-12,0,-12,0,-12,0,-12,0][31&r>>13],.99)+w([0,0,0,0,5,7,0,0][7&r>>15],'21'[1&r>>13])"
		}, {
			"name": "SAW thing",
			"url": "https://dollchan.net/btb/res/204.html#1733",
			"date": "2023-07-21",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": "r=t*1.7,((t*2**(parseInt('0C00C0CC'[(r>>13)%8],36)/12)/2.65%256)-128)*(1-r%8192/8192/(-cos(t/8E4)+2))",
			"codeMinified": "r=1.7*t,(t*2**(parseInt('0C00C0CC'[(r>>13)%8],36)/12)/2.65%256-128)*(1-r%8192/8192/(-cos(t/8E4)+2))"
		}, {
			"name": "SID thing",
			"url": "https://dollchan.net/btb/res/204.html#1724",
			"date": "2023-07-25",
			"sampleRate": 48000,
			"codeOriginal": "(t*2**(parseInt(['69D9','69D4','48B8','1384'][3&t>>16][3&t>>11],36)/12)&127)+(t>>9&127)&128",
			"starred": 1
		}, {
			"name": "Falling snow",
			"url": "https://dollchan.net/btb/res/204.html#1759",
			"date": "2023-07-29",
			"sampleRate": 44100,
			"codeOriginal": "r=.77,d=12288/r,a=t=>(128&t*2**(parseInt(['VTSQOJGECEGJOQST','VTRQMJHFAFHJOQRT'][1&t*r>>17][(t*r>>12)%16],36)/12)*1.51),a(t)+a(t-d)/2+a(t-d*2)/4",
			"starred": 2
		}, {
			"name": "Blue Da Ba Dee",
			"url": "https://dollchan.net/btb/res/204.html#1816",
			"cover": {
				"name": "Eiffel 65 - Blue (Da Ba Dee)",
				"url": "https://youtu.be/zA52uNzx7Y4"
			},
			"date": "2023-08-06",
			"sampleRate": 38000,
			"codeOriginal": "a=t=>((t*2**(parseInt(['JBGJLEIJCGJNOGNL','JBGJI9EG07EG0EGI'][!(~t>>17&3)|0][(t>>13)%16],36)/12)/1.92&127)+(t>>6&127)&128)*(1-t%8192/12E3),a(t)+a(t-12288)/2+a(t-24576)/4+a(t-36864)/8",
			"starred": 1
		}, {
			"name": "Techno Syndrome - MORTAL KOMBAT!",
			"url": "https://dollchan.net/btb/res/204.html#1874",
			"cover": {
				"name": "Techno Syndrome - (Mortal Kombat) Song by The Immortals",
				"url": "https://youtu.be/EAwWPadFsOA"
			},
			"date": "2023-08-10",
			"sampleRate": 44100,
			"codeOriginal": "r=1.205,d=12288*r,a=t=>((127&t*2**(parseInt('99C9E9GECCGCJCGC77B7C7EC5595C5CB'[(t/r>>13)%32],36)/12)/2.67)+(t/r>>6&127)&128)*(1-t/r%8192/8192),a(t)+a(t-d)/2+a(t-d*2)/4+a(t-d*3)/8",
			"starred": 2
		}, {
			"name": "frodo and the magic weed disco remix",
			"url": "https://dollchan.net/btb/res/204.html#2254",
			"remix": {
				"author": "getDolphinedLol",
				"name": "frodo and the magic weed",
				"url": "https://www.reddit.com/r/bytebeat/comments/14je5fs/frodo_and_the_magic_weed/"
			},
			"date": "2023-09-09",
			"sampleRate": 48000,
			"codeOriginal": "(a=t=>((t*2**(parseInt('5HOH5HOH0CJC3FMF'[(t>>13)%16],36)/12)/2.7&255)+(t>>6&255)&256)*(1-t%8192/12E3)/5,a(t)+a(t-12288)/2+a(t-24576)/4+a(t-36864)/8+(sin(10*cbrt(t/'4441441144414422'[15&t>>13]%8192)))*32+32+sin(t*PI*2**('0357'[3&t>>16]/12)/512)*(1-t/8%8192/12E3)*24+24+(random()*40)*(1-t%8192/8192)*'0000100000001010'[15&t>>13]+(c=x=>(t*x*.99%512)/12*(1-t%4096/4096)*!(t&4096)*'0010001000110101'[15&t>>13],c(6)+c(3*3)))/1.4+(((4E4/(t&2**13-1)*'1001101110011010'[15&t>>13]&128)+(t*sin(t>>2)*'00100011'[7&t>>14]&128)%256*(-t&2**14-1)/2E4+(t*[1,1.2,1.35,1.5][3&t>>16]>>2&128)+(t/16*'8867'[3&t>>15]*'1232'[3&t>>13]&128))/1.5)/4",
			"codeMinified": "(a=t=>((t*2**(parseInt('5HOH5HOH0CJC3FMF'[(t>>13)%16],36)/12)/2.7&255)+(t>>6&255)&256)*(1-t%8192/12E3)/5,a(t)+a(t-12288)/2+a(t-24576)/4+a(t-36864)/8+32*sin(10*cbrt(t/'4441441144414422'[15&t>>13]%8192))+32+sin(t*PI*2**('0357'[3&t>>16]/12)/512)*(1-t/8%8192/12E3)*24+24+40*random()*(1-t%8192/8192)*'0000100000001010'[15&t>>13]+(c=x=>t*x*.99%512/12*(1-t%4096/4096)*!(t&4096)*'0010001000110101'[15&t>>13],c(6)+c(9)))/1.4+((4E4/(t&2**13-1)*'1001101110011010'[15&t>>13]&128)+(t*sin(t>>2)*'00100011'[7&t>>14]&128)%256*(-t&2**14-1)/2E4+(t*[1,1.2,1.35,1.5][3&t>>16]>>2&128)+(t/16*'8867'[3&t>>15]*'1232'[3&t>>13]&128))/6",
			"starred": 1
		}]
	}, {
		"author": "Greaserpirate",
		"children": [{
			"name": "Neurofunk, heavyAF breakbeat edition",
			"url": "https://www.reddit.com/r/bytebeat/comments/zr9def/neurofunk_heavyaf_breakbeat_edition_stereo/",
			"remix": {
				"author": "SthephanShi",
				"name": "Neurofunk",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0laz2/neurofunk/"
			},
			"date": "2022-12-21",
			"sampleRate": 44100,
			"stereo": true,
			"codeOriginal": [
				"s=sin(t>>5), h=1&t, t*=.18,",
				"",
				"b=(2e5/(t&(2**10/[",
				"",
				"1,,h,,s,,h,1,",
				"1,,s,,1,1,1,h,",
				"1,,h,,s,,h,,",
				"1,2,s,1,s,1,t&42,(t*1.06)&55",
				"",
				"][((t)>>10)%32])-1)),",
				"",
				"n=t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2),",
				"",
				"[b%149^n,b%150^n]"
			],
			"codeMinified": "s=sin(t>>5),h=1&t,t*=.18,b=2E5/(t&2**10/[1,,h,,s,,h,1,1,,s,,1,1,1,h,1,,h,,s,,h,,1,2,s,1,s,1,t&42,1.06*t&55][(t>>10)%32]-1),n=t*((t&4096?59392>t%65536?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2),[b%149^n,b%150^n]",
			"starred": 1
		}, {
			"name": "how to do echo using array().fill()",
			"url": "https://www.reddit.com/r/bytebeat/comments/14dhu1n/comment/joq2ud1/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"name": "the 42 melody",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			},
			"date": "2023-06-19",
			"codeOriginal": "x=q=>(m=234&q>>10,q*m%256/4),o=0,Array(13).fill().map((e,i)=>o+=(1!=i)*x(t-1024*i)/(i+1)*(2048*i<t)),o"
		}]
	}, {
		"author": "psubscirbe",
		"children": [{
			"name": "3 lines of code",
			"url": "https://dollchan.net/btb/res/284.html#285",
			"date": "2023-01-01",
			"sampleRate": 32000,
			"codeOriginal": [
				"m=t/12*\"4663658264825483658364827\"[(t>>13)%25],",
				"sn=t*random()&63|t>>5&63*((t&16383)<8192),",
				"(m*.99%80+m%80)+sn"
			],
			"codeMinified": "m=t/12*'4663658264825483658364827'[(t>>13)%25],sn=t*random()&63|t>>5&63*((t&16383)<8192),.99*m%80+m%80+sn"
		}, {
			"name": "I couldnt think of a cool bytebeat to make so I made this",
			"url": "https://dollchan.net/btb/res/284.html#301",
			"remix": {
				"name": "Wheezing modem"
			},
			"date": "2023-01-05",
			"codeOriginal": "((t*(t&t>>11))&64)+((3e3/(t&4095)&1)*100)",
			"codeMinified": "(t*(t&t>>11)&64)+100*(3E3/(t&4095)&1)"
		}, {
			"name": "good old fractal melody but sin version",
			"remix": {
				"author": "Blueberry",
				"name": "Good old fractal melody",
				"url": "http://www.pouet.net/topic.php?which=8357&page=12#c389114"
			},
			"url": "https://dollchan.net/btb/res/284.html#304",
			"date": "2023-01-06",
			"codeOriginal": "64*sin((t*(((t>>9)^((t>>9)-1)^1)%13))/10)+128",
			"codeMinified": "64*sin((t>>9^(t>>9)-1^1)%13*t/10)+128"
		}, {
			"name": "sawtooth idk cdqcobzdfsf",
			"url": "https://dollchan.net/btb/res/284.html#310",
			"date": "2023-01-07",
			"codeOriginal": [
				"w=t/6*'87659879'[(t>>11)%8],",
				"p=t*random()&63|t>>6&63,",
				"((w*.99%80+w%80)/2)+((3e3/(t&4095)&1)*50)+(p*'01'[(t>>11)%2])"
			],
			"codeMinified": "w=t/6*'87659879'[(t>>11)%8],p=t*random()&63|t>>6&63,(.99*w%80+w%80)/2+50*(3E3/(t&4095)&1)+p*'01'[(t>>11)%2]"
		}, {
			"name": "arabic beat #2 remix",
			"remix": {
				"author": "SthephanShi",
				"name": "\"Arabic beat #2\""
			},
			"url": "https://dollchan.net/btb/res/284.html#317",
			"date": "2023-01-08",
			"codeOriginal": "((t%((t&-16|t>>11)&42)<<2|t>>4)%256/2)+(t*random()&63*\"10101110\"[(t>>10)%8]|t>>6&63)+((3e3/(t&4095)&1)*50)",
			"codeMinified": "(t%((t&-16|t>>11)&42)<<2|t>>4)%256/2+(t*random()&63*'10101110'[(t>>10)%8]|t>>6&63)+50*(3E3/(t&4095)&1)"
		}, {
			"name": "mkh",
			"url": "https://dollchan.net/btb/res/284.html#319",
			"date": "2023-01-09",
			"sampleRate": 22050,
			"codeOriginal": [
				"h=t*random()&63|t>>6&63,",
				"k=(3e3/(t&16383)&1)*30,",
				"m=32*sin((t*(t>>7|t>>9))/100)+128,",
				"m+k+h"
			],
			"codeMinified": "h=t*random()&63|t>>6&63,k=30*(3E3/(t&16383)&1),m=32*sin(t*(t>>7|t>>9)/100)+128,m+k+h"
		}, {
			"name": "Recreated moon scanner generalization",
			"remix": {
				"author": "viznut",
				"name": "moon scanner generalization",
				"url": "http://viznut.fi/demos/unix/bytebeat_formulas.txt"
			},
			"url": "https://dollchan.net/btb/res/284.html#343",
			"date": "2023-01-14",
			"codeOriginal": "(t-(t^t>>5))+(t*[0,2,4,6,8,10,12,14][(t>>15)%8])",
			"codeMinified": "t-(t^t>>5)+t*[0,2,4,6,8,10,12,14][(t>>15)%8]"
		}, {
			"name": "ryg remixed",
			"remix": {
				"author": "ryg",
				"name": "a new industrial chiptune",
				"url": "http://www.pouet.net/topic.php?which=8357&page=11#c389005"
			},
			"url": "https://dollchan.net/btb/res/284.html#354",
			"date": "2023-01-16",
			"sampleRate": 11025,
			"codeOriginal": "(((t*(1+'4451'[t>>13&3]/10)&t>>9+(.003*t&3))*(127))%256/3)+(3e5/(t&8191)&127)",
			"codeMinified": "127*(t*(1+'4451'[t>>13&3]/10)&t>>9+(.003*t&3))%256/3+(3E5/(t&8191)&127)"
		}, {
			"name": "my own remix of neurofunk",
			"url": "https://www.reddit.com/r/bytebeat/comments/10hwo1a/my_own_remix_of_neurofunk/",
			"remix": {
				"author": "SthephanShi",
				"name": "Neurofunk",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0laz2/neurofunk/"
			},
			"date": "2023-02-21",
			"codeOriginal": [
				"nf=(t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2))%256/3,",
				"kick=(3e5/(t&4095)&63),",
				"sna=t*random()&31|t>>6&63,",
				"nf+kick+sna"
			],
			"codeMinified": "(t*((t&4096?59392>t%65536?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2))%256/3+(3E5/(t&4095)&63)+(t*random()&31|t>>6&63)"
		}, {
			"name": "8-bit Ctrl+V",
			"remix": {
				"author": "getDolphinedLol",
				"name": "Ctrl+V",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0ytc9/ctrlv/"
			},
			"url": "https://dollchan.net/btb/res/284.html#673",
			"date": "2023-03-20",
			"sampleRate": 44100,
			"codeOriginal": "(([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t)&64)+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>1&64)+([(3e6/(t&16383)&64),(t*random()&64)*'10'[(t>>12)%2]][(t>>13)%2])",
			"codeMinified": "([2,2,3,0,2.9,0,3,0,3.5,3.5,3,3,2.9,2.9,3,0,3,0,3,0,2.9,0,3,0,2,2,1.8,1.8,2,2,1,1][(t>>12)%32]*t&64)+([0,2,0,2,0,2,0,3,0][(t>>13)%8]*t>>1&64)+[3E6/(t&16383)&64,(t*random()&64)*'10'[(t>>12)%2]][(t>>13)%2]",
			"starred": 1
		}, {
			"name": "im actually proud of this one",
			"url": "https://www.reddit.com/r/bytebeat/comments/122s69x/im_actually_proud_of_this_one/",
			"date": "2023-03-26",
			"sampleRate": 44100,
			"stereo": true,
			"codeOriginal": [
				"a=(b,c)=>(t>>b)*[16,19,21,2,19,3,9,18,2,5][(t>>13)%9]|c,",
				"d=e=>t>>e,",
				"[((a(\"21\"[(t>>17)%2],t>>5))+(a(\"32\"[(t>>18)%2],t>>6)))|d(5),((a(\"21\"[(t>>17)%2],t>>5))+(a(\"32\"[(t>>18)%2],t>>6)))|d(6)]"
			],
			"codeMinified": "a=(b,c)=>(t>>b)*[16,19,21,2,19,3,9,18,2,5][(t>>13)%9]|c,d=e=>t>>e,[(a('21'[(t>>17)%2],t>>5)+a('32'[(t>>18)%2],t>>6))|d(5),(a('21'[(t>>17)%2],t>>5)+a('32'[(t>>18)%2],t>>6))|d(6)]"
		}, {
			"name": "madfuldescent{offset}",
			"url": "https://dollchan.net/btb/res/284.html#812",
			"date": "2023-04-11",
			"sampleRate": 11025,
			"codeOriginal": "((t>>(t>>17)%3)*-(t>>9|t>>8|t>>10|t>>3|t)+((t>>(t>>16)%3)*(t>>9|t>>17))&128)*1.999",
			"codeMinified": "1.999*((t>>(t>>17)%3)*-(t>>9|t>>8|t>>10|t>>3|t)+(t>>(t>>16)%3)*(t>>9|t>>17)&128)"
		}, {
			"name": "ayyturned seven hundred seventy-seven realmix",
			"remix": {
				"author": "aturned777",
				"url": "https://dollchan.net/btb/res/3.html#406"
			},
			"url": "https://www.reddit.com/r/bytebeat/comments/14elz9d/ayyturned_seven_hundred_seventyseven_realmix/",
			"date": "2023-06-20",
			"sampleRate": 32000,
			"codeOriginal": "a=abs(((t<<(4+(t>>17&3)))/(4+(t>>15)%16)*(1+(3&t>>13))>>(2&t>>11))%256-128)/2,s=1e5/(t&16383)&127,d=(t*sin(t>>2)&63|t>>7&63)*(1&t>>14),s+d+a",
			"codeMinified": "a=abs(((t<<4+(t>>17&3))/(4+(t>>15)%16)*(1+(3&t>>13))>>(2&t>>11))%256-128)/2,s=1E5/(t&16383)&127,d=(t*sin(t>>2)&63|t>>7&63)*(1&t>>14),s+d+a"
		}, {
			"name": "enjoy some drums *_*",
			"url": "https://www.reddit.com/r/bytebeat/comments/150as84/enjoy_some_drums/",
			"date": "2023-07-15",
			"sampleRate": 48000,
			"codeOriginal": "(t*[,sin(t>>2)][t>>14&1]&63&~t>>8)+(sqrt(t&16383)*32&64)+(t*random()&31&~t>>8)+(t/2*(1+(t>>17&1))*2**([0,3,5,6,10,6,1,3][t>>13&7]/12)&96)"
		}, {
			"name": "folded 100%",
			"url": "https://www.reddit.com/r/bytebeat/comments/150mxag/folded_100/",
			"date": "2023-07-21",
			"sampleRate": 44100,
			"codeOriginal": "((t*random()&31&~t>>7)*(1&t>>13))+(sqrt(t&16383)*32&64)+(t*[,s=sin(t>>4)][t>>14&1]&63&~t>>6)+(t/2*.825/\"1234\"[t>>17&3]*2**([0,2,4,6,7,9,7,10][t>>13&7]/12)&64)",
			"codeMinified": "(t*random()&31&~t>>7)*(1&t>>13)+(32*sqrt(t&16383)&64)+(t*[,s=sin(t>>4)][t>>14&1]&63&~t>>6)+(t/2*.825/'1234'[t>>17&3]*2**([0,2,4,6,7,9,7,10][t>>13&7]/12)&64)",
			"starred": 1
		}]
	}, {
		"author": "Gleb_Mii",
		"name": "cool sine wopping music",
		"url": "https://www.reddit.com/r/bytebeat/comments/105nc8t/cool_sine_wopping_music/",
		"date": "2023-01-07",
		"sampleRate": 32000,
		"codeOriginal": "sin(t*[1,1.01,1.02,1.03,1.04,1.05,1.06,1.07,1.08,1.09,1.1,1.11,1.12,1.13,1.14][(t>>5)%15]&t>>11)*128+128",
		"codeMinified": "128*sin(t*(1+(t>>5)%15*.01)&t>>11)+128"
	}, {
		"author": "ciferidn",
		"children": [{
			"name": "P Synth",
			"url": "https://www.reddit.com/r/bytebeat/comments/107v54y/p_synth/",
			"date": "2023-01-10",
			"sampleRate": 44100,
			"codeOriginal": "t/=1.25,z=t/12.2*[4,8,4,8,4,8,8,8][(t/1.5>>12)%8],v=x=>sin(x*PI/255+sin(x*PI/128)),l=0,t?0:a=Array(n=24576).fill(0),f=(z,v)=>sin(l++<z?f(z,v)-v:(l=0,v)),x=a.shift(),y=(v(z*4)*128+128),a.push(y/3-a[n/2]/4+a[n/4]/3),x+64",
			"codeMinified": "t/=1.25,z=t/12.2*[4,8,4,8,4,8,8,8][(t/1.5>>12)%8],v=x=>sin(x*PI/255+sin(x*PI/128)),l=0,t?0:a=Array(n=24576).fill(0),f=(z,v)=>sin(l++<z?f(z,v)-v:(l=0,v)),x=a.shift(),y=128*v(4*z)+128,a.push(y/3-a[n/2]/4+a[n/4]/3),x+64"
		}, {
			"name": "Remix Of No. 4",
			"url": "https://www.reddit.com/r/bytebeat/comments/107sqh6/remix_of_no_4/",
			"remix": [{
				"author": "Greaserpirate",
				"name": "Neurofunk, heavyAF breakbeat edition",
				"url": "https://www.reddit.com/r/bytebeat/comments/zr9def/neurofunk_heavyaf_breakbeat_edition_stereo/"
			}, {
				"author": "yehar",
				"name": "No 4",
				"url": "http://www.pouet.net/topic.php?which=8357&page=21#c401817"
			}],
			"date": "2023-01-10",
			"sampleRate": 44100,
			"stereo": true,
			"codeOriginal": [
				"s=sin(t>>5), h=1&t, t*=.18,",
				"",
				"b=(2e5/(t&(2**10/[",
				"",
				"1,,h,,s,,h,1,",
				"1,,s,,1,1,1,h,",
				"1,,h,,s,,h,,",
				"1,2,s,1,s,1,t&42,(t*1.06)&55",
				"",
				"][((t)>>10)%32])-1)),",
				"",
				"n=(m=t/2^(t&64?63:0),m>>=m,m/(1+(m>>7))&t/32|(t>>11)%8%3*t*t&15),",
				"",
				"[b%149^n,b%150^n]"
			],
			"codeMinified": "s=sin(t>>5),h=1&t,t*=.18,b=2E5/(t&2**10/[1,,h,,s,,h,1,1,,s,,1,1,1,h,1,,h,,s,,h,,1,2,s,1,s,1,t&42,1.06*t&55][(t>>10)%32]-1),n=(m=t/2^(t&64?63:0),m>>=m,m/(1+(m>>7))&t/32|(t>>11)%8%3*t*t&15),[b%149^n,b%150^n]",
			"starred": 1
		}, {
			"name": "Final Remix Of \"The Time Is Running Out!\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/10an6lo/final_remix_of_the_time_is_running_out/",
			"remix": {
				"author": "RealZynx92",
				"name": "better remix of \"The time is running out!\"",
				"url": "https://www.reddit.com/r/bytebeat/comments/qlst5m/better_remix_of_the_time_is_running_out_by/"
			},
			"date": "2023-01-13",
			"sampleRate": 44100,
			"codeOriginal": "ż=Ż=t/4,xc=Ż*2*(Ż&16384?7:5)*(3-(3&Ż>>9)+(3&Ż>>8))>>(3&-Ż>>(h=Ż%65536<59392?Ż&4096?2:16:2,[16,h][(Ż>>19)%2])),sinf=x=>sin(x*Math.PI/128),xc1=sinf(xc)/(Math.pow(1.00125, Ż%[xc0_5=[c=2048,c,0,0][Ż>>11&3],xc0_75=[c,c,c,c][ż>>11&3]][(ż>>19)%2])),xc1=xc1*64+64|0,q=v=>~t>>v&3,xc2=(axc=Math.sqrt)(t%16384)*64&128,xc3=sin(axc(t%32768)*4)*32+32,[a=xc1,b=xc2/2+a,c=b/2+xc3,xc3+a/2][t>>21&3]",
			"codeMinified": "z=t/4,xc=2*z*(z&16384?7:5)*(3-(3&z>>9)+(3&z>>8))>>(3&-z>>[16,59392>z%65536?z&4096?2:16:2][(z>>19)%2]),xc1=sin(xc*PI/128)/1.00125**(z%[[c=2048,c,0,0][z>>11&3],c][(z>>19)%2]),xc1=64*xc1+64|0,xc2=64*sqrt(t%16384)&128,xc3=32*sin(4*sqrt(t%32768))+32,[a=xc1,b=xc2/2+a,c=b/2+xc3,xc3+a/2][t>>21&3]"
		}]
	}, {
		"author": "ChrisRM380",
		"name": "Major scale",
		"url": "https://dollchan.net/btb/res/3.html#368",
		"date": "2023-01-21",
		"codeOriginal": "t*4*[1,1.13,1.275,1/0.75,1.5,1.7,1.875,2][(t>>12)%8]",
		"codeMinified": "4*t*[1,1.13,1.275,1/.75,1.5,1.7,1.875,2][(t>>12)%8]"
	}, {
		"author": "Glebguything",
		"children": [{
			"name": "a music made in school",
			"url": "https://www.reddit.com/r/bytebeat/comments/10sdupn/a_music_made_in_school/",
			"date": "2023-02-03",
			"sampleRate": 44100,
			"codeOriginal": "t=t/4,((melody=t*[1,2,3,4,3,2,5,5][(t>>11)%8]/[1,2,3,2.5][(t>>14)%4],melody%75+melody%75.99+sin(melody/3)*50)+50)",
			"codeMinified": "t/=4,(melody=t*[1,2,3,4,3,2,5,5][(t>>11)%8]/[1,2,3,2.5][(t>>14)%4],melody%75+melody%75.99+50*sin(melody/3))+50",
			"starred": 1
		}, {
			"name": "a robotic voice",
			"url": "https://www.reddit.com/r/bytebeat/comments/10xv1w7/a_robotic_voice/",
			"date": "2023-02-09",
			"codeOriginal": "sin(t/[5,6,7,8][(t>>13)%4]%20)*128+128^t>>5|t>>4^t/90"
		}, {
			"name": "random 100c music i made",
			"url": "https://www.reddit.com/r/bytebeat/comments/11mq8e4/comment/jbk5fv8/?utm_source=reddit&utm_medium=web2x&context=3",
			"date": "2023-03-09",
			"sampleRate": 32000,
			"codeOriginal": "t/=4,(t*(t/64|t>>5|t>>6|t>>7|t>>8|t))%256/4+50+sin(4e3/(t%4096))*50+(random ()*75&-t>>5)*[0,1][(t>>12)%2]",
			"codeMinified": "t/=4,t*(t>>5|t>>6|t>>7|t>>8|t)%256/4+50+50*sin(4E3/(t%4096))+(75*random()&-t>>5)*'01'[(t>>12)%2]",
			"starred": 1
		}, {
			"name": "Deurojunk",
			"url": "https://www.reddit.com/r/bytebeat/comments/s0laz2/comment/jbpwr08/?utm_source=reddit&utm_medium=web2x&context=3",
			"date": "2023-03-10",
			"sampleRate": 44100,
			"codeOriginal": [
				"t/=4,(t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2))%256/4+50+sin(4e3/(t%4096))*50+(random ()*50&-t>>5)*[0,1][(t>>12)%2]+",
				"sin(t/40)*15+15"
			],
			"codeMinified": "t/=4,(t*((t&4096?t%65536<59392?7:t&7:16)+(1&t>>14))>>(3&-t>>(t&2048?2:10))|t>>(t&16384?t&4096?10:3:2))%256/4+50+50*sin(4E3/(t%4096))+(50*random()&-t>>5)*[0,1][(t>>12)%2]+15*sin(t/40)+15",
			"starred": 1
		}, {
			"name": "Remix of kernkraft 400",
			"url": "https://dollchan.net/btb/res/204.html#893",
			"remix": {
				"author": "Zackx",
				"name": "kernkraft 400",
				"url": "https://dollchan.net/btb/res/204.html#280"
			},
			"date": "2023-04-20",
			"sampleRate": 44100,
			"codeOriginal": "t/=4,rev=x=>(t?0:a=Array(12288).fill(0),b=x+a.shift(),a.push(b/2),b),rev(((t/1.5*[1,4,4.8,5.4,6,2,1,2,1,4,4.8,5.4,6,6.33,6,4.8,5.4,2.7,1.35,2.7,4.8,3,6,4,1,2,1,2,1,2,1,2][(t>>11)%32]*1.52)%256/2+4e3/(t%4096)+(random ()*128&-t>>5)*[0,1][(t>>11)%2])%256/2)",
			"codeMinified": "t/=4,rev=x=>(t?0:a=Array(12288).fill(0),b=x+a.shift(),a.push(b/2),b),rev((t/1.5*[1,4,4.8,5.4,6,2,1,2,1,4,4.8,5.4,6,6.33,6,4.8,5.4,2.7,1.35,2.7,4.8,3,6,4,1,2,1,2,1,2,1,2][(t>>11)%32]*1.52%256/2+4E3/(t%4096)+(128*random()&-t>>5)*[0,1][(t>>11)%2])%256/2)"
		}]
	}, {
		"author": "mirageofher",
		"name": "industrial doom",
		"url": "https://battleofthebits.com/arena/Entry/industrial+doom.txt/58156/",
		"date": "2023-02-05",
		"codeOriginal": "(t >> (t/666) || (3*t/16 + t*16)) | (((0-sin(t))*(t/2)))",
		"codeMinified": "(t>>t/666||3*t/16+16*t)|-sin(t)*t/2"
	}, {
		"author": "sean",
		"children": [{
			"name": "factory settings",
			"url": "https://battleofthebits.com/arena/Entry/factory+settings.txt/58158/",
			"date": "2023-02-05",
			"codeOriginal": "(-t<<((t>>4)%7)) % ( ((t+sin(t/100<<9)/ (50+sin(t<<12<<22)*16) )/9)) % ((t%2550)/10) | (t/6)",
			"codeMinified": "(-t<<(t>>4)%7)%((t+sin(t/100<<9)/(50+16*sin(t<<12<<22)))/9)%(t%2550/10)|t/6"
		}, {
			"name": "sleepmode stasis",
			"url": "https://battleofthebits.com/arena/Entry/sleepmode+stasis/58750/",
			"date": "2023-02-17",
			"codeOriginal": "(t%320000)*(((t%320000)/(t>>9)%16)%128 + ( (((t<<7)%30)/100)%10)*sin( t/1000000 + ((t/10000)%100)%99 )*.5 ) + t>>(sin((t/10000)-sin(t/260000)*100)*5 + 9)%99999 + (t%3200000)/(sin(((t/100003)+(t/100001))/2-sin(t/2600001)*3)*5 + 12)%(sin(t/1600000)*8 + 8 + ((t>>9)%36)%((t/8800)%36) )",
			"codeMinified": "t%32E4*(t%32E4/(t>>9)%16%128+(t<<7)%30/100%10*sin(t/1E6+t/1E4%100%99)*.5)+t>>(5*sin(t/1E4-100*sin(t/26E4))+9)%99999+t%32E5/(5*sin((t/100003+t/100001)/2-3*sin(t/2600001))+12)%(8*sin(t/16E5)+8+(t>>9)%36%(t/8800%36))"
		}]
	}, {
		"author": "pouale",
		"name": "Cheerful Transmission incoming !!!",
		"url": "https://battleofthebits.com/arena/Entry/Cheerful+Transmission+incoming+%21%21%21.txt/58510/",
		"date": "2023-02-11",
		"codeOriginal": "0.8 * ((sin(t * (t/4000 % 4000)) + 1) * 10 * (t%1000/1000) + (2 * sin(t) + sin(1.25*t) + sin(1.5*t) + sin(15/16*t) + 5) * 25 * (t%4000/4000) + (sin(t * (1 ^ (- t/ 2000 % 2000))) + 1) * 20 * (t%1000/1000) + (t % 100) * 0.4)",
		"codeMinified": ".8*(10*(sin(t/4E3%4E3*t)+1)*(t%1E3/1E3)+25*(2*sin(t)+sin(1.25*t)+sin(1.5*t)+sin(.9375*t)+5)*(t%4E3/4E3)+20*(sin(t*(1^-t/2E3%2E3))+1)*(t%1E3/1E3)+t%100*.4)"
	}, {
		"author": "algoziptunes",
		"name": "chilly cyberstorm",
		"url": "https://battleofthebits.com/arena/Entry/chilly+cyberstorm/58749/",
		"date": "2023-02-17",
		"sampleRate": 11025,
		"codeOriginal": [
			"volume=0.25,",
			"sr=11000,",
			"b=6*(sr/8000)*t/sr,",
			"a=[174.61*b, 207.65*b, 233.08*b, 261.63*b, 196.0*b, 293.66*b, 174.61*b, 207.65*b, 261.63*b, 196.0*b, 196.0*b, 293.66*b],",
			"s1=16*(a[int((b/16)%12)])*PI/128,",
			"s2=8*(a[int((b/8)%12)]),",
			"s3=(a[int((b)%12)])*PI/128,",
			"o1=1.1*(sin(s1)-cos(s1)),",
			"o2=((t*2)&117)%s2%31,",
			"o3=(random()*(sr/2))%127,",
			"o4=((b+(4*a[(t/2)&12])*PI/128)),",
			"o5=((b)>>s2)&72,",
			"T=volume*(((((0.5)*o3*1&(0b10001000 >> b%8))) + ((o1<<7) * 1&((0b101010011001010 >> ((b/2)%8)))) + ((t/sr>45?1:0) * o4 * 1&((0b1000101010 >> (b/2)%12))) + o2 + ((t/sr>15?1:0) * o5 * 1&((0b10101000) >> ((b/2)%8)))) % (((t/sr)%1200>750)?(0xDEADBEEF >> (b/2)):512)),",
			"((t/sr)%60>40)?T&((-T>>3)&0xBAD)%255:T"
		],
		"codeMinified": "volume=.25,sr=11E3,b=sr/8E3*6*t/sr,a=[174.61*b,207.65*b,233.08*b,261.63*b,196*b,293.66*b,174.61*b,207.65*b,261.63*b,196*b,196*b,293.66*b],s1=16*a[int(b/16%12)]*PI/128,s2=8*a[int(b/8%12)],s3=a[int(b%12)]*PI/128,o1=1.1*(sin(s1)-cos(s1)),o2=(2*t&117)%s2%31,o3=random()*(sr/2)%127,o4=b+4*a[t/2&12]*PI/128,o5=b>>s2&72,T=((.5*o3&136>>b%8)+(o1<<7&21706>>b/2%8)+((t/sr>45?1:0)*o4&554>>b/2%12)+o2+((t/sr>15?1:0)*o5&168>>b/2%8))%(t/sr%1200>750?0xDEADBEEF>>b/2:512)*volume,t/sr%60>40?T&(-T>>3&2989)%255:T"
	}, {
		"author": ["damifortune", "kleeder"],
		"name": "Kilobyte Khorale",
		"url": "https://battleofthebits.com/arena/Entry/Kilobyte+Khorale/58912/",
		"date": "2023-02-22",
		"sampleRate": 11025,
		"codeOriginal": "v=function(S,T){return 32*(A>=S&&A<T)},I=352800,A=floor((150*(t/I)/60)*48)%96,J=415,K=392,L=311,M=349,N=277,O=196,P=207,Q=261,R=233,Y=103,Z=116,x=130,a=J*v(0,3)+K*v(4,6)+J*v(6,9)+L*v(10,12)+M*v(12,14)+L*v(14,16)+N*v(17,18)+L*v(18,21)+O*v(22,23)+P*v(23,24)+M*v(24,26)+L*v(26,28)+N*v(29,30)+Q*v(30,32)+R*v(32,34)+Q*v(34,36)+N*v(36,38)+246*v(38,40)+220*v(41,42)+P*v(42,45)+O*v(45,46)+P*v(46,47)+R*v(47,48)+J*v(48,51)+K*v(52,54)+J*v(54,57)+L*v(58,60)+M*v(60,62)+K*v(62,64)+J*v(65,66)+L*v(66,69)+Q*v(70,71)+N*v(71,72)+J*v(72,74)+369*v(74,76)+329*v(77,78)+L*v(78,80)+184*v(80,82)+R*v(82,84)+Q*v(84,89),G=25,b=Y*v(0,3)+Z*v(4,6)+x*v(6,20)+138*v(12,14)+O*v(14,16)+P*v(17,18)+x*v(18,22)+123*v(24,27)+123*v(28,30)+Z*v(30,33)+Z*v(34,36)+110*v(36,39)+110*v(40,41)+220*v(41,42)+77*v(42,47)+Y*v(48,51)+Z*v(52,54)+x*v(54,58)+138*v(60,62)+O*v(62,64)+138*v(65,66)+x*v(66,69)+174*v(70,72)+123*v(72,75)+Z*v(76,78)+77*v(78,81)+155*v(82,84)+Y*v(84,89),128+25*2*(floor(a*t/I*256)%256<=50*256/100)+25/128*(17*abs(min(16-t*b*32/I%32|0,15)))",
		"codeMinified": "v=(S,T)=>32*(A>=S&&A<T),I=352800,A=int(t/I*150/60*48)%96,J=415,K=392,L=311,M=349,N=277,O=196,P=207,Q=261,R=233,Y=103,Z=116,x=130,a=J*v(0,3)+K*v(4,6)+J*v(6,9)+L*v(10,12)+M*v(12,14)+L*v(14,16)+N*v(17,18)+L*v(18,21)+O*v(22,23)+P*v(23,24)+M*v(24,26)+L*v(26,28)+N*v(29,30)+Q*v(30,32)+R*v(32,34)+Q*v(34,36)+N*v(36,38)+246*v(38,40)+220*v(41,42)+P*v(42,45)+O*v(45,46)+P*v(46,47)+R*v(47,48)+J*v(48,51)+K*v(52,54)+J*v(54,57)+L*v(58,60)+M*v(60,62)+K*v(62,64)+J*v(65,66)+L*v(66,69)+Q*v(70,71)+N*v(71,72)+J*v(72,74)+369*v(74,76)+329*v(77,78)+L*v(78,80)+184*v(80,82)+R*v(82,84)+Q*v(84,89),G=25,b=Y*v(0,3)+Z*v(4,6)+x*v(6,20)+138*v(12,14)+O*v(14,16)+P*v(17,18)+x*v(18,22)+123*v(24,27)+123*v(28,30)+Z*v(30,33)+Z*v(34,36)+110*v(36,39)+110*v(40,41)+220*v(41,42)+77*v(42,47)+Y*v(48,51)+Z*v(52,54)+x*v(54,58)+138*v(60,62)+O*v(62,64)+138*v(65,66)+x*v(66,69)+174*v(70,72)+123*v(72,75)+Z*v(76,78)+77*v(78,81)+155*v(82,84)+Y*v(84,89),128+50*(int(a*t/I*256)%256<=128)+3.3203125*abs(min(16-t*b*32/I%32|0,15))"
	}, {
		"author": "Yamden",
		"children": [{
			"name": "Major Seventh Chord Progression",
			"url": "https://dollchan.net/btb/res/3.html#492",
			"date": "2023-03-01",
			"codeOriginal": "(t % 32000 < 16000)*(t % 2000 < 1000)*((4*t&32) + (5*t&32) + (6*t&32) + (4*(15/16)*t&32)) + (t % 32000 > 16000)*(t % 2000 < 1000)*(1.5*(4*(8/9)*t&32) + (5*(8/9)*t&32) + (6*(8/9)*t&32) + (4*(8/9)*(15/16)*t&32))",
			"codeMinified": "(16E3>t%32E3)*(1E3>t%2E3)*((4*t&32)+(5*t&32)+(6*t&32)+(3.75*t&32))+(16E3<t%32E3)*(1E3>t%2E3)*(1.5*(8/9*4*t&32)+(8/9*5*t&32)+(8/9*6*t&32)+(8/9*3.75*t&32))"
		}, {
			"name": "19TET Harmony with Justly Tuned Melody",
			"url": "https://dollchan.net/btb/res/3.html#499",
			"date": "2023-03-02",
			"codeOriginal": "(t>0)*(t<16000)*((1.0*t&32)+(1.24469258*t&32)+(1.49375896*t&32))+(t>16000)*(t<32000)*((1.0*t&32)+(1.24469258*t&32)+(1.60682245*t&32))+(t>32000)*(t<48000)*((1.0*t&32)+(1.3389041*t&32)+(1.66652401*t&32))+(t>48000)*(t<64000)*((1.0*t&32)+(1.3389041*t&32)+(1.60682245*t&32)) + (t>0)*(t<10000)*(5.0*t&32)+(t>10000)*(t<12000)*(5.333333333333333*t&32)+(t>12000)*(t<14000)*(5.0*t&32)+(t>14000)*(t<16000)*(4.5*t&32)+(t>16000)*(t<20000)*(5.0*t&32)+(t>20000)*(t<24000)*(4.0*t&32)+(t>24000)*(t<28000)*(3.75*t&32)+(t>28000)*(t<32000)*(4.0*t&32)+(t>32000)*(t<36000)*(3.3333333333333335*t&32)+(t>36000)*(t<39000)*(6.0*t&32)+(t>39000)*(t<40000)*0+(t>40000)*(t<44000)*(6.0*t&32)+(t>44000)*(t<48000)*(3.3333333333333335*t&32)+(t>48000)*(t<64000)*(3.2*t&32)",
			"codeMinified": "t%=64E3,(t>0)*(t<16E3)*((1*t&32)+(1.24469258*t&32)+(1.49375896*t&32))+(t>16E3)*(t<32E3)*((1*t&32)+(1.24469258*t&32)+(1.60682245*t&32))+(t>32E3)*(t<48E3)*((1*t&32)+(1.3389041*t&32)+(1.66652401*t&32))+(t>48E3)*(t<64E3)*((1*t&32)+(1.3389041*t&32)+(1.60682245*t&32))+(t>0)*(t<1E4)*(5*t&32)+(t>1E4)*(t<12E3)*(5.333333333333333*t&32)+(t>12E3)*(t<14E3)*(5*t&32)+(t>14E3)*(t<16E3)*(4.5*t&32)+(t>16E3)*(t<2E4)*(5*t&32)+(t>2E4)*(t<24E3)*(4*t&32)+(t>24E3)*(t<28E3)*(3.75*t&32)+(t>28E3)*(t<32E3)*(4*t&32)+(t>32E3)*(t<36E3)*(3.3333333333333335*t&32)+(t>36E3)*(t<39E3)*(6*t&32)+(t>39E3)*(t<4E4)*0+(t>4E4)*(t<44E3)*(6*t&32)+(t>44E3)*(t<48E3)*(3.3333333333333335*t&32)+(t>48E3)*(t<64E3)*(3.2*t&32)",
			"starred": 1
		}]
	}, {
		"author": "tribute1123",
		"children": [{
			"name": "tri",
			"url": "https://www.reddit.com/r/bytebeat/comments/11f2bt9/hi/",
			"date": "2023-03-01",
			"sampleRate": 32768,
			"codeOriginal": "b=128,hz=((t/128)*b),hz1=hz*(1+(1/((b*2)/(t&451)))),a=(abs(((hz)&255)-128)+abs(((hz1)&255)-128))/2,a*1.99",
			"codeMinified": ".995*(abs((t&255)-128)+abs((t*(1+(t&451)/256)&255)-128))",
			"starred": 1
		}, {
			"name": "an random song i made",
			"url": "https://www.reddit.com/r/bytebeat/comments/11fk93c/an_random_song_i_made/",
			"date": "2023-03-02",
			"sampleRate": 40960,
			"codeOriginal": "(t/256)*(t&(2**[4,5,6,7][(t>>17)&3])+3)+t",
			"codeMinified": "t*(t&2**'4567'[t>>17&3]+3)/256+t",
			"starred": 1
		}]
	}, {
		"author": "Firstnameiskowitz",
		"date": "2023-03-12",
		"children": [{
			"name": "Cat-girl (over-simplified)",
			"url": "https://www.reddit.com/r/bytebeat/comments/11p36h7/more_lazily_made_remixes/",
			"remix": {
				"author": "Anonymous from russian imageboards",
				"name": "CAT-GIRL",
				"url": "http://abload.de/img/1405110021643uguil.jpg"
			},
			"codeOriginal": "a=16384,t%=a*8,(a*2>t?8:a*5>t?9:8)*t|t/4+(a*4>t?13:a*6>t?12:13)*t|t/8|t>>5"
		}, {
			"name": "New instrumental in the new year (happy mix #2)",
			"url": "https://www.reddit.com/r/bytebeat/comments/11p36h7/more_lazily_made_remixes/",
			"remix": {
				"author": "Zackx",
				"name": "My new instrumental in new year",
				"url": "https://dollchan.net/btb/res/204.html#292"
			},
			"sampleRate": 32000,
			"codeOriginal": "s=15,p=1.042*t,w=64,v=p*[.5,.5,.5,.5,.42,.42,.42,.42,.333333,.333333,.333333,.28,.375,.375,.375,.375][15&t>>s]/(1+(~t>>13&1)),v2=p*[.75,.75,.75,.75,.84,.84,.84,.75,.84,.84,.84,.84,.94,.94,.94,.94][15&t>>s],v3=p*[1,1,1,.94,1,1,1,1,1,1,1,1.12,0.94,0.94,0.94,0.94][15&t>>s],v4=p*[1.26,1.26,1.26,1.26,1.26,1.26,1.26,1.26,1.33,1.33,1.33,1.41,1.5,1.5,1.5,1.33][15&t>>s],((v&w)+(v2&w)+(v3&w)+(v4&w))*(t&16383)/16383/1.9+32*sin(20*cbrt((t%16384)/40))+32*random()*(-t&8E3)/8E3+(t*[0,sin(t/1.3>>1)][1&t>>14]&-t>>7&127)/3+32*sin(sin(v*PI/128/'21'[1&t>>13])*(-t&8191)/2048/1.5)+64",
			"codeMinified": "s=15,p=1.042*t,w=64,v=p*[.5,.5,.5,.5,.42,.42,.42,.42,.333333,.333333,.333333,.28,.375,.375,.375,.375][15&t>>s]/(1+(~t>>13&1)),v2=p*[.75,.75,.75,.75,.84,.84,.84,.75,.84,.84,.84,.84,.94,.94,.94,.94][15&t>>s],v3=p*[1,1,1,.94,1,1,1,1,1,1,1,1.12,.94,.94,.94,.94][15&t>>s],v4=p*[1.26,1.26,1.26,1.26,1.26,1.26,1.26,1.26,1.33,1.33,1.33,1.41,1.5,1.5,1.5,1.33][15&t>>s],((v&w)+(v2&w)+(v3&w)+(v4&w))*(t&16383)/16383/1.9+32*sin(20*cbrt(t%16384/40))+32*random()*(-t&8E3)/8E3+(t*[0,sin(t/1.3>>1)][1&t>>14]&-t>>7&127)/3+32*sin(sin(v*PI/128/'21'[1&t>>13])*(-t&8191)/2048/1.5)+64",
			"starred": 1
		}, {
			"name": "Someone already did this joke",
			"url": "https://www.reddit.com/r/bytebeat/comments/11p36h7/more_lazily_made_remixes/",
			"remix": {
				"author": "Zackx",
				"name": "Namber tu use square wave",
				"url": "https://dollchan.net/btb/res/204.html#232"
			},
			"sampleRate": 44100,
			"codeOriginal": "z=t/2*'12348432'[7&t>>12],z*[1,1.2,4/3,2][3&t>>16]|127"
		}, {
			"name": "$tereophonic $ine",
			"url": "https://www.reddit.com/r/bytebeat/comments/11p36h7/more_lazily_made_remixes/",
			"remix": {
				"author": "lhphr",
				"name": "$ine Ðecrement",
				"url": "https://dollchan.net/btb/res/44.html#66"
			},
			"sampleRate": 32000,
			"stereo": true,
			"codeOriginal": "D=(b=t&t>>12,f=(a,c)=>32*sin(b--%2**c*t/2**a),f(5,4)+f(9,6)+f(12,8)+f(14,9)+128),S=(t/=B=t&t>>12,F=(a,c)=>32*sin(B--%2**c*t/2**a)|0,F(5,4)+F(9,6)+F(12,8)+F(14,9)+128),[D,S]"
		}, {
			"name": "Recreated Raer bytebeat",
			"url": "https://www.reddit.com/r/bytebeat/comments/11u8cbl/recreated_raer_bytebeat_october_7_2011/",
			"remix": [{
				"author": "raer",
				"name": "Street Surfer",
				"url": "http://www.pouet.net/topic.php?which=8357&page=4#c388494"
			}, {
				"author": "Blueberry",
				"name": "Good old fractal melody",
				"url": "http://www.pouet.net/topic.php?which=8357&page=12#c389114"
			}],
			"sampleRate": 11025,
			"stereo": true,
			"codeOriginal": "[t&4096?(t*(t^t%255)|t>>4)>>1:t>>3|(t&8192?t<<2:t),(t>>9^(t>>9)-1^1)%13*t]"
		}]
	}, {
		"author": "T_yknow",
		"name": "crave",
		"url": "https://www.reddit.com/r/bytebeat/comments/120dt3g/crave/",
		"date": "2023-03-24",
		"codeOriginal": "1e2*(sin(t/'20203030202030304400550044005500'[(t>>10)%32])+(t>>8))",
		"codeMinified": "100*(sin(t/'202030302020303044005500440055'[(t>>10)%32])+(t>>8))"
	}, {
		"author": "Scary-Sand2937",
		"name": "PARTY!",
		"url": "https://www.reddit.com/r/bytebeat/comments/12onki0/party/",
		"date": "2023-04-16",
		"codeOriginal": "((t+t%[1,3,5,2][(t/3>>10)&3])*2**([0,1,3,5,7,8][(t>>10)%6]/12)<<((t>>[10,11][t/3>>10&1])*1.25&3)>>1&63)-(t>>10&31|1)|t>>2",
		"codeMinified": "((t+t%[1,3,5,2][t/3>>10&3])*2**([0,1,3,5,7,8][(t>>10)%6]/12)<<(1.25*(t>>[10,11][t/3>>10&1])&3)>>1&63)-(t>>10&31|1)|t>>2"
	}, {
		"author": "SleepingLugia (leejh20)",
		"children": [{
			"name": "Tune 1",
			"url": "https://battleofthebits.com/arena/Entry/dumpster_tunes.txt/59825/",
			"date": "2023-04-12",
			"codeOriginal": "t%4096>256?(t/8>>(t*(4+(t>>9)%3)/(2+((a=t>>13)%8^(a/8))))%32|t/4):t**3",
			"codeMinified": "t%4096>256?t/8>>t*(4+(t>>9)%3)/(2+((a=t>>13)%8^a/8))%32|t/4:t**3"
		}, {
			"name": "i mashed my keyboard",
			"url": "https://www.reddit.com/r/bytebeat/comments/15ldcnc/i_mashed_my_keyboard/",
			"remix": {
				"author": "Spimfurt",
				"name": "mini drums at your disposal",
				"url": "https://dollchan.net/btb/res/3.html#1799"
			},
			"date": "2023-08-08",
			"sampleRate": 48000,
			"codeOriginal": "i=t/2500,j=i>>1,e=1+i%2*3,a='jsijiswjiwndwijiwoqw내에즈ㅡ춰뱌ㅑ챠ㅐ대ㅏㅏ마ㅏㄴjjsikospqpqpp너ㅑㅔㅔ베ㅏ으ㅜㅑㅂㅈ브ㅑ느ㅑㅓㅑㅂㄴ더ㅑㅓㅑ너ㅐㅜㅑㅜㅇ댜우댜우댜우저우더우어우냐어냐너재너재뱌내뱌내멍쟈누ㅐ버ㅐ배ㅐㅔ네ㅐㅏ바ㅏ배ㅐㅏ어ㅓ야ㅓㅇ쟈ㅓ어저얃어댜ㅏ저ㅐㅏㅐ뱌ㅔ재베ㅐ베ㅐㅔㅐㅐㄱ더ㅡㅏ',l=a.length,a.charCodeAt(t/4*[1,1,1.2,.9][i>>5&3]&j*a.charCodeAt((j+a.charCodeAt(j/16%l))%l)/24%l)%(1+(j&65535))%256/e/2-54/e+128+(1e3/(.5+(n=i%8*2))&99)/(1+n)*(i>256)-((t%207^t%25+999*sin(t>>4))&96)/(1+n)*(i>384)*(i%16>8)",
			"starred": 1
		}]
	}, {
		"author": "Kouzerumatsu",
		"name": "STAY + filter",
		"url": "https://dollchan.net/btb/res/204.html#869",
		"cover": {
			"name": "The Kid LAROI, Justin Bieber - STAY",
			"url": "https://youtu.be/kTJczUoc26U"
		},
		"remix": {
			"author": "Zackx",
			"name": "STAY",
			"url": "https://dollchan.net/btb/res/204.html#868"
		},
		"date": "2023-04-19",
		"mode": "Signed Bytebeat",
		"sampleRate": 48000,
		"codeOriginal": "!t?(s=0,ss=0,zz=0):(r=8192,a=t=>(p=t/1.36*2**([-19,-1,0,7,,,0,,-17,,-1,0,,,-5,,-15,-1,0,7,,,0,,-20,,-1,0,,,-5,-3][(t>>13)%32]/12),(((p&127)+16)&128)*(1-t%r/r)),z=a(t)+a(t-r*2)/4+a(t-r*4)/6+a(t-r*8)/12+a(t-r*16)/24,s+=(ss-s)/4,ss+=(z-s)/6),zz+=(s-zz)/16,s-zz",
		"codeMinified": "t?(r=8192,a=(t)=>(p=t/1.36*2**([-19,-1,0,7,,,0,,-17,,-1,0,,,-5,,-15,-1,0,7,,,0,,-20,,-1,0,,,-5,-3][(t>>13)%32]/12),((p&127)+16&128)*(1-t%r/r)),z=a(t)+a(t-2*r)/4+a(t-4*r)/6+a(t-8*r)/12+a(t-16*r)/24,s+=(ss-s)/4,ss+=(z-s)/6):(s=0,ss=0,zz=0),zz+=(s-zz)/16,s-zz",
		"starred": 2
	}, {
		"author": "absolute197",
		"children": [{
			"name": "better vibrato",
			"url": "https://www.reddit.com/r/bytebeat/comments/14dl95n/comment/joqimtv/?utm_source=reddit&utm_medium=web2x&context=3",
			"date": "2023-06-19",
			"sampleRate": 32000,
			"codeOriginal": "a=63+sin(t/6e3)*64,t+a&64"
		}, {
			"name": "Powerful Death",
			"url": "https://www.reddit.com/r/bytebeat/comments/14e3b0b/full_524c_charcodeat_song/",
			"date": "2023-06-20",
			"sampleRate": 40000,
			"codeOriginal": [
				"u=(t<<3)/'aXjH'.charCodeAt(t>>16&3)/4,",
				"((((t<<4)/\"MMa+MMa+MMa MMa \".charCodeAt(t>>13&15)|t>>13|t>>9)&31)+",
				"(((t*4)/\"17AW\".charCodeAt(t>>16&3)|(t>>9&23))&31)*'01'[t>>18&1]+",
				"(((64&u*16)+(64&u*32)+(64&u*48))*(-t>>8&255)*(-t>>8&127)/131072)*'1011'[t>>19&3]+",
				"(((t<<5)/\"039`&++$\".charCodeAt(7&t>>15)|(-t>>12&26)|(-t>>9&42)^(t>>9&31))&63)+",
				"(t>784553?((((sin(t/7^t/6)*(-t>>10&15))+(random()*(-t>>8&31))+(1.3*random()*(-t>>9&29)*(t>>7&63)/32)+(sin(t/5|t/7)*(-t>>[9,10][t>>15&1]&31))+(4e5/(t&[16383,32767][t>>14&1])&127))/1.5)):0))/1.2"
			],
			"codeMinified": "u=(t<<3)/'aXjH'.charCodeAt(t>>16&3)/4,((((t<<4)/'MMa+MMa+MMa MMa '.charCodeAt(t>>13&15)|t>>13|t>>9)&31)+((4*t/'17AW'.charCodeAt(t>>16&3)|t>>9&23)&31)*'01'[t>>18&1]+((64&16*u)+(64&32*u)+(64&48*u))*(-t>>8&255)*(-t>>8&127)/131072*'1011'[t>>19&3]+(((t<<5)/'039`&++$'.charCodeAt(7&t>>15)|-t>>12&26|-t>>9&42^t>>9&31)&63)+(784553<t?(sin(t/7^t/6)*(-t>>10&15)+random()*(-t>>8&31)+1.3*random()*(-t>>9&29)*(t>>7&63)/32+sin(t/5|t/7)*(-t>>[9,10][t>>15&1]&31)+(4E5/(t&[16383,32767][t>>14&1])&127))/1.5:0))/1.2",
			"starred": 1
		}, {
			"name": "someone remix this",
			"url": "https://www.reddit.com/r/bytebeat/comments/14ypf7q/someone_remix_this/",
			"date": "2023-07-13",
			"sampleRate": 32000,
			"codeOriginal": "(t*2**([-5,2,3,5,7,0,-2,9,7,0,12,12,7,7,10,3][15&t/1.5>>12]/12)*2.08%256)*(-t/1.5>>7&31)/96+(t*2.08/(2**(t/1.5>>13&3))/8&31)",
			"codeMinified": "t*2**([-5,2,3,5,7,0,-2,9,7,0,12,12,7,7,10,3][15&t/1.5>>12]/12)*2.08%256*(-t/1.5>>7&31)/96+(2.08*t/2**(t/1.5>>13&3)/8&31)"
		}, {
			"name": "Sawtooth Dreams",
			"url": "https://www.reddit.com/r/bytebeat/comments/15031q7/sawtooth_dreams_also_unfinished/",
			"date": "2023-07-15",
			"sampleRate": 60000,
			"codeOriginal": "q=()=>{for(i=0;i<(-t>>7&63);i++){i+=t/[3,2.4,3.6,4.8][3&t>>17]*2**((t>>13&3)*7/12)&127};return i*(-t>>9&15)**1.5},q()/128",
			"codeMinified": "q=()=>{for(i=0;i<(-t>>7&63);i++)i+=t/[3,2.4,3.6,4.8][3&t>>17]*2**(7*(t>>13&3)/12)&127;return i*(-t>>9&15)**1.5},q()/128"
		}, {
			"name": "e",
			"url": "https://www.reddit.com/r/bytebeat/comments/154bxq2/e/",
			"date": "2023-07-20",
			"sampleRate": 46000,
			"codeOriginal": [
				"x=t=>((t*1.22*1.0596**parseInt(['H0CA','H1DC'][1&t>>17][3&t>>13],36)&128)*(-t>>8&31)/16),",
				"((x(t)/4+x(t-(t>>9&255))/4)+x(t-12288)/8+x(t-24888)/8+random()*(-t>>7&63)+sin(sqrt(t%16384)*3)*32)/3+64"
			],
			"codeMinified": "x=t=>(1.22*t*1.0596**parseInt(['H0CA','H1DC'][1&t>>17][3&t>>13],36)&128)*(-t>>8&31)/16,(x(t)/4+x(t-(t>>9&255))/4+x(t-12288)/8+x(t-24888)/8+random()*(-t>>7&63)+32*sin(3*sqrt(t%16384)))/3+64"
		}, {
			"name": "Night Vision",
			"url": "https://battleofthebits.com/arena/Entry/Night+Vision/61150/",
			"date": "2023-08-03",
			"sampleRate": 36000,
			"codeOriginal": [
				"st=262144,",
				"",
				"r=function(t){return (((2**([-5,-8,-6,-3][3&t>>16]/12)*t*2**([0,5,8,12][3&t>>11]/12)&127)*(-t>>7>>(3&t>>13)&31)**0.6/16)+63)/1.25},",
				"ti=function(a,b,c){return a*(b<t)*(c>t)},",
				"",
				"(ti(r(t)+r(t-12288)/3+r(t-24576)/6,0,st*16)+",
				"ti(random()*(-t>>9&31)*'01'[1&t>>14],st,st*14)+",
				"ti((t*sin(t>>2)&184)*(-t>>8&31)*'1011'[3&t>>13]/128,st*3,st*13)+",
				"ti(max(t>>7&t>>5&63,208*sin(sqrt(8*(t&[16383,[4095,8191][1&t>>15]][1&t>>14])))),st*4,st*11)/6+",
				"ti((sin(t/18|t/5^t/10)*(-t>>7&31)+12)*'0110'[3&t>>14]+0.5*(63&t>>(3&t>>10)*3*2**([-5,-8,-6,-3][3&t>>15]/12))*0.9+r(t/2),st*6,st*9)-12)/1.5"
			],
			"codeMinified": "st=262144,r=t=>((2**([-5,-8,-6,-3][3&t>>16]/12)*t*2**([0,5,8,12][3&t>>11]/12)&127)*(-t>>7>>(3&t>>13)&31)**.6/16+63)/1.25,ti=(a,b,c)=>a*(b<t)*(c>t),(ti(r(t)+r(t-12288)/3+r(t-24576)/6,0,16*st)+ti(random()*(-t>>9&31)*'01'[1&t>>14],st,14*st)+ti((t*sin(t>>2)&184)*(-t>>8&31)*'1011'[3&t>>13]/128,3*st,13*st)+ti(max(t>>7&t>>5&63,208*sin(sqrt(8*(t&[16383,[4095,8191][1&t>>15]][1&t>>14])))),4*st,11*st)/6+ti((sin(t/18|t/5^t/10)*(-t>>7&31)+12)*'0110'[3&t>>14]+.45*(63&t>>3*(3&t>>10)*2**([-5,-8,-6,-3][3&t>>15]/12))+r(t/2),6*st,9*st)-12)/1.5",
			"starred": 1
		}, {
			"name": "Square Techonology",
			"url": "https://battleofthebits.com/arena/Entry/Square+Techonology/61343/",
			"date": "2023-08-11",
			"sampleRate": 48000,
			"codeOriginal": [
				"F=T=>t/4*2**([8,5,1,3][3&t>>17]/12)*2**((1+([T&7,-T&7][1&t>>15]))*7/12)&128,q=((F(N=t>>13)/1.5)+(F(t>>12)/3)),r=t=>(2+(3&t>>10))*t*2**([0,-5,-1,2][3&t>>16]/12)/2&127,R=((r(t)+r(t-(([-t>>10,t>>10][1&t>>16])&63))/2)/2),",
				"",
				"Drum1=(sin(t>>2)*t&33)*(-t>>10&31)/16,",
				"Drum2=1.5*max(88,150*sin(sqrt(t&[16383,8191,16383,4095,8191,16383,8191,4095][7&t>>14]))),",
				"Drum3=(random()*(-t>>5&255)**2.91/131072)*'01110101'[7&t>>13],",
				"Drum4=((8e4/(t&8191)&127)+(4e4/(t&4095)&63))*'0010'[3&t>>13],",
				"",
				"mel=q+(R*(262144<t)),",
				"",
				"(((mel*(2621440>t)+",
				"11*((((([0,0,0,Drum4,Drum1+Drum3+Drum4,Drum2+Drum4,Drum1+Drum3+Drum4,Drum1+Drum2+Drum3+Drum4,Drum1+Drum2+Drum3,Drum1+Drum2][t>>18])))/2.4+30)/1.75+8&255)+(R*(2621440<t)*(3932160>t))+(q*(3407872>t))))/5+12)/1.2-52"
			],
			"codeMinified": "F=T=>t/4*2**([8,5,1,3][3&t>>17]/12)*2**(7*(1+[T&7,-T&7][1&t>>15])/12)&128,q=F(N=t>>13)/1.5+F(t>>12)/3,r=t=>(2+(3&t>>10))*t*2**([0,-5,-1,2][3&t>>16]/12)/2&127,R=(r(t)+r(t-([-t>>10,t>>10][1&t>>16]&63))/2)/2,Drum1=(sin(t>>2)*t&33)*(-t>>10&31)/16,Drum2=1.5*max(88,150*sin(sqrt(t&[16383,8191,16383,4095,8191,16383,8191,4095][7&t>>14]))),Drum3=random()*(-t>>5&255)**2.91/131072*'01110101'[7&t>>13],Drum4=((8E4/(t&8191)&127)+(4E4/(t&4095)&63))*'0010'[3&t>>13],mel=q+R*(t>262144),((mel*(t<2621440)+11*(([0,0,0,Drum4,Drum1+Drum3+Drum4,Drum2+Drum4,Drum1+Drum3+Drum4,Drum1+Drum2+Drum3+Drum4,Drum1+Drum2+Drum3,Drum1+Drum2][t>>18]/2.4+30)/1.75+8&255)+R*(t>2621440)*(3932160>t)+q*(t<3407872))/5+12)/1.2-52",
			"starred": 1
		}]
	}, {
		"author": "WilliamP692",
		"children": [{
			"name": "My Own Sierpinski harmony with kick and hihat",
			"url": "https://www.reddit.com/r/bytebeat/comments/14y3qtx/my_own_sierpinski_harmony_with_kick_and_hihat/",
			"date": "2023-07-13",
			"sampleRate": 48000,
			"codeOriginal": "t/=1.5,t>>=2,40+((10*t&t>>4|9*t&t>>7|6*t&t>>9|4*t&t>>10)&255)%256/3+40*sin(24*cbrt(t%4096))+(random()*([t,0,0,t,0,t,0,0,0,0,t,0,t,0,t,t][t>>10&15])&32)",
			"codeMinified": "t/=1.5,t>>=2,40+((10*t&t>>4|9*t&t>>7|6*t&t>>9|4*t&t>>10)&255)%256/3+40*sin(24*cbrt(t%4096))+(random()*[t,0,0,t,0,t,0,0,0,0,t,0,t,0,t,t][t>>10&15]&32)",
			"starred": 1
		}, {
			"name": "Synthesizer",
			"url": "https://www.reddit.com/r/bytebeat/comments/14yxiaj/synthesizer/",
			"date": "2023-07-14",
			"sampleRate": 32000,
			"codeOriginal": "a=t*[1,1.5,1,1.2,0,1.2,1.5,1.8][t>>13&7],a*.499%256/4+a%256/4+a*1.49%256/4+a*1.99%256/4"
		}, {
			"name": "Ryg Atari remix",
			"url": "https://www.reddit.com/r/bytebeat/comments/153bo5l/comment/jsim6cw/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "Eeepeeess",
				"name": "Ryg remised",
				"url": "https://www.reddit.com/r/bytebeat/comments/153bo5l/ryg_remised/"
			},
			"date": "2023-07-19",
			"sampleRate": 44100,
			"codeOriginal": "(t*((l=0xAFEDC320)>>((t>>12^(t>>12)-2)%11*t/64)&1)&&64)+(t*(l>>(t*'36364689'[t>>13&7]/96)&1)&&64)",
			"codeMinified": "(t*((l=0xAFEDC320)>>(t>>12^(t>>12)-2)%11*t/64&1)&&64)+(t*(l>>t*'36364689'[t>>13&7]/96&1)&&64)",
			"starred": 1
		}, {
			"name": "very cool remix of lhphr's pyramid dungeon",
			"url": "https://dollchan.net/btb/res/2628.html#2637",
			"remix": {
				"author": "lhphr",
				"name": "Pyramid Dungeon",
				"url": "https://dollchan.net/btb/res/44.html#69"
			},
			"date": "2023-11-13",
			"sampleRate": 32000,
			"codeOriginal": "(t%(t>>((a=t*2**([t>>13&5,7-(t>>13&5),7,4+3*(t>>17&2)][t>>16&3]/12))/8))||(a&-t>>6))%256/4+sign(sin(16*cbrt(t%[16384,16384,16384,16384,4096,8192,4096,8192][t>>14&7])))*32+32+(t*random()&-(x=t&131072?2:1)*t>>5)*!(x*t>>13&7)%256/4+((t*sin(t>>3)&-x*t>>5)*!(x*t>>13&3)*(x*t>>15&1)&255)/4+a*1.5%256/8+a/1.5%256/8",
			"codeMinified": "(t%(t>>(a=t*2**([t>>13&5,7-(t>>13&5),7,4+3*(t>>17&2)][t>>16&3]/12))/8)||a&-t>>6)%256/4+32*sign(sin(16*cbrt(t%(2<<+'22220101'[t>>14&7]+11))))+32+(t*random()&-(x=t&131072?2:1)*t>>5)*!(x*t>>13&7)%256/4+((t*sin(t>>3)&-x*t>>5)*!(x*t>>13&3)*(x*t>>15&1)&255)/4+1.5*a%256/8+a/1.5%256/8"
		}, {
			"name": "Sierpinski harmony but there's no numbers",
			"url": "https://dollchan.net/btb/res/2628.html#2649",
			"remix": {
				"author": "miiro",
				"name": "Sierpinski harmony",
				"url": "https://youtu.be/qlrs2Vorw2Y?t=2m14s"
			},
			"date": "2023-11-15",
			"codeOriginal": "x=t/t,z=x+x,(y=t/z)*(z*z*z+z)&y>>(z*z+z)|y*(z*z+z)&y/z>>(z*z+z)",
			"codeMinified": "x=t/t,z=x+x,(y=t/z)*(z*z*z+z)&y>>z*z+z|y*(z*z+z)&y/z>>z*z+z"
		}, {
			"name": "First remix of l(ast)",
			"url": "https://dollchan.net/btb/res/2628.html#2654",
			"remix": {
				"author": "getDolphinedLol",
				"name": "l(ast)",
				"url": "https://www.reddit.com/r/bytebeat/comments/10g2lh0/last/"
			},
			"date": "2023-11-15",
			"sampleRate": 44100,
			"codeOriginal": "z=t&1048576?2:1,x=x=>(x*t*[1,1.5,1.35,1.18,1,1.18,1.35,1.8][z*t>>14&7]/(a=[1.25,1.5,1.75,2][z*t>>18&3])/2&48),(x(1)+x(.75)+x(1.5)+x(1.01)+(4e5/(t%(32768/z))&64)+(t*random()|z*t>>7)*(z*t>>15&1)%256/4+t/a%256/2)/1.75",
			"codeMinified": "z=t&1048576?2:1,x=x=>x*t*[1,1.5,1.35,1.18,1,1.18,1.35,1.8][z*t>>14&7]/(a=[1.25,1.5,1.75,2][z*t>>18&3])/2&48,(x(1)+x(.75)+x(1.5)+x(1.01)+(4E5/(t%(32768/z))&64)+(t*random()|z*t>>7)*(z*t>>15&1)%256/4+t/a%256/2)/1.75",
			"starred": 1
		}, {
			"name": "Remix of \"Atari 2600-like tune\"",
			"url": "https://www.reddit.com/r/bytebeat/comments/14hybmh/comment/kdjywh7/?utm_source=reddit&utm_medium=web2x&context=3",
			"remix": {
				"author": "kOLbOSa_exe",
				"name": "Atari 2600-like tune",
				"url": "https://www.reddit.com/r/bytebeat/comments/14hybmh/atari_2600like_tune/"
			},
			"date": "2023-12-16",
			"sampleRate": 7500,
			"codeOriginal": "(0b010101101011011>>(t*1.06**[0,2,-1,0][t>>15&3]/\"97976565\"[(t>>10)%8]%15)&1)*64+(t*(t%9^t%11)&64)*(-t>>2&255)/256+(4e5/(t&4095)&64)+((t>>1)*(t>>4&-t>>6)&32)*2*(-t>>9&1)"
		}]
	}, {
		"author": "Eeepeeess",
		"children": [{
			"name": "THE DANGER ZONE REMIX",
			"url": "https://www.reddit.com/r/bytebeat/comments/14zxntu/the_danger_zone_remix/",
			"remix": {
				"author": "getDolphinedLol",
				"name": "the danger zone",
				"url": "https://www.reddit.com/r/bytebeat/comments/s0xhgq/the_danger_zone/"
			},
			"date": "2023-07-15",
			"sampleRate": 48000,
			"codeOriginal": "(([1,.5,1,1.2,1,.5,1,.9,1,.5,1,1.2,4,3.5,4,3][(t>>13)%16]*t&128)/2+(3e5/(t&32767)&96)+(3e6/(t+32768&65535)&96)+random()*(t>>14&1)*64*1.0001**(-t%16384))/1.5"
		}, {
			"name": "Ryg remised",
			"url": "https://www.reddit.com/r/bytebeat/comments/153bo5l/ryg_remised/",
			"remix": {
				"author": "ryg",
				"name": "a new industrial chiptune",
				"url": "http://www.pouet.net/topic.php?which=8357&page=11#c389005"
			},
			"date": "2023-07-19",
			"sampleRate": 44100,
			"codeOriginal": "a=((t>>12^(t>>12)-2)%11*t/2),(sin(a*PI/256+sin(a*PI/64))*32*(-t>>5&255)>>8)+32+(random()*25*(-t>>5&255)>>8)+sin(4e3/(t/1.5&16383))*32+32+(3e6/(t+16384&32767)&64)/3+(t*'36364689'[t>>13&7]/12/4&32)",
			"codeMinified": "a=(t>>12^(t>>12)-2)%11*t/2,(32*sin(a*PI/256+sin(a*PI/64))*(-t>>5&255)>>8)+32+(25*random()*(-t>>5&255)>>8)+32*sin(4E3/(t/1.5&16383))+32+(3E6/(t+16384&32767)&64)/3+(t*'36364689'[t>>13&7]/12/4&32)"
		}]
	}, {
		"author": "IncreaseRegular",
		"name": "Shimmer surfer 2",
		"url": "https://www.reddit.com/r/bytebeat/comments/155b6mj/shimmer_surfer_2/",
		"remix": {
			"author": "Shimmer Surfer",
			"url": "https://www.reddit.com/r/bytebeat/comments/153h95z/shimmer_surfer/"
		},
		"date": "2023-07-21",
		"codeOriginal": "a=(0.25*t*[1,2][t>>11&1])*'4567'[t>>13&3]&64,b=6*t*(t>>11&t>>13)%256*(-t&2047)/4E3,c=(t*[2,random(),4,random()][t>>12&3]&128)%256*(-t&4095/'21'[t>>12&1])/[2000,4000][t>>12&1],a+b+c",
		"codeMinified": "a=t/4*[1,2][t>>11&1]*'4567'[t>>13&3]&64,b=6*t*(t>>11&t>>13)%256*(-t&2047)/4E3,c=(t*[2,random(),4,random()][t>>12&3]&128)%256*(-t&4095/'21'[t>>12&1])/[2E3,4E3][t>>12&1],a+b+c"
	}, {
		"author": "Cattoadishere",
		"children": [{
			"name": "$ine $tabilizer Ꜧardcore",
			"url": "https://www.reddit.com/r/bytebeat/comments/1561h2y/ine_tabilizer_%EA%9C%A7ardcore_i_guess/",
			"remix": {
				"author": "lhphr",
				"name": "$ine $tabilizer",
				"url": "https://dollchan.net/btb/res/44.html#66"
			},
			"date": "2023-07-22",
			"sampleRate": 48000,
			"codeOriginal": [
				"D=t/(b=t&t>>12),f=(a,c)=>32*sin(b--%2**c*D/2**a)|0,",
				"max(min(255.9,((f(5,4)+f(9,6)+f(12,8)+f(14,9))/1.5+128+",
				"sin(sqrt((t%2**[14,14,14,14,14,14,14,13,14,14,14,14,14,14,13,12][(t>>14)%16])*8))*32)+((t/4*(2+(t>>17&1))%256/3+t/3*(2+(t>>17&1))%256/3+t/8*(2+(t>>17&1))%256/3)%256*(256-(t>>8)%256)/256)/2),0.1)"
			],
			"codeMinified": "D=t/(b=t&t>>12),f=(a,c)=>32*sin(b--%2**c*D/2**a)|0,max(min(255.9,(f(5,4)+f(9,6)+f(12,8)+f(14,9))/1.5+128+32*sin(sqrt(t%2**([14,14,14,14,14,14,14,13,14,14,14,14,14,14,13,12][(t>>14)%16])*8))+(t/4*(2+(t>>17&1))%256/3+t/3*(2+(t>>17&1))%256/3+t/8*(2+(t>>17&1))%256/3)%256*(256-(t>>8)%256)/256/2),.1)"
		}, {
			"name": "pls remix lol",
			"url": "https://www.reddit.com/r/bytebeat/comments/157w8bu/pls_remix_lol/",
			"date": "2023-07-24",
			"mode": "Signed Bytebeat",
			"sampleRate": 44100,
			"codeOriginal": [
				"t/=1.4,",
				"bass = (ptc) => sin(t*ptc*2**(([",
				"1,13,1,13,1,13,1,13,",
				"-1,11,-1,11,-1,11,-1,11,",
				"-3,9,-3,9,-3,9,-3,9,",
				"-4,8,-4,8,0,12,0,12",
				"][(t>>13)%32]+0.5)/12)/128*PI)*32,",
				"sin(t*2**(([",
				"1,3,5,6,8,6,5,3,1,3,5,6,8,6,5,3,",
				"-1,3,5,6,8,6,5,3,-1,3,5,6,8,6,5,3,",
				"-3,3,5,6,8,6,5,3,-3,3,5,6,8,6,5,3,",
				"-4,3,5,6,8,6,5,3,0,3,5,6,8,6,5,3",
				"][(t>>12)%64]+0.5)/12)/64*PI)*64%256*(256-(t>>4)%256)/256+",
				"(bass(0.501)%bass(0.5))%256*(384-(t>>5)%256)/208"
			],
			"codeMinified": "t/=1.4,bass=p=>32*sin(t*p*2**(([1,13,1,13,1,13,1,13,-1,11,-1,11,-1,11,-1,11,-3,9,-3,9,-3,9,-3,9,-4,8,-4,8,0,12,0,12][(t>>13)%32]+.5)/12)/128*PI),64*sin(t*2**(([1,3,5,6,8,6,5,3,1,3,5,6,8,6,5,3,-1,3,5,6,8,6,5,3,-1,3,5,6,8,6,5,3,-3,3,5,6,8,6,5,3,-3,3,5,6,8,6,5,3,-4,3,5,6,8,6,5,3,0,3,5,6,8,6,5,3][(t>>12)%64]+.5)/12)/64*PI)%256*(256-(t>>4)%256)/256+bass(.501)%bass(.5)%256*(384-(t>>5)%256)/208"
		}]
	}, {
		"author": "bytebeat8khz",
		"children": [{
			"name": "Hard Way",
			"url": "https://www.reddit.com/r/bytebeat/comments/1563pem/hard_way/",
			"date": "2023-07-22",
			"sampleRate": 22050,
			"codeOriginal": "t*2**((t>>15&7^1|t>>14&3^2)/12)*(1+(t>>11&3))|t>>((t>>15&3)==2?6:t>>15&3?4:5)"
		}, {
			"name": "Tim Ave Music",
			"url": "https://www.reddit.com/r/bytebeat/comments/157z17n/tim_ave_music/",
			"date": "2023-07-24",
			"codeOriginal": "(t*(t>>12&13^2|t>>10&9)|t>>2)|3e4/(t%4096)",
			"codeMinified": "t*(t>>12&13^2|t>>10&9)|t>>2|3E4/(t%4096)"
		}]
	}, {
		"author": "Spimfurt",
		"name": "mini drums at your disposal",
		"url": "https://dollchan.net/btb/res/3.html#1799",
		"date": "2023-08-03",
		"sampleRate": 16800,
		"codeOriginal": [
			"//bd    tone                        << seq <<          seq speed       vol",
			"(((0x480%(t&2047)&99)*((0b01000001000000010000000100000001>>(t>>11))&1))/3+",
			"//hh",
			"((t%25^t%214)&28)*((0b01010101110101010101010101010101>>(t>>11))&1)/8+",
			"//sd",
			"((t%81^t%104)&64)*((0b10010000000100000001000000010000>>(t>>11))&1))*6/",
			"//common envelope",
			"(1+(t>>7&15))"
		],
		"codeMinified": "6*((1152%(t&2047)&99)*(0b01000001000000010000000100000001>>(t>>11)&1)/3+((t%25^t%214)&28)*(0b01010101110101010101010101010101>>(t>>11)&1)/8+((t%81^t%104)&64)*(0b10010000000100000001000000010000>>(t>>11)&1))/(1+(t>>7&15))",
		"starred": 1
	}, {
		"author": "orion_aboy",
		"children": [{
			"name": "zigzag",
			"description": "Set \"Diagram\" mode and zoom to 2(-8).",
			"url": "https://www.reddit.com/r/bytebeat/comments/16m2ia8/zigzag/",
			"date": "2023-09-18",
			"sampleRate": 48000,
			"drawing": { "mode": "Diagram", "scale": 8 },
			"codeOriginal": [
				"height=256,",
				"",
				"main=(x,y)=>{",
				"  let zigzag = x*2%512;",
				"  zigzag = min(zigzag, 511-zigzag);",
				"  return abs(zigzag-y)<10?255:0;",
				"},",
				"",
				"main((t/height)%(height*256*4),255-t*(256/height)%256)"
			],
			"codeMinified": "height=256,x=t/height%(1024*height),y=255-256/height*t%256,z=2*x%512,z=min(z,511-z),abs(z-y)<10?255:0"
		}, {
			"name": "samplerate detector",
			"url": "https://www.reddit.com/r/bytebeat/comments/18w4gzw/song_chooser/",
			"date": "2024-01-01",
			"sampleRate": 100000,
			"codeOriginal": [
				"sr=100000,",
				"t||(realt=0),realt++,(()=>{throw floor(sr*realt/t)})()"
			],
			"codeMinified": "sr=1E5,t||(realt=0),realt++,(()=>{throw floor(sr*realt/t)})()",
			"starred": 2
		}, {
			"name": "song chooser",
			"description": "Detect your samplerate with \"samplerate detector\", then put it into sr and the sample rate part (Important! It will not work otherwise)",
			"url": "https://www.reddit.com/r/bytebeat/comments/18w4gzw/song_chooser/",
			"date": "2024-01-01",
			"sampleRate": 44100,
			"codeOriginal": "sr=44100,t||(oldt=0,realt=0,olddiff=0,song=0),songNames=[\"42 melody\",\"sierpenski harmony\",\"street surfer\"],songCode=[(t)=>(t*(42&t>>10)),(t)=>(t&t>>8),(t)=>(t&4096?t/2*(t^t%255)|t>>5:t/8|(t&8192?4*t:t))],difference=t-oldt,oldt=t,difference,realt++,sign(difference)!=sign(olddiff)?(song+=sign(difference),realt=0):difference/olddiff==2?(song+=sign(difference),realt=0):0,olddiff=difference,song=min(songCode.length-1,max(0,song)),realt%1024?songCode[song](floor(realt*8000/sr)):(()=>{throw songNames.map((a,b)=>((b==song?\"\\n>\\xa0\":\"\\n\\xa0\\xa0\")+a)).join(\"\")})()",
			"starred": 2
		}]
	}
]
