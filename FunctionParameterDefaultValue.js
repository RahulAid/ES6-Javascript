//Function parameter default value

function example(height = 50, width = 40) { 
    const newH = height * 10;
    const newW = width * 10;
    return newH + newW;
}

example(); // 900 (50*10 + 40*10)