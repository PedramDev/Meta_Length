function MetaLength(InputId, Min, Max) {
    var InputHandler = document.getElementById(InputId);
    var new_node = document.createElement("div");
    new_node.value = InputHandler.value.length;
    new_node.id = InputId+'-progressWrapper';
    new_node.classList.add('progressWrapper');
    new_node.style.width = document.getElementById('myinput').offsetWidth + 'px';

    var innerSpan = document.createElement('span');
    new_node.append(innerSpan);

    InputHandler.parentNode.insertBefore(new_node, InputHandler.nextSibling);
    InputHandler.addEventListener('keyup',CheckLength);
    CheckLength();
    function CheckLength() {
        var x = InputHandler.value.length;
        var filled_percent = (100 / Max) * x;
        var node_width = new_node.style.width.substring(0,new_node.style.width.length-2);//remove 'px'
        
        if (Min > x) {
            document.documentElement.style.setProperty('--progressRullerBgColor', 'var(--progressRullerWarning)');
            innerSpan.style.width = filled_percent+'%';        
        }
        if (Max < x) {
            document.documentElement.style.setProperty('--progressRullerBgColor', 'var(--progressRullerDanger)');
        }
        if (Min <= x && x <= Max) {
            innerSpan.style.width = filled_percent+'%';        
            document.documentElement.style.setProperty('--progressRullerBgColor', 'var(--progressRullerSuccess)');
        }
        innerSpan.innerText=filled_percent+'%';
    }
}