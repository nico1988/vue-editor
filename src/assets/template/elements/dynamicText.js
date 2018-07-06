let html = `
<div>
    <span class="e_star e_star-3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>																																																																		
        <span></span>																																																																		
    </span>
    <span class="e_star e_star-3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>																																																																		
        <span></span>																																																																		
    </span>
    <span class="e_star e_star-3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>																																																																		
        <span></span>																																																																		
    </span>
    <span class="e_star e_star-3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>																																																																		
        <span></span>																																																																		
    </span>
    <div class="e_switch">
        <div class="e_switchOn"></div>
        <div class="e_switchOff"></div>
        <input type="hidden" id="mySwitch" />
    </div>
    <span class="e_label e_label-blue">æ ‡è®°</span>   
</div>`
let css = `body{
    background:red
}`
let javascript = `
window["mySwitch"] = new Wade.Switch("mySwitch",{
	switchOn:false,
	onValue:"on",
	offValue:"off"
});
`
module.exports = {
    html,
    javascript,
    css
}

