document.querySelector("#app").innerHTML=`${Math.random()}`,"serviceWorker"in navigator&&navigator.serviceWorker.register("./pw.js").then((e=>{console.log("service worker registered",e)})).catch((e=>console.log("service worker not registered",e)));