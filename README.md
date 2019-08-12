# Meta_Length
# Hi
progressbar for meta with max and min with vanilla js<br />
if you want change colors use css root variables<br />
# Defaults:
:root{<br />
            --progressWrapperBg : hsl(0, 0%, 21%);<br />
            --progressWrapperHeight : 15px;<br />
            --progressRullerBgColor:hsl(348, 100%, 61%);<br />
            --progressRullerDanger:hsl(348, 100%, 61%);<br />
            --progressRullerWarning:hsl(48, 100%, 67%);<br />
            --progressRullerSuccess:hsl(141, 71%, 48%);<br />
            --progressFontSize:12px;<br />
            --progressTextAlign:center;<br />
            --progressTextColor:#000;<br />
        }<br />
# Usage:
     Template :
     MetaLength('InputId',MinimumLengthAsInteger,MaximumLengthAsInteger);
     MetaLength('InputId',5,20);
