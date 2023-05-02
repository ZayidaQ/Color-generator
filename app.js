let index =0;

function changeColors(){
    let colors = ['red', 'blue', 'yellow', 'pink', 'green', 'purple', 'orange']

    document.getElementsByTagName('body')[0].
    style.background = colors[index++];

    if(index > colors.length - 1)
}