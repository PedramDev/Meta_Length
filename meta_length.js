// Meta Length Progressbar
// Version: 1.2
// Author: Pedram Karimi
// Publish: 2019-08-12
// Latest Version URL: https://github.com/noonegandom/Meta_Length
function MetaLength(InputId, Min, Max) {
    var InputHandler = document.getElementById(InputId);
    var new_node = document.createElement("div");
    new_node.value = InputHandler.value.length;
    new_node.id = InputId+'-progressWrapper';
    new_node.classList.add('progressWrapper');
    new_node.style.width = InputHandler.offsetWidth + 'px';

    var innerSpan = document.createElement('span');
    new_node.append(innerSpan);

    InputHandler.parentNode.insertBefore(new_node, InputHandler.nextSibling);
    InputHandler.addEventListener('keyup',CheckLength);
    CheckLength();
    window.addEventListener('resize', function (e) {
        new_node.style.width = InputHandler.offsetWidth + 'px';
    });
    function CheckLength() {
        var x = InputHandler.value.length;
        var filled_percent = Math.ceil((100 / Max) * x);
        var node_width = new_node.style.width.substring(0,new_node.style.width.length-2);//remove 'px'
        
        if (Min > x) {
            innerSpan.style.backgroundColor = 'var(--progressRullerWarning)';
            innerSpan.style.width = filled_percent+'%';        
        }
        if (Max < x) {
            innerSpan.style.backgroundColor = 'var(--progressRullerDanger)';
        }
        if (Min <= x && x <= Max) {
            innerSpan.style.width = filled_percent+'%';        
            innerSpan.style.backgroundColor = 'var(--progressRullerSuccess)';
        }
        if (x > Max) {
            innerSpan.style.width = '100%';
        }
        innerSpan.innerText=filled_percent+'%';
    }
}
