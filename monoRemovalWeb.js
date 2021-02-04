let observer = new MutationObserver(callback);
let target = document.getElementsByClassName("layerContainer-yqaFcK")[1];
console.log(document.getElementsByClassName("layerContainer-yqaFcK"));
const config = {
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  };

function callback() {
    if(document.getElementById("user-context-invite-to-server")){
        document.getElementById("user-context-invite-to-server").remove();
    }
}

observer.observe(target, config);
