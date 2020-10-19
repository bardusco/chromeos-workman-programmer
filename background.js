var context_id = -1;

chrome.input.ime.onFocus.addListener(function(context) {
  context_id = context.contextID;
});

var shifted = false;

chrome.input.ime.onKeyEvent.addListener(
  function(engineID, keyData) {
    var handled = false;

    if (keyData.type == "keydown" && keyData.code == "CapsLock") {
        keyData.code = "Backspace";
        chrome.input.ime.sendKeyEvents({"contextID": context_id, "keyData": [keyData]});
        handled = true;
    }

    return handled;
});
