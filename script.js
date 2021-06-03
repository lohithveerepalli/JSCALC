var x = 0;
var y = 0;
var operation = "";
var dec = "";
var z = 0;

$(".display").text("0");

function appendNum(num, modifiedVar) {
    if (dec === ".")
    {
        console.log(modifiedVar += num/Math.pow(10, z));
    }
    else if (x >= 0)
    {
        modifiedVar = modifiedVar * 10 + num;
    }
    else 
    {
        modifiedVar = modifiedVar * 10 - num;
    }

    return modifiedVar;
}

//fix this 
function delNum(x, y) {
    if (operation === "")
    {
        if (x != 0)
        {
            console.log(x = (x - (x % 10))/10);
            return x;
        }
    }
    else 
    {
        if (x != 0)
        {
            console.log(y = (y - ( y % 10))/10);
            return y;
        }
    }
}

function display(x) {
    $(".display").text(x);
}

$(".plus").click(function() {
    operation = "+";
    dec = "";
    z = 0;
    display(x);
});

$(".minus").click(function() {
    operation = "-";
    dec = "";
    z = 0;
    display(x);
});

$(".x").click(function() {
    operation = "*";
    dec = "";
    z = 0;
    display(x);
});

$(".divide").click(function() {
    operation = "/";
    dec = "";
    z = 0;
    display(x);
});

//fix this
$(".posneg").click(function() {
    x = -x;
    display(x);
});

$(".decimal").click(function() {
    dec = ".";
    if (operation === "")
    {
        display(x + ".");
    }
    else
    {
        display(y + ".");
    }
});

//fix this
$(".del").click(function() {
    if (operation === "")
    {
        x = delNum(x,y);
        console.log(x);
        display(x);
    }
    else
    {
        y = delNum(x,y);
        display(y);
    }
});


$(".equals").click(function() {
    if (operation === "+")
    {
        x += y;
    }
    else if (operation === "-")
    {
        x -= y;
    }
    else if (operation === "/")
    {
        x /= y;
    }
    else if (operation === "*")
    {
        x *= y;
    }
    display(x);
    operation = "";
    y = 0;
});

$(".CE").click(function() {
    $(".display").text("0");
    x = 0;
    y = 0;
    operation = "";
    dec = "";
    z = 0;
});

//need to fix how it works after someone presses =
$(".clear").click(function() {
    if (operation === "")
    {
        x = 0;
        display(x);
    }
    else
    {
        y = 0;
        display(y);
    }
});

// number buttons
$(".one").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(1, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            console.log(z += 1);
        }
        y = appendNum(1,y);
        display(y);
    }

});
$(".two").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(2, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(2,y);
        display(y);
    }

});
$(".three").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(3, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(3,y);
        display(y);
    }

});
$(".four").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(4, x);
        display(x);
    }
    else
    {    
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(4,y);
        display(y);
    }

}); 
$(".five").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(5, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(5,y);
        display(y);
    }

});
$(".six").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(6, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(6,y);
        display(y);
    }

});
$(".seven").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(7, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(7,y);
        display(y);
    }

}); 
$(".eight").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(8, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(8,y);
        display(y);
    }

});
$(".nine").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(9, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(9,y);
        display(y);
    }

});
$(".zero").click(function() {
    if (operation === "")
    {
        if (dec === ".")
        {
            z += 1;
        }
        x = appendNum(0, x);
        display(x);
    }
    else
    {
        if (dec === ".")
        {
            z += 1;
        }
        y = appendNum(0,y);
        display(y);
    }

});