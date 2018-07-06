let html = `
<div>
    <input type="text" placeholder="提示文字" value="" />
    <input type="password" />
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
$("#CUST_NAME").val("TouchUI")
`
module.exports = {
    html,
    javascript,
    css
}

