function myFunc()
{
	let logon=document.logon;
	for(var i=0; i<3; i++)
	{
		if(logon.user.value=="sampleusername" && logon.pass.value=="123456789")
		{
			return true;
			break;
		}
	}
	alert("Invalid Username or Password");
	location.reload();
	return false;
}

function validateform()
{
	let x=document.reg.emailad.value; 
	let atposition=x.indexOf("@"); 
	let dotposition=x.lastIndexOf("."); 
	let w=document.reg.usern.value;
	let length=document.reg.passw.value.length;
	let cpass=document.reg.cpass.value;
	let passw=document.reg.passw.value;
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
	{
		//alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition); 
		document.getElementById("emailocation").innerHTML="Please enter a valid email address";
	}
	else{
		document.getElementById("emailocation").innerHTML="";
	}
	
	if(length<6)
	{
		document.getElementById("passlocation").innerHTML="Password must be 6 characters or more";
	}
	else{
		document.getElementById("passlocation").innerHTML="";
	}

	if(w==0)
	{
		document.getElementById("userlocation").innerHTML="Please enter your username"; 
	}
	else{
		document.getElementById("userlocation").innerHTML="";
	}

	if(cpass!=passw)
	{
		document.getElementById("cpasslocation").innerHTML="Passwords doesn't match"; 
	}
	else{
		document.getElementById("cpasslocation").innerHTML="";
	}	

	if(length>6 && w!=0 && atposition>1 && dotposition>atposition+2 && dotposition+2<=x.length && cpass==passw)
	{
		alert("You are now registered!");
		location.reload();
	}
}

document.addEventListener("click",addtocart)
function addtocart(price)
{
	let totalprice;
	let totalorder=0;



//PIATTOS BIG
let c0;
	if(document.shopping.piattosb.checked==true)
	{
	c0=parseFloat(35.50);
	totalorder++;
	}
	else
	{
	c0=parseFloat(0);
	}
let a=document.shopping.quantity.value;
	if(a=="2") 
	{
		c0=c0*2;
	}
	if(a=="3") 
	{
		c0=c0*3;
	}
	if(a=="4") 
	{
		c0=c0*4;
	}
	if(a=="5") 
	{
		c0=c0*5;
	}
//END OF FIRST ITEM




//PIATTOS SMOL
let c1;
	if(document.shopping.piatosmol.checked==true)
	{
	c1=parseFloat(15.00);
	totalorder++;
	}
	else
	{
	c1=parseFloat(0);
	}
let f=document.shopping.quantity1.value;
	if(f=="2") 
	{
		c1=c1*2;
	}
	if(f=="3") 
	{
		c1=c1*3;
	}
	if(f=="4") 
	{
		c1=c1*4;
	}
	if(f=="5") 
	{
		c1=c1*5;
	}





//VCUT BIG
let c2;
	if(document.shopping.vcutb.checked==true)
	{
	c2=parseFloat(35.50);
	totalorder++;
	}
	else
	{
	c2=parseFloat(0);
	}
let b=document.shopping.quantity2.value;
	if(b=="2") 
	{
		c2=c2*2;
	}
	if(b=="3") 
	{
		c2=c2*3;
	}
	if(b=="4") 
	{
		c2=c2*4;
	}
	if(b=="5") 
	{
		c2=c2*5;
	}
//END OF SECOND ITEM





//VCUT SMOL
let c3;
	if(document.shopping.vcutsmol.checked==true)
	{
	c3=parseFloat(14.50);
	totalorder++;
	}
	else
	{
	c3=parseFloat(0);
	}
let c=document.shopping.quantity3.value;
	if(c=="2") 
	{
		c3=c3*2;
	}
	if(c=="3") 
	{
		c3=c3*3;
	}
	if(c=="4") 
	{
		c3=c3*4;
	}
	if(c=="5") 
	{
		c3=c3*5;
	}
//END OF THIRD ITEM




//NOVA SMOL
let c4;
	if(document.shopping.nova.checked==true)
	{
	c4=parseFloat(15.00);
	totalorder++;
	}
	else
	{
	c4=parseFloat(0);
	}
let quantity4
let d=document.shopping.quantity4.value;
	if(d=="2") 
	{
		c4=c4*2;
	}
	if(d=="3") 
	{
		c4=c4*3;
	}
	if(d=="4") 
	{
		c4=c4*4;
	}
	if(d=="5") 
	{
		c4=c4*5;
	}




//PIATTOS ROADHOUSE
let c5;
	if(document.shopping.piatosbbq.checked==true)
	{
	c5=parseFloat(15.00);
	totalorder++;
	}
	else
	{
	c5=parseFloat(0);
	}
let e=document.shopping.quantity5.value;
	if(e=="2") 
	{
		c5=c5*2;
	}
	if(e=="3") 
	{
		c5=c5*3;
	}
	if(e=="4") 
	{
		c5=c5*4;
	}
	if(e=="5") 
	{
		c5=c5*5;
	}




//PIATTOS SOUR SMOL
let c6;
	if(document.shopping.piatosour.checked==true)
	{
	c6=parseFloat(15.00);
	totalorder++;
	}
	else
	{
	c6=parseFloat(0);
	}
let g=document.shopping.quantity6.value;
	if(g=="2") 
	{
		c6=c6*2;
	}
	if(g=="3") 
	{
		c6=c6*3;
	}
	if(g=="4") 
	{
		c6=c6*4;
	}
	if(g=="5") 
	{
		c6=c6*5;
	}




//ENERGEN CHOCO
let c7;
	if(document.shopping.energenc.checked==true)
	{
	c7=parseFloat(11.25);
	totalorder++;
	}
	else
	{
	c7=parseFloat(0);
	}
let h=document.shopping.quantity7.value;
	if(h=="2") 
	{
		c7=c7*2;
	}
	if(h=="3") 
	{
		c7=c7*3;
	}
	if(h=="4") 
	{
		c7=c7*4;
	}
	if(h=="5") 
	{
		c7=c7*5;
	}




// ENERGEN VANILLA
let c8;
	if(document.shopping.energenv.checked==true)
	{
	c8=parseFloat(11.25);
	totalorder++;
	}
	else
	{
	c8=parseFloat(0);
	}
let i=document.shopping.quantity8.value;
	if(i=="2") 
	{
		c8=c8*2;
	}
	if(i=="3") 
	{
		c8=c8*3;
	}
	if(i=="4") 
	{
		c8=c8*4;
	}
	if(i=="5") 
	{
		c8=c8*5;
	}




// MILO
let c9;
	if(document.shopping.milo.checked==true)
	{
	c9=parseFloat(9.50);
	totalorder++;
	}
	else
	{
	c9=parseFloat(0);
	}
let j=document.shopping.quantity9.value;
	if(j=="2") 
	{
		c9=c9*2;
	}
	if(j=="3") 
	{
		c9=c9*3;
	}
	if(j=="4") 
	{
		c9=c9*4;
	}
	if(j=="5") 
	{
		c9=c9*5;
	}




//BEARBRAND
let c10;
	if(document.shopping.bb.checked==true)
	{
	c10=parseFloat(13.25);
	totalorder++;
	}
	else
	{
	c10=parseFloat(0);
	}
let k=document.shopping.quantity10.value;
	if(k=="2") 
	{
		c10=c10*2;
	}
	if(k=="3") 
	{
		c10=c10*3;
	}
	if(k=="4") 
	{
		c10=c10*4;
	}
	if(k=="5") 
	{
		c10=c10*5;
	}




//BEARBRAND ADULT PLUS
let c11;
	if(document.shopping.bbadult.checked==true)
	{
	c11=parseFloat(19.00);
	totalorder++;
	}
	else
	{
	c11=parseFloat(0);
	}
let l=document.shopping.quantity11.value;
	if(l=="2") 
	{
		c11=c11*2;
	}
	if(l=="3") 
	{
		c11=c11*3;
	}
	if(l=="4") 
	{
		c11=c11*4;
	}
	if(l=="5") 
	{
		c11=c11*5;
	}




// PIATTOS SOURCREAM BIG
let c12;
	if(document.shopping.piatosourb.checked==true)
	{
	c12=parseFloat(35.50);
	totalorder++;
	}
	else
	{
	c12=parseFloat(0);
	}
let m=document.shopping.quantity12.value;
	if(m=="2") 
	{
		c12=c12*2;
	}
	if(m=="3") 
	{
		c12=c12*3;
	}
	if(m=="4") 
	{
		c12=c12*4;
	}
	if(m=="5") 
	{
		c12=c12*5;
	}




//BIRCH TREE
let c13;
	if(document.shopping.btree.checked==true)
	{
	c13=parseFloat(9.50);
	totalorder++;
	}
	else
	{
	c13=parseFloat(0);
	}
let n=document.shopping.quantity13.value;
	if(n=="2") 
	{
		c13=c13*2;
	}
	if(n=="3") 
	{
		c13=c13*3;
	}
	if(n=="4") 
	{
		c13=c13*4;
	}
	if(n=="5") 
	{
		c13=c13*5;
	}




//PANCIT CANTON KALAMANSI
let c14;
	if(document.shopping.kalamansi.checked==true)
	{
	c14=parseFloat(15.50);
	totalorder++;
	}
	else
	{
	c14=parseFloat(0);
	}
let o=document.shopping.quantity14.value;
	if(o=="2") 
	{
		c14=c14*2;
	}
	if(o=="3") 
	{
		c14=c14*3;
	}
	if(o=="4") 
	{
		c14=c14*4;
	}
	if(o=="5") 
	{
		c14=c14*5;
	}




//PANCIT CANTON ORIGINAL
let c15;
	if(document.shopping.original.checked==true)
	{
	c15=parseFloat(15.50);
	totalorder++;
	}
	else
	{
	c15=parseFloat(0);
	}
let p=document.shopping.quantity15.value;
	if(p=="2") 
	{
		c15=c15*2;
	}
	if(p=="3") 
	{
		c15=c15*3;
	}
	if(p=="4") 
	{
		c15=c15*4;
	}
	if(p=="5") 
	{
		c15=c15*5;
	}




//PANCIT CANTON SWEET & SPICY
let c16;
	if(document.shopping.sweet.checked==true)
	{
	c16=parseFloat(15.50);
	totalorder++;
	}
	else
	{
	c16=parseFloat(0);
	}
let q=document.shopping.quantity16.value;
	if(q=="2") 
	{
		c16=c16*2;
	}
	if(q=="3") 
	{
		c16=c16*3;
	}
	if(q=="4") 
	{
		c16=c16*4;
	}
	if(q=="5") 
	{
		c16=c16*5;
	}




//PANCIT CANTON XTRA HOT CHILI
let c17;
	if(document.shopping.spicy.checked==true)
	{
	c17=parseFloat(15.50);
	totalorder++;
	}
	else
	{
	c17=parseFloat(0);
	}
let r=document.shopping.quantity17.value;
	if(r=="2") 
	{
		c17=c17*2;
	}
	if(r=="3") 
	{
		c17=c17*3;
	}
	if(r=="4") 
	{
		c17=c17*4;
	}
	if(r=="5") 
	{
		c17=c17*5;
	}




// LUCKY ME BEEF
let c18;
	if(document.shopping.beef.checked==true)
	{
	c18=parseFloat(9.50);
	totalorder++;
	}
	else
	{
	c18=parseFloat(0);
	}
let s=document.shopping.quantity18.value;
	if(s=="2") 
	{
		c18=c18*2;
	}
	if(s=="3") 
	{
		c18=c18*3;
	}
	if(s=="4") 
	{
		c18=c18*4;
	}
	if(s=="5") 
	{
		c18=c18*5;
	}




//LUCKY ME CHICKEN
let c19;
	if(document.shopping.chicken.checked==true)
	{
	c19=parseFloat(9.50);
	totalorder++;
	}
	else
	{
	c19=parseFloat(0);
	}
let t=document.shopping.quantity19.value;
	if(t=="2") 
	{
		c19=c19*2;
	}
	if(t=="3") 
	{
		c19=c19*3;
	}
	if(t=="4") 
	{
		c19=c19*4;
	}
	if(t=="5") 
	{
		c19=c19*5;
	}




// EGGNOG
let c20;
	if(document.shopping.eggnog.checked==true)
	{
	c20=parseFloat(6.25);
	totalorder++;
	}
	else
	{
	c20=parseFloat(0);
	}
let u=document.shopping.quantity20.value;
	if(u=="2") 
	{
		c20=c20*2;
	}
	if(u=="3") 
	{
		c20=c20*3;
	}
	if(u=="4") 
	{
		c20=c20*4;
	}
	if(u=="5") 
	{
		c20=c20*5;
	}




// BREAD STIX
let c21;
	if(document.shopping.stix.checked==true)
	{
	c21=parseFloat(6.50);
	totalorder++;
	}
	else
	{
	c21=parseFloat(0);
	}
let v=document.shopping.quantity21.value;
	if(v=="2") 
	{
		c21=c21*2;
	}
	if(v=="3") 
	{
		c21=c21*3;
	}
	if(v=="4") 
	{
		c21=c21*4;
	}
	if(v=="5") 
	{
		c21=c21*5;
	}




// FITA
let c22;
	if(document.shopping.fita.checked==true)
	{
	c22=parseFloat(6.00);
	totalorder++;
	}
	else
	{
	c22=parseFloat(0);
	}
let w=document.shopping.quantity22.value;
	if(w=="2") 
	{
		c22=c22*2;
	}
	if(w=="3") 
	{
		c22=c22*3;
	}
	if(w=="4") 
	{
		c22=c22*4;
	}
	if(w=="5") 
	{
		c22=c22*5;
	}




// CREAM O CHOCO
let c23;
	if(document.shopping.creamoc.checked==true)
	{
	c23=parseFloat(7.50);
	totalorder++;
	}
	else
	{
	c23=parseFloat(0);
	}
let x=document.shopping.quantity23.value;
	if(x=="2") 
	{
		c23=c23*2;
	}
	if(x=="3") 
	{
		c23=c23*3;
	}
	if(x=="4") 
	{
		c23=c23*4;
	}
	if(x=="5") 
	{
		c23=c23*5;
	}




// CREAM O VANILLA
let c24;
	if(document.shopping.creamov.checked==true)
	{
	c24=parseFloat(7.50);
	totalorder++;
	}
	else
	{
	c24=parseFloat(0);
	}
let y=document.shopping.quantity24.value;
	if(y=="2") 
	{
		c24=c24*2;
	}
	if(y=="3") 
	{
		c24=c24*3;
	}
	if(y=="4") 
	{
		c24=c24*4;
	}
	if(y=="5") 
	{
		c24=c24*5;
	}




// COKE
let c25;
	if(document.shopping.coke.checked==true)
	{
	c25=parseFloat(75.00);
	totalorder++;
	}
	else
	{
	c25=parseFloat(0);
	}
let z=document.shopping.quantity25.value;
	if(z=="2") 
	{
		c25=c25*2;
	}
	if(z=="3") 
	{
		c25=c25*3;
	}
	if(z=="4") 
	{
		c25=c25*4;
	}
	if(z=="5") 
	{
		c25=c25*5;
	}




// SPRITE
let c26;
	if(document.shopping.sprite.checked==true)
	{
	c26=parseFloat(75.00);
	totalorder++;
	}
	else
	{
	c26=parseFloat(0);
	}
let aa=document.shopping.quantity26.value;
	if(aa=="2") 
	{
		c26=c26*2;
	}
	if(aa=="3") 
	{
		c26=c26*3;
	}
	if(aa=="4") 
	{
		c26=c26*4;
	}
	if(aa=="5") 
	{
		c26=c26*5;
	}




// ROYAL
let c27;
	if(document.shopping.royal.checked==true)
	{
	c27=parseFloat(75.00);
	totalorder++;
	}
	else
	{
	c27=parseFloat(0);
	}
let ab=document.shopping.quantity27.value;
	if(ab=="2") 
	{
		c27=c27*2;
	}
	if(ab=="3") 
	{
		c27=c27*3;
	}
	if(ab=="4") 
	{
		c27=c27*4;
	}
	if(ab=="5") 
	{
		c27=c27*5;
	}




// RC
let c28;
	if(document.shopping.rc.checked==true)
	{
	c28=parseFloat(75.50);
	totalorder++;
	}
	else
	{
	c28=parseFloat(0);
	}
let ac=document.shopping.quantity28.value;
	if(ac=="2") 
	{
		c28=c28*2;
	}
	if(ac=="3") 
	{
		c28=c28*3;
	}
	if(ac=="4") 
	{
		c28=c28*4;
	}
	if(ac=="5") 
	{
		c28=c28*5;
	}




// PEPSI
let c29;
	if(document.shopping.pepsi.checked==true)
	{
	c29=parseFloat(76.25);
	totalorder++;
	}
	else
	{
	c29=parseFloat(0);
	}
let ad=document.shopping.quantity29.value;
	if(ad=="2") 
	{
		c29=c29*2;
	}
	if(ad=="3") 
	{
		c29=c29*3;
	}
	if(ad=="4") 
	{
		c29=c29*4;
	}
	if(ad=="5") 
	{
		c29=c29*5;
	}
	//total price equation
	totalprice=c0+c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+c11+c12+c13+c14+c15+c16+c17+c18+c19+c20+c21+c22+c23+c24+c25+c26+c27+c28+c29;

	document.getElementById("hello").innerHTML=
	("Total Price = ₱"+parseFloat(totalprice)+"<br>Number of item/s: "+parseInt(totalorder)+"<br>Shipping fee: ₱20");

	return totalprice;
	// MAX ITEMS = 30 // MAX PRICE1 = 746.25
}

function order()
{
	let address;
	let number;
	let name;
	if (addtocart()==0) {
		alert("You must have at least one (1) order:");
	}

	else {
		do{
		address=prompt("Please Enter your full Address:");
		}while(address == 0);
		
		do{
		number=prompt("Please Enter your contact number:");
		}while(number == 0);

		do{
		name=prompt("Please Enter your full name:");
		}while(name == 0);

		question=confirm("Do you want to make this order?");
		if(question)
		{
		alert("Your order has been made!\n\nFull name: "+(name)+"\nAddress: "+(address)+"\nContact number: "+(number)+"\nPrice: ₱"+(addtocart()+parseInt(20)));
		}
		else
		{
			addtocart();
		}
	}
}

function reset()
{
	location.reload();
}