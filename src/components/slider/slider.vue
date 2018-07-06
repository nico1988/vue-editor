<template>
<div class="container slider">
	<div id="accordian">
		<ul>
			<li v-for="(item,index) in slider" :key="index">
				<h3><span class="icon-dashboard">{{item.icon}}</span> {{item.name}}</h3>
				<ul>
					<li v-for="(subtitle,s) in item.subtitle" :key="s"
						:class="{active : active == subtitle.name}" 
						@click.stop="selectSubitem(item,subtitle)">
							<a href="javascript:;" >
								<span class="tab-link">{{subtitle.name}}</span>
							</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
import slider from '../js/slider.js'

var $ = require("jquery");
export default {
	mounted(){
		$(document).ready(function(){
			$("#accordian h3").click(function(){
				$("#accordian ul ul").slideUp(300);
				if(!$(this).next().is(":visible"))
				{
					$(this).next().slideDown(300);
				}
			});
			var searchField = $('.search');
			var searchInput = $("input[type='search']");
			var checkSearch = function(){
				var contents = searchInput.val();
				if(contents.length !== 0){
				searchField.addClass('full');
				} else {
				searchField.removeClass('full');
				}
			};
			$("input[type='search']").focus(function(){
				searchField.addClass('isActive');
			}).blur(function(){
				searchField.removeClass('isActive');
				checkSearch();
			});
		});
	},
	data(){
		return {
			slider: slider,
			active: ""
		}
	},
	methods:{
		selectFirstItem(item){
			this.$router.push({ path: `/${item.src}` })
		},
		selectSubitem(item,subitem){
			this.active = subitem.name
			this.$router.push({ path: `/${item.src}/${subitem.src}` })
		}
	}
}
</script>

<style lang="scss" scoped>
#accordian::-webkit-scrollbar{
    width: 6px;
}
#accordian::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px
}
#accordian:hover::-webkit-scrollbar-thumb{
    background: rgba(255, 255, 255, 0.4)
}
#accordian:hover::-webkit-scrollbar-track{
    background: hsla(0,0%,53%,.1)
}
#accordian {
    font-family:"Microsoft YaHei",Helvetia,"lucida Grande",Verdana,Arial;
	  position: absolute;
		z-index: 200;
    background: #004050;
    color: white;
    /*Some cool shadow and glow effect*/
    box-shadow: 
            0 5px 15px 1px rgba(0, 0, 0, 0.6), 
            0 0 200px 1px rgba(255, 255, 255, 0.5);
		border-right: 1px solid rgba(0,0,0,.07);
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
		padding-top: 60px;
    transition: transform .25s ease-out;
    z-index: 3;
}
#accordian h3 {
    font-size: 16px;
    line-height: 40px;
    padding: 0 10px;
    cursor: pointer;
    background: #003040; 
    background: linear-gradient(#003040, #002535);
}
#accordian h3:hover {
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.7);
}
#accordian h3 span {
    font-size: 16px;
    margin-right: 10px;
}
#accordian li {
    list-style-type: none;
}
#accordian ul ul li a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    line-height: 32px;
    display: block;
    padding: 0 15px;
    transition: all 0.15s;
}
#accordian ul ul li.active a, #accordian ul ul li a:hover {
    background: #003545;
    border-left: 5px solid lightgreen;
	span{
		color: lightgreen;
	}
}
#accordian ul ul {
    display: none;
}
#accordian li.active ul {
    display: block;
}

</style>