AFRAME.registerComponent("marker-handler", {
    init: async function() {
        this.el.addEventListener("markerFound",()=>{
            console.log("MARKER IS FOUND")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("MARKER IS LOST")
            this.handleMarkerLost()
        })

    },
    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="flex";
        var ratingButton=document.getElementById("order-button");
        var orderButton=document.getElementById("order-button");
        ratingButton.addEventListener("click", function(){
            swal({
                icon:"WARNING",
                title:"Order Toy",
                text:"Work in Progress"
            })
        })
        autoButton.addEventListener("click",function(){
            swal ({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for Ordering",
                text:"Your Order Will be Placed Soon! Don't Have A Good Day, Have A Great Day!"
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="none"
    }
})