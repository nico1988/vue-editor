var html = `
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
        <div class="e_switch">
            <div class="e_switchOn"></div>
            <div class="e_switchOff"></div>
            <input type="hidden" id="mySwitch" />
        </div>       
</div>`
var css = ``
var Js = `<script>
window["mySwitch"] = new Wade.Switch("mySwitch",{
	switchOn:false,
	onValue:"on",
	offValue:"off"
});
`
export default {
    html,
    Js,
    css
}