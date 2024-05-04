const letVsVar = () => {
    var a = 5;
    let b = 10;
// a = 10, b =10 , b =20
    if(true) {
        var a = 10;
        let b = 20;
        // console.log(a);
        // console.log(b);
    }

    // console.log(a);
    // console.log(b);
    console.log(c);
    console.log(d);
    var c = 50;
    let d = 60;
}

letVsVar()