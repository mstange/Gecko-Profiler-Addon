"use strict";

// The SDK add-on will tell us about any important preferences that we need
// to migrate to WebExtension storage.
let port = browser.runtime.connect({ name: "sync-legacy-preferences" });

port.onMessage.addListener(msg => {
  if (msg) {
    browser.storage.local.set(msg);
  }
});

