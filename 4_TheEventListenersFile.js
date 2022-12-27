/*input for all 100 boxes are checked apparently even when you are like on box3
so need to maybe exit, if the number of boxes available meets the number of listeners?*/

/*because of the all listeners active and limiting error, maybe use if (typeof(box2) != "undefined") then the event listener */

/*bug (loop1) described below*/

console.log("file 4 - 100 active listeners");
function activateEventListener_asMany_f4() {
	console.log("file 4 - activate event listeners...");
    try {
        box1.addEventListener('input', function() { 
            console.log("input in box1");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+1,1);
        })
		
        box2.addEventListener('input', function() { 
            console.log("input in box2");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+2, 2);
        })

        box3.addEventListener('input', function() { 
            console.log("input in box3");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+3, 3);
        })


        box4.addEventListener('input', function() { 
            console.log("input in box4");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+4, 4);
        })

        box5.addEventListener('input', function() { 
            console.log("input in box5");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+5, 5);
        })
        box6.addEventListener('input', function() { 
            console.log("input in box6");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+6, 6);
        })
        box7.addEventListener('input', function() { 
            console.log("input in box7");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+7, 7);
        })
        box8.addEventListener('input', function() { 
            console.log("input in box8");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+8, 8);
        })
        box9.addEventListener('input', function() { 
            console.log("input in box9");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+9, 9);
        })
        box10.addEventListener('input', function() { 
            console.log("input in box10");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+10, 10);
        })
        box11.addEventListener('input', function() { 
            console.log("input in box11");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+11, 11);
        })
        box12.addEventListener('input', function() { 
            console.log("input in box12");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+12, 12);
        })
        box13.addEventListener('input', function() { 
            console.log("input in box13");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+13, 13);
        })
        box14.addEventListener('input', function() { 
            console.log("input in box14");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+14, 14);
        })
        box15.addEventListener('input', function() { 
            console.log("input in box15");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+15, 15);
        })
        box16.addEventListener('input', function() { 
            console.log("input in box16");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+16, 16);
        })
        box17.addEventListener('input', function() { 
            console.log("input in box17");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+17, 17);
        })
        box18.addEventListener('input', function() { 
            console.log("input in box18");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+18, 18);
        })
        box19.addEventListener('input', function() { 
            console.log("input in box19");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+19, 19);
        })
        box20.addEventListener('input', function() { 
            console.log("input in box20");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+20, 20);
        })
        box21.addEventListener('input', function() { 
            console.log("input in box21");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+21, 21);
        })
        box22.addEventListener('input', function() { 
            console.log("input in box22");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+22, 22);
        })
        box23.addEventListener('input', function() { 
            console.log("input in box23");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+23, 23);
        })
        box24.addEventListener('input', function() { 
            console.log("input in box24");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+24, 24);
        })
        box25.addEventListener('input', function() { 
            console.log("input in box25");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+25, 25);
        })
        box26.addEventListener('input', function() { 
            console.log("input in box26");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+26, 26);
        })
        box27.addEventListener('input', function() { 
            console.log("input in box27");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+27, 27);
        })
        box28.addEventListener('input', function() { 
            console.log("input in box28");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+28, 28);
        })
        box29.addEventListener('input', function() { 
            console.log("input in box29");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+29, 29);
        })
        box30.addEventListener('input', function() { 
            console.log("input in box30");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+30, 30);
        })
        box31.addEventListener('input', function() { 
            console.log("input in box31");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+31, 31);
        })
        box32.addEventListener('input', function() { 
            console.log("input in box32");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+32, 32);
        })
        box33.addEventListener('input', function() { 
            console.log("input in box33");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+33, 33);
        })
        box34.addEventListener('input', function() { 
            console.log("input in box34");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+34, 34);
        })
        box35.addEventListener('input', function() { 
            console.log("input in box35");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+35, 35);
        })
        box36.addEventListener('input', function() { 
            console.log("input in box36");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+36, 36);
        })
        box37.addEventListener('input', function() { 
            console.log("input in box37");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+37, 37);
        })
        box38.addEventListener('input', function() { 
            console.log("input in box38");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+38, 38);
        })
        box39.addEventListener('input', function() { 
            console.log("input in box39");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+39, 39);
        })
        box40.addEventListener('input', function() { 
            console.log("input in box40");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+40, 40);
        })
        box41.addEventListener('input', function() { 
            console.log("input in box41");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+41, 41);
        })
        box42.addEventListener('input', function() { 
            console.log("input in box42");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+42, 42);
        })
        box43.addEventListener('input', function() { 
            console.log("input in box43");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+43, 43);
        })
        box44.addEventListener('input', function() { 
            console.log("input in box44");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+44, 44);
        })
        box45.addEventListener('input', function() { 
            console.log("input in box45");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+45, 45);
        })
        box46.addEventListener('input', function() { 
            console.log("input in box46");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+46, 46);
        })
        box47.addEventListener('input', function() { 
            console.log("input in box47");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+47, 47);
        })
        box48.addEventListener('input', function() { 
            console.log("input in box48");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+48, 48);
        })
        box49.addEventListener('input', function() { 
            console.log("input in box49");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+49, 49);
        })
        box50.addEventListener('input', function() { 
            console.log("input in box50");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+50, 50);
        })
        box51.addEventListener('input', function() { 
            console.log("input in box51");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+51, 51);
        })
        box52.addEventListener('input', function() { 
            console.log("input in box52");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+52, 52);
        })
        box53.addEventListener('input', function() { 
            console.log("input in box53");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+53, 53);
        })
        box54.addEventListener('input', function() { 
            console.log("input in box54");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+54, 54);
        })
        box55.addEventListener('input', function() { 
            console.log("input in box55");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+55, 55);
        })
        box56.addEventListener('input', function() { 
            console.log("input in box56");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+56, 56);
        })
        box57.addEventListener('input', function() { 
            console.log("input in box57");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+57, 57);
        })
        box58.addEventListener('input', function() { 
            console.log("input in box58");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+58, 58);
        })
        box59.addEventListener('input', function() { 
            console.log("input in box59");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+59, 59);
        })
        box60.addEventListener('input', function() { 
            console.log("input in box60");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+60, 60);
        })
        box61.addEventListener('input', function() { 
            console.log("input in box61");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+61, 61);
        })
        box62.addEventListener('input', function() { 
            console.log("input in box62");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+62, 62);
        })
        box63.addEventListener('input', function() { 
            console.log("input in box63");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+63, 63);
        })
        box64.addEventListener('input', function() { 
            console.log("input in box64");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+64, 64);
        })
        box65.addEventListener('input', function() { 
            console.log("input in box65");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+65, 65);
        })
        box66.addEventListener('input', function() { 
            console.log("input in box66");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+66, 66);
        })
        box67.addEventListener('input', function() { 
            console.log("input in box67");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+67, 67);
        })
        box68.addEventListener('input', function() { 
            console.log("input in box68");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+68, 68);
        })
        box69.addEventListener('input', function() { 
            console.log("input in box69");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+69, 69);
        })
        box70.addEventListener('input', function() { 
            console.log("input in box70");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+70, 70);
        })
        box71.addEventListener('input', function() { 
            console.log("input in box71");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+71, 71);
        })
        box72.addEventListener('input', function() { 
            console.log("input in box72");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+72, 72);
        })
        box73.addEventListener('input', function() { 
            console.log("input in box73");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+73, 73);
        })
        box74.addEventListener('input', function() { 
            console.log("input in box74");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+74, 74);
        })
        box75.addEventListener('input', function() { 
            console.log("input in box75");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+75, 75);
        })
        box76.addEventListener('input', function() { 
            console.log("input in box76");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+76, 76);
        })
        box77.addEventListener('input', function() { 
            console.log("input in box77");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+77, 77);
        })
        box78.addEventListener('input', function() { 
            console.log("input in box78");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+78, 78);
        })
        box79.addEventListener('input', function() { 
            console.log("input in box79");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+79, 79);
        })
        box80.addEventListener('input', function() { 
            console.log("input in box80");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+80, 80);
        })
        box81.addEventListener('input', function() { 
            console.log("input in box81");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+81, 81);
        })
        box82.addEventListener('input', function() { 
            console.log("input in box82");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+82, 82);
        })
        box83.addEventListener('input', function() { 
            console.log("input in box83");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+83, 83);
        })
        box84.addEventListener('input', function() { 
            console.log("input in box84");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+84, 84);
        })
        box85.addEventListener('input', function() { 
            console.log("input in box85");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+85, 85);
        })
        box86.addEventListener('input', function() { 
            console.log("input in box86");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+86, 86);
        })
        box87.addEventListener('input', function() { 
            console.log("input in box87");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+87, 87);
        })
        box88.addEventListener('input', function() { 
            console.log("input in box88");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+88, 88);
        })
        box89.addEventListener('input', function() { 
            console.log("input in box89");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+89, 89);
        })
        box90.addEventListener('input', function() { 
            console.log("input in box90");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+90, 90);
        })
        box91.addEventListener('input', function() { 
            console.log("input in box91");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+91, 91);
        })
        box92.addEventListener('input', function() { 
            console.log("input in box92");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+92, 92);
        })
        box93.addEventListener('input', function() { 
            console.log("input in box93");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+93, 93);
        })
        box94.addEventListener('input', function() { 
            console.log("input in box94");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+94, 94);
        })
        box95.addEventListener('input', function() { 
            console.log("input in box95");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+95, 95);
        })
        box96.addEventListener('input', function() { 
            console.log("input in box96");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+96, 96);
        })
        box97.addEventListener('input', function() { 
            console.log("input in box97");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+97, 97);
        })
        box98.addEventListener('input', function() { 
            console.log("input in box98");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+98, 98);
        })
        box99.addEventListener('input', function() { 
            console.log("input in box99");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+99, 99);
        })
        box100.addEventListener('input', function() { 
            console.log("input in box100");
            takeHTML_fromInputBox_and_updateTheInteractionBox(templateForBoxName+100, 100);
        })
	} catch (e) {
		err = e;
    }
	/*bug (loop1): when input is added to just one box, it says in the console, a 100 times that there is an input
	on eg. box1 if all 100 event listeners are there. An error like this sort. Check if you can improve */

	console.log ("file 4 - created event listeners - any error? : " + err);
	console.log ("file 4 - note: apparently try catch will stop at first error it catches, so eg. if you see 'box2' not available, then it means it hasn't got to check that box3 exists or not");
}


activateEventListener_asMany_f4();
