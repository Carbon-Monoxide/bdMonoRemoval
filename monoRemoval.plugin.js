/**
 * @name monoRemoval
 * @author Monoxideboi
 * @description Removes the stupid "invite to server" button on the context menu
 * @version 0.0.1
 * @authorId 375379813403328523
 * @authorLink https://twitter.com/monoxideboi
 * @website https://github.com/Carbon-Monoxide/bdMonoRemoval
 * @source https://github.com/Carbon-Monoxide/bdMonoRemoval/blob/main/monoRemoval.plugin.js
 */

module.exports = class MonoRemovalPlugin {
  load() {} // Optional function. Called when the plugin is loaded in to memory

  start() {} // Required function. Called when the plugin is activated (including after reloads)
  stop() {} // Required function. Called when the plugin is deactivated

  observer(changes) {
    // if (document.getElementById("user-context-invite-to-server")) {
    //     console.log("invite to server button detected", document.getElementById("user-context-invite-to-server"));
    //     let element = document.getElementById("user-context-invite-to-server");
    //     element.remove();
    // }
    if (
      document.getElementsByClassName(
        "layerContainer-yqaFcK da-layerContainer"
      )[0].innerHTML != ""
    ) {
      console.log(
        "invite to server button detected",
        document.getElementById("user-context-invite-to-server")
      );
      let element = document.getElementById("user-context-invite-to-server");
      element.remove();
    }
  } // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
};
