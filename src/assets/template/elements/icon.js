var html = 
`<div>
    <div class="c_title">
        <div class="text">icon</div>
    </div>
    <div class="e_switch">
        <div class="e_switchOn"></div>
        <div class="e_switchOff"></div>
        <input type="hidden" id="mySwitch" />
    </div>       
</div>`
var css = ``
var javascript = `
window["mySwitch"] = new Wade.Switch("mySwitch",{
	switchOn:false,
	onValue:"on",
	offValue:"off"
});
`
const icon = {
    html,
    javascript,
    css
}

module.exports = {
    icon
} 