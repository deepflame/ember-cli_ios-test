# iOS-Test for Ember-cli

This is just a test repo for an issue I found with ember-cli and iOS.

## Issue

Build and run the app and open it. Both buttons will open a popup on a Desktop browser, on iOS the "Ember" button will not work.

You can also [test it yourself](http://bit.ly/1wE1XBW)

### Tested with:

__working__

- Chrome 38 OSX Yosemite
- Firefox 32 OSX Yosemite

__not working__

- iPad 2 iOS 8.1
- iPhone 5 iOS 7.1 (Simulator)
- iPhone 5s iOS 8.1 (Simulator)

## Solution

Already have the solution: install FastClick as described here:
http://stackoverflow.com/questions/25889152/how-to-install-fastclick-with-ember-cli

## License

MIT

