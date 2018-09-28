# cordova-plugin

This is my personal [Apache Cordova](https://cordova.apache.org) custom plugin containing examples for Android and iOS.


## Getting started

Once you're familiar with that process, you may install this plugin with the [Cordova CLI](https://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html):

```
cordova plugin add https://github.com/PeiJueChen/cordova-plugin.git
```

## Usage

If the plugin was added to your Cordova (or Ionic) project, you may use it like that:

```
(<any>window).cordova.plugins.custom.openUrl((s)=> {
          console.log('openUrl success',s);
        },err=> {
          console.log('openUrl err',err);
        },{ url: "https://www.google.com/" })
```